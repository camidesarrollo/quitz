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

export function getChapterExamQuestions(categoryIds: string[], countPerCategory: number): Question[] {
  const result: Question[] = [];
  for (const catId of categoryIds) {
    const pool = allStudyQuestions.filter((q) => q.categoryId === catId);
    const hard = pool.filter((q) => q.difficulty === "hard");
    const source = hard.length >= countPerCategory ? hard : pool;
    const arr = [...source];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    result.push(...arr.slice(0, Math.min(countPerCategory, arr.length)));
  }
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
