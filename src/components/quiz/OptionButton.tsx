"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type OptionState = "default" | "selected" | "correct" | "wrong" | "reveal";

interface OptionButtonProps {
  label: string;
  text: string;
  state: OptionState;
  disabled?: boolean;
  onClick: () => void;
}

export function OptionButton({ label, text, state, disabled, onClick }: OptionButtonProps) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.005 } : {}}
      whileTap={!disabled ? { scale: 0.995 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full text-left px-4 py-3.5 rounded-xl border-2 transition-colors duration-150",
        "flex items-center gap-3",
        state === "default" &&
          "border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30",
        state === "selected" && "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/50",
        state === "correct" && "border-green-500 bg-green-50 dark:bg-green-950/50",
        state === "wrong" && "border-red-400 bg-red-50 dark:bg-red-950/50",
        state === "reveal" && "border-green-400 bg-green-50/60 dark:bg-green-950/30",
        disabled && "cursor-default"
      )}
    >
      <span
        className={cn(
          "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0",
          state === "default" && "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
          state === "selected" && "bg-indigo-500 text-white",
          state === "correct" && "bg-green-500 text-white",
          state === "wrong" && "bg-red-400 text-white",
          state === "reveal" && "bg-green-400 text-white"
        )}
      >
        {state === "correct" ? (
          <CheckCircle2 size={14} />
        ) : state === "wrong" ? (
          <XCircle size={14} />
        ) : (
          label
        )}
      </span>
      <span
        className={cn(
          "text-sm leading-snug",
          state === "correct" && "text-green-800 dark:text-green-200 font-medium",
          state === "wrong" && "text-red-800 dark:text-red-200",
          state === "reveal" && "text-green-700 dark:text-green-300 font-medium",
          (state === "default" || state === "selected") &&
            "text-slate-800 dark:text-slate-200"
        )}
      >
        {text}
      </span>
    </motion.button>
  );
}
