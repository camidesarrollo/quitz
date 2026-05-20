"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, RotateCcw, Clock, Target, BookOpen } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { ScoreRing } from "./ScoreRing";
import { QuestionReview } from "./QuestionReview";
import { formatDuration } from "@/lib/utils";
import { isPassing } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";
import { getCourseById } from "@/lib/repositories/CourseRepository";
import type { QuizSession } from "@/types/quiz";

type ReviewFilter = "all" | "correct" | "incorrect";

interface ResultsViewProps {
  sessionId: string;
}

interface CategoryStat {
  id: string;
  name: string;
  correct: number;
  total: number;
  percentage: number;
}

function buildCategoryStats(session: QuizSession): CategoryStat[] {
  const course = getCourseById(session.config.courseId);
  if (!course) return [];

  // Accumulate per-category totals
  const map = new Map<string, { correct: number; total: number }>();
  session.questions.forEach((q, i) => {
    const catId = q.categoryId ?? "unknown";
    const entry = map.get(catId) ?? { correct: 0, total: 0 };
    entry.total++;
    if (session.answers[i]?.isCorrect) entry.correct++;
    map.set(catId, entry);
  });

  // Build result array using course category names, sorted worst-first
  const stats: CategoryStat[] = [];
  map.forEach((counts, catId) => {
    const category = course.categories.find((c) => c.id === catId);
    if (!category) return;
    const percentage = counts.total > 0 ? Math.round((counts.correct / counts.total) * 100) : 0;
    stats.push({ id: catId, name: category.name, ...counts, percentage });
  });

  return stats.sort((a, b) => a.percentage - b.percentage);
}

function categoryColor(pct: number) {
  if (pct >= 70) return "text-green-600 dark:text-green-400";
  if (pct >= 50) return "text-amber-500 dark:text-amber-400";
  return "text-red-500 dark:text-red-400";
}

function barColor(pct: number) {
  if (pct >= 70) return "bg-green-500";
  if (pct >= 50) return "bg-amber-400";
  return "bg-red-500";
}

export function ResultsView({ sessionId }: ResultsViewProps) {
  const router = useRouter();
  const { session, clearSession } = useQuizStore();
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>("all");

  useEffect(() => {
    if (!session || session.id !== sessionId) {
      router.replace("/");
    }
  }, [session, sessionId, router]);

  if (!session || session.id !== sessionId || session.status !== "completed") {
    return null;
  }

  const score = Object.values(session.answers).filter((a) => a.isCorrect).length;
  const total = session.questions.length;
  const incorrectCount = total - score;

  const filteredIndices = session.questions
    .map((_, i) => i)
    .filter((i) => {
      if (reviewFilter === "correct") return session.answers[i]?.isCorrect === true;
      if (reviewFilter === "incorrect") return session.answers[i]?.isCorrect === false;
      return true;
    });
  const percentage = Math.round((score / total) * 100);
  const duration = session.completedAt
    ? Math.round((session.completedAt - session.startedAt) / 1000)
    : 0;
  const passing = isPassing(percentage);
  const categoryStats = buildCategoryStats(session);

  function goHome() {
    clearSession();
    router.push("/");
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="w-full max-w-md"
      >
        {/* Score ring */}
        <div className="flex justify-center mb-6">
          <ScoreRing percentage={percentage} />
        </div>

        {/* Title */}
        <div className="text-center mb-6">
          <h1
            className={cn(
              "text-2xl font-bold mb-1",
              passing
                ? "text-green-600 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            )}
          >
            {passing ? "¡Aprobado!" : "Reprobado"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{session.config.label}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
            <Target size={18} className="text-indigo-500 mx-auto mb-1.5" />
            <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {score}/{total}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Correctas</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
            <Clock size={18} className="text-indigo-500 mx-auto mb-1.5" />
            <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {formatDuration(duration)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Tiempo</p>
          </div>
        </div>

        {/* Category breakdown */}
        {categoryStats.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-6">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BookOpen size={12} />
              Resultados por dominio
            </p>
            <div className="space-y-4">
              {categoryStats.map((cat, idx) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: idx * 0.06 }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                      {cat.name}
                    </span>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-xs text-slate-400 tabular-nums">
                        {cat.correct}/{cat.total}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-bold tabular-nums w-10 text-right",
                          categoryColor(cat.percentage)
                        )}
                      >
                        {cat.percentage}%
                      </span>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", barColor(cat.percentage))}
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.percentage}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.06 + 0.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Study tip */}
            {categoryStats[0].percentage < 70 && (
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
                Enfócate en{" "}
                <span className="font-semibold text-red-500 dark:text-red-400">
                  {categoryStats[0].name}
                </span>{" "}
                — es donde tuviste más errores.
              </p>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 mb-8">
          <button
            type="button"
            onClick={goHome}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-sm"
          >
            <Home size={15} />
            Inicio
          </button>
          <button
            type="button"
            onClick={goHome}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold transition-colors text-sm"
          >
            <RotateCcw size={15} />
            Nuevo quiz
          </button>
        </div>

        {/* Question review */}
        <div>
          {/* Filter tabs */}
          <div className="flex items-center gap-2 mb-4">
            {(
              [
                { value: "all", label: "Todas", count: total },
                { value: "correct", label: "Correctas", count: score },
                { value: "incorrect", label: "Incorrectas", count: incorrectCount },
              ] as { value: ReviewFilter; label: string; count: number }[]
            ).map(({ value, label, count }) => (
              <button
                key={value}
                type="button"
                onClick={() => setReviewFilter(value)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors border",
                  reviewFilter === value
                    ? value === "incorrect"
                      ? "bg-red-50 dark:bg-red-950/40 border-red-300 dark:border-red-800 text-red-600 dark:text-red-400"
                      : value === "correct"
                      ? "bg-green-50 dark:bg-green-950/40 border-green-300 dark:border-green-800 text-green-600 dark:text-green-400"
                      : "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                )}
              >
                {label}
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-bold",
                    reviewFilter === value
                      ? value === "incorrect"
                        ? "bg-red-100 dark:bg-red-900/60 text-red-600 dark:text-red-400"
                        : value === "correct"
                        ? "bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-400"
                        : "bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  )}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-3">
            {filteredIndices.map((i) => (
              <QuestionReview
                key={i}
                question={session.questions[i]}
                answer={session.answers[i]}
                index={i}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
