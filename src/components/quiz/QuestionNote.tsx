"use client";

import { useState, useRef, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useNotesStore } from "@/lib/store/notes.store";
import { cn } from "@/lib/utils";

interface Props {
  questionId: number;
  /** Tint color for the focus ring and label. Defaults to indigo (quiz player). */
  accent?: "indigo" | "teal";
}

export function QuestionNote({ questionId, accent = "indigo" }: Props) {
  const { notes, setNote } = useNotesStore();
  const note = notes[questionId] ?? "";
  const [expanded, setExpanded] = useState(note.length > 0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-expand when navigating to a question that already has a note
  useEffect(() => {
    setExpanded(note.length > 0);
  }, [questionId]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleToggle() {
    const next = !expanded;
    setExpanded(next);
    if (next) setTimeout(() => textareaRef.current?.focus(), 40);
  }

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={handleToggle}
        className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
      >
        <Pencil size={11} className="shrink-0" />
        {expanded ? (
          <span>Ocultar nota</span>
        ) : note ? (
          <span className="italic truncate max-w-[260px] text-slate-500 dark:text-slate-400">
            {note}
          </span>
        ) : (
          <span>Agregar nota personal</span>
        )}
      </button>

      {expanded && (
        <textarea
          ref={textareaRef}
          value={note}
          onChange={(e) => setNote(questionId, e.target.value)}
          placeholder="Tu mnemónico, aclaración o regla para recordar..."
          rows={3}
          className={cn(
            "mt-2 w-full text-xs text-slate-700 dark:text-slate-300",
            "bg-slate-50 dark:bg-slate-800/60",
            "border border-slate-200 dark:border-slate-700 rounded-xl p-3",
            "resize-none outline-none leading-relaxed",
            "placeholder:text-slate-300 dark:placeholder:text-slate-600",
            accent === "teal"
              ? "focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-700 focus:border-transparent"
              : "focus:ring-2 focus:ring-indigo-300 dark:focus:ring-indigo-700 focus:border-transparent"
          )}
        />
      )}
    </div>
  );
}
