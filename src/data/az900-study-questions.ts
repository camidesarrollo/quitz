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
// software-as-service  (20301-20300)
// ─────────────────────────────────────────────
export const azureAccountsQuestions: Question[] = [
{
    id: 20301,
    categoryId: "azure-accounts",
    text: "¿Qué se necesita principalmente para crear una cuenta de Azure?",
    options: [
      "Una cuenta de Microsoft",
      "Un servidor físico",
      "Una licencia de Windows Server",
      "Un dominio registrado"
    ],
    correctAnswer: "Una cuenta de Microsoft",
    explaination: "Azure utiliza una cuenta de Microsoft o una identidad organizacional para autenticar a los usuarios.",
    difficulty: "easy"
  },
  {
    id: 20302,
    categoryId: "azure-accounts",
    text: "¿Qué permite hacer una cuenta gratuita de Azure?",
    options: [
      "Acceder únicamente a máquinas virtuales",
      "Probar servicios de Azure con créditos y servicios gratuitos",
      "Crear solo cuentas de almacenamiento",
      "Administrar únicamente Microsoft 365"
    ],
    correctAnswer: "Probar servicios de Azure con créditos y servicios gratuitos",
    explaination: "La cuenta gratuita entrega créditos iniciales y algunos servicios gratuitos por tiempo limitado o permanente.",
    difficulty: "easy"
  },
  {
    id: 20303,
    categoryId: "azure-accounts",
    text: "¿Cuál es el propósito principal de una suscripción de Azure?",
    options: [
      "Almacenar archivos",
      "Administrar facturación y acceso a recursos",
      "Crear usuarios locales",
      "Ejecutar aplicaciones móviles"
    ],
    correctAnswer: "Administrar facturación y acceso a recursos",
    explaination: "Las suscripciones organizan recursos y controlan la facturación y permisos.",
    difficulty: "easy"
  },
  {
    id: 20304,
    categoryId: "azure-accounts",
    text: "¿Qué tipo de cuenta suele utilizar una empresa para acceder a Azure?",
    options: [
      "Cuenta Xbox",
      "Cuenta Hotmail temporal",
      "Cuenta organizacional de Microsoft Entra ID",
      "Cuenta FTP"
    ],
    correctAnswer: "Cuenta organizacional de Microsoft Entra ID",
    explaination: "Las organizaciones normalmente usan identidades administradas mediante Microsoft Entra ID.",
    difficulty: "easy"
  },
  {
    id: 20305,
    categoryId: "azure-accounts",
    text: "¿Qué recurso permite agrupar servicios dentro de una suscripción de Azure?",
    options: [
      "Grupo de recursos",
      "Directorio local",
      "Balanceador de carga",
      "Zona DNS"
    ],
    correctAnswer: "Grupo de recursos",
    explaination: "Los grupos de recursos organizan y administran recursos relacionados.",
    difficulty: "easy"
  },
  {
    id: 20306,
    categoryId: "azure-accounts",
    text: "¿Qué portal web se utiliza principalmente para administrar Azure?",
    options: [
      "Azure Portal",
      "Windows Admin Center",
      "Visual Studio",
      "Microsoft Teams"
    ],
    correctAnswer: "Azure Portal",
    explaination: "Azure Portal es la interfaz web principal para administrar recursos de Azure.",
    difficulty: "easy"
  },
  {
    id: 20307,
    categoryId: "azure-accounts",
    text: "¿Qué ocurre si una organización tiene varias suscripciones de Azure?",
    options: [
      "Todas comparten automáticamente la misma facturación",
      "No pueden compartir recursos",
      "Pueden administrarse de forma independiente",
      "Solo una puede estar activa"
    ],
    correctAnswer: "Pueden administrarse de forma independiente",
    explaination: "Cada suscripción puede tener configuraciones y facturación separadas.",
    difficulty: "medium"
  },
  {
    id: 20308,
    categoryId: "azure-accounts",
    text: "¿Qué servicio ayuda a administrar identidades y accesos en Azure?",
    options: [
      "Azure DevOps",
      "Microsoft Entra ID",
      "Azure Backup",
      "Azure Files"
    ],
    correctAnswer: "Microsoft Entra ID",
    explaination: "Microsoft Entra ID administra autenticación y control de acceso.",
    difficulty: "easy"
  },
  {
    id: 20309,
    categoryId: "azure-accounts",
    text: "¿Qué opción describe mejor un inquilino (tenant) en Azure?",
    options: [
      "Una máquina virtual",
      "Una instancia dedicada de Microsoft Entra ID",
      "Un servidor físico",
      "Una red privada"
    ],
    correctAnswer: "Una instancia dedicada de Microsoft Entra ID",
    explaination: "El tenant representa la organización dentro de Microsoft Entra ID.",
    difficulty: "medium"
  },
  {
    id: 20310,
    categoryId: "azure-accounts",
    text: "¿Cuál es una ventaja de usar múltiples grupos de recursos?",
    options: [
      "Eliminar la necesidad de suscripciones",
      "Organizar recursos según proyectos o departamentos",
      "Reducir automáticamente el consumo de CPU",
      "Duplicar máquinas virtuales"
    ],
    correctAnswer: "Organizar recursos según proyectos o departamentos",
    explaination: "Los grupos de recursos facilitan la administración y organización.",
    difficulty: "easy"
  },
  {
    id: 20311,
    categoryId: "azure-accounts",
    text: "¿Qué modelo de pago utiliza principalmente Azure?",
    options: [
      "Pago único permanente",
      "Pago por uso",
      "Pago anual obligatorio",
      "Licencia perpetua"
    ],
    correctAnswer: "Pago por uso",
    explaination: "Azure cobra principalmente según el consumo de recursos.",
    difficulty: "easy"
  },
  {
    id: 20312,
    categoryId: "azure-accounts",
    text: "¿Qué herramienta permite administrar Azure desde línea de comandos?",
    options: [
      "Azure CLI",
      "Bloc de notas",
      "Administrador de tareas",
      "Paint"
    ],
    correctAnswer: "Azure CLI",
    explaination: "Azure CLI permite administrar recursos mediante comandos.",
    difficulty: "easy"
  },
  {
    id: 20313,
    categoryId: "azure-accounts",
    text: "¿Qué tipo de acceso permite controlar quién puede administrar recursos en Azure?",
    options: [
      "RBAC",
      "SMTP",
      "FTP",
      "NAT"
    ],
    correctAnswer: "RBAC",
    explaination: "RBAC permite asignar permisos específicos según roles.",
    difficulty: "medium"
  },
  {
    id: 20314,
    categoryId: "azure-accounts",
    text: "¿Qué sucede cuando se elimina un grupo de recursos?",
    options: [
      "Solo se elimina el nombre del grupo",
      "Los recursos dentro del grupo también se eliminan",
      "La suscripción completa se elimina",
      "Los usuarios pierden acceso a internet"
    ],
    correctAnswer: "Los recursos dentro del grupo también se eliminan",
    explaination: "Eliminar un grupo de recursos elimina todos los recursos contenidos en él.",
    difficulty: "medium"
  },
  {
    id: 20315,
    categoryId: "azure-accounts",
    text: "¿Cuál es el objetivo principal de las etiquetas (tags) en Azure?",
    options: [
      "Aumentar la velocidad de red",
      "Clasificar y organizar recursos",
      "Crear máquinas virtuales",
      "Reducir automáticamente costos"
    ],
    correctAnswer: "Clasificar y organizar recursos",
    explaination: "Las etiquetas ayudan a organizar y administrar recursos mediante metadatos.",
    difficulty: "easy"
  },
  {
    id: 20316,
    categoryId: "azure-accounts",
    text: "¿Qué componente define límites de facturación y acceso en Azure?",
    options: [
      "La suscripción",
      "La máquina virtual",
      "El grupo de seguridad",
      "El disco administrado"
    ],
    correctAnswer: "La suscripción",
    explaination: "La suscripción actúa como límite administrativo y de facturación.",
    difficulty: "easy"
  },
  {
    id: 20317,
    categoryId: "azure-accounts",
    text: "¿Qué servicio se usa para crear alertas de costos en Azure?",
    options: [
      "Azure Cost Management",
      "Azure Boards",
      "Azure Kubernetes Service",
      "Azure DNS"
    ],
    correctAnswer: "Azure Cost Management",
    explaination: "Azure Cost Management ayuda a monitorear y controlar gastos.",
    difficulty: "medium"
  },
  {
    id: 20318,
    categoryId: "azure-accounts",
    text: "¿Qué usuario tiene normalmente control total sobre una suscripción?",
    options: [
      "Lector",
      "Colaborador",
      "Propietario",
      "Invitado"
    ],
    correctAnswer: "Propietario",
    explaination: "El rol Propietario posee control completo sobre los recursos.",
    difficulty: "medium"
  },
  {
    id: 20319,
    categoryId: "azure-accounts",
    text: "¿Qué ventaja ofrece Azure Portal?",
    options: [
      "Administración gráfica centralizada",
      "Crear hardware físico",
      "Instalar BIOS",
      "Configurar routers domésticos"
    ],
    correctAnswer: "Administración gráfica centralizada",
    explaination: "Azure Portal permite administrar servicios desde una interfaz web.",
    difficulty: "easy"
  },
  {
    id: 20320,
    categoryId: "azure-accounts",
    text: "¿Qué permite Azure Policy?",
    options: [
      "Crear videojuegos",
      "Aplicar reglas y estándares organizacionales",
      "Editar imágenes",
      "Administrar impresoras locales"
    ],
    correctAnswer: "Aplicar reglas y estándares organizacionales",
    explaination: "Azure Policy ayuda a mantener cumplimiento y gobernanza.",
    difficulty: "medium"
  },
  {
    id: 20321,
    categoryId: "azure-accounts",
    text: "¿Qué característica permite separar ambientes de desarrollo y producción en Azure?",
    options: [
      "Múltiples suscripciones o grupos de recursos",
      "Una sola máquina virtual",
      "Un único usuario administrador",
      "Uso exclusivo de almacenamiento"
    ],
    correctAnswer: "Múltiples suscripciones o grupos de recursos",
    explaination: "Separar ambientes mejora organización y seguridad.",
    difficulty: "medium"
  },
  {
    id: 20322,
    categoryId: "azure-accounts",
    text: "¿Qué opción permite acceder a Azure usando scripts automatizados?",
    options: [
      "Azure CLI y PowerShell",
      "Bloc de notas",
      "Microsoft Paint",
      "Explorador de archivos"
    ],
    correctAnswer: "Azure CLI y PowerShell",
    explaination: "Azure CLI y PowerShell permiten automatización y administración avanzada.",
    difficulty: "easy"
  },
  {
    id: 20323,
    categoryId: "azure-accounts",
    text: "¿Qué servicio permite revisar el estado de salud de los servicios de Azure?",
    options: [
      "Azure Service Health",
      "Azure Paint",
      "Azure Maps",
      "Azure Scheduler"
    ],
    correctAnswer: "Azure Service Health",
    explaination: "Azure Service Health informa incidentes y mantenimientos.",
    difficulty: "medium"
  },
  {
    id: 20324,
    categoryId: "azure-accounts",
    text: "¿Qué rol puede ver recursos pero no modificarlos?",
    options: [
      "Lector",
      "Propietario",
      "Administrador global",
      "Colaborador"
    ],
    correctAnswer: "Lector",
    explaination: "El rol Lector posee acceso de solo lectura.",
    difficulty: "easy"
  },
  {
    id: 20325,
    categoryId: "azure-accounts",
    text: "¿Qué sucede con los costos cuando se consumen más recursos en Azure?",
    options: [
      "Los costos normalmente aumentan",
      "Los costos desaparecen",
      "Azure deja de funcionar",
      "La suscripción se elimina automáticamente"
    ],
    correctAnswer: "Los costos normalmente aumentan",
    explaination: "Azure cobra según el consumo utilizado.",
    difficulty: "easy"
  },
  {
    id: 20326,
    categoryId: "azure-accounts",
    text: "¿Qué característica ayuda a evitar gastos inesperados en Azure?",
    options: [
      "Presupuestos y alertas de costos",
      "Formatear discos",
      "Desinstalar Windows",
      "Eliminar etiquetas"
    ],
    correctAnswer: "Presupuestos y alertas de costos",
    explaination: "Los presupuestos permiten controlar el gasto y generar alertas.",
    difficulty: "medium"
  },
  {
    id: 20327,
    categoryId: "azure-accounts",
    text: "¿Qué componente se utiliza para administrar recursos relacionados como una unidad lógica?",
    options: [
      "Grupo de recursos",
      "Dominio DNS",
      "Firewall físico",
      "Balanceador externo"
    ],
    correctAnswer: "Grupo de recursos",
    explaination: "Los grupos de recursos facilitan la administración conjunta.",
    difficulty: "easy"
  },
  {
    id: 20328,
    categoryId: "azure-accounts",
    text: "¿Qué permite hacer Microsoft Entra ID en Azure?",
    options: [
      "Administrar identidades y autenticación",
      "Reemplazar internet",
      "Crear hardware",
      "Actualizar BIOS"
    ],
    correctAnswer: "Administrar identidades y autenticación",
    explaination: "Microsoft Entra ID proporciona servicios de identidad y acceso.",
    difficulty: "easy"
  },
  {
    id: 20329,
    categoryId: "azure-accounts",
    text: "¿Qué ventaja ofrece el modelo de nube de Azure frente a infraestructura física tradicional?",
    options: [
      "Escalabilidad bajo demanda",
      "Necesidad de más hardware local",
      "Mayor dependencia de CDs",
      "Eliminación total de internet"
    ],
    correctAnswer: "Escalabilidad bajo demanda",
    explaination: "Azure permite escalar recursos rápidamente según necesidad.",
    difficulty: "medium"
  },
  {
    id: 20330,
    categoryId: "azure-accounts",
    text: "¿Qué servicio ayuda a organizar recursos usando jerarquías y gobernanza empresarial?",
    options: [
      "Management Groups",
      "Azure Paint",
      "Azure Batch",
      "Azure Media Services"
    ],
    correctAnswer: "Management Groups",
    explaination: "Management Groups permiten organizar múltiples suscripciones bajo políticas comunes.",
    difficulty: "hard"
  },
];