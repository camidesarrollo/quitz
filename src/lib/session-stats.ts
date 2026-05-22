import { getCourseById } from "@/lib/repositories/CourseRepository";
import type { Question, Answer } from "@/types/quiz";

export interface CategoryStat {
  id: string;
  name: string;
  correct: number;
  total: number;
  percentage: number;
}

interface SessionLike {
  config: { courseId: string };
  questions: Question[];
  answers: Record<number, Answer>;
}

export function buildCategoryStats(session: SessionLike): CategoryStat[] {
  const course = getCourseById(session.config.courseId);
  if (!course) return [];

  const map = new Map<string, { correct: number; total: number }>();
  session.questions.forEach((q, i) => {
    const catId = q.categoryId ?? "unknown";
    const entry = map.get(catId) ?? { correct: 0, total: 0 };
    entry.total++;
    if (session.answers[i]?.isCorrect) entry.correct++;
    map.set(catId, entry);
  });

  const stats: CategoryStat[] = [];
  map.forEach((counts, catId) => {
    const category = course.categories.find((c) => c.id === catId);
    if (!category) return;
    const percentage = counts.total > 0 ? Math.round((counts.correct / counts.total) * 100) : 0;
    stats.push({ id: catId, name: category.name, ...counts, percentage });
  });

  return stats.sort((a, b) => a.percentage - b.percentage);
}

export function categoryColor(pct: number): string {
  if (pct >= 70) return "text-green-600 dark:text-green-400";
  if (pct >= 50) return "text-amber-500 dark:text-amber-400";
  return "text-red-500 dark:text-red-400";
}

export function barColor(pct: number): string {
  if (pct >= 70) return "bg-green-500";
  if (pct >= 50) return "bg-amber-400";
  return "bg-red-500";
}
