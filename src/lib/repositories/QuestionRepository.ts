import type { Question } from "@/types/quiz";
import { az900Questions } from "@/data/az900-questions";

// Repository interface — swap this for a SupabaseQuestionRepository when ready
export interface IQuestionRepository {
  getAll(): Promise<Question[]>;
  getById(id: number): Promise<Question | undefined>;
  getRandom(count: number): Promise<Question[]>;
}

// Synchronous local version (no async needed for static data)
export function getAllQuestions(): Question[] {
  return az900Questions;
}

export function getQuestionById(id: number): Question | undefined {
  return az900Questions.find((q) => q.id === id);
}

export function getTotalCount(): number {
  return az900Questions.length;
}
