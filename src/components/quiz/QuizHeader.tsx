"use client";

import { ChevronRight } from "lucide-react";
import type { QuizConfig } from "@/types/quiz";
import { getCourseById, getCategoryById } from "@/lib/repositories/CourseRepository";

interface QuizHeaderProps {
  config: QuizConfig;
}

export function QuizHeader({ config }: QuizHeaderProps) {
  const course = getCourseById(config.courseId);
  const category = config.categoryId
    ? getCategoryById(config.courseId, config.categoryId)
    : null;

  if (!course) return null;

  return (
    <div className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800/60">
      <span className="text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide">
        {course.code}
      </span>
      <ChevronRight size={12} className="shrink-0 opacity-50" />
      <span className="truncate">
        {category ? category.name : "Simulacro completo"}
      </span>
    </div>
  );
}
