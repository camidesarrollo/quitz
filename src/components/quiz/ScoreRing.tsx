"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { isPassing } from "@/lib/quiz-utils";

interface ScoreRingProps {
  percentage: number;
  size?: number;
}

export function ScoreRing({ percentage, size = 160 }: ScoreRingProps) {
  const strokeWidth = 10;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  const passing = isPassing(percentage);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-slate-100 dark:stroke-slate-800"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          className={cn(passing ? "stroke-green-500" : "stroke-red-400")}
          initial={{ strokeDashoffset: circumference }}
          animate={{
            strokeDashoffset: circumference - (circumference * percentage) / 100,
          }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className={cn(
            "text-3xl font-bold tabular-nums",
            passing ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
          )}
        >
          {percentage}%
        </span>
        <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          {passing ? "Aprobado" : "Reprobado"}
        </span>
      </div>
    </div>
  );
}
