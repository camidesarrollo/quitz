export interface StudyCategory {
  id: string;
  principalCategory?: string;
  name: string;
  description?: string;
}

  export const AZ900_STUDY_CATEGORIES: StudyCategory[] = [
  {
    id: "shared-responsibility",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Responsabilidad compartida",
    description: "Modelo IaaS/PaaS/SaaS y responsabilidades de seguridad",
  },
  {
    id: "cloud-models",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Modelos de nube",
    description: "Diferentes modelos de implementación en la nube (pública, privada, híbrida)",
  },
  {
    id: "azure-consumption-model",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Modelos de consumo",
    description: "Características y ventajas del modelo basado en consumo en Azure",
  },
  {
    id: "high-availability-scalability",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Alta disponibilidad y escalabilidad",
    description: "Descripción de las ventajas de la alta disponibilidad y la escalabilidad en la nube",
  },
  {
    id: "reliability-forecasting",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Confiabilidad y previsibilidad",
    description: "Describir las ventajas de confiabilidad y previsibilidad en la nube",
  },
  {
    id: "security-governance",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Seguridad y gobernanza",
    description: "Descripción de las ventajas de la seguridad y la gobernanza en la nube",
  },
  {
    id: "management-capacity",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Capacidad de administración",
    description: "Descripción de las ventajas de la capacidad de administración en la nube",
  },
  {
    id: "infrastructure-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Infraestructura como servicio",
    description: "Describir la infraestructura como servicio",
  },
  {
    id: "platform-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Plataforma como servicio",
    description: "Descripción de la plataforma como servicio",
  },
  {
    id: "software-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los conceptos de la nube",
    name: "Software como servicio",
    description: "Descripción del software como servicio",
  },
];


