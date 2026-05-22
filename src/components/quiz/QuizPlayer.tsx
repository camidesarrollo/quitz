"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, CheckSquare, ChevronDown, SkipForward, Bookmark, Timer, Flame } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { useSRStore } from "@/lib/store/sr.store";
import { getMasteryLevel } from "@/lib/spaced-repetition";
import { isAnswerCorrect } from "@/types/quiz";
import { OptionButton } from "./OptionButton";
import { QuizHeader } from "./QuizHeader";
import { QuestionNote } from "./QuestionNote";
import { getOptionLabel } from "@/lib/quiz-utils";
import { cn } from "@/lib/utils";

interface QuizPlayerProps {
  sessionId: string;
}

export function QuizPlayer({ sessionId }: QuizPlayerProps) {
  const router = useRouter();
  const { session, submitAnswer, advanceQuestion, skipQuestion, completeSession, markedQuestionIds, toggleMarkQuestion } = useQuizStore();
  const { cards: srCards, updateCard: updateSRCard } = useSRStore();
  const [pendingSelections, setPendingSelections] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!session || session.id !== sessionId) {
      router.replace("/");
      return;
    }
    if (session.status === "completed") {
      router.replace(`/quiz/${sessionId}/results`);
    }
  }, [session, sessionId, router]);

  // Reset pending selections and explanation toggle when the question changes
  useEffect(() => {
    setPendingSelections([]);
    setShowExplanation(false);
  }, [session?.currentIndex]);

  // Exam mode countdown timer
  useEffect(() => {
    if (!session?.config.isExamMode || !session.config.timeLimitSeconds) return;
    const limit = session.config.timeLimitSeconds;
    const start = session.startedAt;
    const compute = () => Math.max(0, limit - Math.floor((Date.now() - start) / 1000));
    setTimeLeft(compute());
    const id = setInterval(() => setTimeLeft(compute()), 1000);
    return () => clearInterval(id);
  }, [session?.id, session?.config.isExamMode, session?.config.timeLimitSeconds, session?.startedAt]);

  useEffect(() => {
    if (timeLeft === 0) completeSession();
  }, [timeLeft, completeSession]);

  // Keyboard shortcuts — stable listener, handler updated each render via ref
  const keyHandlerRef = useRef<(e: KeyboardEvent) => void>(() => {});
  useEffect(() => {
    function onKey(e: KeyboardEvent) { keyHandlerRef.current(e); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!session || session.id !== sessionId || session.status === "completed") {
    return null;
  }

  const { currentIndex, questions, answers } = session;
  const question = questions[currentIndex];
  const answer = answers[currentIndex];
  const hasAnswered = answer !== undefined;
  const total = questions.length;
  const progress = ((currentIndex + (hasAnswered ? 1 : 0)) / total) * 100;

  const pendingCount = (session.pendingIndices ?? []).length;
  const unansweredCount = questions.filter((_, i) => answers[i] === undefined).length;
  const canSkip = !hasAnswered && unansweredCount > 1;
  const isMarked = markedQuestionIds.includes(question.id);

  const isExamMode = session.config.isExamMode ?? false;

  // Consecutive correct answers ending at the latest answered question
  const answeredSorted = Object.keys(answers).map(Number).sort((a, b) => a - b);
  let streak = 0;
  for (let i = answeredSorted.length - 1; i >= 0; i--) {
    if (answers[answeredSorted[i]]?.isCorrect) streak++;
    else break;
  }

  const isMultiAnswer = (question.correctAnswers?.length ?? 0) > 1;
  const requiredCount = question.correctAnswers?.length ?? 1;
  const remaining = requiredCount - pendingSelections.length;
  const canConfirm = pendingSelections.length === requiredCount;

  // Refresh keyboard handler with latest values on every render
  keyHandlerRef.current = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const key = e.key.toUpperCase();

    // A–D: select / toggle option
    if (!hasAnswered && ["A", "B", "C", "D"].includes(key)) {
      const idx = key.charCodeAt(0) - 65;
      const option = question.options[idx];
      if (!option) return;
      e.preventDefault();
      if (!isMultiAnswer) {
        if (isExamMode) {
          setPendingSelections([option]);
        } else {
          handleSubmit(currentIndex, option);
        }
      } else {
        setPendingSelections((prev) =>
          prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
        );
      }
      return;
    }

    // Enter / Space / →: advance or confirm
    if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") {
      e.preventDefault();
      if (hasAnswered) {
        advanceQuestion();
      } else if (canConfirm) {
        handleSubmit(currentIndex, isMultiAnswer ? pendingSelections : pendingSelections[0]);
      }
      return;
    }

    // S: skip
    if (key === "S" && canSkip) {
      skipQuestion();
      return;
    }

    // M: mark / unmark
    if (key === "M") {
      toggleMarkQuestion(question.id);
    }
  };

  function handleSubmit(idx: number, selected: string | string[]) {
    submitAnswer(idx, selected);
    if (session && session.config.mode === "spaced-repetition") {
      const q = session.questions[idx];
      updateSRCard(q.id, isAnswerCorrect(q, selected));
    }
  }

  function handleOptionClick(option: string) {
    if (hasAnswered) return;

    if (!isMultiAnswer) {
      if (isExamMode) {
        setPendingSelections([option]);
      } else {
        submitAnswer(currentIndex, option);
      }
      return;
    }

    setPendingSelections((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
  }

  function handleConfirm() {
    if (!canConfirm) return;
    submitAnswer(currentIndex, isMultiAnswer ? pendingSelections : pendingSelections[0]);
  }

  function getOptionState(option: string) {
    if (!hasAnswered) {
      if (pendingSelections.includes(option)) return "selected" as const;
      return "default" as const;
    }

    const selections = answer.selectedOptions ?? [answer.selectedOption];

    // In exam mode: only show which option was selected, no correct/wrong reveal
    if (isExamMode) {
      return selections.includes(option) ? ("selected" as const) : ("default" as const);
    }

    const correct = question.correctAnswers ?? [question.correctAnswer];
    if (correct.includes(option)) {
      return selections.includes(option) ? ("correct" as const) : ("reveal" as const);
    }
    return selections.includes(option) ? ("wrong" as const) : ("default" as const);
  }

  function formatTimer(s: number) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }

  const wrongSelections = hasAnswered
    ? (answer.selectedOptions ?? [answer.selectedOption]).filter(
        (s) => !(question.correctAnswers ?? [question.correctAnswer]).includes(s)
      )
    : [];

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col">
      <QuizHeader config={session.config} />
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
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Pregunta{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {currentIndex + 1}
              </span>{" "}
              de {total}
            </span>
            {pendingCount > 0 && (
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                {pendingCount} pendiente{pendingCount !== 1 ? "s" : ""}
              </span>
            )}
            <AnimatePresence>
              {!isExamMode && streak >= 2 && (
                <motion.span
                  key={streak}
                  initial={{ scale: streak >= 5 ? 1.7 : 1.3, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 380, damping: 13 }}
                  className={cn(
                    "inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full tabular-nums",
                    streak >= 10
                      ? "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400"
                      : streak >= 5
                      ? "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400"
                      : "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400"
                  )}
                >
                  <Flame size={11} className="fill-current" />
                  {streak}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-3">
            {session.config.mode === "spaced-repetition" && (() => {
              const level = getMasteryLevel(srCards[question.id]);
              const styles = {
                new:       "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
                learning:  "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400",
                reviewing: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",
                mastered:  "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
              };
              const labels = { new: "Nueva", learning: "Aprendiendo", reviewing: "Revisando", mastered: "Dominada" };
              return (
                <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", styles[level])}>
                  {labels[level]}
                </span>
              );
            })()}
            {isExamMode && timeLeft !== null && (
              <span
                className={cn(
                  "text-sm font-mono font-semibold tabular-nums flex items-center gap-1",
                  timeLeft < 60
                    ? "text-red-500 dark:text-red-400"
                    : timeLeft < 300
                    ? "text-amber-500 dark:text-amber-400"
                    : "text-slate-600 dark:text-slate-400"
                )}
              >
                <Timer size={13} />
                {formatTimer(timeLeft)}
              </span>
            )}
            <button
              type="button"
              onClick={() => toggleMarkQuestion(question.id)}
              title={isMarked ? "Quitar marca" : "Marcar pregunta"}
              className="transition-colors"
            >
              <Bookmark
                size={16}
                className={cn(
                  "transition-colors",
                  isMarked
                    ? "text-amber-500 fill-amber-500"
                    : "text-slate-300 dark:text-slate-600 hover:text-amber-400 dark:hover:text-amber-500"
                )}
              />
            </button>
            {!isExamMode && (
              <span className="text-sm text-slate-400 dark:text-slate-500 tabular-nums">
                {Math.round(progress)}%
              </span>
            )}
          </div>
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

        {/* Skip button — hidden in exam mode */}
        <AnimatePresence>
          {canSkip && !isExamMode && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="mt-3"
            >
              <button
                type="button"
                onClick={skipQuestion}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 font-semibold text-sm hover:border-amber-300 dark:hover:border-amber-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                <SkipForward size={14} />
                Saltar por ahora
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confirm button — multi-answer always, single-answer only in exam mode */}
        <AnimatePresence>
          {!hasAnswered && (isMultiAnswer || (isExamMode && pendingSelections.length > 0)) && (
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
                {isMultiAnswer
                  ? `Confirmar selección (${pendingSelections.length}/${requiredCount})`
                  : "Confirmar respuesta"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Exam mode: neutral confirmation so the user knows the click registered */}
        <AnimatePresence>
          {hasAnswered && isExamMode && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center gap-2"
            >
              <CheckCircle2 size={14} className="text-slate-400 dark:text-slate-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Respuesta registrada</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Feedback — hidden in exam mode */}
        <AnimatePresence>
          {hasAnswered && !isExamMode && (
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
              <div className="flex-1 min-w-0">
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
                {question.explaination && (
                  <div className="mt-2">
                    {answer.isCorrect && (
                      <button
                        type="button"
                        onClick={() => setShowExplanation((v) => !v)}
                        className="text-xs text-green-700 dark:text-green-400 font-medium flex items-center gap-1 hover:underline"
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
                      {(!answer.isCorrect || showExplanation) && (
                        <motion.p
                          key="expl"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 leading-relaxed overflow-hidden"
                        >
                          {question.explaination}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}
                <QuestionNote questionId={question.id} />
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

        {/* Keyboard shortcuts hint */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 select-none">
          {([
            ["A–D", "opciones"],
            ["↵", "avanzar"],
            ["S", "saltar"],
            ["M", "marcar"],
          ] as [string, string][]).map(([key, label]) => (
            <span key={key} className="flex items-center gap-1 text-[10px] text-slate-300 dark:text-slate-700">
              <kbd className="px-1 py-0.5 rounded border border-current font-mono leading-none">
                {key}
              </kbd>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


