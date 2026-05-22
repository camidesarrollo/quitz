export interface TermCategory {
  id: string;
  name: string;
  icon: string;
}

export interface TermCard {
  id: number;
  term: string;
  definition: string;
  categoryId: string;
}

export const TERM_CATEGORIES: TermCategory[] = [
  { id: "cloud-fundamentals", name: "Conceptos de Cloud", icon: "☁️" },
  { id: "cloud-models", name: "Modelos de nube", icon: "🌐" },
  { id: "service-models", name: "Modelos de servicio", icon: "🏗️" },
  { id: "azure-architecture", name: "Arquitectura de Azure", icon: "🏢" },
  { id: "compute", name: "Cómputo", icon: "💻" },
  { id: "networking", name: "Redes", icon: "🌍" },
  { id: "storage", name: "Almacenamiento", icon: "💾" },
  { id: "security", name: "Seguridad e Identidad", icon: "🔐" },
  { id: "governance", name: "Gobernanza y Administración", icon: "📊" },
  { id: "costs", name: "Costos y SLA", icon: "💰" },
];

export const AZ900_TERMS: TermCard[] = [
  // ☁️ Cloud Fundamentals
  {
    id: 2001,
    term: "Cloud Computing",
    definition: "Entrega de servicios informáticos (cómputo, almacenamiento, redes) a través de internet, bajo demanda y con pago por uso.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2002,
    term: "High Availability (Alta Disponibilidad)",
    definition: "Diseño de sistemas para minimizar el tiempo de inactividad y garantizar el acceso continuo al servicio, normalmente mediante redundancia.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2003,
    term: "Scalability (Escalabilidad)",
    definition: "Capacidad de un sistema de aumentar o disminuir recursos para adaptarse a cambios en la demanda de manera planificada.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2004,
    term: "Elasticity (Elasticidad)",
    definition: "Escalado automático de recursos en tiempo real que se ajusta dinámicamente a los picos y valles de demanda sin intervención manual.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2005,
    term: "Fault Tolerance (Tolerancia a Fallos)",
    definition: "Capacidad de un sistema de continuar operando correctamente incluso cuando alguno de sus componentes falla.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2006,
    term: "Disaster Recovery (Recuperación ante Desastres)",
    definition: "Conjunto de políticas y procedimientos para restaurar sistemas, datos y operaciones después de un evento catastrófico.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2007,
    term: "CapEx (Gasto de Capital)",
    definition: "Inversión inicial en infraestructura física propia (servidores, edificios, hardware) que se deprecia con el tiempo.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2008,
    term: "OpEx (Gasto Operativo)",
    definition: "Gasto continuo por consumir servicios de terceros, sin inversión inicial en hardware; convierte costos fijos en variables.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2009,
    term: "Consumption-based Model (Pago por Consumo)",
    definition: "Modelo de facturación donde solo se paga por los recursos efectivamente utilizados, sin costos fijos anticipados.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2010,
    term: "Serverless (Sin Servidor)",
    definition: "Paradigma de cómputo donde el proveedor gestiona automáticamente la infraestructura; el desarrollador solo despliega código.",
    categoryId: "cloud-fundamentals",
  },
  {
    id: 2011,
    term: "Shared Responsibility Model",
    definition: "Marco que define qué aspectos de seguridad e infraestructura gestiona el proveedor cloud y cuáles gestiona el cliente.",
    categoryId: "cloud-fundamentals",
  },

  // 🌐 Cloud Models
  {
    id: 2012,
    term: "Public Cloud (Nube Pública)",
    definition: "Infraestructura cloud gestionada por un proveedor externo (como Azure), compartida entre múltiples clientes a través de internet.",
    categoryId: "cloud-models",
  },
  {
    id: 2013,
    term: "Private Cloud (Nube Privada)",
    definition: "Infraestructura cloud dedicada exclusivamente a una organización; puede estar on-premises o alojada por un proveedor.",
    categoryId: "cloud-models",
  },
  {
    id: 2014,
    term: "Hybrid Cloud (Nube Híbrida)",
    definition: "Entorno que combina nube pública y privada con integración entre ambas, permitiendo datos y apps moverse entre ellas.",
    categoryId: "cloud-models",
  },
  {
    id: 2015,
    term: "Multi-cloud",
    definition: "Estrategia de usar servicios de dos o más proveedores cloud públicos simultáneamente (Azure, AWS, GCP).",
    categoryId: "cloud-models",
  },

  // 🏗️ Service Models
  {
    id: 2016,
    term: "IaaS (Infrastructure as a Service)",
    definition: "El proveedor gestiona hardware virtualizado (VMs, redes, almacenamiento); el cliente es responsable del SO, middleware y apps.",
    categoryId: "service-models",
  },
  {
    id: 2017,
    term: "PaaS (Platform as a Service)",
    definition: "El proveedor gestiona infraestructura y SO; el cliente solo se ocupa del desarrollo e implementación de aplicaciones y datos.",
    categoryId: "service-models",
  },
  {
    id: 2018,
    term: "SaaS (Software as a Service)",
    definition: "Aplicación lista para usar entregada por internet; el proveedor gestiona todo y el usuario accede desde un navegador.",
    categoryId: "service-models",
  },

  // 🏢 Azure Architecture
  {
    id: 2019,
    term: "Region (Región de Azure)",
    definition: "Zona geográfica compuesta por uno o más datacenters cercanos, interconectados con red de baja latencia.",
    categoryId: "azure-architecture",
  },
  {
    id: 2020,
    term: "Region Pair (Par de Regiones)",
    definition: "Par de regiones de Azure en la misma geografía, separadas al menos 300 millas, usadas para recuperación ante desastres.",
    categoryId: "azure-architecture",
  },
  {
    id: 2021,
    term: "Availability Zone (Zona de Disponibilidad)",
    definition: "Datacenter físicamente separado dentro de una región, con alimentación eléctrica, red y refrigeración independientes.",
    categoryId: "azure-architecture",
  },
  {
    id: 2022,
    term: "Datacenter (Centro de Datos)",
    definition: "Instalación física con servidores, redes y almacenamiento que sostiene los servicios de Azure en una ubicación específica.",
    categoryId: "azure-architecture",
  },
  {
    id: 2023,
    term: "Resource (Recurso de Azure)",
    definition: "Entidad administrable en Azure, como una máquina virtual, cuenta de almacenamiento, base de datos SQL o red virtual.",
    categoryId: "azure-architecture",
  },
  {
    id: 2024,
    term: "Resource Group (Grupo de Recursos)",
    definition: "Contenedor lógico que agrupa recursos de Azure relacionados para gestión conjunta de permisos, facturación y ciclo de vida.",
    categoryId: "azure-architecture",
  },
  {
    id: 2025,
    term: "Subscription (Suscripción de Azure)",
    definition: "Unidad de facturación en Azure que contiene grupos de recursos y define límites de uso, acceso y costos.",
    categoryId: "azure-architecture",
  },
  {
    id: 2026,
    term: "Management Group (Grupo de Administración)",
    definition: "Contenedor jerárquico sobre las suscripciones que permite aplicar políticas y control de acceso de forma centralizada.",
    categoryId: "azure-architecture",
  },

  // 💻 Compute
  {
    id: 2027,
    term: "Virtual Machine (VM)",
    definition: "Emulación de hardware que ejecuta un SO completo; servicio IaaS donde el cliente administra el sistema operativo y las apps.",
    categoryId: "compute",
  },
  {
    id: 2028,
    term: "Scale Set (Conjunto de Escalado)",
    definition: "Grupo de VMs idénticas que se crean o eliminan automáticamente según reglas de escalado definidas para manejar la carga.",
    categoryId: "compute",
  },
  {
    id: 2029,
    term: "Availability Set (Conjunto de Disponibilidad)",
    definition: "Configuración que distribuye VMs entre dominios de actualización y de fallo para protegerlas de interrupciones de hardware.",
    categoryId: "compute",
  },
  {
    id: 2030,
    term: "Azure Virtual Desktop",
    definition: "Servicio administrado de virtualización de escritorios y aplicaciones Windows, accesible desde cualquier dispositivo.",
    categoryId: "compute",
  },
  {
    id: 2031,
    term: "Azure Functions",
    definition: "Servicio serverless de cómputo dirigido por eventos; ejecuta fragmentos de código en respuesta a triggers sin gestionar servidores.",
    categoryId: "compute",
  },
  {
    id: 2032,
    term: "Containers (Contenedores)",
    definition: "Unidades de software ligeras y portables que empaquetan código y dependencias para ejecutarse de forma consistente en cualquier entorno.",
    categoryId: "compute",
  },
  {
    id: 2033,
    term: "AKS (Azure Kubernetes Service)",
    definition: "Servicio administrado que simplifica el despliegue, escalado y operación de clústeres Kubernetes en Azure.",
    categoryId: "compute",
  },
  {
    id: 2034,
    term: "App Service",
    definition: "Plataforma PaaS completamente administrada para alojar aplicaciones web, APIs REST y backends móviles sin gestionar infraestructura.",
    categoryId: "compute",
  },

  // 🌍 Networking
  {
    id: 2035,
    term: "VNet (Virtual Network)",
    definition: "Red privada virtual en Azure que aísla y conecta recursos de forma segura, funcionando como una red corporativa en la nube.",
    categoryId: "networking",
  },
  {
    id: 2036,
    term: "Subnet (Subred)",
    definition: "Segmento de dirección IP dentro de una VNet que organiza y aísla grupos de recursos según sus necesidades de seguridad.",
    categoryId: "networking",
  },
  {
    id: 2037,
    term: "VNet Peering (Emparejamiento de VNet)",
    definition: "Conexión entre dos VNets de Azure que permite tráfico privado entre ellas usando la red troncal de Microsoft sin internet.",
    categoryId: "networking",
  },
  {
    id: 2038,
    term: "VPN Gateway",
    definition: "Servicio que establece túneles IPsec/IKE cifrados entre Azure y redes on-premises o entre diferentes VNets a través de internet.",
    categoryId: "networking",
  },
  {
    id: 2039,
    term: "ExpressRoute",
    definition: "Conexión de red privada y dedicada entre infraestructura on-premises y Azure, sin pasar por internet público.",
    categoryId: "networking",
  },
  {
    id: 2040,
    term: "Azure DNS",
    definition: "Servicio de resolución de nombres DNS alojado en Azure, con integración nativa con otros servicios y soporte para zonas privadas.",
    categoryId: "networking",
  },
  {
    id: 2041,
    term: "NSG (Network Security Group)",
    definition: "Lista de reglas de seguridad que filtra el tráfico de red entrante y saliente de recursos de Azure (VMs, subnets).",
    categoryId: "networking",
  },
  {
    id: 2042,
    term: "Public Endpoint (Punto de Conexión Público)",
    definition: "Dirección IP pública que expone un servicio de Azure a internet para que sea accesible desde cualquier lugar.",
    categoryId: "networking",
  },
  {
    id: 2043,
    term: "Private Endpoint (Punto de Conexión Privado)",
    definition: "Interfaz de red que conecta un servicio de Azure a una VNet mediante una dirección IP privada, eliminando la exposición a internet.",
    categoryId: "networking",
  },

  // 💾 Storage
  {
    id: 2044,
    term: "Blob Storage",
    definition: "Servicio de almacenamiento de objetos para datos no estructurados como imágenes, vídeos, archivos de log y copias de seguridad.",
    categoryId: "storage",
  },
  {
    id: 2045,
    term: "Disk Storage",
    definition: "Discos virtuales persistentes de alto rendimiento diseñados para usarse con máquinas virtuales de Azure.",
    categoryId: "storage",
  },
  {
    id: 2046,
    term: "Azure Files (File Storage)",
    definition: "Recursos compartidos de archivos en la nube accesibles mediante el protocolo SMB o NFS, montables en Windows, Linux y macOS.",
    categoryId: "storage",
  },
  {
    id: 2047,
    term: "Archive Tier (Nivel de Archivo)",
    definition: "Nivel de almacenamiento de Blob de menor costo, pensado para datos raramente accedidos con alta latencia de acceso aceptable.",
    categoryId: "storage",
  },
  {
    id: 2048,
    term: "Hot Tier (Nivel Frecuente)",
    definition: "Nivel de almacenamiento de Blob optimizado para datos de acceso frecuente; mayor costo de almacenamiento por GB.",
    categoryId: "storage",
  },
  {
    id: 2049,
    term: "Cool Tier (Nivel Esporádico)",
    definition: "Nivel de almacenamiento de Blob para datos de acceso poco frecuente; menor costo de almacenamiento que Hot, mayor que Archive.",
    categoryId: "storage",
  },
  {
    id: 2050,
    term: "LRS (Locally Redundant Storage)",
    definition: "Replica datos 3 veces dentro de un único datacenter en la misma región; mínimo nivel de redundancia disponible.",
    categoryId: "storage",
  },
  {
    id: 2051,
    term: "ZRS (Zone-Redundant Storage)",
    definition: "Replica datos de forma síncrona en 3 zonas de disponibilidad de la misma región; protege ante fallos de datacenter.",
    categoryId: "storage",
  },
  {
    id: 2052,
    term: "GRS (Geo-Redundant Storage)",
    definition: "Replica datos de forma asíncrona en una segunda región geográfica; protege ante desastres que afecten a toda una región.",
    categoryId: "storage",
  },
  {
    id: 2053,
    term: "RA-GRS (Read-Access Geo-Redundant Storage)",
    definition: "Como GRS pero añade acceso de solo lectura a los datos replicados en la región secundaria, incluso sin failover.",
    categoryId: "storage",
  },

  // 🔐 Security
  {
    id: 2054,
    term: "Microsoft Entra ID (antes Azure AD)",
    definition: "Servicio de identidad y directorio en la nube de Microsoft para autenticar usuarios y gestionar el acceso a aplicaciones y recursos.",
    categoryId: "security",
  },
  {
    id: 2055,
    term: "MFA (Multi-Factor Authentication)",
    definition: "Mecanismo de seguridad que exige al menos dos formas de verificación de identidad (contraseña + código, biométrico, etc.).",
    categoryId: "security",
  },
  {
    id: 2056,
    term: "SSO (Single Sign-On)",
    definition: "Capacidad de autenticarse una sola vez para acceder a múltiples aplicaciones y servicios sin volver a iniciar sesión.",
    categoryId: "security",
  },
  {
    id: 2057,
    term: "Conditional Access (Acceso Condicional)",
    definition: "Directivas que controlan el acceso a recursos en función de señales contextuales: usuario, dispositivo, ubicación y riesgo.",
    categoryId: "security",
  },
  {
    id: 2058,
    term: "RBAC (Role-Based Access Control)",
    definition: "Modelo de autorización que asigna permisos a roles y luego roles a usuarios, grupos o identidades, siguiendo el mínimo privilegio.",
    categoryId: "security",
  },
  {
    id: 2059,
    term: "Zero Trust",
    definition: "Principio de seguridad que asume que ninguna identidad ni red es de confianza por defecto; verifica explícitamente cada acceso.",
    categoryId: "security",
  },
  {
    id: 2060,
    term: "Defense in Depth (Defensa en Profundidad)",
    definition: "Estrategia de seguridad en capas (física, identidad, perímetro, red, cómputo, app, datos) para proteger recursos con múltiples barreras.",
    categoryId: "security",
  },
  {
    id: 2061,
    term: "Microsoft Defender for Cloud",
    definition: "Plataforma de gestión de postura de seguridad cloud (CSPM) y protección de cargas de trabajo (CWPP) en Azure y entornos híbridos.",
    categoryId: "security",
  },

  // 📊 Governance
  {
    id: 2062,
    term: "Azure Policy",
    definition: "Servicio para definir, asignar y administrar políticas que aplican reglas de cumplimiento sobre los recursos de Azure a escala.",
    categoryId: "governance",
  },
  {
    id: 2063,
    term: "Resource Lock (Bloqueo de Recursos)",
    definition: "Protección aplicada a suscripciones, grupos de recursos o recursos individuales para evitar su eliminación o modificación accidental.",
    categoryId: "governance",
  },
  {
    id: 2064,
    term: "Tags (Etiquetas)",
    definition: "Pares clave-valor que se aplican a recursos de Azure para organizarlos, filtrarlos y gestionar y atribuir costos.",
    categoryId: "governance",
  },
  {
    id: 2065,
    term: "Azure Advisor",
    definition: "Servicio que analiza configuraciones de Azure y ofrece recomendaciones personalizadas de coste, seguridad, rendimiento y fiabilidad.",
    categoryId: "governance",
  },
  {
    id: 2066,
    term: "Azure Monitor",
    definition: "Plataforma integral para recopilar, analizar y actuar sobre datos de telemetría (métricas y logs) de aplicaciones e infraestructura.",
    categoryId: "governance",
  },
  {
    id: 2067,
    term: "Log Analytics",
    definition: "Área de trabajo dentro de Azure Monitor donde se almacenan y consultan datos de registro usando el lenguaje KQL.",
    categoryId: "governance",
  },
  {
    id: 2068,
    term: "Application Insights",
    definition: "Extensión de Azure Monitor para monitorear el rendimiento, disponibilidad y uso de aplicaciones web en tiempo real.",
    categoryId: "governance",
  },
  {
    id: 2069,
    term: "Service Health",
    definition: "Panel personalizado que muestra incidentes activos, mantenimientos planificados y alertas de salud de los servicios de Azure que usás.",
    categoryId: "governance",
  },
  {
    id: 2070,
    term: "ARM (Azure Resource Manager)",
    definition: "Capa de gestión de Azure que procesa todas las operaciones de creación, actualización y eliminación de recursos de forma declarativa.",
    categoryId: "governance",
  },
  {
    id: 2071,
    term: "ARM Template (Plantilla ARM)",
    definition: "Archivo JSON que define la infraestructura y configuración de recursos Azure de forma declarativa como código (IaC).",
    categoryId: "governance",
  },
  {
    id: 2072,
    term: "Infrastructure as Code (IaC)",
    definition: "Práctica de definir y aprovisionar infraestructura mediante archivos de configuración versionables, reutilizables y auditables.",
    categoryId: "governance",
  },
  {
    id: 2073,
    term: "Azure Arc",
    definition: "Servicio que extiende la gestión, seguridad y políticas de Azure a servidores, Kubernetes y datos en entornos híbridos y multi-cloud.",
    categoryId: "governance",
  },

  // 💰 Costs & SLA
  {
    id: 2074,
    term: "SLA (Service Level Agreement)",
    definition: "Contrato que especifica el porcentaje mínimo de tiempo de actividad y conectividad garantizado por Microsoft para cada servicio.",
    categoryId: "costs",
  },
  {
    id: 2075,
    term: "Azure Pricing Calculator",
    definition: "Herramienta web para estimar el costo mensual de servicios de Azure según la configuración y región elegidas antes de contratarlos.",
    categoryId: "costs",
  },
  {
    id: 2076,
    term: "TCO Calculator (Total Cost of Ownership)",
    definition: "Herramienta que compara el costo total de mantener infraestructura on-premises versus migrar esas cargas de trabajo a Azure.",
    categoryId: "costs",
  },
  {
    id: 2077,
    term: "Reserved Instances (Instancias Reservadas)",
    definition: "Compromiso de uso de 1 o 3 años a cambio de descuentos de hasta el 72% respecto al precio de Pay-as-you-go.",
    categoryId: "costs",
  },
  {
    id: 2078,
    term: "Pay-as-you-go",
    definition: "Modelo de precios de Azure donde se factura únicamente por los recursos consumidos, sin compromisos previos de uso.",
    categoryId: "costs",
  },
];
