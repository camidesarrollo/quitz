"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, CheckSquare } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { OptionButton } from "./OptionButton";
import { getOptionLabel } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";

interface QuizPlayerProps {
  sessionId: string;
}

export function QuizPlayer({ sessionId }: QuizPlayerProps) {
  const router = useRouter();
  const { session, submitAnswer, advanceQuestion } = useQuizStore();
  const [pendingSelections, setPendingSelections] = useState<string[]>([]);

  useEffect(() => {
    if (!session || session.id !== sessionId) {
      router.replace("/");
      return;
    }
    if (session.status === "completed") {
      router.replace(`/quiz/${sessionId}/results`);
    }
  }, [session, sessionId, router]);

  // Reset pending selections when the question changes
  useEffect(() => {
    setPendingSelections([]);
  }, [session?.currentIndex]);

  if (!session || session.id !== sessionId || session.status === "completed") {
    return null;
  }

  const { currentIndex, questions, answers } = session;
  const question = questions[currentIndex];
  const answer = answers[currentIndex];
  const hasAnswered = answer !== undefined;
  const total = questions.length;
  const progress = ((currentIndex + (hasAnswered ? 1 : 0)) / total) * 100;

  const isMultiAnswer = (question.correctAnswers?.length ?? 0) > 1;
  const requiredCount = question.correctAnswers?.length ?? 1;
  const remaining = requiredCount - pendingSelections.length;
  const canConfirm = pendingSelections.length === requiredCount;

  function handleOptionClick(option: string) {
    if (hasAnswered) return;

    if (!isMultiAnswer) {
      submitAnswer(currentIndex, option);
      return;
    }

    setPendingSelections((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  }

  function handleConfirm() {
    if (!canConfirm) return;
    submitAnswer(currentIndex, pendingSelections);
  }

  function getOptionState(option: string) {
    if (!hasAnswered) {
      if (isMultiAnswer && pendingSelections.includes(option)) return "selected" as const;
      return "default" as const;
    }

    const selections = answer.selectedOptions ?? [answer.selectedOption];
    const correct = question.correctAnswers ?? [question.correctAnswer];

    if (correct.includes(option)) {
      return selections.includes(option) ? ("correct" as const) : ("reveal" as const);
    }
    return selections.includes(option) ? ("wrong" as const) : ("default" as const);
  }

  const wrongSelections = hasAnswered
    ? (answer.selectedOptions ?? [answer.selectedOption]).filter(
        (s) => !(question.correctAnswers ?? [question.correctAnswer]).includes(s)
      )
    : [];

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      {/* Progress bar */}
      <div className="h-0.5 bg-slate-100 dark:bg-slate-800">
        <motion.div
          className="h-full bg-indigo-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        {/* Counter */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Pregunta{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {currentIndex + 1}
            </span>{" "}
            de {total}
          </span>
          <span className="text-sm text-slate-400 dark:text-slate-500 tabular-nums">
            {Math.round(progress)}%
          </span>
        </div>

        {/* Question + options */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50 mb-2 leading-relaxed">
              {question.text}
            </h2>

            {/* Multi-answer hint */}
            {isMultiAnswer && !hasAnswered && (
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-4 flex items-center gap-1.5">
                <CheckSquare size={13} />
                {remaining > 0
                  ? `Selecciona ${remaining} opción${remaining !== 1 ? "es" : ""} más`
                  : `${requiredCount} opciones seleccionadas — listo para confirmar`}
              </p>
            )}
            {!isMultiAnswer && <div className="mb-4" />}

            <div className="space-y-2.5">
              {question.options.map((option, i) => (
                <OptionButton
                  key={option}
                  label={getOptionLabel(i)}
                  text={option}
                  state={getOptionState(option)}
                  disabled={hasAnswered}
                  onClick={() => handleOptionClick(option)}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Confirm button for multi-answer (before submitting) */}
        <AnimatePresence>
          {isMultiAnswer && !hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="mt-4"
            >
              <button
                type="button"
                onClick={handleConfirm}
                disabled={!canConfirm}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors text-sm",
                  canConfirm
                    ? "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"
                )}
              >
                <CheckSquare size={16} />
                Confirmar selección ({pendingSelections.length}/{requiredCount})
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "mt-5 p-4 rounded-xl border flex items-start gap-3",
                answer.isCorrect
                  ? "bg-green-50 dark:bg-green-950/50 border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-950/50 border-red-200 dark:border-red-800"
              )}
            >
              {answer.isCorrect ? (
                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={18} />
              ) : (
                <XCircle className="text-red-500 shrink-0 mt-0.5" size={18} />
              )}
              <div>
                <p
                  className={cn(
                    "font-semibold text-sm",
                    answer.isCorrect
                      ? "text-green-700 dark:text-green-300"
                      : "text-red-700 dark:text-red-300"
                  )}
                >
                  {answer.isCorrect ? "¡Correcto!" : "Incorrecto"}
                </p>
                {!answer.isCorrect && (
                  <div className="text-sm text-slate-600 dark:text-slate-400 mt-0.5 space-y-0.5">
                    {isMultiAnswer ? (
                      <>
                        <p>
                          Respuestas correctas:{" "}
                          <span className="font-medium">
                            {question.correctAnswers!.join(", ")}
                          </span>
                        </p>
                        {wrongSelections.length > 0 && (
                          <p>
                            Incorrectas elegidas:{" "}
                            <span className="font-medium text-red-600 dark:text-red-400">
                              {wrongSelections.join(", ")}
                            </span>
                          </p>
                        )}
                      </>
                    ) : (
                      <p>
                        Respuesta correcta:{" "}
                        <span className="font-medium">{question.correctAnswer}</span>
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next button */}
        <AnimatePresence>
          {hasAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="mt-4"
            >
              <button
                type="button"
                onClick={advanceQuestion}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold transition-colors text-sm"
              >
                {currentIndex + 1 === total ? "Ver resultados" : "Siguiente pregunta"}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
