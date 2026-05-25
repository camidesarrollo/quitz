import type { Question } from "@/types/quiz";
import { az900StudyQuestions } from "@/data/az900-study-questions";
import { AZ900_STUDY_CATEGORIES } from "@/data/study-categories";
import type { StudyCategory } from "@/data/study-categories";

export { AZ900_STUDY_CATEGORIES };
export type { StudyCategory };

export function getAllStudyQuestions(): Question[] {
  return az900StudyQuestions;
}

export function getStudyQuestionsByCategory(categoryId: string): Question[] {
  return az900StudyQuestions.filter((q) => q.categoryId === categoryId);
}

export function getStudyCategoryCount(categoryId: string): number {
  return az900StudyQuestions.filter((q) => q.categoryId === categoryId).length;
}
