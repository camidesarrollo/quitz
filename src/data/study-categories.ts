export interface StudyCategory {
  id: string;
  name: string;
  description?: string;
}

export const AZ900_STUDY_CATEGORIES: StudyCategory[] = [
  {
    id: "shared-responsibility",
    name: "Responsabilidad compartida",
    description: "Modelo IaaS/PaaS/SaaS y responsabilidades de seguridad",
  },
];
