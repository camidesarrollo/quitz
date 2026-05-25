import type { Question } from "@/types/quiz";
import { az900Questions } from "@/data/az900-questions";
import { AZ900_DIFFICULTY } from "@/data/az900-difficulty";

// Merge difficulty into every question at read time (data stays in a separate map)
const questionsWithDifficulty: Question[] = az900Questions.map((q) => ({
  ...q,
  difficulty: AZ900_DIFFICULTY[q.id],
}));

export function getAllQuestions(): Question[] {
  return questionsWithDifficulty;
}

export function getQuestionsByCategory(categoryId: string): Question[] {
  return questionsWithDifficulty.filter((q) => q.categoryId === categoryId);
}

export function getQuestionById(id: number): Question | undefined {
  return questionsWithDifficulty.find((q) => q.id === id);
}

export function getTotalCount(): number {
  return questionsWithDifficulty.length;
}

export function getCategoryCount(categoryId: string): number {
  return questionsWithDifficulty.filter((q) => q.categoryId === categoryId).length;
}
