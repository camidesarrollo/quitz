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
