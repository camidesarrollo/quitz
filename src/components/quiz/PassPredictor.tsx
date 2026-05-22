"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Target, TrendingUp, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CompletedSession } from "@/types/quiz";
import { AZ900 } from "@/data/courses";
import { PASS_THRESHOLD } from "@/lib/quiz-utils";

const COURSE = AZ900;
const IMPROVEMENT_TARGET = 75; // target pct to project gains toward

interface CategoryStat {
  name: string;
  weight: number;
  pct: number | null;
  contribution: number | null;
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
      name: cat?.name ?? w.categoryId,
      weight: w.weight,
      pct: rawPct !== null ? Math.round(rawPct) : null,
      contribution: rawPct !== null ? (rawPct * w.weight) / 100 : null,
    };
  });
}

interface Props {
  history: CompletedSession[];
}

export function PassPredictor({ history }: Props) {
  const stats = useMemo(() => computeStats(history), [history]);

  const statsWithData = stats.filter((s) => s.pct !== null);
  if (statsWithData.length === 0) return null;

  const allCovered = statsWithData.length === stats.length;
  const coveredWeight = statsWithData.reduce((sum, s) => sum + s.weight, 0);
  const coveredScore = statsWithData.reduce((sum, s) => sum + (s.contribution ?? 0), 0);

  // Weighted score within covered area — comparable to pass threshold when allCovered
  const weightedPct = allCovered
    ? Math.round(coveredScore)
    : Math.round((coveredScore / coveredWeight) * 100);

  const passing = allCovered && weightedPct >= PASS_THRESHOLD;
  const gap = PASS_THRESHOLD - weightedPct;

  // Actionable: weakest covered category and what reaching IMPROVEMENT_TARGET would add
  const weakest = statsWithData.reduce(
    (min, s) => (s.pct! < min.pct! ? s : min),
    statsWithData[0]
  );
  const improvementGain =
    weakest.pct! < IMPROVEMENT_TARGET
      ? ((IMPROVEMENT_TARGET - weakest.pct!) * weakest.weight) / 100
      : 0;

  const barWidth = allCovered ? Math.min(weightedPct, 100) : Math.min(weightedPct, 100);

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 mb-4",
        passing
          ? "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800/60"
          : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
      )}
    >
      {/* Header row */}
      <div className="flex items-start gap-3 mb-4">
        <div
          className={cn(
            "w-9 h-9 rounded-xl flex items-center justify-center shrink-0",
            passing
              ? "bg-emerald-100 dark:bg-emerald-900/40"
              : "bg-slate-100 dark:bg-slate-800"
          )}
        >
          <Target
            size={18}
            className={
              passing
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-slate-500 dark:text-slate-400"
            }
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
            Predictor de aprobación
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {allCovered
              ? "Basado en tu historial completo"
              : `${coveredWeight}% del examen practicado · ${stats.filter((s) => s.pct === null).map((s) => s.name).join(" y ")} sin datos`}
          </p>
        </div>

        {/* Score hero */}
        <div className="text-right shrink-0">
          <p
            className={cn(
              "text-3xl font-bold tabular-nums leading-none",
              passing
                ? "text-emerald-600 dark:text-emerald-400"
                : allCovered
                ? "text-red-600 dark:text-red-400"
                : "text-slate-700 dark:text-slate-300"
            )}
          >
            ~{weightedPct}%
          </p>
          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1">
            {allCovered ? "puntaje estimado" : `en ${coveredWeight}% del examen`}
          </p>
        </div>
      </div>

      {/* Bar with 70% threshold marker */}
      <div className="relative h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-visible mb-1">
        <motion.div
          className={cn(
            "absolute inset-y-0 left-0 rounded-full",
            passing ? "bg-emerald-500" : allCovered ? "bg-red-500" : "bg-amber-500"
          )}
          initial={{ width: "0%" }}
          animate={{ width: `${barWidth}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Static threshold marker at 70% */}
        <div className="absolute inset-y-[-2px] left-[70%] w-0.5 bg-slate-500 dark:bg-slate-300 rounded-full" />
      </div>
      <div className="relative h-4">
        <span className="absolute left-[70%] -translate-x-1/2 text-[9px] font-medium text-slate-400 dark:text-slate-500">
          ↑{PASS_THRESHOLD}%
        </span>
      </div>

      {/* Verdict */}
      <p
        className={cn(
          "text-sm font-semibold mt-1",
          passing
            ? "text-emerald-700 dark:text-emerald-400"
            : allCovered
            ? "text-red-700 dark:text-red-400"
            : "text-slate-700 dark:text-slate-300"
        )}
      >
        {passing
          ? `Con tu rendimiento actual aprobarías con ~${weightedPct}%`
          : allCovered
          ? `Necesitás ${gap} punto${gap !== 1 ? "s" : ""} más para aprobar`
          : `En las áreas practicadas vas ~${weightedPct}%`}
      </p>

      {/* Actionable tip */}
      {improvementGain > 0.5 && (
        <p className="mt-2.5 flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
          {passing ? (
            <Sparkles size={11} className="shrink-0 mt-0.5 text-emerald-500" />
          ) : (
            <TrendingUp size={11} className="shrink-0 mt-0.5 text-amber-500" />
          )}
          <span>
            Mejorar{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {weakest.name}
            </span>{" "}
            de {weakest.pct}% a {IMPROVEMENT_TARGET}% te sumaría{" "}
            <span className="font-semibold">+{improvementGain.toFixed(1)} pts</span>
            {allCovered && !passing && improvementGain >= gap
              ? " — suficiente para aprobar"
              : ""}
          </span>
        </p>
      )}
    </div>
  );
}
