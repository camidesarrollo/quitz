"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, RotateCcw, Clock, Target } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { ScoreRing } from "./ScoreRing";
import { formatDuration } from "@/lib/utils";
import { isPassing } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";

interface ResultsViewProps {
  sessionId: string;
}

export function ResultsView({ sessionId }: ResultsViewProps) {
  const router = useRouter();
  const { session, clearSession } = useQuizStore();

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
  const percentage = Math.round((score / total) * 100);
  const duration = session.completedAt
    ? Math.round((session.completedAt - session.startedAt) / 1000)
    : 0;
  const passing = isPassing(percentage);

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
        className="w-full max-w-sm"
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
        <div className="grid grid-cols-2 gap-3 mb-8">
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

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={goHome}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-sm"
          >
            <Home size={15} />
            Inicio
          </button>
          <button
            onClick={goHome}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold transition-colors text-sm"
          >
            <RotateCcw size={15} />
            Nuevo quiz
          </button>
        </div>
      </motion.div>
    </div>
  );
}
