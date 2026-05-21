import type { Course } from "@/types/quiz";

export const AZ900: Course = {
  id: "az-900",
  code: "AZ-900",
  name: "Microsoft Azure Fundamentals",
  categories: [
    {
      id: "cloud-concepts",
      name: "Conceptos de la nube",
      description: "Modelos de nube, beneficios, IaaS/PaaS/SaaS, CapEx/OpEx",
    },
    {
      id: "azure-services",
      name: "Arquitectura y servicios de Azure",
      description: "Cómputo, redes, almacenamiento, IA, DevOps",
    },
    {
      id: "azure-management",
      name: "Administración y gobernanza",
      description: "Costos, gobernanza, cumplimiento, herramientas de gestión",
    },
  ],
  // Mirrors the real AZ-900 exam domain weights
  defaultWeights: [
    { categoryId: "cloud-concepts", weight: 28 },
    { categoryId: "azure-services", weight: 37 },
    { categoryId: "azure-management", weight: 35 },
  ],
  examConfig: {
    questionCount: 45,
    timeLimitSeconds: 65 * 60, // 65 minutes — matches official AZ-900 duration
    passingPercentage: 70,
  },
};

export const COURSES: Course[] = [AZ900];
