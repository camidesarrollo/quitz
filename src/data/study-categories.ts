export interface StudyCategory {
  id: string;
  principalCategory?: string;
  principalLabel?: string;
  name: string;
  description?: string;
  experienciaXP?: number | ((num: number) => number); //NUMERO MAXIMO DE EXPERIENCIA QUE PUEDE GANAR EL USUARIO AL MOMENTO DE REALIZAR UN EXAMEN EN CADA CATEGORIA
}

export const AZ900_STUDY_CATEGORIES: StudyCategory[] = [
  {
    id: "shared-responsibility",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la informática en la nube",
    principalLabel: "Informática en la nube",
    name: "Responsabilidad compartida",
    description: "Modelo IaaS/PaaS/SaaS y responsabilidades de seguridad",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "cloud-models",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la informática en la nube",
    principalLabel: "Informática en la nube",
    name: "Modelos de nube",
    description: "Diferentes modelos de implementación en la nube (pública, privada, híbrida)",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "azure-consumption-model",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la informática en la nube",
    principalLabel: "Informática en la nube",
    name: "Modelos de consumo",
    description: "Características y ventajas del modelo basado en consumo en Azure",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "high-availability-scalability",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de las ventajas de usar servicios en la nube",
    principalLabel: "Ventajas de la nube",
    name: "Alta disponibilidad y escalabilidad",
    description: "Descripción de las ventajas de la alta disponibilidad y la escalabilidad en la nube",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "reliability-forecasting",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de las ventajas de usar servicios en la nube",
    principalLabel: "Ventajas de la nube",
    name: "Confiabilidad y previsibilidad",
    description: "Describir las ventajas de confiabilidad y previsibilidad en la nube",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "security-governance",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de las ventajas de usar servicios en la nube",
    principalLabel: "Ventajas de la nube",
    name: "Seguridad y gobernanza",
    description: "Descripción de las ventajas de la seguridad y la gobernanza en la nube",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "management-capacity",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de las ventajas de usar servicios en la nube",
    principalLabel: "Ventajas de la nube",
    name: "Capacidad de administración",
    description: "Descripción de las ventajas de la capacidad de administración en la nube",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "infrastructure-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los tipos de servicio en la nube",
    principalLabel: "Tipos de servicio",
    name: "Infraestructura como servicio",
    description: "Describir la infraestructura como servicio",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "platform-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los tipos de servicio en la nube",
    principalLabel: "Tipos de servicio",
    name: "Plataforma como servicio",
    description: "Descripción de la plataforma como servicio",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "software-as-service",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los tipos de servicio en la nube",
    principalLabel: "Tipos de servicio",
    name: "Software como servicio",
    description: "Descripción del software como servicio",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "azure-accounts",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la arquitectura y los servicios de Azure",
    principalLabel: "Arquitectura de Azure",
    name: "Introducción a las cuentas de Azure",
    description: "Introducción a las cuentas de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-infrastructure",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la arquitectura y los servicios de Azure",
    principalLabel: "Arquitectura de Azure",
    name: "Infraestructura física de Azure",
    description: "Descripción de la infraestructura física de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-management-infrastructure",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la arquitectura y los servicios de Azure",
    principalLabel: "Arquitectura de Azure",
    name: "Infraestructura de administración de Azure",
    description: "Descripción de la infraestructura de administración de Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-virtual-machines",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de proceso de Azure",
    principalLabel: "Servicios de proceso",
    name: "Azure Virtual Machines",
    description: "Descripción de Azure Virtual Machines",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-container-instances",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de proceso de Azure",
    principalLabel: "Servicios de proceso",
    name: "Azure Container Instances",
    description: "Descripción de Azure Container Instances",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-functions",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de proceso de Azure",
    principalLabel: "Servicios de proceso",
    name: "Azure Functions",
    description: "Descripción de Azure Functions",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-ai-services",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de proceso de Azure",
    principalLabel: "Servicios de proceso",
    name: "Servicios de IA, ML e IoT",
    description: "Descripción de los servicios de IA, aprendizaje automático e IoT/Edge en Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-app-hosing",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de proceso de Azure",
    principalLabel: "Servicios de proceso",
    name: "Opciones de hospedaje de apps",
    description: "Descripción de las opciones de hospedaje de aplicaciones",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-virtual-networks",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de red de Azure",
    principalLabel: "Servicios de red",
    name: "Azure Virtual Networks",
    description: "Descripción de las redes virtuales de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-vpn",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de red de Azure",
    principalLabel: "Servicios de red",
    name: "Azure VPN",
    description: "Descripción de las redes privadas virtuales de Azure",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "azure-expressroute",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de red de Azure",
    principalLabel: "Servicios de red",
    name: "Azure ExpressRoute",
    description: "Descripción de Azure ExpressRoute",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-dns",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de red de Azure",
    principalLabel: "Servicios de red",
    name: "Azure DNS",
    description: "Descripción de Azure DNS",
    experienciaXP: 250, // MUY FÁCIL → 25 × 10
  },
  {
    id: "azure-storage-accounts",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de almacenamiento de Azure",
    principalLabel: "Servicios de almacenamiento",
    name: "Azure Storage Accounts",
    description: "Descripción de las cuentas de almacenamiento de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-storage-redundancy",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de almacenamiento de Azure",
    principalLabel: "Servicios de almacenamiento",
    name: "Azure Storage Redundancy",
    description: "Descripción de la redundancia de almacenamiento de Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-storage-services",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de almacenamiento de Azure",
    principalLabel: "Servicios de almacenamiento",
    name: "Azure Storage Services",
    description: "Descripción de los servicios de almacenamiento de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-data-migration-options",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de almacenamiento de Azure",
    principalLabel: "Servicios de almacenamiento",
    name: "Azure Data Migration Options",
    description: "Identificación de las opciones de migración de datos de Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-file-movement-options",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de los servicios de almacenamiento de Azure",
    principalLabel: "Servicios de almacenamiento",
    name: "Azure File Movement Options",
    description: "Identificación de las opciones de movimiento de archivos de Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-directory-services",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure Directory Services",
    description: "Descripción de los servicios de directorio de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-authentication-methods",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure Authentication Methods",
    description: "Descripción de los métodos de autenticación de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-external-identities",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure External Identities",
    description: "Descripción de identidades externas de Azure",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-conditional-access",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure Conditional Access",
    description: "Descripción del acceso condicional de Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "azure-role-based-access-control",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure Role-Based Access Control",
    description: "Descripción del control de acceso basado en roles de Azure",
    experienciaXP: 1000, // DIFÍCIL → 100 × 10
  },
  {
    id: "zero-trust-model",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Zero Trust Model",
    description: "Describir el modelo de confianza cero",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "defense-in-depth",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Defense in Depth",
    description: "Descripción de defensa en profundidad",
    experienciaXP: 500, // FÁCIL → 50 × 10
  },
  {
    id: "azure-encryption-and-key-management",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Azure Encryption and Key Management",
    description: "Descripción del cifrado y la administración de claves en Azure",
    experienciaXP: 750, // INTERMEDIO → 75 × 10
  },
  {
    id: "microsoft-defender-for-cloud",
    principalCategory: "Introducción a la infraestructura en la nube: Descripción de la identidad, el acceso y la seguridad de Azure",
    principalLabel: "Identidad, acceso y seguridad",
    name: "Microsoft Defender for Cloud",
    description: "Descripción de Microsoft Defender for Cloud",
    experienciaXP: 1000, // DIFÍCIL → 100 × 10
  },
];