"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Target,
  BookOpen,
  CheckCircle2,
  XCircle,
  ChevronDown,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { ScoreRing } from "./ScoreRing";
import { formatDuration, formatDate } from "@/lib/utils";
import { isPassing } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";
import { getCourseById } from "@/lib/repositories/CourseRepository";
import type { CompletedSession, Question, Answer } from "@/types/quiz";

interface HistoryDetailViewProps {
  sessionId: string;
}

interface CategoryStat {
  id: string;
  name: string;
  correct: number;
  total: number;
  percentage: number;
}

function buildCategoryStats(session: CompletedSession): CategoryStat[] {
  const course = getCourseById(session.config.courseId);
  if (!course) return [];

  const map = new Map<string, { correct: number; total: number }>();
  session.questions.forEach((q, i) => {
    const catId = q.categoryId ?? "unknown";
    const entry = map.get(catId) ?? { correct: 0, total: 0 };
    entry.total++;
    if (session.answers[i]?.isCorrect) entry.correct++;
    map.set(catId, entry);
  });

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

function QuestionReview({
  question,
  answer,
  index,
}: {
  question: Question;
  answer: Answer | undefined;
  index: number;
}) {
  const [showExplanation, setShowExplanation] = useState(false);
  const correct = answer?.isCorrect ?? false;
  const selectedOptions = answer?.selectedOptions ?? (answer?.selectedOption ? [answer.selectedOption] : []);
  const correctOptions =
    question.correctAnswers && question.correctAnswers.length > 1
      ? question.correctAnswers
      : [question.correctAnswer];

  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className={cn(
        "rounded-xl border p-4",
        correct
          ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20"
          : "border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20"
      )}
    >
      <div className="flex gap-2.5">
        <div className="shrink-0 mt-0.5">
          {correct ? (
            <CheckCircle2 size={16} className="text-green-500" />
          ) : (
            <XCircle size={16} className="text-red-500" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-slate-400 mb-1">
            Pregunta {index + 1}
          </p>
          <p className="text-sm text-slate-800 dark:text-slate-200 leading-snug mb-3">
            {question.text}
          </p>
          <div className="space-y-1">
            {question.options.map((opt) => {
              const isSelected = selectedOptions.includes(opt);
              const isCorrectOpt = correctOptions.includes(opt);
              return (
                <div
                  key={opt}
                  className={cn(
                    "text-xs px-2.5 py-1.5 rounded-lg",
                    isCorrectOpt
                      ? "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 font-medium"
                      : isSelected && !isCorrectOpt
                      ? "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 line-through"
                      : "text-slate-500 dark:text-slate-400"
                  )}
                >
                  {isCorrectOpt && "✓ "}
                  {isSelected && !isCorrectOpt && "✗ "}
                  {opt}
                </div>
              );
            })}
          </div>
          {question.explaination && (
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700/60">
              {correct && (
                <button
                  type="button"
                  onClick={() => setShowExplanation((v) => !v)}
                  className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1 hover:underline mb-1"
                >
                  <ChevronDown
                    size={12}
                    className={cn(
                      "transition-transform duration-200",
                      showExplanation && "rotate-180"
                    )}
                  />
                  {showExplanation ? "Ocultar explicación" : "Ver explicación"}
                </button>
              )}
              <AnimatePresence initial={false}>
                {(!correct || showExplanation) && (
                  <motion.p
                    key="expl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed overflow-hidden"
                  >
                    {question.explaination}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function HistoryDetailView({ sessionId }: HistoryDetailViewProps) {
  const router = useRouter();
  const { history } = useQuizStore();

  const session = history.find((s) => s.id === sessionId);

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session, router]);

  if (!session) return null;

  const passing = isPassing(session.percentage);
  const categoryStats = buildCategoryStats(session);
  const hasQuestions = session.questions && session.questions.length > 0;

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Back */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors mb-6"
        >
          <ArrowLeft size={15} />
          Volver al inicio
        </button>

        {/* Score ring */}
        <div className="flex justify-center mb-5">
          <ScoreRing percentage={session.percentage} />
        </div>

        {/* Title */}
        <div className="text-center mb-5">
          <h1
            className={cn(
              "text-2xl font-bold mb-0.5",
              passing
                ? "text-green-600 dark:text-green-400"
                : "text-red-500 dark:text-red-400"
            )}
          >
            {passing ? "Aprobado" : "Reprobado"}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {session.config.label}
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
            {formatDate(session.completedAt)}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
            <Target size={18} className="text-indigo-500 mx-auto mb-1.5" />
            <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {session.score}/{session.total}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Correctas</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 text-center">
            <Clock size={18} className="text-indigo-500 mx-auto mb-1.5" />
            <p className="text-xl font-bold text-slate-900 dark:text-slate-50">
              {formatDuration(session.durationSeconds)}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Tiempo</p>
          </div>
        </div>

        {/* Category breakdown */}
        {categoryStats.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-5">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <BookOpen size={12} />
              Resultados por dominio
            </p>
            <div className="space-y-4">
              {categoryStats.map((cat, idx) => (
                <div key={cat.id}>
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
                  <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      className={cn("h-full rounded-full", barColor(cat.percentage))}
                      initial={{ width: 0 }}
                      animate={{ width: `${cat.percentage}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.06 + 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {categoryStats[0]?.percentage < 70 && (
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

        {/* Question-by-question review */}
        {hasQuestions && (
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Revisión de preguntas ({session.total})
            </p>
            <div className="space-y-3">
              {session.questions.map((q, i) => (
                <QuestionReview
                  key={q.id}
                  question={q}
                  answer={session.answers[i]}
                  index={i}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
