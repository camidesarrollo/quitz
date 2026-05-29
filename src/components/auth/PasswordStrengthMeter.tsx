"use client";

import { validatePassword } from "@/lib/password-strength";
import { cn } from "@/lib/utils";

const TEXT_COLOR: Record<number, string> = {
  0: "text-red-500 dark:text-red-400",
  1: "text-orange-500 dark:text-orange-400",
  2: "text-yellow-600 dark:text-yellow-400",
  3: "text-lime-600 dark:text-lime-400",
  4: "text-emerald-600 dark:text-emerald-400",
};

export function PasswordStrengthMeter({ password }: { password: string }) {
  if (!password) return null;

  const { score, label, colorClass } = validatePassword(password);

  return (
    <div className="mt-2 space-y-1.5">
      <div className="flex gap-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-1.5 flex-1 rounded-full transition-all duration-300",
              i < score ? colorClass : "bg-slate-200 dark:bg-slate-700"
            )}
          />
        ))}
      </div>
      <p className={cn("text-xs font-medium", TEXT_COLOR[score])}>{label}</p>
    </div>
  );
}
