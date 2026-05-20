import type { Question } from "@/types/quiz";

export const az900Questions: Question[] = [
  {
    "id": 1,
    "text": "Si planea alojar una aplicación web en la plataforma Azure como solución de servicio de Azure Web Apps, ¿la plataforma tendrá la capacidad de escalar automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 2,
    "text": "Decides crear 2 máquinas virtuales. Cada máquina virtual es del tamaño D2s v3. ¿Generarán siempre estas máquinas el mismo coste mensual?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 3,
    "text": "Tu equipo necesita una herramienta que proporcione un asistente digital en línea con soporte de voz. ¿Cuál de los siguientes servicios se puede utilizar para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Azure AI bot",
    "categoryId": "azure-services"
  },
  {
    "id": 4,
    "text": "Tu equipo necesita una herramienta que pueda utilizar entrenamientos anteriores para proporcionar predicciones con una probabilidad muy alta. ¿Cuál de los siguientes servicios puede utilizarse para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Aprendizaje automático de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 5,
    "text": "Tu equipo necesita una herramienta que ofrezca capacidades de computación sin servidor. ¿Cuál de los siguientes servicios se puede utilizar para este propósito?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Funciones de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 6,
    "text": "Tu equipo necesita una herramienta que pueda procesar datos de millones de sensores. ¿Cuál de los siguientes servicios puede utilizarse para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Centro de IoT de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 7,
    "text": "Una empresa necesita implementar recursos en Azure que abarquen varios departamentos, del mismo tipo, y automatizar la implementación. ¿Cuál de las siguientes opciones utilizaría?",
    "options": ["Conjuntos de escalado de máquinas virtuales", "Grupos de gestión", "ID de Microsoft Entra", "Plantillas de Azure Resource Manager"],
    "correctAnswer": "Plantillas de Azure Resource Manager",
    "categoryId": "azure-management"
  },
  {
    "id": 8,
    "text": "Su empresa necesita implementar una aplicación en máquinas virtuales en Azure con un SLA del 99,99%. ¿Cuál es el número mínimo de máquinas virtuales y zonas de disponibilidad?",
    "options": ["Una máquina virtual y una zona de disponibilidad", "Dos máquinas virtuales y una zona de disponibilidad", "Una máquina virtual y dos zonas de disponibilidad", "Dos máquinas virtuales y dos zonas de disponibilidad"],
    "correctAnswer": "Dos máquinas virtuales y dos zonas de disponibilidad",
    "categoryId": "azure-management"
  },
  {
    "id": 9,
    "text": "Tu equipo necesita una herramienta que permita correlacionar eventos de múltiples recursos en un repositorio central. ¿Cuál puede utilizarse para este propósito?",
    "options": ["Centros de eventos de Azure", "Microsoft Defender para la nube", "ID de Microsoft Entra", "Azure Log Analytics"],
    "correctAnswer": "Azure Log Analytics",
    "categoryId": "azure-management"
  },
  {
    "id": 10,
    "text": "Una empresa planea alojar una aplicación en una VM de Azure. Usted decide implementar un plan de protección contra ataques DDoS para que sea accesible desde Internet a través de HTTPS. ¿Esto cumpliría con el requisito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 11,
    "text": "Una empresa planea alojar una aplicación en una VM de Azure. Usted decide implementar un perfil de Azure Traffic Manager para que sea accesible desde Internet a través de HTTPS. ¿Esto cumpliría con el requisito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 12,
    "text": "¿Cuáles de los siguientes clientes pueden usar Azure Government para desarrollar una solución en la nube? (Seleccione 2)",
    "options": ["Entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos", "Una entidad gubernamental europea", "Un contratista del gobierno europeo"],
    "correctAnswer": "Entidad del gobierno de los Estados Unidos",
    "correctAnswers": ["Entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos"],
    "categoryId": "azure-management"
  },
  {
    "id": 13,
    "text": "¿Es necesario implementar una solución federada para implementar la autenticación multifactor (MFA)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 14,
    "text": "¿Son la identificación con foto y el número de pasaporte métodos válidos para la autenticación multifactor (MFA) en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 15,
    "text": "¿Cuál plan de soporte brinda información sobre mejores prácticas, estado de salud y notificaciones, y acceso 24/7 a información de facturación al menor costo posible?",
    "options": ["Básico", "Estándar", "Premier", "Desarrollador"],
    "correctAnswer": "Básico",
    "categoryId": "azure-management"
  },
  {
    "id": 16,
    "text": "Si tiene previsto alojar una aplicación web en Azure Web Apps, ¿tendrá control total sobre el sistema operativo subyacente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 17,
    "text": "Si detienes una máquina virtual D2s_v3, ¿incurrirás en algún costo por el almacenamiento asociado?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 18,
    "text": "Al planificar los costos de recursos de infraestructura en Azure, ¿existe flexibilidad en cuanto a los gastos de capital y operativos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 19,
    "text": "Al usar Software como Servicio (SaaS) en Azure, ¿de cuál de las siguientes opciones serías responsable?",
    "options": ["Alta disponibilidad de la solución", "Configuración de la solución", "Instalando la solución", "Escalabilidad de la solución"],
    "correctAnswer": "Configuración de la solución",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 20,
    "text": "Una empresa migra servidores locales a Azure. El departamento de continuidad del negocio requiere disponibilidad si un centro de datos de Azure deja de funcionar. ¿Qué concepto se consideraría en la fase de diseño?",
    "options": ["Escalabilidad", "Tolerancia a fallos", "Baja latencia", "Elasticidad"],
    "correctAnswer": "Tolerancia a fallos",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 21,
    "text": "¿En cuál de las siguientes circunstancias podría una empresa plantearse el desmantelamiento de su centro de datos?",
    "options": ["Si tienen su infraestructura en una nube privada", "Si tienen su infraestructura en la nube pública", "Si tienen su infraestructura en una nube híbrida"],
    "correctAnswer": "Si tienen su infraestructura en la nube pública",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 22,
    "text": "Una empresa planea migrar un sitio web público a Azure. ¿Qué aspectos debe tener en cuenta al planificar la migración?",
    "options": ["Necesitarían implementar una VPN", "Tendrían que pagar el costo de transferir el sitio web a Azure", "Tendrían que pagar los costos mensuales del alojamiento del sitio web", "Tendrían que pagar por el número de conexiones al sitio web"],
    "correctAnswer": "Tendrían que pagar los costos mensuales del alojamiento del sitio web",
    "categoryId": "azure-management"
  },
  {
    "id": 23,
    "text": "Un administrador necesita ejecutar un script PowerShell para crear una VM en Azure. ¿Se ejecutaría el script en un equipo con Linux y las herramientas de la CLI de Azure instaladas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 24,
    "text": "¿Sería posible ejecutar un script PowerShell en una máquina con Chrome OS usando Azure Cloud Shell?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 25,
    "text": "¿Sería posible ejecutar un script PowerShell en una máquina con macOS y PowerShell Core instalados?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 26,
    "text": "Un administrador necesita ver la lista de eventos de mantenimiento planificados que pueden afectar la disponibilidad de los recursos. ¿Cuál sección del portal de Azure debe considerar?",
    "options": ["Grupos de recursos", "ID de Microsoft Entra", "Asesor de Azure", "Ayuda + Soporte"],
    "correctAnswer": "Ayuda + Soporte",
    "categoryId": "azure-management"
  },
  {
    "id": 27,
    "text": "Tu equipo necesita una solución integrada para la implementación de código. ¿Cuál de los siguientes servicios puede utilizarse?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Azure DevOps",
    "categoryId": "azure-services"
  },
  {
    "id": 28,
    "text": "Tu equipo necesita una herramienta que proporcione orientación y recomendaciones para mejorar un entorno Azure. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Asesor de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 29,
    "text": "Tu equipo necesita una herramienta que permita crear aplicaciones inteligentes basadas en inteligencia artificial. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Servicios cognitivos de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 30,
    "text": "Tu equipo necesita una herramienta para supervisar las aplicaciones web implementadas en Azure. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Información sobre aplicaciones de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 31,
    "text": "Un equipo necesita compartir archivos habilitando unidades de red mapeadas desde equipos con Windows 10. ¿Cuál sería la solución de almacenamiento ideal?",
    "options": ["Azure Blob Storage", "Azure Storage Files", "Azure Storage Queues", "Azure Storage Tables"],
    "correctAnswer": "Azure Storage Files",
    "categoryId": "azure-services"
  },
  {
    "id": 32,
    "text": "Una empresa desea alojar un almacén de datos que pueda almacenar documentos JSON y gestionar escrituras desde múltiples regiones. ¿Cuál es ideal?",
    "options": ["Base de datos SQL de Azure", "Azure Cosmos DB", "Azure Cache Redis", "Azure Synapse Analytics"],
    "correctAnswer": "Azure Cosmos DB",
    "categoryId": "azure-services"
  },
  {
    "id": 33,
    "text": "¿Es necesario que las máquinas virtuales implementadas en un grupo de recursos en la región Central de EE. UU. también se implementen únicamente en esa región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 34,
    "text": "Un equipo planea asignar etiquetas a un grupo de recursos. ¿La etiqueta sería heredada automáticamente por los recursos del grupo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 35,
    "text": "Se ha asignado un conjunto de permisos IAM a un grupo de recursos. ¿Los recursos del grupo heredarán automáticamente esos permisos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 36,
    "text": "¿Cuál de los siguientes servicios se puede utilizar para crear, probar e implementar análisis predictivos para IA en Azure?",
    "options": ["Funciones de Azure", "Aplicaciones lógicas de Azure", "Procesamiento por lotes de Azure", "Azure Machine Learning Studio"],
    "correctAnswer": "Azure Machine Learning Studio",
    "categoryId": "azure-services"
  },
  {
    "id": 37,
    "text": "¿La herramienta Azure Advisor ofrece recomendaciones sobre cómo configurar los ajustes de red para las máquinas virtuales de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 38,
    "text": "¿La herramienta Azure Advisor ofrece recomendaciones sobre cómo ahorrar costos al alojar máquinas virtuales en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 39,
    "text": "¿Azure Advisor podría ofrecer recomendaciones sobre cómo mejorar la seguridad de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 40,
    "text": "Un ingeniero de soporte tiene un ordenador con Ubuntu. ¿Cuál de las siguientes herramientas de administración de Azure podría ejecutarse desde este ordenador?",
    "options": ["Interfaz de línea de comandos de Azure", "Azure PowerShell", "El portal de Azure"],
    "correctAnswer": "Interfaz de línea de comandos de Azure",
    "correctAnswers": ["Interfaz de línea de comandos de Azure", "Azure PowerShell", "El portal de Azure"],
    "categoryId": "azure-management"
  },
  {
    "id": 41,
    "text": "Su empresa configuró Azure y Microsoft Entra ID. Cuando usuarios se conectan desde Internet con una IP anónima, ¿cuál servicio puede exigir cambio de contraseña automático?",
    "options": ["Microsoft Entra Connect", "Protección de identidad de Microsoft Entra", "Gestión de identidades privilegiadas de Microsoft Entra", "Microsoft Defender para la identidad"],
    "correctAnswer": "Protección de identidad de Microsoft Entra",
    "categoryId": "azure-management"
  },
  {
    "id": 42,
    "text": "Una empresa necesita limitar el tipo de conexiones desde servidores web y de bases de datos en Azure. ¿Cuál opción puede utilizarse?",
    "options": ["Grupos de seguridad de red", "Protección de identidad de Microsoft Entra", "VPN de Azure", "Tablas de rutas de Azure"],
    "correctAnswer": "Grupos de seguridad de red",
    "categoryId": "azure-services"
  },
  {
    "id": 43,
    "text": "¿Cuál de las siguientes opciones puede utilizarse para gestionar el cumplimiento de recursos en múltiples suscripciones?",
    "options": ["Grupos de recursos", "Grupos de gestión", "Directivas de Azure", "Plantillas de Azure Resource Manager"],
    "correctAnswer": "Directivas de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 44,
    "text": "Necesitan un plan de soporte económico con acceso 24/7 a ingenieros por teléfono o correo. Usted sugiere el plan Básico. ¿Cumple con los requisitos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 45,
    "text": "Usted sugiere el plan de soporte Estándar para acceso 24/7 a ingenieros de soporte por teléfono o correo. ¿Este plan cumple con los requisitos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 46,
    "text": "¿Microsoft lanza la mayoría de los servicios de Azure en versión preliminar privada antes de presentarlos en versión preliminar pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 47,
    "text": "¿Los servicios de Azure en versión preliminar pública solo se pueden administrar a través de la CLI de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 48,
    "text": "¿Un servicio de Azure en versión preliminar privada está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 49,
    "text": "¿Un servicio de Azure en versión preliminar pública está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 50,
    "text": "¿Un servicio de Azure en disponibilidad general está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 51,
    "text": "¿Se puede utilizar una única cuenta de Microsoft para administrar varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 52,
    "text": "¿Es posible fusionar varias suscripciones en una sola?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 53,
    "text": "¿Tendrían los servicios de pago de Azure garantizado un SLA de al menos el 99,9%?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 54,
    "text": "¿Podría la empresa aumentar el SLA de sus recursos implementándolos en varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 55,
    "text": "¿Podría la empresa aumentar el SLA para sus recursos adquiriendo varias suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 56,
    "text": "Se creó un conjunto de VMs en una suscripción. Ahora se adquirió una nueva suscripción. ¿Es posible transferir las VMs a la nueva suscripción?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 57,
    "text": "Una empresa tiene 10 IPs públicas, 20 usuarios y 5 grupos en Microsoft Entra ID. ¿La eliminación de usuarios contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 58,
    "text": "¿La eliminación de grupos de usuarios en Microsoft Entra ID contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 59,
    "text": "¿La eliminación de las 10 direcciones IP públicas contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 60,
    "text": "Un miembro del equipo con un portátil Android desea crear una VM en Azure usando el portal de Azure. ¿Sería esta la solución adecuada?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 61,
    "text": "Un miembro del equipo con un portátil Android decide usar el portal de PowerApps para crear una VM. ¿Sería esta la solución adecuada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 62,
    "text": "¿Cuál de las siguientes URL se utiliza para gestionar la creación de recursos de Azure?",
    "options": ["https://admin.azure.com", "https://admin.azurewebsites.com", "https://portal.microsoft.com", "https://portal.azurewebsites.com", "https://portal.azure.com"],
    "correctAnswer": "https://portal.azure.com",
    "categoryId": "azure-management"
  },
  {
    "id": 63,
    "text": "¿Cuál servicio de cuenta de almacenamiento se utiliza para almacenar los discos de datos de una máquina virtual?",
    "options": ["Blobs", "Archivos", "Tablas", "Colas"],
    "correctAnswer": "Blobs",
    "categoryId": "azure-services"
  },
  {
    "id": 64,
    "text": "Su empresa necesita un almacén de datos Azure de 10 TB, acceso poco frecuente, y visualización con Power BI. ¿Cuáles dos soluciones elegiría?",
    "options": ["Base de datos SQL de Azure", "Azure Synapse Analytics", "Azure Data Lake", "Azure Cosmos DB"],
    "correctAnswer": "Azure Synapse Analytics",
    "correctAnswers": ["Azure Synapse Analytics", "Azure Data Lake"],
    "categoryId": "azure-services"
  },
  {
    "id": 65,
    "text": "Necesitas implementar varias VMs y asignar permisos simultáneamente. ¿Qué debes hacer?",
    "options": ["Implementar en la misma región", "Implementar en el mismo grupo de recursos", "Implementar en la misma zona de disponibilidad", "Implementar en la misma escala"],
    "correctAnswer": "Implementar en el mismo grupo de recursos",
    "categoryId": "azure-management"
  },
  {
    "id": 66,
    "text": "¿Cuál es una ventaja de trasladar los servidores locales al entorno de la nube de Azure?",
    "options": ["Azure es una plataforma pública donde todos los recursos son accesibles al público", "Azure es una plataforma privada donde solo un grupo reducido puede acceder", "Azure es una plataforma compartida donde múltiples empresas usan una parte de los recursos", "Azure es una plataforma de comercio electrónico donde los usuarios compran y venden recursos"],
    "correctAnswer": "Azure es una plataforma compartida donde múltiples empresas usan una parte de los recursos",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 67,
    "text": "¿Cuáles son dos características clave de la nube pública?",
    "options": ["Recursos de hardware dedicados", "Infraestructura compartida", "Modelo de pago por uso", "Implementación en las instalaciones del cliente", "Disponibilidad geográfica limitada"],
    "correctAnswer": "Infraestructura compartida",
    "correctAnswers": ["Infraestructura compartida", "Modelo de pago por uso"],
    "categoryId": "cloud-concepts"
  },
  {
    "id": 68,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y bases de datos SQL de Azure. ¿Cumple el plan de migración solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 69,
    "text": "Planeas migrar una aplicación web a Azure con usuarios externos. Necesitas minimizar el esfuerzo administrativo. ¿Qué debes incluir?",
    "options": ["Software como servicio (SaaS)", "Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)", "Base de datos como servicio (DaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 70,
    "text": "Con 100 servidores locales, necesitas recursos adicionales minimizando costos de capital y operativos. ¿Qué recomiendas?",
    "options": ["Una migración completa a la nube pública", "Un centro de datos adicional", "Una nube privada", "Una nube híbrida"],
    "correctAnswer": "Una nube híbrida",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 71,
    "text": "¿Qué ventaja ofrece usar un servicio de nube pública para los servidores en lugar de una red local?",
    "options": ["La nube pública es propiedad del público, NO de una corporación privada", "La nube pública es una solución de colaboración colectiva", "Todos los recursos de la nube pública son de libre acceso para cualquier persona", "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos"],
    "correctAnswer": "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 72,
    "text": "Tienes 1000 VMs en Hyper-V y planeas migrarlas a Azure pago por uso. ¿Qué modelo de gasto deberías considerar?",
    "options": ["Operacional", "Elástico", "Capital", "Escalable"],
    "correctAnswer": "Operacional",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 73,
    "text": "¿Qué recurso es un ejemplo de Infraestructura como Servicio (IaaS)?",
    "options": ["Una aplicación web de Azure", "Una máquina virtual de Azure", "Una aplicación lógica de Azure", "Una base de datos Azure SQL"],
    "correctAnswer": "Una máquina virtual de Azure",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 74,
    "text": "Un equipo implementará y eliminará 50 VMs cada semana usando plantillas ARM. ¿Qué servicio de Azure minimizará el esfuerzo administrativo?",
    "options": ["Instancias de VMs reservadas de Azure", "Azure DevTest Labs", "Conjuntos de escalado de VMs de Azure", "Microsoft Managed Desktop"],
    "correctAnswer": "Azure DevTest Labs",
    "categoryId": "azure-services"
  },
  {
    "id": 75,
    "text": "Solución: Crear VMs de Azure, bases de datos SQL de Azure y cuentas de Azure Storage. ¿Esto cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 76,
    "text": "Una empresa implementará aplicaciones personalizadas de facturación que requieren la instalación de varias aplicaciones previas. ¿Qué solución de implementación recomiendas?",
    "options": ["Software como servicio (SaaS)", "Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)"],
    "correctAnswer": "Infraestructura como servicio (IaaS)",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 77,
    "text": "[Una región de Azure] contiene uno o más centros de datos conectados mediante una red de baja latencia. ¿Cuál afirmación es correcta?",
    "options": ["No es necesario realizar ningún cambio", "Se encuentra en todos los países donde Microsoft tiene oficina subsidiaria", "Se puede encontrar únicamente en países de Europa y América", "Contiene uno o más centros de datos conectados mediante una red de alta latencia"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-services"
  },
  {
    "id": 78,
    "text": "Un ingeniero planea usar la CLI de Azure. ¿Qué dos herramientas debería usar para ejecutar la CLI?",
    "options": ["Símbolo del sistema", "Explorador de recursos de Azure", "Windows PowerShell", "Firewall de Windows Defender", "Centro de redes y recursos compartidos"],
    "correctAnswer": "Símbolo del sistema",
    "correctAnswers": ["Símbolo del sistema", "Windows PowerShell"],
    "categoryId": "azure-management"
  },
  {
    "id": 79,
    "text": "Planeas almacenar 20 TB de datos en Azure, con acceso poco frecuente y visualización mediante Power BI. ¿Qué dos soluciones recomiendas?",
    "options": ["Azure Data Lake", "Azure Cosmos DB", "Azure Synapse Analytics", "Base de datos SQL de Azure", "Base de datos Azure para PostgreSQL"],
    "correctAnswer": "Azure Data Lake",
    "correctAnswers": ["Azure Data Lake", "Azure Synapse Analytics"],
    "categoryId": "azure-services"
  },
  {
    "id": 80,
    "text": "¿Para qué tipo de fallo puede utilizarse una Zona de Disponibilidad de Azure para proteger el acceso a los servicios?",
    "options": ["Un fallo del servidor físico", "Un fallo en la región de Azure", "Un fallo de almacenamiento", "Un fallo en un centro de datos de Azure"],
    "correctAnswer": "Un fallo en un centro de datos de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 81,
    "text": "Tienes una VM con Windows Server 2016 en región Este de EE. UU. ¿Qué servicio de Azure usar para ver notificaciones de errores de servicio que pueden afectar la disponibilidad?",
    "options": ["Azure Service Fabric", "Azure Monitor", "Máquinas virtuales de Azure", "Asesor de Azure"],
    "correctAnswer": "Azure Monitor",
    "categoryId": "azure-management"
  },
  {
    "id": 82,
    "text": "Solución: Ejecutar un script PowerShell desde un equipo con Linux y CLI de Azure instalada. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 83,
    "text": "Solución: Ejecutar un script PowerShell desde un equipo con Chrome OS y Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 84,
    "text": "Tienes un entorno Azure con 10 redes virtuales y 100 VMs. Necesitas limitar el tráfico entrante a todas las redes virtuales. ¿Qué deberías crear?",
    "options": ["Un grupo de seguridad de aplicaciones (ASG)", "10 puertas de enlace de red virtual", "10 circuitos de Azure ExpressRoute", "Un firewall de Azure"],
    "correctAnswer": "Un firewall de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 85,
    "text": "Planeas implementar una solución que permita a equipos cliente de la red local comunicarse con VMs de Azure. ¿Qué dos recursos de Azure debes crear?",
    "options": ["Una puerta de enlace de red virtual", "Un balanceador de carga", "Una puerta de enlace de aplicaciones", "Una red virtual", "Una subred de puerta de enlace"],
    "correctAnswer": "Una puerta de enlace de red virtual",
    "correctAnswers": ["Una puerta de enlace de red virtual", "Una subred de puerta de enlace"],
    "categoryId": "azure-services"
  },
  {
    "id": 86,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas Bash en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 87,
    "text": "Un servidor llamado FinServer debe estar en un segmento de red independiente. ¿Qué solución de Azure recomendarías?",
    "options": ["Un grupo de recursos para FinServer y otro para los demás servidores", "Una red virtual para FinServer y otra para los demás servidores", "Una VPN para FinServer y una puerta de enlace de red virtual para otro servidor", "Un grupo de recursos para todos los servidores y un bloqueo de recursos para FinServer"],
    "correctAnswer": "Una red virtual para FinServer y otra para los demás servidores",
    "categoryId": "azure-services"
  },
  {
    "id": 88,
    "text": "Planeas asignar una unidad de red desde varios equipos con Windows 10 a Azure Storage. ¿Qué deberías crear?",
    "options": ["Una base de datos Azure SQL", "Un disco de datos de máquina virtual", "Un servicio de archivos en una cuenta de almacenamiento", "Un servicio Blobs en una cuenta de almacenamiento"],
    "correctAnswer": "Un servicio de archivos en una cuenta de almacenamiento",
    "categoryId": "azure-services"
  },
  {
    "id": 89,
    "text": "Tu empresa planea migrar todos sus recursos de red a Azure. ¿Qué deberías crear primero?",
    "options": ["Una suscripción", "Un grupo de recursos", "Una red virtual", "Un grupo directivo"],
    "correctAnswer": "Una suscripción",
    "categoryId": "azure-management"
  },
  {
    "id": 90,
    "text": "Tienes una aplicación local que envía notificaciones por correo automáticamente según una regla. Necesitas recomendar una solución de computación sin servidor para migrarla a Azure. ¿Qué incluyes?",
    "options": ["Una aplicación web", "Una imagen de servidor en Azure Marketplace", "Una aplicación lógica", "Una aplicación API"],
    "correctAnswer": "Una aplicación lógica",
    "categoryId": "azure-services"
  },
  {
    "id": 91,
    "text": "Planeas implementar un sitio web en Azure accesible mundialmente con archivos de video de gran tamaño. ¿Qué función de Azure ofrece la mejor experiencia de reproducción de video?",
    "options": ["Una puerta de enlace de aplicaciones", "Un circuito Azure ExpressRoute", "Una red de distribución de contenido (CDN)", "Un perfil de Azure Traffic Manager"],
    "correctAnswer": "Una red de distribución de contenido (CDN)",
    "categoryId": "azure-services"
  },
  {
    "id": 92,
    "text": "Su empresa implementará millones de sensores que subirán datos a Azure. ¿Qué dos recursos de Azure deben crearse?",
    "options": ["Azure Data Lake", "Azure Queue Storage", "Azure File Storage", "Azure IoT Hub", "Azure Notification Hubs"],
    "correctAnswer": "Azure Data Lake",
    "correctAnswers": ["Azure Data Lake", "Azure IoT Hub"],
    "categoryId": "azure-services"
  },
  {
    "id": 93,
    "text": "Tienes una aplicación web de Azure y necesitas administrar su configuración desde un iPhone. ¿Qué dos herramientas de administración de Azure puedes usar?",
    "options": ["CLI de Azure", "El portal de Azure", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "correctAnswer": "El portal de Azure",
    "correctAnswers": ["El portal de Azure", "Azure Cloud Shell"],
    "categoryId": "azure-management"
  },
  {
    "id": 94,
    "text": "La empresa planea implementar una solución de IA en Azure. ¿Qué herramientas debería usar para crear, probar e implementar soluciones de análisis predictivo?",
    "options": ["Aplicaciones lógicas de Azure", "Azure Machine Learning Studio", "Procesamiento por lotes de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Azure Machine Learning Studio",
    "categoryId": "azure-services"
  },
  {
    "id": 95,
    "text": "Desde el portal de Azure, abres Azure Cloud Shell y seleccionas PowerShell para crear una VM con 'az vm create'. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 96,
    "text": "Solución: Ejecutar el script PowerShell desde un equipo con Windows 10 y el módulo de Azure PowerShell instalado. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 97,
    "text": "¿Qué servicio proporciona computación sin servidor en Azure?",
    "options": ["Máquinas virtuales de Azure", "Funciones de Azure", "Cuenta de almacenamiento de Azure", "Instancias de contenedores de Azure"],
    "correctAnswer": "Funciones de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 98,
    "text": "Abres Azure Cloud Shell y seleccionas Bash para ejecutar el comando 'az vm create'. ¿Cumple el objetivo de crear VM1?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 99,
    "text": "Su empresa tiene varias unidades de negocio, cada una requiere los mismos 20 recursos de Azure. ¿Qué debe recomendar para automatizar la creación?",
    "options": ["Plantillas de Azure Resource Manager", "Conjuntos de escalado de VMs", "El servicio Azure API Management", "Grupos de gestión"],
    "correctAnswer": "Plantillas de Azure Resource Manager",
    "categoryId": "azure-management"
  },
  {
    "id": 100,
    "text": "¿Qué servicio de Azure debería utilizarse para recopilar eventos de múltiples recursos en un repositorio centralizado?",
    "options": ["Centros de eventos de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Azure Stream Analytics"],
    "correctAnswer": "Azure Monitor",
    "categoryId": "azure-management"
  },
  {
    "id": 101,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas el portal de PowerApps. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 102,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas el portal de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 103,
    "text": "¿Qué servicio de Azure proporciona un conjunto de herramientas de control de versiones para gestionar el código?",
    "options": ["Repositorios de Azure", "Azure DevTest Labs", "Almacenamiento de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Repositorios de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 104,
    "text": "Su empresa planea automatizar la implementación de servidores en Azure y necesita cifrar credenciales administrativas. ¿Qué debe incluir en la recomendación?",
    "options": ["Azure Key Vault", "Microsoft Purview Information Protection", "Microsoft Defender para la nube", "Autenticación multifactor (MFA) de Azure"],
    "correctAnswer": "Azure Key Vault",
    "categoryId": "azure-management"
  },
  {
    "id": 105,
    "text": "Planeas implementar varias VMs de Azure. Necesitas controlar los puertos que dispositivos de Internet pueden usar para acceder a las VMs. ¿Qué deberías usar?",
    "options": ["Grupo de Seguridad de Red (NSG)", "Rol de Microsoft Entra ID", "Grupo Microsoft Entra ID", "Azure Key Vault"],
    "correctAnswer": "Grupo de Seguridad de Red (NSG)",
    "categoryId": "azure-services"
  },
  {
    "id": 106,
    "text": "Azure Alemania solo puede ser utilizado por residentes legales de Alemania. ¿Qué afirmación es correcta?",
    "options": ["No es necesario realizar ningún cambio", "Solo empresas registradas en Alemania", "Solo empresas que adquieran licencias a través de socio en Alemania", "Este servicio ha sido descontinuado. Azure Alemania se retiró en 2021"],
    "correctAnswer": "Este servicio ha sido descontinuado. Azure Alemania se retiró en 2021",
    "categoryId": "azure-management"
  },
  {
    "id": 107,
    "text": "Solución: Modifica un grupo de seguridad de red (NSG) para que una VM sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 108,
    "text": "Solución: Modificas un firewall de Azure para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 109,
    "text": "Solución: Modificas un perfil de Azure Traffic Manager para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 110,
    "text": "¿Qué dos tipos de clientes pueden utilizar Azure Government para desarrollar una solución en la nube?",
    "options": ["Un contratista del gobierno canadiense", "Un contratista del gobierno europeo", "Una entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos", "Una entidad gubernamental europea"],
    "correctAnswer": "Una entidad del gobierno de los Estados Unidos",
    "correctAnswers": ["Una entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos"],
    "categoryId": "azure-management"
  },
  {
    "id": 111,
    "text": "¿Qué servicio de Azure debería utilizarse para que usuarios que se conectan desde una IP anónima cambien automáticamente su contraseña?",
    "options": ["Microsoft Entra Connect Health", "Gestión de identidades privilegiadas de Microsoft Entra", "Microsoft Defender para la identidad", "Protección de identidad de Microsoft Entra"],
    "correctAnswer": "Protección de identidad de Microsoft Entra",
    "categoryId": "azure-management"
  },
  {
    "id": 112,
    "text": "Necesita recomendar una solución de Azure para limitar tipos de conexiones entre servidores web y de bases de datos. ¿Qué incluiría?",
    "options": ["Grupos de seguridad de red (NSG)", "Azure Service Bus", "Una puerta de enlace de red local", "Un filtro de ruta"],
    "correctAnswer": "Grupos de seguridad de red (NSG)",
    "categoryId": "azure-services"
  },
  {
    "id": 113,
    "text": "¿A qué debe conectarse una aplicación para obtener tokens de seguridad?",
    "options": ["Una cuenta de Azure Storage", "ID de Microsoft Entra", "Una tienda de certificados", "Un almacén de claves de Azure"],
    "correctAnswer": "ID de Microsoft Entra",
    "categoryId": "azure-management"
  },
  {
    "id": 114,
    "text": "¿Qué servicio proporciona filtrado de tráfico de red en múltiples suscripciones y redes virtuales de Azure?",
    "options": ["Firewall de Azure", "Un grupo de seguridad de aplicaciones", "Protección DDoS de Azure", "Un Grupo de Seguridad de Red (NSG)"],
    "correctAnswer": "Firewall de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 115,
    "text": "¿Qué servicio de Azure debería utilizarse para almacenar certificados?",
    "options": ["Microsoft Defender para la nube", "Una cuenta de Azure Storage", "Azure Key Vault", "Microsoft Purview Information Protection"],
    "correctAnswer": "Azure Key Vault",
    "categoryId": "azure-management"
  },
  {
    "id": 116,
    "text": "Tienes un grupo de recursos RG1. Necesitas impedir la creación de VMs solo en RG1. ¿Qué deberías usar?",
    "options": ["Un candado", "Un rol de Azure", "Una etiqueta", "Una política de Azure"],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 117,
    "text": "¿Qué información puede cifrar Microsoft Purview Information Protection?",
    "options": ["Tráfico de red", "Documentos y mensajes de correo electrónico", "Una cuenta de Azure Storage", "Una base de datos Azure SQL"],
    "correctAnswer": "Documentos y mensajes de correo electrónico",
    "categoryId": "azure-management"
  },
  {
    "id": 118,
    "text": "Desde [Azure Monitor], puede ver qué usuario desactivó una VM específica durante los últimos 14 días. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Centros de eventos de Azure", "Registro de actividad de Azure", "Estado del servicio de Azure"],
    "correctAnswer": "Registro de actividad de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 119,
    "text": "Su empresa tiene recursos en varias regiones y solo deben crear recursos en la región de su oficina. ¿Qué recurso de Azure debe crear?",
    "options": ["Un bloqueo de solo lectura", "Una política de Azure", "Un grupo directivo", "Una reserva"],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 120,
    "text": "Desde [Azure Cloud Shell], puede realizar un seguimiento de normas y regulaciones como la ISO 27001. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "El portal de socios de Microsoft Cloud", "Compliance Manager", "El Centro de Confianza"],
    "correctAnswer": "Compliance Manager",
    "categoryId": "azure-management"
  },
  {
    "id": 121,
    "text": "Necesitas proteger sitios web contra ataques y generar informes de intentos de ataque. ¿Qué debes incluir en la solución?",
    "options": ["Firewall de Azure", "Un Grupo de Seguridad de Red (NSG)", "Microsoft Purview Information Protection", "Protección contra ataques DDoS"],
    "correctAnswer": "Protección contra ataques DDoS",
    "categoryId": "azure-services"
  },
  {
    "id": 122,
    "text": "Intentas crear instancias administradas de SQL Server y recibes un mensaje para aumentar los límites de suscripción a Azure. ¿Qué debes hacer?",
    "options": ["Crear una alerta de estado del servicio", "Actualizar tu plan de soporte", "Modificar una directiva de Azure", "Crear una nueva solicitud de soporte"],
    "correctAnswer": "Crear una nueva solicitud de soporte",
    "categoryId": "azure-management"
  },
  {
    "id": 123,
    "text": "Tu empresa tiene 10 oficinas y generará varios informes de facturación de cada oficina en el portal de Azure. ¿Qué función de Azure Resource Manager deberías usar antes?",
    "options": ["Etiquetas", "Plantillas", "Bloqueos", "Políticas"],
    "correctAnswer": "Etiquetas",
    "categoryId": "azure-management"
  },
  {
    "id": 124,
    "text": "Una empresa tiene varios departamentos gestionados por admins departamentales. ¿Cuáles son dos técnicas posibles para segmentar Azure por departamentos?",
    "options": ["Múltiples suscripciones", "Múltiples directorios de Microsoft Entra ID", "Varias regiones", "Múltiples grupos de recursos"],
    "correctAnswer": "Múltiples suscripciones",
    "correctAnswers": ["Múltiples suscripciones", "Múltiples directorios de Microsoft Entra ID"],
    "categoryId": "azure-management"
  },
  {
    "id": 125,
    "text": "¿En qué planes de soporte de Azure se puede abrir una nueva solicitud de soporte?",
    "options": ["Solo Professional Direct", "Solo Professional Direct y Standard", "Solo Professional Direct, Standard y Developer", "Professional Direct, Standard, Developer y Basic"],
    "correctAnswer": "Professional Direct, Standard, Developer y Basic",
    "categoryId": "azure-management"
  },
  {
    "id": 126,
    "text": "¿Qué se garantiza en un Acuerdo de Nivel de Servicio (SLA) de Azure para máquinas virtuales?",
    "options": ["Tiempo de actividad", "Disponibilidad de funciones", "Ancho de banda", "Rendimiento"],
    "correctAnswer": "Tiempo de actividad",
    "categoryId": "azure-management"
  },
  {
    "id": 127,
    "text": "Solución: Recomendar un plan de soporte Básico para contactar con ingenieros de soporte por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 128,
    "text": "Su empresa necesita que Microsoft realice una revisión arquitectónica. Tienen plan Básico. ¿Qué plan recomiendas minimizando costos?",
    "options": ["Desarrollador", "Professional Direct", "Standard"],
    "correctAnswer": "Professional Direct",
    "categoryId": "azure-management"
  },
  {
    "id": 129,
    "text": "¿Qué se necesita para usar Azure Cost Management?",
    "options": ["Una suscripción para desarrolladores/pruebas", "Garantía de software", "Un Convenio Colectivo (CE)", "Una suscripción de pago por uso"],
    "correctAnswer": "Una suscripción de pago por uso",
    "categoryId": "azure-management"
  },
  {
    "id": 130,
    "text": "Tu cuenta de prueba de Azure caducó. Ahora no puedes [crear cuentas de usuario adicionales de Microsoft Entra ID]. ¿Qué es correcto?",
    "options": ["No es necesario realizar ningún cambio", "Iniciar una máquina virtual de Azure existente", "Acceder a tus datos almacenados en Azure", "Acceder al portal de Azure"],
    "correctAnswer": "Iniciar una máquina virtual de Azure existente",
    "categoryId": "azure-management"
  },
  {
    "id": 131,
    "text": "Solución: Recomendar un plan de soporte Premier para contactar ingenieros por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 132,
    "text": "Tu empresa tiene 10 departamentos y quieres que cada uno use una opción de pago diferente para los servicios de Azure. ¿Qué debes crear para cada departamento?",
    "options": ["Una reserva", "Una suscripción", "Un grupo de recursos", "Una instancia de contenedor"],
    "correctAnswer": "Una suscripción",
    "categoryId": "azure-management"
  },
  {
    "id": 133,
    "text": "¿Qué afirmación describe con precisión la Política de ciclo de vida moderna para los servicios de Azure?",
    "options": ["Microsoft ofrece soporte estándar por cinco años", "Microsoft requiere preaviso mínimo de 12 meses antes de finalizar el soporte para un servicio", "Una vez GA, Microsoft proporciona soporte por mínimo cuatro años", "Al retirarse un servicio, puede adquirir soporte extendido por hasta cinco años"],
    "correctAnswer": "Microsoft requiere preaviso mínimo de 12 meses antes de finalizar el soporte para un servicio",
    "categoryId": "azure-management"
  },
  {
    "id": 134,
    "text": "Puedes usar las recomendaciones del Asesor en Azure para enviar alertas por correo cuando el costo de la suscripción supere un límite. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Control de acceso (IAM)", "Alertas presupuestarias", "Cumplimiento"],
    "correctAnswer": "Alertas presupuestarias",
    "categoryId": "azure-management"
  },
  {
    "id": 135,
    "text": "Para implementar un modelo de nube híbrida, ¿una empresa primero debe contar con una nube privada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 136,
    "text": "¿Una empresa puede ampliar los recursos informáticos de su red interna mediante el uso de una nube híbrida?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 137,
    "text": "En un modelo de nube pública, ¿solo los usuarios invitados de su empresa pueden acceder a los recursos de la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 138,
    "text": "Necesitas recomendar una solución para garantizar la disponibilidad de algunos servidores si un centro de datos de Azure se desconecta durante un período prolongado. ¿Qué incluyes?",
    "options": ["Tolerancia a fallos", "Elasticidad", "Escalabilidad", "Baja latencia"],
    "correctAnswer": "Tolerancia a fallos",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 139,
    "text": "Una organización que aloja su infraestructura [en una nube privada] puede cerrar su centro de datos. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "En una nube híbrida", "En la nube pública", "En un host Hyper-V"],
    "correctAnswer": "En la nube pública",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 140,
    "text": "¿Cuáles son dos características de la nube pública?",
    "options": ["Hardware dedicado", "Conexiones no seguras", "Almacenamiento limitado", "Precios según consumo", "Gestión de autoservicio"],
    "correctAnswer": "Precios según consumo",
    "correctAnswers": ["Precios según consumo", "Gestión de autoservicio"],
    "categoryId": "cloud-concepts"
  },
  {
    "id": 141,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y VMs de Azure con SQL Server instalado. ¿Cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 142,
    "text": "App1 tiene uso bajo las 3 primeras semanas y muy alto la última semana. ¿Qué beneficio de Azure Cloud Services facilita la gestión de costos?",
    "options": ["Alta disponibilidad", "Alta latencia", "Elasticidad", "Balanceo de carga"],
    "correctAnswer": "Elasticidad",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 143,
    "text": "Solución: Implementas las VMs en dos o más conjuntos de escalado para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 144,
    "text": "Relaciona los servicios de Azure con las descripciones correctas (virtualización OS, entorno portátil, crear/escalar apps web, plataforma código sin servidor):",
    "options": ["VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor", "Functions: virtualización OS; VMs: portátil; Containers: apps web; App Service: sin servidor", "VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor", "VMs: virtualización OS; Functions: portátil; App Service: apps web; Containers: sin servidor"],
    "correctAnswer": "VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor",
    "categoryId": "azure-services"
  },
  {
    "id": 145,
    "text": "Solución: Ejecutar el script PowerShell desde un equipo con macOS y PowerShell Core 6.0. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 146,
    "text": "Azure Site Recovery proporciona [tolerancia a fallos] para máquinas virtuales. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Recuperación ante desastres", "Elasticidad", "Alta disponibilidad"],
    "correctAnswer": "Recuperación ante desastres",
    "categoryId": "azure-services"
  },
  {
    "id": 147,
    "text": "Una zona de disponibilidad en Azure tiene ubicaciones físicamente separadas [en dos continentes]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Dentro de una única región de Azure", "Dentro de varias regiones de Azure", "Dentro de un único centro de datos de Azure"],
    "correctAnswer": "Dentro de una única región de Azure",
    "categoryId": "azure-services"
  },
  {
    "id": 148,
    "text": "Su empresa necesita determinar si Azure cumple los requisitos regionales de la empresa. ¿Qué solución debería utilizar?",
    "options": ["El Centro del Conocimiento", "Azure Marketplace", "El portal MyApps", "El Centro de Confianza"],
    "correctAnswer": "El Centro de Confianza",
    "categoryId": "azure-management"
  },
  {
    "id": 149,
    "text": "Azure Key Vault se utiliza para almacenar secretos para las cuentas de usuario de [Microsoft Entra ID]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Cuentas administrativas de Microsoft Entra ID", "Información de identificación personal (PII)", "Aplicaciones de servidor"],
    "correctAnswer": "Aplicaciones de servidor",
    "categoryId": "azure-management"
  },
  {
    "id": 150,
    "text": "Después de crear una VM, necesitas modificar [Grupo de seguridad de red] para permitir conexiones al puerto TCP 8080. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Puerta de enlace de red virtual", "Red virtual", "Tabla de ruta"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-services"
  },
  {
    "id": 151,
    "text": "Solución: Modifica un NSG para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 152,
    "text": "Solución: Modificas un plan de protección contra ataques DDoS para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 153,
    "text": "Los grupos de recursos proporcionan a las organizaciones la capacidad de gestionar el cumplimiento en múltiples suscripciones. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Grupos de gestión", "Políticas de Azure", "Planes de Azure App Service"],
    "correctAnswer": "Grupos de gestión",
    "categoryId": "azure-management"
  },
  {
    "id": 154,
    "text": "Tu red tiene un bosque de Active Directory con 5000 cuentas. Planeas migrar todos los recursos a Azure. ¿Qué recomiendas para minimizar el impacto en los usuarios?",
    "options": ["Implementar MFA de Azure", "Sincronizar todas las cuentas de Active Directory con Microsoft Entra ID", "Indicar a todos los usuarios que cambien su contraseña", "Crear cuenta de usuario invitado en Microsoft Entra ID para cada usuario"],
    "correctAnswer": "Sincronizar todas las cuentas de Active Directory con Microsoft Entra ID",
    "categoryId": "azure-management"
  },
  {
    "id": 155,
    "text": "¿Qué herramientas debería utilizar para evaluar si el entorno Azure de su empresa cumple con los requisitos normativos?",
    "options": ["El sitio web del Centro de Conocimiento", "La sección Asesor del portal de Azure", "Compliance Manager desde el portal de confianza del servicio", "El panel del Centro de seguridad del portal de Azure"],
    "correctAnswer": "Compliance Manager desde el portal de confianza del servicio",
    "categoryId": "azure-management"
  },
  {
    "id": 156,
    "text": "La [Declaración de privacidad de los servicios en línea de Microsoft] explica qué datos procesa Microsoft, cómo y con qué finalidad. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Términos y condiciones de los servicios en línea de Microsoft", "Acuerdo de nivel de servicio en línea de Microsoft", "Acuerdo de suscripción en línea para Microsoft Azure"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management"
  },
  {
    "id": 157,
    "text": "Si Microsoft planea dejar de dar soporte a un servicio sin sucesor, proporcionará notificación con al menos [12 meses] de antelación. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "6 meses", "90 días", "30 días"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management"
  },
  {
    "id": 158,
    "text": "Solución: Eliminar las interfaces de red sin usar para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 159,
    "text": "Solución: Eliminar las direcciones IP públicas sin usar para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 160,
    "text": "Solución: Eliminar las cuentas de usuario sin usar de Microsoft Entra ID para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 161,
    "text": "Un plan de soporte [Estándar] brinda información sobre mejores prácticas, estado de salud y acceso 24/7 a información de facturación al menor costo posible. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Desarrollador", "Básico", "Professional Direct"],
    "correctAnswer": "Básico",
    "categoryId": "azure-management"
  },
  {
    "id": 162,
    "text": "Puede crear una solicitud de soporte de Azure desde [support.microsoft.com]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "El portal de Azure", "El Centro del Conocimiento", "El centro de administración de Seguridad y Cumplimiento"],
    "correctAnswer": "El portal de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 163,
    "text": "Solución: Eliminar los grupos sin usar de Microsoft Entra ID para reducir costos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 164,
    "text": "El plan de soporte Azure [Estándar] es la opción de menor costo para recibir acceso 24/7 a ingenieros de soporte por teléfono. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Desarrollador", "Básico", "Professional Direct"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management"
  },
  {
    "id": 165,
    "text": "Todos los servicios de Azure en vista previa pública se proporcionan sin documentación. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Solo se puede configurar desde la CLI de Azure", "Excluidos de los Acuerdos de Nivel de Servicio", "Solo se puede configurar desde el portal de Azure"],
    "correctAnswer": "Excluidos de los Acuerdos de Nivel de Servicio",
    "categoryId": "azure-management"
  },
  {
    "id": 166,
    "text": "Un servicio de Azure está disponible para todos los clientes cuando está en [vista previa pública]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Vista previa privada", "Desarrollo", "Una suscripción a un Contrato Empresarial (EA)"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management"
  },
  {
    "id": 167,
    "text": "Solución: Debe incluir elasticidad en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 168,
    "text": "Solución: Debe incluir la escalabilidad en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 169,
    "text": "Solución: Debe incluir tolerancia a fallos en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 170,
    "text": "Solución: Debería utilizar Software como Servicio (SaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 171,
    "text": "Solución: Debe utilizar Plataforma como Servicio (PaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 172,
    "text": "Solución: Debe utilizar Infraestructura como Servicio (IaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 173,
    "text": "Solución: Se recomienda la incorporación de un centro de datos adicional para proporcionar recursos adicionales minimizando costos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 174,
    "text": "Solución: Se recomienda el uso de una nube híbrida para proporcionar recursos adicionales minimizando costos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 175,
    "text": "Solución: Se recomienda el uso de una nube privada para proporcionar recursos adicionales minimizando costos operativos y de capital. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 176,
    "text": "Solución: Recomiendas el uso del modelo de gasto elástico para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 177,
    "text": "Solución: Se recomienda el uso del modelo de gasto escalable para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 178,
    "text": "Solución: Se recomienda el uso del modelo de gasto operativo para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 179,
    "text": "Solución: Debe utilizar Azure Cosmos DB para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 180,
    "text": "Solución: Debe utilizar Azure Logic Apps para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 181,
    "text": "Solución: Debe utilizar Azure Machine Learning Studio para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 182,
    "text": "Solución: Recomiendas incluir el servicio Azure API Management en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 183,
    "text": "Solución: Recomiendas incluir grupos de administración en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 184,
    "text": "Solución: Recomiendas incluir plantillas de Azure Resource Manager en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 185,
    "text": "Solución: Su estrategia incluye dos VMs y una zona de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 186,
    "text": "Solución: Su estrategia incluye una VM y dos zonas de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 187,
    "text": "Solución: Su estrategia incluye dos VMs y dos zonas de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 188,
    "text": "Solución: Recomiendas el uso de Microsoft Managed Desktop para reducir esfuerzo administrativo al implementar VMs personalizadas semanalmente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 189,
    "text": "Solución: Recomiendas el uso de instancias de VMs reservadas de Azure para reducir esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 190,
    "text": "Solución: Recomiendas el uso de Azure DevTest Labs para reducir esfuerzo administrativo al implementar VMs personalizadas semanalmente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 191,
    "text": "Trabajadores remotos necesitan acceder a VMs en VNet1. ¿Qué debe hacer?",
    "options": ["Configurar una VPN de sitio a sitio (S2S)", "Configure una VPN de red virtual a red virtual", "Configurar una VPN de punto a sitio (P2S)", "Configurar DirectAccess en una VM con Windows Server 2012", "Configurar una VPN multisitio"],
    "correctAnswer": "Configurar una VPN de punto a sitio (P2S)",
    "categoryId": "azure-services"
  },
  {
    "id": 192,
    "text": "Solución: Recomiendas el uso de Microsoft Purview Information Protection para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 193,
    "text": "Solución: Recomiendas el uso de Azure Key Vault para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 194,
    "text": "Solución: Recomiendas el uso de MFA de Azure para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 195,
    "text": "Solución: Configuras el uso de Azure Key Vault para que usuarios con IP no identificada reciban recomendación automática de cambiar contraseña. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 196,
    "text": "Solución: Configurar la protección de Microsoft Entra ID para que usuarios con IP no identificada cambien contraseña automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 197,
    "text": "Solución: Configuras Microsoft Entra Privileged Identity Management para que usuarios con IP no identificada cambien contraseña automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 198,
    "text": "Solución: Incluyes Azure Service Bus en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 199,
    "text": "Solución: Incluyes grupos de seguridad de red (NSG) en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 200,
    "text": "Solución: Incluyes una puerta de enlace de red local en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 201,
    "text": "Solución: Planeas implementar MFA de Azure para minimizar el impacto en los usuarios tras la migración de Active Directory. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 202,
    "text": "Solución: Planeas sincronizar todas las cuentas de Active Directory con Microsoft Entra ID para minimizar el impacto en los usuarios. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 203,
    "text": "Solución: Planeas exigir el cambio de contraseña para minimizar el impacto en los usuarios tras la migración. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 204,
    "text": "Sus desarrolladores tienen 10 apps web con dominios personalizados, 10 GB de almacenamiento, instancias dedicadas, balanceo de carga y minimizar costos. ¿Qué plan Web Tier usar?",
    "options": ["Estándar", "Básico", "Gratis", "Compartido"],
    "correctAnswer": "Estándar",
    "categoryId": "azure-services"
  },
  {
    "id": 205,
    "text": "Solución: Genera una alerta de estado del servicio para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 206,
    "text": "Solución: Modifica una directiva de Azure para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 207,
    "text": "Solución: Genera una nueva solicitud de soporte para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 208,
    "text": "Solución: Planeas utilizar varios directorios de Microsoft Entra ID para segmentar Azure para las divisiones. ¿Cumple la solución minimizando el esfuerzo administrativo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 209,
    "text": "Solución: Planeas utilizar varios grupos de recursos para segmentar Azure para las divisiones minimizando el esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 210,
    "text": "Solución: Planeas utilizar varias suscripciones para segmentar Azure para las divisiones minimizando el esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 211,
    "text": "Una app web con URL miami.weyland.com, dos instancias, compatibilidad con SSL, 12 GB de almacenamiento y minimizar costos. ¿Qué plan Web Tier usar?",
    "options": ["Estándar", "Básico", "Gratis", "Compartido"],
    "correctAnswer": "Estándar",
    "categoryId": "azure-services"
  },
  {
    "id": 212,
    "text": "Empresa con centros de datos en Los Ángeles y Nueva York. Datos en múltiples nodos, en diferentes ubicaciones geográficas, y que puedan leerse desde la ubicación secundaria. ¿Qué opción de redundancia de almacenamiento recomienda?",
    "options": ["Almacenamiento georredundante", "Almacenamiento georredundante de solo lectura", "Almacenamiento con redundancia de zona", "Almacenamiento localmente redundante"],
    "correctAnswer": "Almacenamiento georredundante de solo lectura",
    "categoryId": "azure-services"
  },
  {
    "id": 213,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Estándar para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 214,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Professional Direct para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución minimizando costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 215,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Premier para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución minimizando costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 216,
    "text": "Solución: Recomiendas crear un rol de Azure para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 217,
    "text": "Solución: Recomiendas crear una política de Azure para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 218,
    "text": "Solución: Recomiendas crear una suscripción para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 219,
    "text": "¿Una suscripción de Azure puede estar asociada a varios inquilinos de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 220,
    "text": "¿Puede cambiar el inquilino de Microsoft Entra ID al que está asociada una suscripción de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 221,
    "text": "Cuando caduca una suscripción de Azure, ¿el inquilino de Microsoft Entra ID asociado se elimina automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 222,
    "text": "¿Una única cuenta de Microsoft puede utilizarse para administrar varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 223,
    "text": "¿Se pueden fusionar dos suscripciones de Azure en una sola?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 224,
    "text": "¿Una empresa puede utilizar recursos de múltiples suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 225,
    "text": "¿Las zonas de disponibilidad se pueden implementar en todas las regiones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 226,
    "text": "¿En las zonas de disponibilidad solo se pueden crear VMs que ejecuten Windows Server?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 227,
    "text": "¿Las zonas de disponibilidad se utilizan para replicar datos y aplicaciones en varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 228,
    "text": "Necesitas identificar qué servicio de almacenamiento usar para guardar los discos de datos no administrados de una VM. ¿Qué debes identificar?",
    "options": ["Contenedores", "Compartir archivos", "Tablas", "Colas"],
    "correctAnswer": "Contenedores",
    "categoryId": "azure-services"
  },
  {
    "id": 229,
    "text": "Necesitas implementar una solución de base de datos que pueda agregar datos simultáneamente desde varias regiones y almacenar documentos JSON. ¿Qué servicio implementas?",
    "options": ["Azure Cosmos DB", "Base de datos SQL", "Base de datos Azure para MySQL", "Base de datos Azure para PostgreSQL"],
    "correctAnswer": "Azure Cosmos DB",
    "categoryId": "azure-services"
  },
  {
    "id": 230,
    "text": "¿Todos los recursos de Azure implementados en un grupo de recursos deben usar la misma región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 231,
    "text": "Si se asigna una etiqueta a un grupo de recursos, ¿todos los recursos de Azure de ese grupo se asignarán a la misma etiqueta automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 232,
    "text": "Si se asignan permisos a un usuario para administrar un grupo de recursos, ¿podrá administrar todos los recursos de Azure en ese grupo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 233,
    "text": "Para garantizar disponibilidad del 99,99%, ¿cuál es el número mínimo de máquinas virtuales que debe recomendar?",
    "options": ["1", "2", "3"],
    "correctAnswer": "2",
    "categoryId": "azure-management"
  },
  {
    "id": 234,
    "text": "Para garantizar disponibilidad del 99,99%, ¿cuál es el número mínimo de zonas de disponibilidad que debe recomendar?",
    "options": ["1", "2", "3"],
    "correctAnswer": "2",
    "categoryId": "azure-management"
  },
  {
    "id": 235,
    "text": "¿Los datos en una cuenta de Azure Storage tienen automáticamente al menos tres copias?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 236,
    "text": "¿Todos los datos copiados a una cuenta de Azure Storage se respaldan automáticamente en otro centro de datos de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 237,
    "text": "¿Una cuenta de Azure Storage puede contener hasta 2 TB de datos y hasta un millón de archivos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 238,
    "text": "¿Puede implementar zonas de disponibilidad en todas las regiones de Azure donde tiene recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 239,
    "text": "¿América del Norte está representada por una única región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 240,
    "text": "¿Cada región de Azure tiene varios centros de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 241,
    "text": "¿Las transferencias de datos entre servicios de Azure ubicados en diferentes regiones de Azure son siempre gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 242,
    "text": "Necesitas recibir notificaciones cuando Microsoft planee realizar tareas de mantenimiento que puedan afectar a los recursos en tu suscripción. ¿Qué método deberías usar?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "correctAnswer": "Azure Service Health",
    "categoryId": "azure-management"
  },
  {
    "id": 243,
    "text": "¿Un host de sesión de Windows Virtual Desktop solo puede ejecutar Windows 10?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 244,
    "text": "¿Un grupo de hosts de Windows Virtual Desktop con 20 hosts admite un máximo de 20 conexiones de usuario simultáneas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 245,
    "text": "¿Windows Virtual Desktop admite la virtualización de escritorios y aplicaciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 246,
    "text": "[...] puede calcular el ahorro de costes por reducción del consumo eléctrico al migrar servidores SQL locales a Azure.",
    "options": ["Azure Migrate: Evaluación de servidores", "Calculadora del coste total de propiedad (TCO) de Azure", "El asistente de migración de bases de datos", "La calculadora de precios en Azure"],
    "correctAnswer": "Calculadora del coste total de propiedad (TCO) de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 247,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo del centro de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 248,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo de región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 249,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger los discos administrados ante una falla del centro de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 250,
    "text": "¿Una suscripción de Azure puede tener varios administradores de cuenta?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 251,
    "text": "¿Una suscripción a Azure solo se puede administrar mediante una cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 252,
    "text": "¿Un grupo de recursos de Azure puede contener varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 253,
    "text": "Para usar credenciales de Microsoft Entra ID en Windows 10, ¿el equipo debe estar unido a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 254,
    "text": "¿Los usuarios de Microsoft Entra ID se organizan mediante grupos de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 255,
    "text": "¿Los grupos de Microsoft Entra ID admiten reglas de pertenencia dinámicas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 256,
    "text": "Planeas implementar varias VMs y garantizar disponibilidad si falla un centro de datos. ¿Cuáles son dos posibles soluciones?",
    "options": ["Implementar VMs en dos o más zonas de disponibilidad", "Implementar VMs en dos o más grupos de recursos", "Implementar VMs en un conjunto de escalado", "Implementar VMs en dos o más regiones"],
    "correctAnswer": "Implementar VMs en dos o más zonas de disponibilidad",
    "correctAnswers": ["Implementar VMs en dos o más zonas de disponibilidad", "Implementar VMs en dos o más regiones"],
    "categoryId": "azure-services"
  },
  {
    "id": 257,
    "text": "¿Azure Monitor puede supervisar el rendimiento de los equipos locales?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 258,
    "text": "¿Azure Monitor puede enviar alertas a los grupos de seguridad de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 259,
    "text": "¿Azure Monitor puede generar alertas basadas en datos de un espacio de trabajo de Azure Log Analytics?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 260,
    "text": "Desde Azure Service Health, ¿puede un administrador ver el estado de todos los servicios en un entorno de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 261,
    "text": "Desde Azure Service Health, ¿puede un administrador crear una regla para recibir alertas si un servicio falla?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 262,
    "text": "Desde Azure Service Health, ¿puede un administrador prevenir un fallo del servicio?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 263,
    "text": "¿Qué panel del portal de Azure debe usarse para supervisar el estado de los servicios de Azure?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Monitor",
    "categoryId": "azure-management"
  },
  {
    "id": 264,
    "text": "¿Qué panel del portal de Azure debe usarse para explorar las imágenes de VMs disponibles?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Marketplace",
    "categoryId": "azure-management"
  },
  {
    "id": 265,
    "text": "¿Qué panel del portal de Azure debe usarse para ver recomendaciones de seguridad?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Asesor",
    "categoryId": "azure-management"
  },
  {
    "id": 266,
    "text": "¿Azure Advisor puede generar una lista de VMs de Azure protegidas por Azure Backup?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 267,
    "text": "Si implementa las recomendaciones de seguridad de Azure Advisor, ¿la puntuación de seguridad de su empresa disminuirá?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 268,
    "text": "Para mantener el soporte de Microsoft, ¿debe implementar las recomendaciones de seguridad de Azure Advisor en un plazo de 30 días?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 269,
    "text": "¿Qué herramienta puedes usar para enviar automáticamente una alerta si un administrador detiene una VM de Azure?",
    "options": ["Asesor de Azure", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "correctAnswer": "Azure Monitor",
    "categoryId": "azure-management"
  },
  {
    "id": 270,
    "text": "Necesitas crear una nueva VM de Azure desde una tableta Android. ¿Cuáles son tres posibles soluciones?",
    "options": ["Bash en Azure Cloud Shell", "PowerShell en Azure Cloud Shell", "Portal de PowerApps", "Centro de administración de Seguridad y Cumplimiento", "Portal de Azure"],
    "correctAnswer": "Bash en Azure Cloud Shell",
    "correctAnswers": ["Bash en Azure Cloud Shell", "PowerShell en Azure Cloud Shell", "Portal de Azure"],
    "categoryId": "azure-management"
  },
  {
    "id": 271,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo mejorar la seguridad de un entorno Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 272,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo reducir el costo de ejecución de VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 273,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo configurar los ajustes de red en las VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 274,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con Windows 10. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "categoryId": "azure-management"
  },
  {
    "id": 275,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con Ubuntu. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "categoryId": "azure-management"
  },
  {
    "id": 276,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con macOS Mojave. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "categoryId": "azure-management"
  },
  {
    "id": 277,
    "text": "¿Desde dónde puede acceder al Administrador de Cumplimiento?",
    "options": ["Centro de administración de Microsoft Entra ID", "Portal de Azure", "Centro de administración de Microsoft 365", "Portal de confianza de servicios de Microsoft"],
    "correctAnswer": "Portal de confianza de servicios de Microsoft",
    "categoryId": "azure-management"
  },
  {
    "id": 278,
    "text": "¿Cuáles tres equipos pueden ejecutar un script PowerShell para crear recursos de Azure?",
    "options": ["macOS con PowerShell Core 6.0", "Windows 10 con módulo Azure PowerShell", "Linux con módulo Azure PowerShell", "Linux con CLI de Azure instalada", "Chrome OS con Azure Cloud Shell"],
    "correctAnswer": "macOS con PowerShell Core 6.0",
    "correctAnswers": ["macOS con PowerShell Core 6.0", "Windows 10 con módulo Azure PowerShell", "Linux con módulo Azure PowerShell"],
    "categoryId": "azure-management"
  },
  {
    "id": 279,
    "text": "¿Azure Firewall cifrará todo el tráfico de red enviado desde Azure a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 280,
    "text": "¿Un Grupo de Seguridad de Red (NSG) cifrará todo el tráfico de red enviado desde Azure a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 281,
    "text": "¿Las VMs de Azure con Windows Server 2016 pueden cifrar el tráfico de red enviado a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 282,
    "text": "¿Microsoft Defender for Cloud puede supervisar los recursos de Azure y los recursos locales?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 283,
    "text": "¿Todas las funciones de Microsoft Defender para la nube son gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 284,
    "text": "¿Desde Microsoft Defender para la nube puede descargar un informe de cumplimiento normativo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 285,
    "text": "¿Qué servicio de Azure debe usarse para monitorear amenazas usando sensores?",
    "options": ["Azure Monitor", "Microsoft Defender para la nube", "Protección de identidad de Microsoft Entra ID", "Microsoft Defender para la identidad"],
    "correctAnswer": "Microsoft Defender para la identidad",
    "categoryId": "azure-management"
  },
  {
    "id": 286,
    "text": "¿Qué servicio de Azure debe usarse para aplicar MFA de Azure según una condición?",
    "options": ["Azure Monitor", "Microsoft Defender para la nube", "Protección de identidad de Microsoft Entra ID", "Microsoft Defender para la identidad"],
    "correctAnswer": "Protección de identidad de Microsoft Entra ID",
    "categoryId": "azure-management"
  },
  {
    "id": 287,
    "text": "¿Cuáles son dos posibles soluciones para que VM1 sea accesible desde Internet a través de HTTP?",
    "options": ["Modificar un perfil de Azure Traffic Manager", "Modificar un NSG", "Modificar un plan de protección contra ataques DDoS", "Modificar un firewall de Azure"],
    "correctAnswer": "Modificar un NSG",
    "correctAnswers": ["Modificar un NSG", "Modificar un firewall de Azure"],
    "categoryId": "azure-services"
  },
  {
    "id": 288,
    "text": "¿Puede habilitar el acceso Just In Time (JIT) a la VM mediante qué servicio?",
    "options": ["Azure Bastion", "Firewall de Azure", "Azure Front Door", "Microsoft Defender para la nube"],
    "correctAnswer": "Microsoft Defender para la nube",
    "categoryId": "azure-management"
  },
  {
    "id": 289,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una subred de red virtual?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 290,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una red virtual?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 291,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una interfaz de red?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 292,
    "text": "Después de crear una VM, necesitas modificarla para permitir conexiones al puerto TCP 8080. ¿Qué debes modificar?",
    "options": ["Grupo de Seguridad de Red (NSG)", "Puerta de enlace de red virtual", "Red virtual", "Tabla de ruta"],
    "correctAnswer": "Grupo de Seguridad de Red (NSG)",
    "categoryId": "azure-services"
  },
  {
    "id": 293,
    "text": "¿Puedes crear roles personalizados de Azure para controlar el acceso a los recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 294,
    "text": "¿Una cuenta de usuario puede asignarse a varios roles de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 295,
    "text": "¿Un grupo de recursos puede tener asignado el rol de Propietario a varios usuarios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 296,
    "text": "Necesitas recopilar y analizar automáticamente los eventos de seguridad de Microsoft Entra ID. ¿Qué deberías usar?",
    "options": ["Azure Sentinel", "Azure Synapse Analytics", "Microsoft Entra Connect", "Azure Key Vault"],
    "correctAnswer": "Azure Sentinel",
    "categoryId": "azure-management"
  },
  {
    "id": 297,
    "text": "¿Desde qué servicio puedes ver qué usuario desactivó una VM específica durante los últimos 14 días?",
    "options": ["Control de acceso de Azure IAM", "Centros de eventos de Azure", "Registro de actividad de Azure", "Azure Service Health"],
    "correctAnswer": "Registro de actividad de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 298,
    "text": "¿Qué servicio de Azure puede utilizarse como solución de gestión de información y eventos de seguridad (SIEM)?",
    "options": ["Servicios de análisis de Azure", "Azure Sentinel", "Microsoft Purview Information Protection", "Servicios cognitivos de Azure"],
    "correctAnswer": "Azure Sentinel",
    "categoryId": "azure-management"
  },
  {
    "id": 299,
    "text": "Su empresa implementa [...] para agregar automáticamente una marca de agua a documentos de Word que contienen información de tarjetas de crédito. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Protección contra ataques DDoS", "Protección de la información de Microsoft Purview", "Protección de identidad de Microsoft Entra ID"],
    "correctAnswer": "Protección de la información de Microsoft Purview",
    "categoryId": "azure-management"
  },
  {
    "id": 300,
    "text": "Tienes VNET1 en RG1. Asignas la directiva 'Tipo de recurso no permitido' especificando que las redes virtuales no están permitidas. VNET1 [...].",
    "options": ["Se elimina automáticamente", "Se mueve automáticamente a otro grupo de recursos", "Continúa funcionando con normalidad", "Ahora es un objeto de solo lectura"],
    "correctAnswer": "Continúa funcionando con normalidad",
    "categoryId": "azure-management"
  },
  {
    "id": 301,
    "text": "¿Puedes crear directivas de grupo en Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 302,
    "text": "¿Puedes vincular dispositivos Windows 10 a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 303,
    "text": "¿Puedes vincular dispositivos Android a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 304,
    "text": "El documento [...] explica qué datos procesa Microsoft, cómo los procesa y con qué finalidad.",
    "options": ["Declaración de privacidad de los servicios en línea de Microsoft", "Términos y condiciones de los servicios en línea de Microsoft", "Acuerdo de nivel de servicio en línea de Microsoft", "Acuerdo de suscripción en línea para Microsoft Azure"],
    "correctAnswer": "Declaración de privacidad de los servicios en línea de Microsoft",
    "categoryId": "azure-management"
  },
  {
    "id": 305,
    "text": "Una definición de iniciativa de Azure Policy es un [...].",
    "options": ["Colección de definiciones de políticas", "Colección de asignaciones de definiciones de directivas de Azure", "Grupo de definiciones de Azure Blueprints", "Grupo de asignaciones de roles RBAC"],
    "correctAnswer": "Colección de definiciones de políticas",
    "categoryId": "azure-management"
  },
  {
    "id": 306,
    "text": "[...] proporciona a las organizaciones la capacidad de gestionar el cumplimiento de los recursos de Azure en múltiples suscripciones.",
    "options": ["Grupos de recursos", "Grupos de gestión", "Políticas de Azure", "Planes de Azure App Service"],
    "correctAnswer": "Grupos de gestión",
    "categoryId": "azure-management"
  },
  {
    "id": 307,
    "text": "¿El Reglamento General de Protección de Datos (RGPD) define las normas de protección de datos y privacidad?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 308,
    "text": "¿El RGPD se aplica a las empresas que ofrecen bienes o servicios a particulares en la UE?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 309,
    "text": "¿Azure puede utilizarse para crear una infraestructura que cumpla con el RGPD?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 310,
    "text": "¿Puedes agregar una plantilla de Azure Resource Manager a un plano de Azure (Blueprint)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 311,
    "text": "¿Puede asignar un plano de Azure (Blueprint) a un grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 312,
    "text": "¿Puedes usar Azure Blueprints para otorgar permisos a un recurso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 313,
    "text": "¿Azure China es operado por Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 314,
    "text": "¿Azure Government es operado por Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 315,
    "text": "¿Azure Government solo está disponible para las agencias gubernamentales de EE. UU. y sus socios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 316,
    "text": "¿Un recurso de Azure puede tener varios bloqueos de eliminación?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 317,
    "text": "¿Un recurso de Azure hereda los bloqueos de su grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 318,
    "text": "Si un recurso de Azure tiene un bloqueo de solo lectura, ¿puede agregar un bloqueo de eliminación a ese recurso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 319,
    "text": "¿La autorización para acceder a los recursos de Azure solo se puede otorgar a usuarios de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 320,
    "text": "¿Las identidades almacenadas en Microsoft Entra ID, servicios en la nube de terceros y Active Directory local pueden usarse para acceder a recursos de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 321,
    "text": "¿Azure cuenta con servicios integrados de autenticación y autorización que proporcionan acceso seguro a los recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 322,
    "text": "¿Las identidades almacenadas en un Active Directory local se pueden sincronizar con Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 323,
    "text": "¿Puede consultar el informe de cumplimiento normativo de su empresa desde qué servicio?",
    "options": ["Asesor de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Microsoft Defender para la nube"],
    "correctAnswer": "Microsoft Defender para la nube",
    "categoryId": "azure-management"
  },
  {
    "id": 324,
    "text": "Su empresa tiene recursos en varias regiones y necesitas asegurarte de que los admins solo creen recursos en esas regiones. ¿Qué solución usarías?",
    "options": ["Un bloqueo de solo lectura", "Una política de Azure", "Un grupo directivo", "Una reserva"],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 325,
    "text": "¿Microsoft Entra ID requiere la implementación de controladores de dominio en VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 326,
    "text": "¿Microsoft Entra ID proporciona servicios de autenticación para recursos alojados en Azure y Microsoft 365?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 327,
    "text": "¿A cada cuenta de usuario de Microsoft Entra ID solo se le puede asignar una licencia?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 328,
    "text": "Para implementar MFA de Azure, ¿debe sincronizar las identidades locales con la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 329,
    "text": "¿Son la identificación con fotografía y el número de pasaporte métodos válidos para MFA de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 330,
    "text": "¿Puede configurar los registros de actividad de Microsoft Entra ID para que aparezcan en Azure Monitor?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 331,
    "text": "Desde Azure Monitor, ¿puede supervisar los recursos en varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 332,
    "text": "Desde Azure Monitor, ¿puede crear alertas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 333,
    "text": "Creas RG1 en Azure Resource Manager. Necesitas evitar la eliminación accidental de los recursos. ¿Qué configuración debes usar?",
    "options": ["Inicio rápido", "Costos de los recursos", "Despliegues", "Políticas", "Propiedades", "Bloqueos", "Script de automatización"],
    "correctAnswer": "Bloqueos",
    "categoryId": "azure-management"
  },
  {
    "id": 334,
    "text": "Necesitas impedir la creación de VMs únicamente en RG1, garantizando que se puedan crear otros objetos. ¿Qué deberías usar?",
    "options": ["Un candado", "Un rol de Azure", "Una etiqueta", "Una política de Azure"],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 335,
    "text": "Tienes una suscripción y 100 dispositivos Windows 10. Solo usuarios con últimos parches de seguridad pueden acceder a las apps integradas con Microsoft Entra ID. ¿Qué implementas?",
    "options": ["Una política de acceso condicional", "Azure Bastion", "Firewall de Azure", "Política de Azure"],
    "correctAnswer": "Una política de acceso condicional",
    "categoryId": "azure-management"
  },
  {
    "id": 336,
    "text": "[...] permite a los usuarios autenticarse en múltiples aplicaciones mediante el inicio de sesión único (SSO).",
    "options": ["Grupos de seguridad de aplicaciones en Azure", "ID de Microsoft Entra", "Azure Key Vault", "Microsoft Defender para la nube"],
    "correctAnswer": "ID de Microsoft Entra",
    "categoryId": "azure-management"
  },
  {
    "id": 337,
    "text": "Implementas un recurso de Azure. El recurso deja de estar disponible durante un período prolongado. Microsoft [...].",
    "options": ["Reembolso a tu cuenta bancaria", "Migrar el recurso a otra suscripción", "Abona el importe a tu cuenta de Azure", "Te envía un código de cupón de créditos de Azure"],
    "correctAnswer": "Abona el importe a tu cuenta de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 338,
    "text": "¿Qué tareas puede realizar utilizando Azure Advisor?",
    "options": ["Integrar Active Directory y Microsoft Entra ID", "Calcular los costos de una solución Azure", "Confirmar que la seguridad de la suscripción cumple las mejores prácticas", "Evaluar qué recursos locales se pueden migrar a Azure"],
    "correctAnswer": "Confirmar que la seguridad de la suscripción cumple las mejores prácticas",
    "categoryId": "azure-management"
  },
  {
    "id": 339,
    "text": "Si su empresa utiliza una cuenta gratuita de Azure, ¿solo podrá usar un subconjunto de los servicios de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 340,
    "text": "¿Todas las cuentas gratuitas de Azure caducan tras un período determinado?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 341,
    "text": "¿Puedes crear hasta 10 cuentas gratuitas de Azure utilizando la misma cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 342,
    "text": "¿Se debe acceder a todos los servicios de Azure en vista previa privada mediante un portal de Azure independiente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 343,
    "text": "¿Los servicios de Azure en versión preliminar pública se pueden utilizar en entornos de producción?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 344,
    "text": "¿Los servicios de Azure en versión preliminar pública están sujetos a un SLA?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 345,
    "text": "¿Una cuenta gratuita de Azure incluye un plan de soporte estándar?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 346,
    "text": "Relacione los servicios de Azure con las descripciones de redes correctas (ExpressRoute: privada, VPN Gateway: cifrada pública, VNet Peering: combina dos redes):",
    "options": ["ExpressRoute: privada; VPN Gateway: cifrada pública; VNet Peering: combina redes", "VPN Gateway: privada; ExpressRoute: combina redes; VNet Peering: cifrada pública", "VPN Gateway: privada; VNet Peering: combina redes; ExpressRoute: cifrada pública", "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública"],
    "correctAnswer": "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública",
    "categoryId": "azure-services"
  },
  {
    "id": 347,
    "text": "¿El soporte de los foros de MSDN solo se ofrece a las empresas que tienen una suscripción de pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 348,
    "text": "¿Un usuario al que se le haya asignado el rol de Propietario puede transferir la propiedad de una suscripción de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 349,
    "text": "¿Puedes convertir la suscripción de Azure de prueba gratuita a pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 350,
    "text": "Con Azure Reservations, ¿pagas menos por las VMs que con los precios de pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 351,
    "text": "¿Dos VMs de Azure que utilizan el tamaño B25 tienen los mismos costos mensuales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 352,
    "text": "Cuando se detiene una VM de Azure, ¿continúa pagando los costos de almacenamiento de esa VM?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 353,
    "text": "¿Cómo se calcula el porcentaje de tiempo de actividad mensual? [...] ÷ Minutos máximos disponibles × 100",
    "options": ["Tiempo de inactividad en minutos", "Minutos máximos disponibles", "(Máximo de minutos disponibles - tiempo de inactividad en minutos)"],
    "correctAnswer": "(Máximo de minutos disponibles - tiempo de inactividad en minutos)",
    "categoryId": "azure-management"
  },
  {
    "id": 354,
    "text": "¿Al crear grupos de recursos adicionales en una suscripción de Azure, se generan costos adicionales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 355,
    "text": "¿Al copiar varios gigabits de datos a Azure desde una red local a través de una VPN, se generan costos adicionales de transferencia?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 356,
    "text": "¿La mayoría de los servicios de Azure se presentan primero en versión preliminar privada antes de su lanzamiento en versión preliminar pública y posteriormente en GA?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 357,
    "text": "¿Los servicios de Azure en versión preliminar pública solo se pueden administrar mediante la CLI de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 358,
    "text": "Tu cuenta de prueba de Azure caducó. Ahora no puedes [...]. ¿Cuál es correcto?",
    "options": ["Crear cuentas de usuario adicionales de Microsoft Entra ID", "Iniciar una VM de Azure existente", "Acceder a tus datos almacenados en Azure", "Acceder al portal de Azure"],
    "correctAnswer": "Iniciar una VM de Azure existente",
    "categoryId": "azure-management"
  },
  {
    "id": 359,
    "text": "Solución: Recomendar un plan de soporte Professional Direct para contactar con ingenieros por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 360,
    "text": "¿Una cuenta gratuita de Azure tiene un límite de gasto?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 361,
    "text": "¿Una cuenta gratuita de Azure tiene un límite de 2 TB de datos que se pueden cargar en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 362,
    "text": "¿Una cuenta gratuita de Azure puede contener un número ilimitado de aplicaciones web?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 363,
    "text": "¿Un servicio de Azure en versión preliminar privada se lanza para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 364,
    "text": "¿Un servicio de Azure en versión preliminar pública se lanza para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 365,
    "text": "¿Un servicio de Azure en disponibilidad general se lanza a un subconjunto de clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 366,
    "text": "Con un plan basado en el consumo, ¿pagas una tarifa fija por todos los datos enviados hacia o desde VMs alojadas en la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 367,
    "text": "Con un plan basado en el consumo, ¿reduces los costos totales pagando solo por la capacidad adicional cuando la necesitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 368,
    "text": "¿La computación sin servidor es un ejemplo de un plan basado en el consumo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 369,
    "text": "¿El costo de los recursos de Azure puede variar entre regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 370,
    "text": "¿Una reserva de Azure se utiliza para reservar capacidad de servidor en un centro de datos específico?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 371,
    "text": "¿Puedes detener una instancia de Azure SQL Database para reducir costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 372,
    "text": "Tienes una app web con SLA del 99,95% y una base de datos SQL con SLA del 99,99%. El SLA compuesto para la aplicación es [...].",
    "options": ["El producto de ambos SLAs, que equivale al 99,94%", "El SLA más bajo, del 99,95%", "El SLA más alto, del 99,99%", "La diferencia entre los dos SLAs, que es del 0,05%"],
    "correctAnswer": "El producto de ambos SLAs, que equivale al 99,94%",
    "categoryId": "azure-management"
  },
  {
    "id": 373,
    "text": "¿El SLA garantiza un tiempo de actividad de al menos el 99,9% para los servicios de pago de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 374,
    "text": "¿Las empresas pueden aumentar el tiempo de actividad del SLA agregando recursos de Azure a varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 375,
    "text": "¿Las empresas pueden aumentar el tiempo de actividad del SLA mediante la compra de varias suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 376,
    "text": "Relacione los servicios IoT de Azure (IoT Hub: bidireccional; IoT Central: SaaS para IoT; Azure Sphere: hardware+software seguridad):",
    "options": ["IoT Hub: bidireccional; IoT Central: SaaS IoT; Sphere: hardware+software seguridad", "Sphere: bidireccional; IoT Hub: SaaS IoT; IoT Central: hardware+software seguridad", "Sphere: bidireccional; IoT Central: SaaS IoT; IoT Hub: hardware+software seguridad", "IoT Hub: bidireccional; Sphere: SaaS IoT; IoT Central: hardware+software seguridad"],
    "correctAnswer": "IoT Hub: bidireccional; IoT Central: SaaS IoT; Sphere: hardware+software seguridad",
    "categoryId": "azure-services"
  },
  {
    "id": 377,
    "text": "Para solicitar a Microsoft un aumento del límite de cuota de suscripción, ¿qué panel del portal de Azure debes usar?",
    "options": ["Crear un recurso", "Todos los servicios", "Favoritos", "Dashboard", "Todos los recursos", "Grupos de recursos", "Servicios de la aplicación", "Aplicaciones funcionales", "Bases de datos SQL", "Azure Cosmos DB", "Máquinas virtuales", "Balanceadores de carga", "Ayuda + soporte"],
    "correctAnswer": "Ayuda + soporte",
    "categoryId": "azure-management"
  },
  {
    "id": 378,
    "text": "Puedes usar Azure para enviar alertas por correo cuando el costo del período de facturación actual supere un límite. ¿Qué característica usar?",
    "options": ["Recomendaciones del asesor", "Control de acceso (IAM)", "Alertas presupuestarias", "Cumplimiento"],
    "correctAnswer": "Alertas presupuestarias",
    "categoryId": "azure-management"
  },
  {
    "id": 379,
    "text": "¿Desde el portal de Azure puede distinguir entre los servicios que están disponibles de forma general y los que están en vista previa pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 380,
    "text": "¿Una vez que un servicio de Azure está disponible de forma general, deja de actualizarse con nuevas funciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 381,
    "text": "¿Cuando crea recursos de Azure para un servicio en versión preliminar pública, debe volver a crearlos una vez que el servicio esté disponible de forma general?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 382,
    "text": "Al utilizar una conexión Azure ExpressRoute, ¿el tráfico de datos entrante desde una red local a Azure siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 383,
    "text": "¿El tráfico de datos saliente desde Azure a una red local siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 384,
    "text": "¿El tráfico de datos entre servicios de Azure dentro de la misma región de Azure siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 385,
    "text": "Su empresa tiene recursos sin usar. ¿Qué recursos sin usar debería eliminar para reducir costos?",
    "options": ["Las interfaces de red", "Las direcciones IP públicas", "Los grupos de Entra ID", "Las cuentas de usuario de Entra ID"],
    "correctAnswer": "Las direcciones IP públicas",
    "correctAnswers": ["Las interfaces de red", "Las direcciones IP públicas"],
    "categoryId": "azure-management"
  },
  {
    "id": 386,
    "text": "Si una VM de Azure tiene el estado Detenida (desasignada), ¿por qué seguirá pagando?",
    "options": ["Capacidad de cómputo", "Operaciones de E/S", "Redes", "Almacenamiento"],
    "correctAnswer": "Almacenamiento",
    "categoryId": "azure-management"
  },
  {
    "id": 387,
    "text": "¿Almacenar 1 TB de datos en Azure Blob Storage siempre tendrá el mismo costo, independientemente de la región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 388,
    "text": "¿Al usar una cuenta de Azure Storage v2 de uso general, solo se cobra por los datos almacenados y las operaciones de lectura/escritura son gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 389,
    "text": "¿La transferencia de datos entre cuentas de Azure Storage en diferentes regiones de Azure es gratuita?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 390,
    "text": "¿En Microsoft Entra ID Premium P2, se garantiza una disponibilidad de al menos el 99,9%?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 391,
    "text": "¿El SLA para Microsoft Entra ID Premium P2 es el mismo que el SLA para Microsoft Entra ID Free?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 392,
    "text": "¿Todos los clientes de Azure que pagan reciben un crédito si su tiempo de actividad mensual es inferior a la cantidad garantizada en el SLA?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 393,
    "text": "¿Agregar grupos de recursos a una suscripción de Azure genera costos adicionales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 394,
    "text": "¿Copiar 10 GB de datos a Azure desde una red local a través de una VPN genera costos adicionales de transferencia en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 395,
    "text": "¿Copiar 10 GB de datos de Azure a una red local a través de una VPN genera costos adicionales de transferencia de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 396,
    "text": "¿Cada suscripción de Azure puede contener varios administradores de cuenta?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 397,
    "text": "¿Cada suscripción a Azure solo puede administrarse mediante una cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 398,
    "text": "¿Un grupo de recursos de Azure contiene varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 399,
    "text": "Los datos en el nivel de acceso de archivo de una cuenta de Azure Storage [...].",
    "options": ["Se puede acceder en cualquier momento mediante azcopy.exe", "Solo se puede leer mediante Azure Backup", "Deben restaurarse antes de poder acceder a los datos", "Deben rehidratarse antes de poder acceder a los datos"],
    "correctAnswer": "Deben rehidratarse antes de poder acceder a los datos",
    "categoryId": "azure-services"
  },
  {
    "id": 400,
    "text": "Azure Cosmos DB es un ejemplo de una oferta [...].",
    "options": ["Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)", "Sin servidor", "Software como servicio (SaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 401,
    "text": "¿Se puede acceder al portal de Microsoft Service Trust mediante una cuenta de servicios en la nube de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 402,
    "text": "¿Compliance Manager puede utilizarse para rastrear las actividades de cumplimiento normativo relacionadas con los servicios en la nube de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 403,
    "text": "¿La función Mi biblioteca permite guardar documentos del Portal de confianza de servicios de Microsoft en una ubicación?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 404,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y una cuenta de Azure Storage. ¿Cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 405,
    "text": "¿Para implementar un modelo de nube híbrida, una empresa siempre debe migrar desde un modelo de nube privada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 406,
    "text": "¿Una empresa puede ampliar los recursos informáticos de su red interna utilizando la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 407,
    "text": "¿Azure DevOps Services permite a los desarrolladores implementar o actualizar aplicaciones en Azure mediante canalizaciones CI/CD?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 408,
    "text": "¿Azure DevOps Services incluye un repositorio Git para que los desarrolladores almacenen el código?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 409,
    "text": "¿Azure DevOps Services se puede utilizar para crear y alojar aplicaciones web?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 410,
    "text": "Para garantizar que VM1 no pueda conectarse a las demás VMs en un entorno de 20 VMs, VM1 debe [...].",
    "options": ["Implementarse en una red virtual separada", "Ejecutar un sistema operativo diferente", "Implementarse en un grupo de recursos independiente", "Tener dos interfaces de red"],
    "correctAnswer": "Implementarse en una red virtual separada",
    "categoryId": "azure-services"
  },
  {
    "id": 411,
    "text": "Planeas extender la red a Azure. La red contiene un dispositivo VPN con IP 131.107.200.1. ¿Qué recurso de Azure deberías crear para identificarlo?",
    "options": ["Redes virtuales", "Balanceadores de carga", "Puertas de enlace de redes virtuales", "Zonas DNS", "Perfiles del gestor de tráfico", "Redes virtuales (clásicas)", "Puertas de enlace de aplicaciones", "Puertas de enlace de red local", "Perfiles CDN", "Circuitos ExpressRoute", "Grupos de seguridad de red"],
    "correctAnswer": "Puertas de enlace de red local",
    "categoryId": "azure-services"
  },
  {
    "id": 412,
    "text": "[...] es el proceso de verificar las credenciales de un usuario.",
    "options": ["Autorización", "Autenticación", "Federación", "Ticketing"],
    "correctAnswer": "Autenticación",
    "categoryId": "azure-management"
  },
  {
    "id": 413,
    "text": "Si RG1 tiene un bloqueo de eliminación, ¿quién puede eliminar RG1?",
    "options": ["Únicamente un miembro del grupo de administradores globales", "El bloqueo de eliminación debe eliminarse antes de que un administrador pueda hacerlo", "Una directiva de Azure debe modificarse antes de que un administrador pueda hacerlo", "Se debe agregar una etiqueta de Azure antes"],
    "correctAnswer": "El bloqueo de eliminación debe eliminarse antes de que un administrador pueda hacerlo",
    "categoryId": "azure-management"
  },
  {
    "id": 414,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure proporciona control total sobre los sistemas operativos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 415,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure puede recibir memoria adicional cambiando el nivel de precios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 416,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure se puede configurar para escalar automáticamente según la demanda?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 417,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas PowerShell en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 418,
    "text": "Desde Azure Service Health, ¿puede un administrador ver el estado de todos los servicios implementados y de todos los demás servicios disponibles en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 419,
    "text": "Relacione servicios de seguridad: Analizar archivos de registro de VMs, mostrar puntuación de seguridad de suscripción, almacenar contraseñas para Azure Functions.",
    "options": ["Security Center: logs; Lighthouse: puntuación; Key Vault: contraseñas", "Sentinel: logs; Lighthouse: puntuación; Key Vault: contraseñas", "Sentinel: logs; Security Center: puntuación; Key Vault: contraseñas", "Sentinel: logs; Security Center: puntuación; Entra ID: contraseñas"],
    "correctAnswer": "Sentinel: logs; Security Center: puntuación; Key Vault: contraseñas",
    "categoryId": "azure-management"
  },
  {
    "id": 420,
    "text": "[...] proporciona una plataforma común para implementar objetos en una infraestructura en la nube y garantizar la coherencia. ¿Cuál es la respuesta correcta?",
    "options": ["Las directivas de Azure proporcionan", "Los grupos de recursos proporcionan", "Azure Resource Manager proporciona", "Los grupos de gestión proporcionan"],
    "correctAnswer": "Azure Resource Manager proporciona",
    "categoryId": "azure-management"
  },
  {
    "id": 421,
    "text": "¿Todos los recursos de Azure implementados en un único grupo de recursos deben compartir la misma región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 422,
    "text": "Si se establecen permisos para un grupo de recursos, ¿todos los recursos de Azure que pertenezcan a ese grupo heredarán dichos permisos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 423,
    "text": "Si creas dos VMs de Azure que utilicen el tamaño B2S, ¿cada VM generará siempre los mismos costos mensuales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 424,
    "text": "Cuando se detiene una VM de Azure, ¿continúa pagando los costos de almacenamiento?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 425,
    "text": "¿Cuál es el propósito principal de las asignaciones de Azure Policy?",
    "options": ["Para crear nuevas definiciones de políticas", "Para hacer cumplir los estándares de cumplimiento", "Para administrar grupos de recursos", "Para configurar la seguridad de la red", "Para automatizar la implementación de recursos"],
    "correctAnswer": "Para hacer cumplir los estándares de cumplimiento",
    "categoryId": "azure-management"
  },
  {
    "id": 426,
    "text": "Su empresa tiene Software Assurance con licencias de SQL Server. ¿Qué medidas tomaría para minimizar los costos de licenciamiento en VMs de Azure?",
    "options": ["Utilizar las reservas de Azure", "Utilizar la ventaja híbrida de Azure", "Detener las VMs fuera del horario laboral", "Configurar los presupuestos de Azure Cost Management"],
    "correctAnswer": "Utilizar la ventaja híbrida de Azure",
    "categoryId": "azure-management"
  },
  {
    "id": 427,
    "text": "Si su empresa utiliza una cuenta gratuita de Azure, ¿solo podrá implementar VMs de Azure y cuentas de almacenamiento de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 428,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas el portal de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 429,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas Bash en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 430,
    "text": "¿Qué servicio de Azure debería utilizarse para correlacionar eventos de múltiples recursos en un repositorio centralizado?",
    "options": ["Centros de eventos de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Azure Log Analytics"],
    "correctAnswer": "Azure Log Analytics",
    "categoryId": "azure-management"
  },
  {
    "id": 431,
    "text": "Al planificar la migración de un sitio web público a Azure, debe tener en cuenta que deberá [...].",
    "options": ["Implementar una VPN", "Pagar costos de uso mensuales", "Pagar para transferir todos los datos del sitio web a Azure", "Reducir el número de conexiones al sitio web"],
    "correctAnswer": "Pagar costos de uso mensuales",
    "categoryId": "azure-management"
  },
  {
    "id": 432,
    "text": "Cuando implementas SaaS, eres responsable de [configurar la alta disponibilidad]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Definir reglas de escalabilidad", "Instalar la solución SaaS", "Configurar la solución SaaS"],
    "correctAnswer": "Configurar la solución SaaS",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 433,
    "text": "¿Azure ofrece flexibilidad entre los gastos de capital (CapEx) y los gastos operativos (OpEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 434,
    "text": "¿Qué herramientas debería usar para crear, probar e implementar soluciones de análisis predictivo de IA en Azure?",
    "options": ["Aplicaciones lógicas de Azure", "Azure Machine Learning Designer", "Procesamiento por lotes de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Azure Machine Learning Designer",
    "categoryId": "azure-services"
  },
  {
    "id": 435,
    "text": "Solución: Recomendar un plan de soporte Estándar para contactar con ingenieros de soporte por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 436,
    "text": "¿A qué URL debes conectarte para administrar todos los recursos de Azure? https://[1].[2].com. ¿Cuál es [1]?",
    "options": ["administración", "portal", "www"],
    "correctAnswer": "portal",
    "categoryId": "azure-management"
  },
  {
    "id": 437,
    "text": "¿A qué URL debes conectarte para administrar todos los recursos de Azure? https://[1].[2].com. ¿Cuál es [2]?",
    "options": ["azur", "azure", "Microsoft"],
    "correctAnswer": "azure",
    "categoryId": "azure-management"
  },
  {
    "id": 438,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas el portal de PowerApps. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 439,
    "text": "Para implementar MFA de Azure, ¿debe implementar una solución de federación o sincronizar las identidades locales con la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 440,
    "text": "¿La MFA de Azure puede ser necesaria tanto para cuentas de usuario administrativas como para cuentas no administrativas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 441,
    "text": "Necesitas ver una lista de eventos de mantenimiento planificados que pueden afectar la disponibilidad de una suscripción. ¿Qué panel del portal de Azure debes usar?",
    "options": ["Dashboard", "Todos los recursos", "Grupos de recursos", "Servicios de la aplicación", "ID de Microsoft Entra", "Azure Monitor", "Asesor", "Centro de seguridad", "Ayuda + soporte"],
    "correctAnswer": "Ayuda + soporte",
    "categoryId": "azure-management"
  },
  {
    "id": 442,
    "text": "¿Una empresa puede ampliar la capacidad de su red interna utilizando la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 443,
    "text": "Solución: Implementas las VMs en dos o más grupos de recursos para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 444,
    "text": "[...] proporciona una plataforma común para desplegar objetos en una infraestructura en la nube. ¿Cuál es la respuesta correcta?",
    "options": ["Las políticas de Azure proporcionan", "Los grupos de recursos proporcionan", "Las plantillas de Azure Resource Manager proporcionan", "Los grupos de gestión proporcionan"],
    "correctAnswer": "Las plantillas de Azure Resource Manager proporcionan",
    "categoryId": "azure-management"
  },
  {
    "id": 445,
    "text": "¿Qué solución de implementación en la nube se utiliza para las VMs de Azure y las bases de datos SQL de Azure?",
    "options": ["Infraestructura como servicio (IaaS)", "Plataforma como servicio (PaaS)", "Software como servicio (SaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 446,
    "text": "Al planificar la migración de un sitio web público a Azure, ¿qué debe planificar?",
    "options": ["Implementar una VPN", "Pagar los costos de uso mensuales", "Pagar para transferir todos los datos del sitio web a Azure", "Reducir el número de conexiones al sitio web"],
    "correctAnswer": "Pagar los costos de uso mensuales",
    "categoryId": "azure-management"
  },
  {
    "id": 447,
    "text": "¿El modelo de precios de pago por uso de Azure es un ejemplo de gasto de capital (CapEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 448,
    "text": "¿Las instancias de VMs reservadas de Azure son un ejemplo de gastos operativos (OpEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 449,
    "text": "¿Implementar tu propio centro de datos es un ejemplo de gasto de capital (CapEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 450,
    "text": "¿Una empresa puede ampliar una nube privada añadiendo sus servidores físicos a la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 451,
    "text": "¿Para construir una nube híbrida, debe implementar recursos en la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 452,
    "text": "¿Una nube privada debe estar desconectada de internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 453,
    "text": "Solución: Implementas las VMs en un conjunto de escalado para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services"
  },
  {
    "id": 454,
    "text": "Solución: Implementas las VMs en dos o más zonas de disponibilidad para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 455,
    "text": "Cuando implementas SaaS, eres responsable de [...].",
    "options": ["Configuración de alta disponibilidad", "Definir reglas de escalabilidad", "Instalación de la solución SaaS", "Configurar la solución SaaS"],
    "correctAnswer": "Configurar la solución SaaS",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 456,
    "text": "Solución: Implementar las VMs en dos o más regiones para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 457,
    "text": "¿Los recursos de Azure solo pueden acceder a otros recursos del mismo grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management"
  },
  {
    "id": 458,
    "text": "¿Si elimina un grupo de recursos, se eliminarán todos los recursos que contiene?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 459,
    "text": "¿Un grupo de recursos puede contener recursos de varias regiones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management"
  },
  {
    "id": 460,
    "text": "¿Los datos copiados a una cuenta de Azure Storage se conservan automáticamente en al menos tres copias?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services"
  },
  {
    "id": 461,
    "text": "Su empresa planea migrar servidores a VMs de Azure. ¿Cuáles dos responsabilidades administrativas se eliminarán después de la migración?",
    "options": ["Sustitución de hardware de servidor averiado", "Realizar copias de seguridad de los datos de la aplicación", "Gestionar la seguridad de los servidores físicos", "Actualizar los sistemas operativos del servidor", "Gestionar los permisos de acceso a documentos compartidos"],
    "correctAnswer": "Sustitución de hardware de servidor averiado",
    "correctAnswers": ["Sustitución de hardware de servidor averiado", "Gestionar la seguridad de los servidores físicos"],
    "categoryId": "cloud-concepts"
  },
  {
    "id": 462,
    "text": "[La autorización] es el proceso de verificar las credenciales de un usuario. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Autenticación", "Federación", "Ticketing"],
    "correctAnswer": "Autenticación",
    "categoryId": "azure-management"
  },
  {
    "id": 463,
    "text": "Planeas migrar varios servidores de una red local a Azure. ¿Qué beneficio principal del servicio de nube pública deberías identificar?",
    "options": ["La nube pública es propiedad del público, NO de una corporación privada", "Todos los recursos de la nube pública son de libre acceso para cualquier persona", "La nube pública es una solución de colaboración colectiva", "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos"],
    "correctAnswer": "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos",
    "categoryId": "cloud-concepts"
  }
];