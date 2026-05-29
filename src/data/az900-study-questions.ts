import type { Question } from "@/types/quiz";

// IDs start at 10001 to avoid collision with exam question IDs
export const az900StudyQuestions: Question[] = [
  {
    id: 20001,
    categoryId: "shared-responsibility",
    text: "En el modelo de responsabilidad compartida de Azure, ¿quién es SIEMPRE responsable de la seguridad física del centro de datos?",
    options: ["El cliente", "El proveedor de nube", "Ambos por igual", "Depende del contrato"],
    correctAnswer: "El proveedor de nube",
    explaination: "La seguridad física (edificio, hardware, energía, refrigeración) es siempre responsabilidad exclusiva del proveedor, independientemente del modelo IaaS/PaaS/SaaS.",
    difficulty: "easy"
  },
  {
    id: 20002,
    categoryId: "shared-responsibility",
    text: "Una empresa usa Azure Virtual Machines. ¿Quién es responsable de aplicar parches al sistema operativo?",
    options: ["Microsoft, porque provee la VM", "El cliente, porque IaaS le da control del SO", "Nadie, Azure lo hace automáticamente", "El fabricante del SO"],
    correctAnswer: "El cliente, porque IaaS le da control del SO",
    explaination: "En IaaS el cliente gestiona el sistema operativo completo, incluyendo actualizaciones y parches de seguridad.",
    difficulty: "easy"
  },
  {
    id: 20003,
    categoryId: "shared-responsibility",
    text: "¿Cuál responsabilidad de seguridad es del cliente en TODOS los modelos de servicio (IaaS, PaaS y SaaS)?",
    options: ["Parches del sistema operativo", "Mantenimiento del hipervisor", "Gestión de identidades y acceso de sus usuarios", "Seguridad de la red física"],
    correctAnswer: "Gestión de identidades y acceso de sus usuarios",
    explaination: "La gestión de identidades (quién puede acceder y con qué permisos) siempre recae en el cliente en los tres modelos.",
    difficulty: "medium"
  },
  {
    id: 20004,
    categoryId: "shared-responsibility",
    text: "Una empresa usa Azure SQL Database (PaaS). Se descubre una vulnerabilidad crítica en el motor de SQL Server. ¿Quién la parchea?",
    options: ["El cliente", "Microsoft", "El proveedor de SQL Server (independiente de Azure)", "Ambos de forma simultánea"],
    correctAnswer: "Microsoft",
    explaination: "En PaaS, Microsoft gestiona el motor de base de datos, incluyendo sus parches y actualizaciones de seguridad.",
    difficulty: "easy"
  },
  {
    id: 20005,
    categoryId: "shared-responsibility",
    text: "¿Cuál de estas afirmaciones describe correctamente el modelo de responsabilidad compartida?",
    options: [
      "El proveedor asume toda la responsabilidad de seguridad en la nube",
      "El cliente asume toda la responsabilidad de seguridad en la nube",
      "La responsabilidad se divide según el modelo de servicio contratado",
      "La responsabilidad es siempre 50/50 entre cliente y proveedor"
    ],
    correctAnswer: "La responsabilidad se divide según el modelo de servicio contratado",
    explaination: "El modelo de responsabilidad compartida establece que cuanto más gestionado sea el servicio, más responsabilidad asume el proveedor.",
    difficulty: "easy"
  },
  {
    id: 20006,
    categoryId: "shared-responsibility",
    text: "En el modelo IaaS, ¿cuáles DOS elementos son responsabilidad del cliente? (Selecciona 2)",
    options: ["Hardware físico del servidor", "Sistema operativo y sus parches", "Hipervisor de virtualización", "Aplicaciones instaladas en la VM"],
    correctAnswers: ["Sistema operativo y sus parches", "Aplicaciones instaladas en la VM"],
    explaination: "En IaaS el cliente controla desde el SO hacia arriba: SO, middleware, runtime, aplicaciones y datos. El hardware y el hipervisor son del proveedor.",
    difficulty: "medium"
  },
  {
    id: 20007,
    categoryId: "shared-responsibility",
    text: "Una empresa usa Microsoft 365 (SaaS). ¿De qué es responsable el cliente desde el punto de vista de seguridad?",
    options: [
      "Del sistema operativo de los servidores de Microsoft",
      "De la infraestructura de red de Microsoft",
      "De la configuración de acceso y de sus propios datos",
      "Del cifrado en tránsito entre datacenters"
    ],
    correctAnswer: "De la configuración de acceso y de sus propios datos",
    explaination: "En SaaS, el cliente es responsable de gestionar quién accede, con qué roles y de proteger sus propios datos. La infraestructura y la app las gestiona Microsoft.",
    difficulty: "medium"
  },
  {
    id: 20008,
    categoryId: "shared-responsibility",
    text: "¿Qué modelo de servicio otorga al cliente el MAYOR control y la MAYOR responsabilidad de seguridad?",
    options: ["SaaS", "PaaS", "IaaS", "Todos son iguales"],
    correctAnswer: "IaaS",
    explaination: "IaaS da mayor control (y por tanto mayor responsabilidad) porque el cliente gestiona desde el sistema operativo hasta las aplicaciones.",
    difficulty: "easy"
  },
  {
    id: 20009,
    categoryId: "shared-responsibility",
    text: "¿Cuál es la responsabilidad del proveedor de nube en el modelo PaaS respecto al sistema operativo?",
    options: [
      "El proveedor no tiene responsabilidad sobre el SO en PaaS",
      "El proveedor gestiona y parchea el sistema operativo subyacente",
      "El cliente elige qué parches aplicar al SO",
      "El SO es gestionado conjuntamente 50/50"
    ],
    correctAnswer: "El proveedor gestiona y parchea el sistema operativo subyacente",
    explaination: "En PaaS, el proveedor gestiona la plataforma completa incluyendo el SO. El cliente solo gestiona sus aplicaciones y datos.",
    difficulty: "easy"
  },
  {
    id: 20010,
    categoryId: "shared-responsibility",
    text: "Una brecha de seguridad ocurre porque el cliente no configuró correctamente los NSG de sus VMs. ¿De quién es la responsabilidad?",
    options: ["De Microsoft, porque provee los NSG", "Del cliente, porque la configuración de red en IaaS es su responsabilidad", "Responsabilidad compartida al 50%", "De la empresa de auditoría de seguridad"],
    correctAnswer: "Del cliente, porque la configuración de red en IaaS es su responsabilidad",
    explaination: "En IaaS, la configuración de los NSG (grupos de seguridad de red) es responsabilidad del cliente. Microsoft provee la herramienta pero no la configura.",
    difficulty: "medium"
  },
  {
    id: 20011,
    categoryId: "shared-responsibility",
    text: "¿Qué elemento de seguridad es responsabilidad del cliente tanto en IaaS como en PaaS, pero que en SaaS gestiona el proveedor?",
    options: ["La seguridad física", "El código de la aplicación desplegada", "El hardware de red", "El hipervisor"],
    correctAnswer: "El código de la aplicación desplegada",
    explaination: "En IaaS y PaaS el cliente despliega y es responsable de su código. En SaaS la aplicación ya está construida y gestionada por el proveedor.",
    difficulty: "hard"
  },
  {
    id: 20012,
    categoryId: "shared-responsibility",
    text: "¿Qué significa que un proveedor de nube sea 'HIPAA compliant' para una empresa de salud que usa sus servicios?",
    options: [
      "Que la empresa de salud ya no tiene ninguna obligación de cumplimiento",
      "Que el proveedor garantiza la seguridad de la infraestructura, pero la empresa sigue siendo responsable de sus datos y configuración",
      "Que el proveedor asume toda la responsabilidad legal ante incidentes",
      "Que solo puede usar servicios SaaS"
    ],
    correctAnswer: "Que el proveedor garantiza la seguridad de la infraestructura, pero la empresa sigue siendo responsable de sus datos y configuración",
    explaination: "La responsabilidad compartida aplica también al cumplimiento normativo. El proveedor puede ser 'Business Associate', pero el cliente sigue siendo responsable de sus datos y de cómo configura el acceso.",
    difficulty: "hard"
  },
  {
    id: 20013,
    categoryId: "shared-responsibility",
    text: "¿Cuáles DOS responsabilidades son siempre del cliente, en cualquier modelo de servicio? (Selecciona 2)",
    options: ["Parches del sistema operativo", "Clasificación y protección de sus datos", "Mantenimiento del hipervisor", "Gestión de identidades y accesos de sus usuarios"],
    correctAnswers: ["Clasificación y protección de sus datos", "Gestión de identidades y accesos de sus usuarios"],
    explaination: "Los datos y las identidades siempre son responsabilidad del cliente. El cliente decide qué datos almacena, cómo los clasifica y quién tiene acceso.",
    difficulty: "hard"
  },
  {
    id: 20014,
    categoryId: "shared-responsibility",
    text: "Una empresa migra de IaaS a PaaS. ¿Cuál responsabilidad de seguridad desaparece para el cliente?",
    options: ["Gestión de sus datos", "Parches del sistema operativo", "Control de acceso a sus aplicaciones", "Configuración de su lógica de negocio"],
    correctAnswer: "Parches del sistema operativo",
    explaination: "Al pasar a PaaS, el proveedor toma control del SO. El cliente ya no necesita gestionar parches del sistema operativo.",
    difficulty: "medium"
  },
  {
    id: 20015,
    categoryId: "shared-responsibility",
    text: "¿Cuál es la ventaja de seguridad de usar PaaS en lugar de IaaS?",
    options: [
      "El cliente tiene más control sobre la red",
      "Se reduce la superficie de ataque al eliminar la gestión del SO por parte del cliente",
      "PaaS ofrece más opciones de cifrado",
      "PaaS permite instalar cualquier software de seguridad"
    ],
    correctAnswer: "Se reduce la superficie de ataque al eliminar la gestión del SO por parte del cliente",
    explaination: "Al no gestionar el SO, el cliente tiene menos componentes que mantener y parchear, reduciendo la posibilidad de errores de configuración y vulnerabilidades.",
    difficulty: "medium"
  },
  {
    id: 20016,
    categoryId: "shared-responsibility",
    text: "Azure Functions ejecuta lógica de negocio de un cliente. ¿De qué es responsable el cliente?",
    options: [
      "Del servidor físico y del SO",
      "Solo del código de la función y de los datos que procesa",
      "Del runtime de ejecución y sus actualizaciones",
      "De la red física del datacenter"
    ],
    correctAnswer: "Solo del código de la función y de los datos que procesa",
    explaination: "Azure Functions es serverless (PaaS/FaaS). Microsoft gestiona infraestructura, SO y runtime. El cliente es responsable únicamente de su código y datos.",
    difficulty: "medium"
  },
  {
    id: 20017,
    categoryId: "shared-responsibility",
    text: "En el modelo on-premises (infraestructura propia), ¿quién gestiona la seguridad física?",
    options: ["Un proveedor de nube", "La propia empresa", "Un tercero designado por la nube", "Nadie, no aplica"],
    correctAnswer: "La propia empresa",
    explaination: "En on-premises la empresa es responsable de absolutamente todo, incluyendo la seguridad física de sus instalaciones y hardware.",
    difficulty: "easy"
  },
  {
    id: 20018,
    categoryId: "shared-responsibility",
    text: "¿Cuál afirmación sobre SaaS y la responsabilidad de seguridad es CORRECTA?",
    options: [
      "El cliente gestiona la aplicación y el proveedor los datos",
      "El proveedor gestiona la aplicación y el cliente gestiona sus datos e identidades",
      "El cliente gestiona tanto la aplicación como los datos",
      "El proveedor gestiona todo sin excepciones"
    ],
    correctAnswer: "El proveedor gestiona la aplicación y el cliente gestiona sus datos e identidades",
    explaination: "En SaaS el proveedor gestiona la aplicación completa. El cliente es responsable de sus datos, de qué usuarios tienen acceso y cómo configuran el uso de la aplicación.",
    difficulty: "easy"
  },
  {
    id: 20019,
    categoryId: "shared-responsibility",
    text: "¿Qué capa del modelo de responsabilidad compartida gestiona el proveedor en IaaS pero NO el cliente?",
    options: ["Aplicaciones", "Datos", "Sistema operativo", "Virtualización e hipervisor"],
    correctAnswer: "Virtualización e hipervisor",
    explaination: "En IaaS, el proveedor gestiona el hardware físico, la virtualización y el hipervisor. El cliente toma control desde el sistema operativo hacia arriba.",
    difficulty: "medium"
  },
  {
    id: 20020,
    categoryId: "shared-responsibility",
    text: "Una empresa quiere que Azure gestione el mayor número posible de responsabilidades de seguridad. ¿Qué modelo debería elegir?",
    options: ["IaaS", "On-premises", "SaaS", "PaaS con VMs adicionales"],
    correctAnswer: "SaaS",
    explaination: "SaaS es el modelo donde el proveedor asume la mayor cantidad de responsabilidades de seguridad, dejando al cliente solo la gestión de identidades y datos.",
    difficulty: "easy"
  },
  {
    id: 20021,
    categoryId: "shared-responsibility",
    text: "¿Cuál es la diferencia de responsabilidad entre IaaS y on-premises respecto al hardware?",
    options: [
      "En ambos el cliente gestiona el hardware",
      "En IaaS el proveedor gestiona el hardware; en on-premises el cliente",
      "En ambos el proveedor gestiona el hardware",
      "En on-premises el proveedor gestiona el hardware"
    ],
    correctAnswer: "En IaaS el proveedor gestiona el hardware; en on-premises el cliente",
    explaination: "Pasar de on-premises a IaaS transfiere al proveedor la responsabilidad del hardware físico, la red física y la virtualización.",
    difficulty: "medium"
  },
  {
    id: 20022,
    categoryId: "shared-responsibility",
    text: "¿Por qué es importante entender el modelo de responsabilidad compartida al planificar la seguridad en la nube?",
    options: [
      "Para saber cuánto cuesta el servicio",
      "Para identificar claramente qué controles de seguridad debe implementar el cliente",
      "Para elegir la región de Azure más cercana",
      "Para calcular el ancho de banda necesario"
    ],
    correctAnswer: "Para identificar claramente qué controles de seguridad debe implementar el cliente",
    explaination: "Entender la responsabilidad compartida permite al cliente saber exactamente qué controles de seguridad son su responsabilidad y no asumir que el proveedor lo cubre todo.",
    difficulty: "medium"
  },
  {
    id: 20023,
    categoryId: "shared-responsibility",
    text: "¿Qué componente de seguridad gestiona SIEMPRE el proveedor de nube independientemente del modelo de servicio? (Selecciona 2)",
    options: ["Parches de aplicaciones del cliente", "Seguridad física del datacenter", "Configuración de identidades del cliente", "Red física del datacenter"],
    correctAnswers: ["Seguridad física del datacenter", "Red física del datacenter"],
    explaination: "La seguridad física y la red física del datacenter son siempre responsabilidad del proveedor en IaaS, PaaS y SaaS.",
    difficulty: "hard"
  },
  {
    id: 20024,
    categoryId: "shared-responsibility",
    text: "Un cliente usa Azure App Service (PaaS) y su aplicación web es hackeada por inyección SQL en el código. ¿De quién es la responsabilidad?",
    options: [
      "De Microsoft, porque gestiona la plataforma",
      "Del cliente, porque el código de la aplicación es su responsabilidad",
      "Responsabilidad 50/50",
      "Del desarrollador del framework usado"
    ],
    correctAnswer: "Del cliente, porque el código de la aplicación es su responsabilidad",
    explaination: "Aunque Microsoft gestiona la plataforma en PaaS, el código de la aplicación (y sus vulnerabilidades como inyección SQL) es responsabilidad del cliente.",
    difficulty: "medium"
  },
  {
    id: 20025,
    categoryId: "shared-responsibility",
    text: "¿En qué modelo de servicio el cliente tiene responsabilidad sobre la red virtual (VNet) y sus configuraciones de seguridad?",
    options: ["Solo SaaS", "Solo PaaS", "IaaS (y parcialmente PaaS)", "En ninguno, Azure gestiona toda la red"],
    correctAnswer: "IaaS (y parcialmente PaaS)",
    explaination: "En IaaS el cliente configura y gestiona las redes virtuales, NSG y reglas de firewall. En PaaS algunas configuraciones de red son posibles pero el cliente tiene menos control.",
    difficulty: "hard"
  },
  {
    id: 20026,
    categoryId: "shared-responsibility",
    text: "¿Qué sucede con las responsabilidades del cliente cuando migra de on-premises a SaaS?",
    options: [
      "Las responsabilidades del cliente aumentan significativamente",
      "Las responsabilidades del cliente se mantienen igual",
      "Las responsabilidades del cliente se reducen drásticamente",
      "El cliente no tiene ninguna responsabilidad en SaaS"
    ],
    correctAnswer: "Las responsabilidades del cliente se reducen drásticamente",
    explaination: "Al migrar a SaaS, el proveedor asume la gestión de infraestructura, plataforma y aplicación. El cliente solo gestiona sus datos e identidades.",
    difficulty: "easy"
  },
  {
    id: 20027,
    categoryId: "shared-responsibility",
    text: "¿Cuál es el riesgo principal de no entender el modelo de responsabilidad compartida?",
    options: [
      "Pagar más de lo necesario por el servicio",
      "Asumir que el proveedor cubre toda la seguridad y dejar gaps de protección",
      "Elegir la región equivocada para los recursos",
      "No poder escalar la aplicación"
    ],
    correctAnswer: "Asumir que el proveedor cubre toda la seguridad y dejar gaps de protección",
    explaination: "El error más común es creer que 'la nube es segura por defecto'. Si el cliente no gestiona sus responsabilidades (parches, accesos, datos), existen brechas de seguridad.",
    difficulty: "medium"
  },
  {
    id: 20028,
    categoryId: "shared-responsibility",
    text: "En IaaS, ¿cuál es la responsabilidad del cliente respecto al middleware (como servidores de aplicaciones)?",
    options: [
      "Microsoft gestiona todo el middleware automáticamente",
      "El cliente instala, configura y parchea el middleware",
      "El middleware no aplica en IaaS",
      "El middleware es responsabilidad compartida al 50%"
    ],
    correctAnswer: "El cliente instala, configura y parchea el middleware",
    explaination: "En IaaS, el cliente controla desde el SO hacia arriba. Esto incluye la instalación, configuración y mantenimiento de middleware como IIS, Apache o servidores de aplicaciones Java.",
    difficulty: "medium"
  },
  {
    id: 20029,
    categoryId: "shared-responsibility",
    text: "¿Cuál modelo de servicio en la nube requiere que el cliente gestione el mayor número de capas de seguridad?",
    options: ["SaaS", "PaaS", "IaaS", "CaaS (Containers as a Service)"],
    correctAnswer: "IaaS",
    explaination: "IaaS requiere que el cliente gestione SO, middleware, runtime, aplicaciones, datos, identidades y parte de la red. Es el modelo con mayor número de capas bajo responsabilidad del cliente.",
    difficulty: "easy"
  },
  {
    id: 20030,
    categoryId: "shared-responsibility",
    text: "Relaciona correctamente el modelo de servicio con quién parchea el sistema operativo:",
    options: [
      "IaaS: Cliente — PaaS: Cliente — SaaS: Proveedor",
      "IaaS: Cliente — PaaS: Proveedor — SaaS: Proveedor",
      "IaaS: Proveedor — PaaS: Cliente — SaaS: Proveedor",
      "IaaS: Proveedor — PaaS: Proveedor — SaaS: Cliente"
    ],
    correctAnswer: "IaaS: Cliente — PaaS: Proveedor — SaaS: Proveedor",
    explaination: "En IaaS el cliente gestiona el SO y sus parches. En PaaS y SaaS el proveedor gestiona el SO subyacente de forma transparente para el cliente.",
    difficulty: "medium"
  },
];

// ─────────────────────────────────────────────
// cloud-models  (20031–20060)
// ─────────────────────────────────────────────
export const cloudModelsQuestions: Question[] = [
  {
    id: 20031,
    categoryId: "cloud-models",
    text: "¿Cuál es la característica principal que diferencia a la nube pública de la nube privada?",
    options: [
      "La nube pública es más segura que la privada",
      "En la nube pública los recursos son compartidos entre múltiples organizaciones",
      "La nube pública solo puede usarla el gobierno",
      "La nube pública no ofrece SLA"
    ],
    correctAnswer: "En la nube pública los recursos son compartidos entre múltiples organizaciones",
    explaination: "La nube pública es una infraestructura compartida (multi-tenant) donde múltiples organizaciones usan los mismos recursos físicos, aunque lógicamente aislados.",
    difficulty: "easy"
  },
  {
    id: 20032,
    categoryId: "cloud-models",
    text: "¿En qué escenario una empresa debería considerar una nube privada?",
    options: [
      "Cuando quiere reducir costos de capital al máximo",
      "Cuando tiene requisitos regulatorios muy estrictos que exigen hardware dedicado",
      "Cuando quiere acceso inmediato a recursos bajo demanda globalmente",
      "Cuando es una startup sin presupuesto de TI"
    ],
    correctAnswer: "Cuando tiene requisitos regulatorios muy estrictos que exigen hardware dedicado",
    explaination: "La nube privada es adecuada para organizaciones con requisitos de cumplimiento o seguridad que exigen control total sobre el hardware y el aislamiento completo.",
    difficulty: "medium"
  },
  {
    id: 20033,
    categoryId: "cloud-models",
    text: "¿Qué modelo de nube combina infraestructura local con recursos de nube pública?",
    options: ["Nube comunitaria", "Nube distribuida", "Nube híbrida", "Multi-nube"],
    correctAnswer: "Nube híbrida",
    explaination: "La nube híbrida integra una infraestructura local (on-premises o nube privada) con una nube pública, permitiendo mover cargas de trabajo entre ambas.",
    difficulty: "easy"
  },
  {
    id: 20034,
    categoryId: "cloud-models",
    text: "Una empresa tiene 100 servidores on-premises y quiere recursos adicionales para picos de demanda sin construir otro datacenter. ¿Qué modelo recomiendas?",
    options: ["Migrar todo a nube pública", "Implementar una segunda nube privada", "Adoptar un modelo de nube híbrida", "Comprar más servidores físicos"],
    correctAnswer: "Adoptar un modelo de nube híbrida",
    explaination: "La nube híbrida permite mantener los servidores existentes y usar la nube pública solo cuando se necesita capacidad adicional, minimizando costos de capital.",
    difficulty: "easy"
  },
  {
    id: 20035,
    categoryId: "cloud-models",
    text: "¿Cuál es una ventaja de la nube pública sobre la nube privada?",
    options: [
      "Mayor control sobre el hardware",
      "Hardware dedicado exclusivamente para la organización",
      "No requiere inversión inicial de capital (CapEx)",
      "Mayor aislamiento de datos"
    ],
    correctAnswer: "No requiere inversión inicial de capital (CapEx)",
    explaination: "La nube pública opera bajo modelo OpEx (pago por uso), eliminando la necesidad de inversión inicial en hardware. La nube privada requiere inversión en infraestructura propia.",
    difficulty: "easy"
  },
  {
    id: 20036,
    categoryId: "cloud-models",
    text: "¿Cuáles DOS son características de la nube pública? (Selecciona 2)",
    options: ["Hardware dedicado para cada cliente", "Modelo de pago por uso", "Gestión de autoservicio de recursos", "Control total sobre el sistema operativo subyacente"],
    correctAnswers: ["Modelo de pago por uso", "Gestión de autoservicio de recursos"],
    explaination: "La nube pública se caracteriza por el pago según consumo y la capacidad de aprovisionar recursos de forma autónoma sin intervención del proveedor.",
    difficulty: "medium"
  },
  {
    id: 20037,
    categoryId: "cloud-models",
    text: "Una organización aloja todos sus recursos en su propio datacenter y los gestiona completamente. ¿Cómo se denomina este modelo?",
    options: ["Nube pública", "Nube híbrida", "Nube privada", "Nube comunitaria"],
    correctAnswer: "Nube privada",
    explaination: "Una nube privada es infraestructura de nube usada exclusivamente por una organización, puede estar en sus instalaciones o en un datacenter de terceros, pero con acceso dedicado.",
    difficulty: "easy"
  },
  {
    id: 20038,
    categoryId: "cloud-models",
    text: "¿Para implementar un modelo de nube híbrida, una empresa primero necesita tener una nube privada?",
    options: ["Sí, es un requisito obligatorio", "No, puede tener infraestructura on-premises sin que sea una nube privada formal", "Solo si usa Azure", "Sí, pero puede ser una nube privada en Azure"],
    correctAnswer: "No, puede tener infraestructura on-premises sin que sea una nube privada formal",
    explaination: "La nube híbrida solo requiere combinar infraestructura local (que puede ser on-premises tradicional) con nube pública. No es necesario tener una nube privada formalizada.",
    difficulty: "medium"
  },
  {
    id: 20039,
    categoryId: "cloud-models",
    text: "¿Cuál es una desventaja de la nube privada comparada con la nube pública?",
    options: [
      "Menor seguridad y aislamiento",
      "No permite cumplir requisitos regulatorios",
      "Requiere mayor inversión de capital y personal de TI para gestión",
      "No puede escalar"
    ],
    correctAnswer: "Requiere mayor inversión de capital y personal de TI para gestión",
    explaination: "La nube privada implica comprar y mantener hardware propio, contratar personal especializado y gestionar toda la infraestructura, lo que resulta en mayor CapEx y costos operativos.",
    difficulty: "medium"
  },
  {
    id: 20040,
    categoryId: "cloud-models",
    text: "¿En qué circunstancia una empresa debería considerar migrar completamente de on-premises a nube pública?",
    options: [
      "Cuando quiere hardware dedicado exclusivo",
      "Cuando necesita reducir la inversión en capital y ganar agilidad",
      "Cuando tiene datos extremadamente sensibles que no pueden salir de sus instalaciones",
      "Cuando necesita control total sobre el hipervisor"
    ],
    correctAnswer: "Cuando necesita reducir la inversión en capital y ganar agilidad",
    explaination: "Migrar a nube pública elimina el CapEx en hardware, convierte los costos en OpEx y permite aprovisionar recursos rápidamente.",
    difficulty: "easy"
  },
  {
    id: 20041,
    categoryId: "cloud-models",
    text: "¿Qué permite que la nube híbrida sea más flexible que usar solo nube pública o solo privada?",
    options: [
      "Que usa hardware más moderno",
      "Que permite mover cargas de trabajo entre entornos según necesidad",
      "Que elimina todos los costos de TI",
      "Que es siempre más barata"
    ],
    correctAnswer: "Que permite mover cargas de trabajo entre entornos según necesidad",
    explaination: "La nube híbrida permite 'cloud bursting': mantener datos sensibles on-premises y usar la nube pública para cargas variables o menos sensibles.",
    difficulty: "medium"
  },
  {
    id: 20042,
    categoryId: "cloud-models",
    text: "¿Cuál de los siguientes es un ejemplo de uso típico de nube híbrida?",
    options: [
      "Una startup que usa solo Azure para todos sus recursos",
      "Un banco que mantiene datos regulados on-premises y usa Azure para aplicaciones de análisis",
      "Una empresa que usa solo su datacenter privado",
      "Una empresa que usa dos proveedores de nube pública"
    ],
    correctAnswer: "Un banco que mantiene datos regulados on-premises y usa Azure para aplicaciones de análisis",
    explaination: "Este es un caso clásico de nube híbrida: datos sensibles regulados permanecen on-premises (cumplimiento) mientras se aprovecha la nube pública para análisis y flexibilidad.",
    difficulty: "medium"
  },
  {
    id: 20043,
    categoryId: "cloud-models",
    text: "¿Puede una nube privada estar ubicada fuera de las instalaciones de la empresa?",
    options: [
      "No, por definición debe estar en las instalaciones de la empresa",
      "Sí, puede estar en un datacenter de terceros con acceso dedicado",
      "Solo si la empresa la alquila en Azure",
      "Solo en nubes gubernamentales"
    ],
    correctAnswer: "Sí, puede estar en un datacenter de terceros con acceso dedicado",
    explaination: "Una nube privada se define por el acceso exclusivo de una organización, no por la ubicación física. Puede estar en instalaciones propias o en un datacenter de terceros con recursos dedicados.",
    difficulty: "hard"
  },
  {
    id: 20044,
    categoryId: "cloud-models",
    text: "¿Cuáles DOS afirmaciones son verdaderas sobre la nube pública? (Selecciona 2)",
    options: [
      "Los recursos de hardware son dedicados por cliente",
      "Permite escalar globalmente de forma rápida",
      "No requiere que el cliente gestione la infraestructura física",
      "Ofrece mayor control sobre el sistema operativo que la nube privada"
    ],
    correctAnswers: ["Permite escalar globalmente de forma rápida", "No requiere que el cliente gestione la infraestructura física"],
    explaination: "La nube pública permite escalar globalmente bajo demanda y libera al cliente de gestionar hardware. El hardware es compartido (no dedicado) y el control del SO depende del servicio contratado.",
    difficulty: "medium"
  },
  {
    id: 20045,
    categoryId: "cloud-models",
    text: "Una empresa usa Azure (nube pública) pero también tiene servidores físicos en sus oficinas que se conectan a Azure vía VPN. ¿Qué modelo de nube describe esta situación?",
    options: ["Nube pública exclusiva", "Nube privada exclusiva", "Nube híbrida", "Multi-cloud"],
    correctAnswer: "Nube híbrida",
    explaination: "La combinación de infraestructura on-premises conectada a una nube pública mediante VPN o ExpressRoute es el modelo de nube híbrida.",
    difficulty: "easy"
  },
  {
    id: 20046,
    categoryId: "cloud-models",
    text: "¿Qué ventaja ofrece la nube pública en términos de disponibilidad geográfica?",
    options: [
      "Solo está disponible en una región por país",
      "Ofrece múltiples regiones y zonas de disponibilidad en todo el mundo",
      "Solo está disponible en América del Norte",
      "La disponibilidad geográfica depende del cliente"
    ],
    correctAnswer: "Ofrece múltiples regiones y zonas de disponibilidad en todo el mundo",
    explaination: "Los proveedores de nube pública como Azure tienen datacenters en múltiples regiones globales, lo que permite desplegar recursos cerca de los usuarios y con alta disponibilidad.",
    difficulty: "easy"
  },
  {
    id: 20047,
    categoryId: "cloud-models",
    text: "¿Cuál es la principal razón por la que algunas empresas prefieren nube privada sobre pública?",
    options: [
      "La nube privada es siempre más barata",
      "Mayor control, seguridad y cumplimiento regulatorio con datos sensibles",
      "La nube privada escala mejor que la pública",
      "La nube privada no requiere personal de TI"
    ],
    correctAnswer: "Mayor control, seguridad y cumplimiento regulatorio con datos sensibles",
    explaination: "Las industrias altamente reguladas (banca, salud, gobierno) a veces prefieren nube privada para tener control total y garantizar el cumplimiento de normativas específicas.",
    difficulty: "medium"
  },
  {
    id: 20048,
    categoryId: "cloud-models",
    text: "Una empresa con 500 servidores on-premises quiere migrar a Azure gradualmente para minimizar riesgos. ¿Qué estrategia implica un modelo híbrido?",
    options: [
      "Migrar todos los servidores de una sola vez a Azure",
      "Comprar nuevos servidores físicos",
      "Migrar cargas de trabajo de forma incremental manteniendo parte on-premises",
      "Vender todos los servidores e ir a SaaS"
    ],
    correctAnswer: "Migrar cargas de trabajo de forma incremental manteniendo parte on-premises",
    explaination: "La migración incremental usando nube híbrida permite mantener continuidad del negocio mientras se van moviendo cargas de trabajo a Azure de forma controlada.",
    difficulty: "medium"
  },
  {
    id: 20049,
    categoryId: "cloud-models",
    text: "¿La nube pública garantiza que los datos de una empresa nunca se mezclan físicamente con los de otra empresa?",
    options: [
      "Sí, siempre hay separación física total",
      "No, los recursos físicos son compartidos aunque hay aislamiento lógico",
      "Sí, cada empresa tiene servidores físicos dedicados",
      "Depende del plan contratado"
    ],
    correctAnswer: "No, los recursos físicos son compartidos aunque hay aislamiento lógico",
    explaination: "En la nube pública el hardware es compartido (multi-tenant), pero existe un fuerte aislamiento lógico que garantiza que los datos de diferentes clientes no se mezclen.",
    difficulty: "hard"
  },
  {
    id: 20050,
    categoryId: "cloud-models",
    text: "¿Cuál es la diferencia entre 'multi-cloud' y 'nube híbrida'?",
    options: [
      "No hay diferencia, son el mismo concepto",
      "Multi-cloud usa múltiples proveedores de nube pública; nube híbrida combina nube pública con on-premises",
      "Nube híbrida usa múltiples proveedores; multi-cloud combina público y privado",
      "Multi-cloud solo aplica a SaaS"
    ],
    correctAnswer: "Multi-cloud usa múltiples proveedores de nube pública; nube híbrida combina nube pública con on-premises",
    explaination: "Multi-cloud es usar varios proveedores de nube pública (Azure + AWS + GCP). Nube híbrida es la combinación de nube pública con infraestructura local.",
    difficulty: "hard"
  },
  {
    id: 20051,
    categoryId: "cloud-models",
    text: "¿Una nube privada puede ofrecerse como servicio a empleados de la empresa usando un portal de autoservicio?",
    options: [
      "No, las nubes privadas no tienen autoservicio",
      "Sí, una nube privada puede tener un portal de autoservicio interno",
      "Solo si está alojada en Azure",
      "Solo si usa tecnología de Microsoft"
    ],
    correctAnswer: "Sí, una nube privada puede tener un portal de autoservicio interno",
    explaination: "Una nube privada puede incluir capacidades de autoservicio para empleados internos, similar a la nube pública pero con recursos dedicados a la organización.",
    difficulty: "medium"
  },
  {
    id: 20052,
    categoryId: "cloud-models",
    text: "¿Qué modelo de nube sería más adecuado para una empresa que quiere eliminar completamente su inversión en hardware?",
    options: ["Nube privada on-premises", "Nube híbrida con mayoria on-premises", "Nube pública", "Co-location en datacenter propio"],
    correctAnswer: "Nube pública",
    explaination: "La nube pública elimina completamente la necesidad de invertir en hardware propio. Todo el CapEx en infraestructura se convierte en OpEx (pago por uso).",
    difficulty: "easy"
  },
  {
    id: 20053,
    categoryId: "cloud-models",
    text: "¿Cuál es el modelo de nube más adecuado para una empresa que necesita escalar rápidamente pero también mantener algunos datos críticos on-premises por regulación?",
    options: ["Solo nube pública", "Solo nube privada", "Nube híbrida", "Solo on-premises tradicional"],
    correctAnswer: "Nube híbrida",
    explaination: "La nube híbrida permite mantener datos regulados on-premises (cumplimiento) mientras se usa la nube pública para escalar rápidamente otras cargas de trabajo.",
    difficulty: "easy"
  },
  {
    id: 20054,
    categoryId: "cloud-models",
    text: "¿Cuáles DOS son ventajas de la nube híbrida? (Selecciona 2)",
    options: [
      "Elimina completamente los costos on-premises",
      "Permite mantener datos sensibles on-premises mientras se escala en la nube",
      "Ofrece mayor flexibilidad que usar solo nube pública o privada",
      "No requiere ninguna gestión de infraestructura por parte del cliente"
    ],
    correctAnswers: ["Permite mantener datos sensibles on-premises mientras se escala en la nube", "Ofrece mayor flexibilidad que usar solo nube pública o privada"],
    explaination: "La nube híbrida da lo mejor de ambos mundos: control y cumplimiento con datos sensibles on-premises, más la escalabilidad y agilidad de la nube pública.",
    difficulty: "medium"
  },
  {
    id: 20055,
    categoryId: "cloud-models",
    text: "En el modelo de nube pública, ¿cómo se gestiona la capacidad de recursos (servidores, almacenamiento)?",
    options: [
      "El cliente compra hardware dedicado con anticipación",
      "El proveedor gestiona el pool de recursos y el cliente los consume bajo demanda",
      "El cliente gestiona físicamente los servidores en el datacenter del proveedor",
      "La capacidad es fija y no puede cambiar"
    ],
    correctAnswer: "El proveedor gestiona el pool de recursos y el cliente los consume bajo demanda",
    explaination: "En nube pública, el proveedor mantiene un gran pool de recursos que los clientes consumen elásticamente según necesidad, sin gestionar el hardware.",
    difficulty: "medium"
  },
  {
    id: 20056,
    categoryId: "cloud-models",
    text: "¿Puede Azure Government considerarse un tipo de nube pública?",
    options: [
      "No, es una nube privada del gobierno de EE.UU.",
      "Sí, es una nube pública pero con acceso restringido a entidades gubernamentales de EE.UU.",
      "Es una nube híbrida entre gobierno y empresas privadas",
      "Es un datacenter on-premises del gobierno"
    ],
    correctAnswer: "Sí, es una nube pública pero con acceso restringido a entidades gubernamentales de EE.UU.",
    explaination: "Azure Government sigue siendo una nube pública operada por Microsoft, pero su acceso está restringido a agencias gubernamentales y contratistas de EE.UU. para cumplir regulaciones específicas.",
    difficulty: "hard"
  },
  {
    id: 20057,
    categoryId: "cloud-models",
    text: "¿Qué característica hace que la nube pública sea más económica para cargas de trabajo variables?",
    options: [
      "Tiene contratos de largo plazo con precios fijos",
      "Solo cobra por los recursos usados, sin pagar por capacidad ociosa",
      "Ofrece hardware gratuito para empresas grandes",
      "Elimina la necesidad de personal de TI"
    ],
    correctAnswer: "Solo cobra por los recursos usados, sin pagar por capacidad ociosa",
    explaination: "El modelo de pago por uso de la nube pública es ideal para cargas variables: pagas más cuando necesitas más y menos cuando la demanda baja, sin capacidad ociosa.",
    difficulty: "medium"
  },
  {
    id: 20058,
    categoryId: "cloud-models",
    text: "¿Cuál es la diferencia fundamental entre nube pública y nube privada en cuanto a la propiedad del hardware?",
    options: [
      "En la pública el hardware es del cliente; en la privada es del proveedor",
      "En la pública el hardware es del proveedor compartido; en la privada es dedicado a la organización",
      "No hay diferencia, ambas usan hardware compartido",
      "En ambas el hardware es del gobierno"
    ],
    correctAnswer: "En la pública el hardware es del proveedor compartido; en la privada es dedicado a la organización",
    explaination: "Esta es la diferencia fundamental: nube pública = hardware compartido del proveedor; nube privada = hardware dedicado (propio o arrendado) para una sola organización.",
    difficulty: "medium"
  },
  {
    id: 20059,
    categoryId: "cloud-models",
    text: "Una empresa cierra su datacenter propio y mueve todos sus recursos a Azure. ¿Qué tipo de transición realizó?",
    options: [
      "De nube pública a nube privada",
      "De on-premises a nube pública",
      "De nube privada a nube híbrida",
      "De nube híbrida a multi-cloud"
    ],
    correctAnswer: "De on-premises a nube pública",
    explaination: "Cerrar el datacenter propio y migrar todo a Azure es una transición completa de on-premises (o nube privada) a nube pública.",
    difficulty: "easy"
  },
  {
    id: 20060,
    categoryId: "cloud-models",
    text: "¿Cuál afirmación sobre la nube privada es INCORRECTA?",
    options: [
      "Puede estar ubicada en instalaciones de la empresa o en un datacenter externo",
      "Ofrece mayor control sobre la infraestructura que la nube pública",
      "Elimina completamente la necesidad de personal de TI para la empresa",
      "Puede cumplir con requisitos regulatorios estrictos"
    ],
    correctAnswer: "Elimina completamente la necesidad de personal de TI para la empresa",
    explaination: "La nube privada requiere más personal de TI que la nube pública, ya que la empresa es responsable de gestionar y mantener la infraestructura.",
    difficulty: "medium"
  },
];

// ─────────────────────────────────────────────
// azure-consumption-model  (20061–20090)
// ─────────────────────────────────────────────
export const azureConsumptionModelQuestions: Question[] = [
  {
    id: 20061,
    categoryId: "azure-consumption-model",
    text: "¿Qué tipo de gasto representa el modelo de pago por uso de Azure?",
    options: ["Gasto de capital (CapEx)", "Gasto operativo (OpEx)", "Gasto diferido", "Gasto de amortización"],
    correctAnswer: "Gasto operativo (OpEx)",
    explaination: "El modelo de pago por uso convierte los costos de TI en gastos operativos (OpEx), eliminando la necesidad de grandes inversiones de capital (CapEx) en hardware.",
    difficulty: "easy"
  },
  {
    id: 20062,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es la principal ventaja financiera del modelo basado en consumo en Azure?",
    options: [
      "Precios fijos independientemente del uso",
      "Solo pagas por lo que realmente usas, sin costos de capacidad ociosa",
      "Hardware gratuito para empresas grandes",
      "Descuentos automáticos por usar más servicios"
    ],
    correctAnswer: "Solo pagas por lo que realmente usas, sin costos de capacidad ociosa",
    explaination: "El modelo de consumo elimina el problema de la capacidad ociosa: si no usas recursos, no pagas por ellos.",
    difficulty: "easy"
  },
  {
    id: 20063,
    categoryId: "azure-consumption-model",
    text: "¿Qué ocurre con los costos de Azure cuando se detiene (desasigna) una máquina virtual?",
    options: [
      "Se sigue pagando exactamente lo mismo",
      "Dejan de cobrarse los costos de cómputo, pero siguen los de almacenamiento",
      "Dejan de cobrarse todos los costos asociados",
      "Se cobra una penalización por detenerla"
    ],
    correctAnswer: "Dejan de cobrarse los costos de cómputo, pero siguen los de almacenamiento",
    explaination: "Una VM detenida (desasignada) no consume cómputo, por lo que ese costo se elimina. Sin embargo, el almacenamiento (disco de la VM) sigue existiendo y genera costo.",
    difficulty: "medium"
  },
  {
    id: 20064,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es la diferencia entre CapEx y OpEx en el contexto de TI?",
    options: [
      "CapEx son los costos del personal de TI; OpEx los del hardware",
      "CapEx son inversiones en activos físicos como servidores; OpEx son gastos operativos recurrentes como servicios en la nube",
      "No hay diferencia, son términos equivalentes",
      "CapEx es solo para empresas grandes; OpEx para pequeñas"
    ],
    correctAnswer: "CapEx son inversiones en activos físicos como servidores; OpEx son gastos operativos recurrentes como servicios en la nube",
    explaination: "CapEx (Capital Expenditure) implica comprar activos como servidores. OpEx (Operational Expenditure) son gastos recurrentes como el pago mensual por servicios cloud.",
    difficulty: "easy"
  },
  {
    id: 20065,
    categoryId: "azure-consumption-model",
    text: "¿Qué herramienta de Azure permite estimar el costo de una nueva arquitectura antes de implementarla?",
    options: ["Azure Advisor", "Azure Cost Management", "Calculadora de precios de Azure", "Azure Monitor"],
    correctAnswer: "Calculadora de precios de Azure",
    explaination: "La calculadora de precios de Azure permite estimar costos de una solución antes de implementarla, seleccionando servicios, regiones y configuraciones.",
    difficulty: "easy"
  },
  {
    id: 20066,
    categoryId: "azure-consumption-model",
    text: "¿Qué herramienta permite comparar el costo total de propiedad (TCO) entre infraestructura on-premises y Azure?",
    options: ["Calculadora de precios", "Azure Monitor", "Calculadora de TCO de Azure", "Azure Cost Management"],
    correctAnswer: "Calculadora de TCO de Azure",
    explaination: "La calculadora de TCO (Total Cost of Ownership) calcula y compara los costos totales de mantener infraestructura on-premises versus migrar a Azure, incluyendo electricidad, hardware y personal.",
    difficulty: "easy"
  },
  {
    id: 20067,
    categoryId: "azure-consumption-model",
    text: "¿Cuáles DOS beneficios ofrece el modelo de consumo de Azure frente a comprar servidores propios? (Selecciona 2)",
    options: [
      "Requiere conocer la demanda futura con exactitud",
      "Permite escalar recursos hacia arriba o abajo según la demanda real",
      "Elimina la necesidad de planificar la capacidad con años de antelación",
      "Garantiza que el hardware siempre sea de última generación pagado por adelantado"
    ],
    correctAnswers: ["Permite escalar recursos hacia arriba o abajo según la demanda real", "Elimina la necesidad de planificar la capacidad con años de antelación"],
    explaination: "Con el modelo de consumo, no hay que adivinar la demanda futura ni comprar hardware de más. Escalas cuando lo necesitas y reduces cuando no.",
    difficulty: "medium"
  },
  {
    id: 20068,
    categoryId: "azure-consumption-model",
    text: "¿Qué son las Azure Reservations?",
    options: [
      "Reservas de regiones específicas para el cliente",
      "Compromisos de uso de 1 o 3 años a cambio de descuentos de hasta el 72%",
      "Límites máximos de gasto en Azure",
      "Solicitudes de soporte anticipado"
    ],
    correctAnswer: "Compromisos de uso de 1 o 3 años a cambio de descuentos de hasta el 72%",
    explaination: "Las reservas de Azure permiten comprometerse a usar ciertos recursos por 1 o 3 años a cambio de descuentos significativos frente al precio de pago por uso.",
    difficulty: "medium"
  },
  {
    id: 20069,
    categoryId: "azure-consumption-model",
    text: "Una empresa tiene un pico de demanda en diciembre cada año. ¿Cómo ayuda el modelo de consumo de Azure?",
    options: [
      "Obliga a comprar capacidad suficiente para todo el año",
      "Permite aprovisionar más recursos solo en diciembre y reducirlos en enero",
      "No ayuda, los costos son fijos todo el año",
      "Requiere contratos anuales con precio fijo"
    ],
    correctAnswer: "Permite aprovisionar más recursos solo en diciembre y reducirlos en enero",
    explaination: "La elasticidad del modelo de consumo permite aumentar recursos durante el pico (diciembre) y reducirlos fuera de él, pagando solo por lo usado.",
    difficulty: "easy"
  },
  {
    id: 20070,
    categoryId: "azure-consumption-model",
    text: "¿Qué es Azure Cost Management?",
    options: [
      "Una herramienta para estimar costos antes de implementar recursos",
      "Una herramienta para monitorear, analizar y optimizar el gasto en Azure",
      "Un servicio para negociar precios con Microsoft",
      "Una calculadora de TCO"
    ],
    correctAnswer: "Una herramienta para monitorear, analizar y optimizar el gasto en Azure",
    explaination: "Azure Cost Management permite ver el gasto actual y pasado, crear presupuestos, alertas de costo y recomendaciones para optimizar el gasto.",
    difficulty: "easy"
  },
  {
    id: 20071,
    categoryId: "azure-consumption-model",
    text: "¿Los servicios gratuitos de Azure (como la capa gratuita) tienen algún costo?",
    options: [
      "No, son completamente gratuitos sin límite",
      "Son gratuitos hasta ciertos límites de uso; superarlos genera costos",
      "Solo son gratuitos el primer mes",
      "Son gratuitos solo para startups"
    ],
    correctAnswer: "Son gratuitos hasta ciertos límites de uso; superarlos genera costos",
    explaination: "Azure ofrece una capa gratuita con límites específicos (almacenamiento, transacciones, etc.). Al superar esos límites, se aplican precios estándar.",
    difficulty: "medium"
  },
  {
    id: 20072,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es el principal problema del modelo CapEx en TI tradicional?",
    options: [
      "Los costos son demasiado bajos",
      "Hay que adivinar la demanda futura y comprar capacidad de más o de menos",
      "No permite la depreciación fiscal de activos",
      "Solo aplica a empresas pequeñas"
    ],
    correctAnswer: "Hay que adivinar la demanda futura y comprar capacidad de más o de menos",
    explaination: "Con CapEx se compra hardware para una demanda estimada. Si la demanda es mayor, hay escasez. Si es menor, hay capacidad ociosa pagada que no genera valor.",
    difficulty: "medium"
  },
  {
    id: 20073,
    categoryId: "azure-consumption-model",
    text: "¿El traslado de datos de una red local hacia Azure a través de internet tiene costo de transferencia?",
    options: [
      "Sí, siempre se cobra la entrada de datos",
      "No, la entrada de datos a Azure generalmente es gratuita",
      "Solo si se usa ExpressRoute",
      "Depende del tamaño de los datos"
    ],
    correctAnswer: "No, la entrada de datos a Azure generalmente es gratuita",
    explaination: "Azure generalmente no cobra por la entrada (ingress) de datos. Los costos de transferencia suelen aplicarse a la salida (egress) de datos desde Azure.",
    difficulty: "medium"
  },
  {
    id: 20074,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es el costo de transferir datos entre servicios de Azure ubicados en la misma región?",
    options: [
      "Se cobra por GB transferido",
      "Es gratuito",
      "Se cobra la mitad del precio estándar",
      "Depende del tipo de servicio"
    ],
    correctAnswer: "Es gratuito",
    explaination: "Las transferencias de datos entre servicios de Azure dentro de la misma región son gratuitas. Los costos de salida aplican cuando los datos salen de Azure o se mueven entre regiones.",
    difficulty: "medium"
  },
  {
    id: 20075,
    categoryId: "azure-consumption-model",
    text: "¿Dos máquinas virtuales del mismo tamaño (D2s v3) siempre tienen el mismo costo mensual?",
    options: [
      "Sí, el precio es fijo por tamaño de VM",
      "No, el costo varía según región, SO elegido, tiempo de uso y otros factores",
      "Sí, si están en la misma región",
      "No, depende solo de la región"
    ],
    correctAnswer: "No, el costo varía según región, SO elegido, tiempo de uso y otros factores",
    explaination: "El costo de una VM varía según la región (precios diferentes), el sistema operativo (Windows cuesta más que Linux), las horas de uso y si se aplican reservas o Ventaja Híbrida.",
    difficulty: "medium"
  },
  {
    id: 20076,
    categoryId: "azure-consumption-model",
    text: "¿Qué es la Ventaja Híbrida de Azure (Azure Hybrid Benefit)?",
    options: [
      "Un descuento por usar nube híbrida",
      "La posibilidad de reutilizar licencias on-premises de Windows/SQL Server en Azure con descuento",
      "Un programa de migración gratuita a Azure",
      "Un beneficio para clientes con nube privada"
    ],
    correctAnswer: "La posibilidad de reutilizar licencias on-premises de Windows/SQL Server en Azure con descuento",
    explaination: "Azure Hybrid Benefit permite a clientes con Software Assurance traer sus licencias de Windows Server o SQL Server a Azure, reduciendo significativamente los costos.",
    difficulty: "medium"
  },
  {
    id: 20077,
    categoryId: "azure-consumption-model",
    text: "¿Cuándo tiene sentido usar Azure Reservations en lugar de pago por uso?",
    options: [
      "Para cargas de trabajo completamente variables e impredecibles",
      "Para cargas de trabajo estables y predecibles que se ejecutan continuamente",
      "Para pruebas de concepto de corta duración",
      "Nunca, el pago por uso siempre es más económico"
    ],
    correctAnswer: "Para cargas de trabajo estables y predecibles que se ejecutan continuamente",
    explaination: "Las reservas son ideales para cargas estables (como bases de datos de producción que corren 24/7). No tienen sentido para cargas variables donde el pago por uso es más flexible.",
    difficulty: "medium"
  },
  {
    id: 20078,
    categoryId: "azure-consumption-model",
    text: "¿Qué factores afectan el costo de Azure Blob Storage? (Selecciona 2)",
    options: [
      "El nombre del contenedor",
      "La cantidad de datos almacenados",
      "La región donde está la cuenta de almacenamiento",
      "El número de usuarios de Azure AD en la suscripción"
    ],
    correctAnswers: ["La cantidad de datos almacenados", "La región donde está la cuenta de almacenamiento"],
    explaination: "El costo de almacenamiento en Azure depende de cuántos datos almacenas y en qué región, ya que los precios varían por región.",
    difficulty: "hard"
  },
  {
    id: 20079,
    categoryId: "azure-consumption-model",
    text: "¿Qué herramienta de Azure envía alertas cuando el gasto de una suscripción supera un límite definido?",
    options: ["Azure Advisor", "Alertas presupuestarias en Azure Cost Management", "Azure Service Health", "Azure Monitor"],
    correctAnswer: "Alertas presupuestarias en Azure Cost Management",
    explaination: "Azure Cost Management permite crear presupuestos y configurar alertas que se envían por correo cuando el gasto real o proyectado supera los umbrales definidos.",
    difficulty: "easy"
  },
  {
    id: 20080,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es la diferencia entre la calculadora de precios y la calculadora de TCO de Azure?",
    options: [
      "Son la misma herramienta con distinto nombre",
      "La de precios estima costos de servicios Azure; la de TCO compara el costo total frente a on-premises",
      "La de TCO solo sirve para grandes empresas",
      "La de precios incluye costos de personal de TI"
    ],
    correctAnswer: "La de precios estima costos de servicios Azure; la de TCO compara el costo total frente a on-premises",
    explaination: "La calculadora de precios estima el costo de recursos Azure específicos. La calculadora de TCO compara el costo total (incluyendo electricidad, hardware, espacio) de on-premises vs. Azure.",
    difficulty: "medium"
  },
  {
    id: 20081,
    categoryId: "azure-consumption-model",
    text: "¿La transferencia de datos de Azure hacia internet (salida/egress) tiene costo?",
    options: [
      "No, siempre es gratuita",
      "Sí, generalmente se cobra por GB saliente después de cierta cantidad gratuita",
      "Solo cuando se usa más de 1 TB",
      "Solo en regiones fuera de EE.UU."
    ],
    correctAnswer: "Sí, generalmente se cobra por GB saliente después de cierta cantidad gratuita",
    explaination: "Azure cobra por la salida de datos (egress) hacia internet. Existe una cantidad gratuita mensual, y el resto se cobra por GB. La entrada de datos es generalmente gratuita.",
    difficulty: "medium"
  },
  {
    id: 20082,
    categoryId: "azure-consumption-model",
    text: "¿Qué recurso de Azure genera costo aunque la VM asociada esté detenida y desasignada?",
    options: ["La CPU de la VM", "La memoria RAM de la VM", "El disco de almacenamiento de la VM", "El ancho de banda de red"],
    correctAnswer: "El disco de almacenamiento de la VM",
    explaination: "Cuando una VM está detenida (desasignada), el cómputo se detiene pero el disco persiste. El almacenamiento del disco se sigue cobrando hasta que se elimine.",
    difficulty: "medium"
  },
  {
    id: 20083,
    categoryId: "azure-consumption-model",
    text: "¿Pueden dos organizaciones tener costos diferentes por el mismo servicio de Azure en la misma región?",
    options: [
      "No, los precios son iguales para todos",
      "Sí, pueden tener contratos Enterprise Agreement con precios negociados",
      "Solo si una es del sector público",
      "Solo si tienen diferentes planes de soporte"
    ],
    correctAnswer: "Sí, pueden tener contratos Enterprise Agreement con precios negociados",
    explaination: "Microsoft ofrece distintos canales de compra (pago por uso, CSP, Enterprise Agreement). Los contratos EA permiten negociar precios específicos según el volumen comprometido.",
    difficulty: "hard"
  },
  {
    id: 20084,
    categoryId: "azure-consumption-model",
    text: "¿Cuál es el impacto de crear grupos de recursos adicionales en Azure desde el punto de vista de costos?",
    options: [
      "Genera costos adicionales por grupo",
      "No genera costos adicionales; son contenedores lógicos gratuitos",
      "Genera un costo fijo mensual por grupo de recursos",
      "Reduce los costos al optimizar el uso de recursos"
    ],
    correctAnswer: "No genera costos adicionales; son contenedores lógicos gratuitos",
    explaination: "Los grupos de recursos son contenedores lógicos de organización. No generan costo por sí mismos; el costo lo generan los recursos dentro de ellos.",
    difficulty: "easy"
  },
  {
    id: 20085,
    categoryId: "azure-consumption-model",
    text: "¿Qué modelo de gasto describe mejor pagar por Azure mensualmente según el uso?",
    options: ["CapEx (Capital Expenditure)", "OpEx (Operational Expenditure)", "Gasto fijo anual", "Amortización de activos"],
    correctAnswer: "OpEx (Operational Expenditure)",
    explaination: "Pagar mensualmente por servicios cloud según el uso es OpEx. Es similar a pagar el suministro eléctrico: pagas por lo que consumes, cuando lo consumes.",
    difficulty: "easy"
  },
  {
    id: 20086,
    categoryId: "azure-consumption-model",
    text: "¿Cuál de las siguientes opciones ayuda a predecir y controlar el gasto en Azure? (Selecciona 2)",
    options: [
      "Usar Azure Blueprints",
      "Configurar presupuestos en Azure Cost Management con alertas",
      "Usar etiquetas (tags) para clasificar recursos y analizar costos por proyecto",
      "Aumentar el plan de soporte"
    ],
    correctAnswers: ["Configurar presupuestos en Azure Cost Management con alertas", "Usar etiquetas (tags) para clasificar recursos y analizar costos por proyecto"],
    explaination: "Los presupuestos con alertas avisan cuando se acerca al límite. Las etiquetas permiten ver cuánto gasta cada proyecto, equipo o entorno, facilitando la optimización.",
    difficulty: "hard"
  },
  {
    id: 20087,
    categoryId: "azure-consumption-model",
    text: "¿Cuánto cuesta crear un directorio (tenant) de Microsoft Entra ID en Azure?",
    options: ["$50 al mes", "$100 por suscripción", "Es gratuito", "$0.01 por usuario al mes"],
    correctAnswer: "Es gratuito",
    explaination: "Crear un tenant de Microsoft Entra ID es gratuito. Se cobra por funcionalidades premium (P1, P2) o por el número de usuarios activos mensuales en planes específicos.",
    difficulty: "medium"
  },
  {
    id: 20088,
    categoryId: "azure-consumption-model",
    text: "¿El costo del almacenamiento en Azure puede variar según el nivel de acceso elegido (Hot, Cool, Archive)?",
    options: [
      "No, el precio es igual para todos los niveles",
      "Sí, el nivel Archive es más barato para almacenar pero más caro para leer",
      "Solo varía si se usa Blob Storage Premium",
      "El nivel de acceso solo afecta la velocidad, no el precio"
    ],
    correctAnswer: "Sí, el nivel Archive es más barato para almacenar pero más caro para leer",
    explaination: "Azure Storage tiene niveles: Hot (acceso frecuente, más caro almacenar, barato leer), Cool (acceso infrecuente) y Archive (muy barato almacenar, pero requiere rehidratación para leer).",
    difficulty: "hard"
  },
  {
    id: 20089,
    categoryId: "azure-consumption-model",
    text: "¿Qué servicio de Azure permite ver qué servicio o recurso está generando el mayor gasto en una suscripción?",
    options: ["Azure Advisor", "Azure Service Health", "Azure Cost Management + Billing", "Azure Monitor"],
    correctAnswer: "Azure Cost Management + Billing",
    explaination: "Azure Cost Management + Billing proporciona análisis de costos desglosados por servicio, recurso, grupo de recursos, etiqueta o período de tiempo.",
    difficulty: "easy"
  },
  {
    id: 20090,
    categoryId: "azure-consumption-model",
    text: "¿Por qué el modelo de consumo de Azure es ventajoso para startups?",
    options: [
      "Porque Azure es gratuito para startups",
      "Porque permite comenzar pequeño sin CapEx, pagar solo por lo usado y escalar según crece el negocio",
      "Porque las startups no pagan impuestos en Azure",
      "Porque Azure garantiza precios fijos para startups"
    ],
    correctAnswer: "Porque permite comenzar pequeño sin CapEx, pagar solo por lo usado y escalar según crece el negocio",
    explaination: "Para startups, el modelo de consumo es ideal: no necesitan invertir en hardware, pueden empezar con recursos mínimos y escalar según su crecimiento.",
    difficulty: "easy"
  },
];

// ─────────────────────────────────────────────
// high-availability-scalability  (20091–20120)
// ─────────────────────────────────────────────
export const highAvailabilityScalabilityQuestions: Question[] = [
  {
    id: 20091,
    categoryId: "high-availability-scalability",
    text: "¿Qué garantiza un Acuerdo de Nivel de Servicio (SLA) en Azure?",
    options: ["El rendimiento máximo de la aplicación", "Un porcentaje mínimo de tiempo de actividad", "El número máximo de usuarios concurrentes", "El costo máximo mensual"],
    correctAnswer: "Un porcentaje mínimo de tiempo de actividad",
    explaination: "Un SLA especifica el porcentaje mínimo de tiempo que un servicio estará disponible (ej. 99,9%). Si no se cumple, el cliente recibe créditos.",
    difficulty: "easy"
  },
  {
    id: 20092,
    categoryId: "high-availability-scalability",
    text: "¿Cuál es la diferencia entre escalado vertical y escalado horizontal?",
    options: [
      "Son términos idénticos",
      "Vertical = aumentar recursos de una VM; Horizontal = añadir más VMs",
      "Horizontal = aumentar CPU/RAM; Vertical = añadir más instancias",
      "Vertical aplica a la nube pública; Horizontal a la privada"
    ],
    correctAnswer: "Vertical = aumentar recursos de una VM; Horizontal = añadir más VMs",
    explaination: "Escalado vertical (scale up): más CPU/RAM a la misma instancia. Escalado horizontal (scale out): más instancias del mismo tipo para distribuir la carga.",
    difficulty: "easy"
  },
  {
    id: 20093,
    categoryId: "high-availability-scalability",
    text: "¿Qué servicio de Azure permite escalar automáticamente el número de VMs según la demanda?",
    options: ["Azure Load Balancer", "Azure Virtual Machine Scale Sets", "Azure Traffic Manager", "Azure App Gateway"],
    correctAnswer: "Azure Virtual Machine Scale Sets",
    explaination: "Azure VM Scale Sets permite definir reglas de autoescalado que aumentan o reducen automáticamente el número de VMs según métricas como CPU o tiempo de respuesta.",
    difficulty: "easy"
  },
  {
    id: 20094,
    categoryId: "high-availability-scalability",
    text: "Una aplicación tiene SLA del 99,95% y su base de datos tiene SLA del 99,99%. ¿Cuál es el SLA compuesto?",
    options: ["99,99%", "99,95%", "99,94%", "100%"],
    correctAnswer: "99,94%",
    explaination: "El SLA compuesto se calcula multiplicando los SLAs individuales: 0,9995 × 0,9999 = 0,9994 = 99,94%. El SLA compuesto siempre es menor que el SLA individual más bajo.",
    difficulty: "hard"
  },
  {
    id: 20095,
    categoryId: "high-availability-scalability",
    text: "¿Qué garantiza implementar VMs en múltiples zonas de disponibilidad de Azure?",
    options: [
      "Mayor rendimiento de la CPU",
      "Protección ante fallos de un datacenter completo",
      "Reducción del costo de las VMs",
      "Acceso más rápido a internet"
    ],
    correctAnswer: "Protección ante fallos de un datacenter completo",
    explaination: "Las zonas de disponibilidad son datacenters físicamente separados dentro de una región. Distribuir VMs en varias zonas protege ante el fallo de un datacenter completo.",
    difficulty: "easy"
  },
  {
    id: 20096,
    categoryId: "high-availability-scalability",
    text: "¿Cuántas VMs y zonas de disponibilidad se necesitan mínimo para lograr el SLA del 99,99% en Azure?",
    options: ["1 VM y 1 zona", "2 VMs y 1 zona", "1 VM y 2 zonas", "2 VMs y 2 zonas"],
    correctAnswer: "2 VMs y 2 zonas",
    explaination: "Para el SLA del 99,99% con VMs, Azure requiere al menos 2 VMs distribuidas en 2 o más zonas de disponibilidad.",
    difficulty: "medium"
  },
  {
    id: 20097,
    categoryId: "high-availability-scalability",
    text: "¿Las zonas de disponibilidad de Azure están disponibles en todas las regiones?",
    options: ["Sí, en todas sin excepción", "No, solo en regiones seleccionadas que las soportan", "Solo en regiones de América", "Solo en regiones europeas"],
    correctAnswer: "No, solo en regiones seleccionadas que las soportan",
    explaination: "Las zonas de disponibilidad solo están disponibles en regiones específicas de Azure. No todas las regiones del mundo tienen esta capacidad.",
    difficulty: "medium"
  },
  {
    id: 20098,
    categoryId: "high-availability-scalability",
    text: "¿Qué característica de Azure App Service permite que la aplicación web escale automáticamente según el tráfico?",
    options: ["Azure DevOps", "Autoescalado (Autoscale)", "Azure Monitor", "Azure Blueprints"],
    correctAnswer: "Autoescalado (Autoscale)",
    explaination: "Azure App Service incluye capacidad de autoescalado que aumenta o reduce el número de instancias de la aplicación web automáticamente según las reglas definidas.",
    difficulty: "easy"
  },
  {
    id: 20099,
    categoryId: "high-availability-scalability",
    text: "¿Qué diferencia hay entre alta disponibilidad y recuperación ante desastres?",
    options: [
      "Son conceptos idénticos",
      "Alta disponibilidad previene interrupciones menores; recuperación ante desastres gestiona fallos catastróficos",
      "Alta disponibilidad es para aplicaciones pequeñas; recuperación para grandes",
      "Alta disponibilidad cuesta más que recuperación ante desastres"
    ],
    correctAnswer: "Alta disponibilidad previene interrupciones menores; recuperación ante desastres gestiona fallos catastróficos",
    explaination: "Alta disponibilidad minimiza el tiempo de inactividad ante fallos normales. Recuperación ante desastres gestiona eventos catastróficos (como pérdida de una región completa) con RPO y RTO definidos.",
    difficulty: "medium"
  },
  {
    id: 20100,
    categoryId: "high-availability-scalability",
    text: "¿Qué servicio de Azure proporciona recuperación ante desastres replicando VMs en otra región?",
    options: ["Azure Backup", "Azure Site Recovery", "Azure Migrate", "Azure Arc"],
    correctAnswer: "Azure Site Recovery",
    explaination: "Azure Site Recovery replica VMs a una región secundaria de Azure. Si la región primaria falla, permite hacer failover rápidamente para continuar operaciones.",
    difficulty: "easy"
  },
  {
    id: 20101,
    categoryId: "high-availability-scalability",
    text: "¿Qué implica que un SLA sea del 99,9% en términos de tiempo de inactividad mensual?",
    options: ["0 minutos de inactividad", "Aproximadamente 43 minutos de inactividad permitidos", "Aproximadamente 8 horas de inactividad permitidas", "Solo 1 minuto al año"],
    correctAnswer: "Aproximadamente 43 minutos de inactividad permitidos",
    explaination: "Un SLA del 99,9% permite 0,1% de inactividad. En un mes de 30 días (43.200 minutos), el 0,1% equivale a ~43 minutos.",
    difficulty: "hard"
  },
  {
    id: 20102,
    categoryId: "high-availability-scalability",
    text: "¿Puede una empresa aumentar el SLA de sus aplicaciones comprando múltiples suscripciones de Azure?",
    options: [
      "Sí, más suscripciones = mayor SLA",
      "No, el SLA depende de la arquitectura de la solución, no del número de suscripciones",
      "Sí, siempre que sean suscripciones Enterprise",
      "Depende de la región elegida"
    ],
    correctAnswer: "No, el SLA depende de la arquitectura de la solución, no del número de suscripciones",
    explaination: "El SLA se mejora con redundancia (más zonas, más regiones, más instancias), no con más suscripciones. Tener varias suscripciones no aumenta la disponibilidad.",
    difficulty: "medium"
  },
  {
    id: 20103,
    categoryId: "high-availability-scalability",
    text: "¿Cuál de las siguientes opciones aumenta el SLA de una aplicación que corre en Azure? (Selecciona 2)",
    options: [
      "Comprar un plan de soporte Premier",
      "Distribuir las VMs en múltiples zonas de disponibilidad",
      "Implementar la aplicación en múltiples regiones de Azure",
      "Aumentar el tamaño de la VM"
    ],
    correctAnswers: ["Distribuir las VMs en múltiples zonas de disponibilidad", "Implementar la aplicación en múltiples regiones de Azure"],
    explaination: "La redundancia (zonas y regiones) aumenta la disponibilidad real. El soporte Premier o el tamaño de la VM no afectan el SLA garantizado.",
    difficulty: "medium"
  },
  {
    id: 20104,
    categoryId: "high-availability-scalability",
    text: "¿Qué es el 'scale out' y en qué escenario es preferible al 'scale up'?",
    options: [
      "Scale out = más CPU/RAM; preferible cuando una VM llega a su límite",
      "Scale out = más instancias; preferible para cargas distribuibles horizontalmente como webs",
      "Scale out = reducir recursos; solo aplica en períodos de baja demanda",
      "Scale out es siempre más caro que scale up"
    ],
    correctAnswer: "Scale out = más instancias; preferible para cargas distribuibles horizontalmente como webs",
    explaination: "Scale out es ideal para aplicaciones sin estado (stateless) como servidores web que pueden distribuir carga entre muchas instancias. Scale up tiene límites físicos de hardware.",
    difficulty: "medium"
  },
  {
    id: 20105,
    categoryId: "high-availability-scalability",
    text: "¿Qué servicio de Azure distribuye el tráfico entrante entre múltiples VMs para mejorar la disponibilidad?",
    options: ["Azure CDN", "Azure VPN Gateway", "Azure Load Balancer", "Azure ExpressRoute"],
    correctAnswer: "Azure Load Balancer",
    explaination: "Azure Load Balancer distribuye el tráfico de red entre múltiples VMs, mejorando la disponibilidad y el rendimiento al evitar que una sola VM sea el punto de fallo.",
    difficulty: "easy"
  },
  {
    id: 20106,
    categoryId: "high-availability-scalability",
    text: "¿Qué servicio de Azure enruta el tráfico al endpoint más saludable o más cercano al usuario globalmente?",
    options: ["Azure Load Balancer", "Azure Application Gateway", "Azure Traffic Manager", "Azure Front Door"],
    correctAnswer: "Azure Traffic Manager",
    explaination: "Azure Traffic Manager es un balanceador de carga DNS global que enruta el tráfico según políticas (rendimiento, failover, geográfico) hacia el endpoint más adecuado.",
    difficulty: "medium"
  },
  {
    id: 20107,
    categoryId: "high-availability-scalability",
    text: "¿Los servicios de Azure en versión preliminar pública están cubiertos por SLA?",
    options: ["Sí, con el mismo SLA que GA", "No, los servicios en preview están excluidos del SLA", "Solo si se paga soporte Premium", "Depende del servicio específico"],
    correctAnswer: "No, los servicios en preview están excluidos del SLA",
    explaination: "Los servicios en versión preliminar pública no tienen SLA garantizado. Solo los servicios en Disponibilidad General (GA) tienen SLA.",
    difficulty: "easy"
  },
  {
    id: 20108,
    categoryId: "high-availability-scalability",
    text: "¿Qué medida recibe un cliente de Azure si el tiempo de actividad real está por debajo del SLA garantizado?",
    options: ["Reembolso bancario", "Crédito en su cuenta de Azure", "Servicio gratuito por un mes", "Penalización al proveedor"],
    correctAnswer: "Crédito en su cuenta de Azure",
    explaination: "Cuando Microsoft no cumple el SLA, el cliente recibe un crédito de servicio (un porcentaje del costo) abonado en su cuenta de Azure, no un reembolso bancario.",
    difficulty: "easy"
  },
  {
    id: 20109,
    categoryId: "high-availability-scalability",
    text: "Una aplicación web experimenta picos de uso los lunes de 8am a 10am. ¿Qué beneficio de Azure ayuda a gestionar esto sin sobreprovisionar?",
    options: ["Alta disponibilidad mediante zonas", "Elasticidad: escalar automáticamente durante los picos y reducir fuera de ellos", "Recuperación ante desastres", "Redundancia geográfica"],
    correctAnswer: "Elasticidad: escalar automáticamente durante los picos y reducir fuera de ellos",
    explaination: "La elasticidad permite que la aplicación escale hacia arriba automáticamente durante los picos (lunes 8-10am) y hacia abajo el resto del tiempo, pagando solo lo necesario.",
    difficulty: "easy"
  },
  {
    id: 20110,
    categoryId: "high-availability-scalability",
    text: "¿Cuántas regiones de Azure aproximadamente existen (a nivel general)?",
    options: ["5 regiones", "20 regiones", "Más de 60 regiones en todo el mundo", "Solo 3 regiones (US, EU, Asia)"],
    correctAnswer: "Más de 60 regiones en todo el mundo",
    explaination: "Azure tiene más de 60 regiones en todo el mundo, lo que lo hace el proveedor de nube con mayor presencia geográfica global.",
    difficulty: "easy"
  },
  {
    id: 20111,
    categoryId: "high-availability-scalability",
    text: "¿Qué diferencia hay entre un conjunto de disponibilidad (Availability Set) y una zona de disponibilidad?",
    options: [
      "Son conceptos idénticos",
      "Un Availability Set protege contra fallos de hardware dentro del mismo datacenter; las zonas protegen contra fallo de un datacenter entero",
      "Las zonas protegen dentro del datacenter; los Availability Sets entre datacenters",
      "No hay diferencia práctica"
    ],
    correctAnswer: "Un Availability Set protege contra fallos de hardware dentro del mismo datacenter; las zonas protegen contra fallo de un datacenter entero",
    explaination: "Availability Sets distribuyen VMs en distintos dominios de actualización y fallo dentro de un datacenter. Las zonas de disponibilidad son datacenters físicamente separados.",
    difficulty: "hard"
  },
  {
    id: 20112,
    categoryId: "high-availability-scalability",
    text: "¿Cuál es una ventaja de la alta disponibilidad en la nube frente a un datacenter propio?",
    options: [
      "El proveedor garantiza disponibilidad sin que el cliente haga nada",
      "El proveedor tiene redundancia masiva de hardware que sería prohibitivamente cara para una empresa individual",
      "La nube nunca falla",
      "Los SLAs no existen en datacenters propios"
    ],
    correctAnswer: "El proveedor tiene redundancia masiva de hardware que sería prohibitivamente cara para una empresa individual",
    explaination: "Construir la redundancia que tiene Azure (múltiples fuentes de energía, red, hardware) sería impractica y extremadamente costosa para la mayoría de empresas individualmente.",
    difficulty: "medium"
  },
  {
    id: 20113,
    categoryId: "high-availability-scalability",
    text: "¿Para qué tipo de fallo NO protegen las zonas de disponibilidad de Azure?",
    options: ["Fallo de un servidor físico", "Fallo de energía de un datacenter", "Fallo de red de un datacenter", "Fallo de una región completa de Azure"],
    correctAnswer: "Fallo de una región completa de Azure",
    explaination: "Las zonas de disponibilidad protegen ante fallos de un datacenter dentro de una región. Para proteger ante el fallo de una región completa, se necesita implementación multi-región.",
    difficulty: "hard"
  },
  {
    id: 20114,
    categoryId: "high-availability-scalability",
    text: "¿Cuál es el SLA mínimo garantizado para la mayoría de servicios de Azure en GA (pago)?",
    options: ["99%", "99,5%", "99,9%", "100%"],
    correctAnswer: "99,9%",
    explaination: "La mayoría de servicios de pago de Azure garantizan al menos el 99,9% de disponibilidad mensual. Muchos ofrecen SLAs más altos (99,95%, 99,99%).",
    difficulty: "easy"
  },
  {
    id: 20115,
    categoryId: "high-availability-scalability",
    text: "¿Qué representa el concepto de 'nines' en disponibilidad (por ejemplo, 'cinco nueves')?",
    options: [
      "El número de VMs en la arquitectura",
      "El porcentaje de disponibilidad: 'cinco nueves' = 99,999%",
      "El número de regiones donde se despliega",
      "El número de zonas de disponibilidad"
    ],
    correctAnswer: "El porcentaje de disponibilidad: 'cinco nueves' = 99,999%",
    explaination: "'Cinco nueves' (99,999%) permite menos de 5,26 minutos de inactividad al año. Cada 'nine' adicional reduce drásticamente el tiempo de inactividad permitido.",
    difficulty: "medium"
  },
  {
    id: 20116,
    categoryId: "high-availability-scalability",
    text: "¿Cómo afecta el escalado automático de Azure App Service a los costos?",
    options: [
      "Siempre aumenta los costos al añadir instancias",
      "Optimiza costos: añade instancias cuando se necesitan y las elimina cuando no",
      "Los costos son fijos independientemente del escalado",
      "El escalado automático solo funciona con planes Premium y son más caros"
    ],
    correctAnswer: "Optimiza costos: añade instancias cuando se necesitan y las elimina cuando no",
    explaination: "El autoescalado combina disponibilidad y eficiencia de costos: más capacidad durante picos y menos durante períodos de baja demanda, pagando solo lo necesario.",
    difficulty: "medium"
  },
  {
    id: 20117,
    categoryId: "high-availability-scalability",
    text: "¿Qué ocurre con los datos de una cuenta de Azure Storage en términos de redundancia por defecto?",
    options: [
      "Se almacena una sola copia",
      "Se almacenan automáticamente al menos 3 copias dentro del datacenter",
      "Se almacenan 2 copias en distintos continentes",
      "No hay redundancia por defecto"
    ],
    correctAnswer: "Se almacenan automáticamente al menos 3 copias dentro del datacenter",
    explaination: "Azure Storage replica los datos automáticamente al menos 3 veces (LRS: Locally Redundant Storage) por defecto para proteger contra fallos de hardware.",
    difficulty: "medium"
  },
  {
    id: 20118,
    categoryId: "high-availability-scalability",
    text: "¿Qué tipo de redundancia de almacenamiento de Azure protege ante el fallo de una región completa?",
    options: ["LRS (Almacenamiento localmente redundante)", "ZRS (Almacenamiento redundante por zona)", "GRS (Almacenamiento georredundante)", "Ninguna"],
    correctAnswer: "GRS (Almacenamiento georredundante)",
    explaination: "GRS replica los datos en una región secundaria geográficamente distante. GZRS también combina redundancia de zona y geográfica. LRS y ZRS no protegen ante fallo de región.",
    difficulty: "medium"
  },
  {
    id: 20119,
    categoryId: "high-availability-scalability",
    text: "¿Qué beneficio de escalabilidad ofrece Azure frente a un servidor físico propio?",
    options: [
      "Los servidores físicos también pueden escalarse infinitamente",
      "Azure permite escalar en minutos sin comprar hardware; un servidor propio requiere semanas y CapEx",
      "Azure no puede escalar más que un servidor físico",
      "La escalabilidad es igual en ambos modelos"
    ],
    correctAnswer: "Azure permite escalar en minutos sin comprar hardware; un servidor propio requiere semanas y CapEx",
    explaination: "En Azure puedes aprovisionar nuevas instancias en minutos. Escalar hardware físico propio requiere compra, envío, instalación y configuración, que pueden tomar semanas.",
    difficulty: "easy"
  },
  {
    id: 20120,
    categoryId: "high-availability-scalability",
    text: "¿Cuáles son los dos tipos de escalado que soporta Azure? (Selecciona 2)",
    options: [
      "Escalado diagonal",
      "Escalado vertical (aumentar recursos de una instancia)",
      "Escalado radial",
      "Escalado horizontal (añadir más instancias)"
    ],
    correctAnswers: ["Escalado vertical (aumentar recursos de una instancia)", "Escalado horizontal (añadir más instancias)"],
    explaination: "Azure soporta escalado vertical (scale up: más CPU/RAM a la misma VM) y escalado horizontal (scale out: más instancias de la VM para distribuir carga).",
    difficulty: "easy"
  },
];

// ─────────────────────────────────────────────
// reliability-forecasting  (20121–20150)
// ─────────────────────────────────────────────
export const reliabilityForecastingQuestions: Question[] = [
  {
    id: 20121,
    categoryId: "reliability-forecasting",
    text: "¿Qué significa 'confiabilidad' en el contexto de la nube de Azure?",
    options: [
      "Que los precios nunca cambian",
      "Que la infraestructura puede recuperarse de fallos y continuar funcionando",
      "Que Azure nunca tiene interrupciones",
      "Que la velocidad de internet es siempre constante"
    ],
    correctAnswer: "Que la infraestructura puede recuperarse de fallos y continuar funcionando",
    explaination: "La confiabilidad en la nube implica resiliencia: la capacidad de la infraestructura para recuperarse automáticamente de fallos y mantener el servicio funcionando.",
    difficulty: "easy"
  },
  {
    id: 20122,
    categoryId: "reliability-forecasting",
    text: "¿Cómo contribuye la distribución global de Azure a la confiabilidad?",
    options: [
      "Permite enrutar tráfico a regiones disponibles si una región tiene problemas",
      "Hace que los servicios sean más baratos",
      "Garantiza que nunca habrá interrupciones",
      "Solo mejora el rendimiento, no la confiabilidad"
    ],
    correctAnswer: "Permite enrutar tráfico a regiones disponibles si una región tiene problemas",
    explaination: "La presencia global de Azure permite diseñar arquitecturas multi-región que continúan operando aunque una región completa experimente problemas.",
    difficulty: "easy"
  },
  {
    id: 20123,
    categoryId: "reliability-forecasting",
    text: "¿Qué es la 'previsibilidad de rendimiento' en Azure?",
    options: [
      "Garantía de que la aplicación siempre rendirá igual independientemente de la carga",
      "La capacidad de predecir los recursos necesarios y el comportamiento del sistema usando datos históricos y autoescalado",
      "Que Azure garantiza tiempos de respuesta fijos",
      "Que el costo siempre será el mismo cada mes"
    ],
    correctAnswer: "La capacidad de predecir los recursos necesarios y el comportamiento del sistema usando datos históricos y autoescalado",
    explaination: "La previsibilidad de rendimiento en Azure se logra mediante monitoreo, autoescalado y análisis de métricas históricas que permiten anticipar y gestionar la demanda.",
    difficulty: "medium"
  },
  {
    id: 20124,
    categoryId: "reliability-forecasting",
    text: "¿Qué es Azure Service Health?",
    options: [
      "Un servicio para monitorear la salud de las VMs del cliente",
      "Un panel que muestra el estado de los servicios de Azure y notifica sobre mantenimientos planificados",
      "Una herramienta para diagnosticar problemas de red",
      "Un servicio de soporte técnico de Microsoft"
    ],
    correctAnswer: "Un panel que muestra el estado de los servicios de Azure y notifica sobre mantenimientos planificados",
    explaination: "Azure Service Health informa sobre el estado de los servicios de Azure, incidentes actuales, mantenimientos planificados y sus impactos en los recursos del cliente.",
    difficulty: "easy"
  },
  {
    id: 20125,
    categoryId: "reliability-forecasting",
    text: "¿Qué es la 'previsibilidad de costos' en Azure?",
    options: [
      "Garantía de que los precios nunca subirán",
      "La capacidad de estimar, monitorear y predecir el gasto en Azure usando herramientas de costos",
      "Que Azure siempre es más barato que on-premises",
      "Que el costo es igual en todas las regiones"
    ],
    correctAnswer: "La capacidad de estimar, monitorear y predecir el gasto en Azure usando herramientas de costos",
    explaination: "Azure ofrece herramientas (calculadora de precios, Cost Management, presupuestos) que permiten predecir y controlar el gasto, evitando sorpresas en la factura.",
    difficulty: "easy"
  },
  {
    id: 20126,
    categoryId: "reliability-forecasting",
    text: "¿Qué servicio de Azure permite ver el historial de incidentes y el estado actual de todos los servicios de Azure en tu suscripción?",
    options: ["Azure Monitor", "Azure Advisor", "Azure Service Health", "Microsoft Defender for Cloud"],
    correctAnswer: "Azure Service Health",
    explaination: "Azure Service Health muestra el estado en tiempo real de todos los servicios, el historial de incidentes, los mantenimientos planificados y las alertas de salud personalizadas.",
    difficulty: "easy"
  },
  {
    id: 20127,
    categoryId: "reliability-forecasting",
    text: "¿Cómo ayuda Azure Monitor a la confiabilidad de las aplicaciones?",
    options: [
      "Garantiza que las aplicaciones nunca fallen",
      "Recopila métricas y logs para detectar problemas antes de que afecten a los usuarios",
      "Reemplaza la necesidad de hacer pruebas de la aplicación",
      "Solo monitorea recursos de Azure, no aplicaciones"
    ],
    correctAnswer: "Recopila métricas y logs para detectar problemas antes de que afecten a los usuarios",
    explaination: "Azure Monitor recoge métricas de rendimiento y logs para crear alertas proactivas, permitiendo identificar degradaciones de rendimiento o fallos antes de que impacten al usuario final.",
    difficulty: "medium"
  },
  {
    id: 20128,
    categoryId: "reliability-forecasting",
    text: "¿Qué es la resiliencia en el contexto de servicios en la nube?",
    options: [
      "La velocidad máxima de procesamiento",
      "La capacidad de recuperarse automáticamente de fallos sin intervención manual",
      "El número máximo de usuarios concurrentes",
      "El precio estable durante todo el año"
    ],
    correctAnswer: "La capacidad de recuperarse automáticamente de fallos sin intervención manual",
    explaination: "La resiliencia es la capacidad de una aplicación o servicio de detectar fallos y recuperarse automáticamente, manteniendo la continuidad del servicio.",
    difficulty: "easy"
  },
  {
    id: 20129,
    categoryId: "reliability-forecasting",
    text: "¿Cuáles DOS características de Azure contribuyen a la confiabilidad de las aplicaciones? (Selecciona 2)",
    options: [
      "Precios variables según la hora del día",
      "Zonas de disponibilidad que protegen ante fallos de datacenter",
      "Azure Site Recovery para recuperación ante desastres",
      "Portal web de Azure"
    ],
    correctAnswers: ["Zonas de disponibilidad que protegen ante fallos de datacenter", "Azure Site Recovery para recuperación ante desastres"],
    explaination: "Las zonas de disponibilidad (protección local) y Azure Site Recovery (replicación entre regiones) son características clave para garantizar alta confiabilidad.",
    difficulty: "medium"
  },
  {
    id: 20130,
    categoryId: "reliability-forecasting",
    text: "¿Qué herramienta de Azure ayuda a predecir y controlar los costos futuros de una suscripción?",
    options: ["Azure Blueprints", "Azure Policy", "Azure Cost Management con análisis predictivo", "Azure DevOps"],
    correctAnswer: "Azure Cost Management con análisis predictivo",
    explaination: "Azure Cost Management incluye proyecciones de costos basadas en el gasto actual y patrones históricos, permitiendo predecir y gestionar el presupuesto.",
    difficulty: "medium"
  },
  {
    id: 20131,
    categoryId: "reliability-forecasting",
    text: "¿Cómo contribuye la infraestructura distribuida globalmente de Azure a la previsibilidad del rendimiento?",
    options: [
      "Permite implementar recursos cerca de los usuarios para reducir la latencia de forma predecible",
      "Hace que el rendimiento sea impredecible por la complejidad",
      "No afecta al rendimiento, solo a los costos",
      "Solo sirve para recuperación ante desastres"
    ],
    correctAnswer: "Permite implementar recursos cerca de los usuarios para reducir la latencia de forma predecible",
    explaination: "Deployar recursos en regiones cercanas a los usuarios garantiza baja latencia predecible. Azure CDN también distribuye contenido globalmente para un rendimiento consistente.",
    difficulty: "medium"
  },
  {
    id: 20132,
    categoryId: "reliability-forecasting",
    text: "¿Qué es un 'RTO' (Recovery Time Objective) en el contexto de confiabilidad?",
    options: [
      "El tiempo máximo de inactividad tolerable después de un fallo",
      "El tiempo de respuesta objetivo de la aplicación",
      "El tiempo necesario para hacer un backup",
      "El tiempo de vida útil de un recurso"
    ],
    correctAnswer: "El tiempo máximo de inactividad tolerable después de un fallo",
    explaination: "RTO es el tiempo máximo que la organización puede tolerar que la aplicación esté inactiva después de un fallo antes de que el impacto sea inaceptable.",
    difficulty: "hard"
  },
  {
    id: 20133,
    categoryId: "reliability-forecasting",
    text: "¿Qué es un 'RPO' (Recovery Point Objective)?",
    options: [
      "La velocidad máxima de recuperación",
      "La cantidad máxima de datos que se pueden perder (en tiempo) ante un fallo",
      "El número máximo de regiones para la recuperación",
      "El costo de recuperación ante desastres"
    ],
    correctAnswer: "La cantidad máxima de datos que se pueden perder (en tiempo) ante un fallo",
    explaination: "RPO define cuántos datos (en tiempo) puede perder la organización. Un RPO de 1 hora significa que se puede perder máximo 1 hora de datos en un desastre.",
    difficulty: "hard"
  },
  {
    id: 20134,
    categoryId: "reliability-forecasting",
    text: "¿Cómo ayuda Azure a la previsibilidad del rendimiento a través del autoescalado?",
    options: [
      "Garantizando un número fijo de recursos siempre activos",
      "Ajustando automáticamente los recursos según la demanda para mantener el rendimiento objetivo",
      "Reduciendo siempre los recursos para ahorrar costos",
      "Solo funciona en horas laborales"
    ],
    correctAnswer: "Ajustando automáticamente los recursos según la demanda para mantener el rendimiento objetivo",
    explaination: "El autoescalado permite definir métricas de rendimiento objetivo (ej. CPU < 70%). Azure añade o quita instancias automáticamente para mantener ese objetivo.",
    difficulty: "medium"
  },
  {
    id: 20135,
    categoryId: "reliability-forecasting",
    text: "¿Puede Azure Service Health alertar proactivamente sobre mantenimientos planificados que afecten a los recursos?",
    options: ["No, solo muestra problemas actuales", "Sí, incluye notificaciones de mantenimientos planificados", "Solo si tienes soporte Premier", "Solo para VMs, no para otros servicios"],
    correctAnswer: "Sí, incluye notificaciones de mantenimientos planificados",
    explaination: "Azure Service Health notifica sobre mantenimientos planificados, actualizaciones y otros eventos futuros que puedan afectar la disponibilidad de los recursos del cliente.",
    difficulty: "easy"
  },
  {
    id: 20136,
    categoryId: "reliability-forecasting",
    text: "¿Qué herramienta de Azure proporciona análisis de rendimiento de aplicaciones web con correlación de métricas?",
    options: ["Azure Monitor básico", "Azure Application Insights", "Azure Service Health", "Azure Advisor"],
    correctAnswer: "Azure Application Insights",
    explaination: "Azure Application Insights (parte de Azure Monitor) es una plataforma APM que monitorea aplicaciones web, detecta anomalías y correlaciona métricas de rendimiento.",
    difficulty: "medium"
  },
  {
    id: 20137,
    categoryId: "reliability-forecasting",
    text: "¿Qué garantiza la confiabilidad en el diseño de aplicaciones cloud-native en Azure?",
    options: [
      "Usar siempre el tamaño de VM más grande disponible",
      "Diseñar para el fallo: asumir que los componentes fallarán y usar redundancia y recuperación automática",
      "Evitar usar múltiples zonas para simplificar la arquitectura",
      "Solo usar servicios SaaS para garantizar confiabilidad"
    ],
    correctAnswer: "Diseñar para el fallo: asumir que los componentes fallarán y usar redundancia y recuperación automática",
    explaination: "El principio de 'design for failure' en cloud es asumir que cualquier componente puede fallar y construir la arquitectura con redundancia, health checks y recuperación automática.",
    difficulty: "hard"
  },
  {
    id: 20138,
    categoryId: "reliability-forecasting",
    text: "¿Cómo contribuyen los pares de regiones de Azure a la confiabilidad?",
    options: [
      "Son regiones con precios más bajos",
      "Son regiones que Azure usa para replicar servicios y gestionar actualizaciones escalonadas",
      "Solo sirven para usuarios de distintos países",
      "Son regiones exclusivas para gobierno"
    ],
    correctAnswer: "Son regiones que Azure usa para replicar servicios y gestionar actualizaciones escalonadas",
    explaination: "Los pares de regiones (region pairs) permiten que Azure replique datos y que las actualizaciones se desplieguen de forma escalonada (primero en una, luego en la otra), reduciendo el riesgo.",
    difficulty: "hard"
  },
  {
    id: 20139,
    categoryId: "reliability-forecasting",
    text: "¿Qué tipo de redundancia de almacenamiento de Azure replica los datos en una región secundaria para mayor confiabilidad?",
    options: ["LRS", "ZRS", "GRS", "SSD Premium"],
    correctAnswer: "GRS",
    explaination: "GRS (Geo-Redundant Storage) replica los datos de forma asíncrona a una región secundaria distante, protegiendo ante fallos regionales.",
    difficulty: "medium"
  },
  {
    id: 20140,
    categoryId: "reliability-forecasting",
    text: "¿Qué significa que Azure tenga una arquitectura de 'alta disponibilidad' para sus servicios PaaS?",
    options: [
      "Que el cliente debe configurar manualmente la redundancia",
      "Que Microsoft gestiona internamente la redundancia y failover sin intervención del cliente",
      "Que los servicios PaaS nunca fallan",
      "Que solo están disponibles en horario laboral"
    ],
    correctAnswer: "Que Microsoft gestiona internamente la redundancia y failover sin intervención del cliente",
    explaination: "Los servicios PaaS de Azure tienen alta disponibilidad incorporada gestionada por Microsoft. El cliente no necesita configurar redundancia adicional, aunque puede hacerlo.",
    difficulty: "medium"
  },
  {
    id: 20141,
    categoryId: "reliability-forecasting",
    text: "¿Qué ventaja de confiabilidad ofrece Azure frente a un servidor web on-premises sin redundancia?",
    options: [
      "Azure nunca tiene fallos",
      "Azure tiene múltiples capas de redundancia (hardware, red, energía) que protegen automáticamente",
      "Azure es 100 veces más rápido",
      "No hay ventaja; la confiabilidad es similar"
    ],
    correctAnswer: "Azure tiene múltiples capas de redundancia (hardware, red, energía) que protegen automáticamente",
    explaination: "Los datacenters de Azure tienen redundancia de hardware, múltiples fuentes de energía, generadores y redes redundantes, todo gestionado automáticamente.",
    difficulty: "easy"
  },
  {
    id: 20142,
    categoryId: "reliability-forecasting",
    text: "¿Puede Azure Service Health alertar sobre fallos de servicio que afectan a una suscripción específica?",
    options: ["No, solo muestra el estado global", "Sí, puede personalizar alertas para los recursos de una suscripción", "Solo para planes de soporte Enterprise", "Solo para regiones seleccionadas"],
    correctAnswer: "Sí, puede personalizar alertas para los recursos de una suscripción",
    explaination: "Azure Service Health permite configurar alertas específicas para los servicios y regiones usados por el cliente, filtrando el ruido de incidentes que no les afectan.",
    difficulty: "medium"
  },
  {
    id: 20143,
    categoryId: "reliability-forecasting",
    text: "¿Qué ocurre con las actualizaciones de mantenimiento planificado en Azure respecto a la disponibilidad?",
    options: [
      "Siempre requieren tiempo de inactividad completo",
      "Azure usa técnicas como live migration para minimizar o eliminar el impacto al cliente",
      "El cliente debe reiniciar manualmente sus VMs",
      "Solo ocurren los domingos de madrugada"
    ],
    correctAnswer: "Azure usa técnicas como live migration para minimizar o eliminar el impacto al cliente",
    explaination: "Azure utiliza técnicas avanzadas como live migration de VMs, memory-preserving updates y actualizaciones escalonadas para que el mantenimiento no impacte en la disponibilidad.",
    difficulty: "hard"
  },
  {
    id: 20144,
    categoryId: "reliability-forecasting",
    text: "¿Cuáles son los dos pilares de la previsibilidad en la nube de Azure según el Well-Architected Framework? (Selecciona 2)",
    options: [
      "Previsibilidad del color de la interfaz",
      "Previsibilidad del rendimiento",
      "Previsibilidad del número de empleados de Microsoft",
      "Previsibilidad de costos"
    ],
    correctAnswers: ["Previsibilidad del rendimiento", "Previsibilidad de costos"],
    explaination: "Los dos pilares de previsibilidad en Azure son: previsibilidad del rendimiento (que la app se comporte como se espera) y previsibilidad de costos (poder estimar y controlar el gasto).",
    difficulty: "medium"
  },
  {
    id: 20145,
    categoryId: "reliability-forecasting",
    text: "¿Qué herramienta de Azure proporciona recomendaciones para mejorar la confiabilidad de los recursos?",
    options: ["Azure Service Health", "Azure Advisor (pilar de confiabilidad)", "Azure Cost Management", "Azure Blueprints"],
    correctAnswer: "Azure Advisor (pilar de confiabilidad)",
    explaination: "Azure Advisor analiza los recursos y proporciona recomendaciones en 5 pilares, incluida la confiabilidad: backups no configurados, redundancia insuficiente, etc.",
    difficulty: "medium"
  },
  {
    id: 20146,
    categoryId: "reliability-forecasting",
    text: "¿Qué mecanismo de Azure detecta y reemplaza automáticamente VMs que han fallado?",
    options: ["Azure Monitor manualmente", "Azure VM Scale Sets con health probes", "El cliente debe hacerlo manualmente", "Azure Blueprints"],
    correctAnswer: "Azure VM Scale Sets con health probes",
    explaination: "Azure VM Scale Sets pueden configurarse con health probes para detectar instancias no saludables y reemplazarlas automáticamente, manteniendo el número de instancias requerido.",
    difficulty: "hard"
  },
  {
    id: 20147,
    categoryId: "reliability-forecasting",
    text: "¿Cómo mejora Azure la confiabilidad de las aplicaciones web automáticamente en App Service?",
    options: [
      "Requiere que el cliente configure manualmente la redundancia",
      "Incluye reintentos automáticos, health checks y failover entre instancias",
      "Solo funciona con planes Premium",
      "El cliente debe programar la lógica de reintentos"
    ],
    correctAnswer: "Incluye reintentos automáticos, health checks y failover entre instancias",
    explaination: "Azure App Service gestiona la salud de las instancias, realiza health checks y puede redirigir tráfico automáticamente a instancias saludables si alguna falla.",
    difficulty: "medium"
  },
  {
    id: 20148,
    categoryId: "reliability-forecasting",
    text: "¿Cuál es el objetivo principal del Azure Well-Architected Framework en el pilar de confiabilidad?",
    options: [
      "Minimizar los costos de las aplicaciones",
      "Garantizar que las aplicaciones se recuperen de fallos y cumplan los objetivos de disponibilidad",
      "Maximizar el número de usuarios simultáneos",
      "Reducir el tiempo de desarrollo de aplicaciones"
    ],
    correctAnswer: "Garantizar que las aplicaciones se recuperen de fallos y cumplan los objetivos de disponibilidad",
    explaination: "El pilar de confiabilidad del Well-Architected Framework guía el diseño de soluciones que resistan fallos y se recuperen de ellos cumpliendo los SLOs de disponibilidad.",
    difficulty: "medium"
  },
  {
    id: 20149,
    categoryId: "reliability-forecasting",
    text: "¿Qué ventaja ofrece el modelo de pago por uso de Azure en términos de previsibilidad de costos?",
    options: [
      "Los costos siempre son los mismos cada mes",
      "Permite escalar recursos y costos proporcionalmente a las necesidades reales del negocio",
      "Elimina completamente la necesidad de planificar presupuestos",
      "Garantiza que los costos nunca superarán un límite"
    ],
    correctAnswer: "Permite escalar recursos y costos proporcionalmente a las necesidades reales del negocio",
    explaination: "Con el modelo de consumo, los costos crecen proporcionalmente al uso real, haciéndolos más predecibles y justificables frente a variaciones de demanda.",
    difficulty: "medium"
  },
  {
    id: 20150,
    categoryId: "reliability-forecasting",
    text: "¿Cuál es la ventaja de previsibilidad que ofrecen las Azure Reservations?",
    options: [
      "Hacen el rendimiento más predecible",
      "Permiten conocer exactamente el costo de ciertas cargas estables durante 1-3 años",
      "Garantizan disponibilidad del 100%",
      "Eliminan la necesidad de monitoreo"
    ],
    correctAnswer: "Permiten conocer exactamente el costo de ciertas cargas estables durante 1-3 años",
    explaination: "Las reservas convierten el pago por uso variable en un costo fijo conocido para cargas estables, mejorando enormemente la previsibilidad financiera.",
    difficulty: "medium"
  },
];

// ─────────────────────────────────────────────
// security-governance  (20151–20180)
// ─────────────────────────────────────────────
export const securityGovernanceQuestions: Question[] = [
  {
    id: 20151,
    categoryId: "security-governance",
    text: "¿Qué es Azure Policy?",
    options: [
      "Una política de precios de Azure",
      "Un servicio para definir y aplicar reglas sobre los recursos de Azure",
      "Un sistema de tickets de soporte",
      "Un portal para gestionar licencias"
    ],
    correctAnswer: "Un servicio para definir y aplicar reglas sobre los recursos de Azure",
    explaination: "Azure Policy permite crear, asignar y gestionar políticas que aplican reglas sobre los recursos de Azure, asegurando el cumplimiento de estándares corporativos.",
    difficulty: "easy"
  },
  {
    id: 20152,
    categoryId: "security-governance",
    text: "¿Qué son los 'bloqueos de recursos' (Resource Locks) en Azure?",
    options: [
      "Controles que impiden el acceso no autorizado a recursos",
      "Protecciones que evitan la eliminación o modificación accidental de recursos",
      "Cifrado automático de recursos sensibles",
      "Reglas de red que bloquean tráfico malicioso"
    ],
    correctAnswer: "Protecciones que evitan la eliminación o modificación accidental de recursos",
    explaination: "Los Resource Locks permiten aplicar bloqueos (ReadOnly o Delete) a recursos para evitar cambios o eliminaciones accidentales, incluso por administradores.",
    difficulty: "easy"
  },
  {
    id: 20153,
    categoryId: "security-governance",
    text: "¿Qué ventaja ofrece la nube de Azure en términos de seguridad para el hardware físico?",
    options: [
      "El cliente gestiona la seguridad física",
      "Microsoft invierte en seguridad física de datacenters con controles que pocas empresas pueden igualar",
      "La seguridad física es responsabilidad del cliente",
      "No hay ventaja, on-premises es más seguro físicamente"
    ],
    correctAnswer: "Microsoft invierte en seguridad física de datacenters con controles que pocas empresas pueden igualar",
    explaination: "Los datacenters de Azure tienen controles de seguridad física (biometría, guardias, cámaras, cercas) que representan una inversión que la mayoría de empresas no puede replicar.",
    difficulty: "easy"
  },
  {
    id: 20154,
    categoryId: "security-governance",
    text: "¿Qué servicio de Azure proporciona una vista unificada de la postura de seguridad de toda la infraestructura?",
    options: ["Azure Advisor", "Microsoft Defender for Cloud", "Azure Policy", "Azure Monitor"],
    correctAnswer: "Microsoft Defender for Cloud",
    explaination: "Microsoft Defender for Cloud (antes Security Center) proporciona una puntuación de seguridad y recomendaciones para mejorar la postura de seguridad de recursos Azure y on-premises.",
    difficulty: "easy"
  },
  {
    id: 20155,
    categoryId: "security-governance",
    text: "¿Qué son los grupos de administración (Management Groups) en Azure?",
    options: [
      "Grupos de usuarios que administran Azure",
      "Contenedores que organizan suscripciones y aplican gobernanza a múltiples suscripciones",
      "Grupos de máquinas virtuales para alta disponibilidad",
      "Equipos de soporte de Microsoft"
    ],
    correctAnswer: "Contenedores que organizan suscripciones y aplican gobernanza a múltiples suscripciones",
    explaination: "Los grupos de administración permiten organizar múltiples suscripciones en una jerarquía y aplicar políticas y RBAC a todas ellas desde un nivel superior.",
    difficulty: "medium"
  },
  {
    id: 20156,
    categoryId: "security-governance",
    text: "¿Cuáles DOS son ejemplos de controles de gobernanza en Azure? (Selecciona 2)",
    options: [
      "Azure Functions",
      "Azure Policy para aplicar estándares de cumplimiento",
      "Azure Blob Storage",
      "Etiquetas (Tags) para organizar y auditar recursos"
    ],
    correctAnswers: ["Azure Policy para aplicar estándares de cumplimiento", "Etiquetas (Tags) para organizar y auditar recursos"],
    explaination: "Azure Policy aplica reglas de cumplimiento y las etiquetas permiten clasificar recursos para auditoría, facturación y gestión de gobernanza.",
    difficulty: "medium"
  },
  {
    id: 20157,
    categoryId: "security-governance",
    text: "¿Qué ocurre cuando se asigna una Azure Policy que prohíbe crear recursos en una región específica, y ya existen recursos en esa región?",
    options: [
      "Los recursos existentes se eliminan automáticamente",
      "Los recursos existentes continúan funcionando, pero no se pueden crear nuevos",
      "Azure migra los recursos a otra región",
      "La política no se puede aplicar si hay recursos existentes"
    ],
    correctAnswer: "Los recursos existentes continúan funcionando, pero no se pueden crear nuevos",
    explaination: "Las políticas de Azure aplican de forma prospectiva: los recursos existentes no se eliminan (son 'no conformes' marcados), pero la política impide crear nuevos recursos que incumplan.",
    difficulty: "hard"
  },
  {
    id: 20158,
    categoryId: "security-governance",
    text: "¿Qué es Azure Blueprints y para qué sirve?",
    options: [
      "Una herramienta de diseño de arquitecturas cloud",
      "Un servicio que empaqueta políticas, roles y plantillas ARM para desplegar entornos repetibles y conformes",
      "Un repositorio de código de Azure",
      "Una calculadora de costos de Azure"
    ],
    correctAnswer: "Un servicio que empaqueta políticas, roles y plantillas ARM para desplegar entornos repetibles y conformes",
    explaination: "Azure Blueprints permite crear paquetes con políticas, asignaciones de roles y plantillas ARM para desplegar suscripciones que cumplan estándares organizativos de forma consistente.",
    difficulty: "medium"
  },
  {
    id: 20159,
    categoryId: "security-governance",
    text: "¿Qué herramienta de Azure permite rastrear el cumplimiento de normativas como ISO 27001, SOC 2 y GDPR?",
    options: ["Azure Advisor", "Compliance Manager en el Portal de Confianza de Servicios", "Azure Cost Management", "Azure Service Health"],
    correctAnswer: "Compliance Manager en el Portal de Confianza de Servicios",
    explaination: "Compliance Manager (en el Microsoft Service Trust Portal) permite evaluar, rastrear y gestionar el cumplimiento de múltiples normativas y estándares regulatorios.",
    difficulty: "medium"
  },
  {
    id: 20160,
    categoryId: "security-governance",
    text: "¿Cómo contribuye el control de acceso basado en roles (RBAC) a la gobernanza en Azure?",
    options: [
      "Cifra los datos en reposo automáticamente",
      "Garantiza que los usuarios solo tienen los permisos mínimos necesarios (principio de mínimo privilegio)",
      "Bloquea el acceso a internet de las VMs",
      "Aplica políticas de contraseñas en las cuentas"
    ],
    correctAnswer: "Garantiza que los usuarios solo tienen los permisos mínimos necesarios (principio de mínimo privilegio)",
    explaination: "RBAC permite asignar roles específicos a usuarios o grupos para recursos concretos, implementando el principio de mínimo privilegio y mejorando la gobernanza.",
    difficulty: "medium"
  },
  {
    id: 20161,
    categoryId: "security-governance",
    text: "¿Qué es Azure Key Vault y para qué se usa principalmente?",
    options: [
      "Un almacén de contraseñas para usuarios",
      "Un servicio para almacenar y gestionar secretos, claves de cifrado y certificados de aplicaciones",
      "Una bóveda para datos de backup",
      "Un sistema de autenticación multifactor"
    ],
    correctAnswer: "Un servicio para almacenar y gestionar secretos, claves de cifrado y certificados de aplicaciones",
    explaination: "Azure Key Vault permite almacenar secretos (contraseñas de BD, API keys), claves de cifrado y certificados de forma segura, centralizando y auditando el acceso.",
    difficulty: "easy"
  },
  {
    id: 20162,
    categoryId: "security-governance",
    text: "¿Qué servicio de Azure actúa como SIEM (Security Information and Event Management)?",
    options: ["Microsoft Defender for Cloud", "Azure Sentinel (Microsoft Sentinel)", "Azure Monitor", "Azure Policy"],
    correctAnswer: "Azure Sentinel (Microsoft Sentinel)",
    explaination: "Microsoft Sentinel es el SIEM nativo de Azure. Recopila datos de seguridad de múltiples fuentes, detecta amenazas y automatiza respuestas a incidentes.",
    difficulty: "medium"
  },
  {
    id: 20163,
    categoryId: "security-governance",
    text: "¿Cómo ayuda el Registro de Actividad (Activity Log) de Azure a la gobernanza?",
    options: [
      "Monitorea el rendimiento de las aplicaciones",
      "Registra todas las operaciones realizadas en la suscripción (quién hizo qué y cuándo)",
      "Gestiona las políticas de seguridad",
      "Calcula los costos de los recursos"
    ],
    correctAnswer: "Registra todas las operaciones realizadas en la suscripción (quién hizo qué y cuándo)",
    explaination: "El Activity Log registra todas las operaciones de control (crear, modificar, eliminar) en la suscripción durante 90 días, permitiendo auditoría y detección de cambios no autorizados.",
    difficulty: "medium"
  },
  {
    id: 20164,
    categoryId: "security-governance",
    text: "¿Qué ventaja tiene usar la nube para cumplimiento normativo comparado con on-premises?",
    options: [
      "En la nube no aplican las normativas de cumplimiento",
      "Azure obtiene y mantiene múltiples certificaciones (ISO, SOC, PCI-DSS) que el cliente puede heredar",
      "El cliente sigue siendo responsable de todas las certificaciones",
      "Las certificaciones en la nube son más baratas de obtener"
    ],
    correctAnswer: "Azure obtiene y mantiene múltiples certificaciones (ISO, SOC, PCI-DSS) que el cliente puede heredar",
    explaination: "Azure mantiene más de 90 certificaciones de cumplimiento. Al usar Azure, los clientes pueden heredar controles ya auditados, reduciendo el esfuerzo de cumplimiento propio.",
    difficulty: "medium"
  },
  {
    id: 20165,
    categoryId: "security-governance",
    text: "¿Qué diferencia hay entre Microsoft Defender for Cloud y Azure Sentinel?",
    options: [
      "Son el mismo servicio con distinto nombre",
      "Defender for Cloud evalúa la postura de seguridad; Sentinel es un SIEM para detectar y responder a amenazas",
      "Sentinel evalúa la postura; Defender detecta amenazas en tiempo real",
      "Defender es gratuito; Sentinel siempre de pago"
    ],
    correctAnswer: "Defender for Cloud evalúa la postura de seguridad; Sentinel es un SIEM para detectar y responder a amenazas",
    explaination: "Defender for Cloud se enfoca en la postura de seguridad y recomendaciones. Sentinel es un SIEM/SOAR que detecta amenazas activas y automatiza respuestas.",
    difficulty: "hard"
  },
  {
    id: 20166,
    categoryId: "security-governance",
    text: "¿Qué es una 'iniciativa' en Azure Policy?",
    options: [
      "Un proyecto piloto de Azure",
      "Una colección de definiciones de políticas agrupadas para un objetivo de cumplimiento común",
      "Una suscripción especial de Azure",
      "Un tipo de grupo de recursos"
    ],
    correctAnswer: "Una colección de definiciones de políticas agrupadas para un objetivo de cumplimiento común",
    explaination: "Una iniciativa de Azure Policy agrupa múltiples definiciones de políticas relacionadas (ej. todas las políticas del estándar ISO 27001) para simplificar su gestión y asignación.",
    difficulty: "medium"
  },
  {
    id: 20167,
    categoryId: "security-governance",
    text: "¿Puede Azure Policy impedir la creación de recursos que no cumplan con las reglas definidas?",
    options: [
      "No, solo genera alertas pero no impide la creación",
      "Sí, puede denegar la creación de recursos que incumplan las políticas",
      "Solo si se combina con Azure Blueprints",
      "Solo para recursos de red"
    ],
    correctAnswer: "Sí, puede denegar la creación de recursos que incumplan las políticas",
    explaination: "Azure Policy con efecto 'Deny' (Denegar) impide activamente la creación o modificación de recursos que no cumplan con las políticas definidas.",
    difficulty: "medium"
  },
  {
    id: 20168,
    categoryId: "security-governance",
    text: "¿Qué es Microsoft Purview Information Protection?",
    options: [
      "Un sistema de backup de datos",
      "Una solución para clasificar, etiquetar y proteger documentos y correos electrónicos sensibles",
      "Un firewall de red de Azure",
      "Un servicio de antivirus"
    ],
    correctAnswer: "Una solución para clasificar, etiquetar y proteger documentos y correos electrónicos sensibles",
    explaination: "Microsoft Purview Information Protection (antes Azure Information Protection) clasifica y protege datos sensibles aplicando etiquetas y cifrado a documentos y emails.",
    difficulty: "medium"
  },
  {
    id: 20169,
    categoryId: "security-governance",
    text: "¿Cuál es el propósito del Portal de Confianza de Servicios (Service Trust Portal) de Microsoft?",
    options: [
      "Gestionar suscripciones de Azure",
      "Proporcionar documentación sobre cumplimiento, privacidad y seguridad de los servicios Microsoft",
      "Monitorear el rendimiento de los servicios",
      "Comprar licencias de Microsoft"
    ],
    correctAnswer: "Proporcionar documentación sobre cumplimiento, privacidad y seguridad de los servicios Microsoft",
    explaination: "El Service Trust Portal ofrece informes de auditoría, documentación de cumplimiento, guías de implementación y herramientas como Compliance Manager.",
    difficulty: "easy"
  },
  {
    id: 20170,
    categoryId: "security-governance",
    text: "¿Qué mecanismo de Azure protege automáticamente contra ataques DDoS sin configuración adicional?",
    options: [
      "Azure Firewall debe configurarse manualmente",
      "Azure DDoS Protection Basic está integrado gratuitamente en todas las redes de Azure",
      "El cliente debe contratar DDoS Protection Standard",
      "No hay protección DDoS automática"
    ],
    correctAnswer: "Azure DDoS Protection Basic está integrado gratuitamente en todas las redes de Azure",
    explaination: "Azure DDoS Protection Basic está habilitado automáticamente y gratuitamente en toda la red de Azure. DDoS Protection Standard ofrece protección adicional avanzada.",
    difficulty: "medium"
  },
  {
    id: 20171,
    categoryId: "security-governance",
    text: "¿Cómo contribuyen las etiquetas (Tags) a la gobernanza en Azure?",
    options: [
      "Aplican políticas de seguridad a los recursos",
      "Permiten clasificar recursos para chargeback, organización y auditoría",
      "Cifran automáticamente los datos del recurso",
      "Limitan el acceso a los recursos"
    ],
    correctAnswer: "Permiten clasificar recursos para chargeback, organización y auditoría",
    explaination: "Las etiquetas son metadatos personalizados que permiten clasificar recursos por proyecto, centro de costo, entorno (producción/dev) o responsable para análisis de costos y auditoría.",
    difficulty: "easy"
  },
  {
    id: 20172,
    categoryId: "security-governance",
    text: "¿Qué tipo de acceso proporciona el acceso Just-In-Time (JIT) de Microsoft Defender for Cloud?",
    options: [
      "Acceso permanente a los puertos de gestión de las VMs",
      "Acceso temporal y bajo demanda a los puertos de gestión, que se cierra automáticamente",
      "Acceso de solo lectura a las VMs",
      "Acceso desde cualquier IP sin restricciones"
    ],
    correctAnswer: "Acceso temporal y bajo demanda a los puertos de gestión, que se cierra automáticamente",
    explaination: "JIT reduce la superficie de ataque cerrando los puertos de gestión (SSH/RDP) por defecto y abriéndolos solo cuando un administrador autorizado los necesita, por un tiempo limitado.",
    difficulty: "hard"
  },
  {
    id: 20173,
    categoryId: "security-governance",
    text: "¿Cuál es una ventaja de la gobernanza en la nube de Azure versus on-premises?",
    options: [
      "En on-premises la gobernanza es automática",
      "Azure ofrece herramientas nativas (Policy, Blueprints, Management Groups) para aplicar gobernanza a escala",
      "En la nube no se necesita gobernanza",
      "La gobernanza en la nube es más cara"
    ],
    correctAnswer: "Azure ofrece herramientas nativas (Policy, Blueprints, Management Groups) para aplicar gobernanza a escala",
    explaination: "Azure proporciona herramientas nativas integradas para aplicar gobernanza automáticamente a escala en múltiples suscripciones, algo difícil de replicar on-premises.",
    difficulty: "medium"
  },
  {
    id: 20174,
    categoryId: "security-governance",
    text: "¿Las etiquetas (Tags) asignadas a un grupo de recursos se heredan automáticamente por todos los recursos dentro?",
    options: ["Sí, siempre", "No, se deben asignar explícitamente a cada recurso o mediante Policy", "Solo para VMs", "Solo si se usa Azure Blueprints"],
    correctAnswer: "No, se deben asignar explícitamente a cada recurso o mediante Policy",
    explaination: "Las etiquetas no se heredan automáticamente del grupo de recursos. Se pueden propagar usando Azure Policy con el efecto 'append' o 'modify' que añade la etiqueta a nuevos recursos.",
    difficulty: "hard"
  },
  {
    id: 20175,
    categoryId: "security-governance",
    text: "¿Qué tipo de bloqueo de recurso impide tanto la eliminación como la modificación?",
    options: ["Delete lock", "ReadOnly lock", "Modify lock", "Full lock"],
    correctAnswer: "ReadOnly lock",
    explaination: "Un bloqueo ReadOnly impide tanto la eliminación como cualquier modificación del recurso. Un bloqueo Delete solo impide la eliminación pero permite modificaciones.",
    difficulty: "medium"
  },
  {
    id: 20176,
    categoryId: "security-governance",
    text: "¿Cuál es la relación jerárquica correcta de los niveles de organización en Azure?",
    options: [
      "Suscripción → Grupo de administración → Tenant",
      "Tenant → Grupo de administración → Suscripción → Grupo de recursos → Recursos",
      "Recursos → Suscripción → Grupo de administración → Tenant",
      "Grupo de recursos → Suscripción → Tenant"
    ],
    correctAnswer: "Tenant → Grupo de administración → Suscripción → Grupo de recursos → Recursos",
    explaination: "La jerarquía de Azure va de mayor a menor nivel: Tenant (Entra ID) → Management Groups → Suscripciones → Resource Groups → Recursos individuales.",
    difficulty: "hard"
  },
  {
    id: 20177,
    categoryId: "security-governance",
    text: "¿Cuáles DOS son ventajas de seguridad de usar Azure frente a mantener on-premises? (Selecciona 2)",
    options: [
      "El cliente ya no tiene ninguna responsabilidad de seguridad",
      "Microsoft invierte miles de millones en ciberseguridad y equipos especializados",
      "Azure aplica parches de SO a las VMs del cliente automáticamente",
      "Los servicios PaaS tienen seguridad gestionada por Microsoft en la plataforma subyacente"
    ],
    correctAnswers: ["Microsoft invierte miles de millones en ciberseguridad y equipos especializados", "Los servicios PaaS tienen seguridad gestionada por Microsoft en la plataforma subyacente"],
    explaination: "Microsoft invierte enormemente en seguridad (equipo de 8.500+ expertos). Los servicios PaaS incluyen seguridad de plataforma gestionada, reduciendo la carga del cliente.",
    difficulty: "medium"
  },
  {
    id: 20178,
    categoryId: "security-governance",
    text: "¿Qué es el GDPR y cómo se relaciona con Azure?",
    options: [
      "Es una certificación técnica de Azure",
      "Es un reglamento europeo de protección de datos; Azure ofrece herramientas para ayudar a su cumplimiento",
      "Es una norma de seguridad de hardware de Microsoft",
      "Es un protocolo de red de Azure"
    ],
    correctAnswer: "Es un reglamento europeo de protección de datos; Azure ofrece herramientas para ayudar a su cumplimiento",
    explaination: "El GDPR (Reglamento General de Protección de Datos) es ley europea. Azure ofrece herramientas como Purview, políticas de residencia de datos y Compliance Manager para facilitar su cumplimiento.",
    difficulty: "easy"
  },
  {
    id: 20179,
    categoryId: "security-governance",
    text: "¿Qué ventaja de gobernanza proporciona tener todos los recursos en Azure versus múltiples herramientas on-premises?",
    options: [
      "Es posible verlo todo en un único panel (portal de Azure) con gobernanza centralizada",
      "Elimina la necesidad de personal de seguridad",
      "Los recursos se gestionan solos sin intervención humana",
      "Solo aplica a empresas con más de 1000 empleados"
    ],
    correctAnswer: "Es posible verlo todo en un único panel (portal de Azure) con gobernanza centralizada",
    explaination: "Azure Portal proporciona una vista unificada de todos los recursos, políticas, costos y seguridad desde un único panel, simplificando la gobernanza centralizada.",
    difficulty: "easy"
  },
  {
    id: 20180,
    categoryId: "security-governance",
    text: "¿Puede un bloqueo de recurso (Resource Lock) ser eliminado por cualquier usuario con permisos de Contribuidor?",
    options: [
      "Sí, cualquier Contribuidor puede eliminar bloqueos",
      "No, solo usuarios con el rol Propietario o Administrador de acceso de usuarios pueden gestionar bloqueos",
      "Cualquier usuario puede eliminar bloqueos",
      "Los bloqueos no pueden eliminarse una vez creados"
    ],
    correctAnswer: "No, solo usuarios con el rol Propietario o Administrador de acceso de usuarios pueden gestionar bloqueos",
    explaination: "Eliminar bloqueos requiere el rol Propietario o Administrador de acceso de usuarios. Los Contribuidores no pueden eliminar bloqueos, lo que protege incluso contra cambios accidentales de admins.",
    difficulty: "hard"
  },
];

// ─────────────────────────────────────────────
// management-capacity  (20181–20210)
// ─────────────────────────────────────────────
export const managementCapacityQuestions: Question[] = [
  {
    id: 20181,
    categoryId: "management-capacity",
    text: "¿Cuáles son las dos formas de administrar recursos en Azure? (Selecciona 2)",
    options: [
      "Solo mediante el portal web",
      "A través del portal de Azure (interfaz gráfica)",
      "Solo mediante llamadas telefónicas al soporte",
      "Mediante herramientas como CLI, PowerShell y ARM templates"
    ],
    correctAnswers: ["A través del portal de Azure (interfaz gráfica)", "Mediante herramientas como CLI, PowerShell y ARM templates"],
    explaination: "Azure se puede gestionar visualmente desde el portal web o de forma programática/automatizada mediante CLI, PowerShell, SDKs o plantillas ARM.",
    difficulty: "easy"
  },
  {
    id: 20182,
    categoryId: "management-capacity",
    text: "¿Qué es Azure Cloud Shell?",
    options: [
      "Un servicio de almacenamiento en la nube",
      "Una terminal interactiva accesible desde el navegador que soporta Bash y PowerShell",
      "Un tipo especial de VM",
      "Una herramienta de monitoreo"
    ],
    correctAnswer: "Una terminal interactiva accesible desde el navegador que soporta Bash y PowerShell",
    explaination: "Azure Cloud Shell es una shell interactiva integrada en el portal de Azure. Soporta Bash y PowerShell con las herramientas CLI de Azure preinstaladas.",
    difficulty: "easy"
  },
  {
    id: 20183,
    categoryId: "management-capacity",
    text: "¿Desde qué dispositivos puede accederse al portal de Azure?",
    options: [
      "Solo desde equipos Windows",
      "Solo desde equipos de escritorio",
      "Desde cualquier dispositivo con navegador web: Windows, macOS, Linux, Android, iOS",
      "Solo desde equipos corporativos con certificado"
    ],
    correctAnswer: "Desde cualquier dispositivo con navegador web: Windows, macOS, Linux, Android, iOS",
    explaination: "El portal de Azure es una aplicación web accesible desde cualquier navegador moderno en cualquier dispositivo, plataforma o sistema operativo.",
    difficulty: "easy"
  },
  {
    id: 20184,
    categoryId: "management-capacity",
    text: "¿Qué son las plantillas de Azure Resource Manager (ARM Templates)?",
    options: [
      "Documentos Word para planificar la arquitectura",
      "Archivos JSON que definen la infraestructura de Azure de forma declarativa para automatizar despliegues",
      "Código de Python para gestionar VMs",
      "Plantillas de precios de Azure"
    ],
    correctAnswer: "Archivos JSON que definen la infraestructura de Azure de forma declarativa para automatizar despliegues",
    explaination: "Las plantillas ARM son archivos JSON que describen los recursos de Azure de forma declarativa (Infrastructure as Code). Permiten despliegues repetibles y consistentes.",
    difficulty: "easy"
  },
  {
    id: 20185,
    categoryId: "management-capacity",
    text: "¿Cuál es la ventaja de usar Infrastructure as Code (IaC) para gestionar recursos en Azure?",
    options: [
      "Los recursos son más baratos cuando se crean mediante código",
      "Permite crear entornos repetibles, consistentes y con control de versiones",
      "Solo funciona para recursos de almacenamiento",
      "Requiere menos permisos que el portal"
    ],
    correctAnswer: "Permite crear entornos repetibles, consistentes y con control de versiones",
    explaination: "IaC (plantillas ARM, Bicep, Terraform) permite definir la infraestructura en código, garantizando que los entornos sean idénticos y los cambios estén versionados como el código.",
    difficulty: "medium"
  },
  {
    id: 20186,
    categoryId: "management-capacity",
    text: "¿Puede ejecutarse la CLI de Azure en un sistema operativo macOS?",
    options: [
      "No, solo funciona en Windows",
      "Sí, la CLI de Azure es multiplataforma (Windows, macOS, Linux)",
      "Solo en macOS con Rosetta",
      "Solo en versiones Enterprise de macOS"
    ],
    correctAnswer: "Sí, la CLI de Azure es multiplataforma (Windows, macOS, Linux)",
    explaination: "La CLI de Azure está disponible para Windows, macOS y Linux. También puede ejecutarse desde cualquier sistema usando Azure Cloud Shell en el navegador.",
    difficulty: "easy"
  },
  {
    id: 20187,
    categoryId: "management-capacity",
    text: "¿Qué servicio de Azure proporciona recomendaciones personalizadas para mejorar costos, rendimiento, seguridad y confiabilidad?",
    options: ["Azure Monitor", "Azure Advisor", "Azure Policy", "Azure Service Health"],
    correctAnswer: "Azure Advisor",
    explaination: "Azure Advisor analiza la configuración y el uso de los recursos y proporciona recomendaciones en 5 categorías: costo, seguridad, confiabilidad, excelencia operacional y rendimiento.",
    difficulty: "easy"
  },
  {
    id: 20188,
    categoryId: "management-capacity",
    text: "¿Cuál es la diferencia entre 'administración de la nube' y 'gobernanza de la nube'?",
    options: [
      "Son conceptos idénticos",
      "Administración gestiona el día a día operativo; gobernanza establece las políticas y estándares de control",
      "Gobernanza gestiona los costos; administración la seguridad",
      "Solo las grandes empresas necesitan gobernanza"
    ],
    correctAnswer: "Administración gestiona el día a día operativo; gobernanza establece las políticas y estándares de control",
    explaination: "La administración cubre operaciones diarias (monitoreo, escalar, parchear). La gobernanza establece las reglas (políticas, roles, estándares) que guían esas operaciones.",
    difficulty: "medium"
  },
  {
    id: 20189,
    categoryId: "management-capacity",
    text: "¿Puede Azure PowerShell ejecutarse en un equipo con Linux?",
    options: [
      "No, PowerShell solo funciona en Windows",
      "Sí, PowerShell Core es multiplataforma y funciona en Linux y macOS",
      "Solo en distribuciones Ubuntu",
      "Solo en versiones de servidor de Linux"
    ],
    correctAnswer: "Sí, PowerShell Core es multiplataforma y funciona en Linux y macOS",
    explaination: "PowerShell Core (versión 6+) es multiplataforma y funciona en Windows, Linux y macOS. El módulo Az (Azure PowerShell) también es compatible con estas plataformas.",
    difficulty: "medium"
  },
  {
    id: 20190,
    categoryId: "management-capacity",
    text: "¿Qué ventaja ofrece Azure Resource Manager (ARM) como capa de gestión?",
    options: [
      "Permite pagar menos por los recursos",
      "Proporciona una capa unificada para gestionar todos los recursos de Azure independientemente de la herramienta usada",
      "Solo sirve para crear VMs",
      "Requiere usar necesariamente PowerShell"
    ],
    correctAnswer: "Proporciona una capa unificada para gestionar todos los recursos de Azure independientemente de la herramienta usada",
    explaination: "Azure Resource Manager es la capa de gestión de Azure. Ya sea que uses el portal, CLI, PowerShell o una plantilla ARM, todas las operaciones pasan por ARM.",
    difficulty: "medium"
  },
  {
    id: 20191,
    categoryId: "management-capacity",
    text: "¿Cuáles DOS son ventajas de usar el portal de Azure para administración? (Selecciona 2)",
    options: [
      "Permite automatizar tareas repetitivas fácilmente mediante scripts",
      "Proporciona una interfaz visual intuitiva sin necesidad de conocer comandos",
      "Está disponible desde cualquier dispositivo con navegador",
      "Es la única forma de gestionar recursos en Azure"
    ],
    correctAnswers: ["Proporciona una interfaz visual intuitiva sin necesidad de conocer comandos", "Está disponible desde cualquier dispositivo con navegador"],
    explaination: "El portal es visual (no requiere conocer comandos) y accesible desde cualquier dispositivo con navegador. Para automatización, CLI/PowerShell son mejores opciones.",
    difficulty: "medium"
  },
  {
    id: 20192,
    categoryId: "management-capacity",
    text: "¿Qué herramienta de Azure permite administrar recursos desde un iPad?",
    options: [
      "Solo PowerShell en Windows",
      "El portal de Azure o Azure Cloud Shell desde el navegador",
      "Solo la aplicación de escritorio de Azure",
      "No es posible desde un iPad"
    ],
    correctAnswer: "El portal de Azure o Azure Cloud Shell desde el navegador",
    explaination: "El portal de Azure es una web app accesible desde cualquier navegador, incluyendo el de un iPad. Azure Cloud Shell también funciona desde navegadores móviles.",
    difficulty: "easy"
  },
  {
    id: 20193,
    categoryId: "management-capacity",
    text: "¿Qué es Azure Arc?",
    options: [
      "Un servicio de backup en la nube",
      "Una solución para gestionar recursos fuera de Azure (on-premises, otras nubes) desde el plano de control de Azure",
      "Una herramienta de migración a Azure",
      "Un servicio de red de Azure"
    ],
    correctAnswer: "Una solución para gestionar recursos fuera de Azure (on-premises, otras nubes) desde el plano de control de Azure",
    explaination: "Azure Arc extiende el plano de gestión de Azure a servidores y clústeres on-premises u otras nubes, permitiendo aplicar políticas, RBAC y gestión centralizada.",
    difficulty: "hard"
  },
  {
    id: 20194,
    categoryId: "management-capacity",
    text: "¿Qué herramienta de Azure proporciona una vista centralizada del estado de todos los servicios e incidentes?",
    options: ["Azure Cost Management", "Azure Service Health", "Azure Advisor", "Azure Blueprints"],
    correctAnswer: "Azure Service Health",
    explaination: "Azure Service Health es el panel centralizado que muestra el estado de todos los servicios de Azure, incidentes activos y mantenimientos planificados con impacto en los recursos del cliente.",
    difficulty: "easy"
  },
  {
    id: 20195,
    categoryId: "management-capacity",
    text: "¿Cuál es la ventaja de usar plantillas ARM o Bicep para la administración de Azure?",
    options: [
      "Son más baratas que usar el portal",
      "Garantizan que los entornos sean idénticos y reproducibles (idempotencia)",
      "Solo funcionan para recursos de almacenamiento",
      "No requieren permisos de Azure"
    ],
    correctAnswer: "Garantizan que los entornos sean idénticos y reproducibles (idempotencia)",
    explaination: "IaC con plantillas ARM/Bicep es idempotente: si se ejecuta varias veces, el resultado es el mismo estado deseado, garantizando consistencia entre entornos.",
    difficulty: "medium"
  },
  {
    id: 20196,
    categoryId: "management-capacity",
    text: "¿Qué significa que la administración de Azure sea 'self-service'?",
    options: [
      "Que los usuarios pueden hacer cualquier cosa sin restricciones",
      "Que los usuarios pueden aprovisionar y gestionar recursos sin necesitar aprobación manual de TI para cada acción",
      "Que Azure se gestiona solo sin intervención humana",
      "Que no hay cargos por los recursos creados"
    ],
    correctAnswer: "Que los usuarios pueden aprovisionar y gestionar recursos sin necesitar aprobación manual de TI para cada acción",
    explaination: "El autoservicio en la nube permite a los equipos aprovisionar lo que necesitan sin esperar semanas por aprobaciones de TI, acelerando el desarrollo y la innovación.",
    difficulty: "easy"
  },
  {
    id: 20197,
    categoryId: "management-capacity",
    text: "¿Qué es Bicep en el contexto de Azure?",
    options: [
      "Un lenguaje de programación nuevo de Microsoft",
      "Un lenguaje declarativo de dominio específico (DSL) para desplegar recursos de Azure, más simple que las plantillas ARM JSON",
      "Una herramienta de monitoreo de rendimiento",
      "Un servicio de bases de datos de Azure"
    ],
    correctAnswer: "Un lenguaje declarativo de dominio específico (DSL) para desplegar recursos de Azure, más simple que las plantillas ARM JSON",
    explaination: "Bicep es una abstracción sobre las plantillas ARM JSON con sintaxis más clara. Se compila a ARM JSON y ofrece todas las capacidades de IaC con mejor experiencia de desarrollo.",
    difficulty: "hard"
  },
  {
    id: 20198,
    categoryId: "management-capacity",
    text: "¿Cuáles son las dos formas de administración de Azure que soportan automatización y scripting? (Selecciona 2)",
    options: [
      "Portal de Azure (interfaz gráfica)",
      "Azure CLI",
      "Aplicación móvil de Azure",
      "Azure PowerShell"
    ],
    correctAnswers: ["Azure CLI", "Azure PowerShell"],
    explaination: "Azure CLI y Azure PowerShell son herramientas de línea de comandos que soportan scripts y automatización. El portal y la app móvil son interfaces gráficas que no soportan scripting.",
    difficulty: "easy"
  },
  {
    id: 20199,
    categoryId: "management-capacity",
    text: "¿Cuál es la URL del portal de Azure?",
    options: ["https://admin.azure.com", "https://manage.azure.com", "https://portal.azure.com", "https://azure.microsoft.com/portal"],
    correctAnswer: "https://portal.azure.com",
    explaination: "La URL del portal de Azure es portal.azure.com. Es la interfaz web principal para gestionar todos los recursos y servicios de Azure.",
    difficulty: "easy"
  },
  {
    id: 20200,
    categoryId: "management-capacity",
    text: "¿Qué ventaja tiene Azure Monitor para la capacidad de administración?",
    options: [
      "Crea recursos automáticamente cuando detecta problemas",
      "Proporciona visibilidad completa sobre el rendimiento y la salud de los recursos con alertas proactivas",
      "Gestiona automáticamente los costos",
      "Solo monitorea VMs, no otros servicios"
    ],
    correctAnswer: "Proporciona visibilidad completa sobre el rendimiento y la salud de los recursos con alertas proactivas",
    explaination: "Azure Monitor recopila métricas y logs de todos los recursos de Azure, permitiendo alertas proactivas y análisis para mantener la salud operacional.",
    difficulty: "easy"
  },
  {
    id: 20201,
    categoryId: "management-capacity",
    text: "¿Puede Azure Advisor generar recomendaciones para mejorar la configuración de seguridad de los recursos?",
    options: ["No, solo ofrece recomendaciones de costos", "Sí, uno de sus 5 pilares es la seguridad", "Solo si tienes Microsoft Defender for Cloud activo", "Solo para VMs"],
    correctAnswer: "Sí, uno de sus 5 pilares es la seguridad",
    explaination: "Azure Advisor ofrece recomendaciones en 5 pilares: Costo, Seguridad, Confiabilidad, Excelencia operacional y Rendimiento.",
    difficulty: "easy"
  },
  {
    id: 20202,
    categoryId: "management-capacity",
    text: "¿Qué herramienta de Azure permite crear una VM desde un dispositivo con sistema operativo ChromeOS?",
    options: [
      "No es posible desde ChromeOS",
      "Azure Cloud Shell desde el navegador de ChromeOS",
      "Solo PowerShell en Windows",
      "Solo la CLI en Linux"
    ],
    correctAnswer: "Azure Cloud Shell desde el navegador de ChromeOS",
    explaination: "Azure Cloud Shell funciona en el navegador de cualquier dispositivo, incluido ChromeOS, permitiendo ejecutar comandos Bash o PowerShell para gestionar Azure.",
    difficulty: "medium"
  },
  {
    id: 20203,
    categoryId: "management-capacity",
    text: "¿Cuál es la ventaja de la administración 'en cualquier lugar' que ofrece Azure?",
    options: [
      "Solo se puede administrar desde las oficinas del cliente",
      "Los recursos se pueden gestionar desde cualquier dispositivo con conexión a internet, sin estar en la red corporativa",
      "Requiere VPN siempre para administrar",
      "Solo administradores con credenciales físicas pueden acceder"
    ],
    correctAnswer: "Los recursos se pueden gestionar desde cualquier dispositivo con conexión a internet, sin estar en la red corporativa",
    explaination: "A diferencia de datacenter físico, Azure se puede administrar desde cualquier lugar con internet, usando el portal, CLI, PowerShell o SDKs.",
    difficulty: "easy"
  },
  {
    id: 20204,
    categoryId: "management-capacity",
    text: "¿Qué es el 'Activity Log' de Azure y cómo mejora la administración?",
    options: [
      "Un log de rendimiento de las aplicaciones",
      "Un registro de todas las operaciones de control realizadas en la suscripción para auditoría",
      "Un historial de costos de Azure",
      "Un log de los accesos al portal de Azure"
    ],
    correctAnswer: "Un registro de todas las operaciones de control realizadas en la suscripción para auditoría",
    explaination: "El Activity Log registra quién creó, modificó o eliminó qué recurso y cuándo. Esencial para auditoría, troubleshooting y cumplimiento normativo.",
    difficulty: "medium"
  },
  {
    id: 20205,
    categoryId: "management-capacity",
    text: "¿Qué panel del portal de Azure debe usarse para ver y gestionar eventos de mantenimiento planificado?",
    options: ["Azure Monitor", "Azure Cost Management", "Azure Advisor", "Ayuda + Soporte (Help + Support)"],
    correctAnswer: "Ayuda + Soporte (Help + Support)",
    explaination: "La sección Help + Support del portal incluye Service Health donde se pueden ver los eventos de mantenimiento planificado que afectan a la suscripción.",
    difficulty: "medium"
  },
  {
    id: 20206,
    categoryId: "management-capacity",
    text: "¿Cuál es la ventaja de administrar Azure mediante scripts (CLI/PowerShell) frente al portal?",
    options: [
      "Los scripts son siempre más seguros que el portal",
      "Los scripts permiten automatizar tareas repetitivas y gestionar grandes cantidades de recursos eficientemente",
      "El portal es solo para lectura, los cambios requieren scripts",
      "Los scripts cuestan menos que usar el portal"
    ],
    correctAnswer: "Los scripts permiten automatizar tareas repetitivas y gestionar grandes cantidades de recursos eficientemente",
    explaination: "Los scripts permiten automatizar tareas repetitivas (crear 50 VMs, aplicar configuraciones), lo que sería tedioso y propenso a errores si se hiciera manualmente desde el portal.",
    difficulty: "easy"
  },
  {
    id: 20207,
    categoryId: "management-capacity",
    text: "¿Cuáles son los 5 pilares de recomendaciones de Azure Advisor? (Selecciona 2 de los que se muestran)",
    options: [
      "Velocidad de internet",
      "Costo (optimización de costos)",
      "Número de empleados de TI",
      "Seguridad"
    ],
    correctAnswers: ["Costo (optimización de costos)", "Seguridad"],
    explaination: "Los 5 pilares de Azure Advisor son: Costo, Seguridad, Confiabilidad, Excelencia operacional y Rendimiento. Costo y Seguridad son dos de ellos.",
    difficulty: "medium"
  },
  {
    id: 20208,
    categoryId: "management-capacity",
    text: "¿Qué es Azure Resource Graph?",
    options: [
      "Una herramienta de visualización de costos",
      "Un servicio para consultar y explorar recursos de Azure a escala usando queries tipo Kusto",
      "Un gráfico de rendimiento de las aplicaciones",
      "Una representación visual de la jerarquía de suscripciones"
    ],
    correctAnswer: "Un servicio para consultar y explorar recursos de Azure a escala usando queries tipo Kusto",
    explaination: "Azure Resource Graph permite hacer consultas complejas sobre todos los recursos de Azure en múltiples suscripciones de forma rápida y eficiente.",
    difficulty: "hard"
  },
  {
    id: 20209,
    categoryId: "management-capacity",
    text: "¿Cuál es la ventaja de la escalabilidad elástica en términos de capacidad de administración?",
    options: [
      "Requiere que los admins aprovisionen manualmente capacidad adicional con antelación",
      "Los administradores pueden escalar recursos rápidamente según demanda sin planificación a largo plazo",
      "Solo permite escalar hacia arriba, nunca hacia abajo",
      "La escalabilidad requiere reinstalar el sistema operativo"
    ],
    correctAnswer: "Los administradores pueden escalar recursos rápidamente según demanda sin planificación a largo plazo",
    explaination: "La elasticidad de Azure libera a los administradores de la carga de planificar y aprovisionar capacidad con meses de antelación.",
    difficulty: "medium"
  },
  {
    id: 20210,
    categoryId: "management-capacity",
    text: "¿Qué herramienta de Azure permite a los administradores crear dashboards personalizados con métricas de múltiples recursos?",
    options: ["Azure Blueprints", "Azure Monitor Workbooks y Azure Portal Dashboards", "Azure Service Health", "Azure Advisor"],
    correctAnswer: "Azure Monitor Workbooks y Azure Portal Dashboards",
    explaination: "El portal de Azure permite crear dashboards personalizables. Azure Monitor Workbooks permiten crear informes interactivos con métricas de múltiples recursos y suscripciones.",
    difficulty: "medium"
  },
];

// ─────────────────────────────────────────────
// infrastructure-as-service  (20211–20240)
// ─────────────────────────────────────────────
export const infrastructureAsServiceQuestions: Question[] = [
  {
    id: 20211,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es la definición correcta de IaaS (Infraestructura como Servicio)?",
    options: [
      "El proveedor gestiona todo, incluyendo la aplicación",
      "El cliente alquila infraestructura virtualizada (VMs, almacenamiento, redes) y gestiona el SO y lo que está por encima",
      "El proveedor gestiona la plataforma y el cliente solo el código",
      "Es un servicio de software listo para usar"
    ],
    correctAnswer: "El cliente alquila infraestructura virtualizada (VMs, almacenamiento, redes) y gestiona el SO y lo que está por encima",
    explaination: "En IaaS el proveedor gestiona hardware, red física y virtualización. El cliente gestiona desde el sistema operativo hacia arriba: SO, middleware, runtime, apps y datos.",
    difficulty: "easy"
  },
  {
    id: 20212,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál de estos servicios de Azure es el ejemplo más claro de IaaS?",
    options: ["Azure SQL Database", "Azure App Service", "Azure Virtual Machines", "Microsoft 365"],
    correctAnswer: "Azure Virtual Machines",
    explaination: "Azure Virtual Machines es IaaS por excelencia: el cliente obtiene un servidor virtualizado con control total del sistema operativo y todo lo que instale en él.",
    difficulty: "easy"
  },
  {
    id: 20213,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es el caso de uso más adecuado para IaaS?",
    options: [
      "Usar un CRM listo para usar sin personalización",
      "Desarrollar una app web sin gestionar servidores",
      "Migrar un servidor físico con una aplicación que requiere control total del SO",
      "Usar correo electrónico corporativo"
    ],
    correctAnswer: "Migrar un servidor físico con una aplicación que requiere control total del SO",
    explaination: "IaaS es ideal para aplicaciones que requieren control total del SO (configuración del registro, servicios del sistema, drivers específicos) o para migraciones 'lift and shift'.",
    difficulty: "easy"
  },
  {
    id: 20214,
    categoryId: "infrastructure-as-service",
    text: "¿Qué responsabilidades mantiene el cliente en IaaS que NO tiene en PaaS?",
    options: [
      "Gestión de sus datos",
      "Configuración de identidades",
      "Aplicación de parches al sistema operativo",
      "Protección de sus aplicaciones"
    ],
    correctAnswer: "Aplicación de parches al sistema operativo",
    explaination: "La diferencia clave entre IaaS y PaaS es que en IaaS el cliente gestiona el SO (incluyendo parches), mientras que en PaaS el proveedor lo gestiona.",
    difficulty: "medium"
  },
  {
    id: 20215,
    categoryId: "infrastructure-as-service",
    text: "¿Qué tipo de escalado soportan las VMs de Azure en IaaS?",
    options: [
      "Solo escalado vertical (cambiar el tamaño de la VM)",
      "Solo escalado horizontal (más VMs)",
      "Ambos: escalado vertical y horizontal",
      "Las VMs de Azure no soportan escalado"
    ],
    correctAnswer: "Ambos: escalado vertical y horizontal",
    explaination: "Las VMs de Azure soportan escalado vertical (cambiar a un tamaño mayor/menor) y horizontal (Azure VM Scale Sets para añadir/quitar instancias).",
    difficulty: "medium"
  },
  {
    id: 20216,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es la ventaja de IaaS para una empresa que hace 'lift and shift' (migración directa)?",
    options: [
      "Requiere rediseñar completamente la aplicación",
      "Permite migrar la aplicación tal cual está sin refactorizar, solo cambiando el hardware de físico a virtual",
      "Es la opción más costosa",
      "No es compatible con aplicaciones legacy"
    ],
    correctAnswer: "Permite migrar la aplicación tal cual está sin refactorizar, solo cambiando el hardware de físico a virtual",
    explaination: "'Lift and shift' es la estrategia de migrar aplicaciones existentes a VMs en la nube sin modificarlas, aprovechando el control que IaaS ofrece sobre el SO.",
    difficulty: "easy"
  },
  {
    id: 20217,
    categoryId: "infrastructure-as-service",
    text: "¿Qué ocurre con los costos de una VM cuando está completamente detenida y desasignada en Azure?",
    options: [
      "Se siguen cobrando todos los costos",
      "Dejan de cobrarse los costos de cómputo, pero el almacenamiento del disco sigue costando",
      "Todos los costos se eliminan completamente",
      "Se cobra una tarifa reducida del 50%"
    ],
    correctAnswer: "Dejan de cobrarse los costos de cómputo, pero el almacenamiento del disco sigue costando",
    explaination: "Al desasignar una VM, Azure libera los recursos de cómputo y deja de cobrarlos. Sin embargo, el disco de la VM (almacenamiento) persiste y genera costo.",
    difficulty: "medium"
  },
  {
    id: 20218,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es el SLA típico para una única VM en Azure?",
    options: ["99,99%", "99,95%", "Menor al 99,9%", "100%"],
    correctAnswer: "Menor al 99,9%",
    explaination: "Una sola VM puede tener SLA del 99,9% si usa Premium SSD. Para SLA del 99,99% se requieren 2+ VMs en 2+ zonas de disponibilidad.",
    difficulty: "hard"
  },
  {
    id: 20219,
    categoryId: "infrastructure-as-service",
    text: "¿Qué es Azure Virtual Machine Scale Sets?",
    options: [
      "Un servicio para hacer backups de VMs",
      "Un servicio que gestiona un grupo de VMs idénticas con autoescalado automático",
      "Una forma de conectar VMs en red privada",
      "Un tipo especial de VM para cargas de trabajo de alto rendimiento"
    ],
    correctAnswer: "Un servicio que gestiona un grupo de VMs idénticas con autoescalado automático",
    explaination: "Azure VM Scale Sets permite definir un conjunto de VMs idénticas que se escalan automáticamente hacia arriba o abajo según reglas de autoescalado.",
    difficulty: "medium"
  },
  {
    id: 20220,
    categoryId: "infrastructure-as-service",
    text: "¿En IaaS, quién es responsable de configurar las reglas del firewall y los NSG para las VMs?",
    options: [
      "Microsoft gestiona toda la seguridad de red automáticamente",
      "El cliente es responsable de configurar NSG y reglas de firewall para sus VMs",
      "Es responsabilidad compartida 50/50",
      "Solo aplica para VMs en zonas de disponibilidad"
    ],
    correctAnswer: "El cliente es responsable de configurar NSG y reglas de firewall para sus VMs",
    explaination: "En IaaS, el cliente gestiona la seguridad de red (NSG, reglas de firewall, acceso JIT) para sus VMs. Azure proporciona las herramientas pero el cliente las configura.",
    difficulty: "easy"
  },
  {
    id: 20221,
    categoryId: "infrastructure-as-service",
    text: "¿Qué es Azure Disk Storage en el contexto de IaaS?",
    options: [
      "Un servicio para compartir archivos entre VMs",
      "Discos virtuales (HDD/SSD) que se conectan a las VMs como almacenamiento persistente",
      "Un servicio de almacenamiento de objetos",
      "Una base de datos administrada"
    ],
    correctAnswer: "Discos virtuales (HDD/SSD) que se conectan a las VMs como almacenamiento persistente",
    explaination: "Azure Disk Storage proporciona discos persistentes para VMs, disponibles en varios tipos (HDD Standard, SSD Standard, SSD Premium, Ultra SSD) según el rendimiento requerido.",
    difficulty: "easy"
  },
  {
    id: 20222,
    categoryId: "infrastructure-as-service",
    text: "¿Cuáles DOS son escenarios válidos para usar IaaS? (Selecciona 2)",
    options: [
      "Usar Microsoft Teams para colaboración",
      "Alojar un sitio WordPress con plugins personalizados que requieren acceso al sistema operativo",
      "Usar Excel Online",
      "Pruebas y desarrollo que requieren entornos que replica on-premises"
    ],
    correctAnswers: ["Alojar un sitio WordPress con plugins personalizados que requieren acceso al sistema operativo", "Pruebas y desarrollo que requieren entornos que replica on-premises"],
    explaination: "IaaS es ideal cuando se necesita acceso al SO (WordPress con configuración específica del servidor) o para entornos de dev/test que replican on-premises.",
    difficulty: "medium"
  },
  {
    id: 20223,
    categoryId: "infrastructure-as-service",
    text: "¿Qué ventaja tiene IaaS sobre tener servidores físicos propios?",
    options: [
      "IaaS es siempre más barato",
      "Elimina la necesidad de gestionar hardware físico, permite escalar rápidamente y convierte CapEx en OpEx",
      "IaaS gestiona automáticamente el sistema operativo",
      "IaaS no requiere personal de TI"
    ],
    correctAnswer: "Elimina la necesidad de gestionar hardware físico, permite escalar rápidamente y convierte CapEx en OpEx",
    explaination: "IaaS elimina la gestión del hardware físico, permite aprovisionar recursos en minutos (no semanas), y convierte la inversión en hardware (CapEx) en pago por uso (OpEx).",
    difficulty: "easy"
  },
  {
    id: 20224,
    categoryId: "infrastructure-as-service",
    text: "¿Puede una VM de Azure ejecutar cualquier sistema operativo, incluyendo Linux?",
    options: [
      "No, las VMs de Azure solo soportan Windows Server",
      "Sí, Azure soporta múltiples distribuciones de Linux y versiones de Windows",
      "Solo Ubuntu y Windows Server",
      "Solo sistemas operativos de Microsoft"
    ],
    correctAnswer: "Sí, Azure soporta múltiples distribuciones de Linux y versiones de Windows",
    explaination: "Azure ofrece un marketplace amplio con múltiples distribuciones Linux (Ubuntu, CentOS, RHEL, SUSE) y versiones de Windows Server, además de imágenes personalizadas.",
    difficulty: "easy"
  },
  {
    id: 20225,
    categoryId: "infrastructure-as-service",
    text: "¿Qué componente de red en IaaS de Azure controla el tráfico entrante y saliente de las VMs?",
    options: ["Azure ExpressRoute", "Grupos de Seguridad de Red (NSG)", "Azure CDN", "Azure Traffic Manager"],
    correctAnswer: "Grupos de Seguridad de Red (NSG)",
    explaination: "Los NSG (Network Security Groups) actúan como firewall virtual para las VMs, controlando el tráfico de red mediante reglas de permiso o denegación por puerto, protocolo e IP.",
    difficulty: "easy"
  },
  {
    id: 20226,
    categoryId: "infrastructure-as-service",
    text: "¿Para qué sirve Azure Bastion en el contexto de IaaS?",
    options: [
      "Para hacer backups de VMs",
      "Para acceder de forma segura a VMs mediante SSH/RDP sin exponer puertos públicos",
      "Para escalar automáticamente las VMs",
      "Para monitorear el rendimiento de las VMs"
    ],
    correctAnswer: "Para acceder de forma segura a VMs mediante SSH/RDP sin exponer puertos públicos",
    explaination: "Azure Bastion proporciona acceso SSH/RDP seguro a las VMs directamente desde el portal, sin exponer puertos de gestión a internet, reduciendo la superficie de ataque.",
    difficulty: "medium"
  },
  {
    id: 20227,
    categoryId: "infrastructure-as-service",
    text: "¿Qué tipo de almacenamiento se recomienda para los discos del sistema operativo de VMs de producción en Azure?",
    options: ["HDD Standard (discos magnéticos)", "SSD Premium para mejor rendimiento y SLA más alto", "Azure Blob Storage", "Azure File Storage"],
    correctAnswer: "SSD Premium para mejor rendimiento y SLA más alto",
    explaination: "SSD Premium ofrece baja latencia y alto rendimiento de I/O para cargas de producción. Además, una VM con un único SSD Premium tiene SLA del 99,9%.",
    difficulty: "medium"
  },
  {
    id: 20228,
    categoryId: "infrastructure-as-service",
    text: "¿Qué es el servicio Azure DevTest Labs en el contexto de IaaS?",
    options: [
      "Un entorno de desarrollo integrado (IDE)",
      "Un servicio para crear y gestionar entornos de desarrollo y pruebas con VMs, optimizando costos",
      "Una plataforma de CI/CD",
      "Un repositorio de código"
    ],
    correctAnswer: "Un servicio para crear y gestionar entornos de desarrollo y pruebas con VMs, optimizando costos",
    explaination: "Azure DevTest Labs permite crear entornos de desarrollo y pruebas con VMs personalizadas usando plantillas, con políticas de apagado automático para optimizar costos.",
    difficulty: "medium"
  },
  {
    id: 20229,
    categoryId: "infrastructure-as-service",
    text: "¿Qué significa 'lift and shift' en el contexto de migración a IaaS?",
    options: [
      "Rediseñar completamente la aplicación para la nube",
      "Mover la aplicación tal cual está, de físico a VM, sin cambios en el código",
      "Convertir la aplicación de IaaS a PaaS",
      "Dividir la aplicación en microservicios"
    ],
    correctAnswer: "Mover la aplicación tal cual está, de físico a VM, sin cambios en el código",
    explaination: "'Lift and shift' es la estrategia de migración más rápida: se toma la aplicación tal cual y se mueve a una VM en la nube, obteniendo los beneficios de IaaS sin refactorizar.",
    difficulty: "easy"
  },
  {
    id: 20230,
    categoryId: "infrastructure-as-service",
    text: "¿Puede el cliente acceder al hardware físico subyacente de su VM en IaaS de Azure?",
    options: [
      "Sí, el cliente tiene acceso físico al servidor en el datacenter",
      "No, el cliente solo accede a la VM virtualizada; el hardware físico es gestionado por Microsoft",
      "Solo en regiones donde Azure permite auditorías",
      "Solo para suscripciones Enterprise Agreement"
    ],
    correctAnswer: "No, el cliente solo accede a la VM virtualizada; el hardware físico es gestionado por Microsoft",
    explaination: "En IaaS, el cliente accede a la capa de virtualización (la VM), pero no al hardware físico subyacente. Microsoft gestiona y mantiene el hardware, la red física y el hipervisor.",
    difficulty: "easy"
  },
  {
    id: 20231,
    categoryId: "infrastructure-as-service",
    text: "¿Cuáles son los tamaños de VM disponibles en Azure?",
    options: [
      "Solo S, M y L",
      "Solo tamaños fijos definidos por Microsoft",
      "Múltiples familias y tamaños optimizados para propósito general, cómputo, memoria, almacenamiento, GPU",
      "Un solo tamaño estándar para todos los clientes"
    ],
    correctAnswer: "Múltiples familias y tamaños optimizados para propósito general, cómputo, memoria, almacenamiento, GPU",
    explaination: "Azure ofrece decenas de tamaños de VM en familias optimizadas: propósito general (B, D), cómputo (F), memoria (E, M), almacenamiento (L), GPU (N) y HPC.",
    difficulty: "easy"
  },
  {
    id: 20232,
    categoryId: "infrastructure-as-service",
    text: "¿Qué opción permite reducir costos de VMs de Azure mediante compromisos de uso a largo plazo?",
    options: ["Pago por uso estándar", "Azure Spot VMs para producción", "Azure Reserved Instances (1 o 3 años)", "Reducir el tamaño de la VM"],
    correctAnswer: "Azure Reserved Instances (1 o 3 años)",
    explaination: "Las instancias reservadas de Azure permiten comprometerse al uso de un tamaño de VM por 1 o 3 años a cambio de descuentos de hasta el 72% frente al pago por uso.",
    difficulty: "medium"
  },
  {
    id: 20233,
    categoryId: "infrastructure-as-service",
    text: "¿Qué son las Azure Spot VMs?",
    options: [
      "VMs con ubicación geográfica específica",
      "VMs que aprovechan capacidad no utilizada de Azure a precios muy reducidos, pero pueden interrumpirse",
      "VMs de alto rendimiento para cargas críticas",
      "VMs con IP pública fija"
    ],
    correctAnswer: "VMs que aprovechan capacidad no utilizada de Azure a precios muy reducidos, pero pueden interrumpirse",
    explaination: "Las Spot VMs usan capacidad excedente de Azure a precios hasta un 90% más baratos que el pago por uso, pero Azure puede recuperarlas con poco aviso. Ideales para cargas tolerantes a interrupciones.",
    difficulty: "hard"
  },
  {
    id: 20234,
    categoryId: "infrastructure-as-service",
    text: "¿Qué es Azure Virtual Network (VNet) en el contexto de IaaS?",
    options: [
      "Una red social para empleados de Azure",
      "Una red privada en Azure que permite a las VMs comunicarse de forma segura entre sí y con internet",
      "Un servicio de VPN para usuarios remotos",
      "Una red de distribución de contenido"
    ],
    correctAnswer: "Una red privada en Azure que permite a las VMs comunicarse de forma segura entre sí y con internet",
    explaination: "Azure VNet proporciona aislamiento de red a nivel IP para las VMs, control del rango de direcciones, subredes, tablas de rutas y reglas de seguridad.",
    difficulty: "easy"
  },
  {
    id: 20235,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es la diferencia entre una IP pública y una IP privada en el contexto de VMs de Azure?",
    options: [
      "Son lo mismo, solo tienen nombres distintos",
      "La IP pública es accesible desde internet; la privada solo dentro de la VNet de Azure",
      "La IP privada es accesible desde internet; la pública solo en Azure",
      "Solo las VMs Premium tienen IP privada"
    ],
    correctAnswer: "La IP pública es accesible desde internet; la privada solo dentro de la VNet de Azure",
    explaination: "Las IPs públicas permiten acceso desde internet a la VM. Las IPs privadas son solo para comunicación interna dentro de la VNet o redes conectadas.",
    difficulty: "easy"
  },
  {
    id: 20236,
    categoryId: "infrastructure-as-service",
    text: "¿Para qué sirve Azure Backup en el contexto de VMs?",
    options: [
      "Para escalar VMs automáticamente",
      "Para crear copias de seguridad de VMs y restaurarlas en caso de pérdida o corrupción",
      "Para monitorear el rendimiento de las VMs",
      "Para conectar VMs entre regiones"
    ],
    correctAnswer: "Para crear copias de seguridad de VMs y restaurarlas en caso de pérdida o corrupción",
    explaination: "Azure Backup permite configurar backups automáticos de VMs con políticas de retención, garantizando la capacidad de restaurar ante pérdida de datos o fallos.",
    difficulty: "easy"
  },
  {
    id: 20237,
    categoryId: "infrastructure-as-service",
    text: "¿Qué sucede con los datos de una VM si se elimina el disco del SO sin tener backup?",
    options: [
      "Azure guarda automáticamente una copia durante 30 días",
      "Los datos se pierden permanentemente",
      "Azure los mueve automáticamente a Azure Storage",
      "Se pueden recuperar contactando a soporte de Microsoft"
    ],
    correctAnswer: "Los datos se pierden permanentemente",
    explaination: "En IaaS, la gestión de backups es responsabilidad del cliente. Si se elimina el disco sin backup, los datos se pierden permanentemente. Azure Backup debe configurarse explícitamente.",
    difficulty: "medium"
  },
  {
    id: 20238,
    categoryId: "infrastructure-as-service",
    text: "¿Cuál es la ventaja de usar Azure Availability Zones para VMs?",
    options: [
      "Reduce el costo de las VMs",
      "Protege ante el fallo completo de un datacenter distribuyendo VMs en instalaciones físicamente separadas",
      "Aumenta el rendimiento de las VMs",
      "Permite acceso más rápido a internet"
    ],
    correctAnswer: "Protege ante el fallo completo de un datacenter distribuyendo VMs en instalaciones físicamente separadas",
    explaination: "Las Availability Zones son datacenters físicamente separados dentro de la misma región, con energía y red independientes, garantizando continuidad si un datacenter falla.",
    difficulty: "easy"
  },
  {
    id: 20239,
    categoryId: "infrastructure-as-service",
    text: "¿Qué tipo de cargas de trabajo son más adecuadas para usar IaaS en Azure?",
    options: [
      "Aplicaciones SaaS que no requieren configuración",
      "Aplicaciones legacy que requieren un SO específico o configuración especial del sistema",
      "Aplicaciones que no requieren ningún sistema operativo",
      "Solo aplicaciones de Microsoft"
    ],
    correctAnswer: "Aplicaciones legacy que requieren un SO específico o configuración especial del sistema",
    explaination: "IaaS es ideal para aplicaciones legacy o especializadas que requieren control del SO (versiones específicas, registro del sistema, configuraciones especiales que PaaS no permite).",
    difficulty: "easy"
  },
  {
    id: 20240,
    categoryId: "infrastructure-as-service",
    text: "¿Cuáles DOS servicios de Azure son ejemplos de IaaS? (Selecciona 2)",
    options: [
      "Azure Virtual Machines",
      "Azure SQL Database",
      "Azure Disk Storage",
      "Azure App Service"
    ],
    correctAnswers: ["Azure Virtual Machines", "Azure Disk Storage"],
    explaination: "Las VMs (servidores virtualizados) y Azure Disk Storage (discos virtuales) son IaaS porque el cliente gestiona el SO y configura estos recursos a nivel de infraestructura.",
    difficulty: "medium"
  },
];

// ─────────────────────────────────────────────
// platform-as-service  (20241–20270)
// ─────────────────────────────────────────────
export const platformAsServiceQuestions: Question[] = [
  {
    id: 20241,
    categoryId: "platform-as-service",
    text: "¿Cuál es la definición correcta de PaaS (Plataforma como Servicio)?",
    options: [
      "El proveedor gestiona todo, incluyendo el código del cliente",
      "El cliente alquila una plataforma gestionada donde despliega y ejecuta sus aplicaciones sin gestionar el SO",
      "El cliente gestiona todo el hardware y el SO",
      "Es un servicio de software de terceros listo para usar"
    ],
    correctAnswer: "El cliente alquila una plataforma gestionada donde despliega y ejecuta sus aplicaciones sin gestionar el SO",
    explaination: "En PaaS el proveedor gestiona infraestructura, SO, middleware y runtime. El cliente solo gestiona sus aplicaciones y datos, sin preocuparse por la plataforma subyacente.",
    difficulty: "easy"
  },
  {
    id: 20242,
    categoryId: "platform-as-service",
    text: "¿Cuál de estos servicios de Azure es un ejemplo de PaaS?",
    options: ["Azure Virtual Machines", "Azure App Service", "Microsoft 365", "Azure Disk Storage"],
    correctAnswer: "Azure App Service",
    explaination: "Azure App Service es PaaS: Microsoft gestiona el SO, el runtime y la infraestructura. El cliente solo sube su código y configura la aplicación web.",
    difficulty: "easy"
  },
  {
    id: 20243,
    categoryId: "platform-as-service",
    text: "¿Cuál es la ventaja principal de PaaS sobre IaaS para un equipo de desarrollo?",
    options: [
      "Mayor control sobre el sistema operativo",
      "El equipo puede centrarse en el código sin gestionar servidores, SO ni middleware",
      "PaaS es siempre más barato que IaaS",
      "PaaS permite instalar cualquier software personalizado"
    ],
    correctAnswer: "El equipo puede centrarse en el código sin gestionar servidores, SO ni middleware",
    explaination: "PaaS libera al equipo de tareas operativas (parches del SO, gestión de middleware) para que puedan enfocarse en escribir código y añadir valor al negocio.",
    difficulty: "easy"
  },
  {
    id: 20244,
    categoryId: "platform-as-service",
    text: "¿Tiene el cliente control sobre el sistema operativo en Azure App Service (PaaS)?",
    options: ["Sí, total control sobre el SO", "No, Microsoft gestiona el SO subyacente", "Parcialmente, puede elegir la versión del SO", "Solo en el plan Premium"],
    correctAnswer: "No, Microsoft gestiona el SO subyacente",
    explaination: "En PaaS, el SO es gestionado por el proveedor. El cliente elige el runtime (Node.js, .NET, Python) pero no tiene acceso ni control del sistema operativo subyacente.",
    difficulty: "easy"
  },
  {
    id: 20245,
    categoryId: "platform-as-service",
    text: "¿Cuáles DOS son ejemplos de PaaS en Azure? (Selecciona 2)",
    options: ["Azure Virtual Machines", "Azure SQL Database", "Azure Blob Storage", "Azure Functions"],
    correctAnswers: ["Azure SQL Database", "Azure Functions"],
    explaination: "Azure SQL Database (base de datos administrada sin gestión del motor) y Azure Functions (cómputo serverless) son PaaS. Las VMs son IaaS y Blob Storage es un servicio de infraestructura.",
    difficulty: "medium"
  },
  {
    id: 20246,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Functions y por qué es PaaS/serverless?",
    options: [
      "Una base de datos administrada",
      "Un servicio que ejecuta fragmentos de código sin que el cliente gestione servidores ni infraestructura",
      "Una VM de tamaño pequeño",
      "Un servicio de correo electrónico"
    ],
    correctAnswer: "Un servicio que ejecuta fragmentos de código sin que el cliente gestione servidores ni infraestructura",
    explaination: "Azure Functions ejecuta código en respuesta a eventos. El cliente solo escribe la lógica; Microsoft gestiona toda la infraestructura, el escalado y la disponibilidad.",
    difficulty: "easy"
  },
  {
    id: 20247,
    categoryId: "platform-as-service",
    text: "¿Qué responsabilidad tiene el cliente en un servicio PaaS respecto a las actualizaciones de seguridad?",
    options: [
      "El cliente debe aplicar todos los parches manualmente",
      "El proveedor aplica parches del SO y la plataforma; el cliente gestiona la seguridad de su código y datos",
      "Nadie aplica parches en PaaS",
      "Los parches son opcionales en PaaS"
    ],
    correctAnswer: "El proveedor aplica parches del SO y la plataforma; el cliente gestiona la seguridad de su código y datos",
    explaination: "En PaaS, Microsoft aplica parches del SO y la plataforma automáticamente. El cliente es responsable de la seguridad de su código de aplicación y sus datos.",
    difficulty: "medium"
  },
  {
    id: 20248,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Kubernetes Service (AKS)?",
    options: [
      "Una VM especializada para aplicaciones Java",
      "Un servicio PaaS que gestiona clústeres de Kubernetes eliminando la carga de gestión del plano de control",
      "Un servicio de almacenamiento para contenedores",
      "Una herramienta de monitoreo de aplicaciones"
    ],
    correctAnswer: "Un servicio PaaS que gestiona clústeres de Kubernetes eliminando la carga de gestión del plano de control",
    explaination: "AKS gestiona el plano de control de Kubernetes (master nodes) de forma gratuita y automatizada. El cliente gestiona los worker nodes y las aplicaciones desplegadas.",
    difficulty: "medium"
  },
  {
    id: 20249,
    categoryId: "platform-as-service",
    text: "¿Cuándo es preferible usar PaaS sobre IaaS?",
    options: [
      "Cuando se necesita acceso completo al registro del sistema operativo",
      "Cuando se quiere acelerar el desarrollo sin gestionar la infraestructura subyacente",
      "Cuando se necesita instalar drivers específicos del hardware",
      "Cuando la aplicación requiere un SO personalizado"
    ],
    correctAnswer: "Cuando se quiere acelerar el desarrollo sin gestionar la infraestructura subyacente",
    explaination: "PaaS es preferible cuando el objetivo es desarrollo rápido y la aplicación no requiere configuraciones especiales del SO o del sistema que solo IaaS puede proporcionar.",
    difficulty: "easy"
  },
  {
    id: 20250,
    categoryId: "platform-as-service",
    text: "¿Azure App Service puede escalar automáticamente el número de instancias según el tráfico?",
    options: ["No, el escalado es siempre manual", "Sí, mediante reglas de autoescalado", "Solo en el plan Premium", "Solo si se usa Azure Traffic Manager"],
    correctAnswer: "Sí, mediante reglas de autoescalado",
    explaination: "Azure App Service incluye capacidades de autoescalado que aumentan o reducen instancias según métricas como CPU, memoria o número de solicitudes HTTP.",
    difficulty: "easy"
  },
  {
    id: 20251,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Logic Apps en el contexto de PaaS?",
    options: [
      "Un servicio de VMs para aplicaciones empresariales",
      "Un servicio sin código (no-code) para crear flujos de trabajo automatizados entre servicios y sistemas",
      "Una base de datos relacional administrada",
      "Un servicio de autenticación"
    ],
    correctAnswer: "Un servicio sin código (no-code) para crear flujos de trabajo automatizados entre servicios y sistemas",
    explaination: "Azure Logic Apps es PaaS sin código que permite automatizar flujos de trabajo entre servicios (Azure, Office 365, Salesforce, etc.) mediante conectores visuales.",
    difficulty: "medium"
  },
  {
    id: 20252,
    categoryId: "platform-as-service",
    text: "¿Cuál es la diferencia entre Azure SQL Database y SQL Server en una VM de Azure?",
    options: [
      "No hay diferencia funcional",
      "Azure SQL Database es PaaS (motor gestionado); SQL en VM es IaaS (el cliente gestiona el motor)",
      "SQL en VM es PaaS; Azure SQL Database es IaaS",
      "Azure SQL Database solo funciona con aplicaciones .NET"
    ],
    correctAnswer: "Azure SQL Database es PaaS (motor gestionado); SQL en VM es IaaS (el cliente gestiona el motor)",
    explaination: "Azure SQL Database = PaaS: Microsoft gestiona el motor, parches, backups, HA. SQL Server en VM = IaaS: el cliente instala, configura y parchea el motor SQL Server.",
    difficulty: "medium"
  },
  {
    id: 20253,
    categoryId: "platform-as-service",
    text: "¿Puede el código del cliente tener vulnerabilidades de seguridad aunque use un servicio PaaS?",
    options: [
      "No, PaaS garantiza que el código es seguro automáticamente",
      "Sí, PaaS protege la plataforma pero el cliente sigue siendo responsable de la seguridad de su código",
      "Solo si el cliente no paga por el plan de seguridad",
      "No, Microsoft revisa el código en PaaS"
    ],
    correctAnswer: "Sí, PaaS protege la plataforma pero el cliente sigue siendo responsable de la seguridad de su código",
    explaination: "PaaS protege la infraestructura y la plataforma. Pero vulnerabilidades en el código del cliente (SQL injection, XSS) siguen siendo responsabilidad del cliente.",
    difficulty: "medium"
  },
  {
    id: 20254,
    categoryId: "platform-as-service",
    text: "¿Qué lenguajes de programación soporta Azure App Service?",
    options: [
      "Solo .NET y C#",
      "Solo Java",
      "Múltiples lenguajes: .NET, Java, Node.js, Python, PHP, Ruby",
      "Solo lenguajes de Microsoft"
    ],
    correctAnswer: "Múltiples lenguajes: .NET, Java, Node.js, Python, PHP, Ruby",
    explaination: "Azure App Service es multi-lenguaje y soporta .NET, .NET Core, Java, Node.js, Python, PHP y Ruby, con stacks configurables.",
    difficulty: "easy"
  },
  {
    id: 20255,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Container Instances (ACI)?",
    options: [
      "Un servicio para gestionar imágenes de Docker",
      "Un servicio PaaS que ejecuta contenedores Docker sin gestionar VMs ni orquestador",
      "Un servicio de registro de contenedores",
      "Una VM especializada para contenedores"
    ],
    correctAnswer: "Un servicio PaaS que ejecuta contenedores Docker sin gestionar VMs ni orquestador",
    explaination: "ACI permite ejecutar contenedores directamente sin necesidad de provisionar VMs ni configurar Kubernetes, ideal para tareas de corta duración o desarrollo.",
    difficulty: "medium"
  },
  {
    id: 20256,
    categoryId: "platform-as-service",
    text: "¿Qué ventaja de PaaS elimina la 'deuda de patching' del equipo de TI?",
    options: [
      "El cliente no necesita aplicar parches al SO porque Microsoft lo gestiona automáticamente",
      "El cliente elige cuándo aplicar los parches al SO",
      "No hay parches necesarios en PaaS",
      "Los parches son gratuitos en PaaS"
    ],
    correctAnswer: "El cliente no necesita aplicar parches al SO porque Microsoft lo gestiona automáticamente",
    explaination: "Una de las mayores ventajas de PaaS es que Microsoft aplica parches del SO y la plataforma automáticamente, eliminando la 'deuda de patching' que consume tiempo en IaaS.",
    difficulty: "easy"
  },
  {
    id: 20257,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Cognitive Services en el contexto de PaaS?",
    options: [
      "Una VM con IA preinstalada",
      "APIs de PaaS que permiten añadir capacidades de IA (visión, lenguaje, habla) a aplicaciones sin ser experto en ML",
      "Un servicio de base de datos para datos de IA",
      "Un entorno de desarrollo para machine learning"
    ],
    correctAnswer: "APIs de PaaS que permiten añadir capacidades de IA (visión, lenguaje, habla) a aplicaciones sin ser experto en ML",
    explaination: "Azure Cognitive Services son APIs REST de PaaS que añaden capacidades de IA (reconocimiento de imágenes, traducción, análisis de sentimientos) mediante llamadas HTTP simples.",
    difficulty: "medium"
  },
  {
    id: 20258,
    categoryId: "platform-as-service",
    text: "¿Puede un desarrollador en Azure App Service elegir la versión específica del SO (Windows 10 vs Windows Server 2019)?",
    options: [
      "Sí, puede elegir cualquier versión del SO",
      "No, Microsoft gestiona el SO; el desarrollador elige el stack de runtime (Node, .NET, etc.)",
      "Solo en el plan Aislado (Isolated)",
      "Solo puede elegir entre Windows y Linux"
    ],
    correctAnswer: "No, Microsoft gestiona el SO; el desarrollador elige el stack de runtime (Node, .NET, etc.)",
    explaination: "En PaaS, el desarrollador no elige la versión exacta del SO, sino la plataforma de ejecución (runtime). Microsoft gestiona y actualiza el SO subyacente.",
    difficulty: "medium"
  },
  {
    id: 20259,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Machine Learning Studio en el contexto de PaaS?",
    options: [
      "Una VM preconfigurada para ciencia de datos",
      "Una plataforma PaaS para construir, entrenar, desplegar y gestionar modelos de ML",
      "Un servicio de almacenamiento para datos de entrenamiento",
      "Un conjunto de VMs para procesamiento paralelo"
    ],
    correctAnswer: "Una plataforma PaaS para construir, entrenar, desplegar y gestionar modelos de ML",
    explaination: "Azure Machine Learning Studio es una plataforma PaaS completa para el ciclo de vida de ML: preparación de datos, entrenamiento, evaluación, despliegue y monitoreo de modelos.",
    difficulty: "easy"
  },
  {
    id: 20260,
    categoryId: "platform-as-service",
    text: "¿Cuáles DOS son limitaciones de PaaS comparado con IaaS?",
    options: [
      "PaaS requiere gestionar el SO",
      "Menor control sobre la configuración del SO y el middleware",
      "No soporta autoescalado",
      "Las aplicaciones altamente personalizadas que requieren acceso profundo al SO pueden no ser compatibles"
    ],
    correctAnswers: ["Menor control sobre la configuración del SO y el middleware", "Las aplicaciones altamente personalizadas que requieren acceso profundo al SO pueden no ser compatibles"],
    explaination: "PaaS limita el control del SO y puede no ser compatible con aplicaciones que requieren configuraciones específicas del sistema. IaaS ofrece más control a cambio de más responsabilidad.",
    difficulty: "hard"
  },
  {
    id: 20261,
    categoryId: "platform-as-service",
    text: "¿Qué tipo de base de datos es Azure Cosmos DB y por qué es PaaS?",
    options: [
      "Una base de datos SQL gestionada por el cliente",
      "Una base de datos NoSQL multi-modelo totalmente gestionada por Microsoft",
      "Una VM con MongoDB preinstalado",
      "Una base de datos solo para aplicaciones .NET"
    ],
    correctAnswer: "Una base de datos NoSQL multi-modelo totalmente gestionada por Microsoft",
    explaination: "Azure Cosmos DB es PaaS: Microsoft gestiona la infraestructura, la alta disponibilidad, los parches y el escalado automático. El cliente gestiona sus datos y configura los parámetros.",
    difficulty: "easy"
  },
  {
    id: 20262,
    categoryId: "platform-as-service",
    text: "¿Qué ventaja de PaaS ayuda a los equipos a lanzar productos más rápidamente al mercado?",
    options: [
      "PaaS garantiza que el código sea correcto",
      "Elimina el tiempo dedicado a configurar y mantener infraestructura, permitiendo más tiempo para desarrollar features",
      "PaaS proporciona código de muestra para todos los casos de uso",
      "PaaS no requiere pruebas de la aplicación"
    ],
    correctAnswer: "Elimina el tiempo dedicado a configurar y mantener infraestructura, permitiendo más tiempo para desarrollar features",
    explaination: "Al no gestionar SO, middleware ni servidores, el equipo dedica más tiempo al código de negocio, acelerando el tiempo de llegada al mercado (time-to-market).",
    difficulty: "easy"
  },
  {
    id: 20263,
    categoryId: "platform-as-service",
    text: "¿Cuál es la responsabilidad del cliente respecto al runtime en Azure App Service?",
    options: [
      "El cliente instala y parchea el runtime (Node.js, Java, etc.)",
      "El cliente elige el runtime pero Microsoft lo gestiona y actualiza",
      "El runtime no aplica en PaaS",
      "El cliente no puede elegir el runtime"
    ],
    correctAnswer: "El cliente elige el runtime pero Microsoft lo gestiona y actualiza",
    explaination: "En Azure App Service, el cliente selecciona el stack de runtime (Node.js 18, Python 3.10, etc.) pero Microsoft gestiona las actualizaciones de seguridad del runtime.",
    difficulty: "medium"
  },
  {
    id: 20264,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Event Hubs y por qué se considera PaaS?",
    options: [
      "Una VM para procesamiento de eventos",
      "Una plataforma de ingesta de datos a gran escala totalmente gestionada, sin gestión de servidores",
      "Un servicio de mensajería on-premises",
      "Un repositorio de código de eventos"
    ],
    correctAnswer: "Una plataforma de ingesta de datos a gran escala totalmente gestionada, sin gestión de servidores",
    explaination: "Azure Event Hubs es PaaS: gestiona automáticamente la infraestructura, el escalado y la disponibilidad para la ingesta de millones de eventos por segundo.",
    difficulty: "medium"
  },
  {
    id: 20265,
    categoryId: "platform-as-service",
    text: "¿Qué significa que Azure SQL Database tenga 'alta disponibilidad incorporada'?",
    options: [
      "El cliente debe configurar manualmente la réplica",
      "Microsoft gestiona automáticamente la réplica y el failover sin intervención del cliente",
      "El cliente paga extra por la alta disponibilidad",
      "La alta disponibilidad solo aplica en regiones premium"
    ],
    correctAnswer: "Microsoft gestiona automáticamente la réplica y el failover sin intervención del cliente",
    explaination: "En PaaS como Azure SQL Database, la alta disponibilidad (réplicas, failover automático) está incorporada y gestionada por Microsoft, sin configuración adicional del cliente.",
    difficulty: "medium"
  },
  {
    id: 20266,
    categoryId: "platform-as-service",
    text: "¿Cuáles DOS son casos de uso típicos de PaaS en Azure? (Selecciona 2)",
    options: [
      "Migrar un servidor de Active Directory",
      "Desarrollar y desplegar una API REST con Azure App Service",
      "Instalar un driver específico de hardware",
      "Crear una base de datos con Azure SQL Database sin gestionar el servidor"
    ],
    correctAnswers: ["Desarrollar y desplegar una API REST con Azure App Service", "Crear una base de datos con Azure SQL Database sin gestionar el servidor"],
    explaination: "App Service para APIs y Azure SQL Database son casos típicos de PaaS: el desarrollador se enfoca en la lógica (API) o los datos (SQL) sin gestionar la plataforma.",
    difficulty: "medium"
  },
  {
    id: 20267,
    categoryId: "platform-as-service",
    text: "¿Qué es Azure Service Bus en el contexto de PaaS?",
    options: [
      "Una VM para alojar servicios empresariales",
      "Un servicio de mensajería empresarial PaaS para desacoplar aplicaciones y servicios",
      "Un bus de datos físico en el datacenter",
      "Un servicio de VPN empresarial"
    ],
    correctAnswer: "Un servicio de mensajería empresarial PaaS para desacoplar aplicaciones y servicios",
    explaination: "Azure Service Bus es PaaS que proporciona mensajería confiable (colas y publicación/suscripción) para desacoplar aplicaciones, sin gestionar infraestructura de mensajería.",
    difficulty: "medium"
  },
  {
    id: 20268,
    categoryId: "platform-as-service",
    text: "¿Puede Azure App Service ejecutar aplicaciones en contenedores Docker?",
    options: ["No, solo soporta código desplegado directamente", "Sí, soporta despliegue de contenedores Docker además de código directamente", "Solo en Windows", "Solo en el plan Isolated"],
    correctAnswer: "Sí, soporta despliegue de contenedores Docker además de código directamente",
    explaination: "Azure App Service soporta despliegue tanto de código directo como de contenedores Docker, ofreciendo flexibilidad para diferentes estrategias de empaquetado.",
    difficulty: "medium"
  },
  {
    id: 20269,
    categoryId: "platform-as-service",
    text: "¿Cuál es la ventaja de PaaS para equipos pequeños o startups con recursos de TI limitados?",
    options: [
      "PaaS es gratuito para startups",
      "Permite a equipos pequeños gestionar infraestructura de nivel empresarial sin un equipo de operaciones dedicado",
      "PaaS solo sirve para grandes corporaciones",
      "Las startups siempre prefieren IaaS"
    ],
    correctAnswer: "Permite a equipos pequeños gestionar infraestructura de nivel empresarial sin un equipo de operaciones dedicado",
    explaination: "PaaS democratiza el acceso a infraestructura robusta: un equipo de 2 desarrolladores puede tener la misma infraestructura que una gran empresa, sin necesitar un equipo de operaciones.",
    difficulty: "easy"
  },
  {
    id: 20270,
    categoryId: "platform-as-service",
    text: "¿Qué describe mejor la relación entre Azure App Service y el sistema operativo subyacente desde la perspectiva del cliente?",
    options: [
      "El cliente gestiona el SO como en IaaS",
      "El cliente no ve ni gestiona el SO; interactúa solo con la plataforma de aplicación",
      "El cliente puede conectarse por RDP al SO subyacente",
      "El cliente paga por el SO por separado"
    ],
    correctAnswer: "El cliente no ve ni gestiona el SO; interactúa solo con la plataforma de aplicación",
    explaination: "En PaaS, el SO es completamente abstraído. El cliente interactúa con la plataforma (el runtime, los settings de la app) pero no tiene acceso ni visibilidad del SO subyacente.",
    difficulty: "easy"
  },
];

// ─────────────────────────────────────────────
// software-as-service  (20271–20300)
// ─────────────────────────────────────────────
export const softwareAsServiceQuestions: Question[] = [
  {
    id: 20271,
    categoryId: "software-as-service",
    text: "¿Cuál es la definición correcta de SaaS (Software como Servicio)?",
    options: [
      "El cliente gestiona el servidor y la aplicación",
      "El proveedor gestiona toda la infraestructura y la aplicación; el cliente la usa sin instalación",
      "El cliente despliega su propio código en una plataforma gestionada",
      "El cliente alquila servidores virtuales para instalar software"
    ],
    correctAnswer: "El proveedor gestiona toda la infraestructura y la aplicación; el cliente la usa sin instalación",
    explaination: "SaaS es software entregado como servicio. El proveedor gestiona todo: infraestructura, plataforma, aplicación y sus actualizaciones. El cliente solo configura y usa.",
    difficulty: "easy"
  },
  {
    id: 20272,
    categoryId: "software-as-service",
    text: "¿Cuál de estos es un ejemplo de SaaS?",
    options: ["Azure Virtual Machines", "Azure App Service", "Microsoft 365 (Outlook, Teams)", "Azure SQL Database"],
    correctAnswer: "Microsoft 365 (Outlook, Teams)",
    explaination: "Microsoft 365 es SaaS: los usuarios acceden a aplicaciones completas (correo, colaboración, ofimática) sin instalar ni gestionar nada de la infraestructura.",
    difficulty: "easy"
  },
  {
    id: 20273,
    categoryId: "software-as-service",
    text: "¿De qué es responsable el cliente en SaaS?",
    options: [
      "De gestionar el servidor y el sistema operativo",
      "De la gestión de acceso e identidades y de sus propios datos",
      "De aplicar parches a la aplicación",
      "De la seguridad de la red del datacenter"
    ],
    correctAnswer: "De la gestión de acceso e identidades y de sus propios datos",
    explaination: "En SaaS, el cliente es responsable de gestionar quién tiene acceso (usuarios, roles, permisos) y de proteger sus propios datos. Todo lo demás lo gestiona el proveedor.",
    difficulty: "easy"
  },
  {
    id: 20274,
    categoryId: "software-as-service",
    text: "¿Cómo recibe el usuario final un servicio SaaS?",
    options: [
      "Instalando un servidor en sus instalaciones",
      "A través de un navegador web o aplicación cliente, sin gestionar infraestructura",
      "Descargando e instalando el software y el servidor",
      "Configurando una VM con el software"
    ],
    correctAnswer: "A través de un navegador web o aplicación cliente, sin gestionar infraestructura",
    explaination: "SaaS se accede típicamente a través del navegador o de una app ligera (cliente). No requiere instalar servidores ni gestionar infraestructura.",
    difficulty: "easy"
  },
  {
    id: 20275,
    categoryId: "software-as-service",
    text: "¿Cuál es la ventaja principal de SaaS para una empresa que no tiene equipo de TI propio?",
    options: [
      "Permite personalizar completamente el código de la aplicación",
      "Permite usar software empresarial avanzado sin necesidad de gestionar nada técnico",
      "SaaS es gratuito para pequeñas empresas",
      "Ofrece mayor control que IaaS"
    ],
    correctAnswer: "Permite usar software empresarial avanzado sin necesidad de gestionar nada técnico",
    explaination: "SaaS democratiza el acceso a software: una empresa de 5 personas puede usar el mismo CRM o ERP que una multinacional, sin equipo de TI ni infraestructura propia.",
    difficulty: "easy"
  },
  {
    id: 20276,
    categoryId: "software-as-service",
    text: "¿Cómo se gestionan las actualizaciones en un servicio SaaS?",
    options: [
      "El cliente descarga e instala manualmente las actualizaciones",
      "El proveedor aplica las actualizaciones automáticamente sin intervención del cliente",
      "El cliente decide cuándo actualizar en un mantenimiento programado",
      "Las actualizaciones son opcionales en SaaS"
    ],
    correctAnswer: "El proveedor aplica las actualizaciones automáticamente sin intervención del cliente",
    explaination: "En SaaS, el proveedor gestiona el ciclo de vida completo de la aplicación, incluyendo actualizaciones y parches, que se aplican de forma transparente al cliente.",
    difficulty: "easy"
  },
  {
    id: 20277,
    categoryId: "software-as-service",
    text: "¿Cuáles DOS son ejemplos de SaaS? (Selecciona 2)",
    options: [
      "Azure Virtual Machines",
      "Salesforce CRM",
      "Azure Blob Storage",
      "Microsoft 365"
    ],
    correctAnswers: ["Salesforce CRM", "Microsoft 365"],
    explaination: "Salesforce CRM y Microsoft 365 son SaaS: aplicaciones completas entregadas como servicio, gestionadas totalmente por el proveedor.",
    difficulty: "easy"
  },
  {
    id: 20278,
    categoryId: "software-as-service",
    text: "¿Puede el cliente acceder al código fuente de la aplicación SaaS para modificarla?",
    options: [
      "Sí, siempre",
      "No, el cliente solo puede configurar y usar la aplicación; el código es del proveedor",
      "Solo si se paga una licencia especial",
      "Solo para aplicaciones SaaS de código abierto"
    ],
    correctAnswer: "No, el cliente solo puede configurar y usar la aplicación; el código es del proveedor",
    explaination: "En SaaS, el cliente usa la aplicación tal como la ofrece el proveedor. No tiene acceso al código fuente para modificarla. Solo puede configurar dentro de los límites permitidos.",
    difficulty: "easy"
  },
  {
    id: 20279,
    categoryId: "software-as-service",
    text: "¿Cuál es una desventaja de SaaS comparado con desarrollar una aplicación propia con PaaS?",
    options: [
      "SaaS requiere más personal de TI",
      "Menor personalización: el cliente no puede modificar la funcionalidad central de la aplicación",
      "SaaS es siempre más caro",
      "SaaS tiene menos disponibilidad"
    ],
    correctAnswer: "Menor personalización: el cliente no puede modificar la funcionalidad central de la aplicación",
    explaination: "SaaS ofrece funcionalidad estándar. Si la empresa necesita funcionalidades muy específicas no disponibles en el SaaS, puede necesitar desarrollar una solución propia con PaaS.",
    difficulty: "medium"
  },
  {
    id: 20280,
    categoryId: "software-as-service",
    text: "¿En el modelo SaaS, de qué es responsable el proveedor respecto a la disponibilidad de la aplicación?",
    options: [
      "El proveedor no tiene responsabilidad de disponibilidad",
      "El proveedor garantiza la disponibilidad de la aplicación según el SLA",
      "La disponibilidad es 50/50 entre cliente y proveedor",
      "El cliente gestiona la alta disponibilidad"
    ],
    correctAnswer: "El proveedor garantiza la disponibilidad de la aplicación según el SLA",
    explaination: "En SaaS, la alta disponibilidad es gestionada completamente por el proveedor, que garantiza un nivel de servicio mediante un SLA.",
    difficulty: "easy"
  },
  {
    id: 20281,
    categoryId: "software-as-service",
    text: "¿Cuál es el modelo de pago típico en SaaS?",
    options: [
      "Licencia perpetua única",
      "Suscripción periódica (mensual o anual) por usuario o por funcionalidad",
      "Pago por hora de uso del servidor",
      "Compra de hardware incluida en el precio"
    ],
    correctAnswer: "Suscripción periódica (mensual o anual) por usuario o por funcionalidad",
    explaination: "SaaS suele facturarse por suscripción: un precio por usuario/mes, por funcionalidades habilitadas o por volumen de datos, en lugar de una licencia única.",
    difficulty: "easy"
  },
  {
    id: 20282,
    categoryId: "software-as-service",
    text: "Una empresa usa Dynamics 365 (ERP en la nube de Microsoft). ¿Qué modelo de servicio es este?",
    options: ["IaaS", "PaaS", "SaaS", "On-premises"],
    correctAnswer: "SaaS",
    explaination: "Dynamics 365 es SaaS: una aplicación empresarial completa (ERP, CRM) entregada como servicio por Microsoft, sin que el cliente gestione ninguna infraestructura.",
    difficulty: "easy"
  },
  {
    id: 20283,
    categoryId: "software-as-service",
    text: "¿Puede el cliente configurar flujos de trabajo y personalizaciones en aplicaciones SaaS como Microsoft 365?",
    options: [
      "No, las aplicaciones SaaS son completamente rígidas",
      "Sí, dentro de los límites de configuración que el proveedor ofrece",
      "Solo mediante modificación del código fuente",
      "Solo con acceso de administrador global"
    ],
    correctAnswer: "Sí, dentro de los límites de configuración que el proveedor ofrece",
    explaination: "Los servicios SaaS permiten configuración (flujos de trabajo, permisos, integraciones) dentro de los parámetros que el proveedor ofrece, sin modificar el código.",
    difficulty: "medium"
  },
  {
    id: 20284,
    categoryId: "software-as-service",
    text: "¿Qué responsabilidad de seguridad mantiene el cliente en SaaS que no puede delegar al proveedor?",
    options: [
      "La seguridad de los servidores de la aplicación",
      "Los parches de la aplicación",
      "Qué usuarios tienen acceso y con qué permisos",
      "El cifrado en tránsito de los datos"
    ],
    correctAnswer: "Qué usuarios tienen acceso y con qué permisos",
    explaination: "La gestión de identidades (quién accede y con qué permisos) siempre es responsabilidad del cliente en SaaS. Si se configura mal el acceso, puede haber brechas de datos.",
    difficulty: "medium"
  },
  {
    id: 20285,
    categoryId: "software-as-service",
    text: "¿Cuál es la principal ventaja de SaaS en términos de tiempo de implementación?",
    options: [
      "Requiere semanas de configuración de servidores",
      "Se puede empezar a usar en minutos o días, sin instalación de infraestructura",
      "La implementación es igual de rápida que on-premises",
      "Requiere un proyecto de migración de varios meses"
    ],
    correctAnswer: "Se puede empezar a usar en minutos o días, sin instalación de infraestructura",
    explaination: "SaaS elimina el tiempo de adquisición, instalación y configuración de hardware y software. Una empresa puede suscribirse y empezar a usar el servicio casi inmediatamente.",
    difficulty: "easy"
  },
  {
    id: 20286,
    categoryId: "software-as-service",
    text: "¿Qué ocurre con los datos del cliente si cancela su suscripción a un servicio SaaS?",
    options: [
      "El proveedor guarda los datos indefinidamente gratuitamente",
      "Depende de los términos del servicio del proveedor; generalmente hay un período de exportación",
      "Los datos se transfieren automáticamente a otro proveedor",
      "Azure siempre garantiza acceso permanente a los datos"
    ],
    correctAnswer: "Depende de los términos del servicio del proveedor; generalmente hay un período de exportación",
    explaination: "Al cancelar SaaS, los términos del servicio definen qué ocurre con los datos. Es buena práctica exportar los datos antes de cancelar para evitar perderlos.",
    difficulty: "hard"
  },
  {
    id: 20287,
    categoryId: "software-as-service",
    text: "¿Puede el cliente acceder a un servicio SaaS desde múltiples dispositivos y ubicaciones?",
    options: [
      "Solo desde la red corporativa interna",
      "Sí, generalmente desde cualquier dispositivo con internet, sin restricciones de ubicación",
      "Solo desde el dispositivo donde se registró",
      "Solo desde el país donde está la sede de la empresa"
    ],
    correctAnswer: "Sí, generalmente desde cualquier dispositivo con internet, sin restricciones de ubicación",
    explaination: "Una ventaja clave de SaaS es el acceso ubicuo: los usuarios pueden acceder desde cualquier dispositivo con internet, favoreciendo el trabajo remoto y la movilidad.",
    difficulty: "easy"
  },
  {
    id: 20288,
    categoryId: "software-as-service",
    text: "¿En qué se diferencia la experiencia de uso entre SaaS y software on-premises?",
    options: [
      "No hay diferencia en la experiencia",
      "SaaS no requiere instalación local, siempre está actualizado y accesible desde cualquier lugar",
      "El software on-premises siempre ofrece más funcionalidades",
      "SaaS solo funciona en Windows"
    ],
    correctAnswer: "SaaS no requiere instalación local, siempre está actualizado y accesible desde cualquier lugar",
    explaination: "SaaS ofrece acceso desde el navegador sin instalación, siempre en la versión más reciente (el proveedor actualiza automáticamente) y accesible desde cualquier lugar.",
    difficulty: "easy"
  },
  {
    id: 20289,
    categoryId: "software-as-service",
    text: "¿Cuáles DOS son características de SaaS? (Selecciona 2)",
    options: [
      "El cliente gestiona el servidor de la aplicación",
      "El proveedor gestiona actualizaciones automáticamente",
      "El cliente instala parches manualmente",
      "El cliente accede a la aplicación a través del navegador sin instalación de infraestructura"
    ],
    correctAnswers: ["El proveedor gestiona actualizaciones automáticamente", "El cliente accede a la aplicación a través del navegador sin instalación de infraestructura"],
    explaination: "SaaS se caracteriza por actualizaciones automáticas gestionadas por el proveedor y acceso sin instalación de infraestructura, típicamente desde un navegador.",
    difficulty: "easy"
  },
  {
    id: 20290,
    categoryId: "software-as-service",
    text: "¿Cuál es el riesgo principal de depender de un SaaS de un único proveedor?",
    options: [
      "Los datos siempre son robados",
      "Dependencia del proveedor (vendor lock-in): si el proveedor sube precios o cesa el servicio, migrar puede ser difícil",
      "El SaaS nunca está disponible",
      "No hay riesgos en usar SaaS"
    ],
    correctAnswer: "Dependencia del proveedor (vendor lock-in): si el proveedor sube precios o cesa el servicio, migrar puede ser difícil",
    explaination: "El vendor lock-in es el principal riesgo de SaaS: los datos y procesos pueden estar en formatos propietarios, dificultando la migración si el proveedor cambia sus condiciones.",
    difficulty: "hard"
  },
  {
    id: 20291,
    categoryId: "software-as-service",
    text: "¿Puede un cliente integrar un servicio SaaS con sus aplicaciones internas mediante APIs?",
    options: [
      "No, los servicios SaaS son siempre sistemas cerrados",
      "Sí, la mayoría de servicios SaaS modernos ofrecen APIs para integración",
      "Solo si el cliente desarrolla la API desde cero",
      "Solo con servicios SaaS de Microsoft"
    ],
    correctAnswer: "Sí, la mayoría de servicios SaaS modernos ofrecen APIs para integración",
    explaination: "Los servicios SaaS modernos exponen APIs REST que permiten integrarlos con aplicaciones internas, automatizar procesos o extraer datos para análisis.",
    difficulty: "medium"
  },
  {
    id: 20292,
    categoryId: "software-as-service",
    text: "¿Qué modelo de servicio minimiza el tiempo que el equipo de TI dedica a mantenimiento?",
    options: ["IaaS", "PaaS", "On-premises", "SaaS"],
    correctAnswer: "SaaS",
    explaination: "SaaS elimina prácticamente toda la carga de TI: no hay que gestionar hardware, SO, middleware, aplicación ni sus actualizaciones. El TI solo gestiona accesos y datos.",
    difficulty: "easy"
  },
  {
    id: 20293,
    categoryId: "software-as-service",
    text: "¿Cuál de los siguientes NO es una responsabilidad del cliente en SaaS?",
    options: [
      "Gestionar qué usuarios acceden al servicio",
      "Configurar los permisos de los usuarios",
      "Aplicar parches al sistema operativo del servidor de la aplicación",
      "Exportar o proteger sus datos"
    ],
    correctAnswer: "Aplicar parches al sistema operativo del servidor de la aplicación",
    explaination: "En SaaS, el cliente no gestiona el servidor ni su SO. Los parches del servidor son responsabilidad total del proveedor.",
    difficulty: "easy"
  },
  {
    id: 20294,
    categoryId: "software-as-service",
    text: "¿Cuál es el beneficio de SaaS en términos de acceso geográfico para equipos distribuidos?",
    options: [
      "Solo funciona en la sede principal de la empresa",
      "Permite que empleados en cualquier país accedan a las mismas herramientas sin configurar infraestructura local",
      "Requiere oficinas en cada país donde se use",
      "Solo funciona con VPN corporativa"
    ],
    correctAnswer: "Permite que empleados en cualquier país accedan a las mismas herramientas sin configurar infraestructura local",
    explaination: "SaaS es ideal para equipos globales: todos los empleados, independientemente de su ubicación, acceden al mismo software con la misma versión sin infraestructura local.",
    difficulty: "easy"
  },
  {
    id: 20295,
    categoryId: "software-as-service",
    text: "¿Cuáles son los tres modelos de servicio en la nube del más al menos gestionado por el proveedor?",
    options: [
      "IaaS → PaaS → SaaS",
      "SaaS → PaaS → IaaS",
      "PaaS → SaaS → IaaS",
      "IaaS → SaaS → PaaS"
    ],
    correctAnswer: "SaaS → PaaS → IaaS",
    explaination: "De mayor a menor gestión por el proveedor: SaaS (gestiona todo, incluida la app) → PaaS (gestiona infraestructura y plataforma) → IaaS (gestiona solo hardware y virtualización).",
    difficulty: "easy"
  },
  {
    id: 20296,
    categoryId: "software-as-service",
    text: "¿Qué ocurre con la escalabilidad en SaaS cuando el número de usuarios aumenta drásticamente?",
    options: [
      "El cliente debe pedir más servidores al proveedor",
      "El proveedor escala la infraestructura automáticamente sin que el cliente haga nada",
      "El rendimiento se degrada inevitablemente",
      "El cliente debe actualizar su plan de Internet"
    ],
    correctAnswer: "El proveedor escala la infraestructura automáticamente sin que el cliente haga nada",
    explaination: "En SaaS, el escalado es responsabilidad del proveedor. Si miles de usuarios nuevos se unen, el proveedor escala la infraestructura automáticamente.",
    difficulty: "medium"
  },
  {
    id: 20297,
    categoryId: "software-as-service",
    text: "¿Cuál es la diferencia entre SaaS y software de escritorio tradicional?",
    options: [
      "El SaaS solo funciona online; el de escritorio solo offline",
      "El SaaS se gestiona y actualiza en el proveedor; el de escritorio se instala localmente y requiere gestión manual",
      "El software de escritorio siempre es gratuito",
      "No hay diferencias relevantes en 2024"
    ],
    correctAnswer: "El SaaS se gestiona y actualiza en el proveedor; el de escritorio se instala localmente y requiere gestión manual",
    explaination: "El software de escritorio requiere instalación en cada máquina y actualizaciones manuales. SaaS se actualiza automáticamente y no requiere instalación local de la aplicación.",
    difficulty: "easy"
  },
  {
    id: 20298,
    categoryId: "software-as-service",
    text: "¿Cómo protege el cliente sus datos en un servicio SaaS ante un posible cese del servicio por parte del proveedor?",
    options: [
      "El proveedor siempre garantiza acceso permanente",
      "Implementando una estrategia de exportación y backup regular de sus datos a un almacenamiento propio",
      "Contratando un segundo proveedor SaaS idéntico",
      "No es posible protegerse en SaaS"
    ],
    correctAnswer: "Implementando una estrategia de exportación y backup regular de sus datos a un almacenamiento propio",
    explaination: "La portabilidad de datos es crucial en SaaS. El cliente debe exportar sus datos regularmente a formatos estándar o almacenamiento propio para no depender completamente del proveedor.",
    difficulty: "hard"
  },
  {
    id: 20299,
    categoryId: "software-as-service",
    text: "¿Puede un cliente SaaS modificar el código de la aplicación para añadir funcionalidades propias?",
    options: [
      "Sí, siempre que sea un cliente Enterprise",
      "No, pero puede extenderla mediante integraciones API o plataformas de bajo código que ofrece el proveedor",
      "Sí, mediante acceso SSH al servidor",
      "Solo con un contrato de código abierto"
    ],
    correctAnswer: "No, pero puede extenderla mediante integraciones API o plataformas de bajo código que ofrece el proveedor",
    explaination: "En SaaS no se puede modificar el código central. Sin embargo, muchos SaaS ofrecen APIs, plugins, conectores o plataformas de personalización (como Power Platform en M365) para extender la funcionalidad.",
    difficulty: "hard"
  },
  {
    id: 20300,
    categoryId: "software-as-service",
    text: "Relaciona correctamente los modelos de servicio con sus ejemplos en Azure/Microsoft:",
    options: [
      "IaaS: Azure VM — PaaS: Azure App Service — SaaS: Microsoft 365",
      "SaaS: Azure VM — IaaS: App Service — PaaS: Microsoft 365",
      "PaaS: Azure VM — SaaS: App Service — IaaS: Microsoft 365",
      "IaaS: App Service — PaaS: Azure VM — SaaS: Microsoft 365"
    ],
    correctAnswer: "IaaS: Azure VM — PaaS: Azure App Service — SaaS: Microsoft 365",
    explaination: "Azure VM = IaaS (control del SO). Azure App Service = PaaS (plataforma para desplegar código sin gestionar SO). Microsoft 365 = SaaS (aplicaciones completas listas para usar).",
    difficulty: "easy"
  },
];
// ─────────────────────────────────────────────
// azure accounts (20301-20330)
// ─────────────────────────────────────────────
export const azureAccountsQuestions: Question[] = [
  {
    "id": 20301,
    "categoryId": "azure-accounts",
    "text": "¿Cuál es el principal propósito de una cuenta de Azure?",
    "options": [
      "Gestionar recursos en la nube de Microsoft",
      "Administrar servidores locales",
      "Crear aplicaciones móviles nativas",
      "Configurar redes privadas físicas"
    ],
    "correctAnswer": "Gestionar recursos en la nube de Microsoft",
    "explaination": "Una cuenta de Azure permite acceder y gestionar los servicios y recursos de la nube de Microsoft Azure.",
    "difficulty": "easy"
  },
  {
    "id": 20302,
    "categoryId": "azure-accounts",
    "text": "¿Qué es una suscripción de Azure?",
    "options": [
      "Un acuerdo que da acceso a los servicios de Azure",
      "Un tipo de máquina virtual",
      "Un servicio de base de datos",
      "Un protocolo de red"
    ],
    "correctAnswer": "Un acuerdo que da acceso a los servicios de Azure",
    "explaination": "Una suscripción de Azure es un acuerdo lógico con Microsoft que proporciona acceso a los servicios de Azure y establece cómo se facturan los recursos.",
    "difficulty": "easy"
  },
  {
    "id": 20303,
    "categoryId": "azure-accounts",
    "text": "¿Cuántas suscripciones puede tener una cuenta de Azure?",
    "options": [
      "Solo una",
      "Máximo 5",
      "Múltiples suscripciones",
      "Máximo 10"
    ],
    "correctAnswer": "Múltiples suscripciones",
    "explaination": "Una cuenta de Azure puede tener múltiples suscripciones, lo que permite separar entornos, departamentos o proyectos de forma organizada.",
    "difficulty": "easy"
  },
  {
    "id": 20304,
    "categoryId": "azure-accounts",
    "text": "¿Qué es un tenant de Azure Active Directory?",
    "options": [
      "Una instancia dedicada de Azure AD para una organización",
      "Un tipo de base de datos",
      "Un recurso de red virtual",
      "Un plan de facturación"
    ],
    "correctAnswer": "Una instancia dedicada de Azure AD para una organización",
    "explaination": "Un tenant de Azure AD es una instancia dedicada del servicio de Azure Active Directory que una organización recibe al registrarse en Microsoft.",
    "difficulty": "medium"
  },
  {
    "id": 20305,
    "categoryId": "azure-accounts",
    "text": "¿Cuál de los siguientes NO es un tipo de cuenta de Azure?",
    "options": [
      "Cuenta gratuita",
      "Cuenta de pago por uso",
      "Cuenta empresarial (EA)",
      "Cuenta de desarrollador premium"
    ],
    "correctAnswer": "Cuenta de desarrollador premium",
    "explaination": "Los tipos principales de cuentas de Azure son: gratuita, pago por uso, estudiante y acuerdos Enterprise. No existe un tipo llamado 'cuenta de desarrollador premium'.",
    "difficulty": "easy"
  },
  {
    "id": 20306,
    "categoryId": "azure-accounts",
    "text": "¿Cuánto crédito gratuito otorga Azure al crear una cuenta gratuita?",
    "options": [
      "$100 USD por 30 días",
      "$200 USD por 30 días",
      "$500 USD por 60 días",
      "$150 USD por 45 días"
    ],
    "correctAnswer": "$200 USD por 30 días",
    "explaination": "Azure ofrece $200 USD de crédito gratuito durante los primeros 30 días al crear una cuenta gratuita.",
    "difficulty": "easy"
  },
  {
    "id": 20307,
    "categoryId": "azure-accounts",
    "text": "¿Qué es un grupo de administración en Azure?",
    "options": [
      "Un contenedor que gestiona el acceso, políticas y cumplimiento de múltiples suscripciones",
      "Un grupo de usuarios con permisos de administrador",
      "Un conjunto de máquinas virtuales agrupadas",
      "Un servicio de monitoreo de recursos"
    ],
    "correctAnswer": "Un contenedor que gestiona el acceso, políticas y cumplimiento de múltiples suscripciones",
    "explaination": "Los grupos de administración permiten organizar suscripciones en jerarquías para una gestión eficiente de gobernanza y acceso.",
    "difficulty": "medium"
  },
  {
    "id": 20308,
    "categoryId": "azure-accounts",
    "text": "¿Cuál es la jerarquía correcta de organización en Azure de mayor a menor nivel?",
    "options": [
      "Suscripción > Grupo de administración > Grupo de recursos > Recursos",
      "Grupo de administración > Suscripción > Grupo de recursos > Recursos",
      "Grupo de recursos > Suscripción > Grupo de administración > Recursos",
      "Recursos > Grupo de recursos > Suscripción > Grupo de administración"
    ],
    "correctAnswer": "Grupo de administración > Suscripción > Grupo de recursos > Recursos",
    "explaination": "La jerarquía de Azure va desde los grupos de administración (nivel más alto) hasta los recursos individuales (nivel más bajo).",
    "difficulty": "medium"
  },
  {
    "id": 20309,
    "categoryId": "azure-accounts",
    "text": "¿Para qué sirve un grupo de recursos en Azure?",
    "options": [
      "Para agrupar y gestionar recursos relacionados de Azure",
      "Para crear usuarios y contraseñas",
      "Para configurar la facturación mensual",
      "Para establecer zonas de disponibilidad"
    ],
    "correctAnswer": "Para agrupar y gestionar recursos relacionados de Azure",
    "explaination": "Un grupo de recursos es un contenedor lógico que agrupa recursos de Azure relacionados, facilitando su gestión, implementación y eliminación conjunta.",
    "difficulty": "easy"
  },
  {
    "id": 20310,
    "categoryId": "azure-accounts",
    "text": "¿Qué herramienta permite crear una cuenta gratuita de Azure?",
    "options": [
      "Solo mediante el portal web azure.microsoft.com",
      "Azure CLI únicamente",
      "Visual Studio Code",
      "Azure PowerShell únicamente"
    ],
    "correctAnswer": "Solo mediante el portal web azure.microsoft.com",
    "explaination": "Para crear una cuenta de Azure, el proceso inicial se realiza a través del portal web de Azure en azure.microsoft.com o microsoft.com/azure.",
    "difficulty": "easy"
  },
  {
    "id": 20311,
    "categoryId": "azure-accounts",
    "text": "¿Qué información se requiere para crear una cuenta de Azure?",
    "options": [
      "Solo un correo electrónico",
      "Correo electrónico, tarjeta de crédito y número de teléfono",
      "Solo un número de teléfono",
      "Correo electrónico y nombre de usuario"
    ],
    "correctAnswer": "Correo electrónico, tarjeta de crédito y número de teléfono",
    "explaination": "Para crear una cuenta de Azure se necesita una dirección de correo, un número de teléfono para verificación y una tarjeta de crédito para verificar la identidad.",
    "difficulty": "easy"
  },
  {
    "id": 20312,
    "categoryId": "azure-accounts",
    "text": "¿Qué es Azure Cost Management?",
    "options": [
      "Una herramienta para supervisar, asignar y optimizar los costos de Azure",
      "Un servicio de máquinas virtuales de bajo costo",
      "Un plan de suscripción reducida",
      "Una forma de pagar en cuotas"
    ],
    "correctAnswer": "Una herramienta para supervisar, asignar y optimizar los costos de Azure",
    "explaination": "Azure Cost Management permite analizar, supervisar y controlar los gastos de Azure para optimizar el uso de recursos y reducir costos.",
    "difficulty": "medium"
  },
  {
    "id": 20313,
    "categoryId": "azure-accounts",
    "text": "¿Cuál es la diferencia principal entre una cuenta gratuita y pago por uso en Azure?",
    "options": [
      "La gratuita tiene créditos iniciales y servicios siempre gratis; pago por uso cobra solo lo que se usa",
      "La gratuita no tiene límites de uso",
      "El pago por uso da más créditos iniciales",
      "No hay diferencia entre ambas"
    ],
    "correctAnswer": "La gratuita tiene créditos iniciales y servicios siempre gratis; pago por uso cobra solo lo que se usa",
    "explaination": "La cuenta gratuita incluye $200 de crédito por 30 días y más de 55 servicios siempre gratuitos. La cuenta de pago por uso factura según el consumo real.",
    "difficulty": "medium"
  },
  {
    "id": 20314,
    "categoryId": "azure-accounts",
    "text": "¿Qué son los 'servicios siempre gratuitos' en Azure?",
    "options": [
      "Servicios que permanecen gratuitos indefinidamente con límites de uso",
      "Servicios gratuitos solo durante el primer mes",
      "Recursos sin ningún tipo de restricción",
      "Máquinas virtuales sin costo"
    ],
    "correctAnswer": "Servicios que permanecen gratuitos indefinidamente con límites de uso",
    "explaination": "Azure ofrece más de 55 servicios siempre gratuitos que no tienen fecha de expiración, aunque están sujetos a límites de uso mensuales.",
    "difficulty": "medium"
  },
  {
    "id": 20315,
    "categoryId": "azure-accounts",
    "text": "¿Qué es el Portal de Azure?",
    "options": [
      "Una interfaz web para administrar todos los servicios y recursos de Azure",
      "Una aplicación de escritorio para desarrolladores",
      "Un servicio de almacenamiento en la nube",
      "Un lenguaje de programación de Microsoft"
    ],
    "correctAnswer": "Una interfaz web para administrar todos los servicios y recursos de Azure",
    "explaination": "El Portal de Azure (portal.azure.com) es una consola web unificada que permite administrar y supervisar todos los servicios y recursos de Azure.",
    "difficulty": "easy"
  },
  {
    "id": 20316,
    "categoryId": "azure-accounts",
    "text": "¿Qué cuenta se recomienda para estudiantes que desean usar Azure sin tarjeta de crédito?",
    "options": [
      "Cuenta Enterprise Agreement",
      "Azure for Students",
      "Cuenta de pago por uso",
      "Azure Dev/Test"
    ],
    "correctAnswer": "Azure for Students",
    "explaination": "Azure for Students ofrece $100 de crédito y no requiere tarjeta de crédito. Está disponible para estudiantes verificados con correo institucional.",
    "difficulty": "easy"
  },
  {
    "id": 20317,
    "categoryId": "azure-accounts",
    "text": "¿Qué es el Microsoft Entra ID (antes Azure Active Directory)?",
    "options": [
      "Un servicio de identidad y acceso basado en la nube",
      "Un servicio de almacenamiento de archivos",
      "Una base de datos relacional",
      "Un servicio de computación sin servidor"
    ],
    "correctAnswer": "Un servicio de identidad y acceso basado en la nube",
    "explaination": "Microsoft Entra ID (anteriormente Azure AD) es el servicio de identidad y acceso de Microsoft en la nube, que gestiona usuarios, grupos y autenticación.",
    "difficulty": "medium"
  },
  {
    "id": 20318,
    "categoryId": "azure-accounts",
    "text": "¿Cuál de las siguientes afirmaciones sobre los grupos de administración es CORRECTA?",
    "options": [
      "Pueden anidarse hasta 6 niveles de profundidad",
      "Solo puede existir un grupo de administración raíz por directorio",
      "Solo se aplican a recursos individuales",
      "No admiten políticas de Azure"
    ],
    "correctAnswer": "Solo puede existir un grupo de administración raíz por directorio",
    "explaination": "Cada directorio de Azure AD tiene un único grupo de administración raíz. Los grupos pueden anidarse hasta 6 niveles (sin contar la raíz).",
    "difficulty": "hard"
  },
  {
    "id": 20319,
    "categoryId": "azure-accounts",
    "text": "¿Qué permite hacer el control de acceso basado en roles (RBAC) en Azure?",
    "options": [
      "Gestionar quién tiene acceso a los recursos y qué pueden hacer con ellos",
      "Crear máquinas virtuales automáticamente",
      "Configurar redes virtuales",
      "Establecer límites de facturación"
    ],
    "correctAnswer": "Gestionar quién tiene acceso a los recursos y qué pueden hacer con ellos",
    "explaination": "RBAC en Azure permite controlar el acceso a los recursos definiendo qué usuarios, grupos o aplicaciones pueden realizar qué acciones.",
    "difficulty": "medium"
  },
  {
    "id": 20320,
    "categoryId": "azure-accounts",
    "text": "¿Cuántos niveles de grupos de administración se pueden anidar en Azure (sin contar la raíz)?",
    "options": [
      "4 niveles",
      "6 niveles",
      "10 niveles",
      "2 niveles"
    ],
    "correctAnswer": "6 niveles",
    "explaination": "Azure permite hasta 6 niveles de profundidad en la jerarquía de grupos de administración, sin contar el grupo raíz del directorio.",
    "difficulty": "hard"
  },
  {
    "id": 20321,
    "categoryId": "azure-accounts",
    "text": "¿Qué sucede con los recursos de Azure cuando se elimina un grupo de recursos?",
    "options": [
      "Los recursos quedan huérfanos y siguen activos",
      "Todos los recursos dentro del grupo también se eliminan",
      "Los recursos se mueven automáticamente a otro grupo",
      "Los recursos se archivan durante 30 días"
    ],
    "correctAnswer": "Todos los recursos dentro del grupo también se eliminan",
    "explaination": "Al eliminar un grupo de recursos, todos los recursos que contiene también se eliminan de forma permanente.",
    "difficulty": "medium"
  },
  {
    "id": 20322,
    "categoryId": "azure-accounts",
    "text": "¿Qué es una política de Azure (Azure Policy)?",
    "options": [
      "Un servicio que aplica y audita reglas sobre los recursos de Azure",
      "Un plan de precios de Azure",
      "Un tipo de suscripción corporativa",
      "Un servicio de copias de seguridad"
    ],
    "correctAnswer": "Un servicio que aplica y audita reglas sobre los recursos de Azure",
    "explaination": "Azure Policy permite crear, asignar y gestionar políticas que aplican reglas y efectos sobre los recursos para mantener el cumplimiento normativo.",
    "difficulty": "medium"
  },
  {
    "id": 20323,
    "categoryId": "azure-accounts",
    "text": "¿Qué herramienta de línea de comandos permite administrar recursos de Azure?",
    "options": [
      "Azure CLI y Azure PowerShell",
      "Solo el Portal de Azure",
      "Solo Python SDK",
      "Solo REST API"
    ],
    "correctAnswer": "Azure CLI y Azure PowerShell",
    "explaination": "Azure CLI y Azure PowerShell son las dos herramientas de línea de comandos principales para administrar recursos de Azure desde la terminal.",
    "difficulty": "easy"
  },
  {
    "id": 20324,
    "categoryId": "azure-accounts",
    "text": "¿Qué es una zona de disponibilidad en Azure?",
    "options": [
      "Ubicaciones físicamente separadas dentro de una región de Azure",
      "Países donde está disponible Azure",
      "Tipos de suscripciones regionales",
      "Grupos de servidores de respaldo"
    ],
    "correctAnswer": "Ubicaciones físicamente separadas dentro de una región de Azure",
    "explaination": "Las zonas de disponibilidad son centros de datos físicamente separados dentro de una región, con alimentación, refrigeración y red independientes.",
    "difficulty": "medium"
  },
  {
    "id": 20325,
    "categoryId": "azure-accounts",
    "text": "¿Qué es el Azure Free Account y cuánto tiempo dura el período de prueba completo?",
    "options": [
      "Una cuenta con $200 de crédito por 30 días y 12 meses de servicios gratuitos seleccionados",
      "Una cuenta gratuita permanente sin restricciones",
      "Una cuenta de prueba por 7 días con $50 de crédito",
      "Una cuenta educativa por 6 meses"
    ],
    "correctAnswer": "Una cuenta con $200 de crédito por 30 días y 12 meses de servicios gratuitos seleccionados",
    "explaination": "La cuenta gratuita de Azure incluye $200 de crédito en los primeros 30 días, acceso a servicios populares gratis por 12 meses y más de 55 servicios siempre gratuitos.",
    "difficulty": "medium"
  },
  {
    "id": 20326,
    "categoryId": "azure-accounts",
    "text": "¿Qué es el acuerdo Enterprise de Azure (EA)?",
    "options": [
      "Un contrato de licencias por volumen para grandes organizaciones",
      "Un plan para pequeñas empresas",
      "Una suscripción de pago mensual sin compromiso",
      "Un acuerdo exclusivo para startups"
    ],
    "correctAnswer": "Un contrato de licencias por volumen para grandes organizaciones",
    "explaination": "El Enterprise Agreement es un acuerdo de licencias por volumen diseñado para organizaciones grandes que desean adquirir servicios de Azure con descuentos y flexibilidad.",
    "difficulty": "hard"
  },
  {
    "id": 20327,
    "categoryId": "azure-accounts",
    "text": "¿Qué es un presupuesto en Azure Cost Management?",
    "options": [
      "Un límite definido para monitorear y alertar sobre el gasto en Azure",
      "Un tope que impide gastar más de lo configurado",
      "Un plan de precios predefinido por Microsoft",
      "Una reserva de recursos de cómputo"
    ],
    "correctAnswer": "Un límite definido para monitorear y alertar sobre el gasto en Azure",
    "explaination": "Un presupuesto en Azure Cost Management permite configurar alertas cuando el gasto alcanza umbrales definidos, aunque no bloquea automáticamente los recursos.",
    "difficulty": "medium"
  },
  {
    "id": 20328,
    "categoryId": "azure-accounts",
    "text": "¿Qué herramienta de Azure permite estimar el costo antes de implementar recursos?",
    "options": [
      "Calculadora de precios de Azure",
      "Azure Monitor",
      "Azure Advisor",
      "Azure Blueprints"
    ],
    "correctAnswer": "Calculadora de precios de Azure",
    "explaination": "La Calculadora de precios de Azure (azure.microsoft.com/pricing/calculator) permite estimar el costo mensual de los recursos antes de implementarlos.",
    "difficulty": "easy"
  },
  {
    "id": 20329,
    "categoryId": "azure-accounts",
    "text": "¿Cuál es el propósito de las etiquetas (tags) en Azure?",
    "options": [
      "Organizar recursos con metadatos clave-valor para facilitar gestión y facturación",
      "Establecer permisos de acceso a recursos",
      "Configurar reglas de firewall",
      "Asignar zonas de disponibilidad"
    ],
    "correctAnswer": "Organizar recursos con metadatos clave-valor para facilitar gestión y facturación",
    "explaination": "Las etiquetas son pares clave-valor que se aplican a recursos de Azure para organizarlos lógicamente, filtrarlos y asignar costos por departamento o proyecto.",
    "difficulty": "medium"
  },
  {
    "id": 20330,
    "categoryId": "azure-accounts",
    "text": "¿Qué es Azure Advisor?",
    "options": [
      "Un servicio que proporciona recomendaciones personalizadas para optimizar recursos de Azure",
      "Un asistente virtual para configurar máquinas virtuales",
      "Un servicio de soporte técnico premium",
      "Una herramienta de migración de datos"
    ],
    "correctAnswer": "Un servicio que proporciona recomendaciones personalizadas para optimizar recursos de Azure",
    "explaination": "Azure Advisor analiza la configuración y telemetría de los recursos y ofrece recomendaciones en áreas como confiabilidad, seguridad, rendimiento y costos.",
    "difficulty": "medium"
  }
];
// ─────────────────────────────────────────────
// azure infrastructure (20331-20360)
// ─────────────────────────────────────────────
export const azureInfrastructureQuestions: Question[] = [
  {
    "id": 20331,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué es un datacenter de Azure?",
    "options": [
      "Una instalación física con servidores, refrigeración, energía y conectividad de red organizados en racks",
      "Una zona geográfica que agrupa varias regiones",
      "Un servicio virtual de almacenamiento distribuido",
      "Un centro de soporte técnico de Microsoft"
    ],
    "correctAnswer": "Una instalación física con servidores, refrigeración, energía y conectividad de red organizados en racks",
    "explaination": "Los datacenters de Azure son instalaciones físicas que contienen servidores organizados en racks con alimentación eléctrica dedicada, refrigeración y conectividad de red de alta velocidad.",
    "difficulty": "easy"
  },
  {
    "id": 20332,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es la unidad organizativa base de la infraestructura global de Azure?",
    "options": [
      "Las regiones geográficas",
      "Los datacenters individuales",
      "Los grupos de recursos",
      "Las suscripciones"
    ],
    "correctAnswer": "Las regiones geográficas",
    "explaination": "Las regiones son la unidad organizativa base de la infraestructura global de Azure. Cada región es un conjunto de datacenters conectados entre sí dentro de un perímetro de latencia definido.",
    "difficulty": "easy"
  },
  {
    "id": 20333,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué es una región de Azure?",
    "options": [
      "Un área geográfica que contiene al menos un datacenter, conectados en red con baja latencia",
      "Un único datacenter físico de Microsoft",
      "Un grupo de suscripciones de Azure agrupadas por país",
      "Una zona de facturación independiente"
    ],
    "correctAnswer": "Un área geográfica que contiene al menos un datacenter, conectados en red con baja latencia",
    "explaination": "Una región de Azure es un área geográfica que contiene uno o más datacenters próximos entre sí y conectados mediante una red de baja latencia.",
    "difficulty": "easy"
  },
  {
    "id": 20334,
    "categoryId": "azure-infrastructure",
    "text": "¿Por qué es importante seleccionar la región correcta al implementar recursos en Azure?",
    "options": [
      "Porque afecta la latencia, disponibilidad de servicios, cumplimiento normativo y costos",
      "Porque determina el idioma de la interfaz del portal",
      "Porque solo algunas regiones permiten usar máquinas virtuales",
      "Porque la región define el tipo de suscripción disponible"
    ],
    "correctAnswer": "Porque afecta la latencia, disponibilidad de servicios, cumplimiento normativo y costos",
    "explaination": "La elección de región impacta directamente en la latencia para los usuarios, los servicios disponibles, los requisitos de residencia de datos y soberanía, y el costo de los recursos.",
    "difficulty": "medium"
  },
  {
    "id": 20335,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál de las siguientes afirmaciones sobre las regiones de Azure es CORRECTA?",
    "options": [
      "No todos los servicios de Azure están disponibles en todas las regiones",
      "Todos los servicios de Azure están disponibles en todas las regiones",
      "Cada región tiene exactamente tres datacenters",
      "Las regiones no tienen relación con la latencia de red"
    ],
    "correctAnswer": "No todos los servicios de Azure están disponibles en todas las regiones",
    "explaination": "Algunos servicios de Azure solo están disponibles en regiones específicas. Al elegir una región se debe verificar la disponibilidad del servicio requerido.",
    "difficulty": "medium"
  },
  {
    "id": 20336,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué son las zonas de disponibilidad de Azure?",
    "options": [
      "Datacenters físicamente separados dentro de una misma región, con energía, refrigeración y red independientes",
      "Regiones alternativas para recuperación ante desastres",
      "Grupos de suscripciones distribuidas geográficamente",
      "Zonas de facturación separadas dentro de una región"
    ],
    "correctAnswer": "Datacenters físicamente separados dentro de una misma región, con energía, refrigeración y red independientes",
    "explaination": "Las zonas de disponibilidad son ubicaciones físicamente aisladas dentro de una región de Azure, cada una con su propia infraestructura de energía, refrigeración y red para garantizar alta disponibilidad.",
    "difficulty": "easy"
  },
  {
    "id": 20337,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuántas zonas de disponibilidad mínimas debe tener una región para ser considerada compatible con zonas de disponibilidad?",
    "options": [
      "Al menos 2 zonas",
      "Al menos 3 zonas",
      "Al menos 5 zonas",
      "Al menos 4 zonas"
    ],
    "correctAnswer": "Al menos 3 zonas",
    "explaination": "Para que una región sea compatible con zonas de disponibilidad, debe tener un mínimo de tres zonas separadas físicamente, garantizando así redundancia y resiliencia.",
    "difficulty": "medium"
  },
  {
    "id": 20338,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es el principal beneficio de usar zonas de disponibilidad en Azure?",
    "options": [
      "Proteger las aplicaciones y datos frente a fallos en un datacenter individual",
      "Reducir el costo de los recursos de cómputo",
      "Aumentar la velocidad de procesamiento de las VMs",
      "Permitir el acceso a regiones soberanas"
    ],
    "correctAnswer": "Proteger las aplicaciones y datos frente a fallos en un datacenter individual",
    "explaination": "Las zonas de disponibilidad protegen contra fallos de datacenter al distribuir recursos en ubicaciones físicas aisladas dentro de la misma región.",
    "difficulty": "easy"
  },
  {
    "id": 20339,
    "categoryId": "azure-infrastructure",
    "text": "¿Cómo están conectadas las zonas de disponibilidad entre sí dentro de una región de Azure?",
    "options": [
      "Mediante redes privadas de fibra óptica de alta velocidad y baja latencia",
      "A través de Internet pública con cifrado SSL",
      "Mediante VPN de sitio a sitio",
      "No están conectadas entre sí directamente"
    ],
    "correctAnswer": "Mediante redes privadas de fibra óptica de alta velocidad y baja latencia",
    "explaination": "Las zonas de disponibilidad están interconectadas mediante redes privadas de fibra óptica de muy alta velocidad para garantizar baja latencia en la comunicación entre ellas.",
    "difficulty": "medium"
  },
  {
    "id": 20340,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuáles son los tres tipos de categorías de servicios de Azure respecto a las zonas de disponibilidad?",
    "options": [
      "Servicios zonales, con redundancia de zona y no regionales",
      "Servicios primarios, secundarios y terciarios",
      "Servicios básicos, estándar y premium",
      "Servicios locales, regionales y globales"
    ],
    "correctAnswer": "Servicios zonales, con redundancia de zona y no regionales",
    "explaination": "Azure clasifica sus servicios respecto a zonas de disponibilidad en: zonales (fijados a una zona), con redundancia de zona (replicados automáticamente entre zonas) y no regionales (disponibles globalmente).",
    "difficulty": "hard"
  },
  {
    "id": 20341,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué son los servicios 'zonales' en el contexto de zonas de disponibilidad?",
    "options": [
      "Servicios que se anclan a una zona de disponibilidad específica, como VMs o discos administrados",
      "Servicios replicados automáticamente entre todas las zonas",
      "Servicios disponibles solo en regiones sin zonas de disponibilidad",
      "Servicios distribuidos globalmente sin zona asignada"
    ],
    "correctAnswer": "Servicios que se anclan a una zona de disponibilidad específica, como VMs o discos administrados",
    "explaination": "Los servicios zonales se implementan en una zona de disponibilidad específica. Ejemplos incluyen máquinas virtuales, discos administrados y direcciones IP estándar.",
    "difficulty": "hard"
  },
  {
    "id": 20342,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué garantiza un SLA con zonas de disponibilidad frente a un SLA de una sola VM?",
    "options": [
      "Mayor porcentaje de tiempo de actividad garantizado al distribuir réplicas en múltiples zonas",
      "Menor costo de operación mensual",
      "Acceso exclusivo a hardware dedicado",
      "Eliminación total de cualquier tiempo de inactividad"
    ],
    "correctAnswer": "Mayor porcentaje de tiempo de actividad garantizado al distribuir réplicas en múltiples zonas",
    "explaination": "Al distribuir réplicas en múltiples zonas de disponibilidad, Azure puede ofrecer SLAs de mayor disponibilidad (por ejemplo, 99.99%) comparado con una sola VM en una sola zona.",
    "difficulty": "medium"
  },
  {
    "id": 20343,
    "categoryId": "azure-infrastructure",
    "text": "¿Para qué tipo de cargas de trabajo se recomienda principalmente el uso de zonas de disponibilidad?",
    "options": [
      "Aplicaciones de misión crítica que requieren alta disponibilidad y resiliencia",
      "Entornos de desarrollo y pruebas con bajo presupuesto",
      "Cargas de trabajo de procesamiento por lotes sin requisitos de tiempo real",
      "Aplicaciones de uso personal con tráfico muy bajo"
    ],
    "correctAnswer": "Aplicaciones de misión crítica que requieren alta disponibilidad y resiliencia",
    "explaination": "Las zonas de disponibilidad están diseñadas para cargas de trabajo críticas donde el tiempo de inactividad tiene un impacto significativo, como bases de datos en producción, aplicaciones financieras o servicios de salud.",
    "difficulty": "medium"
  },
  {
    "id": 20344,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué son los pares de región en Azure?",
    "options": [
      "Dos regiones dentro de la misma geografía conectadas para recuperación ante desastres y replicación",
      "Dos datacenters dentro de la misma zona de disponibilidad",
      "Dos suscripciones vinculadas para facturación conjunta",
      "Dos grupos de recursos que comparten políticas de acceso"
    ],
    "correctAnswer": "Dos regiones dentro de la misma geografía conectadas para recuperación ante desastres y replicación",
    "explaination": "Los pares de región son dos regiones de Azure emparejadas dentro de la misma geografía (como Europa o América) a una distancia mínima de 300 millas, diseñadas para replicación y recuperación ante desastres.",
    "difficulty": "easy"
  },
  {
    "id": 20345,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es la distancia mínima recomendada entre regiones emparejadas en Azure?",
    "options": [
      "Al menos 300 millas (aproximadamente 500 km)",
      "Al menos 100 millas",
      "Al menos 1000 millas",
      "No existe un requisito de distancia mínima"
    ],
    "correctAnswer": "Al menos 300 millas (aproximadamente 500 km)",
    "explaination": "Azure recomienda una separación de al menos 300 millas entre regiones emparejadas para garantizar que un desastre regional no afecte a ambas regiones simultáneamente.",
    "difficulty": "medium"
  },
  {
    "id": 20346,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es una ventaja de los pares de región respecto a las actualizaciones de plataforma?",
    "options": [
      "Las actualizaciones se implementan en una región del par a la vez para evitar interrupciones simultáneas",
      "Las actualizaciones se aplican a ambas regiones al mismo tiempo para mayor velocidad",
      "Los pares de región no reciben actualizaciones automáticas",
      "Solo la región secundaria recibe actualizaciones de plataforma"
    ],
    "correctAnswer": "Las actualizaciones se implementan en una región del par a la vez para evitar interrupciones simultáneas",
    "explaination": "Azure implementa las actualizaciones de plataforma (mantenimiento planeado) secuencialmente en las regiones emparejadas, reduciendo el riesgo de interrupciones que afecten a ambas al mismo tiempo.",
    "difficulty": "medium"
  },
  {
    "id": 20347,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué ocurre con la replicación de datos entre regiones emparejadas en caso de una interrupción amplia?",
    "options": [
      "La región secundaria del par se prioriza para la recuperación de servicios",
      "Ambas regiones quedan fuera de servicio simultáneamente",
      "Los datos se pierden si la región primaria falla",
      "Se activa automáticamente una tercera región de respaldo"
    ],
    "correctAnswer": "La región secundaria del par se prioriza para la recuperación de servicios",
    "explaination": "En caso de una interrupción amplia que afecte a una región, Azure prioriza la recuperación de al menos una de las regiones del par para restaurar los servicios lo antes posible.",
    "difficulty": "medium"
  },
  {
    "id": 20348,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es un ejemplo de par de regiones de Azure en América?",
    "options": [
      "Este de EE. UU. y Oeste de EE. UU.",
      "Este de EE. UU. y Norte de Europa",
      "Sur de Brasil y Japón Oriental",
      "Canada Central y Sudeste de Asia"
    ],
    "correctAnswer": "Este de EE. UU. y Oeste de EE. UU.",
    "explaination": "Este de EE. UU. (East US) y Oeste de EE. UU. (West US) son un ejemplo clásico de par de regiones de Azure dentro de la misma geografía americana.",
    "difficulty": "medium"
  },
  {
    "id": 20349,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué ventaja ofrecen los pares de región en cuanto a la residencia de datos?",
    "options": [
      "Garantizan que los datos replicados permanezcan dentro de la misma geografía para cumplimiento normativo",
      "Permiten mover datos libremente entre cualquier región del mundo",
      "Eliminan cualquier requisito legal sobre almacenamiento de datos",
      "Los datos se replican automáticamente fuera de la geografía para mayor seguridad"
    ],
    "correctAnswer": "Garantizan que los datos replicados permanezcan dentro de la misma geografía para cumplimiento normativo",
    "explaination": "Los pares de región mantienen la replicación dentro de la misma geografía (excepto Brasil Sur), lo que ayuda a cumplir requisitos de soberanía y residencia de datos.",
    "difficulty": "hard"
  },
  {
    "id": 20350,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué son las regiones soberanas de Azure?",
    "options": [
      "Instancias aisladas de Azure que sirven a necesidades específicas de cumplimiento o gubernamentales",
      "Regiones de Azure con mayor ancho de banda disponible",
      "Regiones exclusivas para clientes Enterprise",
      "Zonas de disponibilidad con hardware dedicado premium"
    ],
    "correctAnswer": "Instancias aisladas de Azure que sirven a necesidades específicas de cumplimiento o gubernamentales",
    "explaination": "Las regiones soberanas de Azure son instancias físicamente y lógicamente aisladas del resto de la nube pública de Azure, diseñadas para cumplir requisitos gubernamentales o de cumplimiento normativo específicos.",
    "difficulty": "medium"
  },
  {
    "id": 20351,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál es un ejemplo de región soberana de Azure para el gobierno de Estados Unidos?",
    "options": [
      "Azure Government (US Gov Virginia, US Gov Iowa)",
      "Azure Public US East",
      "Azure DoD Region Standard",
      "Azure Federal Cloud"
    ],
    "correctAnswer": "Azure Government (US Gov Virginia, US Gov Iowa)",
    "explaination": "Azure Government incluye regiones como US Gov Virginia y US Gov Iowa, diseñadas exclusivamente para agencias gubernamentales de EE. UU. y sus socios, con personal examinado y cumplimiento de normativas como FedRAMP.",
    "difficulty": "medium"
  },
  {
    "id": 20352,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué característica distingue a Azure Government del Azure comercial estándar?",
    "options": [
      "Solo puede ser accedida por entidades gubernamentales y socios autorizados de EE. UU.",
      "Tiene mayor cantidad de regiones disponibles que el Azure comercial",
      "Es más económica que el Azure estándar para todos los servicios",
      "Usa una arquitectura de nube diferente basada en tecnología privada"
    ],
    "correctAnswer": "Solo puede ser accedida por entidades gubernamentales y socios autorizados de EE. UU.",
    "explaination": "Azure Government está físicamente aislado del Azure comercial y solo pueden acceder a él entidades del gobierno federal, estatal y local de EE. UU., así como sus socios certificados.",
    "difficulty": "medium"
  },
  {
    "id": 20353,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué son las regiones de Azure China y cómo difieren del Azure global?",
    "options": [
      "Son regiones operadas por 21Vianet, físicamente separadas del Azure global y sujetas a leyes chinas",
      "Son regiones estándar de Azure con interfaz en chino mandarín",
      "Son regiones de Azure con menor latencia para usuarios asiáticos",
      "Son regiones beta exclusivas para socios de Microsoft en Asia"
    ],
    "correctAnswer": "Son regiones operadas por 21Vianet, físicamente separadas del Azure global y sujetas a leyes chinas",
    "explaination": "Azure China está operado por 21Vianet bajo un modelo de licencia única en China. Está físicamente aislado del Azure global y cumple con las regulaciones chinas sobre almacenamiento y gestión de datos.",
    "difficulty": "hard"
  },
  {
    "id": 20354,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué es una geografía de Azure?",
    "options": [
      "Un mercado discreto que suele contener dos o más regiones y preserva la residencia de datos",
      "Un único datacenter con alta capacidad de almacenamiento",
      "Una zona de facturación que agrupa países con la misma moneda",
      "Un conjunto de zonas de disponibilidad distribuidas globalmente"
    ],
    "correctAnswer": "Un mercado discreto que suele contener dos o más regiones y preserva la residencia de datos",
    "explaination": "Una geografía de Azure es un área del mundo que contiene al menos una región de Azure. Las geografías garantizan que los datos y las aplicaciones cumplan con los requisitos de residencia de datos dentro de sus fronteras.",
    "difficulty": "medium"
  },
  {
    "id": 20355,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué región tiene una excepción notable en la política de pares de región respecto a la residencia de datos?",
    "options": [
      "Sur de Brasil, cuyo par está en una geografía diferente (Sur Central de EE. UU.)",
      "Norte de Europa, que se empareja con Asia Pacífico",
      "Japón Oriental, que se empareja con Australia",
      "India Central, que no tiene par de región asignado"
    ],
    "correctAnswer": "Sur de Brasil, cuyo par está en una geografía diferente (Sur Central de EE. UU.)",
    "explaination": "Sur de Brasil es una excepción, ya que su región emparejada es Sur Central de EE. UU., ubicada en una geografía diferente. Esto significa que los datos pueden replicarse fuera de la geografía sudamericana.",
    "difficulty": "hard"
  },
  {
    "id": 20356,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuántas regiones de Azure existen aproximadamente a nivel global?",
    "options": [
      "Más de 60 regiones en todo el mundo",
      "Exactamente 30 regiones",
      "Menos de 20 regiones",
      "Exactamente 50 regiones"
    ],
    "correctAnswer": "Más de 60 regiones en todo el mundo",
    "explaination": "Azure cuenta con más de 60 regiones en todo el mundo, lo que lo convierte en el proveedor de nube con mayor presencia geográfica global.",
    "difficulty": "easy"
  },
  {
    "id": 20357,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué ventaja de recuperación ante desastres ofrecen los pares de región frente a zonas de disponibilidad?",
    "options": [
      "Protegen contra desastres a nivel regional, mientras que las zonas protegen contra fallos de datacenter individual",
      "Los pares de región son más económicos que las zonas de disponibilidad",
      "Los pares de región ofrecen menor latencia que las zonas de disponibilidad",
      "No existe diferencia funcional entre ambos mecanismos"
    ],
    "correctAnswer": "Protegen contra desastres a nivel regional, mientras que las zonas protegen contra fallos de datacenter individual",
    "explaination": "Las zonas de disponibilidad protegen contra fallos de un datacenter dentro de la misma región, mientras que los pares de región protegen contra eventos que afectan a toda una región, como desastres naturales a gran escala.",
    "difficulty": "medium"
  },
  {
    "id": 20358,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué tipo de servicios de Azure pueden implementarse usando zonas de disponibilidad para alta disponibilidad de bases de datos?",
    "options": [
      "Azure SQL Database con redundancia de zona y Azure Cosmos DB",
      "Solo Azure Blob Storage",
      "Únicamente Azure Table Storage",
      "Solo servicios de red como Azure Load Balancer"
    ],
    "correctAnswer": "Azure SQL Database con redundancia de zona y Azure Cosmos DB",
    "explaination": "Servicios como Azure SQL Database y Azure Cosmos DB soportan redundancia de zona de disponibilidad, replicando automáticamente los datos entre zonas para alta disponibilidad de bases de datos.",
    "difficulty": "hard"
  },
  {
    "id": 20359,
    "categoryId": "azure-infrastructure",
    "text": "¿Qué significa que un servicio de Azure sea 'con redundancia de zona'?",
    "options": [
      "El servicio se replica y distribuye automáticamente entre varias zonas de disponibilidad",
      "El servicio solo funciona en una zona de disponibilidad específica",
      "El servicio está disponible únicamente en regiones sin zonas de disponibilidad",
      "El servicio tiene copias de seguridad automáticas en otra región"
    ],
    "correctAnswer": "El servicio se replica y distribuye automáticamente entre varias zonas de disponibilidad",
    "explaination": "Los servicios con redundancia de zona se replican automáticamente entre múltiples zonas de disponibilidad, por lo que si una zona falla, el servicio continúa disponible sin intervención manual.",
    "difficulty": "medium"
  },
  {
    "id": 20360,
    "categoryId": "azure-infrastructure",
    "text": "¿Cuál de las siguientes afirmaciones sobre las regiones soberanas de Azure es INCORRECTA?",
    "options": [
      "Cualquier cliente con suscripción estándar puede acceder a regiones soberanas sin restricciones",
      "Están físicamente aisladas de la nube pública de Azure",
      "Existen versiones para el gobierno de EE. UU. y para China",
      "Cumplen con normativas específicas de seguridad y soberanía de datos"
    ],
    "correctAnswer": "Cualquier cliente con suscripción estándar puede acceder a regiones soberanas sin restricciones",
    "explaination": "Las regiones soberanas tienen acceso restringido. Azure Government solo está disponible para entidades gubernamentales de EE. UU. autorizadas, y Azure China opera bajo un acuerdo específico con 21Vianet, no accesible con suscripciones estándar.",
    "difficulty": "medium"
  }
]

// ─────────────────────────────────────────────
// azure management infrastructure (20361-20390)
// ─────────────────────────────────────────────
export const azureManagementInfrastructureQuestions: Question[] = [
{
    "id": 20361,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Resource Manager (ARM) y cuál es su función principal?",
    "options": [
      "Es un servicio de monitoreo que registra eventos de recursos de Azure",
      "Es la capa de administración que permite crear, actualizar y eliminar recursos en Azure",
      "Es una herramienta de migración para mover recursos entre regiones",
      "Es un servicio de copia de seguridad para recursos críticos de Azure"
    ],
    "correctAnswer": "Es la capa de administración que permite crear, actualizar y eliminar recursos en Azure",
    "explaination": "Azure Resource Manager (ARM) es la capa de administración de Azure que proporciona una manera coherente de administrar los recursos. Actúa como intermediario entre las herramientas de administración (portal, CLI, SDK) y los recursos de Azure, gestionando autenticación, autorización y la aplicación de políticas.",
    "difficulty": "easy"
  },
  {
    "id": 20362,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es la jerarquía correcta de organización de recursos en Azure, de mayor a menor nivel?",
    "options": [
      "Suscripción → Grupo de administración → Grupo de recursos → Recursos",
      "Grupo de administración → Suscripción → Grupo de recursos → Recursos",
      "Tenant → Suscripción → Recursos → Grupo de recursos",
      "Grupo de recursos → Suscripción → Grupo de administración → Recursos"
    ],
    "correctAnswer": "Grupo de administración → Suscripción → Grupo de recursos → Recursos",
    "explaination": "La jerarquía correcta en Azure es: Grupos de administración (nivel más alto) → Suscripciones → Grupos de recursos → Recursos individuales. Esta estructura permite aplicar gobernanza, políticas y control de acceso de forma jerárquica.",
    "difficulty": "easy"
  },
  {
    "id": 20363,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son los grupos de recursos en Azure?",
    "options": [
      "Contenedores lógicos que agrupan recursos relacionados de Azure para facilitar su administración",
      "Conjuntos de permisos que se asignan a usuarios para acceder a recursos",
      "Regiones geográficas donde se despliegan los servicios de Azure",
      "Planes de facturación que agrupan múltiples suscripciones"
    ],
    "correctAnswer": "Contenedores lógicos que agrupan recursos relacionados de Azure para facilitar su administración",
    "explaination": "Los grupos de recursos son contenedores lógicos en Azure que permiten organizar y administrar recursos relacionados como una unidad. Todos los recursos deben pertenecer a un grupo de recursos y cada recurso solo puede pertenecer a un grupo a la vez.",
    "difficulty": "easy"
  },
  {
    "id": 20364,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son los grupos de administración de Azure y para qué se utilizan?",
    "options": [
      "Son grupos de usuarios administradores con acceso privilegiado a Azure",
      "Son contenedores que ayudan a administrar el acceso, las políticas y el cumplimiento de múltiples suscripciones",
      "Son conjuntos de máquinas virtuales administradas de forma centralizada",
      "Son regiones lógicas que agrupan zonas de disponibilidad cercanas"
    ],
    "correctAnswer": "Son contenedores que ayudan a administrar el acceso, las políticas y el cumplimiento de múltiples suscripciones",
    "explaination": "Los grupos de administración permiten organizar suscripciones en contenedores jerárquicos y aplicar condiciones de gobernanza. Las directivas y asignaciones de roles aplicadas a un grupo de administración se heredan por todas las suscripciones que contiene.",
    "difficulty": "medium"
  },
  {
    "id": 20365,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuántos niveles de profundidad puede tener la jerarquía de grupos de administración en Azure?",
    "options": [
      "Hasta 4 niveles",
      "Hasta 6 niveles",
      "Hasta 10 niveles",
      "Sin límite de niveles"
    ],
    "correctAnswer": "Hasta 6 niveles",
    "explaination": "Azure permite hasta 6 niveles de profundidad en la jerarquía de grupos de administración, sin contar el nivel raíz ni el nivel de suscripción. Esto proporciona flexibilidad para modelar estructuras organizacionales complejas.",
    "difficulty": "medium"
  },
  {
    "id": 20366,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es una suscripción de Azure?",
    "options": [
      "Un plan de soporte técnico contratado con Microsoft",
      "Una unidad lógica de servicios de Azure vinculada a una cuenta que permite aprovisionar recursos",
      "Un tipo de licencia para usar software de Microsoft en la nube",
      "Un contrato de nivel de servicio (SLA) con Microsoft Azure"
    ],
    "correctAnswer": "Una unidad lógica de servicios de Azure vinculada a una cuenta que permite aprovisionar recursos",
    "explaination": "Una suscripción de Azure es una unidad lógica que proporciona acceso autenticado y autorizado a los servicios de Azure. Está vinculada a una cuenta y define los límites de facturación y control de acceso. Una cuenta puede tener múltiples suscripciones.",
    "difficulty": "easy"
  },
  {
    "id": 20367,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Policy y cuál es su propósito principal?",
    "options": [
      "Una herramienta de facturación para controlar el gasto en Azure",
      "Un servicio que permite crear, asignar y administrar directivas para controlar o auditar recursos",
      "Un sistema de autenticación multifactor para acceder al portal de Azure",
      "Una plataforma de documentación para las mejores prácticas de Azure"
    ],
    "correctAnswer": "Un servicio que permite crear, asignar y administrar directivas para controlar o auditar recursos",
    "explaination": "Azure Policy ayuda a garantizar el cumplimiento de los estándares corporativos y los acuerdos de nivel de servicio. Permite crear, asignar y administrar directivas que aplican reglas a los recursos de Azure, asegurando que permanezcan en conformidad con los estándares.",
    "difficulty": "medium"
  },
  {
    "id": 20368,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es el Control de acceso basado en roles (RBAC) en Azure?",
    "options": [
      "Un sistema para cifrar datos en reposo en recursos de Azure",
      "Un sistema de autorización que proporciona administración de acceso detallado a los recursos de Azure",
      "Una herramienta para auditar el acceso físico a los centros de datos de Azure",
      "Un servicio de monitoreo de actividad de usuarios en el portal de Azure"
    ],
    "correctAnswer": "Un sistema de autorización que proporciona administración de acceso detallado a los recursos de Azure",
    "explaination": "Azure RBAC es un sistema de autorización basado en Azure Resource Manager que proporciona administración de acceso detallado a los recursos de Azure. Permite conceder acceso mínimo necesario a los usuarios para que puedan realizar su trabajo, asignando roles específicos.",
    "difficulty": "easy"
  },
  {
    "id": 20369,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuáles son los tres elementos principales de una asignación de roles en Azure RBAC?",
    "options": [
      "Usuario, contraseña y recurso",
      "Entidad de seguridad, definición de rol y ámbito",
      "Suscripción, grupo de recursos y directiva",
      "Administrador, colaborador y lector"
    ],
    "correctAnswer": "Entidad de seguridad, definición de rol y ámbito",
    "explaination": "Una asignación de roles en Azure RBAC consta de tres elementos: la entidad de seguridad (quién obtiene acceso: usuario, grupo, entidad de servicio o identidad administrada), la definición de rol (qué puede hacer) y el ámbito (sobre qué recursos aplica).",
    "difficulty": "medium"
  },
  {
    "id": 20370,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Resource Manager (ARM) Templates?",
    "options": [
      "Plantillas de diseño para el portal de Azure",
      "Archivos JSON que definen la infraestructura y configuración de un proyecto de Azure",
      "Scripts de PowerShell para automatizar la gestión de recursos",
      "Documentos de configuración para máquinas virtuales de Azure"
    ],
    "correctAnswer": "Archivos JSON que definen la infraestructura y configuración de un proyecto de Azure",
    "explaination": "Las plantillas ARM son archivos JSON que definen la infraestructura y la configuración del proyecto. Las plantillas usan sintaxis declarativa, lo que permite especificar lo que se quiere implementar sin necesidad de escribir la secuencia de comandos de programación para crearlo.",
    "difficulty": "medium"
  },
  {
    "id": 20371,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué ventaja ofrece la implementación declarativa con plantillas ARM frente a la imperativa?",
    "options": [
      "Es más rápida porque omite las validaciones de seguridad",
      "Permite especificar el estado final deseado sin detallar los pasos para alcanzarlo",
      "Requiere menos permisos de administrador para ejecutarse",
      "Solo puede usarse con recursos de red en Azure"
    ],
    "correctAnswer": "Permite especificar el estado final deseado sin detallar los pasos para alcanzarlo",
    "explaination": "La implementación declarativa con ARM Templates permite definir qué recursos se necesitan (estado deseado) sin especificar el orden de creación o los pasos exactos. ARM se encarga de determinar el orden de operaciones y de crear o actualizar los recursos para alcanzar ese estado.",
    "difficulty": "medium"
  },
  {
    "id": 20372,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Blueprints y en qué se diferencia de Azure Policy?",
    "options": [
      "Azure Blueprints es exclusivamente para gestión de redes, mientras que Azure Policy aplica a todos los recursos",
      "Azure Blueprints permite empaquetar directivas, roles y plantillas en un solo artefacto reutilizable para entornos conformes",
      "Azure Blueprints es una versión más antigua y menos funcional de Azure Policy",
      "No hay diferencia, son servicios equivalentes con diferentes nombres"
    ],
    "correctAnswer": "Azure Blueprints permite empaquetar directivas, roles y plantillas en un solo artefacto reutilizable para entornos conformes",
    "explaination": "Azure Blueprints permite empaquetar directivas de Azure, asignaciones de roles y plantillas ARM en un solo artefacto de plano técnico. A diferencia de Policy, un plano técnico crea una relación entre la definición y la implementación, lo que permite rastrear y auditar las implementaciones.",
    "difficulty": "hard"
  },
  {
    "id": 20373,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Monitor y cuál es su función principal?",
    "options": [
      "Un servicio de antivirus para proteger máquinas virtuales en Azure",
      "Una solución completa para recopilar, analizar y actuar sobre telemetría de entornos cloud y locales",
      "Una herramienta de facturación para supervisar el gasto en Azure",
      "Un servicio de respaldo automático para bases de datos en Azure"
    ],
    "correctAnswer": "Una solución completa para recopilar, analizar y actuar sobre telemetría de entornos cloud y locales",
    "explaination": "Azure Monitor maximiza la disponibilidad y el rendimiento de las aplicaciones y servicios. Recopila, analiza y actúa sobre datos de telemetría de entornos cloud y locales, ayudando a comprender el rendimiento de las aplicaciones e identificar proactivamente los problemas.",
    "difficulty": "easy"
  },
  {
    "id": 20374,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Cost Management + Billing?",
    "options": [
      "Un servicio para gestionar contratos de licencias de software de Microsoft",
      "Una herramienta para supervisar, asignar y optimizar los costos de los servicios de Azure",
      "Un sistema de facturación automática para clientes empresariales de Azure",
      "Una plataforma para comparar precios entre diferentes proveedores de nube"
    ],
    "correctAnswer": "Una herramienta para supervisar, asignar y optimizar los costos de los servicios de Azure",
    "explaination": "Azure Cost Management + Billing ayuda a comprender la factura de Azure, administrar la cuenta y las suscripciones, supervisar y controlar el gasto de Azure, y optimizar el uso de recursos. Proporciona análisis de costos, presupuestos y recomendaciones de optimización.",
    "difficulty": "easy"
  },
  {
    "id": 20375,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son las etiquetas (tags) en Azure y para qué se utilizan?",
    "options": [
      "Son identificadores únicos generados automáticamente para cada recurso de Azure",
      "Son pares nombre-valor que permiten organizar, identificar y categorizar recursos de Azure",
      "Son marcadores de versión para plantillas ARM en el repositorio de Azure",
      "Son alertas visuales que indican el estado de salud de los recursos en el portal"
    ],
    "correctAnswer": "Son pares nombre-valor que permiten organizar, identificar y categorizar recursos de Azure",
    "explaination": "Las etiquetas son pares nombre-valor metadata que se pueden aplicar a los recursos, grupos de recursos y suscripciones de Azure. Permiten organizar los recursos lógicamente, hacer seguimiento de costos por proyecto o departamento, y facilitar la automatización.",
    "difficulty": "easy"
  },
  {
    "id": 20376,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Advisor y cómo ayuda en la administración de Azure?",
    "options": [
      "Es un asistente de chat para responder preguntas sobre servicios de Azure",
      "Es un consultor personalizado en la nube que analiza configuraciones y recomienda mejoras",
      "Es una herramienta de documentación que explica cómo usar los servicios de Azure",
      "Es un servicio de soporte técnico premium disponible para suscriptores Enterprise"
    ],
    "correctAnswer": "Es un consultor personalizado en la nube que analiza configuraciones y recomienda mejoras",
    "explaination": "Azure Advisor analiza las configuraciones de recursos y la telemetría de uso, y recomienda soluciones para mejorar la confiabilidad, seguridad, excelencia operativa, rendimiento y reducir costos. Las recomendaciones se dividen en cinco categorías: Confiabilidad, Seguridad, Rendimiento, Costos y Excelencia operativa.",
    "difficulty": "medium"
  },
  {
    "id": 20377,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Service Health y en qué se diferencia del Azure Status?",
    "options": [
      "Son el mismo servicio, solo con diferentes nombres en distintas regiones",
      "Azure Service Health monitorea la salud personalizada de los servicios usados, mientras que Azure Status muestra el estado global de todos los servicios",
      "Azure Service Health es de pago, mientras que Azure Status es gratuito",
      "Azure Service Health solo cubre Azure, mientras que Azure Status incluye otros servicios de Microsoft"
    ],
    "correctAnswer": "Azure Service Health monitorea la salud personalizada de los servicios usados, mientras que Azure Status muestra el estado global de todos los servicios",
    "explaination": "Azure Service Health proporciona una vista personalizada del estado de los servicios y regiones de Azure que realmente se usan. Azure Status, en cambio, muestra una vista global del estado de todos los servicios de Azure en todas las regiones en una página pública.",
    "difficulty": "medium"
  },
  {
    "id": 20378,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es el Azure Portal y cuáles son sus características principales?",
    "options": [
      "Un cliente de escritorio exclusivo para administradores de Azure en entornos empresariales",
      "Una consola web unificada que proporciona una alternativa gráfica a las herramientas de línea de comandos",
      "Un marketplace donde se compran licencias de software para usar en Azure",
      "Una plataforma de aprendizaje interactivo para certificaciones de Azure"
    ],
    "correctAnswer": "Una consola web unificada que proporciona una alternativa gráfica a las herramientas de línea de comandos",
    "explaination": "El Azure Portal es una consola unificada basada en web que proporciona una alternativa a las herramientas de línea de comandos. Permite crear, administrar y supervisar todos los recursos de Azure en una única interfaz gráfica, con paneles personalizables y opciones de accesibilidad.",
    "difficulty": "easy"
  },
  {
    "id": 20379,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Cloud Shell y cuáles son sus dos entornos disponibles?",
    "options": [
      "Es una máquina virtual ligera con entornos Windows y Linux",
      "Es un shell interactivo autenticado accesible desde el navegador con entornos Bash y PowerShell",
      "Es un terminal local que se conecta a Azure con soporte para CMD y PowerShell",
      "Es un IDE en la nube con soporte para Python y JavaScript"
    ],
    "correctAnswer": "Es un shell interactivo autenticado accesible desde el navegador con entornos Bash y PowerShell",
    "explaination": "Azure Cloud Shell es un shell interactivo y autenticado accesible desde un navegador para administrar recursos de Azure. Ofrece la flexibilidad de elegir la experiencia de shell que mejor se adapte a la forma de trabajar: Bash o PowerShell. No requiere instalación local.",
    "difficulty": "easy"
  },
  {
    "id": 20380,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es la Azure CLI y en qué situaciones es más útil que el portal de Azure?",
    "options": [
      "Es una interfaz web alternativa al portal, útil cuando hay problemas de conectividad",
      "Es un conjunto de comandos de texto para administrar Azure, ideal para automatización y scripts repetibles",
      "Es una API REST exclusiva para desarrolladores que integran sistemas con Azure",
      "Es un plugin de Visual Studio Code solo disponible en sistemas Windows"
    ],
    "correctAnswer": "Es un conjunto de comandos de texto para administrar Azure, ideal para automatización y scripts repetibles",
    "explaination": "La Azure CLI es una herramienta de línea de comandos multiplataforma para administrar recursos de Azure. Es especialmente útil para automatización, scripting de operaciones repetibles, integración en pipelines de CI/CD y cuando se prefiere trabajar sin interfaz gráfica.",
    "difficulty": "medium"
  },
  {
    "id": 20381,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure PowerShell y en qué se diferencia de la Azure CLI?",
    "options": [
      "Azure PowerShell solo funciona en Windows, mientras que Azure CLI es multiplataforma",
      "Azure PowerShell usa cmdlets de PowerShell para administrar Azure, mientras que la CLI usa comandos az",
      "Azure PowerShell es más antiguo y está en desuso, la Azure CLI es la herramienta moderna recomendada",
      "No hay diferencias funcionales, son herramientas completamente equivalentes"
    ],
    "correctAnswer": "Azure PowerShell usa cmdlets de PowerShell para administrar Azure, mientras que la CLI usa comandos az",
    "explaination": "Azure PowerShell es un módulo que extiende PowerShell con cmdlets específicos de Azure (como New-AzVM). La Azure CLI usa comandos que comienzan con 'az'. Ambas son multiplataforma, pero PowerShell integra mejor en entornos donde ya se usa PowerShell para automatización.",
    "difficulty": "medium"
  },
  {
    "id": 20382,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son los bloqueos de recursos (Resource Locks) en Azure y qué tipos existen?",
    "options": [
      "Son restricciones de red que bloquean el acceso a los recursos desde Internet",
      "Son controles que impiden que los recursos sean modificados o eliminados accidentalmente; existen de tipo CanNotDelete y ReadOnly",
      "Son cuotas de uso que limitan cuántos recursos puede crear una suscripción",
      "Son permisos especiales que solo los administradores globales pueden asignar"
    ],
    "correctAnswer": "Son controles que impiden que los recursos sean modificados o eliminados accidentalmente; existen de tipo CanNotDelete y ReadOnly",
    "explaination": "Los bloqueos de recursos evitan que otros usuarios en la organización eliminen o modifiquen accidentalmente recursos críticos. Existen dos tipos: CanNotDelete (impide eliminar pero permite leer y modificar) y ReadOnly (impide modificar y eliminar, solo permite leer).",
    "difficulty": "medium"
  },
  {
    "id": 20383,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Bicep en el contexto de Azure y cuál es su ventaja sobre las plantillas ARM JSON?",
    "options": [
      "Es un servicio de compilación de código para aplicaciones .NET en Azure",
      "Es un lenguaje de dominio específico que ofrece sintaxis más sencilla para crear plantillas ARM",
      "Es una herramienta de terceros no compatible con Azure Resource Manager",
      "Es una extensión de Kubernetes para desplegar contenedores en Azure"
    ],
    "correctAnswer": "Es un lenguaje de dominio específico que ofrece sintaxis más sencilla para crear plantillas ARM",
    "explaination": "Bicep es un lenguaje de dominio específico (DSL) que usa sintaxis declarativa para implementar recursos de Azure. Es una abstracción transparente sobre las plantillas ARM JSON, ofrece sintaxis más concisa, mejor soporte de herramientas y se compila en JSON compatible con ARM.",
    "difficulty": "hard"
  },
  {
    "id": 20384,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué información proporciona el Azure Activity Log?",
    "options": [
      "Registros de rendimiento de CPU y memoria de las máquinas virtuales",
      "Un registro de las operaciones realizadas en los recursos a nivel de suscripción, como quién hizo qué y cuándo",
      "Estadísticas de acceso a sitios web hospedados en Azure",
      "Métricas de disponibilidad de los servicios de Azure a nivel global"
    ],
    "correctAnswer": "Un registro de las operaciones realizadas en los recursos a nivel de suscripción, como quién hizo qué y cuándo",
    "explaination": "El Azure Activity Log es un registro de plataforma que proporciona información sobre los eventos a nivel de suscripción. Incluye información como cuándo se modificó un recurso, quién lo modificó y el estado de la operación. Es útil para auditoría y diagnóstico.",
    "difficulty": "medium"
  },
  {
    "id": 20385,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son las iniciativas de Azure Policy?",
    "options": [
      "Documentos de planificación estratégica para la migración a la nube",
      "Colecciones de definiciones de directivas agrupadas para lograr un objetivo de cumplimiento específico",
      "Planes de suscripción premium con directivas de soporte incluidas",
      "Reglas de firewall predefinidas para grupos de seguridad de red"
    ],
    "correctAnswer": "Colecciones de definiciones de directivas agrupadas para lograr un objetivo de cumplimiento específico",
    "explaination": "Las iniciativas de Azure Policy son colecciones de definiciones de directivas que se agrupan para lograr un objetivo de cumplimiento específico. Por ejemplo, la iniciativa 'Habilitar supervisión en Azure Security Center' contiene más de 100 definiciones de directivas individuales relacionadas con la seguridad.",
    "difficulty": "hard"
  },
  {
    "id": 20386,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es el Grupo de administración raíz (Root Management Group) en Azure?",
    "options": [
      "El grupo de administración predeterminado al que pertenecen todos los nuevos recursos creados",
      "El nivel más alto en la jerarquía de grupos de administración que contiene todos los grupos y suscripciones del tenant",
      "Un grupo especial reservado para las suscripciones de pago por uso",
      "El grupo de seguridad que controla el acceso de los administradores globales"
    ],
    "correctAnswer": "El nivel más alto en la jerarquía de grupos de administración que contiene todos los grupos y suscripciones del tenant",
    "explaination": "El grupo de administración raíz es el nivel más alto de la jerarquía. Existe uno por directorio (tenant) de Azure AD y todas las suscripciones y grupos de administración se encuentran dentro de él. Las directivas aplicadas al grupo raíz se aplican a todos los recursos del tenant.",
    "difficulty": "hard"
  },
  {
    "id": 20387,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es el principio del mínimo privilegio (least privilege) en Azure RBAC?",
    "options": [
      "Asignar el rol de Propietario a todos los usuarios para simplificar la administración",
      "Conceder a los usuarios solo los permisos necesarios para realizar sus tareas específicas",
      "Restringir el acceso a Azure únicamente a los administradores globales",
      "Eliminar todos los permisos de los usuarios externos de la organización"
    ],
    "correctAnswer": "Conceder a los usuarios solo los permisos necesarios para realizar sus tareas específicas",
    "explaination": "El principio de mínimo privilegio en Azure RBAC significa otorgar a los usuarios, grupos y aplicaciones únicamente el nivel de acceso necesario para que puedan realizar su trabajo. Esto reduce el riesgo de cambios accidentales o maliciosos y es una práctica de seguridad fundamental.",
    "difficulty": "easy"
  },
  {
    "id": 20388,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué herramienta de Azure permite ver el cumplimiento de las directivas y el estado de los recursos de forma centralizada?",
    "options": [
      "Azure Monitor",
      "Azure Security Center",
      "Azure Policy Compliance Dashboard",
      "Azure Advisor"
    ],
    "correctAnswer": "Azure Policy Compliance Dashboard",
    "explaination": "El panel de cumplimiento de Azure Policy proporciona una vista agregada del estado general del entorno con respecto a las directivas asignadas. Permite ver cuántos recursos cumplen o no cumplen las directivas, desglosado por iniciativas, directivas individuales y recursos.",
    "difficulty": "medium"
  },
  {
    "id": 20389,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es la diferencia entre los roles integrados 'Propietario', 'Colaborador' y 'Lector' en Azure RBAC?",
    "options": [
      "Propietario puede crear recursos, Colaborador puede modificarlos y Lector puede eliminarlos",
      "Propietario tiene acceso completo incluida la gestión de acceso; Colaborador puede administrar recursos pero no gestionar acceso; Lector solo puede ver recursos",
      "Son equivalentes pero se aplican a diferentes tipos de recursos",
      "Solo difieren en el número de recursos que pueden administrar simultáneamente"
    ],
    "correctAnswer": "Propietario tiene acceso completo incluida la gestión de acceso; Colaborador puede administrar recursos pero no gestionar acceso; Lector solo puede ver recursos",
    "explaination": "Los tres roles integrados principales son: Propietario (acceso completo a todos los recursos + puede delegar acceso a otros), Colaborador (puede crear y administrar todos los recursos pero no puede gestionar el acceso de otros) y Lector (puede ver los recursos existentes pero no puede modificarlos).",
    "difficulty": "medium"
  },
  {
    "id": 20390,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es la herencia de directivas en la jerarquía de Azure y cómo funciona?",
    "options": [
      "Las directivas solo se aplican al nivel donde se asignan y no afectan a los niveles inferiores",
      "Las directivas asignadas en niveles superiores de la jerarquía se heredan automáticamente por todos los recursos en niveles inferiores",
      "Cada recurso debe tener sus propias directivas configuradas individualmente",
      "La herencia solo funciona entre grupos de administración, no entre suscripciones y grupos de recursos"
    ],
    "correctAnswer": "Las directivas asignadas en niveles superiores de la jerarquía se heredan automáticamente por todos los recursos en niveles inferiores",
    "explaination": "En Azure, las directivas asignadas a un grupo de administración se aplican a todas las suscripciones dentro de él, y a su vez a todos los grupos de recursos y recursos individuales de esas suscripciones. Esta herencia permite aplicar gobernanza de forma consistente en toda la organización desde un único punto.",
    "difficulty": "hard"
  }
];

// ─────────────────────────────────────────────
// azure virtual machines (20391-20420)
// ─────────────────────────────────────────────
export const azureVirtualMachinesQuestions: Question[] = [
  {
    "id": 20391,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué modelo de servicio en la nube representa Azure Virtual Machines?",
    "options": [
      "Software como servicio (SaaS)",
      "Plataforma como servicio (PaaS)",
      "Infraestructura como servicio (IaaS)",
      "Función como servicio (FaaS)"
    ],
    "correctAnswer": "Infraestructura como servicio (IaaS)",
    "explaination": "Azure Virtual Machines representa el modelo IaaS (Infraestructura como servicio). Permite ejecutar servidores virtualizados en Azure donde el cliente controla el sistema operativo y el software instalado, similar a un servidor físico, pero sin necesidad de comprar ni mantener hardware.",
    "difficulty": "easy"
  },
  {
    "id": 20392,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es una de las principales ventajas de Azure Virtual Machines respecto a los servidores físicos?",
    "options": [
      "Eliminan completamente la necesidad de gestionar parches, actualizaciones y configuraciones",
      "Eliminan la necesidad de comprar y mantener hardware de servidor físico",
      "Proporcionan mayor rendimiento que cualquier servidor físico disponible",
      "Incluyen licencias de software ilimitadas sin costo adicional"
    ],
    "correctAnswer": "Eliminan la necesidad de comprar y mantener hardware de servidor físico",
    "explaination": "Las máquinas virtuales de Azure eliminan la necesidad de comprar y mantener hardware de servidor físico. Sin embargo, como servicio IaaS, el cliente sigue siendo responsable de gestionar parches, actualizaciones y la configuración dentro de la máquina virtual.",
    "difficulty": "easy"
  },
  {
    "id": 20393,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es una imagen de máquina virtual en Azure?",
    "options": [
      "Una captura de pantalla del estado actual de la máquina virtual",
      "Una plantilla que ya incluye un sistema operativo y herramientas, usada para implementar VMs rápidamente",
      "Un archivo de respaldo completo de todos los datos de la VM",
      "Un certificado digital que autentica la identidad de la máquina virtual"
    ],
    "correctAnswer": "Una plantilla que ya incluye un sistema operativo y herramientas, usada para implementar VMs rápidamente",
    "explaination": "Una imagen es una plantilla precompilada que ya incluye un sistema operativo y herramientas como componentes de hospedaje web. Permite implementar máquinas virtuales rápidamente sin tener que configurar el sistema operativo desde cero.",
    "difficulty": "easy"
  },
  {
    "id": 20394,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál de los siguientes es un caso de uso recomendado para Azure Virtual Machines?",
    "options": [
      "Almacenar archivos estáticos como imágenes y videos",
      "Ejecutar funciones sin servidor activadas por eventos",
      "Pruebas y desarrollo con diferentes configuraciones de SO y aplicación",
      "Enviar notificaciones push a dispositivos móviles"
    ],
    "correctAnswer": "Pruebas y desarrollo con diferentes configuraciones de SO y aplicación",
    "explaination": "Las pruebas y el desarrollo son un caso de uso común de las VMs: se pueden crear diferentes configuraciones de sistema operativo y aplicación rápidamente y luego eliminar la VM cuando se complete la prueba, pagando solo por el tiempo de uso.",
    "difficulty": "easy"
  },
  {
    "id": 20395,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué significa 'migración mediante lift-and-shift' en el contexto de Azure Virtual Machines?",
    "options": [
      "Rediseñar completamente una aplicación para aprovechar las funcionalidades nativas de la nube",
      "Mover cargas de trabajo de servidor existentes a Azure con un rediseño mínimo de la aplicación",
      "Trasladar datos de un centro de datos a otro dentro de la misma región de Azure",
      "Elevar los límites de recursos de una VM existente sin interrumpir el servicio"
    ],
    "correctAnswer": "Mover cargas de trabajo de servidor existentes a Azure con un rediseño mínimo de la aplicación",
    "explaination": "La migración lift-and-shift consiste en mover las cargas de trabajo de servidor existentes a Azure con un rediseño mínimo de la aplicación. Es ideal para organizaciones que quieren migrar a la nube rápidamente sin invertir tiempo en reescribir sus aplicaciones.",
    "difficulty": "medium"
  },
  {
    "id": 20396,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es el caso de uso de 'recuperación ante desastres' con Azure Virtual Machines?",
    "options": [
      "Usar Azure como entorno de pruebas para nuevas versiones del software",
      "Mantener capacidad de conmutación por error en Azure y ejecutar cargas de trabajo críticas si el sitio primario no está disponible",
      "Escalar automáticamente las VMs cuando aumenta la demanda de usuarios",
      "Reducir costos apagando VMs cuando no se usan durante la noche"
    ],
    "correctAnswer": "Mantener capacidad de conmutación por error en Azure y ejecutar cargas de trabajo críticas si el sitio primario no está disponible",
    "explaination": "En el escenario de recuperación ante desastres, se mantiene capacidad de conmutación por error (failover) en Azure, de modo que si el sitio primario falla, las cargas de trabajo críticas pueden ejecutarse en Azure mientras se restaura el entorno principal.",
    "difficulty": "medium"
  },
  {
    "id": 20397,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué tres categorías principales de recursos se eligen al aprovisionar una máquina virtual en Azure?",
    "options": [
      "Sistema operativo, región y grupo de recursos",
      "Tamaño, discos de almacenamiento y configuración de red",
      "Licencia, zona de disponibilidad y etiquetas",
      "Imagen, suscripción y grupo de administración"
    ],
    "correctAnswer": "Tamaño, discos de almacenamiento y configuración de red",
    "explaination": "Al aprovisionar una máquina virtual en Azure, se eligen tres categorías principales de recursos: el tamaño (propósito, número de núcleos de procesador y cantidad de RAM), los discos de almacenamiento (HDD, SSD, etc.) y la configuración de red (red virtual, dirección IP pública y configuración de puertos).",
    "difficulty": "easy"
  },
  {
    "id": 20398,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Para qué tipo de cargas de trabajo está optimizada la Serie N de máquinas virtuales de Azure?",
    "options": [
      "Bases de datos empresariales de gran tamaño con mucha memoria",
      "Cargas de trabajo de aprendizaje e inferencia de IA y procesamiento de gráficos (GPU habilitada)",
      "Servidores web y aplicaciones de uso general",
      "Almacenamiento y procesamiento de datos de alto rendimiento"
    ],
    "correctAnswer": "Cargas de trabajo de aprendizaje e inferencia de IA y procesamiento de gráficos (GPU habilitada)",
    "explaination": "La Serie N está diseñada para cargas de trabajo que requieren GPU, como el aprendizaje automático, la inferencia de inteligencia artificial y el procesamiento de gráficos avanzados. Es la familia adecuada cuando se necesita poder de cómputo de GPU en lugar de solo CPU.",
    "difficulty": "medium"
  },
  {
    "id": 20399,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué familia de máquinas virtuales de Azure está orientada a cargas de trabajo elásticas y económicas, como desarrollo y pruebas con picos de CPU ocasionales?",
    "options": [
      "Serie D",
      "Serie M",
      "Serie B",
      "Serie F"
    ],
    "correctAnswer": "Serie B",
    "explaination": "La Serie B es elástica y económica, diseñada para cargas de trabajo de desarrollo y pruebas con picos de CPU ocasionales. Permite acumular créditos de CPU cuando la VM usa menos recursos y utilizarlos durante picos de demanda, siendo una opción rentable para cargas de trabajo intermitentes.",
    "difficulty": "medium"
  },
  {
    "id": 20400,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Para qué tipo de carga de trabajo está diseñada la Serie E de máquinas virtuales de Azure?",
    "options": [
      "Cargas de trabajo intensivas en CPU como compilación de código",
      "Almacenamiento y procesamiento de datos de alto rendimiento",
      "Bases de datos en memoria y cargas de trabajo de análisis (optimización de memoria)",
      "Servidores web con tráfico moderado y uso general"
    ],
    "correctAnswer": "Bases de datos en memoria y cargas de trabajo de análisis (optimización de memoria)",
    "explaination": "La Serie E está optimizada para memoria y es ideal para bases de datos en memoria y cargas de trabajo de análisis intensivo en RAM, como SAP HANA u otras aplicaciones que requieren grandes cantidades de memoria para operar eficientemente.",
    "difficulty": "medium"
  },
  {
    "id": 20401,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué indica la letra 's' en el nombre de tamaño de VM 'Standard_D2s_v5'?",
    "options": [
      "Que la VM tiene soporte para sistemas operativos de servidor (server)",
      "Que la VM admite almacenamiento SSD Premium",
      "Que la VM tiene una capacidad de almacenamiento especial (storage)",
      "Que la VM está en modo de espera (standby) para escalado automático"
    ],
    "correctAnswer": "Que la VM admite almacenamiento SSD Premium",
    "explaination": "En la nomenclatura de Azure VMs, la letra 's' en el nombre indica que el tamaño admite almacenamiento SSD Premium (discos administrados Premium). Esto es importante para cargas de trabajo que requieren alto rendimiento de E/S en disco.",
    "difficulty": "hard"
  },
  {
    "id": 20402,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué indica el número '2' en el nombre de tamaño de VM 'Standard_D2s_v5'?",
    "options": [
      "La cantidad de discos de datos que puede tener la VM",
      "La generación de hardware de la plataforma",
      "El número de vCPUs del tamaño",
      "La cantidad de gigabytes de RAM incluidos"
    ],
    "correctAnswer": "El número de vCPUs del tamaño",
    "explaination": "En la nomenclatura de tamaños de Azure VMs, el número que sigue a la letra de familia indica la cantidad de vCPUs. En 'Standard_D2s_v5', el '2' significa que este tamaño tiene 2 CPU virtuales (vCPU).",
    "difficulty": "medium"
  },
  {
    "id": 20403,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué indica 'v5' en el nombre de tamaño de VM 'Standard_D2s_v5'?",
    "options": [
      "La quinta versión del sistema operativo compatible",
      "La generación de hardware de la familia de VMs",
      "El nivel de rendimiento de red de la VM",
      "La cantidad de versiones de imagen disponibles"
    ],
    "correctAnswer": "La generación de hardware de la familia de VMs",
    "explaination": "El sufijo 'v5' en el nombre indica la generación de hardware de esa familia de máquinas virtuales. Las generaciones más recientes suelen ofrecer mejor rendimiento de línea base. En 'Standard_D2s_v5', 'v5' indica que se trata de la quinta generación de la familia D.",
    "difficulty": "hard"
  },
  {
    "id": 20404,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué dimensión de una VM de Azure afecta a la capacidad de proceso para cargas de trabajo simultáneas y enlazadas a CPU?",
    "options": [
      "La configuración del disco (IOPS)",
      "La cantidad de RAM",
      "El recuento de vCPUs",
      "El rendimiento de red"
    ],
    "correctAnswer": "El recuento de vCPUs",
    "explaination": "El recuento de vCPUs (CPUs virtuales) afecta directamente a la capacidad de proceso para cargas de trabajo simultáneas y enlazadas a CPU. A mayor número de vCPUs, mayor capacidad para procesar múltiples tareas en paralelo.",
    "difficulty": "easy"
  },
  {
    "id": 20405,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué dimensión de una VM de Azure afecta a la cantidad de datos de trabajo que la máquina virtual puede mantener activos?",
    "options": [
      "El recuento de vCPUs",
      "La RAM",
      "La configuración del disco",
      "La compatibilidad con SSD Premium"
    ],
    "correctAnswer": "La RAM",
    "explaination": "La RAM (memoria de acceso aleatorio) afecta a la cantidad de datos de trabajo que la máquina virtual puede mantener en memoria de forma activa. Más RAM permite manejar conjuntos de datos más grandes en memoria, reduciendo la necesidad de acceder a disco y mejorando el rendimiento.",
    "difficulty": "easy"
  },
  {
    "id": 20406,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué dimensión de una VM de Azure afecta a la capacidad de almacenamiento, las IOPS y el rendimiento de lectura/escritura?",
    "options": [
      "El recuento de vCPUs",
      "La RAM",
      "La configuración del disco",
      "La generación de hardware"
    ],
    "correctAnswer": "La configuración del disco",
    "explaination": "La configuración del disco afecta a la capacidad total de almacenamiento, las IOPS (operaciones de entrada/salida por segundo) y el rendimiento de lectura/escritura. Elegir entre HDD estándar, SSD estándar o SSD Premium impacta directamente en el desempeño de las aplicaciones con E/S intensiva.",
    "difficulty": "easy"
  },
  {
    "id": 20407,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué son los conjuntos de escalado de máquinas virtuales (VM Scale Sets) en Azure?",
    "options": [
      "Grupos de VMs con diferentes configuraciones para comparar rendimiento",
      "Herramientas para aumentar manualmente el tamaño de disco de las VMs",
      "Grupos de máquinas virtuales idénticas con equilibrio de carga que pueden escalar automáticamente",
      "Colecciones de snapshots de VMs para recuperación ante desastres"
    ],
    "correctAnswer": "Grupos de máquinas virtuales idénticas con equilibrio de carga que pueden escalar automáticamente",
    "explaination": "Los conjuntos de escalado de máquinas virtuales permiten crear y administrar grupos de VMs idénticas con equilibrio de carga. Centralizan la configuración, pueden escalar automáticamente según la demanda o los horarios, y se integran con el equilibrio de carga para distribuir el tráfico eficazmente.",
    "difficulty": "medium"
  },
  {
    "id": 20408,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué problema resuelven los conjuntos de escalado frente a la administración manual de múltiples VMs?",
    "options": [
      "Eliminan la necesidad de configurar redes virtuales para las VMs",
      "Evitan tener que mantener manualmente la coherencia de configuración, supervisar la utilización y ajustar instancias",
      "Proporcionan licencias de sistema operativo gratuitas para todas las instancias",
      "Garantizan que las VMs nunca necesiten actualizaciones de parches de seguridad"
    ],
    "correctAnswer": "Evitan tener que mantener manualmente la coherencia de configuración, supervisar la utilización y ajustar instancias",
    "explaination": "Sin conjuntos de escalado, se debe mantener manualmente la coherencia de configuración entre VMs, supervisar su utilización y ajustar la cantidad de instancias. Los conjuntos de escalado centralizan todo esto, automatizando el escalado según la demanda.",
    "difficulty": "medium"
  },
  {
    "id": 20409,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es el propósito principal de los conjuntos de disponibilidad de máquinas virtuales en Azure?",
    "options": [
      "Aumentar el rendimiento de las VMs distribuyéndolas en múltiples regiones",
      "Mejorar la resistencia de las VMs dentro de una región, reduciendo la probabilidad de que todas sean afectadas por un mismo evento",
      "Permitir el escalado automático de VMs basado en métricas de CPU y memoria",
      "Agrupar VMs por proyecto para facilitar la facturación y el control de costos"
    ],
    "correctAnswer": "Mejorar la resistencia de las VMs dentro de una región, reduciendo la probabilidad de que todas sean afectadas por un mismo evento",
    "explaination": "Los conjuntos de disponibilidad mejoran la resistencia de las máquinas virtuales dentro de una región. Reducen la posibilidad de que todas las VMs se vean afectadas simultáneamente por un evento de mantenimiento o un error de hardware, garantizando mayor disponibilidad del servicio.",
    "difficulty": "medium"
  },
  {
    "id": 20410,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es un dominio de actualización (update domain) en el contexto de los conjuntos de disponibilidad?",
    "options": [
      "Un grupo de VMs que comparten el mismo hardware físico y fuente de alimentación",
      "Una agrupación de VMs que pueden reiniciarse juntas durante el mantenimiento planeado",
      "Un conjunto de VMs en la misma región geográfica que se actualizan simultáneamente",
      "Una zona de red aislada donde se aplican actualizaciones de seguridad"
    ],
    "correctAnswer": "Una agrupación de VMs que pueden reiniciarse juntas durante el mantenimiento planeado",
    "explaination": "Un dominio de actualización agrupa máquinas virtuales que pueden reiniciarse juntas durante el mantenimiento planeado. Azure se asegura de que no todos los dominios de actualización se reinicien al mismo tiempo, garantizando que siempre haya VMs disponibles durante el mantenimiento.",
    "difficulty": "hard"
  },
  {
    "id": 20411,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es un dominio de error (fault domain) en el contexto de los conjuntos de disponibilidad?",
    "options": [
      "Un grupo de VMs que se reinician durante el mantenimiento planeado de Azure",
      "Una agrupación de VMs que comparten un posible punto común de fallo de alimentación o red",
      "Una región de Azure que ha experimentado interrupciones frecuentes",
      "Un tipo de VM diseñada específicamente para detectar y reportar errores de hardware"
    ],
    "correctAnswer": "Una agrupación de VMs que comparten un posible punto común de fallo de alimentación o red",
    "explaination": "Un dominio de error agrupa máquinas virtuales que comparten un posible punto de fallo común, como la fuente de alimentación o el switch de red. Al distribuir VMs entre múltiples dominios de error, se garantiza que un fallo de hardware no derribe todas las instancias simultáneamente.",
    "difficulty": "hard"
  },
  {
    "id": 20412,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Los conjuntos de disponibilidad tienen algún costo adicional en Azure?",
    "options": [
      "Sí, tienen un costo fijo mensual independientemente del número de VMs",
      "Sí, se cobra una tarifa por hora por cada dominio de actualización configurado",
      "No, los conjuntos de disponibilidad no agregan costo; solo se paga por las instancias de VM",
      "Solo tienen costo cuando se usan con más de 5 máquinas virtuales"
    ],
    "correctAnswer": "No, los conjuntos de disponibilidad no agregan costo; solo se paga por las instancias de VM",
    "explaination": "Los propios conjuntos de disponibilidad no agregan costo adicional. Solo se paga por las instancias de máquina virtual incluidas en el conjunto. Esto los convierte en una forma económica de mejorar la resiliencia de las aplicaciones.",
    "difficulty": "easy"
  },
  {
    "id": 20413,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuándo se prefieren los diseños basados en Zonas de disponibilidad frente a los conjuntos de disponibilidad?",
    "options": [
      "Cuando se necesita escalar automáticamente según la demanda de CPU",
      "En regiones que admiten Zonas de disponibilidad, ya que proporcionan un aislamiento de error más amplio",
      "Cuando el presupuesto es limitado y se busca la opción más económica",
      "Cuando todas las VMs deben estar en el mismo edificio del centro de datos"
    ],
    "correctAnswer": "En regiones que admiten Zonas de disponibilidad, ya que proporcionan un aislamiento de error más amplio",
    "explaination": "En las regiones que admiten Zonas de disponibilidad, a menudo se prefieren los diseños basados en zonas porque proporcionan un aislamiento de error más amplio que los conjuntos de disponibilidad. Las zonas separan físicamente los centros de datos dentro de una región, ofreciendo mayor resiliencia.",
    "difficulty": "hard"
  },
  {
    "id": 20414,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué familia de máquinas virtuales de Azure está orientada al uso general, como servidores web y aplicaciones pequeñas a medianas?",
    "options": [
      "Serie N",
      "Serie L",
      "Serie M",
      "Serie D"
    ],
    "correctAnswer": "Serie D",
    "explaination": "La Serie D está diseñada para uso general y es adecuada para servidores web y servidores de aplicaciones pequeños a medianos. Ofrece un balance equilibrado entre CPU, memoria y almacenamiento temporal, siendo la familia más versátil para cargas de trabajo comunes.",
    "difficulty": "medium"
  },
  {
    "id": 20415,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Para qué tipo de carga de trabajo está diseñada la Serie F de máquinas virtuales de Azure?",
    "options": [
      "Bases de datos empresariales de gran tamaño que requieren mucha memoria",
      "Niveles de aplicaciones intensivos en CPU (optimización informática)",
      "Cargas de trabajo de GPU para inteligencia artificial y gráficos",
      "Almacenamiento y procesamiento de datos de alto rendimiento con muchos IOPS"
    ],
    "correctAnswer": "Niveles de aplicaciones intensivos en CPU (optimización informática)",
    "explaination": "La Serie F está optimizada para cómputo y es ideal para niveles de aplicaciones intensivos en CPU, como procesamiento por lotes, servidores de juegos, servidores de aplicaciones y procesamiento analítico. Ofrece una alta proporción de CPU por unidad de memoria.",
    "difficulty": "medium"
  },
  {
    "id": 20416,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Para qué está diseñada la Serie L de máquinas virtuales de Azure?",
    "options": [
      "Cargas de trabajo ligeras con bajo consumo de CPU y memoria",
      "Bases de datos de gran tamaño que requieren máxima cantidad de RAM",
      "Almacenamiento y procesamiento de datos de alto rendimiento",
      "Cargas de trabajo de aprendizaje automático con requisitos de GPU"
    ],
    "correctAnswer": "Almacenamiento y procesamiento de datos de alto rendimiento",
    "explaination": "La Serie L está optimizada para almacenamiento y es ideal para cargas de trabajo que requieren alto rendimiento en operaciones de almacenamiento, como bases de datos NoSQL (Cassandra, MongoDB), almacenes de datos y otras aplicaciones que dependen de un alto rendimiento de disco con latencia baja.",
    "difficulty": "medium"
  },
  {
    "id": 20417,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es el caso de uso más apropiado para la Serie M de máquinas virtuales de Azure?",
    "options": [
      "Aplicaciones móviles con muchos usuarios concurrentes",
      "Bases de datos empresariales de gran tamaño que requieren enorme cantidad de memoria",
      "Cargas de trabajo de machine learning con procesamiento masivo en GPU",
      "Microservicios con alta demanda de CPU y bajo uso de memoria"
    ],
    "correctAnswer": "Bases de datos empresariales de gran tamaño que requieren enorme cantidad de memoria",
    "explaination": "La Serie M está diseñada para uso de memoria grande y es ideal para bases de datos empresariales de gran tamaño como SAP HANA, que requieren cantidades masivas de RAM (hasta varios TB). Es la familia adecuada para las cargas de trabajo más exigentes en términos de memoria.",
    "difficulty": "medium"
  },
  {
    "id": 20418,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué ventaja ofrece el hospedaje de aplicaciones en la nube con Azure Virtual Machines respecto a un servidor físico propio?",
    "options": [
      "Las aplicaciones se ejecutan sin necesidad de un sistema operativo",
      "Se puede escalar o reducir verticalmente la capacidad a medida que cambia la demanda",
      "Las aplicaciones no necesitan actualizaciones de seguridad",
      "El rendimiento es siempre constante sin importar la carga de trabajo"
    ],
    "correctAnswer": "Se puede escalar o reducir verticalmente la capacidad a medida que cambia la demanda",
    "explaination": "Una de las principales ventajas del hospedaje de aplicaciones con Azure VMs es la capacidad de escalar o reducir verticalmente la capacidad según la demanda. Esto permite pagar solo por los recursos necesarios en cada momento, algo imposible de lograr con un servidor físico fijo.",
    "difficulty": "easy"
  },
  {
    "id": 20419,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué responsabilidades conserva el cliente al usar Azure Virtual Machines como servicio IaaS?",
    "options": [
      "Ninguna, Azure se encarga de todo incluyendo el sistema operativo y las aplicaciones",
      "Solo la configuración de red, Azure gestiona el sistema operativo",
      "La gestión de parches, actualizaciones y configuración dentro de la máquina virtual",
      "Solo el despliegue inicial; Azure gestiona el mantenimiento posterior"
    ],
    "correctAnswer": "La gestión de parches, actualizaciones y configuración dentro de la máquina virtual",
    "explaination": "Como servicio IaaS, el cliente sigue siendo responsable de gestionar los parches de seguridad, las actualizaciones del sistema operativo y el software, y la configuración dentro de la máquina virtual. Azure gestiona la infraestructura física subyacente, pero no el contenido de la VM.",
    "difficulty": "medium"
  },
  {
    "id": 20420,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es la estrategia correcta para seleccionar el tamaño de una máquina virtual de Azure según el módulo de Microsoft Learn?",
    "options": [
      "Elegir siempre el tamaño más grande disponible para garantizar rendimiento futuro",
      "Seleccionar la familia que coincida con el comportamiento de la carga de trabajo y luego elegir el tamaño que satisfaga las necesidades de rendimiento",
      "Comenzar con el tamaño más pequeño y cambiarlo solo si la VM se apaga inesperadamente",
      "Elegir el tamaño más económico sin importar los requisitos de la carga de trabajo"
    ],
    "correctAnswer": "Seleccionar la familia que coincida con el comportamiento de la carga de trabajo y luego elegir el tamaño que satisfaga las necesidades de rendimiento",
    "explaination": "Según el módulo, la estrategia correcta es: primero seleccionar una familia que coincida con el comportamiento de la carga de trabajo (uso general, optimizada para memoria, para cómputo, etc.) y luego elegir el tamaño específico dentro de esa familia que satisfaga las necesidades de rendimiento, escalando según crece la demanda.",
    "difficulty": "medium"
  }
]; 

// ─────────────────────────────────────────────
// azure container instances (20420-20450)
// ─────────────────────────────────────────────
export const azureContainerInstancesQuestions: Question[] = [
  {
    "id": 20421,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué es Azure Virtual Desktop?",
    "options": [
      "Un servicio de máquinas virtuales para ejecutar cargas de trabajo de servidor en Azure",
      "Un servicio de virtualización de aplicaciones y de escritorio en Azure",
      "Una herramienta de administración remota de servidores Windows en centros de datos locales",
      "Un sistema operativo en la nube exclusivo para dispositivos Surface de Microsoft"
    ],
    "correctAnswer": "Un servicio de virtualización de aplicaciones y de escritorio en Azure",
    "explaination": "Azure Virtual Desktop es un servicio de virtualización de aplicaciones y de escritorio en Azure. Permite a los usuarios acceder de forma segura a escritorios y aplicaciones de Windows desde muchos tipos de dispositivos y ubicaciones.",
    "difficulty": "easy"
  },
  {
    "id": 20422,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Dónde residen los escritorios y las aplicaciones en Azure Virtual Desktop?",
    "options": [
      "En los dispositivos locales de cada usuario",
      "En servidores físicos ubicados en las oficinas de la organización",
      "En la nube, en lugar de en dispositivos locales",
      "En discos duros externos conectados a los equipos de los usuarios"
    ],
    "correctAnswer": "En la nube, en lugar de en dispositivos locales",
    "explaination": "En Azure Virtual Desktop los escritorios y las aplicaciones permanecen en la nube en lugar de en dispositivos locales. Es una opción administrada para el acceso a Escritorio remoto donde toda la sesión se ejecuta en Azure.",
    "difficulty": "easy"
  },
  {
    "id": 20423,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cómo se describe Azure Virtual Desktop en su nivel más fundamental?",
    "options": [
      "Una plataforma de desarrollo de aplicaciones web hospedadas en Azure",
      "Una opción administrada para el acceso a Escritorio remoto con escritorios y aplicaciones en la nube",
      "Un sistema de copias de seguridad automáticas para escritorios físicos empresariales",
      "Un servicio de streaming de video optimizado para aplicaciones de productividad"
    ],
    "correctAnswer": "Una opción administrada para el acceso a Escritorio remoto con escritorios y aplicaciones en la nube",
    "explaination": "A nivel fundamental, Azure Virtual Desktop es una opción administrada para el acceso a Escritorio remoto donde los escritorios y las aplicaciones permanecen en la nube en lugar de en dispositivos locales, gestionada por Microsoft como servicio.",
    "difficulty": "easy"
  },
  {
    "id": 20424,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Desde qué tipos de dispositivos pueden los usuarios acceder a Azure Virtual Desktop?",
    "options": [
      "Únicamente desde equipos de escritorio con Windows 11",
      "Solo desde dispositivos corporativos administrados por la organización",
      "Desde muchos tipos de dispositivos y ubicaciones de forma segura",
      "Solo desde equipos con el cliente de Escritorio remoto de Microsoft instalado"
    ],
    "correctAnswer": "Desde muchos tipos de dispositivos y ubicaciones de forma segura",
    "explaination": "Azure Virtual Desktop permite a los usuarios acceder de forma segura a escritorios y aplicaciones de Windows desde muchos tipos de dispositivos y ubicaciones, incluyendo equipos de escritorio, portátiles, tabletas y smartphones, independientemente del sistema operativo del dispositivo cliente.",
    "difficulty": "easy"
  },
  {
    "id": 20425,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Con qué servicio de identidad se integra Azure Virtual Desktop para los controles de identidad y acceso?",
    "options": [
      "Active Directory local (AD DS)",
      "Microsoft Entra ID (anteriormente Azure Active Directory)",
      "LDAP genérico de terceros",
      "Azure Key Vault"
    ],
    "correctAnswer": "Microsoft Entra ID (anteriormente Azure Active Directory)",
    "explaination": "Azure Virtual Desktop centraliza la entrega de aplicaciones y escritorio en Azure y se integra con Microsoft Entra ID (anteriormente conocido como Azure Active Directory) para los controles de identidad y acceso, proporcionando autenticación segura y gestión de identidades.",
    "difficulty": "easy"
  },
  {
    "id": 20426,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es uno de los beneficios de seguridad clave de Azure Virtual Desktop respecto a los datos?",
    "options": [
      "Cifra automáticamente todos los datos almacenados en los dispositivos locales de los usuarios",
      "Ayuda a reducir la exposición de datos en dispositivos locales porque aplicaciones y datos pueden permanecer en sesiones hospedadas en Azure",
      "Impide que los usuarios descarguen cualquier archivo desde Internet",
      "Realiza análisis de amenazas en tiempo real en cada dispositivo cliente conectado"
    ],
    "correctAnswer": "Ayuda a reducir la exposición de datos en dispositivos locales porque aplicaciones y datos pueden permanecer en sesiones hospedadas en Azure",
    "explaination": "Un beneficio clave de seguridad es que Azure Virtual Desktop ayuda a reducir la exposición de datos en dispositivos locales, ya que las aplicaciones y los datos pueden permanecer en sesiones hospedadas en Azure. Si el dispositivo del usuario es robado o comprometido, los datos corporativos no están almacenados en él.",
    "difficulty": "medium"
  },
  {
    "id": 20427,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué tipo de experiencias de Windows admite Azure Virtual Desktop?",
    "options": [
      "Solo experiencias de sesión única por usuario",
      "Solo experiencias de múltiples sesiones compartidas por todos los usuarios",
      "Experiencias de Windows de sesión única y de varias sesiones, según las necesidades",
      "Únicamente experiencias de Windows Server, no Windows de escritorio"
    ],
    "correctAnswer": "Experiencias de Windows de sesión única y de varias sesiones, según las necesidades",
    "explaination": "Azure Virtual Desktop admite tanto experiencias de Windows de sesión única (un usuario por máquina virtual) como de varias sesiones (múltiples usuarios en una misma VM), en función de las necesidades del usuario y la carga de trabajo, lo que lo hace flexible para diferentes escenarios.",
    "difficulty": "medium"
  },
  {
    "id": 20428,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Para qué escenario de usuarios está especialmente recomendado Azure Virtual Desktop?",
    "options": [
      "Desarrolladores de software que necesitan entornos aislados con máxima personalización",
      "Usuarios distribuidos, contratistas o trabajadores híbridos que necesitan acceso centralizado a escritorios y aplicaciones",
      "Administradores de bases de datos que requieren acceso de baja latencia a instancias SQL locales",
      "Diseñadores gráficos que necesitan alto rendimiento de GPU para renderizado local"
    ],
    "correctAnswer": "Usuarios distribuidos, contratistas o trabajadores híbridos que necesitan acceso centralizado a escritorios y aplicaciones",
    "explaination": "Azure Virtual Desktop es ideal cuando un equipo necesita acceso centralizado a escritorios y aplicaciones entre usuarios distribuidos, contratistas o trabajadores híbridos. Centraliza la administración mientras permite el acceso remoto seguro desde cualquier lugar.",
    "difficulty": "medium"
  },
  {
    "id": 20429,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué ventaja ofrece Azure Virtual Desktop para equipos de soporte técnico con múltiples turnos?",
    "options": [
      "Cada agente puede personalizar su entorno de escritorio de forma independiente sin afectar a otros",
      "Cada turno tiene las mismas herramientas, directivas de acceso y controles de seguridad en escritorios estandarizados",
      "Los agentes de soporte pueden acceder a los equipos físicos de los usuarios de forma remota sin VPN",
      "Permite grabar automáticamente todas las sesiones de soporte para auditoría"
    ],
    "correctAnswer": "Cada turno tiene las mismas herramientas, directivas de acceso y controles de seguridad en escritorios estandarizados",
    "explaination": "Un ejemplo de uso mencionado en el módulo es el equipo de soporte técnico que usa escritorios estandarizados hospedados en la nube, garantizando que cada turno tenga las mismas herramientas, directivas de acceso y controles de seguridad, lo que simplifica la gestión y asegura la coherencia.",
    "difficulty": "medium"
  },
  {
    "id": 20430,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Por qué Azure Virtual Desktop suele ser más fácil de operar que crear entornos de escritorio basados en VMs individuales para cada grupo de usuarios?",
    "options": [
      "Porque Azure Virtual Desktop no requiere ninguna configuración inicial",
      "Porque proporciona administración centralizada de la experiencia de escritorio completa para muchos usuarios",
      "Porque elimina completamente la necesidad de licencias de Windows para los usuarios",
      "Porque funciona sin conexión a Internet en todos los dispositivos cliente"
    ],
    "correctAnswer": "Porque proporciona administración centralizada de la experiencia de escritorio completa para muchos usuarios",
    "explaination": "Cuando se necesita una experiencia de escritorio completa para muchos usuarios, Azure Virtual Desktop suele ser más fácil de operar que crear entornos de escritorio independientes basados en VMs para cada grupo, gracias a su administración centralizada de escritorios, aplicaciones, políticas y seguridad.",
    "difficulty": "medium"
  },
  {
    "id": 20431,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué centraliza Azure Virtual Desktop en Azure?",
    "options": [
      "La facturación de todos los servicios de la organización en una sola suscripción",
      "La entrega de aplicaciones y de escritorio, integrándose con Microsoft Entra ID",
      "El almacenamiento de datos corporativos en un repositorio único cifrado",
      "La gestión de licencias de software de Microsoft para todos los usuarios"
    ],
    "correctAnswer": "La entrega de aplicaciones y de escritorio, integrándose con Microsoft Entra ID",
    "explaination": "Azure Virtual Desktop centraliza la entrega de aplicaciones y de escritorio en Azure, integrándose con Microsoft Entra ID para los controles de identidad y acceso. Esta centralización permite gestionar de forma unificada quién puede acceder a qué aplicaciones y escritorios.",
    "difficulty": "easy"
  },
  {
    "id": 20432,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué tipo de servicio es Azure Virtual Desktop en cuanto a su modelo de administración?",
    "options": [
      "Un servicio no administrado que requiere que el cliente gestione toda la infraestructura subyacente",
      "Un servicio administrado (managed service) donde Microsoft gestiona la infraestructura de la plataforma",
      "Un servicio de código abierto administrado por la comunidad de Azure",
      "Un servicio exclusivo para organizaciones con más de 500 usuarios"
    ],
    "correctAnswer": "Un servicio administrado (managed service) donde Microsoft gestiona la infraestructura de la plataforma",
    "explaination": "Azure Virtual Desktop es una opción administrada (managed service) para el acceso a Escritorio remoto. Microsoft gestiona la infraestructura de la plataforma subyacente, lo que reduce la carga operativa del equipo de TI de la organización.",
    "difficulty": "medium"
  },
  {
    "id": 20433,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es la diferencia principal entre Azure Virtual Desktop y una máquina virtual estándar de Azure en términos del uso final?",
    "options": [
      "Las VMs estándar tienen mayor rendimiento que Azure Virtual Desktop",
      "Azure Virtual Desktop está diseñado para proporcionar escritorios y aplicaciones a usuarios finales de forma centralizada, mientras que las VMs se usan típicamente para cargas de trabajo de servidor",
      "Las VMs estándar admiten múltiples usuarios simultáneos y Azure Virtual Desktop solo uno",
      "No hay diferencia relevante, ambos servicios son equivalentes para cualquier caso de uso"
    ],
    "correctAnswer": "Azure Virtual Desktop está diseñado para proporcionar escritorios y aplicaciones a usuarios finales de forma centralizada, mientras que las VMs se usan típicamente para cargas de trabajo de servidor",
    "explaination": "Aunque ambos usan virtualización, Azure Virtual Desktop está específicamente diseñado para la entrega centralizada de escritorios y aplicaciones a usuarios finales (VDI), con integración de identidad, soporte multi-sesión y administración orientada al usuario. Las VMs estándar de Azure están orientadas a cargas de trabajo de servidor e infraestructura.",
    "difficulty": "hard"
  },
  {
    "id": 20434,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué beneficio aporta la integración de Azure Virtual Desktop con Microsoft Entra ID?",
    "options": [
      "Permite usar el servicio sin necesidad de credenciales de usuario",
      "Proporciona controles de identidad y acceso para gestionar quién puede conectarse y a qué recursos",
      "Elimina la necesidad de usar contraseñas en los escritorios virtuales",
      "Garantiza que todos los usuarios tengan acceso de administrador en sus escritorios"
    ],
    "correctAnswer": "Proporciona controles de identidad y acceso para gestionar quién puede conectarse y a qué recursos",
    "explaination": "La integración con Microsoft Entra ID proporciona controles de identidad y acceso, permitiendo gestionar de forma segura quién puede conectarse a los escritorios virtuales, con soporte para autenticación multifactor (MFA), acceso condicional y políticas de seguridad empresariales.",
    "difficulty": "medium"
  },
  {
    "id": 20435,
    "categoryId": "azure-management-infrastructure",
    "text": "¿En qué situación la opción de varias sesiones de Azure Virtual Desktop es más apropiada que la de sesión única?",
    "options": [
      "Cuando cada usuario necesita un entorno completamente personalizado e independiente",
      "Cuando se quiere maximizar la eficiencia de recursos permitiendo que múltiples usuarios compartan una misma VM",
      "Cuando los usuarios ejecutan aplicaciones con alta demanda de GPU",
      "Cuando se requiere el máximo aislamiento entre sesiones de usuarios diferentes"
    ],
    "correctAnswer": "Cuando se quiere maximizar la eficiencia de recursos permitiendo que múltiples usuarios compartan una misma VM",
    "explaination": "La experiencia de varias sesiones es más apropiada cuando se busca maximizar la eficiencia de recursos, permitiendo que múltiples usuarios compartan una misma máquina virtual simultáneamente. Es ideal para usuarios que realizan tareas de productividad similares y no requieren recursos dedicados exclusivos.",
    "difficulty": "hard"
  },
  {
    "id": 20436,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué riesgo de seguridad específico ayuda a mitigar Azure Virtual Desktop al mantener datos en sesiones hospedadas en Azure?",
    "options": [
      "El riesgo de ataques de denegación de servicio (DDoS) contra los servidores de la organización",
      "La exposición de datos corporativos en dispositivos locales ante pérdida, robo o compromiso del dispositivo",
      "El riesgo de que aplicaciones maliciosas se instalen en los servidores de Azure",
      "La posibilidad de que usuarios no autorizados accedan a los centros de datos de Microsoft"
    ],
    "correctAnswer": "La exposición de datos corporativos en dispositivos locales ante pérdida, robo o compromiso del dispositivo",
    "explaination": "Al mantener las aplicaciones y los datos en sesiones hospedadas en Azure, se reduce la exposición en dispositivos locales. Si un dispositivo del usuario es perdido, robado o comprometido, los datos corporativos no están en él, ya que todo permanece en la sesión en la nube.",
    "difficulty": "medium"
  },
  {
    "id": 20437,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué tipo de acceso proporciona Azure Virtual Desktop a los usuarios finales?",
    "options": [
      "Acceso exclusivo a aplicaciones de línea de negocio sin escritorio completo",
      "Acceso seguro a escritorios y aplicaciones de Windows desde cualquier dispositivo y ubicación",
      "Acceso administrativo a la infraestructura de Azure de la organización",
      "Acceso de solo lectura a documentos almacenados en SharePoint Online"
    ],
    "correctAnswer": "Acceso seguro a escritorios y aplicaciones de Windows desde cualquier dispositivo y ubicación",
    "explaination": "Azure Virtual Desktop proporciona a los usuarios acceso seguro a escritorios y aplicaciones de Windows desde muchos tipos de dispositivos y ubicaciones, permitiendo trabajar desde cualquier lugar como si estuvieran frente a su equipo de oficina.",
    "difficulty": "easy"
  },
  {
    "id": 20438,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es una ventaja operativa de Azure Virtual Desktop sobre entornos de escritorio independientes basados en VMs para cada grupo de usuarios?",
    "options": [
      "Azure Virtual Desktop no requiere licencias de Windows para ningún usuario",
      "Es más fácil de operar porque centraliza la administración en lugar de gestionar VMs independientes por grupo",
      "Ofrece rendimiento de red superior porque evita el uso de Internet para las conexiones",
      "Permite instalar cualquier sistema operativo, no solo Windows"
    ],
    "correctAnswer": "Es más fácil de operar porque centraliza la administración en lugar de gestionar VMs independientes por grupo",
    "explaination": "Azure Virtual Desktop suele ser más fácil de operar que crear entornos de escritorio independientes basados en máquinas virtuales para cada grupo de usuarios, porque centraliza la administración: actualizaciones, políticas de seguridad, configuraciones y control de acceso se gestionan desde un único punto.",
    "difficulty": "medium"
  },
  {
    "id": 20439,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué perfil de usuario sería un candidato ideal para usar Azure Virtual Desktop según el módulo?",
    "options": [
      "Un desarrollador de software que necesita compilar aplicaciones con acceso a GPU local",
      "Un contratista externo que necesita acceso temporal y seguro a aplicaciones corporativas desde su propio dispositivo",
      "Un administrador de sistemas que gestiona servidores físicos en un centro de datos",
      "Un diseñador que trabaja con software de renderizado 3D intensivo en recursos locales"
    ],
    "correctAnswer": "Un contratista externo que necesita acceso temporal y seguro a aplicaciones corporativas desde su propio dispositivo",
    "explaination": "Los contratistas son un perfil ideal para Azure Virtual Desktop, ya que el módulo menciona explícitamente a usuarios distribuidos, contratistas y trabajadores híbridos. Un contratista puede acceder a las aplicaciones corporativas desde su propio dispositivo sin que los datos residan en él, y el acceso puede revocarse fácilmente al terminar el contrato.",
    "difficulty": "medium"
  },
  {
    "id": 20440,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué componente de Azure Virtual Desktop se muestra en el diagrama del módulo como punto central de conexión de los usuarios?",
    "options": [
      "Azure Load Balancer",
      "Un grupo de hosts (host pool) al que los usuarios se conectan a través de Microsoft Entra ID",
      "Una red virtual privada (VPN) de punto a sitio",
      "Azure Firewall que filtra las conexiones entrantes"
    ],
    "correctAnswer": "Un grupo de hosts (host pool) al que los usuarios se conectan a través de Microsoft Entra ID",
    "explaination": "El diagrama del módulo muestra usuarios que se conectan a través de Microsoft Entra ID a un grupo de hosts (host pool). El host pool es la colección de máquinas virtuales que ejecutan las sesiones de escritorio y aplicaciones en Azure Virtual Desktop.",
    "difficulty": "hard"
  },
  {
    "id": 20441,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué diferencia fundamental existe entre Azure Virtual Desktop y una solución tradicional de Escritorio remoto (RDS) on-premises?",
    "options": [
      "Azure Virtual Desktop solo admite Windows 10, mientras que RDS soporta cualquier versión de Windows",
      "En Azure Virtual Desktop la infraestructura está en la nube y es administrada por Microsoft, mientras que RDS on-premises requiere que la organización gestione sus propios servidores",
      "Azure Virtual Desktop no permite acceso desde Internet, solo desde redes privadas",
      "RDS es más seguro porque los datos nunca salen del centro de datos de la organización"
    ],
    "correctAnswer": "En Azure Virtual Desktop la infraestructura está en la nube y es administrada por Microsoft, mientras que RDS on-premises requiere que la organización gestione sus propios servidores",
    "explaination": "La diferencia fundamental es que Azure Virtual Desktop es un servicio administrado en la nube donde Microsoft gestiona la infraestructura subyacente. Una solución RDS tradicional on-premises requiere que la organización compre, instale, configure y mantenga sus propios servidores de Servicios de Escritorio remoto.",
    "difficulty": "hard"
  },
  {
    "id": 20442,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué significa que Azure Virtual Desktop sea una solución de 'escritorio estandarizado hospedado en la nube'?",
    "options": [
      "Que todos los usuarios reciben exactamente el mismo hardware virtual sin posibilidad de personalización",
      "Que los escritorios se configuran de forma uniforme en la nube, garantizando las mismas herramientas, políticas y controles para todos los usuarios que lo usan",
      "Que el escritorio está preconfigurado con todas las aplicaciones del mercado instaladas por defecto",
      "Que Microsoft elige la configuración del escritorio sin intervención del administrador de TI"
    ],
    "correctAnswer": "Que los escritorios se configuran de forma uniforme en la nube, garantizando las mismas herramientas, políticas y controles para todos los usuarios que lo usan",
    "explaination": "Un escritorio estandarizado hospedado en la nube significa que los administradores configuran de forma uniforme los entornos de escritorio en Azure, garantizando que todos los usuarios que acceden a ese pool tengan las mismas herramientas disponibles, las mismas directivas de acceso aplicadas y los mismos controles de seguridad, independientemente del dispositivo desde el que se conecten.",
    "difficulty": "medium"
  },
  {
    "id": 20443,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Por qué Azure Virtual Desktop es beneficioso para organizaciones con trabajadores híbridos?",
    "options": [
      "Porque permite a los trabajadores híbridos instalar cualquier software sin restricciones corporativas",
      "Porque garantiza que los trabajadores híbridos tengan acceso seguro y consistente a sus aplicaciones y escritorios tanto desde la oficina como desde casa u otras ubicaciones",
      "Porque elimina la necesidad de conexión a Internet para los trabajadores en la oficina",
      "Porque reduce el consumo de energía en los equipos físicos de la oficina al apagarse automáticamente"
    ],
    "correctAnswer": "Porque garantiza que los trabajadores híbridos tengan acceso seguro y consistente a sus aplicaciones y escritorios tanto desde la oficina como desde casa u otras ubicaciones",
    "explaination": "Para los trabajadores híbridos, Azure Virtual Desktop garantiza una experiencia consistente y segura independientemente de dónde trabajen. Al estar los escritorios y aplicaciones en la nube, el trabajador accede al mismo entorno desde la oficina, desde casa o desde cualquier otro lugar.",
    "difficulty": "easy"
  },
  {
    "id": 20444,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué característica de Azure Virtual Desktop lo hace más seguro que dar acceso VPN directo a los recursos corporativos?",
    "options": [
      "Azure Virtual Desktop no usa ningún tipo de cifrado en las comunicaciones",
      "Las aplicaciones y los datos permanecen en sesiones en Azure y no se transfieren al dispositivo local del usuario",
      "Azure Virtual Desktop permite acceso solo desde dispositivos con Windows 11 actualizados",
      "Solo los administradores con rol de Propietario en Azure pueden conectarse al servicio"
    ],
    "correctAnswer": "Las aplicaciones y los datos permanecen en sesiones en Azure y no se transfieren al dispositivo local del usuario",
    "explaination": "Una ventaja de seguridad clave frente a VPN es que con Azure Virtual Desktop las aplicaciones y los datos permanecen en sesiones hospedadas en Azure, sin transferirse al dispositivo local. Con VPN, los datos pueden descargarse al dispositivo del usuario, aumentando el riesgo de exposición.",
    "difficulty": "hard"
  },
  {
    "id": 20445,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué aspecto de la administración se simplifica especialmente cuando se usa Azure Virtual Desktop con múltiples turnos de trabajo?",
    "options": [
      "La gestión del hardware de los equipos físicos de cada turno",
      "La garantía de que cada turno usa las mismas herramientas, directivas y controles de seguridad en escritorios estandarizados",
      "La sincronización de archivos personales de cada empleado entre turnos",
      "La programación de los horarios de inicio y fin de turno de los empleados"
    ],
    "correctAnswer": "La garantía de que cada turno usa las mismas herramientas, directivas y controles de seguridad en escritorios estandarizados",
    "explaination": "En un escenario de múltiples turnos, Azure Virtual Desktop simplifica la administración al garantizar que cada turno acceda a los mismos escritorios estandarizados hospedados en la nube, con las mismas herramientas, directivas de acceso y controles de seguridad, sin necesidad de configurar equipos físicos para cada turno.",
    "difficulty": "medium"
  },
  {
    "id": 20446,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál de los siguientes puntos NO es un punto clave de Azure Virtual Desktop según el módulo de Microsoft Learn?",
    "options": [
      "Centraliza la entrega de aplicaciones y de escritorio en Azure",
      "Se integra con Microsoft Entra ID para controles de identidad y acceso",
      "Proporciona almacenamiento ilimitado de archivos para cada sesión de usuario",
      "Admite experiencias de Windows de sesión única y de varias sesiones"
    ],
    "correctAnswer": "Proporciona almacenamiento ilimitado de archivos para cada sesión de usuario",
    "explaination": "Los puntos clave del módulo son: centralizar la entrega de aplicaciones y escritorio en Azure con integración de Microsoft Entra ID, reducir la exposición de datos en dispositivos locales, y admitir experiencias de sesión única y varias sesiones. El almacenamiento ilimitado de archivos no se menciona como punto clave del servicio.",
    "difficulty": "medium"
  },
  {
    "id": 20447,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Qué tipo de experiencia de Windows es más adecuada para usuarios que requieren entornos completamente aislados y personalizados en Azure Virtual Desktop?",
    "options": [
      "Experiencia de varias sesiones, para compartir recursos de forma eficiente",
      "Experiencia de sesión única, donde cada usuario tiene su propia máquina virtual dedicada",
      "Experiencia de sesión compartida con particiones de memoria fijas por usuario",
      "Experiencia de contenedor, donde cada aplicación se ejecuta en su propio entorno aislado"
    ],
    "correctAnswer": "Experiencia de sesión única, donde cada usuario tiene su propia máquina virtual dedicada",
    "explaination": "La experiencia de sesión única es más adecuada para usuarios que requieren entornos completamente aislados y personalizados, ya que cada usuario tiene su propia máquina virtual dedicada. Esto proporciona mayor aislamiento y permite personalización completa del entorno, a costa de un mayor uso de recursos.",
    "difficulty": "medium"
  },
  {
    "id": 20448,
    "categoryId": "azure-management-infrastructure",
    "text": "¿A qué hace referencia el término 'grupo de hosts' (host pool) en el diagrama de Azure Virtual Desktop?",
    "options": [
      "Un grupo de administradores que gestionan el servicio de escritorio virtual",
      "La colección de máquinas virtuales en Azure que ejecutan las sesiones de escritorio y aplicaciones",
      "Un conjunto de dispositivos cliente autorizados para conectarse al servicio",
      "El grupo de reglas de firewall que protegen las conexiones de escritorio remoto"
    ],
    "correctAnswer": "La colección de máquinas virtuales en Azure que ejecutan las sesiones de escritorio y aplicaciones",
    "explaination": "El diagrama del módulo muestra usuarios conectándose a través de Microsoft Entra ID a un grupo de hosts (host pool). El host pool es la colección de máquinas virtuales en Azure que ejecutan las sesiones de escritorio virtual y aplicaciones a las que los usuarios se conectan remotamente.",
    "difficulty": "hard"
  },
  {
    "id": 20449,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál es la principal ventaja de Azure Virtual Desktop frente a soluciones VDI (Virtual Desktop Infrastructure) tradicionales administradas por la propia organización?",
    "options": [
      "Azure Virtual Desktop es completamente gratuito para todas las organizaciones",
      "Al ser un servicio administrado en la nube, reduce la carga de gestionar y mantener la infraestructura subyacente de VDI",
      "Azure Virtual Desktop solo requiere conexión a Internet de 1 Mbps para funcionar correctamente",
      "Permite acceder a escritorios sin necesidad de autenticación para mayor agilidad"
    ],
    "correctAnswer": "Al ser un servicio administrado en la nube, reduce la carga de gestionar y mantener la infraestructura subyacente de VDI",
    "explaination": "La ventaja principal frente a VDI tradicional es que Azure Virtual Desktop es un servicio administrado, lo que significa que Microsoft gestiona la infraestructura subyacente (servidores, red, disponibilidad del servicio). La organización no necesita comprar ni mantener hardware de VDI ni gestionar la plataforma.",
    "difficulty": "hard"
  },
  {
    "id": 20450,
    "categoryId": "azure-management-infrastructure",
    "text": "¿Cuál de las siguientes afirmaciones resume mejor los tres puntos clave de Azure Virtual Desktop según el módulo de Microsoft Learn?",
    "options": [
      "Es un servicio de pago por uso, solo disponible para empresas Fortune 500, con soporte técnico 24/7",
      "Centraliza la entrega de escritorios y apps con Entra ID, reduce exposición de datos en dispositivos locales y admite sesión única y múltiple",
      "Es una solución gratuita de código abierto, sin integración de identidad, orientada a pequeñas empresas",
      "Solo admite sesiones de un único usuario, requiere Windows 11 y no se integra con Active Directory"
    ],
    "correctAnswer": "Centraliza la entrega de escritorios y apps con Entra ID, reduce exposición de datos en dispositivos locales y admite sesión única y múltiple",
    "explaination": "Los tres puntos clave del módulo son: (1) centraliza la entrega de aplicaciones y escritorio en Azure con integración de Microsoft Entra ID para controles de identidad y acceso; (2) ayuda a reducir la exposición de datos en dispositivos locales al mantener aplicaciones y datos en sesiones hospedadas en Azure; y (3) admite experiencias de Windows de sesión única y de varias sesiones según las necesidades.",
    "difficulty": "medium"
  }
]; 

// ─────────────────────────────────────────────
// azure functions (20450-20480)
// ─────────────────────────────────────────────
export const azureFunctionsQuestions: Question[] = [
  
];

// ─────────────────────────────────────────────
// azure service ias (20450-20480)
// ─────────────────────────────────────────────
export const azureServiceIAQuestions: Question[] = [
  
]