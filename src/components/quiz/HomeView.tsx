"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  PlayCircle,
  ArrowRight,
  Trophy,
  Clock,
  ChevronRight,
  Trash2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { formatDate, formatDuration } from "@/lib/utils";
import { isPassing } from "@/lib/quiz-utils";
import { PassPredictor } from "@/components/quiz/PassPredictor";
import { CategoryDashboard } from "@/components/quiz/CategoryDashboard";
import { cn } from "@/lib/utils";

export function HomeView() {
  const router = useRouter();
  const { session, history, clearSession, clearHistory } = useQuizStore();

  const totalSessions = history.length;
  const passCount = history.filter((s) => isPassing(s.percentage)).length;
  const avgPct =
    totalSessions > 0
      ? Math.round(history.reduce((sum, s) => sum + s.percentage, 0) / totalSessions)
      : 0;
  const bestPct =
    totalSessions > 0 ? Math.max(...history.map((s) => s.percentage)) : 0;

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">
            AZ-900
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">
            Inicio
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            Métricas y progreso
          </p>
        </div>

        {/* In-progress session banner */}
        {session &&
          session.status === "active" &&
          (() => {
            const answeredCount = Object.keys(session.answers).length;
            const progressPct = Math.round(
              (answeredCount / session.questions.length) * 100
            );
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
                      {answeredCount} de {session.questions.length} respondidas ·{" "}
                      {progressPct}%
                    </p>
                  </div>
                </div>
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

        {/* Empty state CTAs */}
        {totalSessions === 0 && !session && (
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              type="button"
              onClick={() => router.push("/exam")}
              className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/60 p-4 flex flex-col items-center gap-2 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Modo Examen
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Preguntas de certificación
              </p>
            </button>
            <button
              type="button"
              onClick={() => router.push("/study")}
              className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-sky-200 dark:border-sky-800/60 p-4 flex flex-col items-center gap-2 hover:border-sky-400 dark:hover:border-sky-500 transition-colors text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center">
                <Lightbulb size={20} className="text-sky-600 dark:text-sky-400" />
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Modo Estudio
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                Conceptos por tema
              </p>
            </button>
          </div>
        )}

        {/* Stats overview */}
        {totalSessions > 0 && (
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 text-center">
              <p className="text-base font-bold text-slate-900 dark:text-slate-50 tabular-nums">
                {totalSessions}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                Sesiones
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 text-center">
              <p
                className={cn(
                  "text-base font-bold tabular-nums",
                  avgPct >= 70
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-900 dark:text-slate-50"
                )}
              >
                {avgPct}%
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                Promedio
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 text-center">
              <p
                className={cn(
                  "text-base font-bold tabular-nums",
                  bestPct >= 70
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-900 dark:text-slate-50"
                )}
              >
                {bestPct}%
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                Mejor
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 text-center">
              <p
                className={cn(
                  "text-base font-bold tabular-nums",
                  passCount > 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-900 dark:text-slate-50"
                )}
              >
                {passCount}
              </p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                Aprobadas
              </p>
            </div>
          </div>
        )}

        {/* Pass predictor + category breakdown */}
        {history.length > 0 && <PassPredictor history={history} />}
        {history.length > 0 && <CategoryDashboard history={history} />}

        {/* Recent history */}
        {history.length > 0 && (
          <div id="historial">
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
