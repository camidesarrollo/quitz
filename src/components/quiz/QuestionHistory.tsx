"use client";

import { useState } from "react";
import { History, CheckCircle2, XCircle } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { cn } from "@/lib/utils";
import type { Answer, CompletedSession } from "@/types/quiz";

interface Attempt {
  answer: Answer;
  session: CompletedSession;
}

function shortDate(ts: number): string {
  return new Intl.DateTimeFormat("es", { dateStyle: "short" }).format(new Date(ts));
}

interface Props {
  questionId: number;
}

export function QuestionHistory({ questionId }: Props) {
  const history = useQuizStore((s) => s.history);
  const [expanded, setExpanded] = useState(false);

  const attempts: Attempt[] = history
    .flatMap((session) => {
      const qIdx = session.questions.findIndex((q) => q.id === questionId);
      if (qIdx === -1) return [];
      const answer = session.answers[qIdx];
      if (!answer) return [];
      return [{ answer, session }];
    })
    .sort((a, b) => b.answer.answeredAt - a.answer.answeredAt);

  if (attempts.length === 0) return null;

  const correctCount = attempts.filter((a) => a.answer.isCorrect).length;

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        <History size={11} className="shrink-0" />
        {expanded ? (
          <span>Ocultar historial</span>
        ) : (
          <span>
            {attempts.length} intento{attempts.length !== 1 ? "s" : ""} ·{" "}
            <span className={correctCount > 0 ? "text-emerald-500" : "text-red-400"}>
              {correctCount} correcto{correctCount !== 1 ? "s" : ""}
            </span>
          </span>
        )}
      </button>

      {expanded && (
        <div className="mt-2 space-y-1.5">
          {attempts.map(({ answer, session }, i) => {
            const selected = answer.selectedOptions ?? [answer.selectedOption];
            return (
              <div
                key={i}
                className={cn(
                  "flex gap-2 px-2.5 py-2 rounded-xl border text-xs",
                  answer.isCorrect
                    ? "border-emerald-100 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-950/20"
                    : "border-red-100 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20"
                )}
              >
                <div className="shrink-0 mt-0.5">
                  {answer.isCorrect ? (
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  ) : (
                    <XCircle size={12} className="text-red-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={cn(
                      "truncate leading-snug",
                      answer.isCorrect
                        ? "text-emerald-800 dark:text-emerald-200"
                        : "text-red-800 dark:text-red-300"
                    )}
                  >
                    {selected.join(", ")}
                  </p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
                    {session.config.label} · {shortDate(answer.answeredAt)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
