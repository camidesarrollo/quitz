import type { Question } from "@/types/quiz";
import {
  az900StudyQuestions,
  cloudModelsQuestions,
  azureConsumptionModelQuestions,
  highAvailabilityScalabilityQuestions,
  reliabilityForecastingQuestions,
  securityGovernanceQuestions,
  managementCapacityQuestions,
  infrastructureAsServiceQuestions,
  platformAsServiceQuestions,
  softwareAsServiceQuestions,
  azureAccountsQuestions,
  azureInfrastructureQuestions,
  azureManagementInfrastructureQuestions
} from "@/data/az900-study-questions";
import { AZ900_STUDY_CATEGORIES } from "@/data/study-categories";
import type { StudyCategory } from "@/data/study-categories";

export { AZ900_STUDY_CATEGORIES };
export type { StudyCategory };

const allStudyQuestions: Question[] = [
  ...az900StudyQuestions,
  ...cloudModelsQuestions,
  ...azureConsumptionModelQuestions,
  ...highAvailabilityScalabilityQuestions,
  ...reliabilityForecastingQuestions,
  ...securityGovernanceQuestions,
  ...managementCapacityQuestions,
  ...infrastructureAsServiceQuestions,
  ...platformAsServiceQuestions,
  ...softwareAsServiceQuestions,
  ...azureAccountsQuestions,
  ...azureInfrastructureQuestions,
  ...azureManagementInfrastructureQuestions
];

export function getAllStudyQuestions(): Question[] {
  return allStudyQuestions;
}

export function getStudyQuestionsByCategory(categoryId: string): Question[] {
  return allStudyQuestions.filter((q) => q.categoryId === categoryId);
}

export function getStudyCategoryCount(categoryId: string): number {
  return allStudyQuestions.filter((q) => q.categoryId === categoryId).length;
}

export function getStudyQuestionsByIds(ids: number[]): Question[] {
  const idSet = new Set(ids);
  return allStudyQuestions.filter((q) => idSet.has(q.id));
}

export function getChapterExamQuestions(categoryIds: string[], count: number): Question[] {
  const idSet = new Set(categoryIds);
  const all = allStudyQuestions.filter((q) => idSet.has(q.categoryId ?? ""));
  const hard = all.filter((q) => q.difficulty === "hard");
  const pool = hard.length >= count ? hard : all;
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(count, arr.length));
}
