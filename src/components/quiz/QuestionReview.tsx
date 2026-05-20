"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ChevronDown, Search, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuizStore } from "@/lib/store/quiz.store";
import type { Question, Answer } from "@/types/quiz";

interface QuestionReviewProps {
  question: Question;
  answer: Answer | undefined;
  index: number;
}

export function QuestionReview({ question, answer, index }: QuestionReviewProps) {
  const [showExplanation, setShowExplanation] = useState(false);
  const { markedQuestionIds, toggleMarkQuestion } = useQuizStore();
  const correct = answer?.isCorrect ?? false;
  const isMarked = markedQuestionIds.includes(question.id);
  const selectedOptions =
    answer?.selectedOptions ?? (answer?.selectedOption ? [answer.selectedOption] : []);
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
          <div className="flex items-center justify-between mb-1">
            <p className="text-xs font-semibold text-slate-400">Pregunta {index + 1}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleMarkQuestion(question.id)}
                title={isMarked ? "Quitar marca" : "Marcar pregunta"}
              >
                <Bookmark
                  size={13}
                  className={cn(
                    "transition-colors",
                    isMarked
                      ? "text-amber-500 fill-amber-500"
                      : "text-slate-300 dark:text-slate-600 hover:text-amber-400"
                  )}
                />
              </button>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(question.text + " Azure AZ-900")}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Buscar en Google"
                className="text-slate-300 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
              >
                <Search size={13} />
              </a>
            </div>
          </div>
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
