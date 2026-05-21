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
  ChevronRight,
  XCircle,
  ArrowRight,
  Trash2,
  PlayCircle,
  Bookmark,
  GraduationCap,
  Timer,
  AlertCircle,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { getCategoryCount, getAllQuestions } from "@/lib/repositories/QuestionRepository";
import { formatDate, formatDuration } from "@/lib/utils";
import { isPassing, PASS_THRESHOLD, getWrongQuestionsFromHistory } from "@/lib/quiz-utils";
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
  const { session, history, markedQuestionIds, startSession, startSessionWithQuestions, clearSession, clearHistory } = useQuizStore();
  const wrongQuestions = getWrongQuestionsFromHistory(history);
  const markedQuestions = getAllQuestions().filter((q) => markedQuestionIds.includes(q.id));

  const [domain, setDomain] = useState<DomainOption>("simulacro");
  const [mode, setMode] = useState<QuizMode>("random");
  const [customInput, setCustomInput] = useState("");
  const [isCustom, setIsCustom] = useState(false);

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
    setCustomInput("");
    setIsCustom(false);
    const newPool =
      d === "simulacro"
        ? COURSE.categories.reduce((sum, c) => sum + getCategoryCount(c.id), 0)
        : getCategoryCount(d);
    const opts = buildCountOptions(newPool);
    setCount((prev) => (opts.includes(prev) ? prev : opts[0] ?? 10));
  }

  function handlePresetClick(n: number) {
    setCount(n);
    setCustomInput("");
    setIsCustom(false);
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setCustomInput(val);
    setIsCustom(true);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= poolSize) {
      setCount(num);
    }
  }

  function handleCustomBlur() {
    const num = parseInt(customInput, 10);
    if (!isNaN(num) && num >= 1) {
      const clamped = Math.min(num, poolSize);
      setCount(clamped);
      setCustomInput(String(clamped));
    } else {
      setCustomInput("");
      setIsCustom(false);
    }
  }

  function handleStartMarkedReview() {
    if (markedQuestions.length === 0) return;
    clearSession();
    const config: QuizConfig = {
      courseId: COURSE.id,
      questionCount: markedQuestions.length,
      mode,
      label: `Preguntas marcadas · ${markedQuestions.length} preg.`,
    };
    const sessionId = startSessionWithQuestions(config, markedQuestions);
    router.push(`/quiz/${sessionId}`);
  }

  function handleStartWrongReview() {
    if (wrongQuestions.length === 0) return;
    clearSession();
    const config: QuizConfig = {
      courseId: COURSE.id,
      questionCount: wrongQuestions.length,
      mode,
      label: `Repaso de errores · ${wrongQuestions.length} preg.`,
    };
    const sessionId = startSessionWithQuestions(config, wrongQuestions);
    router.push(`/quiz/${sessionId}`);
  }

  function handleStartExam() {
    if (!COURSE.examConfig) return;
    clearSession();
    const config: QuizConfig = {
      courseId: COURSE.id,
      categoryWeights: COURSE.defaultWeights,
      questionCount: COURSE.examConfig.questionCount,
      mode: "random",
      label: `Examen ${COURSE.code}`,
      isExamMode: true,
      timeLimitSeconds: COURSE.examConfig.timeLimitSeconds,
      passingPercentage: COURSE.examConfig.passingPercentage,
    };
    const sessionId = startSession(config);
    router.push(`/quiz/${sessionId}`);
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

        {/* Resume in-progress session */}
        {session && session.status === "active" && (() => {
          const answeredCount = Object.keys(session.answers).length;
          const progressPct = Math.round((answeredCount / session.questions.length) * 100);
          return (
            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/60 p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                  <PlayCircle size={18} className="text-amber-500 dark:text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                    Quiz en progreso
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                    {session.config.label}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5 font-medium">
                    {answeredCount} de {session.questions.length} respondidas · {progressPct}%
                  </p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3 h-1.5 bg-amber-100 dark:bg-amber-900/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400 dark:bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={clearSession}
                  className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  Descartar
                </button>
                <button
                  type="button"
                  onClick={() => router.push(`/quiz/${session.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-semibold transition-colors"
                >
                  Continuar
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })()}

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
                  onClick={() => handlePresetClick(n)}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-sm font-semibold transition-colors border-2",
                    !isCustom && count === n
                      ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                      : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  {n === poolSize ? "Todo" : n}
                </button>
              ))}
              <input
                type="number"
                min={1}
                max={poolSize}
                value={customInput}
                onChange={handleCustomChange}
                onBlur={handleCustomBlur}
                placeholder="..."
                className={cn(
                  "w-16 py-2 rounded-lg text-sm font-semibold text-center transition-colors border-2 bg-transparent outline-none",
                  isCustom
                    ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                )}
              />
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

        {/* Exam mode card */}
        {COURSE.examConfig && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-violet-200 dark:border-violet-800/60 p-5 mb-4">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center shrink-0">
                <GraduationCap size={18} className="text-violet-600 dark:text-violet-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Modo Examen Real
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Condiciones del examen oficial {COURSE.code}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                <p className="text-base font-bold text-slate-900 dark:text-slate-50">
                  {COURSE.examConfig.questionCount}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">preguntas</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                <p className="text-base font-bold text-slate-900 dark:text-slate-50 flex items-center justify-center gap-1">
                  <Timer size={13} className="text-slate-400" />
                  {Math.round(COURSE.examConfig.timeLimitSeconds / 60)}
                  <span className="text-xs font-normal text-slate-400">min</span>
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">límite</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 text-center">
                <p className="text-base font-bold text-slate-900 dark:text-slate-50">
                  {COURSE.examConfig.passingPercentage}%
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">para aprobar</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4 flex items-start gap-1.5">
              <AlertCircle size={11} className="shrink-0 mt-0.5" />
              Sin feedback inmediato — los resultados se revelan al terminar
            </p>
            <button
              type="button"
              onClick={handleStartExam}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white font-semibold transition-colors text-sm"
            >
              <GraduationCap size={15} />
              Comenzar examen
            </button>
          </div>
        )}

        {/* Wrong answers review */}
        {wrongQuestions.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-red-200 dark:border-red-900/60 p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-100 dark:bg-red-900/40 flex items-center justify-center shrink-0">
                <XCircle size={18} className="text-red-500 dark:text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Repasar errores
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {wrongQuestions.length} pregunta{wrongQuestions.length !== 1 ? "s" : ""} incorrecta{wrongQuestions.length !== 1 ? "s" : ""} únicas de todo tu historial
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleStartWrongReview}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold transition-colors text-sm"
            >
              Comenzar repaso
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Marked questions */}
        {markedQuestions.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-amber-200 dark:border-amber-800/60 p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                <Bookmark size={18} className="text-amber-500 dark:text-amber-400 fill-amber-200 dark:fill-amber-900/60" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                  Preguntas marcadas
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {markedQuestions.length} pregunta{markedQuestions.length !== 1 ? "s" : ""} guardada{markedQuestions.length !== 1 ? "s" : ""} para repasar
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleStartMarkedReview}
              className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white font-semibold transition-colors text-sm"
            >
              Practicar marcadas
              <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* History */}
        {history.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Historial reciente
              </p>
              <button
                type="button"
                onClick={clearHistory}
                className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <Trash2 size={11} />
                Borrar
              </button>
            </div>
            <div className="space-y-2">
              {history.slice(0, 5).map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => router.push(`/history/${s.id}`)}
                  className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-3 hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-left"
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
                  <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
                    <Clock size={11} />
                    {formatDuration(s.durationSeconds)}
                    <ChevronRight size={13} className="opacity-40" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
