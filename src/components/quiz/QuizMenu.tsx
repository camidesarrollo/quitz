"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  BookOpen,
  Shuffle,
  ListOrdered,
  Trophy,
  Clock,
  LayoutGrid,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { getCategoryCount } from "@/lib/repositories/QuestionRepository";
import { formatDate, formatDuration } from "@/lib/utils";
import { isPassing, PASS_THRESHOLD } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";
import type { QuizConfig, QuizMode } from "@/types/quiz";
import { AZ900 } from "@/data/courses";

const COURSE = AZ900;

// "simulacro" = weighted multi-category; otherwise a category id
type DomainOption = "simulacro" | string;

const PREFERRED_COUNTS = [10, 20, 40];

function buildCountOptions(poolSize: number): number[] {
  return [...new Set(PREFERRED_COUNTS.filter((n) => n < poolSize).concat(poolSize))];
}

export function QuizMenu() {
  const router = useRouter();
  const { history, startSession, clearSession } = useQuizStore();

  const [domain, setDomain] = useState<DomainOption>("simulacro");
  const [mode, setMode] = useState<QuizMode>("random");

  // Pool size depends on selected domain
  const poolSize =
    domain === "simulacro"
      ? COURSE.categories.reduce((sum, c) => sum + getCategoryCount(c.id), 0)
      : getCategoryCount(domain);

  const countOptions = buildCountOptions(poolSize);
  const [count, setCount] = useState(countOptions[0] ?? 10);

  // Keep count valid when domain changes
  function handleDomainChange(d: DomainOption) {
    setDomain(d);
    const newPool =
      d === "simulacro"
        ? COURSE.categories.reduce((sum, c) => sum + getCategoryCount(c.id), 0)
        : getCategoryCount(d);
    const opts = buildCountOptions(newPool);
    setCount((prev) => (opts.includes(prev) ? prev : opts[0] ?? 10));
  }

  function handleStart() {
    clearSession();

    const isSimulacro = domain === "simulacro";
    const category = isSimulacro
      ? undefined
      : COURSE.categories.find((c) => c.id === domain);

    const config: QuizConfig = {
      courseId: COURSE.id,
      categoryId: isSimulacro ? undefined : domain,
      categoryWeights: isSimulacro ? COURSE.defaultWeights : undefined,
      questionCount: count,
      mode,
      label: isSimulacro
        ? `Simulacro · ${count} preg.`
        : `${category?.name ?? domain} · ${count} preg.`,
    };

    const sessionId = startSession(config);
    router.push(`/quiz/${sessionId}`);
  }

  const domainOptions: { value: DomainOption; label: string; sub: string }[] = [
    {
      value: "simulacro",
      label: "Simulacro completo",
      sub: `${COURSE.defaultWeights.map((w) => `${w.weight}%`).join(" / ")}`,
    },
    ...COURSE.categories.map((c) => ({
      value: c.id,
      label: c.name,
      sub: `${getCategoryCount(c.id)} preguntas`,
    })),
  ];

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Course header */}
        <div className="mb-8">
          <div className="w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-500/20">
            <BookOpen className="text-white" size={22} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
              {COURSE.code}
            </span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">
            {COURSE.name}
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            {poolSize} preguntas disponibles · Umbral de aprobación: {PASS_THRESHOLD}%
          </p>
        </div>

        {/* Config card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm mb-4 space-y-5">
          {/* Domain / category */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <LayoutGrid size={12} />
              Dominio
            </p>
            <div className="grid grid-cols-2 gap-2">
              {domainOptions.map(({ value, label, sub }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleDomainChange(value)}
                  className={cn(
                    "text-left px-3 py-2.5 rounded-xl border-2 transition-colors",
                    domain === value
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60"
                      : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-semibold leading-snug",
                      domain === value
                        ? "text-indigo-700 dark:text-indigo-300"
                        : "text-slate-700 dark:text-slate-300"
                    )}
                  >
                    {label}
                  </p>
                  <p
                    className={cn(
                      "text-xs mt-0.5",
                      domain === value
                        ? "text-indigo-500 dark:text-indigo-400"
                        : "text-slate-400 dark:text-slate-500"
                    )}
                  >
                    {sub}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Question count */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Preguntas
            </p>
            <div className="flex gap-2">
              {countOptions.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCount(n)}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-sm font-semibold transition-colors border-2",
                    count === n
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                      : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  {n === poolSize ? "Todo" : n}
                </button>
              ))}
            </div>
          </div>

          {/* Mode */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Modo
            </p>
            <div className="flex gap-2">
              {(
                [
                  { value: "random", label: "Aleatorio", icon: Shuffle },
                  { value: "sequential", label: "Secuencial", icon: ListOrdered },
                ] as const
              ).map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors border-2",
                    mode === value
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                      : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold transition-colors text-sm"
          >
            Comenzar quiz
          </button>
        </div>

        {/* History */}
        {history.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              Historial reciente
            </p>
            <div className="space-y-2">
              {history.slice(0, 5).map((s) => (
                <div
                  key={s.id}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-3"
                >
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center shrink-0",
                      isPassing(s.percentage)
                        ? "bg-green-100 dark:bg-green-900/50"
                        : "bg-red-100 dark:bg-red-900/50"
                    )}
                  >
                    <Trophy
                      size={16}
                      className={
                        isPassing(s.percentage)
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-500 dark:text-red-400"
                      }
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                      {s.score}/{s.total}{" "}
                      <span
                        className={cn(
                          "font-bold",
                          isPassing(s.percentage)
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-500 dark:text-red-400"
                        )}
                      >
                        {s.percentage}%
                      </span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {s.config.label} · {formatDate(s.completedAt)}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
                    <Clock size={11} />
                    {formatDuration(s.durationSeconds)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
