import type { Question } from "@/types/quiz";
import { az900Questions } from "@/data/az900-questions";

export function getAllQuestions(): Question[] {
  return az900Questions;
}

export function getQuestionsByCategory(categoryId: string): Question[] {
  return az900Questions.filter((q) => q.categoryId === categoryId);
}

export function getQuestionById(id: number): Question | undefined {
  return az900Questions.find((q) => q.id === id);
}

export function getTotalCount(): number {
  return az900Questions.length;
}

export function getCategoryCount(categoryId: string): number {
  return az900Questions.filter((q) => q.categoryId === categoryId).length;
}
