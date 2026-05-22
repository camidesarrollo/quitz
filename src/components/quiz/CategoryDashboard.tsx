"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart3, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CompletedSession } from "@/types/quiz";
import { AZ900 } from "@/data/courses";
import { PASS_THRESHOLD } from "@/lib/quiz-utils";

const COURSE = AZ900;

interface CategoryStat {
  categoryId: string;
  name: string;
  weight: number;
  correct: number;
  total: number;
  pct: number | null;
  contribution: number | null; // pct * weight / 100 → points out of 100
}

function computeStats(history: CompletedSession[]): CategoryStat[] {
  const tally: Record<string, { correct: number; total: number }> = {};

  for (const session of history) {
    for (const [idxStr, answer] of Object.entries(session.answers)) {
      const q = session.questions[parseInt(idxStr, 10)];
      if (!q?.categoryId) continue;
      if (!tally[q.categoryId]) tally[q.categoryId] = { correct: 0, total: 0 };
      tally[q.categoryId].total++;
      if (answer.isCorrect) tally[q.categoryId].correct++;
    }
  }

  return COURSE.defaultWeights.map((w) => {
    const cat = COURSE.categories.find((c) => c.id === w.categoryId);
    const t = tally[w.categoryId] ?? { correct: 0, total: 0 };
    const rawPct = t.total > 0 ? (t.correct / t.total) * 100 : null;
    return {
      categoryId: w.categoryId,
      name: cat?.name ?? w.categoryId,
      weight: w.weight,
      correct: t.correct,
      total: t.total,
      pct: rawPct !== null ? Math.round(rawPct) : null,
      contribution: rawPct !== null ? (rawPct * w.weight) / 100 : null,
    };
  });
}

function barColorClass(pct: number): string {
  if (pct < 60) return "bg-red-500";
  if (pct < PASS_THRESHOLD) return "bg-amber-500";
  return "bg-emerald-500";
}

function textColorClass(pct: number): string {
  if (pct < 60) return "text-red-600 dark:text-red-400";
  if (pct < PASS_THRESHOLD) return "text-amber-600 dark:text-amber-400";
  return "text-emerald-600 dark:text-emerald-400";
}

interface Props {
  history: CompletedSession[];
}

export function CategoryDashboard({ history }: Props) {
  const stats = useMemo(() => computeStats(history), [history]);

  const statsWithData = stats.filter((s) => s.pct !== null);
  if (statsWithData.length === 0) return null;

  const allCovered = statsWithData.length === stats.length;
  const totalAnswered = statsWithData.reduce((s, c) => s + c.total, 0);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
          <BarChart3 size={18} className="text-indigo-600 dark:text-indigo-400" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Rendimiento por categoría
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {totalAnswered} respuestas en {history.length} sesión{history.length !== 1 ? "es" : ""}
          </p>
        </div>
      </div>

      {/* Category bars */}
      <div className="space-y-4 mb-4">
        {stats.map((stat, i) => (
          <div key={stat.categoryId}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 truncate pr-2">
                {stat.name}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                  peso {stat.weight}%
                </span>
                {stat.pct !== null ? (
                  <span className={cn("text-xs font-bold tabular-nums", textColorClass(stat.pct))}>
                    {stat.pct}%
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 dark:text-slate-500">sin datos</span>
                )}
              </div>
            </div>

            <div className="h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              {stat.pct !== null ? (
                <motion.div
                  className={cn("h-full rounded-full", barColorClass(stat.pct))}
                  initial={{ width: "0%" }}
                  animate={{ width: `${stat.pct}%` }}
                  transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.08 }}
                />
              ) : null}
            </div>

            {stat.pct !== null && (
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-slate-400 dark:text-slate-500 tabular-nums">
                  {stat.correct}/{stat.total} correctas
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 tabular-nums">
                  {(stat.contribution ?? 0).toFixed(1)}&thinsp;/&thinsp;{stat.weight} pts ponderados
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Partial-coverage note */}
      {!allCovered && (
        <p className="mt-1 text-[10px] text-slate-400 dark:text-slate-500 flex items-start gap-1.5">
          <AlertCircle size={10} className="shrink-0 mt-0.5 text-amber-400" />
          Practicá {stats.filter((s) => s.pct === null).map((s) => s.name).join(" y ")} para ver todos los pesos
        </p>
      )}
    </div>
  );
}
