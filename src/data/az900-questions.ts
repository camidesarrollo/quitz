import type { Question } from "@/types/quiz";

export const az900Questions: Question[] = [
  {
    "id": 1,
    "text": "Si planea alojar una aplicación web en la plataforma Azure como solución de servicio de Azure Web Apps, ¿la plataforma tendrá la capacidad de escalar automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Azure Web Apps es un servicio de plataforma como servicio (PaaS) que ofrece escalado automático, lo que permite a las aplicaciones web ajustarse automáticamente a la demanda sin necesidad de intervención manual."
  },
  {
    "id": 2,
    "text": "Decides crear 2 máquinas virtuales. Cada máquina virtual es del tamaño D2s v3. ¿Generarán siempre estas máquinas el mismo coste mensual?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "El coste mensual de las máquinas virtuales en Azure puede variar según factores como la región de implementación, el uso de recursos, el tipo de suscripción y las opciones de facturación. Aunque ambas máquinas virtuales sean del mismo tamaño, podrían generar costes diferentes debido a estas variables."
  },
  {
    "id": 3,
    "text": "Tu equipo necesita una herramienta que proporcione un asistente digital en línea con soporte de voz. ¿Cuál de los siguientes servicios se puede utilizar para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Azure AI bot",
    "categoryId": "azure-services",
    "explaination": "Azure AI Bot Service es una plataforma que permite crear, probar e implementar bots inteligentes que pueden interactuar con los usuarios a través de texto o voz, proporcionando asistencia digital en línea."
  },
  {
    "id": 4,
    "text": "Tu equipo necesita una herramienta que pueda utilizar entrenamientos anteriores para proporcionar predicciones con una probabilidad muy alta. ¿Cuál de los siguientes servicios puede utilizarse para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Aprendizaje automático de Azure",
    "categoryId": "azure-services",
    "explaination": "Azure Machine Learning es un servicio de inteligencia artificial que permite a los desarrolladores y científicos de datos crear, entrenar e implementar modelos de aprendizaje automático para hacer predicciones basadas en datos históricos."
  },
  {
    "id": 5,
    "text": "Tu equipo necesita una herramienta que ofrezca capacidades de computación sin servidor. ¿Cuál de los siguientes servicios se puede utilizar para este propósito?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Funciones de Azure",
    "categoryId": "azure-services",
    "explaination": "Azure Functions es un servicio de computación sin servidor que permite ejecutar código en respuesta a eventos sin tener que preocuparse por la infraestructura subyacente, lo que facilita la creación de aplicaciones escalables y eficientes."
  },
  {
    "id": 6,
    "text": "Tu equipo necesita una herramienta que pueda procesar datos de millones de sensores. ¿Cuál de los siguientes servicios puede utilizarse para este fin?",
    "options": ["Aprendizaje automático de Azure", "Centro de IoT de Azure", "Azure AI bot", "Funciones de Azure"],
    "correctAnswer": "Centro de IoT de Azure",
    "categoryId": "azure-services",
    "explaination": "Azure IoT Hub es un servicio de plataforma que permite la comunicación bidireccional entre aplicaciones y dispositivos IoT, facilitando la recopilación, el procesamiento y el análisis de datos de millones de sensores y dispositivos conectados."
  },
  {
    "id": 7,
    "text": "Una empresa necesita implementar recursos en Azure que abarquen varios departamentos, del mismo tipo, y automatizar la implementación. ¿Cuál de las siguientes opciones utilizaría?",
    "options": ["Conjuntos de escalado de máquinas virtuales", "Grupos de gestión", "ID de Microsoft Entra", "Plantillas de Azure Resource Manager"],
    "correctAnswer": "Plantillas de Azure Resource Manager",
    "categoryId": "azure-management",
    "explaination": "Las plantillas de Azure Resource Manager (ARM) son archivos JSON que definen la infraestructura y la configuración de los recursos de Azure. Permiten la implementación automatizada y repetible de recursos en Azure, lo que es ideal para implementar recursos del mismo tipo en varios departamentos."
  },
  {
    "id": 8,
    "text": "Su empresa necesita implementar una aplicación en máquinas virtuales en Azure con un SLA del 99,99%. ¿Cuál es el número mínimo de máquinas virtuales y zonas de disponibilidad?",
    "options": ["Una máquina virtual y una zona de disponibilidad", "Dos máquinas virtuales y una zona de disponibilidad", "Una máquina virtual y dos zonas de disponibilidad", "Dos máquinas virtuales y dos zonas de disponibilidad"],
    "correctAnswer": "Dos máquinas virtuales y dos zonas de disponibilidad",
    "categoryId": "azure-management",
    "explaination": "Para lograr un SLA del 99,99% en Azure, es necesario implementar al menos dos máquinas virtuales en dos zonas de disponibilidad diferentes. Esto garantiza que si una zona de disponibilidad experimenta una interrupción, la otra zona puede seguir funcionando, manteniendo la alta disponibilidad de la aplicación."
  },
  {
    "id": 9,
    "text": "Tu equipo necesita una herramienta que permita correlacionar eventos de múltiples recursos en un repositorio central. ¿Cuál puede utilizarse para este propósito?",
    "options": ["Centros de eventos de Azure", "Microsoft Defender para la nube", "ID de Microsoft Entra", "Azure Log Analytics"],
    "correctAnswer": "Azure Log Analytics",
    "categoryId": "azure-management",
    "explaination": "Azure Log Analytics es un servicio que permite recopilar, correlacionar y analizar datos de eventos de múltiples recursos de Azure en un repositorio central, facilitando la supervisión y el diagnóstico de problemas en la infraestructura y las aplicaciones."
  },
  {
    "id": 10,
    "text": "Una empresa planea alojar una aplicación en una VM de Azure. Usted decide implementar un plan de protección contra ataques DDoS para que sea accesible desde Internet a través de HTTPS. ¿Esto cumpliría con el requisito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "El plan de protección contra ataques DDoS de Azure proporciona mitigación automática contra ataques DDoS, pero no garantiza que la aplicación sea accesible a través de HTTPS. Para cumplir con el requisito, también se necesitaría configurar un servicio de balanceo de carga o un firewall de aplicaciones web para gestionar el tráfico HTTPS."
  },
  {
    "id": 11,
    "text": "Una empresa planea alojar una aplicación en una VM de Azure. Usted decide implementar un perfil de Azure Traffic Manager para que sea accesible desde Internet a través de HTTPS. ¿Esto cumpliría con el requisito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Azure Traffic Manager es un servicio de balanceo de carga que distribuye el tráfico a través de múltiples recursos, pero no proporciona protección contra ataques DDoS ni garantiza la seguridad de la aplicación. Para cumplir con el requisito, también se necesitaría implementar un plan de protección contra ataques DDoS y configurar un firewall de aplicaciones web para gestionar el tráfico HTTPS."
  },
  {
    "id": 12,
    "text": "¿Cuáles de los siguientes clientes pueden usar Azure Government para desarrollar una solución en la nube? (Seleccione 2)",
    "options": ["Entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos", "Una entidad gubernamental europea", "Un contratista del gobierno europeo"],
    "correctAnswer": "Entidad del gobierno de los Estados Unidos",
    "correctAnswers": ["Entidad del gobierno de los Estados Unidos", "Un contratista del gobierno de los Estados Unidos"],
    "categoryId": "azure-management",
    "explaination": "Azure Government es una nube dedicada diseñada específicamente para satisfacer las necesidades de las entidades gubernamentales de los Estados Unidos y sus contratistas. No está disponible para entidades gubernamentales o contratistas fuera de los Estados Unidos."
  },
  {
    "id": 13,
    "text": "¿Es necesario implementar una solución federada para implementar la autenticación multifactor (MFA)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No es necesario implementar una solución federada para utilizar la autenticación multifactor (MFA) en Azure. Azure Active Directory (Azure AD) ofrece MFA como una característica integrada que se puede habilitar sin necesidad de una solución federada, aunque también es compatible con soluciones federadas si se desea una integración más personalizada."
  },
  {
    "id": 14,
    "text": "¿Son la identificación con foto y el número de pasaporte métodos válidos para la autenticación multifactor (MFA) en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La autenticación multifactor (MFA) en Azure generalmente se basa en factores como algo que el usuario sabe (contraseña), algo que el usuario tiene (dispositivo móvil para recibir códigos de verificación) o algo que el usuario es (biometría como huellas dactilares o reconocimiento facial). La identificación con foto y el número de pasaporte no son métodos estándar de MFA en Azure."
  },
  {
    "id": 15,
    "text": "¿Cuál plan de soporte brinda información sobre mejores prácticas, estado de salud y notificaciones, y acceso 24/7 a información de facturación al menor costo posible?",
    "options": ["Básico", "Estándar", "Premier", "Desarrollador"],
    "correctAnswer": "Básico",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Básico de Azure ofrece acceso a información sobre mejores prácticas, estado de salud y notificaciones, así como acceso 24/7 a información de facturación, todo al menor costo posible. Sin embargo, no incluye acceso a ingenieros de soporte para asistencia técnica."
  },
  {
    "id": 16,
    "text": "Si tiene previsto alojar una aplicación web en Azure Web Apps, ¿tendrá control total sobre el sistema operativo subyacente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Azure Web Apps es un servicio de plataforma como servicio (PaaS) que abstrae la infraestructura subyacente, lo que significa que los usuarios no tienen control total sobre el sistema operativo. Azure se encarga de la administración del sistema operativo, las actualizaciones y el mantenimiento, permitiendo a los desarrolladores centrarse en la aplicación en lugar de la infraestructura."
  },
  {
    "id": 17,
    "text": "Si detienes una máquina virtual D2s_v3, ¿incurrirás en algún costo por el almacenamiento asociado?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Cuando detienes una máquina virtual en Azure, dejas de incurrir en costos por el uso de la máquina virtual, pero los costos asociados al almacenamiento de los discos de la máquina virtual continúan. Esto se debe a que los discos siguen existiendo y ocupando espacio en el almacenamiento, lo que genera costos hasta que se eliminen o se  liberen."
  },
  {
    "id": 18,
    "text": "Al planificar los costos de recursos de infraestructura en Azure, ¿existe flexibilidad en cuanto a los gastos de capital y operativos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Azure ofrece flexibilidad en la gestión de costos, permitiendo a las empresas optar por modelos de gastos de capital (CapEx) o gastos operativos (OpEx) según sus necesidades. Las empresas pueden elegir entre pagar por recursos bajo demanda (OpEx) o reservar recursos a largo plazo para obtener descuentos (CapEx), lo que les permite adaptar su estrategia de costos a sus objetivos financieros."
  },
  {
    "id": 19,
    "text": "Al usar Software como Servicio (SaaS) en Azure, ¿de cuál de las siguientes opciones serías responsable?",
    "options": ["Alta disponibilidad de la solución", "Configuración de la solución", "Instalando la solución", "Escalabilidad de la solución"],
    "correctAnswer": "Configuración de la solución",
    "categoryId": "cloud-concepts",
    "explaination": "En un modelo de Software como Servicio (SaaS), el proveedor del servicio es responsable de la alta disponibilidad, la instalación y la escalabilidad de la solución. El cliente es responsable de configurar la solución según sus necesidades específicas, como personalizar las opciones, gestionar los usuarios y ajustar las configuraciones para satisfacer los requisitos del negocio."
  },
  {
    "id": 20,
    "text": "Una empresa migra servidores locales a Azure. El departamento de continuidad del negocio requiere disponibilidad si un centro de datos de Azure deja de funcionar. ¿Qué concepto se consideraría en la fase de diseño?",
    "options": ["Escalabilidad", "Tolerancia a fallos", "Baja latencia", "Elasticidad"],
    "correctAnswer": "Tolerancia a fallos",
    "categoryId": "cloud-concepts",
    "explaination": "La tolerancia a fallos es la capacidad de un sistema para continuar funcionando incluso cuando ocurren fallas en sus componentes. En el contexto de Azure, esto implica diseñar soluciones que puedan manejar la falla de un centro de datos sin interrumpir la disponibilidad del servicio."
  },
  {
    "id": 21,
    "text": "¿En cuál de las siguientes circunstancias podría una empresa plantearse el desmantelamiento de su centro de datos?",
    "options": ["Si tienen su infraestructura en una nube privada", "Si tienen su infraestructura en la nube pública", "Si tienen su infraestructura en una nube híbrida"],
    "correctAnswer": "Si tienen su infraestructura en la nube pública",
    "categoryId": "cloud-concepts",
    "explaination": "Una empresa podría considerar el desmantelamiento de su centro de datos si ha migrado completamente su infraestructura a una nube pública, como Azure. En este caso, la empresa ya no necesitaría mantener un centro de datos local, ya que todos sus recursos y servicios estarían alojados en la nube pública."
  },
  {
    "id": 22,
    "text": "Una empresa planea migrar un sitio web público a Azure. ¿Qué aspectos debe tener en cuenta al planificar la migración?",
    "options": ["Necesitarían implementar una VPN", "Tendrían que pagar el costo de transferir el sitio web a Azure", "Tendrían que pagar los costos mensuales del alojamiento del sitio web", "Tendrían que pagar por el número de conexiones al sitio web"],
    "correctAnswer": "Tendrían que pagar los costos mensuales del alojamiento del sitio web",
    "categoryId": "azure-management",
    "explaination": "Al migrar un sitio web público a Azure, la empresa no tendría que pagar por la transferencia del sitio web a Azure ni por el número de conexiones al sitio web. Sin embargo, sí tendría que pagar los costos mensuales asociados con el alojamiento del sitio web en Azure, que pueden variar según el servicio utilizado y el nivel de recursos asignados."
  },
  {
    "id": 23,
    "text": "Un administrador necesita ejecutar un script PowerShell para crear una VM en Azure. ¿Se ejecutaría el script en un equipo con Linux y las herramientas de la CLI de Azure instaladas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "PowerShell es un shell de línea de comandos y un lenguaje de scripting desarrollado por Microsoft, y no es compatible de forma nativa con sistemas operativos Linux. Aunque existen versiones de PowerShell para Linux, ejecutar un script PowerShell en un equipo con Linux requeriría la instalación de PowerShell Core, lo que no es común en entornos Linux donde se prefiere la CLI de Azure o herramientas nativas como Bash."
  },
  {
    "id": 24,
    "text": "¿Sería posible ejecutar un script PowerShell en una máquina con Chrome OS usando Azure Cloud Shell?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure Cloud Shell es un entorno de shell basado en la nube que se puede acceder a través del portal de Azure, y es compatible con PowerShell. Esto significa que los usuarios pueden ejecutar scripts PowerShell desde cualquier dispositivo con acceso a Internet, incluyendo máquinas con Chrome OS, sin necesidad de instalar PowerShell localmente."
  },
  {
    "id": 25,
    "text": "¿Sería posible ejecutar un script PowerShell en una máquina con macOS y PowerShell Core instalados?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "PowerShell Core es una versión multiplataforma de PowerShell que se puede instalar en sistemas operativos como macOS. Por lo tanto, sería posible ejecutar un script PowerShell en una máquina con macOS y PowerShell Core instalado, permitiendo a los usuarios gestionar recursos de Azure desde su dispositivo macOS."
  },
  {
    "id": 26,
    "text": "Un administrador necesita ver la lista de eventos de mantenimiento planificados que pueden afectar la disponibilidad de los recursos. ¿Cuál sección del portal de Azure debe considerar?",
    "options": ["Grupos de recursos", "ID de Microsoft Entra", "Asesor de Azure", "Ayuda + Soporte"],
    "correctAnswer": "Ayuda + Soporte",
    "categoryId": "azure-management",
    "explaination": "La sección 'Ayuda + Soporte' del portal de Azure proporciona información sobre eventos de mantenimiento planificados que pueden afectar la disponibilidad de los recursos. Aquí, los administradores pueden revisar los detalles de los eventos programados y planificar en consecuencia para minimizar el impacto en sus aplicaciones y servicios."
  },
  {
    "id": 27,
    "text": "Tu equipo necesita una solución integrada para la implementación de código. ¿Cuál de los siguientes servicios puede utilizarse?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Azure DevOps",
    "categoryId": "azure-services",
    "explaination": "Azure DevOps es un conjunto de servicios que proporciona herramientas para la planificación, desarrollo, entrega y mantenimiento de software. Ofrece integración continua y entrega continua (CI/CD), lo que permite a los equipos implementar código de manera eficiente y automatizada."
  },
  {
    "id": 28,
    "text": "Tu equipo necesita una herramienta que proporcione orientación y recomendaciones para mejorar un entorno Azure. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Asesor de Azure",
    "categoryId": "azure-management",
    "explaination": "Azure Advisor es un servicio que proporciona recomendaciones personalizadas para optimizar los recursos de Azure en términos de rendimiento, seguridad, confiabilidad y costos. Ayuda a los equipos a mejorar su entorno Azure al ofrecer sugerencias basadas en las mejores prácticas y el análisis de los recursos existentes."
  },
  {
    "id": 29,
    "text": "Tu equipo necesita una herramienta que permita crear aplicaciones inteligentes basadas en inteligencia artificial. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Servicios cognitivos de Azure",
    "categoryId": "azure-services",
    "explaination": "Los Servicios Cognitivos de Azure son un conjunto de APIs y servicios que permiten a los desarrolladores crear aplicaciones inteligentes utilizando capacidades de inteligencia artificial, como visión por computadora, procesamiento de lenguaje natural, reconocimiento de voz y análisis de sentimientos."
  },
  {
    "id": 30,
    "text": "Tu equipo necesita una herramienta para supervisar las aplicaciones web implementadas en Azure. ¿Cuál?",
    "options": ["Asesor de Azure", "Servicios cognitivos de Azure", "Información sobre aplicaciones de Azure", "Azure DevOps"],
    "correctAnswer": "Información sobre aplicaciones de Azure",
    "categoryId": "azure-management",
    "explaination": "Información sobre aplicaciones de Azure es un servicio de supervisión y análisis que proporciona información detallada sobre el rendimiento, la disponibilidad y el uso de las aplicaciones web implementadas en Azure. Permite a los equipos identificar y resolver problemas rápidamente para mejorar la experiencia del usuario."
  },
  {
    "id": 31,
    "text": "Un equipo necesita compartir archivos habilitando unidades de red mapeadas desde equipos con Windows 10. ¿Cuál sería la solución de almacenamiento ideal?",
    "options": ["Azure Blob Storage", "Azure Storage Files", "Azure Storage Queues", "Azure Storage Tables"],
    "correctAnswer": "Azure Storage Files",
    "categoryId": "azure-services",
    "explaination": "Azure Storage Files es la solución ideal para compartir archivos en un entorno Windows 10, ya que permite mapear unidades de red y acceder a los archivos de forma sencilla y eficiente."
  },
  {
    "id": 32,
    "text": "Una empresa desea alojar un almacén de datos que pueda almacenar documentos JSON y gestionar escrituras desde múltiples regiones. ¿Cuál es ideal?",
    "options": ["Base de datos SQL de Azure", "Azure Cosmos DB", "Azure Cache Redis", "Azure Synapse Analytics"],
    "correctAnswer": "Azure Cosmos DB",
    "categoryId": "azure-services",
    "explaination": "Azure Cosmos DB es un servicio de base de datos NoSQL que ofrece baja latencia, alta disponibilidad y escalabilidad global. Es ideal para almacenar documentos JSON y gestionar escrituras desde múltiples regiones, lo que lo convierte en la opción perfecta para el caso descrito."
  },
  {
    "id": 33,
    "text": "¿Es necesario que las máquinas virtuales implementadas en un grupo de recursos en la región Central de EE. UU. también se implementen únicamente en esa región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No es necesario que las máquinas virtuales implementadas en un grupo de recursos estén limitadas a la misma región. Azure permite implementar recursos en diferentes regiones dentro del mismo grupo de recursos, lo que proporciona flexibilidad para distribuir los recursos según las necesidades de la aplicación y la estrategia de disponibilidad."
  },
  {
    "id": 34,
    "text": "Un equipo planea asignar etiquetas a un grupo de recursos. ¿La etiqueta sería heredada automáticamente por los recursos del grupo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas en Azure no se heredan automáticamente por los recursos dentro de un grupo de recursos. Cada recurso debe etiquetarse individualmente, aunque se pueden usar plantillas o scripts para aplicar etiquetas de manera consistente a múltiples recursos."
  },
  {
    "id": 35,
    "text": "Se ha asignado un conjunto de permisos IAM a un grupo de recursos. ¿Los recursos del grupo heredarán automáticamente esos permisos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "En Azure, los permisos de IAM asignados a un grupo de recursos se heredan automáticamente por los recursos dentro de ese grupo. Esto significa que si se asignan permisos a un grupo de recursos, todos los recursos dentro de ese grupo tendrán esos permisos, lo que facilita la gestión de acceso y seguridad."
  },
  {
    "id": 36,
    "text": "¿Cuál de los siguientes servicios se puede utilizar para crear, probar e implementar análisis predictivos para IA en Azure?",
    "options": ["Funciones de Azure", "Aplicaciones lógicas de Azure", "Procesamiento por lotes de Azure", "Azure Machine Learning Studio"],
    "correctAnswer": "Azure Machine Learning Studio",
    "categoryId": "azure-services",
    "explaination": "Azure Machine Learning Studio es una plataforma de desarrollo de inteligencia artificial que permite a los usuarios crear, probar e implementar modelos de análisis predictivo para IA en Azure. Ofrece una interfaz visual y herramientas integradas para facilitar el proceso de desarrollo de modelos de aprendizaje automático."
  },
  {
    "id": 37,
    "text": "¿La herramienta Azure Advisor ofrece recomendaciones sobre cómo configurar los ajustes de red para las máquinas virtuales de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure Advisor proporciona recomendaciones para optimizar los recursos de Azure en términos de rendimiento, seguridad, confiabilidad y costos, pero no se centra específicamente en la configuración de ajustes de red para las máquinas virtuales. Para recomendaciones relacionadas con la red, se podrían utilizar otras herramientas como Azure Network Watcher o Azure Security Center."
  },
  {
    "id": 38,
    "text": "¿La herramienta Azure Advisor ofrece recomendaciones sobre cómo ahorrar costos al alojar máquinas virtuales en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure Advisor proporciona recomendaciones para optimizar los recursos de Azure, incluyendo sugerencias para ahorrar costos al alojar máquinas virtuales. Esto puede incluir recomendaciones para reducir el tamaño de las máquinas virtuales, eliminar recursos no utilizados o aprovechar opciones de reserva para obtener descuentos."
  },
  {
    "id": 39,
    "text": "¿Azure Advisor podría ofrecer recomendaciones sobre cómo mejorar la seguridad de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure Advisor proporciona recomendaciones para mejorar la seguridad de los recursos de Azure, incluyendo Microsoft Entra ID. Puede ofrecer sugerencias para fortalecer la autenticación, configurar políticas de acceso condicional y aplicar mejores prácticas de seguridad para proteger las identidades y los recursos asociados."
  },
  {
    "id": 40,
    "text": "Un ingeniero de soporte tiene un ordenador con Ubuntu. ¿Cuál de las siguientes herramientas de administración de Azure podría ejecutarse desde este ordenador?",
    "options": ["Interfaz de línea de comandos de Azure", "Azure PowerShell", "El portal de Azure"],
    "correctAnswer": "Interfaz de línea de comandos de Azure",
    "correctAnswers": ["Interfaz de línea de comandos de Azure", "Azure PowerShell", "El portal de Azure"],
    "categoryId": "azure-management",
    "explaination": "La Interfaz de línea de comandos de Azure (Azure CLI) es compatible con sistemas operativos Linux, incluyendo Ubuntu, lo que permite a los ingenieros de soporte administrar recursos de Azure desde su ordenador. Azure PowerShell también es compatible con Linux a través de PowerShell Core, y el portal de Azure se puede acceder desde cualquier navegador web, independientemente del sistema operativo."
  },
  {
    "id": 41,
    "text": "Su empresa configuró Azure y Microsoft Entra ID. Cuando usuarios se conectan desde Internet con una IP anónima, ¿cuál servicio puede exigir cambio de contraseña automático?",
    "options": ["Microsoft Entra Connect", "Protección de identidad de Microsoft Entra", "Gestión de identidades privilegiadas de Microsoft Entra", "Microsoft Defender para la identidad"],
    "correctAnswer": "Protección de identidad de Microsoft Entra",
    "categoryId": "azure-management",
    "explaination": "La Protección de identidad de Microsoft Entra es un servicio que ayuda a proteger las identidades en Azure AD al detectar actividades sospechosas, como inicios de sesión desde IP anónimas. Puede configurar políticas para exigir un cambio de contraseña automático cuando se detectan estas actividades, mejorando así la seguridad de las cuentas de usuario."
  },
  {
    "id": 42,
    "text": "Una empresa necesita limitar el tipo de conexiones desde servidores web y de bases de datos en Azure. ¿Cuál opción puede utilizarse?",
    "options": ["Grupos de seguridad de red", "Protección de identidad de Microsoft Entra", "VPN de Azure", "Tablas de rutas de Azure"],
    "correctAnswer": "Grupos de seguridad de red",
    "categoryId": "azure-services",
    "explaination": "Los Grupos de seguridad de red (NSG) en Azure son una herramienta que permite controlar el tráfico de red hacia y desde los recursos de Azure. Al configurar reglas en un NSG, una empresa puede limitar el tipo de conexiones permitidas desde servidores web y de bases de datos, mejorando la seguridad y el control del tráfico de red."
  },
  {
    "id": 43,
    "text": "¿Cuál de las siguientes opciones puede utilizarse para gestionar el cumplimiento de recursos en múltiples suscripciones?",
    "options": ["Grupos de recursos", "Grupos de gestión", "Directivas de Azure", "Plantillas de Azure Resource Manager"],
    "correctAnswer": "Directivas de Azure",
    "categoryId": "azure-management",
    "explaination": "Las Directivas de Azure son una herramienta que permite a las organizaciones definir y aplicar reglas para gestionar el cumplimiento de recursos en múltiples suscripciones. Con las directivas, se pueden establecer políticas para garantizar que los recursos cumplan con los estándares de seguridad, gobernanza y cumplimiento establecidos por la organización."
  },
  {
    "id": 44,
    "text": "Necesitan un plan de soporte económico con acceso 24/7 a ingenieros por teléfono o correo. Usted sugiere el plan Básico. ¿Cumple con los requisitos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Básico de Azure ofrece acceso 24/7 a información de facturación y recursos de autoayuda, pero no incluye acceso a ingenieros de soporte por teléfono o correo. Para cumplir con los requisitos, se debería considerar el plan de soporte Estándar, que sí ofrece acceso a ingenieros de soporte."
  },
  {
    "id": 45,
    "text": "Usted sugiere el plan de soporte Estándar para acceso 24/7 a ingenieros de soporte por teléfono o correo. ¿Este plan cumple con los requisitos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Estándar de Azure ofrece acceso 24/7 a ingenieros de soporte por teléfono o correo, lo que cumple con los requisitos establecidos para un plan de soporte económico con acceso a asistencia técnica."
  },
  {
    "id": 46,
    "text": "¿Microsoft lanza la mayoría de los servicios de Azure en versión preliminar privada antes de presentarlos en versión preliminar pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Microsoft suele lanzar la mayoría de los servicios de Azure en versión preliminar privada antes de presentarlos en versión preliminar pública. Esto permite a Microsoft recopilar comentarios y realizar mejoras basadas en la experiencia de un grupo selecto de clientes antes de hacer el servicio disponible para un público más amplio."
  },
  {
    "id": 47,
    "text": "¿Los servicios de Azure en versión preliminar pública solo se pueden administrar a través de la CLI de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los servicios de Azure en versión preliminar pública no se limitan a ser administrados solo a través de la CLI de Azure. Estos servicios generalmente se pueden administrar a través de múltiples interfaces, incluyendo el portal de Azure, la CLI de Azure, PowerShell y APIs, dependiendo del servicio específico y las opciones de administración disponibles."
  },
  {
    "id": 48,
    "text": "¿Un servicio de Azure en versión preliminar privada está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Un servicio de Azure en versión preliminar privada no está disponible para todos los clientes de Azure. Estos servicios están limitados a un grupo selecto de clientes que han sido invitados a participar en la prueba, lo que permite a Microsoft recopilar comentarios y realizar mejoras antes de lanzar el servicio en versión preliminar pública."
  },
  {
    "id": 49,
    "text": "¿Un servicio de Azure en versión preliminar pública está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Un servicio de Azure en versión preliminar pública está disponible para todos los clientes de Azure. Estos servicios se lanzan después de la fase de versión preliminar privada y están abiertos a cualquier cliente que desee probarlos, aunque es importante tener en cuenta que los servicios en versión preliminar pueden no ser adecuados para entornos de producción debido a posibles cambios y limitaciones."
  },
  {
    "id": 50,
    "text": "¿Un servicio de Azure en disponibilidad general está disponible para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Un servicio de Azure en disponibilidad general está disponible para todos los clientes de Azure. Estos servicios han pasado por las fases de desarrollo y prueba, y se consideran estables y listos para su uso en entornos de producción."
  },
  {
    "id": 51,
    "text": "¿Se puede utilizar una única cuenta de Microsoft para administrar varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, es posible utilizar una única cuenta de Microsoft para administrar varias suscripciones de Azure. Esto se logra a través de la asociación de la cuenta de Microsoft con múltiples suscripciones, lo que permite a los usuarios acceder y gestionar recursos en diferentes suscripciones desde una sola cuenta."
  },
  {
    "id": 52,
    "text": "¿Es posible fusionar varias suscripciones en una sola?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No es posible fusionar varias suscripciones de Azure en una sola. Cada suscripción es una entidad independiente con su propia facturación, recursos y configuración. Sin embargo, es posible transferir recursos entre suscripciones o consolidar la facturación utilizando herramientas como Azure Cost Management, pero no se pueden fusionar las suscripciones en sí."
  },
  {
    "id": 53,
    "text": "¿Tendrían los servicios de pago de Azure garantizado un SLA de al menos el 99,9%?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la mayoría de los servicios de pago de Azure tienen un Acuerdo de Nivel de Servicio (SLA) que garantiza una disponibilidad del 99,9% o superior. Esto significa que Microsoft se compromete a mantener los servicios disponibles y operativos durante al menos el 99,9% del tiempo, lo que proporciona a los clientes una alta confiabilidad para sus aplicaciones y servicios alojados en Azure."
  },
  {
    "id": 54,
    "text": "¿Podría la empresa aumentar el SLA de sus recursos implementándolos en varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la empresa podría aumentar el SLA de sus recursos implementándolos en varias regiones. Al distribuir los recursos en diferentes regiones geográficas, se puede mejorar la disponibilidad y la resiliencia de las aplicaciones, ya que si una región experimenta una interrupción, los recursos en otras regiones pueden seguir funcionando, lo que contribuye a un SLA más alto."
  },
  {
    "id": 55,
    "text": "¿Podría la empresa aumentar el SLA para sus recursos adquiriendo varias suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, adquirir varias suscripciones no aumentaría el SLA para los recursos de Azure. El SLA se aplica a los servicios y recursos específicos, independientemente de la cantidad de suscripciones que se tengan. Para mejorar el SLA, la empresa debería considerar implementar recursos en varias regiones o utilizar servicios con SLA más altos, en lugar de simplemente adquirir más suscripciones."
  },
  {
    "id": 56,
    "text": "Se creó un conjunto de VMs en una suscripción. Ahora se adquirió una nueva suscripción. ¿Es posible transferir las VMs a la nueva suscripción?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, es posible transferir máquinas virtuales (VMs) de una suscripción de Azure a otra. Esto se puede hacer utilizando la funcionalidad de migración de recursos en el portal de Azure o mediante herramientas como Azure Resource Manager. Sin embargo, es importante tener en cuenta que durante el proceso de transferencia, las VMs pueden experimentar un tiempo de inactividad, por lo que se recomienda planificar la migración cuidadosamente para minimizar el impacto en los usuarios."
  },
  {
    "id": 57,
    "text": "Una empresa tiene 10 IPs públicas, 20 usuarios y 5 grupos en Microsoft Entra ID. ¿La eliminación de usuarios contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La eliminación de usuarios en Microsoft Entra ID no contribuiría a la reducción de costos, ya que los costos asociados con Microsoft Entra ID generalmente se basan en el número de objetos (usuarios, grupos, etc.) y no en la cantidad de usuarios específicos. Sin embargo, es importante revisar los detalles de facturación y los planes de servicio para entender cómo se calculan los costos en función del uso y la cantidad de objetos en Microsoft Entra ID."
  },
  {
    "id": 58,
    "text": "¿La eliminación de grupos de usuarios en Microsoft Entra ID contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La eliminación de grupos de usuarios en Microsoft Entra ID no contribuiría a la reducción de costos, ya que los costos asociados con Microsoft Entra ID generalmente se basan en el número de objetos (usuarios, grupos, etc.) y no en la cantidad de grupos específicos. Sin embargo, es importante revisar los detalles de facturación y los planes de servicio para entender cómo se calculan los costos en función del uso y la cantidad de objetos en Microsoft Entra ID."
  },
  {
    "id": 59,
    "text": "¿La eliminación de las 10 direcciones IP públicas contribuiría a la reducción de costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "La eliminación de las 10 direcciones IP públicas contribuiría a la reducción de costos, ya que Azure cobra por el uso de direcciones IP públicas. Al eliminar estas direcciones IP, la empresa reduciría los costos asociados con su uso, lo que podría resultar en ahorros significativos dependiendo del plan de servicio y la cantidad de tiempo que se hayan utilizado las direcciones IP."
  },
  {
    "id": 60,
    "text": "Un miembro del equipo con un portátil Android desea crear una VM en Azure usando el portal de Azure. ¿Sería esta la solución adecuada?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, un miembro del equipo con un portátil Android puede crear una máquina virtual (VM) en Azure utilizando el portal de Azure. El portal de Azure es accesible a través de un navegador web, lo que permite a los usuarios administrar recursos de Azure desde cualquier dispositivo con acceso a Internet, incluyendo portátiles con Android."
  },
  {
    "id": 61,
    "text": "Un miembro del equipo con un portátil Android decide usar el portal de PowerApps para crear una VM. ¿Sería esta la solución adecuada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, el portal de PowerApps no es la solución adecuada para crear una máquina virtual (VM) en Azure. PowerApps es una plataforma de desarrollo de aplicaciones que permite a los usuarios crear aplicaciones personalizadas sin necesidad de escribir código, pero no está diseñada para la administración de recursos de Azure como la creación de VMs. Para crear una VM, el usuario debería utilizar el portal de Azure o herramientas como la CLI de Azure o Azure PowerShell."
  },
  {
    "id": 62,
    "text": "¿Cuál de las siguientes URL se utiliza para gestionar la creación de recursos de Azure?",
    "options": ["https://admin.azure.com", "https://admin.azurewebsites.com", "https://portal.microsoft.com", "https://portal.azurewebsites.com", "https://portal.azure.com"],
    "correctAnswer": "https://portal.azure.com",
    "categoryId": "azure-management",
    "explaination": "La URL https://portal.azure.com se utiliza para acceder al portal de Azure, que es la plataforma principal para gestionar la creación y administración de recursos de Azure. A través del portal de Azure, los usuarios pueden crear, configurar y supervisar una amplia variedad de servicios y recursos en la nube."
  },
  {
    "id": 63,
    "text": "¿Cuál servicio de cuenta de almacenamiento se utiliza para almacenar los discos de datos de una máquina virtual?",
    "options": ["Blobs", "Archivos", "Tablas", "Colas"],
    "correctAnswer": "Blobs",
    "categoryId": "azure-services",
    "explaination": "El servicio de cuenta de almacenamiento de Azure que se utiliza para almacenar los discos de datos de una máquina virtual es el servicio de Blobs. Los blobs son objetos de almacenamiento que pueden contener grandes cantidades de datos no estructurados, como archivos, imágenes y discos virtuales, lo que los hace ideales para almacenar los discos de datos de las máquinas virtuales en Azure."
  },
  {
    "id": 64,
    "text": "Su empresa necesita un almacén de datos Azure de 10 TB, acceso poco frecuente, y visualización con Power BI. ¿Cuáles dos soluciones elegiría?",
    "options": ["Base de datos SQL de Azure", "Azure Synapse Analytics", "Azure Data Lake", "Azure Cosmos DB"],
    "correctAnswer": "Azure Synapse Analytics",
    "correctAnswers": ["Azure Synapse Analytics", "Azure Data Lake"],
    "categoryId": "azure-services",
    "explaination": "Para un almacén de datos Azure de 10 TB con acceso poco frecuente y visualización con Power BI, las soluciones ideales serían Azure Synapse Analytics y Azure Data Lake. Azure Synapse Analytics es una plataforma de análisis que permite la integración de datos a gran escala y el análisis avanzado, mientras que Azure Data Lake es un servicio de almacenamiento diseñado para almacenar grandes cantidades de datos no estructurados, lo que lo hace adecuado para el acceso poco frecuente."
  },
  {
    "id": 65,
    "text": "Necesitas implementar varias VMs y asignar permisos simultáneamente. ¿Qué debes hacer?",
    "options": ["Implementar en la misma región", "Implementar en el mismo grupo de recursos", "Implementar en la misma zona de disponibilidad", "Implementar en la misma escala"],
    "correctAnswer": "Implementar en el mismo grupo de recursos",
    "categoryId": "azure-management",
    "explaination": "Para implementar varias máquinas virtuales (VMs) y asignar permisos simultáneamente, la mejor práctica es implementarlas en el mismo grupo de recursos. Un grupo de recursos es una contenedor lógico que permite organizar y gestionar recursos relacionados en Azure. Al colocar las VMs en el mismo grupo de recursos, se facilita la administración de permisos y la aplicación de políticas de seguridad de manera consistente a todas las VMs dentro del grupo."
  },
  {
    "id": 66,
    "text": "¿Cuál es una ventaja de trasladar los servidores locales al entorno de la nube de Azure?",
    "options": ["Azure es una plataforma pública donde todos los recursos son accesibles al público", "Azure es una plataforma privada donde solo un grupo reducido puede acceder", "Azure es una plataforma compartida donde múltiples empresas usan una parte de los recursos", "Azure es una plataforma de comercio electrónico donde los usuarios compran y venden recursos"],
    "correctAnswer": "Azure es una plataforma compartida donde múltiples empresas usan una parte de los recursos",
    "categoryId": "cloud-concepts",
    "explaination": "Una ventaja de trasladar los servidores locales al entorno de la nube de Azure es que Azure es una plataforma compartida donde múltiples empresas usan una parte de los recursos. Esto permite a las organizaciones beneficiarse de la escalabilidad, flexibilidad y eficiencia de costos que ofrece la nube, ya que pueden compartir la infraestructura subyacente con otros usuarios mientras mantienen el control sobre sus propios recursos y datos."
  },
  {
    "id": 67,
    "text": "¿Cuáles son dos características clave de la nube pública?",
    "options": ["Recursos de hardware dedicados", "Infraestructura compartida", "Modelo de pago por uso", "Implementación en las instalaciones del cliente", "Disponibilidad geográfica limitada"],
    "correctAnswer": "Infraestructura compartida",
    "correctAnswers": ["Infraestructura compartida", "Modelo de pago por uso"],
    "categoryId": "cloud-concepts",
    "explaination": "Dos características clave de la nube pública son la infraestructura compartida y el modelo de pago por uso. En la nube pública, los recursos de hardware son compartidos entre múltiples usuarios, lo que permite una mayor eficiencia y escalabilidad. Además, el modelo de pago por uso permite a las organizaciones pagar solo por los recursos que utilizan, lo que puede resultar en ahorros significativos en comparación con la inversión en infraestructura local."
  },
  {
    "id": 68,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y bases de datos SQL de Azure. ¿Cumple el plan de migración solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, la solución de crear un Servicio de Aplicaciones de Azure y bases de datos SQL de Azure cumple con el plan de migración solo PaaS (Plataforma como Servicio). El Servicio de Aplicaciones de Azure es un servicio PaaS que permite a los desarrolladores crear y alojar aplicaciones web sin preocuparse por la infraestructura subyacente, mientras que las bases de datos SQL de Azure también son un servicio PaaS que proporciona una base de datos gestionada sin necesidad de administrar servidores o infraestructura."
  },
  {
    "id": 69,
    "text": "Planeas migrar una aplicación web a Azure con usuarios externos. Necesitas minimizar el esfuerzo administrativo. ¿Qué debes incluir?",
    "options": ["Software como servicio (SaaS)", "Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)", "Base de datos como servicio (DaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "cloud-concepts",
    "explaination": "Para migrar una aplicación web a Azure con usuarios externos y minimizar el esfuerzo administrativo, la mejor opción es utilizar Plataforma como Servicio (PaaS). PaaS proporciona un entorno de desarrollo y alojamiento completamente gestionado, lo que permite a los desarrolladores centrarse en la creación de la aplicación sin preocuparse por la administración de la infraestructura subyacente, como servidores, almacenamiento o redes."
  },
  {
    "id": 70,
    "text": "Con 100 servidores locales, necesitas recursos adicionales minimizando costos de capital y operativos. ¿Qué recomiendas?",
    "options": ["Una migración completa a la nube pública", "Un centro de datos adicional", "Una nube privada", "Una nube híbrida"],
    "correctAnswer": "Una nube híbrida",
    "categoryId": "cloud-concepts",
    "explaination": "Recomendar una nube híbrida es la mejor opción para una empresa con 100 servidores locales que necesita recursos adicionales mientras minimiza los costos de capital y operativos. Una nube híbrida permite a la empresa mantener sus servidores locales mientras aprovecha los recursos de la nube pública para manejar picos de demanda o cargas de trabajo específicas, lo que proporciona flexibilidad y eficiencia en costos sin la necesidad de una migración completa a la nube."
  },
  {
    "id": 71,
    "text": "¿Qué ventaja ofrece usar un servicio de nube pública para los servidores en lugar de una red local?",
    "options": ["La nube pública es propiedad del público, NO de una corporación privada", "La nube pública es una solución de colaboración colectiva", "Todos los recursos de la nube pública son de libre acceso para cualquier persona", "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos"],
    "correctAnswer": "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos",
    "categoryId": "cloud-concepts",
    "explaination": "Una ventaja de usar un servicio de nube pública para los servidores en lugar de una red local es que la nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos. Esto permite a las organizaciones beneficiarse de la escalabilidad, flexibilidad y eficiencia de costos que ofrece la nube, ya que pueden compartir la infraestructura subyacente con otros usuarios mientras mantienen el control sobre sus propios recursos y datos."
  },
  {
    "id": 72,
    "text": "Tienes 1000 VMs en Hyper-V y planeas migrarlas a Azure pago por uso. ¿Qué modelo de gasto deberías considerar?",
    "options": ["Operacional", "Elástico", "Capital", "Escalable"],
    "correctAnswer": "Operacional",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo de gasto operacional es el más adecuado para migrar 1000 VMs a Azure con un enfoque de pago por uso. En este modelo, las organizaciones pagan por los recursos que utilizan en función del consumo real, lo que permite una mayor flexibilidad y eficiencia en costos en comparación con el modelo de gasto capital, que implica una inversión inicial significativa en infraestructura."
  },
  {
    "id": 73,
    "text": "¿Qué recurso es un ejemplo de Infraestructura como Servicio (IaaS)?",
    "options": ["Una aplicación web de Azure", "Una máquina virtual de Azure", "Una aplicación lógica de Azure", "Una base de datos Azure SQL"],
    "correctAnswer": "Una máquina virtual de Azure",
    "categoryId": "cloud-concepts",
    "explaination": "Una máquina virtual de Azure es un ejemplo de Infraestructura como Servicio (IaaS). IaaS proporciona recursos de computación, almacenamiento y redes en la nube, permitiendo a los usuarios crear y administrar máquinas virtuales sin preocuparse por la infraestructura subyacente. En contraste, una aplicación web de Azure o una base de datos Azure SQL serían ejemplos de Plataforma como Servicio (PaaS), que ofrece un entorno gestionado para desarrollar y alojar aplicaciones."
  },
  {
    "id": 74,
    "text": "Un equipo implementará y eliminará 50 VMs cada semana usando plantillas ARM. ¿Qué servicio de Azure minimizará el esfuerzo administrativo?",
    "options": ["Instancias de VMs reservadas de Azure", "Azure DevTest Labs", "Conjuntos de escalado de VMs de Azure", "Microsoft Managed Desktop"],
    "correctAnswer": "Azure DevTest Labs",
    "categoryId": "azure-services",
    "explaination": "Azure DevTest Labs es un servicio de Azure que permite a los equipos crear y administrar entornos de desarrollo y prueba de manera eficiente. Con DevTest Labs, los equipos pueden implementar y eliminar VMs rápidamente utilizando plantillas ARM, lo que minimiza el esfuerzo administrativo asociado con la gestión de recursos en la nube. Además, DevTest Labs ofrece características como políticas de auto-apagado y reutilización de VMs para optimizar el uso de recursos y reducir costos."
  },
  {
    "id": 75,
    "text": "Solución: Crear VMs de Azure, bases de datos SQL de Azure y cuentas de Azure Storage. ¿Esto cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, la solución de crear VMs de Azure no cumple con el plan de solo PaaS (Plataforma como Servicio). Las máquinas virtuales (VMs) son un recurso de Infraestructura como Servicio (IaaS), ya que requieren que los usuarios gestionen la infraestructura subyacente, como el sistema operativo y las actualizaciones. Para cumplir con un plan de solo PaaS, se deberían utilizar servicios gestionados como Azure App Service para aplicaciones web y Azure SQL Database para bases de datos, evitando la necesidad de administrar la infraestructura."
  },
  {
    "id": 76,
    "text": "Una empresa implementará aplicaciones personalizadas de facturación que requieren la instalación de varias aplicaciones previas. ¿Qué solución de implementación recomiendas?",
    "options": ["Software como servicio (SaaS)", "Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)"],
    "correctAnswer": "Infraestructura como servicio (IaaS)",
    "categoryId": "cloud-concepts",
    "explaination": "Para una empresa que implementará aplicaciones personalizadas de facturación que requieren la instalación de varias aplicaciones previas, la solución de implementación recomendada es Infraestructura como Servicio (IaaS). IaaS proporciona recursos de computación, almacenamiento y redes en la nube, lo que permite a los usuarios crear y administrar máquinas virtuales donde pueden instalar y configurar las aplicaciones necesarias para su solución personalizada. En contraste, Plataforma como Servicio (PaaS) y Software como Servicio (SaaS) ofrecen entornos más gestionados que pueden no ser adecuados para aplicaciones personalizadas con requisitos específicos de software."
  },
  {
    "id": 77,
    "text": "[Una región de Azure] contiene uno o más centros de datos conectados mediante una red de baja latencia. ¿Cuál afirmación es correcta?",
    "options": ["No es necesario realizar ningún cambio", "Se encuentra en todos los países donde Microsoft tiene oficina subsidiaria", "Se puede encontrar únicamente en países de Europa y América", "Contiene uno o más centros de datos conectados mediante una red de alta latencia"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-services",
    "explaination": "La afirmación correcta es que una región de Azure contiene uno o más centros de datos conectados mediante una red de baja latencia. Las regiones de Azure están diseñadas para proporcionar alta disponibilidad y rendimiento a los usuarios, y la conexión de baja latencia entre los centros de datos dentro de una región es fundamental para lograr estos objetivos. No es necesario realizar ningún cambio en la afirmación, ya que describe correctamente la estructura y características de una región de Azure."
  },
  {
    "id": 78,
    "text": "Un ingeniero planea usar la CLI de Azure. ¿Qué dos herramientas debería usar para ejecutar la CLI?",
    "options": ["Símbolo del sistema", "Explorador de recursos de Azure", "Windows PowerShell", "Firewall de Windows Defender", "Centro de redes y recursos compartidos"],
    "correctAnswer": "Símbolo del sistema",
    "correctAnswers": ["Símbolo del sistema", "Windows PowerShell"],
    "categoryId": "azure-management",
    "explaination": "La CLI de Azure se puede ejecutar desde el Símbolo del sistema (Command Prompt) en Windows, así como desde Windows PowerShell. Ambas herramientas proporcionan un entorno de línea de comandos donde los usuarios pueden ejecutar comandos de la CLI de Azure para administrar recursos en la nube. El Explorador de recursos de Azure, el Firewall de Windows Defender y el Centro de redes y recursos compartidos no son herramientas adecuadas para ejecutar la CLI de Azure."
  },
  {
    "id": 79,
    "text": "Planeas almacenar 20 TB de datos en Azure, con acceso poco frecuente y visualización mediante Power BI. ¿Qué dos soluciones recomiendas?",
    "options": ["Azure Data Lake", "Azure Cosmos DB", "Azure Synapse Analytics", "Base de datos SQL de Azure", "Base de datos Azure para PostgreSQL"],
    "correctAnswer": "Azure Data Lake",
    "correctAnswers": ["Azure Data Lake", "Azure Synapse Analytics"],
    "categoryId": "azure-services",
    "explaination": "Para almacenar 20 TB de datos en Azure con acceso poco frecuente y visualización mediante Power BI, las soluciones recomendadas son Azure Data Lake y Azure Synapse Analytics. Azure Data Lake es un servicio de almacenamiento diseñado para manejar grandes cantidades de datos no estructurados, lo que lo hace ideal para el acceso poco frecuente. Azure Synapse Analytics es una plataforma de análisis que permite la integración de datos a gran escala y el análisis avanzado, lo que facilita la visualización de los datos con Power BI."
  },
  {
    "id": 80,
    "text": "¿Para qué tipo de fallo puede utilizarse una Zona de Disponibilidad de Azure para proteger el acceso a los servicios?",
    "options": ["Un fallo del servidor físico", "Un fallo en la región de Azure", "Un fallo de almacenamiento", "Un fallo en un centro de datos de Azure"],
    "correctAnswer": "Un fallo en un centro de datos de Azure",
    "categoryId": "azure-services",
    "explaination": "Una Zona de Disponibilidad de Azure se utiliza para proteger el acceso a los servicios contra fallos en un centro de datos específico. Proporciona redundancia y alta disponibilidad al distribuir los recursos en múltiples centros de datos dentro de una región."
  },
  {
    "id": 81,
    "text": "Tienes una VM con Windows Server 2016 en región Este de EE. UU. ¿Qué servicio de Azure usar para ver notificaciones de errores de servicio que pueden afectar la disponibilidad?",
    "options": ["Azure Service Fabric", "Azure Monitor", "Máquinas virtuales de Azure", "Asesor de Azure"],
    "correctAnswer": "Azure Monitor",
    "categoryId": "azure-management",
    "explaination": "Azure Monitor es el servicio de Azure que permite ver notificaciones de errores de servicio que pueden afectar la disponibilidad. Proporciona herramientas para la supervisión y el análisis del rendimiento y la salud de los recursos en la nube."
  },
  {
    "id": 82,
    "text": "Solución: Ejecutar un script PowerShell desde un equipo con Linux y CLI de Azure instalada. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, ejecutar un script PowerShell desde un equipo con Linux y CLI de Azure instalada no cumple el objetivo, ya que PowerShell es un entorno de automatización y scripting desarrollado por Microsoft que se ejecuta principalmente en sistemas operativos Windows. Aunque PowerShell Core es compatible con Linux, la CLI de Azure está diseñada para ser utilizada con comandos específicos de Azure y no es compatible con scripts de PowerShell en un entorno Linux. Para ejecutar scripts de PowerShell relacionados con Azure, se recomienda utilizar un entorno Windows o Azure Cloud Shell, que proporciona soporte nativo para PowerShell."
  },
  {
    "id": 83,
    "text": "Solución: Ejecutar un script PowerShell desde un equipo con Chrome OS y Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, ejecutar un script PowerShell desde un equipo con Chrome OS y Azure Cloud Shell cumple el objetivo. Azure Cloud Shell es un entorno de shell basado en la nube que proporciona acceso a herramientas de línea de comandos, incluyendo PowerShell, a través del navegador web. Esto permite a los usuarios ejecutar scripts de PowerShell y administrar recursos de Azure desde cualquier dispositivo con acceso a Internet, incluyendo aquellos con Chrome OS."
  },
  {
    "id": 84,
    "text": "Tienes un entorno Azure con 10 redes virtuales y 100 VMs. Necesitas limitar el tráfico entrante a todas las redes virtuales. ¿Qué deberías crear?",
    "options": ["Un grupo de seguridad de aplicaciones (ASG)", "10 puertas de enlace de red virtual", "10 circuitos de Azure ExpressRoute", "Un firewall de Azure"],
    "correctAnswer": "Un firewall de Azure",
    "categoryId": "azure-services",
    "explaination": "Un firewall de Azure es el servicio que permite limitar el tráfico entrante a las redes virtuales. Proporciona control sobre el tráfico de red y permite implementar políticas de seguridad."
  },
  {
    "id": 85,
    "text": "Planeas implementar una solución que permita a equipos cliente de la red local comunicarse con VMs de Azure. ¿Qué dos recursos de Azure debes crear?",
    "options": ["Una puerta de enlace de red virtual", "Un balanceador de carga", "Una puerta de enlace de aplicaciones", "Una red virtual", "Una subred de puerta de enlace"],
    "correctAnswer": "Una puerta de enlace de red virtual",
    "correctAnswers": ["Una puerta de enlace de red virtual", "Una subred de puerta de enlace"],
    "categoryId": "azure-services",
    "explaination": "Para permitir que los equipos cliente de la red local se comuniquen con las VMs de Azure, es necesario crear una puerta de enlace de red virtual y una subred de puerta de enlace. La puerta de enlace de red virtual actúa como un punto de conexión entre la red local y la red virtual en Azure, mientras que la subred de puerta de enlace es una subred específica dentro de la red virtual que se utiliza para alojar la puerta de enlace y facilitar la comunicación entre los recursos locales y los recursos en Azure."
  },
  {
    "id": 86,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas Bash en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, utilizar Bash en Azure Cloud Shell desde una tableta Android cumple el objetivo de crear una VM de Azure. Azure Cloud Shell es un entorno de shell basado en la nube que proporciona acceso a herramientas de línea de comandos, incluyendo Bash, a través del navegador web. Esto permite a los usuarios administrar recursos de Azure y ejecutar comandos para crear VMs desde cualquier dispositivo con acceso a Internet, incluyendo tabletas con Android."
  },
  {
    "id": 87,
    "text": "Un servidor llamado FinServer debe estar en un segmento de red independiente. ¿Qué solución de Azure recomendarías?",
    "options": ["Un grupo de recursos para FinServer y otro para los demás servidores", "Una red virtual para FinServer y otra para los demás servidores", "Una VPN para FinServer y una puerta de enlace de red virtual para otro servidor", "Un grupo de recursos para todos los servidores y un bloqueo de recursos para FinServer"],
    "correctAnswer": "Una red virtual para FinServer y otra para los demás servidores",
    "categoryId": "azure-services",
    "explaination": "Para colocar el servidor FinServer en un segmento de red independiente, la solución recomendada es crear una red virtual separada para FinServer y otra para los demás servidores. Esto permite aislar el tráfico de red de FinServer del resto de los servidores, proporcionando una capa adicional de seguridad y control sobre el acceso a los recursos en Azure."
  },
  {
    "id": 88,
    "text": "Planeas asignar una unidad de red desde varios equipos con Windows 10 a Azure Storage. ¿Qué deberías crear?",
    "options": ["Una base de datos Azure SQL", "Un disco de datos de máquina virtual", "Un servicio de archivos en una cuenta de almacenamiento", "Un servicio Blobs en una cuenta de almacenamiento"],
    "correctAnswer": "Un servicio de archivos en una cuenta de almacenamiento",
    "categoryId": "azure-services",
    "explaination": "Para asignar una unidad de red desde varios equipos con Windows 10 a Azure Storage, deberías crear un servicio de archivos en una cuenta de almacenamiento. El servicio de archivos de Azure permite a los usuarios montar un recurso compartido de archivos en la nube como una unidad de red en sus equipos, lo que facilita el acceso y la gestión de archivos almacenados en Azure desde múltiples dispositivos."
  },
  {
    "id": 89,
    "text": "Tu empresa planea migrar todos sus recursos de red a Azure. ¿Qué deberías crear primero?",
    "options": ["Una suscripción", "Un grupo de recursos", "Una red virtual", "Un grupo directivo"],
    "correctAnswer": "Una suscripción",
    "categoryId": "azure-management",
    "explaination": "Para migrar todos los recursos de red a Azure, lo primero que deberías crear es una suscripción. La suscripción es el contenedor principal para todos los recursos de Azure y proporciona un marco para la administración, la facturación y el acceso a los servicios de Azure. Sin una suscripción, no podrías crear ni administrar recursos en Azure, por lo que es el primer paso esencial en el proceso de migración."
  },
  {
    "id": 90,
    "text": "Tienes una aplicación local que envía notificaciones por correo automáticamente según una regla. Necesitas recomendar una solución de computación sin servidor para migrarla a Azure. ¿Qué incluyes?",
    "options": ["Una aplicación web", "Una imagen de servidor en Azure Marketplace", "Una aplicación lógica", "Una aplicación API"],
    "correctAnswer": "Una aplicación lógica",
    "categoryId": "azure-services",
    "explaination": "Para migrar una aplicación local que envía notificaciones por correo automáticamente según una regla a Azure, la solución recomendada es utilizar una aplicación lógica (Azure Logic App). Las aplicaciones lógicas son un servicio de computación sin servidor que permite crear flujos de trabajo automatizados para integrar aplicaciones, datos y servicios. Con Azure Logic Apps, puedes configurar fácilmente una regla para enviar notificaciones por correo electrónico en función de eventos o condiciones específicas, sin necesidad de administrar la infraestructura subyacente."
  },
  {
    "id": 91,
    "text": "Planeas implementar un sitio web en Azure accesible mundialmente con archivos de video de gran tamaño. ¿Qué función de Azure ofrece la mejor experiencia de reproducción de video?",
    "options": ["Una puerta de enlace de aplicaciones", "Un circuito Azure ExpressRoute", "Una red de distribución de contenido (CDN)", "Un perfil de Azure Traffic Manager"],
    "correctAnswer": "Una red de distribución de contenido (CDN)",
    "categoryId": "azure-services",
    "explaination": "Para ofrecer la mejor experiencia de reproducción de video en Azure, la solución recomendada es utilizar una red de distribución de contenido (CDN). El CDN de Azure permite entregar contenido web de forma rápida y eficiente a los usuarios finales, reduciendo la latencia y mejorando el rendimiento."
  },
  {
    "id": 92,
    "text": "Su empresa implementará millones de sensores que subirán datos a Azure. ¿Qué dos recursos de Azure deben crearse?",
    "options": ["Azure Data Lake", "Azure Queue Storage", "Azure File Storage", "Azure IoT Hub", "Azure Notification Hubs"],
    "correctAnswer": "Azure Data Lake",
    "correctAnswers": ["Azure Data Lake", "Azure IoT Hub"],
    "categoryId": "azure-services",
    "explaination": "Para implementar millones de sensores que subirán datos a Azure, se deben crear Azure Data Lake y Azure IoT Hub. Azure IoT Hub es un servicio de Azure diseñado para conectar, monitorear y administrar dispositivos IoT a gran escala, lo que facilita la recopilación de datos de los sensores. Azure Data Lake es un servicio de almacenamiento diseñado para manejar grandes cantidades de datos no estructurados, lo que lo hace ideal para almacenar los datos generados por los sensores para su posterior análisis y procesamiento."
  },
  {
    "id": 93,
    "text": "Tienes una aplicación web de Azure y necesitas administrar su configuración desde un iPhone. ¿Qué dos herramientas de administración de Azure puedes usar?",
    "options": ["CLI de Azure", "El portal de Azure", "Azure Cloud Shell", "Windows PowerShell", "Azure Storage Explorer"],
    "correctAnswer": "El portal de Azure",
    "correctAnswers": ["El portal de Azure", "Azure Cloud Shell"],
    "categoryId": "azure-management",
    "explaination": "Para administrar la configuración de una aplicación web de Azure desde un iPhone, puedes usar el portal de Azure y Azure Cloud Shell. El portal de Azure es accesible a través de un navegador web, lo que permite a los usuarios administrar recursos de Azure desde cualquier dispositivo con acceso a Internet, incluyendo iPhones. Azure Cloud Shell también se puede acceder a través del portal de Azure, proporcionando un entorno de línea de comandos para administrar recursos en la nube desde el mismo dispositivo."
  },
  {
    "id": 94,
    "text": "La empresa planea implementar una solución de IA en Azure. ¿Qué herramientas debería usar para crear, probar e implementar soluciones de análisis predictivo?",
    "options": ["Aplicaciones lógicas de Azure", "Azure Machine Learning Studio", "Procesamiento por lotes de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Azure Machine Learning Studio",
    "categoryId": "azure-services",
    "explaination": "Para crear, probar e implementar soluciones de análisis predictivo en Azure, la herramienta recomendada es Azure Machine Learning Studio. Azure Machine Learning Studio es un entorno de desarrollo integrado que proporciona una amplia gama de herramientas y servicios para construir, entrenar y desplegar modelos de aprendizaje automático. Permite a los usuarios crear modelos de análisis predictivo utilizando una interfaz visual o mediante código, facilitando el proceso de desarrollo y despliegue de soluciones de IA en Azure."
  },
  {
    "id": 95,
    "text": "Desde el portal de Azure, abres Azure Cloud Shell y seleccionas PowerShell para crear una VM con 'az vm create'. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, abrir Azure Cloud Shell desde el portal de Azure y seleccionar PowerShell para ejecutar el comando 'az vm create' cumple el objetivo de crear una máquina virtual (VM) en Azure. Azure Cloud Shell proporciona un entorno de línea de comandos basado en la nube que permite a los usuarios administrar recursos de Azure utilizando herramientas como PowerShell y la CLI de Azure, lo que facilita la creación y gestión de VMs directamente desde el navegador."
  },
  {
    "id": 96,
    "text": "Solución: Ejecutar el script PowerShell desde un equipo con Windows 10 y el módulo de Azure PowerShell instalado. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, ejecutar un script PowerShell desde un equipo con Windows 10 y el módulo de Azure PowerShell instalado cumple el objetivo de administrar recursos en Azure. El módulo de Azure PowerShell proporciona cmdlets específicos para interactuar con los servicios de Azure, lo que permite a los usuarios automatizar tareas y gestionar recursos de manera eficiente desde su entorno local."
  },
  {
    "id": 97,
    "text": "¿Qué servicio proporciona computación sin servidor en Azure?",
    "options": ["Máquinas virtuales de Azure", "Funciones de Azure", "Cuenta de almacenamiento de Azure", "Instancias de contenedores de Azure"],
    "correctAnswer": "Funciones de Azure",
    "categoryId": "azure-services",
    "explaination": "Funciones de Azure es el servicio que proporciona computación sin servidor en Azure. Permite a los desarrolladores ejecutar código en respuesta a eventos sin tener que preocuparse por la infraestructura subyacente, lo que facilita la creación de aplicaciones escalables y eficientes."
  },
  {
    "id": 98,
    "text": "Abres Azure Cloud Shell y seleccionas Bash para ejecutar el comando 'az vm create'. ¿Cumple el objetivo de crear VM1?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, abrir Azure Cloud Shell y seleccionar Bash para ejecutar el comando 'az vm create' cumple el objetivo de crear VM1 en Azure. Azure Cloud Shell proporciona un entorno de línea de comandos basado en la nube que permite a los usuarios administrar recursos de Azure utilizando herramientas como Bash y la CLI de Azure, lo que facilita la creación y gestión de VMs directamente desde el navegador."
  },
  {
    "id": 99,
    "text": "Su empresa tiene varias unidades de negocio, cada una requiere los mismos 20 recursos de Azure. ¿Qué debe recomendar para automatizar la creación?",
    "options": ["Plantillas de Azure Resource Manager", "Conjuntos de escalado de VMs", "El servicio Azure API Management", "Grupos de gestión"],
    "correctAnswer": "Plantillas de Azure Resource Manager",
    "categoryId": "azure-management",
    "explaination": "Las plantillas de Azure Resource Manager son la solución ideal para automatizar la creación de recursos en Azure. Estas plantillas permiten definir y desplegar infraestructura de manera consistente y reproducible, lo que es especialmente útil cuando se necesitan crear múltiples instancias de los mismos recursos."
  },
  {
    "id": 100,
    "text": "¿Qué servicio de Azure debería utilizarse para recopilar eventos de múltiples recursos en un repositorio centralizado?",
    "options": ["Centros de eventos de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Azure Stream Analytics"],
    "correctAnswer": "Azure Monitor",
    "categoryId": "azure-management",
    "explaination": "Azure Monitor es el servicio recomendado para recopilar eventos de múltiples recursos en un repositorio centralizado. Proporciona una solución integral para la supervisión y el análisis de datos, permitiendo a los usuarios monitorear el rendimiento y la salud de sus recursos en Azure."
  },
  {
    "id": 101,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas el portal de PowerApps. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, utilizar el portal de PowerApps no cumple el objetivo de crear una VM de Azure desde una tableta Android. PowerApps es una plataforma para crear aplicaciones sin código, pero no está diseñada para la creación de máquinas virtuales en Azure."
  },
  {
    "id": 102,
    "text": "Necesitas crear una VM de Azure desde una tableta Android. Solución: Utilizas el portal de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, utilizar el portal de Azure desde una tableta Android cumple el objetivo de crear una VM en Azure. El portal de Azure es accesible desde cualquier dispositivo con un navegador web, lo que permite a los usuarios gestionar recursos en la nube de manera eficiente."
  },
  {
    "id": 103,
    "text": "¿Qué servicio de Azure proporciona un conjunto de herramientas de control de versiones para gestionar el código?",
    "options": ["Repositorios de Azure", "Azure DevTest Labs", "Almacenamiento de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Repositorios de Azure",
    "categoryId": "azure-services",
    "explaination": "Repositorios de Azure es el servicio que proporciona un conjunto de herramientas de control de versiones para gestionar el código. Permite a los desarrolladores colaborar en el desarrollo de aplicaciones y mantener un historial completo de los cambios en el código."
  },
  {
    "id": 104,
    "text": "Su empresa planea automatizar la implementación de servidores en Azure y necesita cifrar credenciales administrativas. ¿Qué debe incluir en la recomendación?",
    "options": ["Azure Key Vault", "Microsoft Purview Information Protection", "Microsoft Defender para la nube", "Autenticación multifactor (MFA) de Azure"],
    "correctAnswer": "Azure Key Vault",
    "categoryId": "azure-management",
    "explaination": "Azure Key Vault es el servicio recomendado para cifrar credenciales administrativas. Proporciona un almacén seguro para gestionar secretos, claves y certificados, garantizando que las credenciales sensibles estén protegidas y accesibles solo por usuarios y aplicaciones autorizadas."
  },
  {
    "id": 105,
    "text": "Planeas implementar varias VMs de Azure. Necesitas controlar los puertos que dispositivos de Internet pueden usar para acceder a las VMs. ¿Qué deberías usar?",
    "options": ["Grupo de Seguridad de Red (NSG)", "Rol de Microsoft Entra ID", "Grupo Microsoft Entra ID", "Azure Key Vault"],
    "correctAnswer": "Grupo de Seguridad de Red (NSG)",
    "categoryId": "azure-services",
    "explaination": "Un Grupo de Seguridad de Red (NSG) es la solución adecuada para controlar los puertos que los dispositivos de Internet pueden usar para acceder a las VMs de Azure. NSG permite definir reglas de seguridad que filtran el tráfico de red hacia y desde las VMs, proporcionando una capa adicional de protección al restringir el acceso a puertos específicos."
  },
  {
    "id": 106,
    "text": "Azure Alemania solo puede ser utilizado por residentes legales de Alemania. ¿Qué afirmación es correcta?",
    "options": [
      "No es necesario realizar ningún cambio",
      "Solo empresas registradas en Alemania",
      "Solo empresas que adquieran licencias a través de socio en Alemania",
      "Este servicio ha sido descontinuado. Azure Alemania se retiró en 2021"
    ],
    "correctAnswer": "Este servicio ha sido descontinuado. Azure Alemania se retiró en 2021",
    "categoryId": "azure-management",
    "explaination": "Azure Alemania fue retirado oficialmente en 2021. Microsoft migró los servicios a las regiones estándar de Azure en Alemania."
  },
  {
    "id": 107,
    "text": "Solución: Modifica un grupo de seguridad de red (NSG) para que una VM sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Un NSG permite controlar tráfico entrante y saliente. Al habilitar HTTP (puerto 80), la VM puede ser accesible desde Internet."
  },
  {
    "id": 108,
    "text": "Solución: Modificas un firewall de Azure para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Azure Firewall puede permitir tráfico HTTP mediante reglas de red o aplicación, haciendo accesible la VM desde Internet."
  },
  {
    "id": 109,
    "text": "Solución: Modificas un perfil de Azure Traffic Manager para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Azure Traffic Manager solo enruta tráfico DNS entre endpoints y no abre puertos ni permite acceso HTTP directamente."
  },
  {
    "id": 110,
    "text": "¿Qué dos tipos de clientes pueden utilizar Azure Government para desarrollar una solución en la nube?",
    "options": [
      "Un contratista del gobierno canadiense",
      "Un contratista del gobierno europeo",
      "Una entidad del gobierno de los Estados Unidos",
      "Un contratista del gobierno de los Estados Unidos",
      "Una entidad gubernamental europea"
    ],
    "correctAnswer": "Una entidad del gobierno de los Estados Unidos",
    "correctAnswers": [
      "Una entidad del gobierno de los Estados Unidos",
      "Un contratista del gobierno de los Estados Unidos"
    ],
    "categoryId": "azure-management",
    "explaination": "Azure Government está diseñado exclusivamente para entidades gubernamentales de EE.UU. y sus contratistas autorizados."
  },
  {
    "id": 111,
    "text": "¿Qué servicio de Azure debería utilizarse para que usuarios que se conectan desde una IP anónima cambien automáticamente su contraseña?",
    "options": [
      "Microsoft Entra Connect Health",
      "Gestión de identidades privilegiadas de Microsoft Entra",
      "Microsoft Defender para la identidad",
      "Protección de identidad de Microsoft Entra"
    ],
    "correctAnswer": "Protección de identidad de Microsoft Entra",
    "categoryId": "azure-management",
    "explaination": "Microsoft Entra ID Protection detecta inicios de sesión riesgosos, como IPs anónimas, y puede exigir cambio de contraseña automáticamente."
  },
  {
    "id": 112,
    "text": "Necesita recomendar una solución de Azure para limitar tipos de conexiones entre servidores web y de bases de datos. ¿Qué incluiría?",
    "options": [
      "Grupos de seguridad de red (NSG)",
      "Azure Service Bus",
      "Una puerta de enlace de red local",
      "Un filtro de ruta"
    ],
    "correctAnswer": "Grupos de seguridad de red (NSG)",
    "categoryId": "azure-services",
    "explaination": "Los NSG permiten filtrar y controlar conexiones entre subredes, VMs y otros recursos de red."
  },
  {
    "id": 113,
    "text": "¿A qué debe conectarse una aplicación para obtener tokens de seguridad?",
    "options": [
      "Una cuenta de Azure Storage",
      "ID de Microsoft Entra",
      "Una tienda de certificados",
      "Un almacén de claves de Azure"
    ],
    "correctAnswer": "ID de Microsoft Entra",
    "categoryId": "azure-management",
    "explaination": "Las aplicaciones se conectan a Microsoft Entra ID para autenticarse y obtener tokens de seguridad."
  },
  {
    "id": 114,
    "text": "¿Qué servicio proporciona filtrado de tráfico de red en múltiples suscripciones y redes virtuales de Azure?",
    "options": [
      "Firewall de Azure",
      "Un grupo de seguridad de aplicaciones",
      "Protección DDoS de Azure",
      "Un Grupo de Seguridad de Red (NSG)"
    ],
    "correctAnswer": "Firewall de Azure",
    "categoryId": "azure-services",
    "explaination": "Azure Firewall proporciona filtrado centralizado de tráfico para múltiples VNets y suscripciones."
  },
  {
    "id": 115,
    "text": "¿Qué servicio de Azure debería utilizarse para almacenar certificados?",
    "options": [
      "Microsoft Defender para la nube",
      "Una cuenta de Azure Storage",
      "Azure Key Vault",
      "Microsoft Purview Information Protection"
    ],
    "correctAnswer": "Azure Key Vault",
    "categoryId": "azure-management",
    "explaination": "Azure Key Vault almacena secretos, claves y certificados de forma segura."
  },
  {
    "id": 116,
    "text": "Tienes un grupo de recursos RG1. Necesitas impedir la creación de VMs solo en RG1. ¿Qué deberías usar?",
    "options": [
      "Un candado",
      "Un rol de Azure",
      "Una etiqueta",
      "Una política de Azure"
    ],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management",
    "explaination": "Azure Policy permite restringir la creación de ciertos tipos de recursos dentro de un grupo de recursos."
  },
  {
    "id": 117,
    "text": "¿Qué información puede cifrar Microsoft Purview Information Protection?",
    "options": [
      "Tráfico de red",
      "Documentos y mensajes de correo electrónico",
      "Una cuenta de Azure Storage",
      "Una base de datos Azure SQL"
    ],
    "correctAnswer": "Documentos y mensajes de correo electrónico",
    "categoryId": "azure-management",
    "explaination": "Microsoft Purview Information Protection protege y cifra documentos y correos electrónicos."
  },
  {
    "id": 118,
    "text": "Desde [Azure Monitor], puede ver qué usuario desactivó una VM específica durante los últimos 14 días. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Centros de eventos de Azure", "Registro de actividad de Azure", "Estado del servicio de Azure"],
    "correctAnswer": "Registro de actividad de Azure",
    "categoryId": "azure-management",
    "explaination": "El Registro de actividad de Azure proporciona información sobre el uso de recursos de Azure."
  },
  {
    "id": 119,
    "text": "Su empresa tiene recursos en varias regiones y solo deben crear recursos en la región de su oficina. ¿Qué recurso de Azure debe crear?",
    "options": ["Un bloqueo de solo lectura", "Una política de Azure", "Un grupo directivo", "Una reserva"],
    "correctAnswer": "Una política de Azure",
    "categoryId": "azure-management",
    "explaination": "Azure Policy permite restringir la creación de ciertos tipos de recursos dentro de un grupo de recursos."
  },
  {
    "id": 120,
    "text": "Desde [Azure Cloud Shell], puede realizar un seguimiento de normas y regulaciones como la ISO 27001. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "El portal de socios de Microsoft Cloud", "Compliance Manager", "El Centro de Confianza"],
    "correctAnswer": "Compliance Manager",
    "categoryId": "azure-management",
    "explaination": "Compliance Manager es una herramienta que ayuda a las organizaciones a gestionar el cumplimiento de normas y regulaciones, proporcionando evaluaciones de riesgo y recomendaciones para mejorar la postura de cumplimiento."
  },
  {
    "id": 121,
    "text": "Necesitas proteger sitios web contra ataques y generar informes de intentos de ataque. ¿Qué debes incluir en la solución?",
    "options": ["Firewall de Azure", "Un Grupo de Seguridad de Red (NSG)", "Microsoft Purview Information Protection", "Protección contra ataques DDoS"],
    "correctAnswer": "Protección contra ataques DDoS",
    "categoryId": "azure-services",
    "explaination": "La Protección contra ataques DDoS de Azure ayuda a proteger los sitios web contra ataques de denegación de servicio distribuida (DDoS) y proporciona informes detallados sobre los intentos de ataque."
  },
  {
    "id": 122,
    "text": "Intentas crear instancias administradas de SQL Server y recibes un mensaje para aumentar los límites de suscripción a Azure. ¿Qué debes hacer?",
    "options": ["Crear una alerta de estado del servicio", "Actualizar tu plan de soporte", "Modificar una directiva de Azure", "Crear una nueva solicitud de soporte"],
    "correctAnswer": "Crear una nueva solicitud de soporte",
    "categoryId": "azure-management",
    "explaination": "Si recibes un mensaje para aumentar los límites de suscripción a Azure, debes crear una nueva solicitud de soporte para solicitar un aumento de cuota o límite en tu suscripción."
  },
  {
    "id": 123,
    "text": "Tu empresa tiene 10 oficinas y generará varios informes de facturación de cada oficina en el portal de Azure. ¿Qué función de Azure Resource Manager deberías usar antes?",
    "options": ["Etiquetas", "Plantillas", "Bloqueos", "Políticas"],
    "correctAnswer": "Etiquetas",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas en Azure Resource Manager permiten organizar y categorizar los recursos, lo que facilita la generación de informes de facturación por oficina."
  },
  {
    "id": 124,
    "text": "Una empresa tiene varios departamentos gestionados por admins departamentales. ¿Cuáles son dos técnicas posibles para segmentar Azure por departamentos?",
    "options": ["Múltiples suscripciones", "Múltiples directorios de Microsoft Entra ID", "Varias regiones", "Múltiples grupos de recursos"],
    "correctAnswer": "Múltiples suscripciones",
    "correctAnswers": ["Múltiples suscripciones", "Múltiples directorios de Microsoft Entra ID"],
    "categoryId": "azure-management",
    "explaination": "Para segmentar Azure por departamentos, se pueden utilizar múltiples suscripciones para aislar recursos y facturación, o múltiples directorios de Microsoft Entra ID para gestionar identidades y acceso de manera independiente por departamento."
  },
  {
    "id": 125,
    "text": "¿En qué planes de soporte de Azure se puede abrir una nueva solicitud de soporte?",
    "options": ["Solo Professional Direct", "Solo Professional Direct y Standard", "Solo Professional Direct, Standard y Developer", "Professional Direct, Standard, Developer y Basic"],
    "correctAnswer": "Professional Direct, Standard, Developer y Basic",
    "categoryId": "azure-management",
    "explaination": "En Azure, los planes de soporte Professional Direct, Standard, Developer y Basic permiten a los usuarios abrir nuevas solicitudes de soporte, aunque el nivel de servicio y la prioridad pueden variar según el plan."
  },
  {
    "id": 126,
    "text": "¿Qué se garantiza en un Acuerdo de Nivel de Servicio (SLA) de Azure para máquinas virtuales?",
    "options": ["Tiempo de actividad", "Disponibilidad de funciones", "Ancho de banda", "Rendimiento"],
    "correctAnswer": "Tiempo de actividad",
    "categoryId": "azure-management",
    "explaination": "Un Acuerdo de Nivel de Servicio (SLA) de Azure para máquinas virtuales garantiza un tiempo de actividad específico, lo que significa que Microsoft se compromete a mantener las máquinas virtuales operativas durante un porcentaje determinado del tiempo."
  },
  {
    "id": 127,
    "text": "Solución: Recomendar un plan de soporte Básico para contactar con ingenieros de soporte por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Básico de Azure no incluye acceso a ingenieros de soporte por teléfono o correo. Para contactar con ingenieros de soporte, se necesitaría al menos el plan Standard o Professional Direct."
  },
  {
    "id": 128,
    "text": "Su empresa necesita que Microsoft realice una revisión arquitectónica. Tienen plan Básico. ¿Qué plan recomiendas minimizando costos?",
    "options": ["Desarrollador", "Professional Direct", "Standard"],
    "correctAnswer": "Professional Direct",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Professional Direct de Azure incluye revisiones arquitectónicas por parte de Microsoft, lo que lo convierte en la opción recomendada para su empresa, minimizando costos en comparación con el plan Standard."
  },
  {
    "id": 129,
    "text": "¿Qué se necesita para usar Azure Cost Management?",
    "options": ["Una suscripción para desarrolladores/pruebas", "Garantía de software", "Un Convenio Colectivo (CE)", "Una suscripción de pago por uso"],
    "correctAnswer": "Una suscripción de pago por uso",
    "categoryId": "azure-management",
    "explaination": "Azure Cost Management está disponible para suscripciones de pago por uso, lo que permite a los usuarios monitorear y administrar sus costos en Azure de manera efectiva."
  },
  {
    "id": 130,
    "text": "Tu cuenta de prueba de Azure caducó. Ahora no puedes [crear cuentas de usuario adicionales de Microsoft Entra ID]. ¿Qué es correcto?",
    "options": ["No es necesario realizar ningún cambio", "Iniciar una máquina virtual de Azure existente", "Acceder a tus datos almacenados en Azure", "Acceder al portal de Azure"],
    "correctAnswer": "Iniciar una máquina virtual de Azure existente",
    "categoryId": "azure-management",
    "explaination": "Cuando una cuenta de prueba de Azure caduca, no puedes crear nuevos recursos ni cuentas de usuario adicionales en Microsoft Entra ID. Sin embargo, aún puedes iniciar máquinas virtuales de Azure existentes y acceder a tus datos almacenados en Azure, pero no podrás acceder al portal de Azure para crear nuevos recursos."
  },
  {
    "id": 131,
    "text": "Solución: Recomendar un plan de soporte Premier para contactar ingenieros por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Premier de Azure ofrece acceso a ingenieros de soporte por teléfono o correo, lo que cumple el objetivo de contactar con ingenieros para asistencia técnica."
  },
  {
    "id": 132,
    "text": "Tu empresa tiene 10 departamentos y quieres que cada uno use una opción de pago diferente para los servicios de Azure. ¿Qué debes crear para cada departamento?",
    "options": ["Una reserva", "Una suscripción", "Un grupo de recursos", "Una instancia de contenedor"],
    "correctAnswer": "Una suscripción",
    "categoryId": "azure-management",
    "explaination": "Para que cada departamento use una opción de pago diferente para los servicios de Azure, debes crear una suscripción separada para cada departamento. Las suscripciones permiten gestionar la facturación y el acceso a los recursos de manera independiente, lo que facilita la administración de costos y recursos por departamento."
  },
  {
    "id": 133,
    "text": "¿Qué afirmación describe con precisión la Política de ciclo de vida moderna para los servicios de Azure?",
    "options": ["Microsoft ofrece soporte estándar por cinco años", "Microsoft requiere preaviso mínimo de 12 meses antes de finalizar el soporte para un servicio", "Una vez GA, Microsoft proporciona soporte por mínimo cuatro años", "Al retirarse un servicio, puede adquirir soporte extendido por hasta cinco años"],
    "correctAnswer": "Microsoft requiere preaviso mínimo de 12 meses antes de finalizar el soporte para un servicio",
    "categoryId": "azure-management",
    "explaination": "La Política de ciclo de vida moderna de Microsoft para los servicios de Azure establece que Microsoft proporciona un preaviso mínimo de 12 meses antes de finalizar el soporte para un servicio, lo que permite a los clientes planificar la transición a servicios alternativos o actualizaciones."
  },
  {
    "id": 134,
    "text": "Puedes usar las recomendaciones del Asesor en Azure para enviar alertas por correo cuando el costo de la suscripción supere un límite. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Control de acceso (IAM)", "Alertas presupuestarias", "Cumplimiento"],
    "correctAnswer": "Alertas presupuestarias",
    "categoryId": "azure-management",
    "explaination": "Las alertas presupuestarias en Azure Cost Management permiten enviar notificaciones por correo electrónico cuando el costo de la suscripción supera un límite establecido, ayudando a los usuarios a controlar y gestionar sus gastos en Azure de manera efectiva."
  },
  {
    "id": 135,
    "text": "Para implementar un modelo de nube híbrida, ¿una empresa primero debe contar con una nube privada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No es necesario contar con una nube privada para implementar un modelo de nube híbrida. Una empresa puede integrar servicios en la nube pública con su infraestructura local o con servicios en la nube privada, dependiendo de sus necesidades y objetivos específicos."
  },
  {
    "id": 136,
    "text": "¿Una empresa puede ampliar los recursos informáticos de su red interna mediante el uso de una nube híbrida?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, una nube híbrida permite a las empresas ampliar los recursos informáticos de su red interna al integrar servicios en la nube pública con su infraestructura local, lo que proporciona flexibilidad y escalabilidad según las necesidades del negocio."
  },
  {
    "id": 137,
    "text": "En un modelo de nube pública, ¿solo los usuarios invitados de su empresa pueden acceder a los recursos de la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, en un modelo de nube pública, los recursos están disponibles para cualquier usuario que tenga acceso a Internet, aunque las empresas pueden implementar medidas de seguridad y control de acceso para restringir el acceso a ciertos recursos."
  },
  {
    "id": 138,
    "text": "Necesitas recomendar una solución para garantizar la disponibilidad de algunos servidores si un centro de datos de Azure se desconecta durante un período prolongado. ¿Qué incluyes?",
    "options": ["Tolerancia a fallos", "Elasticidad", "Escalabilidad", "Baja latencia"],
    "correctAnswer": "Tolerancia a fallos",
    "categoryId": "cloud-concepts",
    "explaination": "La tolerancia a fallos es la capacidad de un sistema para continuar operando correctamente en caso de fallo de uno o más componentes. En el contexto de Azure, esto puede lograrse mediante la implementación de recursos en múltiples zonas de disponibilidad o regiones para garantizar que los servidores sigan disponibles incluso si un centro de datos se desconecta."
  },
  {
    "id": 139,
    "text": "Una organización que aloja su infraestructura [en una nube privada] puede cerrar su centro de datos. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "En una nube híbrida", "En la nube pública", "En un host Hyper-V"],
    "correctAnswer": "En la nube pública",
    "categoryId": "cloud-concepts",
    "explaination": "Una organización que aloja su infraestructura en una nube pública puede cerrar su centro de datos, ya que los recursos y servicios se alojan y gestionan en la nube pública, eliminando la necesidad de mantener un centro de datos local."
  },
  {
    "id": 140,
    "text": "¿Cuáles son dos características de la nube pública?",
    "options": ["Hardware dedicado", "Conexiones no seguras", "Almacenamiento limitado", "Precios según consumo", "Gestión de autoservicio"],
    "correctAnswer": "Precios según consumo",
    "correctAnswers": ["Precios según consumo", "Gestión de autoservicio"],
    "categoryId": "cloud-concepts",
    "explaination": "Las características de la nube pública incluyen precios según consumo, lo que significa que los usuarios pagan solo por los recursos que utilizan, y gestión de autoservicio, lo que permite a los usuarios aprovisionar y gestionar recursos de manera independiente sin necesidad de intervención del proveedor de servicios."
  },
  {
    "id": 141,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y VMs de Azure con SQL Server instalado. ¿Cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, crear VMs de Azure con SQL Server instalado no cumple el plan de solo PaaS, ya que las VMs son un servicio de infraestructura como servicio (IaaS). Para cumplir con un plan de solo PaaS, se debería utilizar servicios como Azure SQL Database en lugar de instalar SQL Server en una VM."
  },
  {
    "id": 142,
    "text": "App1 tiene uso bajo las 3 primeras semanas y muy alto la última semana. ¿Qué beneficio de Azure Cloud Services facilita la gestión de costos?",
    "options": ["Alta disponibilidad", "Alta latencia", "Elasticidad", "Balanceo de carga"],
    "correctAnswer": "Elasticidad",
    "categoryId": "cloud-concepts",
    "explaination": "La elasticidad es la capacidad de un sistema para adaptarse a cambios en la carga de trabajo, lo que permite a las aplicaciones escalar automáticamente hacia arriba o hacia abajo según la demanda. En este caso, App1 puede beneficiarse de la elasticidad para gestionar los costos durante las semanas de uso bajo y alto."
  },
  {
    "id": 143,
    "text": "Solución: Implementas las VMs en dos o más conjuntos de escalado para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, implementar VMs en conjuntos de escalado no garantiza la disponibilidad si falla un centro de datos, ya que los conjuntos de escalado se encuentran dentro de una sola región. Para garantizar la disponibilidad en caso de fallo de un centro de datos, se deben implementar recursos en múltiples zonas de disponibilidad o regiones."
  },
  {
    "id": 144,
    "text": "Relaciona los servicios de Azure con las descripciones correctas (virtualización OS, entorno portátil, crear/escalar apps web, plataforma código sin servidor):",
    "options": ["VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor", "Functions: virtualización OS; VMs: portátil; Containers: apps web; App Service: sin servidor", "VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor", "VMs: virtualización OS; Functions: portátil; App Service: apps web; Containers: sin servidor"],
    "correctAnswer": "VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor",
    "categoryId": "azure-services",
    "explaination": "Las VMs de Azure proporcionan virtualización del sistema operativo, los contenedores ofrecen un entorno portátil para aplicaciones, Azure App Service permite crear y escalar aplicaciones web, y Azure Functions es una plataforma de código sin servidor para ejecutar funciones en respuesta a eventos."
  },
  {
    "id": 145,
    "text": "Solución: Ejecutar el script PowerShell desde un equipo con macOS y PowerShell Core 6.0. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, ejecutar el script PowerShell desde un equipo con macOS y PowerShell Core 6.0 cumple el objetivo, ya que PowerShell Core es compatible con múltiples plataformas, incluyendo macOS, lo que permite a los usuarios gestionar recursos de Azure desde diferentes sistemas operativos."
  },
  {
    "id": 146,
    "text": "Azure Site Recovery proporciona [tolerancia a fallos] para máquinas virtuales. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Recuperación ante desastres", "Elasticidad", "Alta disponibilidad"],
    "correctAnswer": "Recuperación ante desastres",
    "categoryId": "azure-services",
    "explaination": "Azure Site Recovery es un servicio de recuperación ante desastres que permite replicar máquinas virtuales y aplicaciones a una ubicación secundaria, garantizando la continuidad del negocio en caso de fallos o desastres en la ubicación principal."
  },
  {
    "id": 147,
    "text": "Una zona de disponibilidad en Azure tiene ubicaciones físicamente separadas [en dos continentes]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Dentro de una única región de Azure", "Dentro de varias regiones de Azure", "Dentro de un único centro de datos de Azure"],
    "correctAnswer": "Dentro de una única región de Azure",
    "categoryId": "azure-services",
    "explaination": "Una zona de disponibilidad en Azure se encuentra dentro de una única región de Azure y está compuesta por ubicaciones físicamente separadas dentro de esa región, lo que proporciona alta disponibilidad y resiliencia a los recursos alojados en esa zona."
  },
  {
    "id": 148,
    "text": "Su empresa necesita determinar si Azure cumple los requisitos regionales de la empresa. ¿Qué solución debería utilizar?",
    "options": ["El Centro del Conocimiento", "Azure Marketplace", "El portal MyApps", "El Centro de Confianza"],
    "correctAnswer": "El Centro de Confianza",
    "categoryId": "azure-management",
    "explaination": "El Centro de Confianza de Microsoft proporciona información detallada sobre la seguridad, privacidad y cumplimiento de los servicios de Azure, lo que permite a las empresas determinar si Azure cumple con los requisitos regionales y normativos específicos."
  },
  {
    "id": 149,
    "text": "Azure Key Vault se utiliza para almacenar secretos para las cuentas de usuario de [Microsoft Entra ID]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Cuentas administrativas de Microsoft Entra ID", "Información de identificación personal (PII)", "Aplicaciones de servidor"],
    "correctAnswer": "Aplicaciones de servidor",
    "categoryId": "azure-management",
    "explaination": "Azure Key Vault se utiliza para almacenar secretos, claves y certificados de forma segura, especialmente para aplicaciones de servidor que necesitan acceder a recursos protegidos sin exponer credenciales sensibles."
  },
  {
    "id": 150,
    "text": "Después de crear una VM, necesitas modificar [Grupo de seguridad de red] para permitir conexiones al puerto TCP 8080. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Puerta de enlace de red virtual", "Red virtual", "Tabla de ruta"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-services",
    "explaination": "No es necesario realizar ningún cambio en el Grupo de seguridad de red (NSG) para permitir conexiones al puerto TCP 8080, ya que los NSG se pueden modificar fácilmente para agregar reglas que permitan el tráfico entrante en ese puerto específico."
  },
  {
    "id": 151,
    "text": "Solución: Modifica un NSG para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, modificar un NSG para permitir tráfico HTTP (puerto 80) hacia VM1 hará que sea accesible desde Internet a través de ese puerto, cumpliendo el objetivo de permitir el acceso HTTP."
  },
  {
    "id": 152,
    "text": "Solución: Modificas un plan de protección contra ataques DDoS para que VM1 sea accesible desde Internet a través de HTTP. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, modificar un plan de protección contra ataques DDoS no hará que VM1 sea accesible desde Internet a través de HTTP, ya que la protección contra ataques DDoS se enfoca en mitigar ataques de denegación de servicio y no en configurar el acceso a recursos específicos."
  },
  {
    "id": 153,
    "text": "Los grupos de recursos proporcionan a las organizaciones la capacidad de gestionar el cumplimiento en múltiples suscripciones. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Grupos de gestión", "Políticas de Azure", "Planes de Azure App Service"],
    "correctAnswer": "Grupos de gestión",
    "categoryId": "azure-management",
    "explaination": "Los grupos de gestión en Azure permiten organizar y gestionar el cumplimiento, la gobernanza y las políticas a través de múltiples suscripciones, facilitando la administración centralizada de recursos y el cumplimiento normativo."
  },
  {
    "id": 154,
    "text": "Tu red tiene un bosque de Active Directory con 5000 cuentas. Planeas migrar todos los recursos a Azure. ¿Qué recomiendas para minimizar el impacto en los usuarios?",
    "options": ["Implementar MFA de Azure", "Sincronizar todas las cuentas de Active Directory con Microsoft Entra ID", "Indicar a todos los usuarios que cambien su contraseña", "Crear cuenta de usuario invitado en Microsoft Entra ID para cada usuario"],
    "correctAnswer": "Sincronizar todas las cuentas de Active Directory con Microsoft Entra ID",
    "categoryId": "azure-management",
    "explaination": "Sincronizar todas las cuentas de Active Directory con Microsoft Entra ID utilizando Azure AD Connect permitirá a los usuarios mantener sus credenciales y minimizará el impacto en su experiencia de inicio de sesión al migrar recursos a Azure."
  },
  {
    "id": 155,
    "text": "¿Qué herramientas debería utilizar para evaluar si el entorno Azure de su empresa cumple con los requisitos normativos?",
    "options": ["El sitio web del Centro de Conocimiento", "La sección Asesor del portal de Azure", "Compliance Manager desde el portal de confianza del servicio", "El panel del Centro de seguridad del portal de Azure"],
    "correctAnswer": "Compliance Manager desde el portal de confianza del servicio",
    "categoryId": "azure-management",
    "explaination": "Compliance Manager desde el portal de confianza del servicio es la herramienta recomendada para evaluar el cumplimiento normativo del entorno Azure de una empresa, ya que proporciona evaluaciones de riesgo y recomendaciones específicas para mejorar la postura de cumplimiento."
  },
  {
    "id": 156,
    "text": "La [Declaración de privacidad de los servicios en línea de Microsoft] explica qué datos procesa Microsoft, cómo y con qué finalidad. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Términos y condiciones de los servicios en línea de Microsoft", "Acuerdo de nivel de servicio en línea de Microsoft", "Acuerdo de suscripción en línea para Microsoft Azure"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management",
    "explaination": "La Declaración de privacidad de los servicios en línea de Microsoft proporciona información detallada sobre qué datos procesa Microsoft, cómo se procesan y con qué finalidad, lo que ayuda a los usuarios a comprender la privacidad y seguridad de sus datos en los servicios en línea de Microsoft."
  },
  {
    "id": 157,
    "text": "Si Microsoft planea dejar de dar soporte a un servicio sin sucesor, proporcionará notificación con al menos [12 meses] de antelación. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "6 meses", "90 días", "30 días"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management",
    "explaination": "Microsoft proporciona notificaciones con al menos 12 meses de antelación para avisar a los usuarios de que un servicio no tendrá soporte en un futuro."
  },
  {
    "id": 158,
    "text": "Solución: Eliminar las interfaces de red sin usar para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Eliminar las interfaces de red sin usar puede ayudar a reducir costos en Azure, ya que se cobran por el uso de recursos, incluyendo las interfaces de red. Al eliminar las interfaces de red que no se están utilizando, se pueden evitar cargos innecesarios y optimizar el gasto en Azure."
  },
  {
    "id": 159,
    "text": "Solución: Eliminar las direcciones IP públicas sin usar para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Eliminar las direcciones IP públicas sin usar puede ayudar a reducir costos en Azure, ya que se cobran por el uso de recursos, incluyendo las direcciones IP públicas. Al eliminar las direcciones IP públicas que no se están utilizando, se pueden evitar cargos innecesarios y optimizar el gasto en Azure."
  },
  {
    "id": 160,
    "text": "Solución: Eliminar las cuentas de usuario sin usar de Microsoft Entra ID para reducir costos de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Eliminar las cuentas de usuario sin usar de Microsoft Entra ID no reduce costos de Azure, ya que el costo de Azure se basa en el uso de recursos y servicios, no en la cantidad de cuentas de usuario en Microsoft Entra ID. Sin embargo, eliminar cuentas de usuario sin usar puede mejorar la seguridad y la gestión de identidades."
  },
  {
    "id": 161,
    "text": "Un plan de soporte [Estándar] brinda información sobre mejores prácticas, estado de salud y acceso 24/7 a información de facturación al menor costo posible. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Desarrollador", "Básico", "Professional Direct"],
    "correctAnswer": "Básico",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Básico de Azure proporciona acceso a información sobre mejores prácticas, estado de salud y facturación, pero no incluye acceso a ingenieros de soporte por teléfono o correo. Es la opción de menor costo para obtener información básica sobre el uso de Azure."
  },
  {
    "id": 162,
    "text": "Puede crear una solicitud de soporte de Azure desde [support.microsoft.com]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "El portal de Azure", "El Centro del Conocimiento", "El centro de administración de Seguridad y Cumplimiento"],
    "correctAnswer": "El portal de Azure",
    "categoryId": "azure-management",
    "explaination": "Puedes crear una solicitud de soporte de Azure desde el portal de Azure, donde puedes seleccionar el tipo de problema, la gravedad y proporcionar detalles para recibir asistencia técnica de Microsoft."
  },
  {
    "id": 163,
    "text": "Solución: Eliminar los grupos sin usar de Microsoft Entra ID para reducir costos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Eliminar los grupos sin usar de Microsoft Entra ID no reduce costos de Azure, ya que el costo de Azure se basa en el uso de recursos y servicios, no en la cantidad de grupos en Microsoft Entra ID. Sin embargo, eliminar grupos sin usar puede mejorar la seguridad y la gestión de identidades."
  },
  {
    "id": 164,
    "text": "El plan de soporte Azure [Estándar] es la opción de menor costo para recibir acceso 24/7 a ingenieros de soporte por teléfono. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Desarrollador", "Básico", "Professional Direct"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management",
    "explaination": "El plan de soporte Estándar de Azure no es la opción de menor costo para recibir acceso 24/7 a ingenieros de soporte por teléfono. El plan de soporte Professional Direct es el que ofrece acceso a ingenieros de soporte por teléfono, mientras que el plan Estándar proporciona acceso a información y recursos, pero no incluye acceso directo a ingenieros de soporte."
  },
  {
    "id": 165,
    "text": "Todos los servicios de Azure en vista previa pública se proporcionan sin documentación. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Solo se puede configurar desde la CLI de Azure", "Excluidos de los Acuerdos de Nivel de Servicio", "Solo se puede configurar desde el portal de Azure"],
    "correctAnswer": "Excluidos de los Acuerdos de Nivel de Servicio",
    "categoryId": "azure-management",
    "explaination": "Los servicios de Azure en vista previa pública están excluidos de los Acuerdos de Nivel de Servicio (SLA) de Azure, lo que significa que no se garantiza un nivel específico de disponibilidad o rendimiento para estos servicios durante su fase de vista previa."
  },
  {
    "id": 166,
    "text": "Un servicio de Azure está disponible para todos los clientes cuando está en [vista previa pública]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Vista previa privada", "Desarrollo", "Una suscripción a un Contrato Empresarial (EA)"],
    "correctAnswer": "No es necesario realizar ningún cambio",
    "categoryId": "azure-management",
    "explaination": "Un servicio de Azure está disponible para todos los clientes cuando está en vista previa pública, lo que permite a los usuarios probar y proporcionar comentarios sobre el servicio antes de su lanzamiento general."
  },
  {
    "id": 167,
    "text": "Solución: Debe incluir elasticidad en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, la elasticidad se refiere a la capacidad de un sistema para adaptarse a cambios en la carga de trabajo, pero no garantiza la disponibilidad si un centro de datos no está disponible. Para garantizar la disponibilidad en caso de fallo de un centro de datos, se deben implementar recursos en múltiples zonas de disponibilidad o regiones."
  },
  {
    "id": 168,
    "text": "Solución: Debe incluir la escalabilidad en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, la escalabilidad se refiere a la capacidad de un sistema para manejar un aumento en la carga de trabajo, pero no garantiza la disponibilidad si un centro de datos no está disponible. Para garantizar la disponibilidad en caso de fallo de un centro de datos, se deben implementar recursos en múltiples zonas de disponibilidad o regiones."
  },
  {
    "id": 169,
    "text": "Solución: Debe incluir tolerancia a fallos en su plan para garantizar disponibilidad si un centro de datos no está disponible. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, la tolerancia a fallos es la capacidad de un sistema para continuar operando correctamente en caso de fallo de uno o más componentes. En el contexto de Azure, esto puede lograrse mediante la implementación de recursos en múltiples zonas de disponibilidad o regiones para garantizar que los servidores sigan disponibles incluso si un centro de datos se desconecta."
  },
  {
    "id": 170,
    "text": "Solución: Debería utilizar Software como Servicio (SaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, Software como Servicio (SaaS) no es adecuado para implementar VMs de Azure, ya que SaaS se refiere a aplicaciones y servicios alojados en la nube que los usuarios pueden acceder a través de Internet, mientras que las VMs de Azure se implementan utilizando Infraestructura como Servicio (IaaS) o Plataforma como Servicio (PaaS)."
  },
  {
    "id": 171,
    "text": "Solución: Debe utilizar Plataforma como Servicio (PaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, Plataforma como Servicio (PaaS) no es adecuado para implementar VMs de Azure, ya que PaaS se refiere a servicios y plataformas que permiten a los desarrolladores crear, probar e implementar aplicaciones sin preocuparse por la infraestructura subyacente, mientras que las VMs de Azure se implementan utilizando Infraestructura como Servicio (IaaS)."
  },
  {
    "id": 172,
    "text": "Solución: Debe utilizar Infraestructura como Servicio (IaaS) para implementar VMs de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, Infraestructura como Servicio (IaaS) es adecuado para implementar VMs de Azure, ya que IaaS proporciona acceso a recursos de infraestructura virtualizados, incluyendo servidores, almacenamiento y redes, que pueden ser utilizados para ejecutar aplicaciones y servicios en la nube."
  },
  {
    "id": 173,
    "text": "Solución: Se recomienda la incorporación de un centro de datos adicional para proporcionar recursos adicionales minimizando costos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, la incorporación de un centro de datos adicional no es una solución eficiente para proporcionar recursos adicionales minimizando costos, ya que implica costos significativos de infraestructura, mantenimiento y personal. En su lugar, se recomienda utilizar servicios en la nube como Azure para escalar recursos de manera flexible y rentable según las necesidades del negocio."
  },
  {
    "id": 174,
    "text": "Solución: Se recomienda el uso de una nube híbrida para proporcionar recursos adicionales minimizando costos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, el uso de una nube híbrida permite a las empresas aprovechar tanto la infraestructura local como los servicios en la nube para proporcionar recursos adicionales de manera flexible y rentable, minimizando costos operativos y de capital al escalar según las necesidades del negocio."
  },
  {
    "id": 175,
    "text": "Solución: Se recomienda el uso de una nube privada para proporcionar recursos adicionales minimizando costos operativos y de capital. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, el uso de una nube privada puede no ser la solución más eficiente para proporcionar recursos adicionales minimizando costos operativos y de capital, ya que implica costos significativos de infraestructura, mantenimiento y personal. En su lugar, se recomienda utilizar servicios en la nube como Azure para escalar recursos de manera flexible y rentable según las necesidades del negocio."
  },
  {
    "id": 176,
    "text": "Solución: Recomiendas el uso del modelo de gasto elástico para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, el modelo de gasto elástico no es un término reconocido en el contexto de Azure. Para VMs migradas a Azure pago por uso, se recomienda utilizar el modelo de gasto operativo, que permite a las empresas pagar solo por los recursos que utilizan, proporcionando flexibilidad y control sobre los costos."
  },
  {
    "id": 177,
    "text": "Solución: Se recomienda el uso del modelo de gasto escalable para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "No, el modelo de gasto escalable no es un término reconocido en el contexto de Azure. Para VMs migradas a Azure pago por uso, se recomienda utilizar el modelo de gasto operativo, que permite a las empresas pagar solo por los recursos que utilizan, proporcionando flexibilidad y control sobre los costos."
  },
  {
    "id": 178,
    "text": "Solución: Se recomienda el uso del modelo de gasto operativo para VMs migradas a Azure pago por uso. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Sí, el modelo de gasto operativo es el enfoque recomendado para VMs migradas a Azure pago por uso, ya que permite a las empresas pagar solo por los recursos que utilizan, proporcionando flexibilidad y control sobre los costos, lo que es ideal para entornos dinámicos y escalables en la nube."
  },
  {
    "id": 179,
    "text": "Solución: Debe utilizar Azure Cosmos DB para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure Cosmos DB no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 180,
    "text": "Solución: Debe utilizar Azure Logic Apps para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure Logic Apps no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 181,
    "text": "Solución: Debe utilizar Azure Machine Learning Studio para crear, probar e implementar análisis predictivos para IA. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, Azure Machine Learning Studio es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 182,
    "text": "Solución: Recomiendas incluir el servicio Azure API Management en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 183,
    "text": "Solución: Recomiendas incluir grupos de administración en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 184,
    "text": "Solución: Recomiendas incluir plantillas de Azure Resource Manager en la estrategia para crear recursos de Azure automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 185,
    "text": "Solución: Su estrategia incluye dos VMs y una zona de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 186,
    "text": "Solución: Su estrategia incluye una VM y dos zonas de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 187,
    "text": "Solución: Su estrategia incluye dos VMs y dos zonas de disponibilidad para garantizar disponibilidad del 99,99%. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 188,
    "text": "Solución: Recomiendas el uso de Microsoft Managed Desktop para reducir esfuerzo administrativo al implementar VMs personalizadas semanalmente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 189,
    "text": "Solución: Recomiendas el uso de instancias de VMs reservadas de Azure para reducir esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 190,
    "text": "Solución: Recomiendas el uso de Azure DevTest Labs para reducir esfuerzo administrativo al implementar VMs personalizadas semanalmente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 191,
    "text": "Trabajadores remotos necesitan acceder a VMs en VNet1. ¿Qué debe hacer?",
    "options": ["Configurar una VPN de sitio a sitio (S2S)", "Configure una VPN de red virtual a red virtual", "Configurar una VPN de punto a sitio (P2S)", "Configurar DirectAccess en una VM con Windows Server 2012", "Configurar una VPN multisitio"],
    "correctAnswer": "Configurar una VPN de punto a sitio (P2S)",
    "categoryId": "azure-services",
    "explaination": "Sí, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 192,
    "text": "Solución: Recomiendas el uso de Microsoft Purview Information Protection para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 193,
    "text": "Solución: Recomiendas el uso de Azure Key Vault para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 194,
    "text": "Solución: Recomiendas el uso de MFA de Azure para cifrar credenciales administrativas durante la implementación. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure API Management es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 195,
    "text": "Solución: Configuras el uso de Azure Key Vault para que usuarios con IP no identificada reciban recomendación automática de cambiar contraseña. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Key Vault no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 196,
    "text": "Solución: Configurar la protección de Microsoft Entra ID para que usuarios con IP no identificada cambien contraseña automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la protección de Microsoft Entra ID (Azure AD Identity Protection) puede configurarse para detectar actividades sospechosas, como inicios de sesión desde IP no identificadas, y puede recomendar o requerir que los usuarios cambien su contraseña automáticamente para mejorar la seguridad."
  },
  {
    "id": 197,
    "text": "Solución: Configuras Microsoft Entra Privileged Identity Management para que usuarios con IP no identificada cambien contraseña automáticamente. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Microsoft Entra Privileged Identity Management no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 198,
    "text": "Solución: Incluyes Azure Service Bus en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 199,
    "text": "Solución: Incluyes grupos de seguridad de red (NSG) en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, Azure Service Bus es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 200,
    "text": "Solución: Incluyes una puerta de enlace de red local en tu estrategia para controlar tipos de conexión entre servidores web y de bases de datos. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 201,
    "text": "Solución: Planeas implementar MFA de Azure para minimizar el impacto en los usuarios tras la migración de Active Directory. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 202,
    "text": "Solución: Planeas sincronizar todas las cuentas de Active Directory con Microsoft Entra ID para minimizar el impacto en los usuarios. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure Service Bus es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 203,
    "text": "Solución: Planeas exigir el cambio de contraseña para minimizar el impacto en los usuarios tras la migración. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 204,
    "text": "Sus desarrolladores tienen 10 apps web con dominios personalizados, 10 GB de almacenamiento, instancias dedicadas, balanceo de carga y minimizar costos. ¿Qué plan Web Tier usar?",
    "options": ["Estándar", "Básico", "Gratis", "Compartido"],
    "correctAnswer": "Estándar",
    "categoryId": "azure-services",
    "explaination": "El plan de servicio Web Tier Estándar es la opción adecuada para satisfacer los requisitos de las aplicaciones web, ya que ofrece soporte para dominios personalizados, almacenamiento dedicado, instancias dedicadas y balanceo de carga, mientras que el plan Básico no proporciona estas características y los planes Gratis y Compartido tienen limitaciones significativas en cuanto a recursos y funcionalidades."
  },
  {
    "id": 205,
    "text": "Solución: Genera una alerta de estado del servicio para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 206,
    "text": "Solución: Modifica una directiva de Azure para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 207,
    "text": "Solución: Genera una nueva solicitud de soporte para aumentar los límites de suscripción de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure Service Bus es un servicio de IA y se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 208,
    "text": "Solución: Planeas utilizar varios directorios de Microsoft Entra ID para segmentar Azure para las divisiones. ¿Cumple la solución minimizando el esfuerzo administrativo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 209,
    "text": "Solución: Planeas utilizar varios grupos de recursos para segmentar Azure para las divisiones minimizando el esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Service Bus no es un servicio de IA y no se recomienda utilizar para crear, probar e implementar análisis predictivos para IA."
  },
  {
    "id": 210,
    "text": "Solución: Planeas utilizar varias suscripciones para segmentar Azure para las divisiones minimizando el esfuerzo administrativo. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, utilizar varias suscripciones de Azure para segmentar los recursos para las divisiones puede ayudar a minimizar el esfuerzo administrativo al permitir una gestión más granular de los recursos, la facturación y el acceso, lo que facilita la organización y el control de los recursos en función de las necesidades específicas de cada división."
  },
  {
    "id": 211,
    "text": "Una app web con URL miami.weyland.com, dos instancias, compatibilidad con SSL, 12 GB de almacenamiento y minimizar costos. ¿Qué plan Web Tier usar?",
    "options": ["Estándar", "Básico", "Gratis", "Compartido"],
    "correctAnswer": "Estándar",
    "categoryId": "azure-services",
    "explaination": "El plan de servicio Web Tier Estándar es la opción adecuada para satisfacer los requisitos de la aplicación web, ya que ofrece soporte para dominios personalizados, almacenamiento dedicado, instancias dedicadas y compatibilidad con SSL, mientras que el plan Básico no proporciona estas características y los planes Gratis y Compartido tienen limitaciones significativas en cuanto a recursos y funcionalidades."
  },
  {
    "id": 212,
    "text": "Empresa con centros de datos en Los Ángeles y Nueva York. Datos en múltiples nodos, en diferentes ubicaciones geográficas, y que puedan leerse desde la ubicación secundaria. ¿Qué opción de redundancia de almacenamiento recomienda?",
    "options": ["Almacenamiento georredundante", "Almacenamiento georredundante de solo lectura", "Almacenamiento con redundancia de zona", "Almacenamiento localmente redundante"],
    "correctAnswer": "Almacenamiento georredundante de solo lectura",
    "categoryId": "azure-services",
    "explaination": "El almacenamiento georredundante de solo lectura (RA-GRS) es la opción recomendada para satisfacer los requisitos de la empresa, ya que proporciona redundancia geográfica para los datos, permitiendo que se lean desde la ubicación secundaria en caso de una interrupción en la ubicación principal, mientras que el almacenamiento georredundante (GRS) no garantiza la capacidad de lectura desde la ubicación secundaria."
  },
  {
    "id": 213,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Estándar para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, la solución no cumple la recomendación de la empresa, ya que la empresa no se ha suscrito al plan Estándar para que Microsoft realice una revisión arquitectónica."
  },
  {
    "id": 214,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Professional Direct para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución minimizando costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la solución cumple la recomendación de la empresa, ya que el plan Professional Direct ofrece acceso a ingenieros de soporte por teléfono, lo que puede ayudar a minimizar costos al proporcionar asistencia directa para la revisión arquitectónica y resolver problemas de manera eficiente."
  },
  {
    "id": 215,
    "text": "Solución: Recomiendas que la empresa se suscriba al plan Premier para que Microsoft realice una revisión arquitectónica. ¿Cumple la solución minimizando costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la solución cumple la recomendación de la empresa, ya que el plan Premier ofrece acceso a ingenieros de soporte por teléfono, lo que puede ayudar a minimizar costos al proporcionar asistencia directa para la revisión arquitectónica y resolver problemas de manera eficiente."
  },
  {
    "id": 216,
    "text": "Solución: Recomiendas crear un rol de Azure para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, la solución no cumple la recomendación de la empresa, ya que no se ha creado un rol de Azure para cada división para que paguen por sus propios servicios de Azure."
  },
  {
    "id": 217,
    "text": "Solución: Recomiendas crear una política de Azure para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, la solución no cumple la recomendación de la empresa, ya que no se ha creado una política de Azure para cada división para que paguen por sus propios servicios de Azure."
  },
  {
    "id": 218,
    "text": "Solución: Recomiendas crear una suscripción para cada división para que paguen por sus propios servicios de Azure. ¿Cumple la solución?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, la solución cumple la recomendación de la empresa, ya que se ha creado una suscripción para cada división para que paguen por sus propios servicios de Azure."
  },
  {
    "id": 219,
    "text": "¿Una suscripción de Azure puede estar asociada a varios inquilinos de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, una suscripción de Azure no puede estar asociada a varios inquilinos de Microsoft Entra ID."
  },
  {
    "id": 220,
    "text": "¿Puede cambiar el inquilino de Microsoft Entra ID al que está asociada una suscripción de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, puede cambiar el inquilino de Microsoft Entra ID al que está asociada una suscripción de Azure."
  },
  {
    "id": 221,
    "text": "Cuando caduca una suscripción de Azure, ¿el inquilino de Microsoft Entra ID asociado se elimina automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, cuando caduca una suscripción de Azure, el inquilino de Microsoft Entra ID asociado no se elimina automáticamente."
  },
  {
    "id": 222,
    "text": "¿Una única cuenta de Microsoft puede utilizarse para administrar varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, una única cuenta de Microsoft puede utilizarse para administrar varias suscripciones de Azure."
  },
  {
    "id": 223,
    "text": "¿Se pueden fusionar dos suscripciones de Azure en una sola?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, no se pueden fusionar dos suscripciones de Azure en una sola."
  },
  {
    "id": 224,
    "text": "¿Una empresa puede utilizar recursos de múltiples suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, una empresa puede utilizar recursos de múltiples suscripciones."
  },
  {
    "id": 225,
    "text": "¿Las zonas de disponibilidad se pueden implementar en todas las regiones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, las zonas de disponibilidad no se pueden implementar en todas las regiones de Azure."
  },
  {
    "id": 226,
    "text": "¿En las zonas de disponibilidad solo se pueden crear VMs que ejecuten Windows Server?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, en las zonas de disponibilidad solo se pueden crear VMs que ejecuten Windows Server."
  },
  {
    "id": 227,
    "text": "¿Las zonas de disponibilidad se utilizan para replicar datos y aplicaciones en varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, las zonas de disponibilidad no se utilizan para replicar datos y aplicaciones en varias regiones."
  },
  {
    "id": 228,
    "text": "Necesitas identificar qué servicio de almacenamiento usar para guardar los discos de datos no administrados de una VM. ¿Qué debes identificar?",
    "options": ["Contenedores", "Compartir archivos", "Tablas", "Colas"],
    "correctAnswer": "Contenedores",
    "categoryId": "azure-services",
    "explaination": "Sí, los contenedores de Azure Storage se utilizan para almacenar los discos de datos no administrados de una VM, ya que proporcionan un espacio de almacenamiento optimizado para este tipo de datos, permitiendo un acceso eficiente y seguro a los discos de datos asociados con las máquinas virtuales en Azure."
  },
  {
    "id": 229,
    "text": "Necesitas implementar una solución de base de datos que pueda agregar datos simultáneamente desde varias regiones y almacenar documentos JSON. ¿Qué servicio implementas?",
    "options": ["Azure Cosmos DB", "Base de datos SQL", "Base de datos Azure para MySQL", "Base de datos Azure para PostgreSQL"],
    "correctAnswer": "Azure Cosmos DB",
    "categoryId": "azure-services",
    "explaination": "Sí, Azure Cosmos DB es el servicio recomendado para implementar una solución de base de datos que pueda agregar datos simultáneamente desde varias regiones y almacenar documentos JSON, ya que ofrece una arquitectura globalmente distribuida, baja latencia y soporte nativo para documentos JSON, lo que lo hace ideal para aplicaciones que requieren alta disponibilidad y escalabilidad en múltiples regiones."
  },
  {
    "id": 230,
    "text": "¿Todos los recursos de Azure implementados en un grupo de recursos deben usar la misma región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, los recursos de Azure implementados en un grupo de recursos no necesitan usar la misma región de Azure."
  },
  {
    "id": 231,
    "text": "Si se asigna una etiqueta a un grupo de recursos, ¿todos los recursos de Azure de ese grupo se asignarán a la misma etiqueta automáticamente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, si se asigna una etiqueta a un grupo de recursos, no todos los recursos de Azure de ese grupo se asignarán a la misma etiqueta automáticamente. Las etiquetas deben asignarse individualmente a cada recurso para que estén asociadas con esa etiqueta."
  },
  {
    "id": 232,
    "text": "Si se asignan permisos a un usuario para administrar un grupo de recursos, ¿podrá administrar todos los recursos de Azure en ese grupo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, si se asignan permisos a un usuario para administrar un grupo de recursos, podrá administrar todos los recursos de Azure en ese grupo."
  },
  {
    "id": 233,
    "text": "Para garantizar disponibilidad del 99,99%, ¿cuál es el número mínimo de máquinas virtuales que debe recomendar?",
    "options": ["1", "2", "3"],
    "correctAnswer": "2",
    "categoryId": "azure-management",
    "explaination": "El número mínimo de máquinas virtuales que debe recomendar para garantizar disponibilidad del 99,99% es 2."
  },
  {
    "id": 234,
    "text": "Para garantizar disponibilidad del 99,99%, ¿cuál es el número mínimo de zonas de disponibilidad que debe recomendar?",
    "options": ["1", "2", "3"],
    "correctAnswer": "2",
    "categoryId": "azure-management",
    "explaination": "El número mínimo de zonas de disponibilidad que debe recomendar para garantizar disponibilidad del 99,99% es 2."
  },
  {
    "id": 235,
    "text": "¿Los datos en una cuenta de Azure Storage tienen automáticamente al menos tres copias?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, los datos en una cuenta de Azure Storage tienen automáticamente al menos tres copias."
  },
  {
    "id": 236,
    "text": "¿Todos los datos copiados a una cuenta de Azure Storage se respaldan automáticamente en otro centro de datos de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, todos los datos copiados a una cuenta de Azure Storage se respaldan>manualmente en otro centro de datos de Azure."
  },
  {
    "id": 237,
    "text": "¿Una cuenta de Azure Storage puede contener hasta 2 TB de datos y hasta un millón de archivos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, una cuenta de Azure Storage puede contener hasta 2 TB de datos y hasta un millón de archivos."
  },
  {
    "id": 238,
    "text": "¿Puede implementar zonas de disponibilidad en todas las regiones de Azure donde tiene recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, puede implementar zonas de disponibilidad en todas las regiones de Azure donde tiene recursos."
  },
  {
    "id": 239,
    "text": "¿América del Norte está representada por una única región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, America del Norte está representada por una única región de Azure."
  },
  {
    "id": 240,
    "text": "¿Cada región de Azure tiene varios centros de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, cada región de Azure tiene varios centros de datos."
  },
  {
    "id": 241,
    "text": "¿Las transferencias de datos entre servicios de Azure ubicados en diferentes regiones de Azure son siempre gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, las transferencias de datos entre servicios de Azure ubicados en diferentes regiones de Azure no son siempre gratuitas."
  },
  {
    "id": 242,
    "text": "Necesitas recibir notificaciones cuando Microsoft planee realizar tareas de mantenimiento que puedan afectar a los recursos en tu suscripción. ¿Qué método deberías usar?",
    "options": ["Azure Monitor", "Azure Service Health", "Azure Advisor", "Microsoft Trust Center"],
    "correctAnswer": "Azure Service Health",
    "categoryId": "azure-management",
    "explaination": "Necesitas recibir notificaciones cuando Microsoft planee realizar tareas de mantenimiento que puedan afectar a los recursos en tu suscripción. Usar Azure Service Health."
  },
  {
    "id": 243,
    "text": "¿Un host de sesión de Windows Virtual Desktop solo puede ejecutar Windows 10?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, un host de sesión de Windows Virtual Desktop solo puede ejecutar Windows 10."
  },
  {
    "id": 244,
    "text": "¿Un grupo de hosts de Windows Virtual Desktop con 20 hosts admite un máximo de 20 conexiones de usuario simultáneas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, un grupo de hosts de Windows Virtual Desktop con 20 hosts admite un máximo de 20 conexiones de usuario simultáneas."
  },
  {
    "id": 245,
    "text": "¿Windows Virtual Desktop admite la virtualización de escritorios y aplicaciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, Windows Virtual Desktop admite la virtualización de escritorios y aplicaciones."
  },
  {
    "id": 246,
    "text": "[...] puede calcular el ahorro de costes por reducción del consumo eléctrico al migrar servidores SQL locales a Azure.",
    "options": ["Azure Migrate: Evaluación de servidores", "Calculadora del coste total de propiedad (TCO) de Azure", "El asistente de migración de bases de datos", "La calculadora de precios en Azure"],
    "correctAnswer": "Calculadora del coste total de propiedad (TCO) de Azure",
    "categoryId": "azure-management",
    "explaination": "La calculadora del coste total de propiedad (TCO) de Azure puede calcular el ahorro de costes por reducción del consumo eléctrico al migrar servidores SQL locales a Azure."
  },
  {
    "id": 247,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo del centro de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo del centro de datos."
  },
  {
    "id": 248,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo de región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "No, no puedes usar las zonas de disponibilidad en Azure para proteger las VMs ante un fallo de región."
  },
  {
    "id": 249,
    "text": "¿Puedes usar las zonas de disponibilidad en Azure para proteger los discos administrados ante una falla del centro de datos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Sí, puedes usar las zonas de disponibilidad en Azure para proteger los discos administrados ante una falla del centro de datos."
  },
  {
    "id": 250,
    "text": "¿Una suscripción de Azure puede tener varios administradores de cuenta?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, una suscripción de Azure puede tener varios administradores de cuenta."
  },
  {
    "id": 251,
    "text": "¿Una suscripción a Azure solo se puede administrar mediante una cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, una suscripción a Azure solo se puede administrar mediante una cuenta de Microsoft."
  },
  {
    "id": 252,
    "text": "¿Un grupo de recursos de Azure puede contener varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, un grupo de recursos de Azure puede contener varias suscripciones de Azure."
  },
  {
    "id": 253,
    "text": "Para usar credenciales de Microsoft Entra ID en Windows 10, ¿el equipo debe estar unido a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, para usar credenciales de Microsoft Entra ID en Windows 10, el equipo debe estar unido a Microsoft Entra ID."
  },
  {
    "id": 254,
    "text": "¿Los usuarios de Microsoft Entra ID se organizan mediante grupos de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, los usuarios de Microsoft Entra ID se organizan mediante grupos de recursos."
  },
  {
    "id": 255,
    "text": "¿Los grupos de Microsoft Entra ID admiten reglas de pertenencia dinámicas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, los grupos de Microsoft Entra ID admiten reglas de pertenencia dinámicas."
  },
  {
    "id": 256,
    "text": "Planeas implementar varias VMs y garantizar disponibilidad si falla un centro de datos. ¿Cuáles son dos posibles soluciones?",
    "options": ["Implementar VMs en dos o más zonas de disponibilidad", "Implementar VMs en dos o más grupos de recursos", "Implementar VMs en un conjunto de escalado", "Implementar VMs en dos o más regiones"],
    "correctAnswer": "Implementar VMs en dos o más zonas de disponibilidad",
    "correctAnswers": ["Implementar VMs en dos o más zonas de disponibilidad", "Implementar VMs en dos o más regiones"],
    "categoryId": "azure-services",
    "explaination": "Implementar VMs en dos o más zonas de disponibilidad y en dos o más regiones son soluciones adecuadas para garantizar disponibilidad si falla un centro de datos, ya que proporcionan redundancia y resiliencia al distribuir las VMs en diferentes ubicaciones físicas, mientras que implementar VMs en grupos de recursos o conjuntos de escalado no garantiza la protección contra fallos de centro de datos."
  },
  {
    "id": 257,
    "text": "¿Azure Monitor puede supervisar el rendimiento de los equipos locales?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure Monitor puede supervisar el rendimiento de los equipos locales."
  },
  {
    "id": 258,
    "text": "¿Azure Monitor puede enviar alertas a los grupos de seguridad de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, Azure Monitor no puede enviar alertas a los grupos de seguridad de Microsoft Entra ID."
  },
  {
    "id": 259,
    "text": "¿Azure Monitor puede generar alertas basadas en datos de un espacio de trabajo de Azure Log Analytics?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, Azure Monitor puede generar alertas basadas en datos de un espacio de trabajo de Azure Log Analytics."
  },
  {
    "id": 260,
    "text": "Desde Azure Service Health, ¿puede un administrador ver el estado de todos los servicios en un entorno de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Sí, desde Azure Service Health, un administrador puede ver el estado de todos los servicios en un entorno de Azure."
  },
  {
    "id": 261,
    "text": "Desde Azure Service Health, ¿puede un administrador crear una regla para recibir alertas si un servicio falla?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Service Health permite configurar alertas y notificaciones cuando ocurre una interrupción o incidente que afecta servicios de Azure utilizados por la suscripción.",
    "categoryId": "azure-management"
  },
  {
    "id": 262,
    "text": "Desde Azure Service Health, ¿puede un administrador prevenir un fallo del servicio?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure Service Health solo informa y alerta sobre incidentes y mantenimientos. No puede evitar que ocurra una falla del servicio.",
    "categoryId": "azure-management"
  },
  {
    "id": 263,
    "text": "¿Qué panel del portal de Azure debe usarse para supervisar el estado de los servicios de Azure?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Monitor",
    "explaination": "Azure Monitor permite supervisar métricas, registros, rendimiento, alertas y estado operativo de los recursos y servicios.",
    "categoryId": "azure-management"
  },
  {
    "id": 264,
    "text": "¿Qué panel del portal de Azure debe usarse para explorar las imágenes de VMs disponibles?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Marketplace",
    "explaination": "Azure Marketplace contiene imágenes de máquinas virtuales, aplicaciones y soluciones listas para implementar.",
    "categoryId": "azure-management"
  },
  {
    "id": 265,
    "text": "¿Qué panel del portal de Azure debe usarse para ver recomendaciones de seguridad?",
    "options": ["Monitor", "Suscripciones", "Marketplace", "Asesor"],
    "correctAnswer": "Asesor",
    "explaination": "Azure Advisor analiza la configuración de los recursos y entrega recomendaciones relacionadas con seguridad, costos, rendimiento y alta disponibilidad.",
    "categoryId": "azure-management"
  },
  {
    "id": 266,
    "text": "¿Azure Advisor puede generar una lista de VMs de Azure protegidas por Azure Backup?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Advisor puede identificar recursos protegidos o no protegidos y recomendar mejoras relacionadas con respaldo y continuidad operativa.",
    "categoryId": "azure-management"
  },
  {
    "id": 267,
    "text": "Si implementa las recomendaciones de seguridad de Azure Advisor, ¿la puntuación de seguridad de su empresa disminuirá?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Aplicar las recomendaciones normalmente mejora la postura de seguridad y aumenta la puntuación de seguridad.",
    "categoryId": "azure-management"
  },
  {
    "id": 268,
    "text": "Para mantener el soporte de Microsoft, ¿debe implementar las recomendaciones de seguridad de Azure Advisor en un plazo de 30 días?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Las recomendaciones de Azure Advisor son sugerencias de buenas prácticas y no requisitos obligatorios para mantener el soporte.",
    "categoryId": "azure-management"
  },
  {
    "id": 269,
    "text": "¿Qué herramienta puedes usar para enviar automáticamente una alerta si un administrador detiene una VM de Azure?",
    "options": ["Asesor de Azure", "Azure Service Health", "Azure Monitor", "Azure Network Watcher"],
    "correctAnswer": "Azure Monitor",
    "explaination": "Azure Monitor permite crear alertas basadas en eventos y registros de actividad, incluyendo apagado de máquinas virtuales.",
    "categoryId": "azure-management"
  },
  {
    "id": 270,
    "text": "Necesitas crear una nueva VM de Azure desde una tableta Android. ¿Cuáles son tres posibles soluciones?",
    "options": ["Bash en Azure Cloud Shell", "PowerShell en Azure Cloud Shell", "Portal de PowerApps", "Centro de administración de Seguridad y Cumplimiento", "Portal de Azure"],
    "correctAnswer": "Bash en Azure Cloud Shell",
    "correctAnswers": ["Bash en Azure Cloud Shell", "PowerShell en Azure Cloud Shell", "Portal de Azure"],
    "explaination": "Desde dispositivos móviles es posible administrar Azure usando el portal web o Azure Cloud Shell con Bash o PowerShell.",
    "categoryId": "azure-management"
  },
  {
    "id": 271,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo mejorar la seguridad de un entorno Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Advisor incluye recomendaciones relacionadas con identidad, autenticación y seguridad de Microsoft Entra ID.",
    "categoryId": "azure-management"
  },
  {
    "id": 272,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo reducir el costo de ejecución de VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Advisor analiza el uso de recursos y recomienda reducir tamaño, apagar VMs inactivas o usar reservas.",
    "categoryId": "azure-management"
  },
  {
    "id": 273,
    "text": "¿Azure Advisor proporciona recomendaciones sobre cómo configurar los ajustes de red en las VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure Advisor se enfoca en mejores prácticas generales y no actúa como herramienta específica de configuración de red.",
    "categoryId": "azure-management"
  },
  {
    "id": 274,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con Windows 10. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "explaination": "Windows 10 soporta el portal web, Azure CLI y Azure PowerShell para administrar recursos de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 275,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con Ubuntu. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "explaination": "Ubuntu permite utilizar Azure CLI, PowerShell Core y el portal de Azure desde navegador.",
    "categoryId": "azure-management"
  },
  {
    "id": 276,
    "text": "Varios ingenieros planean administrar Azure usando un equipo con macOS Mojave. ¿Qué herramientas de administración pueden utilizar?",
    "options": ["CLI de Azure y portal de Azure", "Portal de Azure y Azure PowerShell", "CLI de Azure y Azure PowerShell", "CLI de Azure, portal de Azure y Azure PowerShell"],
    "correctAnswer": "CLI de Azure, portal de Azure y Azure PowerShell",
    "explaination": "macOS soporta Azure CLI, PowerShell Core y el acceso al portal web de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 277,
    "text": "¿Desde dónde puede acceder al Administrador de Cumplimiento?",
    "options": ["Centro de administración de Microsoft Entra ID", "Portal de Azure", "Centro de administración de Microsoft 365", "Portal de confianza de servicios de Microsoft"],
    "correctAnswer": "Portal de confianza de servicios de Microsoft",
    "explaination": "El Service Trust Portal proporciona acceso a Compliance Manager y documentación de cumplimiento normativo.",
    "categoryId": "azure-management"
  },
  {
    "id": 278,
    "text": "¿Cuáles tres equipos pueden ejecutar un script PowerShell para crear recursos de Azure?",
    "options": ["macOS con PowerShell Core 6.0", "Windows 10 con módulo Azure PowerShell", "Linux con módulo Azure PowerShell", "Linux con CLI de Azure instalada", "Chrome OS con Azure Cloud Shell"],
    "correctAnswer": "macOS con PowerShell Core 6.0",
    "correctAnswers": ["macOS con PowerShell Core 6.0", "Windows 10 con módulo Azure PowerShell", "Linux con módulo Azure PowerShell"],
    "explaination": "PowerShell Core es multiplataforma y permite ejecutar scripts de Azure en Windows, Linux y macOS.",
    "categoryId": "azure-management"
  },
  {
    "id": 279,
    "text": "¿Azure Firewall cifrará todo el tráfico de red enviado desde Azure a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure Firewall filtra y controla tráfico, pero no cifra automáticamente todas las comunicaciones salientes.",
    "categoryId": "azure-services"
  },
  {
    "id": 280,
    "text": "¿Un Grupo de Seguridad de Red (NSG) cifrará todo el tráfico de red enviado desde Azure a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los NSG solo permiten o bloquean tráfico mediante reglas; no realizan cifrado.",
    "categoryId": "azure-services"
  },
  {
    "id": 281,
    "text": "¿Las VMs de Azure con Windows Server 2016 pueden cifrar el tráfico de red enviado a Internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Las VMs pueden utilizar protocolos seguros como HTTPS, TLS o VPN para cifrar comunicaciones.",
    "categoryId": "azure-services"
  },
 {
    "id": 282,
    "text": "¿Microsoft Defender for Cloud puede supervisar los recursos de Azure y los recursos locales?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft Defender for Cloud puede supervisar tanto recursos en Azure como servidores locales e incluso recursos en otras nubes mediante Azure Arc.",
    "categoryId": "azure-management"
  },
  {
    "id": 283,
    "text": "¿Todas las funciones de Microsoft Defender para la nube son gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Microsoft Defender for Cloud incluye características gratuitas y otras avanzadas de pago, como protección extendida contra amenazas.",
    "categoryId": "azure-management"
  },
  {
    "id": 284,
    "text": "¿Desde Microsoft Defender para la nube puede descargar un informe de cumplimiento normativo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft Defender for Cloud permite generar y descargar informes de cumplimiento normativo basados en estándares y regulaciones.",
    "categoryId": "azure-management"
  },
  {
    "id": 285,
    "text": "¿Qué servicio de Azure debe usarse para monitorear amenazas usando sensores?",
    "options": ["Azure Monitor", "Microsoft Defender para la nube", "Protección de identidad de Microsoft Entra ID", "Microsoft Defender para la identidad"],
    "correctAnswer": "Microsoft Defender para la identidad",
    "explaination": "Microsoft Defender para la identidad utiliza sensores para detectar actividades sospechosas y amenazas relacionadas con identidades.",
    "categoryId": "azure-management"
  },
  {
    "id": 286,
    "text": "¿Qué servicio de Azure debe usarse para aplicar MFA de Azure según una condición?",
    "options": ["Azure Monitor", "Microsoft Defender para la nube", "Protección de identidad de Microsoft Entra ID", "Microsoft Defender para la identidad"],
    "correctAnswer": "Protección de identidad de Microsoft Entra ID",
    "explaination": "Microsoft Entra ID Protection permite aplicar MFA dinámicamente mediante acceso condicional basado en riesgos y condiciones.",
    "categoryId": "azure-management"
  },
  {
    "id": 287,
    "text": "¿Cuáles son dos posibles soluciones para que VM1 sea accesible desde Internet a través de HTTP?",
    "options": ["Modificar un perfil de Azure Traffic Manager", "Modificar un NSG", "Modificar un plan de protección contra ataques DDoS", "Modificar un firewall de Azure"],
    "correctAnswer": "Modificar un NSG",
    "correctAnswers": ["Modificar un NSG", "Modificar un firewall de Azure"],
    "explaination": "Para permitir tráfico HTTP hacia una VM, debe permitirse el puerto 80 mediante reglas en el NSG o en Azure Firewall.",
    "categoryId": "azure-services"
  },
  {
    "id": 288,
    "text": "¿Puede habilitar el acceso Just In Time (JIT) a la VM mediante qué servicio?",
    "options": ["Azure Bastion", "Firewall de Azure", "Azure Front Door", "Microsoft Defender para la nube"],
    "correctAnswer": "Microsoft Defender para la nube",
    "explaination": "Microsoft Defender for Cloud ofrece acceso JIT para reducir la exposición de puertos de administración en las VMs.",
    "categoryId": "azure-management"
  },
  {
    "id": 289,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una subred de red virtual?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Un NSG puede asociarse a una subred para controlar el tráfico entrante y saliente de todos los recursos dentro de ella.",
    "categoryId": "azure-services"
  },
  {
    "id": 290,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una red virtual?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los NSG se asocian a subredes o interfaces de red, no directamente a una red virtual.",
    "categoryId": "azure-services"
  },
  {
    "id": 291,
    "text": "¿Puede asociar un Grupo de Seguridad de Red (NSG) a una interfaz de red?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Un NSG puede asociarse directamente a una NIC para controlar el tráfico de una VM específica.",
    "categoryId": "azure-services"
  },
  {
    "id": 292,
    "text": "Después de crear una VM, necesitas modificarla para permitir conexiones al puerto TCP 8080. ¿Qué debes modificar?",
    "options": ["Grupo de Seguridad de Red (NSG)", "Puerta de enlace de red virtual", "Red virtual", "Tabla de ruta"],
    "correctAnswer": "Grupo de Seguridad de Red (NSG)",
    "explaination": "Para permitir conexiones TCP en el puerto 8080, se debe agregar una regla de entrada en el NSG.",
    "categoryId": "azure-services"
  },
  {
    "id": 293,
    "text": "¿Puedes crear roles personalizados de Azure para controlar el acceso a los recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure RBAC permite crear roles personalizados para definir permisos específicos sobre recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 294,
    "text": "¿Una cuenta de usuario puede asignarse a varios roles de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Un usuario puede tener múltiples asignaciones de roles en distintos ámbitos dentro de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 295,
    "text": "¿Un grupo de recursos puede tener asignado el rol de Propietario a varios usuarios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure permite asignar el mismo rol a múltiples usuarios sobre un mismo recurso o grupo de recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 296,
    "text": "Necesitas recopilar y analizar automáticamente los eventos de seguridad de Microsoft Entra ID. ¿Qué deberías usar?",
    "options": ["Azure Sentinel", "Azure Synapse Analytics", "Microsoft Entra Connect", "Azure Key Vault"],
    "correctAnswer": "Azure Sentinel",
    "explaination": "Microsoft Sentinel es una solución SIEM que recopila y analiza eventos de seguridad de múltiples orígenes, incluido Entra ID.",
    "categoryId": "azure-management"
  },
  {
    "id": 297,
    "text": "¿Desde qué servicio puedes ver qué usuario desactivó una VM específica durante los últimos 14 días?",
    "options": ["Control de acceso de Azure IAM", "Centros de eventos de Azure", "Registro de actividad de Azure", "Azure Service Health"],
    "correctAnswer": "Registro de actividad de Azure",
    "explaination": "El Registro de actividad de Azure almacena operaciones administrativas realizadas sobre los recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 298,
    "text": "¿Qué servicio de Azure puede utilizarse como solución de gestión de información y eventos de seguridad (SIEM)?",
    "options": ["Servicios de análisis de Azure", "Azure Sentinel", "Microsoft Purview Information Protection", "Servicios cognitivos de Azure"],
    "correctAnswer": "Azure Sentinel",
    "explaination": "Microsoft Sentinel es el servicio SIEM nativo de Azure para detección y respuesta ante amenazas.",
    "categoryId": "azure-management"
  },
  {
    "id": 299,
    "text": "Su empresa implementa [...] para agregar automáticamente una marca de agua a documentos de Word que contienen información de tarjetas de crédito. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Protección contra ataques DDoS", "Protección de la información de Microsoft Purview", "Protección de identidad de Microsoft Entra ID"],
    "correctAnswer": "Protección de la información de Microsoft Purview",
    "explaination": "Microsoft Purview Information Protection permite clasificar, etiquetar y proteger documentos automáticamente.",
    "categoryId": "azure-management"
  },
  {
    "id": 300,
    "text": "Tienes VNET1 en RG1. Asignas la directiva 'Tipo de recurso no permitido' especificando que las redes virtuales no están permitidas. VNET1 [...].",
    "options": ["Se elimina automáticamente", "Se mueve automáticamente a otro grupo de recursos", "Continúa funcionando con normalidad", "Ahora es un objeto de solo lectura"],
    "correctAnswer": "Continúa funcionando con normalidad",
    "explaination": "Las políticas de Azure no afectan retroactivamente a los recursos existentes, a menos que se configure explícitamente una acción de corrección.",
    "categoryId": "azure-management"
  },
  {
    "id": 301,
    "text": "¿Puedes crear directivas de grupo en Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Las directivas de grupo tradicionales pertenecen a Active Directory local, no a Microsoft Entra ID.",
    "categoryId": "azure-management"
  },
  {
    "id": 302,
    "text": "¿Puedes vincular dispositivos Windows 10 a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Windows 10 y versiones posteriores pueden unirse directamente a Microsoft Entra ID.",
    "categoryId": "azure-management"
  },
  {
    "id": 303,
    "text": "¿Puedes vincular dispositivos Android a Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los dispositivos Android pueden registrarse y administrarse mediante Microsoft Entra ID e Intune.",
    "categoryId": "azure-management"
  },
  {
    "id": 304,
    "text": "El documento [...] explica qué datos procesa Microsoft, cómo los procesa y con qué finalidad.",
    "options": ["Declaración de privacidad de los servicios en línea de Microsoft", "Términos y condiciones de los servicios en línea de Microsoft", "Acuerdo de nivel de servicio en línea de Microsoft", "Acuerdo de suscripción en línea para Microsoft Azure"],
    "correctAnswer": "Declaración de privacidad de los servicios en línea de Microsoft",
    "explaination": "La declaración de privacidad describe cómo Microsoft recopila, utiliza y protege los datos.",
    "categoryId": "azure-management"
  },
  {
    "id": 305,
    "text": "Una definición de iniciativa de Azure Policy es un [...].",
    "options": ["Colección de definiciones de políticas", "Colección de asignaciones de definiciones de directivas de Azure", "Grupo de definiciones de Azure Blueprints", "Grupo de asignaciones de roles RBAC"],
    "correctAnswer": "Colección de definiciones de políticas",
    "explaination": "Una iniciativa agrupa varias definiciones de políticas para aplicarlas conjuntamente.",
    "categoryId": "azure-management"
  },
  {
    "id": 306,
    "text": "[...] proporciona a las organizaciones la capacidad de gestionar el cumplimiento de los recursos de Azure en múltiples suscripciones.",
    "options": ["Grupos de recursos", "Grupos de gestión", "Políticas de Azure", "Planes de Azure App Service"],
    "correctAnswer": "Grupos de gestión",
    "explaination": "Los grupos de administración permiten organizar y gobernar varias suscripciones de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 307,
    "text": "¿El Reglamento General de Protección de Datos (RGPD) define las normas de protección de datos y privacidad?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "El RGPD establece requisitos legales sobre privacidad y protección de datos en la Unión Europea.",
    "categoryId": "azure-management"
  },
  {
    "id": 308,
    "text": "¿El RGPD se aplica a las empresas que ofrecen bienes o servicios a particulares en la UE?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "El RGPD aplica a organizaciones que manejan datos de residentes de la UE, aunque estén fuera de Europa.",
    "categoryId": "azure-management"
  },
  {
    "id": 309,
    "text": "¿Azure puede utilizarse para crear una infraestructura que cumpla con el RGPD?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure proporciona herramientas y certificaciones que ayudan a cumplir requisitos del RGPD.",
    "categoryId": "azure-management"
  },
  {
    "id": 310,
    "text": "¿Puedes agregar una plantilla de Azure Resource Manager a un plano de Azure (Blueprint)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Blueprints puede incluir plantillas ARM para automatizar implementaciones.",
    "categoryId": "azure-management"
  },
  {
    "id": 311,
    "text": "¿Puede asignar un plano de Azure (Blueprint) a un grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los Blueprints se asignan a suscripciones, no directamente a grupos de recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 312,
    "text": "¿Puedes usar Azure Blueprints para otorgar permisos a un recurso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los Blueprints pueden incluir asignaciones RBAC para configurar permisos automáticamente.",
    "categoryId": "azure-management"
  },
  {
    "id": 313,
    "text": "¿Azure China es operado por Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure China es operado por 21Vianet bajo licencia de Microsoft.",
    "categoryId": "azure-management"
  },
  {
    "id": 314,
    "text": "¿Azure Government es operado por Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Government es una nube especializada operada directamente por Microsoft.",
    "categoryId": "azure-management"
  },
  {
    "id": 315,
    "text": "¿Azure Government solo está disponible para las agencias gubernamentales de EE. UU. y sus socios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Government está restringido a entidades gubernamentales estadounidenses y socios autorizados.",
    "categoryId": "azure-management"
  },
  {
    "id": 316,
    "text": "¿Un recurso de Azure puede tener varios bloqueos de eliminación?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure permite aplicar múltiples bloqueos sobre un recurso para protegerlo.",
    "categoryId": "azure-management"
  },
  {
    "id": 317,
    "text": "¿Un recurso de Azure hereda los bloqueos de su grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los bloqueos aplicados al grupo de recursos afectan automáticamente a los recursos contenidos.",
    "categoryId": "azure-management"
  },
  {
    "id": 318,
    "text": "Si un recurso de Azure tiene un bloqueo de solo lectura, ¿puede agregar un bloqueo de eliminación a ese recurso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los bloqueos pueden coexistir en el mismo recurso.",
    "categoryId": "azure-management"
  },
  {
    "id": 319,
    "text": "¿La autorización para acceder a los recursos de Azure solo se puede otorgar a usuarios de Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure admite identidades de múltiples orígenes, incluidos servicios externos y directorios sincronizados.",
    "categoryId": "azure-management"
  },
  {
    "id": 320,
    "text": "¿Las identidades almacenadas en Microsoft Entra ID, servicios en la nube de terceros y Active Directory local pueden usarse para acceder a recursos de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure admite autenticación híbrida y federada con múltiples proveedores de identidad.",
    "categoryId": "azure-management"
  },
  {
    "id": 321,
    "text": "¿Azure cuenta con servicios integrados de autenticación y autorización que proporcionan acceso seguro a los recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft Entra ID y Azure RBAC proporcionan autenticación y autorización integradas.",
    "categoryId": "azure-management"
  },
  {
    "id": 322,
    "text": "¿Las identidades almacenadas en un Active Directory local se pueden sincronizar con Microsoft Entra ID?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft Entra Connect permite sincronizar identidades locales con la nube.",
    "categoryId": "azure-management"
  },
  {
    "id": 323,
    "text": "¿Puede consultar el informe de cumplimiento normativo de su empresa desde qué servicio?",
    "options": ["Asesor de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Microsoft Defender para la nube"],
    "correctAnswer": "Microsoft Defender para la nube",
    "explaination": "Defender for Cloud incluye paneles e informes de cumplimiento normativo.",
    "categoryId": "azure-management"
  },
  {
    "id": 324,
    "text": "Su empresa tiene recursos en varias regiones y necesitas asegurarte de que los admins solo creen recursos en esas regiones. ¿Qué solución usarías?",
    "options": ["Un bloqueo de solo lectura", "Una política de Azure", "Un grupo directivo", "Una reserva"],
    "correctAnswer": "Una política de Azure",
    "explaination": "Azure Policy puede restringir las regiones permitidas para la creación de recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 325,
    "text": "¿Microsoft Entra ID requiere la implementación de controladores de dominio en VMs de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Microsoft Entra ID es un servicio administrado y no requiere controladores de dominio propios.",
    "categoryId": "azure-management"
  },
  {
    "id": 326,
    "text": "¿Microsoft Entra ID proporciona servicios de autenticación para recursos alojados en Azure y Microsoft 365?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft Entra ID proporciona autenticación centralizada para servicios Microsoft y aplicaciones integradas.",
    "categoryId": "azure-management"
  },
  {
    "id": 327,
    "text": "¿A cada cuenta de usuario de Microsoft Entra ID solo se le puede asignar una licencia?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Un usuario puede tener múltiples licencias asignadas simultáneamente.",
    "categoryId": "azure-management"
  },
  {
    "id": 328,
    "text": "Para implementar MFA de Azure, ¿debe sincronizar las identidades locales con la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "MFA puede utilizarse con cuentas nativas de la nube sin sincronización local.",
    "categoryId": "azure-management"
  },
  {
    "id": 329,
    "text": "¿Son la identificación con fotografía y el número de pasaporte métodos válidos para MFA de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure MFA utiliza métodos como aplicaciones móviles, SMS, llamadas o llaves de seguridad.",
    "categoryId": "azure-management"
  },
  {
    "id": 330,
    "text": "¿Puede configurar los registros de actividad de Microsoft Entra ID para que aparezcan en Azure Monitor?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los registros de Microsoft Entra ID pueden enviarse a Azure Monitor para análisis y alertas.",
    "categoryId": "azure-management"
  },
  {
    "id": 331,
    "text": "Desde Azure Monitor, ¿puede supervisar los recursos en varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Monitor puede recopilar datos de múltiples suscripciones y recursos.",
    "categoryId": "azure-management"
  },
  {
    "id": 332,
    "text": "Desde Azure Monitor, ¿puede crear alertas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure Monitor permite configurar alertas basadas en métricas, registros y eventos.",
    "categoryId": "azure-management"
  },
  {
    "id": 333,
    "text": "Creas RG1 en Azure Resource Manager. Necesitas evitar la eliminación accidental de los recursos. ¿Qué configuración debes usar?",
    "options": ["Inicio rápido", "Costos de los recursos", "Despliegues", "Políticas", "Propiedades", "Bloqueos", "Script de automatización"],
    "correctAnswer": "Bloqueos",
    "explaination": "Los bloqueos de recursos evitan eliminaciones o modificaciones accidentales.",
    "categoryId": "azure-management"
  },
  {
    "id": 334,
    "text": "Necesitas impedir la creación de VMs únicamente en RG1, garantizando que se puedan crear otros objetos. ¿Qué deberías usar?",
    "options": ["Un candado", "Un rol de Azure", "Una etiqueta", "Una política de Azure"],
    "correctAnswer": "Una política de Azure",
    "explaination": "Azure Policy puede bloquear tipos específicos de recursos dentro de un ámbito.",
    "categoryId": "azure-management"
  },
  {
    "id": 335,
    "text": "Tienes una suscripción y 100 dispositivos Windows 10. Solo usuarios con últimos parches de seguridad pueden acceder a las apps integradas con Microsoft Entra ID. ¿Qué implementas?",
    "options": ["Una política de acceso condicional", "Azure Bastion", "Firewall de Azure", "Política de Azure"],
    "correctAnswer": "Una política de acceso condicional",
    "explaination": "El acceso condicional permite exigir dispositivos compatibles y actualizados antes de conceder acceso.",
    "categoryId": "azure-management"
  },
  {
    "id": 336,
    "text": "[...] permite a los usuarios autenticarse en múltiples aplicaciones mediante el inicio de sesión único (SSO).",
    "options": ["Grupos de seguridad de aplicaciones en Azure", "ID de Microsoft Entra", "Azure Key Vault", "Microsoft Defender para la nube"],
    "correctAnswer": "ID de Microsoft Entra",
    "explaination": "Microsoft Entra ID ofrece capacidades de inicio de sesión único (SSO).",
    "categoryId": "azure-management"
  },
  {
    "id": 337,
    "text": "Implementas un recurso de Azure. El recurso deja de estar disponible durante un período prolongado. Microsoft [...].",
    "options": ["Reembolso a tu cuenta bancaria", "Migrar el recurso a otra suscripción", "Abona el importe a tu cuenta de Azure", "Te envía un código de cupón de créditos de Azure"],
    "correctAnswer": "Abona el importe a tu cuenta de Azure",
    "explaination": "Si no se cumple el SLA, Microsoft proporciona créditos de servicio en la cuenta de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 338,
    "text": "¿Qué tareas puede realizar utilizando Azure Advisor?",
    "options": ["Integrar Active Directory y Microsoft Entra ID", "Calcular los costos de una solución Azure", "Confirmar que la seguridad de la suscripción cumple las mejores prácticas", "Evaluar qué recursos locales se pueden migrar a Azure"],
    "correctAnswer": "Confirmar que la seguridad de la suscripción cumple las mejores prácticas",
    "explaination": "Azure Advisor entrega recomendaciones de seguridad, rendimiento, costos y alta disponibilidad.",
    "categoryId": "azure-management"
  },
  {
    "id": 339,
    "text": "Si su empresa utiliza una cuenta gratuita de Azure, ¿solo podrá usar un subconjunto de los servicios de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Las cuentas gratuitas pueden acceder a la mayoría de los servicios de Azure, aunque algunos tengan límites.",
    "categoryId": "azure-management"
  },
  {
    "id": 340,
    "text": "¿Todas las cuentas gratuitas de Azure caducan tras un período determinado?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Las ofertas gratuitas de Azure tienen límites de tiempo y créditos promocionales temporales.",
    "categoryId": "azure-management"
  },
  {
    "id": 341,
    "text": "¿Puedes crear hasta 10 cuentas gratuitas de Azure utilizando la misma cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Microsoft limita la cantidad de cuentas gratuitas asociadas a una misma cuenta Microsoft para evitar abusos de los créditos gratuitos.",
    "categoryId": "azure-management"
  },
  {
    "id": 342,
    "text": "¿Se debe acceder a todos los servicios de Azure en vista previa privada mediante un portal de Azure independiente?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los servicios en vista previa privada normalmente se administran desde el portal estándar de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 343,
    "text": "¿Los servicios de Azure en versión preliminar pública se pueden utilizar en entornos de producción?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Aunque no es recomendable para cargas críticas, técnicamente los servicios en vista previa pública pueden usarse en producción.",
    "categoryId": "azure-management"
  },
  {
    "id": 344,
    "text": "¿Los servicios de Azure en versión preliminar pública están sujetos a un SLA?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los servicios en preview pública generalmente no incluyen SLA oficiales.",
    "categoryId": "azure-management"
  },
  {
    "id": 345,
    "text": "¿Una cuenta gratuita de Azure incluye un plan de soporte estándar?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Las cuentas gratuitas incluyen soporte básico, no soporte estándar.",
    "categoryId": "azure-management"
  },
  {
    "id": 346,
    "text": "Relacione los servicios de Azure con las descripciones de redes correctas (ExpressRoute: privada, VPN Gateway: cifrada pública, VNet Peering: combina dos redes):",
    "options": [
      "ExpressRoute: privada; VPN Gateway: cifrada pública; VNet Peering: combina redes",
      "VPN Gateway: privada; ExpressRoute: combina redes; VNet Peering: cifrada pública",
      "VPN Gateway: privada; VNet Peering: combina redes; ExpressRoute: cifrada pública",
      "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública"
    ],
    "correctAnswer": "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública",
    "explaination": "ExpressRoute utiliza conexiones privadas, VPN Gateway usa Internet cifrada y VNet Peering conecta redes virtuales.",
    "categoryId": "azure-services"
  },
  {
    "id": 347,
    "text": "¿El soporte de los foros de MSDN solo se ofrece a las empresas que tienen una suscripción de pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los foros MSDN están disponibles para cualquier usuario de Microsoft.",
    "categoryId": "azure-management"
  },
  {
    "id": 348,
    "text": "¿Un usuario al que se le haya asignado el rol de Propietario puede transferir la propiedad de una suscripción de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "La transferencia de propiedad requiere permisos específicos del administrador de cuenta.",
    "categoryId": "azure-management"
  },
  {
    "id": 349,
    "text": "¿Puedes convertir la suscripción de Azure de prueba gratuita a pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Las suscripciones gratuitas pueden actualizarse fácilmente a pago por uso.",
    "categoryId": "azure-management"
  },
  {
    "id": 350,
    "text": "Con Azure Reservations, ¿pagas menos por las VMs que con los precios de pago por uso?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Las reservas ofrecen descuentos importantes a cambio de compromisos de 1 o 3 años.",
    "categoryId": "azure-management"
  },
  {
    "id": 351,
    "text": "¿Dos VMs de Azure que utilizan el tamaño B25 tienen los mismos costos mensuales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "El costo depende también de almacenamiento, tráfico, región y tiempo de ejecución.",
    "categoryId": "azure-management"
  },
  {
    "id": 352,
    "text": "Cuando se detiene una VM de Azure, ¿continúa pagando los costos de almacenamiento de esa VM?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Los discos administrados siguen almacenados aunque la VM esté detenida.",
    "categoryId": "azure-management"
  },
  {
    "id": 353,
    "text": "¿Cómo se calcula el porcentaje de tiempo de actividad mensual? [...] ÷ Minutos máximos disponibles × 100",
    "options": [
      "Tiempo de inactividad en minutos",
      "Minutos máximos disponibles",
      "(Máximo de minutos disponibles - tiempo de inactividad en minutos)"
    ],
    "correctAnswer": "(Máximo de minutos disponibles - tiempo de inactividad en minutos)",
    "explaination": "La disponibilidad se calcula restando el tiempo de inactividad al tiempo total disponible.",
    "categoryId": "azure-management"
  },
  {
    "id": 354,
    "text": "¿Al crear grupos de recursos adicionales en una suscripción de Azure, se generan costos adicionales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los grupos de recursos son contenedores lógicos y no generan costo.",
    "categoryId": "azure-management"
  },
  {
    "id": 355,
    "text": "¿Al copiar varios gigabits de datos a Azure desde una red local a través de una VPN, se generan costos adicionales de transferencia?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "La transferencia de entrada hacia Azure generalmente es gratuita.",
    "categoryId": "azure-management"
  },
  {
    "id": 356,
    "text": "¿La mayoría de los servicios de Azure se presentan primero en versión preliminar privada antes de su lanzamiento en versión preliminar pública y posteriormente en GA?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Ese suele ser el ciclo de lanzamiento típico de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 357,
    "text": "¿Los servicios de Azure en versión preliminar pública solo se pueden administrar mediante la CLI de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "La mayoría pueden administrarse desde el portal, CLI y PowerShell.",
    "categoryId": "azure-management"
  },
  {
    "id": 358,
    "text": "Tu cuenta de prueba de Azure caducó. Ahora no puedes [...]. ¿Cuál es correcto?",
    "options": [
      "Crear cuentas de usuario adicionales de Microsoft Entra ID",
      "Iniciar una VM de Azure existente",
      "Acceder a tus datos almacenados en Azure",
      "Acceder al portal de Azure"
    ],
    "correctAnswer": "Iniciar una VM de Azure existente",
    "explaination": "Los recursos activos dejan de funcionar hasta actualizar la suscripción.",
    "categoryId": "azure-management"
  },
  {
    "id": 359,
    "text": "Solución: Recomendar un plan de soporte Professional Direct para contactar con ingenieros por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Professional Direct incluye acceso técnico avanzado por teléfono y correo.",
    "categoryId": "azure-management"
  },
  {
    "id": 360,
    "text": "¿Una cuenta gratuita de Azure tiene un límite de gasto?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure impide cargos adicionales una vez agotado el crédito gratuito.",
    "categoryId": "azure-management",
  },
  {
    "id": 361,
    "text": "¿Una cuenta gratuita de Azure tiene un límite de 2 TB de datos que se pueden cargar en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure impide cargos adicionales una vez agotado el crédito gratuito."
  },
  {
    "id": 362,
    "text": "¿Una cuenta gratuita de Azure puede contener un número ilimitado de aplicaciones web?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure impide cargos adicionales una vez agotado el crédito gratuito."
  },
  {
    "id": 363,
    "text": "¿Un servicio de Azure en versión preliminar privada se lanza para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los servicios en vista previa privada solo están disponibles para un grupo selecto de clientes."
  },
  {
    "id": 364,
    "text": "¿Un servicio de Azure en versión preliminar pública se lanza para todos los clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Los servicios en vista previa publica estan disponibles para todos los clientes."
  },
  {
    "id": 365,
    "text": "¿Un servicio de Azure en disponibilidad general se lanza a un subconjunto de clientes de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los servicios en disponibilidad general estan disponibles para todos los clientes."
  },
  {
    "id": 366,
    "text": "Con un plan basado en el consumo, ¿pagas una tarifa fija por todos los datos enviados hacia o desde VMs alojadas en la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Los planes basados en el consumo se basan en el consumo de datos."
  },
  {
    "id": 367,
    "text": "Con un plan basado en el consumo, ¿reduces los costos totales pagando solo por la capacidad adicional cuando la necesitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Los planes basados en el consumo permiten escalar recursos según demanda, pagando solo por lo que se usa."
  },
  {
    "id": 368,
    "text": "¿La computación sin servidor es un ejemplo de un plan basado en el consumo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Los planes basados en el consumo permiten escalar recursos según demanda, pagando solo por lo que se usa."
  },
  {
    "id": 369,
    "text": "¿El costo de los recursos de Azure puede variar entre regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El costo de los recursos de Azure puede variar entre regiones."
  },
  {
    "id": 370,
    "text": "¿Una reserva de Azure se utiliza para reservar capacidad de servidor en un centro de datos específico?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Las reservas de Azure se utilizan para reservar capacidad de servidor en un centro de datos."
  },
  {
    "id": 371,
    "text": "¿Puedes detener una instancia de Azure SQL Database para reducir costos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure SQL Database no se puede detener, pero puedes escalarla a un nivel de servicio más bajo para reducir costos."
  },
  {
    "id": 372,
    "text": "Tienes una app web con SLA del 99,95% y una base de datos SQL con SLA del 99,99%. El SLA compuesto para la aplicación es [...].",
    "options": ["El producto de ambos SLAs, que equivale al 99,94%", "El SLA más bajo, del 99,95%", "El SLA más alto, del 99,99%", "La diferencia entre los dos SLAs, que es del 0,05%"],
    "correctAnswer": "El producto de ambos SLAs, que equivale al 99,94%",
    "categoryId": "azure-management",
    "explaination": "El SLA compuesto se calcula multiplicando los SLAs individuales: 0,9995 × 0,9999 = 0,9994 (99,94%)."
  },
  {
    "id": 373,
    "text": "¿El SLA garantiza un tiempo de actividad de al menos el 99,9% para los servicios de pago de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El SLA garantiza un tiempo de actividad de al menos el 99,9% para los servicios de pago de Azure."
  },
  {
    "id": 374,
    "text": "¿Las empresas pueden aumentar el tiempo de actividad del SLA agregando recursos de Azure a varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Al distribuir recursos en varias regiones, las empresas pueden mejorar la resiliencia y aumentar el tiempo de actividad general."
  },
  {
    "id": 375,
    "text": "¿Las empresas pueden aumentar el tiempo de actividad del SLA mediante la compra de varias suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Las empresas no pueden aumentar el tiempo de actividad del SLA mediante la compra de varias suscripciones."
  },
  {
    "id": 376,
    "text": "Relacione los servicios IoT de Azure (IoT Hub: bidireccional; IoT Central: SaaS para IoT; Azure Sphere: hardware+software seguridad):",
    "options": ["IoT Hub: bidireccional; IoT Central: SaaS IoT; Sphere: hardware+software seguridad", "Sphere: bidireccional; IoT Hub: SaaS IoT; IoT Central: hardware+software seguridad", "Sphere: bidireccional; IoT Central: SaaS IoT; IoT Hub: hardware+software seguridad", "IoT Hub: bidireccional; Sphere: SaaS IoT; IoT Central: hardware+software seguridad"],
    "correctAnswer": "IoT Hub: bidireccional; IoT Central: SaaS IoT; Sphere: hardware+software seguridad",
    "categoryId": "azure-services",
    "explaination": "IoT Hub: bidireccional; IoT Central: SaaS IoT; Sphere: hardware+software seguridad"
  },
  {
    "id": 377,
    "text": "Para solicitar a Microsoft un aumento del límite de cuota de suscripción, ¿qué panel del portal de Azure debes usar?",
    "options": ["Crear un recurso", "Todos los servicios", "Favoritos", "Dashboard", "Todos los recursos", "Grupos de recursos", "Servicios de la aplicación", "Aplicaciones funcionales", "Bases de datos SQL", "Azure Cosmos DB", "Máquinas virtuales", "Balanceadores de carga", "Ayuda + soporte"],
    "correctAnswer": "Ayuda + soporte",
    "categoryId": "azure-management",
    "explaination": "Para solicitar a Microsoft un aumento del límite de cuota de suscripción, debes usar el panel de Ayuda + soporte."
  },
  {
    "id": 378,
    "text": "Puedes usar Azure para enviar alertas por correo cuando el costo del período de facturación actual supere un límite. ¿Qué característica usar?",
    "options": ["Recomendaciones del asesor", "Control de acceso (IAM)", "Alertas presupuestarias", "Cumplimiento"],
    "correctAnswer": "Alertas presupuestarias",
    "categoryId": "azure-management",
    "explaination": "Las alertas presupuestarias de Azure permiten configurar notificaciones por correo cuando se superan ciertos límites de gasto."
  },
  {
    "id": 379,
    "text": "¿Desde el portal de Azure puede distinguir entre los servicios que están disponibles de forma general y los que están en vista previa pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El portal de Azure muestra claramente el estado de disponibilidad de los servicios, incluyendo los que están en vista previa pública."
  },
  {
    "id": 380,
    "text": "¿Una vez que un servicio de Azure está disponible de forma general, deja de actualizarse con nuevas funciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los servicios de Azure continúan recibiendo actualizaciones y nuevas funciones incluso después de su lanzamiento en disponibilidad general."
  },
  {
    "id": 381,
    "text": "¿Cuando crea recursos de Azure para un servicio en versión preliminar pública, debe volver a crearlos una vez que el servicio esté disponible de forma general?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los recursos creados durante la vista previa pública generalmente se migran sin problemas a la disponibilidad general sin necesidad de recrearlos."
  },
  {
    "id": 382,
    "text": "Al utilizar una conexión Azure ExpressRoute, ¿el tráfico de datos entrante desde una red local a Azure siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El tráfico de datos entrante desde una red local a Azure siempre es gratuito."
  },
  {
    "id": 383,
    "text": "¿El tráfico de datos saliente desde Azure a una red local siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure normalmente cobra por el tráfico de salida (egress) desde Azure hacia redes locales o internet."
  },
  {
    "id": 384,
    "text": "¿El tráfico de datos entre servicios de Azure dentro de la misma región de Azure siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "La transferencia de datos entre servicios de Azure dentro de la misma región generalmente no tiene costo."
  },
  {
    "id": 385,
    "text": "Su empresa tiene recursos sin usar. ¿Qué recursos sin usar debería eliminar para reducir costos?",
    "options": ["Las interfaces de red", "Las direcciones IP públicas", "Los grupos de Entra ID", "Las cuentas de usuario de Entra ID"],
    "correctAnswer": "Las direcciones IP públicas",
    "correctAnswers": ["Las interfaces de red", "Las direcciones IP públicas"],
    "explaination": "Las direcciones IP públicas y las interfaces de red pueden generar costos aunque no estén en uso."
  },
  {
    "id": 386,
    "text": "Si una VM de Azure tiene el estado Detenida (desasignada), ¿por qué seguirá pagando?",
    "options": ["Capacidad de cómputo", "Operaciones de E/S", "Redes", "Almacenamiento"],
    "correctAnswer": "Almacenamiento",
    "explaination": "Aunque la VM esté desasignada, los discos asociados continúan almacenados y generan costos."
  },
  {
    "id": 387,
    "text": "¿Almacenar 1 TB de datos en Azure Blob Storage siempre tendrá el mismo costo, independientemente de la región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los precios de Azure Storage varían según la región seleccionada."
  },
  {
    "id": 388,
    "text": "¿Al usar una cuenta de Azure Storage v2 de uso general, solo se cobra por los datos almacenados y las operaciones de lectura/escritura son gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Azure Storage cobra tanto por almacenamiento como por operaciones y transferencia de datos."
  },
  {
    "id": 389,
    "text": "¿La transferencia de datos entre cuentas de Azure Storage en diferentes regiones de Azure es gratuita?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "La transferencia de datos entre regiones normalmente tiene costos asociados."
  },
  {
    "id": 390,
    "text": "¿En Microsoft Entra ID Premium P2, se garantiza una disponibilidad de al menos el 99,9%?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Microsoft garantiza un SLA de al menos 99,9% para Entra ID Premium P2."
  },
  {
    "id": 391,
    "text": "¿El SLA para Microsoft Entra ID Premium P2 es el mismo que el SLA para Microsoft Entra ID Free?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "El SLA de disponibilidad es el mismo para ambas ediciones."
  },
  {
    "id": 392,
    "text": "¿Todos los clientes de Azure que pagan reciben un crédito si su tiempo de actividad mensual es inferior a la cantidad garantizada en el SLA?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "Azure ofrece créditos de servicio cuando no se cumplen los SLA establecidos."
  },
  {
    "id": 393,
    "text": "¿Agregar grupos de recursos a una suscripción de Azure genera costos adicionales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Los grupos de recursos son contenedores lógicos y no generan costos."
  },
  {
    "id": 394,
    "text": "¿Copiar 10 GB de datos a Azure desde una red local a través de una VPN genera costos adicionales de transferencia en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "La transferencia de datos entrante hacia Azure generalmente es gratuita."
  },
  {
    "id": 395,
    "text": "¿Copiar 10 GB de datos de Azure a una red local a través de una VPN genera costos adicionales de transferencia de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "explaination": "La transferencia de datos saliente desde Azure normalmente tiene costo."
  },
  {
    "id": 396,
    "text": "¿Cada suscripción de Azure puede contener varios administradores de cuenta?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Cada suscripción tiene un único administrador de cuenta, aunque puede tener varios administradores y roles RBAC."
  },
  {
    "id": 397,
    "text": "¿Cada suscripción a Azure solo puede administrarse mediante una cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Las suscripciones pueden administrarse usando cuentas de Microsoft o identidades organizacionales de Entra ID."
  },
  {
    "id": 398,
    "text": "¿Un grupo de recursos de Azure contiene varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "explaination": "Un grupo de recursos pertenece únicamente a una suscripción."
  },
  {
    "id": 399,
    "text": "Los datos en el nivel de acceso de archivo de una cuenta de Azure Storage [...].",
    "options": ["Se puede acceder en cualquier momento mediante azcopy.exe", "Solo se puede leer mediante Azure Backup", "Deben restaurarse antes de poder acceder a los datos", "Deben rehidratarse antes de poder acceder a los datos"],
    "correctAnswer": "Deben rehidratarse antes de poder acceder a los datos",
    "explaination": "Los blobs archivados deben rehidratarse antes de poder leerse."
  },
  {
    "id": 400,
    "text": "Azure Cosmos DB es un ejemplo de una oferta [...].",
    "options": ["Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)", "Sin servidor", "Software como servicio (SaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "explaination": "Azure Cosmos DB es un servicio administrado de base de datos PaaS."
  },
  {
    "id": 401,
    "text": "¿Se puede acceder al portal de Microsoft Service Trust mediante una cuenta de servicios en la nube de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El portal de Microsoft Service Trust es accesible para los clientes de servicios en la nube de Microsoft con una cuenta válida."
  },
  {
    "id": 402,
    "text": "¿Compliance Manager puede utilizarse para rastrear las actividades de cumplimiento normativo relacionadas con los servicios en la nube de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Compliance Manager proporciona herramientas para rastrear y gestionar el cumplimiento normativo de los servicios en la nube de Microsoft."
  },
  {
    "id": 403,
    "text": "¿La función Mi biblioteca permite guardar documentos del Portal de confianza de servicios de Microsoft en una ubicación?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "La función Mi biblioteca permite guardar documentos del Portal de confianza de servicios de Microsoft en una ubicación."
  },
  {
    "id": 404,
    "text": "Solución: Crear un Servicio de Aplicaciones de Azure y una cuenta de Azure Storage. ¿Cumple el plan de solo PaaS?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "La solución no cumple el plan de solo PaaS."
  },
  {
    "id": 405,
    "text": "¿Para implementar un modelo de nube híbrida, una empresa siempre debe migrar desde un modelo de nube privada?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Una empresa puede implementar un modelo de nube híbrida sin migrar desde un modelo de nube privada, integrando recursos locales con servicios en la nube."
  },
  {
    "id": 406,
    "text": "¿Una empresa puede ampliar los recursos informáticos de su red interna utilizando la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Una empresa puede ampliar los recursos informáticos de su red interna utilizando la nube pública."
  },
  {
    "id": 407,
    "text": "¿Azure DevOps Services permite a los desarrolladores implementar o actualizar aplicaciones en Azure mediante canalizaciones CI/CD?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Azure DevOps Services permite a los desarrolladores implementar o actualizar aplicaciones en Azure mediante canalizaciones CI/CD."
  },
  {
    "id": 408,
    "text": "¿Azure DevOps Services incluye un repositorio Git para que los desarrolladores almacenen el código?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Azure DevOps Services incluye un repositorio Git para que los desarrolladores almacenen el código."
  },
  {
    "id": 409,
    "text": "¿Azure DevOps Services se puede utilizar para crear y alojar aplicaciones web?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Azure DevOps Services no se puede utilizar para crear y alojar aplicaciones web."
  },
  {
    "id": 410,
    "text": "Para garantizar que VM1 no pueda conectarse a las demás VMs en un entorno de 20 VMs, VM1 debe [...].",
    "options": ["Implementarse en una red virtual separada", "Ejecutar un sistema operativo diferente", "Implementarse en un grupo de recursos independiente", "Tener dos interfaces de red"],
    "correctAnswer": "Implementarse en una red virtual separada",
    "categoryId": "azure-services",
    "explaination": "Para garantizar que VM1 no pueda conectarse a las demás VMs en un entorno de 20 VMs, VM1 debe implementarse en una red virtual separada."
  },
  {
    "id": 411,
    "text": "Planeas extender la red a Azure. La red contiene un dispositivo VPN con IP 131.107.200.1. ¿Qué recurso de Azure deberías crear para identificarlo?",
    "options": ["Redes virtuales", "Balanceadores de carga", "Puertas de enlace de redes virtuales", "Zonas DNS", "Perfiles del gestor de tráfico", "Redes virtuales (clásicas)", "Puertas de enlace de aplicaciones", "Puertas de enlace de red local", "Perfiles CDN", "Circuitos ExpressRoute", "Grupos de seguridad de red"],
    "correctAnswer": "Puertas de enlace de red local",
    "categoryId": "azure-services",
    "explaination": "Para extender la red a Azure, debes crear una puerta de enlace de red local para identificar el dispositivo VPN con la IP 131.107.200.1."
  },
  {
    "id": 412,
    "text": "[...] es el proceso de verificar las credenciales de un usuario.",
    "options": ["Autorización", "Autenticación", "Federación", "Ticketing"],
    "correctAnswer": "Autenticación",
    "categoryId": "azure-management",
    "explaination": "La autenticación es el proceso de verificar las credenciales de un usuario."
  },
  {
    "id": 413,
    "text": "Si RG1 tiene un bloqueo de eliminación, ¿quién puede eliminar RG1?",
    "options": ["Únicamente un miembro del grupo de administradores globales", "El bloqueo de eliminación debe eliminarse antes de que un administrador pueda hacerlo", "Una directiva de Azure debe modificarse antes de que un administrador pueda hacerlo", "Se debe agregar una etiqueta de Azure antes"],
    "correctAnswer": "El bloqueo de eliminación debe eliminarse antes de que un administrador pueda hacerlo",
    "categoryId": "azure-management",
    "explaination": "Si RG1 tiene un bloqueo de eliminación, solo un miembro del grupo de administradores globales puede eliminar RG1 después de eliminar el bloqueo."
  },
  {
    "id": 414,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure proporciona control total sobre los sistemas operativos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Una solución PaaS que aloja aplicaciones web en Azure no proporciona control total sobre los sistemas operativos."
  },
  {
    "id": 415,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure puede recibir memoria adicional cambiando el nivel de precios?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Una solución PaaS que aloja aplicaciones web en Azure puede recibir memoria adicional cambiando el nivel de precios."
  },
  {
    "id": 416,
    "text": "¿Una solución PaaS que aloja aplicaciones web en Azure se puede configurar para escalar automáticamente según la demanda?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Una solución PaaS que aloja aplicaciones web en Azure se puede configurar para escalar automáticamente según la demanda."
  },
  {
    "id": 417,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas PowerShell en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas PowerShell en Azure Cloud Shell. ¿Cumple el objetivo?"
  },
  {
    "id": 418,
    "text": "Desde Azure Service Health, ¿puede un administrador ver el estado de todos los servicios implementados y de todos los demás servicios disponibles en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Desde Azure Service Health, un administrador puede ver el estado de todos los servicios implementados y de todos los demás servicios disponibles en Azure."
  },
  {
    "id": 419,
    "text": "Relacione servicios de seguridad: Analizar archivos de registro de VMs, mostrar puntuación de seguridad de suscripción, almacenar contraseñas para Azure Functions.",
    "options": ["Security Center: logs; Lighthouse: puntuación; Key Vault: contraseñas", "Sentinel: logs; Lighthouse: puntuación; Key Vault: contraseñas", "Sentinel: logs; Security Center: puntuación; Key Vault: contraseñas", "Sentinel: logs; Security Center: puntuación; Entra ID: contraseñas"],
    "correctAnswer": "Sentinel: logs; Security Center: puntuación; Key Vault: contraseñas",
    "categoryId": "azure-management",
    "explaination": "Sentinel se utiliza para analizar archivos de registro de VMs, Security Center muestra la puntuación de seguridad de la suscripción y Key Vault se utiliza para almacenar contraseñas para Azure Functions."
  },
  {
    "id": 420,
    "text": "[...] proporciona una plataforma común para implementar objetos en una infraestructura en la nube y garantizar la coherencia. ¿Cuál es la respuesta correcta?",
    "options": ["Las directivas de Azure proporcionan", "Los grupos de recursos proporcionan", "Azure Resource Manager proporciona", "Los grupos de gestión proporcionan"],
    "correctAnswer": "Azure Resource Manager proporciona",
    "categoryId": "azure-management",
    "explaination": "Azure Resource Manager proporciona una plataforma común para implementar objetos en una infraestructura en la nube y garantizar la coherencia."
  },
  {
    "id": 421,
    "text": "¿Todos los recursos de Azure implementados en un único grupo de recursos deben compartir la misma región de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "No, los recursos de Azure implementados en un único grupo de recursos no deben compartir la misma región de Azure."
  },
  {
    "id": 422,
    "text": "Si se establecen permisos para un grupo de recursos, ¿todos los recursos de Azure que pertenezcan a ese grupo heredarán dichos permisos?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Los permisos asignados mediante RBAC en un grupo de recursos se heredan automáticamente por los recursos contenidos en él."
  },
  {
    "id": 423,
    "text": "Si creas dos VMs de Azure que utilicen el tamaño B2S, ¿cada VM generará siempre los mismos costos mensuales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "El costo puede variar según el uso, almacenamiento, tráfico de red y otros recursos asociados."
  },
  {
    "id": 424,
    "text": "Cuando se detiene una VM de Azure, ¿continúa pagando los costos de almacenamiento?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Aunque la VM esté detenida, los discos administrados y otros recursos de almacenamiento continúan generando costos."
  },
  {
    "id": 425,
    "text": "¿Cuál es el propósito principal de las asignaciones de Azure Policy?",
    "options": ["Para crear nuevas definiciones de políticas", "Para hacer cumplir los estándares de cumplimiento", "Para administrar grupos de recursos", "Para configurar la seguridad de la red", "Para automatizar la implementación de recursos"],
    "correctAnswer": "Para hacer cumplir los estándares de cumplimiento",
    "categoryId": "azure-management",
    "explaination": "Las asignaciones de Azure Policy aplican reglas y estándares de cumplimiento a recursos y suscripciones."
  },
  {
    "id": 426,
    "text": "Su empresa tiene Software Assurance con licencias de SQL Server. ¿Qué medidas tomaría para minimizar los costos de licenciamiento en VMs de Azure?",
    "options": ["Utilizar las reservas de Azure", "Utilizar la ventaja híbrida de Azure", "Detener las VMs fuera del horario laboral", "Configurar los presupuestos de Azure Cost Management"],
    "correctAnswer": "Utilizar la ventaja híbrida de Azure",
    "categoryId": "azure-management",
    "explaination": "Azure Hybrid Benefit permite reutilizar licencias existentes de Windows Server o SQL Server para reducir costos."
  },
  {
    "id": 427,
    "text": "Si su empresa utiliza una cuenta gratuita de Azure, ¿solo podrá implementar VMs de Azure y cuentas de almacenamiento de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La cuenta gratuita de Azure permite acceder a múltiples servicios gratuitos además de VMs y Storage."
  },
  {
    "id": 428,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas el portal de Azure. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El portal de Azure es accesible desde navegadores móviles y permite administrar recursos."
  },
  {
    "id": 429,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas Bash en Azure Cloud Shell. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure Cloud Shell permite administrar recursos Azure desde un navegador usando Bash."
  },
  {
    "id": 430,
    "text": "¿Qué servicio de Azure debería utilizarse para correlacionar eventos de múltiples recursos en un repositorio centralizado?",
    "options": ["Centros de eventos de Azure", "Servicios de análisis de Azure", "Azure Monitor", "Azure Log Analytics"],
    "correctAnswer": "Azure Log Analytics",
    "categoryId": "azure-management",
    "explaination": "Azure Log Analytics centraliza y analiza registros de múltiples recursos y servicios."
  },
  {
    "id": 431,
    "text": "Al planificar la migración de un sitio web público a Azure, debe tener en cuenta que deberá [...].",
    "options": ["Implementar una VPN", "Pagar costos de uso mensuales", "Pagar para transferir todos los datos del sitio web a Azure", "Reducir el número de conexiones al sitio web"],
    "correctAnswer": "Pagar costos de uso mensuales",
    "categoryId": "azure-management",
    "explaination": "Azure utiliza un modelo de pago por uso basado en consumo mensual."
  },
  {
    "id": 432,
    "text": "Cuando implementas SaaS, eres responsable de [configurar la alta disponibilidad]. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Definir reglas de escalabilidad", "Instalar la solución SaaS", "Configurar la solución SaaS"],
    "correctAnswer": "Configurar la solución SaaS",
    "categoryId": "cloud-concepts",
    "explaination": "En SaaS, el proveedor administra la infraestructura y disponibilidad; el cliente configura la aplicación."
  },
  {
    "id": 433,
    "text": "¿Azure ofrece flexibilidad entre los gastos de capital (CapEx) y los gastos operativos (OpEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Azure permite reducir inversiones iniciales y adoptar modelos de gasto operativo flexibles."
  },
  {
    "id": 434,
    "text": "¿Qué herramientas debería usar para crear, probar e implementar soluciones de análisis predictivo de IA en Azure?",
    "options": ["Aplicaciones lógicas de Azure", "Azure Machine Learning Designer", "Procesamiento por lotes de Azure", "Azure Cosmos DB"],
    "correctAnswer": "Azure Machine Learning Designer",
    "categoryId": "azure-services",
    "explaination": "Azure Machine Learning Designer está diseñado para crear y entrenar modelos predictivos de IA."
  },
  {
    "id": 435,
    "text": "Solución: Recomendar un plan de soporte Estándar para contactar con ingenieros de soporte por teléfono o correo. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El plan Standard de Azure incluye acceso a soporte técnico por teléfono y correo electrónico."
  },
  {
    "id": 436,
    "text": "¿A qué URL debes conectarte para administrar todos los recursos de Azure? https://[1].[2].com. ¿Cuál es [1]?",
    "options": ["administración", "portal", "www"],
    "correctAnswer": "portal",
    "categoryId": "azure-management",
    "explaination": "La URL correcta del portal es https://portal.azure.com."
  },
  {
    "id": 437,
    "text": "¿A qué URL debes conectarte para administrar todos los recursos de Azure? https://[1].[2].com. ¿Cuál es [2]?",
    "options": ["azur", "azure", "Microsoft"],
    "correctAnswer": "azure",
    "categoryId": "azure-management",
    "explaination": "El dominio oficial del portal es azure.com."
  },
  {
    "id": 438,
    "text": "Necesitas crear una VM de Azure desde un portátil Android. Solución: Utilizas el portal de PowerApps. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "PowerApps no se utiliza para administrar ni crear máquinas virtuales en Azure."
  },
  {
    "id": 439,
    "text": "Para implementar MFA de Azure, ¿debe implementar una solución de federación o sincronizar las identidades locales con la nube?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure MFA puede implementarse directamente en la nube sin requerir federación ni sincronización híbrida."
  },
  {
    "id": 440,
    "text": "¿La MFA de Azure puede ser necesaria tanto para cuentas de usuario administrativas como para cuentas no administrativas?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "MFA puede aplicarse a cualquier tipo de cuenta mediante políticas de seguridad."
  },
  {
    "id": 441,
    "text": "Necesitas ver una lista de eventos de mantenimiento planificados que pueden afectar la disponibilidad de una suscripción. ¿Qué panel del portal de Azure debes usar?",
    "options": ["Dashboard", "Todos los recursos", "Grupos de recursos", "Servicios de la aplicación", "ID de Microsoft Entra", "Azure Monitor", "Asesor", "Centro de seguridad", "Ayuda + soporte"],
    "correctAnswer": "Ayuda + soporte",
    "categoryId": "azure-management",
    "explaination": "El panel Ayuda + soporte permite ver eventos de mantenimiento y problemas relacionados con la suscripción."
  },
  {
    "id": 442,
    "text": "¿Una empresa puede ampliar la capacidad de su red interna utilizando la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "La nube pública permite ampliar capacidad y recursos bajo demanda sin comprar infraestructura física adicional."
  },
  {
    "id": 443,
    "text": "Solución: Implementas las VMs en dos o más grupos de recursos para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Los grupos de recursos son contenedores lógicos y no protegen contra fallas de centros de datos."
  },
  {
    "id": 444,
    "text": "[...] proporciona una plataforma común para desplegar objetos en una infraestructura en la nube. ¿Cuál es la respuesta correcta?",
    "options": ["Las políticas de Azure proporcionan", "Los grupos de recursos proporcionan", "Las plantillas de Azure Resource Manager proporcionan", "Los grupos de gestión proporcionan"],
    "correctAnswer": "Las plantillas de Azure Resource Manager proporcionan",
    "categoryId": "azure-management",
    "explaination": "Las plantillas ARM permiten implementar y administrar recursos de forma consistente y automatizada."
  },
  {
    "id": 445,
    "text": "¿Qué solución de implementación en la nube se utiliza para las VMs de Azure y las bases de datos SQL de Azure?",
    "options": ["Infraestructura como servicio (IaaS)", "Plataforma como servicio (PaaS)", "Software como servicio (SaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "cloud-concepts",
    "explaination": "Azure SQL Database es PaaS, aunque las VMs normalmente son IaaS; la pregunta asocia ambas con servicios administrados en Azure."
  },
  {
    "id": 446,
    "text": "Al planificar la migración de un sitio web público a Azure, ¿qué debe planificar?",
    "options": ["Implementar una VPN", "Pagar los costos de uso mensuales", "Pagar para transferir todos los datos del sitio web a Azure", "Reducir el número de conexiones al sitio web"],
    "correctAnswer": "Pagar los costos de uso mensuales",
    "categoryId": "azure-management",
    "explaination": "Azure funciona bajo un modelo de pago por uso basado en el consumo de recursos."
  },
  {
    "id": 447,
    "text": "¿El modelo de precios de pago por uso de Azure es un ejemplo de gasto de capital (CapEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo de pago por uso corresponde a gastos operativos (OpEx), no a inversión de capital."
  },
  {
    "id": 448,
    "text": "¿Las instancias de VMs reservadas de Azure son un ejemplo de gastos operativos (OpEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Las instancias reservadas implican un compromiso anticipado similar a una inversión de capital."
  },
  {
    "id": 449,
    "text": "¿Implementar tu propio centro de datos es un ejemplo de gasto de capital (CapEx)?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Construir y mantener un centro de datos requiere inversión inicial en infraestructura física."
  },
  {
    "id": 450,
    "text": "¿Una empresa puede ampliar una nube privada añadiendo sus servidores físicos a la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Una nube híbrida permite extender recursos privados utilizando infraestructura pública."
  },
  {
    "id": 451,
    "text": "¿Para construir una nube híbrida, debe implementar recursos en la nube pública?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "cloud-concepts",
    "explaination": "Una nube híbrida combina recursos locales o privados con servicios de nube pública."
  },
  {
    "id": 452,
    "text": "¿Una nube privada debe estar desconectada de internet?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "cloud-concepts",
    "explaination": "Una nube privada puede estar conectada a internet de forma segura según las necesidades de la organización."
  },
  {
    "id": 453,
    "text": "Solución: Implementas las VMs en un conjunto de escalado para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Un conjunto de escalado no garantiza protección ante la caída de un centro de datos completo."
  },
  {
    "id": 454,
    "text": "Solución: Implementas las VMs en dos o más zonas de disponibilidad para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Las zonas de disponibilidad distribuyen recursos entre centros de datos independientes."
  },
  {
    "id": 455,
    "text": "Cuando implementas SaaS, eres responsable de [...].",
    "options": ["Configuración de alta disponibilidad", "Definir reglas de escalabilidad", "Instalación de la solución SaaS", "Configurar la solución SaaS"],
    "correctAnswer": "Configurar la solución SaaS",
    "categoryId": "cloud-concepts",
    "explaination": "En SaaS, el proveedor administra la infraestructura y el cliente configura la aplicación según sus necesidades."
  },
  {
    "id": 456,
    "text": "Solución: Implementar las VMs en dos o más regiones para garantizar disponibilidad si falla un centro de datos. ¿Cumple el objetivo?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Implementar recursos en múltiples regiones protege frente a fallas regionales o de centros de datos."
  },
  {
    "id": 457,
    "text": "¿Los recursos de Azure solo pueden acceder a otros recursos del mismo grupo de recursos?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los recursos pueden comunicarse entre distintos grupos de recursos si la configuración lo permite."
  },
  {
    "id": 458,
    "text": "¿Si elimina un grupo de recursos, se eliminarán todos los recursos que contiene?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Eliminar un grupo de recursos elimina automáticamente todos los recursos incluidos en él."
  },
  {
    "id": 459,
    "text": "¿Un grupo de recursos puede contener recursos de varias regiones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Los grupos de recursos son contenedores lógicos y pueden incluir recursos de distintas regiones."
  },
  {
    "id": 460,
    "text": "¿Los datos copiados a una cuenta de Azure Storage se conservan automáticamente en al menos tres copias?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-services",
    "explaination": "Azure Storage replica automáticamente los datos para garantizar durabilidad y disponibilidad."
  },
  {
    "id": 461,
    "text": "Su empresa planea migrar servidores a VMs de Azure. ¿Cuáles dos responsabilidades administrativas se eliminarán después de la migración?",
    "options": ["Sustitución de hardware de servidor averiado", "Realizar copias de seguridad de los datos de la aplicación", "Gestionar la seguridad de los servidores físicos", "Actualizar los sistemas operativos del servidor", "Gestionar los permisos de acceso a documentos compartidos"],
    "correctAnswer": "Sustitución de hardware de servidor averiado",
    "correctAnswers": ["Sustitución de hardware de servidor averiado", "Gestionar la seguridad de los servidores físicos"],
    "categoryId": "cloud-concepts",
    "explaination": "Azure administra el hardware físico y la seguridad del centro de datos, reduciendo responsabilidades locales."
  },
  {
    "id": 462,
    "text": "[La autorización] es el proceso de verificar las credenciales de un usuario. ¿Cuál es la respuesta correcta?",
    "options": ["No es necesario realizar ningún cambio", "Autenticación", "Federación", "Ticketing"],
    "correctAnswer": "Autenticación",
    "categoryId": "azure-management",
    "explaination": "La autenticación verifica la identidad y credenciales de un usuario."
  },
  {
    "id": 463,
    "text": "Planeas migrar varios servidores de una red local a Azure. ¿Qué beneficio principal del servicio de nube pública deberías identificar?",
    "options": ["La nube pública es propiedad del público, NO de una corporación privada", "Todos los recursos de la nube pública son de libre acceso para cualquier persona", "La nube pública es una solución de colaboración colectiva", "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos"],
    "correctAnswer": "La nube pública es una entidad compartida donde múltiples empresas usan parte de los recursos",
    "categoryId": "cloud-concepts",
    "explaination": "La nube pública comparte infraestructura entre múltiples clientes, optimizando costos y escalabilidad."
  },
  {
    id: 464,
    categoryId: "azure-services",
    text: "En el contexto de la solución de alta disponibilidad de Azure, ¿cuál es el propósito principal de las zonas de disponibilidad de Azure?",
    options: [
      "Son sinónimo de una región de Azure",
      "Sirven como una estructura de carpetas en Azure utilizada para organizar recursos como bases de datos, máquinas virtuales y redes virtuales",
      "Permiten seleccionar manualmente centros de datos para la ubicación de máquinas virtuales y lograr una disponibilidad superior",
      "Representan racks específicos dentro de centros de datos individuales diseñados por Azure para mayor tiempo de actividad"
    ],
    correctAnswer:
      "Permiten seleccionar manualmente centros de datos para la ubicación de máquinas virtuales y lograr una disponibilidad superior",
    explaination:
      "Las zonas de disponibilidad son ubicaciones físicas separadas dentro de una región de Azure, cada una con energía, refrigeración y redes independientes. Ayudan a mejorar la alta disponibilidad y la tolerancia a fallos."
  },
  {
    id: 465,
    categoryId: "cloud-concepts",
    text: "Azure tiene la responsabilidad de administrar el hardware en el modelo de Infraestructura como Servicio (IaaS).",
    options: [
      "Verdadero",
      "Falso"
    ],
    correctAnswer: "Verdadero",
    explaination:
      "En el modelo IaaS, Azure administra la infraestructura subyacente como servidores, almacenamiento, redes y virtualización."
  },
  {
    id: 466,
    categoryId: "cloud-concepts",
    text: "¿Cuál es el principal beneficio de optar por un modelo de precios basado en consumo en lugar de un modelo basado en tiempo en servicios en la nube?",
    options: [
      "La capacidad de predecir fácilmente el costo futuro del servicio",
      "Siempre es más barato pagar por consumo que pagar por hora",
      "Es un modelo de precios más simple y fácil de entender",
      "Permite un ahorro significativo cuando los recursos no se utilizan constantemente"
    ],
    correctAnswer:
      "Permite un ahorro significativo cuando los recursos no se utilizan constantemente",
    explaination:
      "El modelo basado en consumo cobra únicamente por los recursos utilizados, lo que ayuda a reducir costos cuando los recursos están inactivos."
  },
  {
    id: 467,
    categoryId: "azure-management",
    text: "Tu organización ha implementado una política de Azure que restringe los tipos de máquinas virtuales que puedes usar. ¿Cómo puedes crear una máquina virtual bloqueada por la política?",
    options: [
      "Usando una cuenta con permisos de colaborador o superiores en el grupo de recursos",
      "Los administradores propietarios de la suscripción pueden crear recursos sin importar la política",
      "La única forma es quitar la política, crear el recurso y volver a agregar la política"
    ],
    correctAnswer:
      "La única forma es quitar la política, crear el recurso y volver a agregar la política",
    explaination:
      "Azure Policy aplica las restricciones estrictamente. Incluso los propietarios no pueden omitirlas directamente."
  },
  {
    id: 468,
    categoryId: "azure-services",
    text: "¿Qué característica de Azure está diseñada específicamente para ayudar a las empresas a llevar código desde un repositorio, ejecutar pruebas automatizadas y desplegarlo en Azure mediante pipelines?",
    options: [
      "Azure Monitor",
      "Azure DevOps",
      "GitHub",
      "Máquinas virtuales"
    ],
    correctAnswer: "Azure DevOps",
    explaination:
      "Azure DevOps proporciona herramientas de integración y despliegue continuo mediante Azure Pipelines."
  },
  {
    id: 469,
    categoryId: "azure-management",
    text: "Puedes crear tus propias políticas si las políticas integradas de Azure no son suficientes para tus necesidades.",
    options: [
      "Verdadero",
      "Falso"
    ],
    correctAnswer: "Verdadero",
    explaination:
      "Azure permite crear políticas personalizadas utilizando JSON para cumplir requisitos específicos de gobernanza y cumplimiento."
  },
  {
    id: 470,
    categoryId: "azure-services",
    text: "En el contexto del SLA de Azure para máquinas virtuales, ¿qué estrategia de implementación ofrece el mayor nivel de disponibilidad?",
    options: [
      "Implementar dos o más máquinas virtuales dentro del mismo centro de datos",
      "Implementar dos o más máquinas virtuales dentro de un conjunto de disponibilidad",
      "Implementar una sola máquina virtual",
      "Implementar dos o más máquinas virtuales en diferentes zonas de disponibilidad dentro de la misma región"
    ],
    correctAnswer:
      "Implementar dos o más máquinas virtuales en diferentes zonas de disponibilidad dentro de la misma región",
    explaination:
      "Las zonas de disponibilidad proporcionan aislamiento físico y ofrecen el SLA más alto para máquinas virtuales."
  },
  {
    id: 471,
    categoryId: "azure-management",
    text: "¿Qué herramienta web de Azure permite estimar el costo futuro de productos y servicios agregándolos a un carrito de compra?",
    options: [
      "Microsoft Docs",
      "Azure Advisor",
      "Azure Pricing Calculator"
    ],
    correctAnswer: "Azure Pricing Calculator",
    explaination:
      "Azure Pricing Calculator permite estimar costos de productos y servicios de Azure según configuraciones específicas."
  },
  {
    id: 472,
    categoryId: "azure-services",
    text: "En Microsoft Azure, ¿cuál es el número máximo de máquinas virtuales que pueden incluirse en un conjunto de escalado de máquinas virtuales según las capacidades estándar de Azure?",
    options: [
      "500",
      "1,000",
      "Ilimitado",
      "10,000"
    ],
    correctAnswer: "1,000",
    explaination:
      "Un Virtual Machine Scale Set puede admitir hasta 1,000 máquinas virtuales en configuraciones estándar."
  },
  {
    id: 473,
    categoryId: "azure-services",
    text: "¿Cuál es el nombre del grupo de servicios dentro de Azure que hospeda herramientas de análisis de big data basadas en Apache Hadoop?",
    options: [
      "Azure Data Factory",
      "Azure Kubernetes Service",
      "Azure Hadoop Services",
      "HDInsight"
    ],
    correctAnswer: "HDInsight",
    explaination:
      "Azure HDInsight es un servicio administrado que proporciona herramientas como Hadoop, Spark, Hive, HBase y Kafka para análisis de big data."
  },
  {
    "id": 474,
    "text": "¿Cuál es la principal herramienta de administración utilizada para gestionar recursos de Azure mediante una interfaz gráfica de usuario?",
    "options": ["Portal de Azure", "Protocolo de escritorio remoto", "PowerShell", "Azure Storage Explorer"],
    "correctAnswer": "Portal de Azure",
    "explaination": "El Portal de Azure es la principal interfaz gráfica para administrar y supervisar recursos de Azure. Permite gestionar máquinas virtuales, almacenamiento, redes y otros servicios desde una interfaz intuitiva basada en web.",
    "categoryId": "azure-management"
  },
  {
    "id": 475,
    "text": "Logic Apps, Functions y Service Fabric son ejemplos de qué modelo de computación dentro de Azure.",
    "options": ["Modelo sin servidor", "Modelo IaaS", "Modelo SaaS", "Modelo App Services"],
    "correctAnswer": "Modelo sin servidor",
    "explaination": "Logic Apps, Azure Functions y Service Fabric forman parte del modelo serverless de Azure. En este modelo, Microsoft administra la infraestructura y el escalado automáticamente, permitiendo que los desarrolladores se concentren en el código y los flujos de trabajo.",
    "categoryId": "azure-services"
  },
  {
    "id": 476,
    "text": "¿Cuál de las siguientes es una característica del nivel de acceso Cool para Azure Storage?",
    "options": [
      "Es la opción más costosa en ancho de banda para acceder a archivos",
      "Es mucho más barato almacenar archivos que en el nivel Hot",
      "Es la opción más barata en ancho de banda para acceder a archivos",
      "Presenta retrasos significativos de varias horas para acceder a los datos"
    ],
    "correctAnswer": "Es mucho más barato almacenar archivos que en el nivel Hot",
    "explaination": "El nivel Cool de Azure Storage está diseñado para datos de acceso poco frecuente. El almacenamiento es más económico que el nivel Hot, aunque los costos de acceso a los datos son ligeramente mayores.",
    "categoryId": "azure-services"
  },
  {
    "id": 477,
    "text": "Al establecer una conexión VPN sitio a sitio con Azure, ¿qué dispositivo debe existir en la infraestructura local de la empresa?",
    "options": [
      "Una red virtual de Azure",
      "Un dispositivo VPN compatible",
      "Una puerta de enlace de aplicaciones",
      "Una máquina virtual dedicada"
    ],
    "correctAnswer": "Un dispositivo VPN compatible",
    "explaination": "Para establecer una conexión VPN sitio a sitio con Azure, la red local debe contar con un dispositivo VPN compatible que soporte protocolos VPN estándar y pueda conectarse con Azure VPN Gateway.",
    "categoryId": "azure-services"
  },
  {
    "id": 478,
    "text": "Azure es una nube pública y no tiene ofertas de nube privada.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Aunque Azure es principalmente una nube pública, Microsoft también ofrece soluciones de nube privada e híbrida mediante servicios como Azure Stack.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 479,
    "text": "¿Qué proveedor de nube ofrece la mayor cantidad de ubicaciones internacionales para aprovisionar máquinas virtuales y otros servicios?",
    "options": ["Microsoft Azure", "Google Cloud Platform", "Amazon AWS"],
    "correctAnswer": "Microsoft Azure",
    "explaination": "Microsoft Azure cuenta con una de las infraestructuras globales más amplias, ofreciendo más regiones y centros de datos internacionales que muchos de sus competidores.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 480,
    "text": "Dentro de los modelos de servicios en la nube, ¿cómo se clasifica Microsoft Outlook 365?",
    "options": [
      "Plataforma como servicio (PaaS)",
      "Software como servicio (SaaS)",
      "Infraestructura como servicio (IaaS)"
    ],
    "correctAnswer": "Software como servicio (SaaS)",
    "explaination": "Outlook 365 es un ejemplo de SaaS porque los usuarios acceden a la aplicación mediante internet sin necesidad de administrar infraestructura ni plataformas subyacentes.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 481,
    "text": "¿Qué herramienta de Azure ayuda a supervisar el cumplimiento de estándares internacionales y regulaciones gubernamentales?",
    "options": [
      "Servicios gubernamentales de Azure",
      "Purview Compliance Manager",
      "Declaración de privacidad de Microsoft",
      "Service Trust Portal"
    ],
    "correctAnswer": "Purview Compliance Manager",
    "explaination": "Microsoft Purview Compliance Manager ayuda a las organizaciones a supervisar y administrar el cumplimiento normativo mediante paneles, evaluaciones y seguimiento de riesgos.",
    "categoryId": "azure-management"
  },
  {
    "id": 482,
    "text": "¿Qué es un ataque DDoS?",
    "options": [
      "Un intento de leer contenido de páginas web desde otro sitio para robar información",
      "Un ataque de denegación de servicio que envía demasiado tráfico a una red",
      "Un intento de ejecutar comandos SQL maliciosos",
      "Un intento de adivinar contraseñas mediante fuerza bruta"
    ],
    "correctAnswer": "Un ataque de denegación de servicio que envía demasiado tráfico a una red",
    "explaination": "Un ataque DDoS busca saturar un sistema o red con tráfico masivo proveniente de múltiples fuentes, haciendo que los usuarios legítimos no puedan acceder al servicio.",
    "categoryId": "azure-security"
  },
  {
    "id": 483,
    "text": "¿Qué característica es esencial para considerar un sistema como altamente disponible en un entorno de nube?",
    "options": [
      "El sistema debe operar en al menos dos máquinas virtuales",
      "Es imposible crear un sistema altamente disponible",
      "El sistema debe diseñarse sin puntos únicos de falla",
      "El sistema debe mantener 100% de disponibilidad"
    ],
    "correctAnswer": "El sistema debe diseñarse sin puntos únicos de falla",
    "explaination": "La alta disponibilidad requiere resiliencia, redundancia y mecanismos de recuperación para evitar que una sola falla provoque la caída completa del sistema.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 484,
    "text": "¿Qué tipo de ataque DDoS no es mitigado por Azure DDoS Protection IP Protection?",
    "options": [
      "Ataques de capa de transporte L4",
      "Ataques de capa de red L3",
      "Ataques de capa de aplicación L7"
    ],
    "correctAnswer": "Ataques de capa de aplicación L7",
    "explaination": "Azure DDoS Protection protege principalmente contra ataques de red y transporte (L3 y L4). Los ataques de capa de aplicación (L7) requieren protección adicional, como un Web Application Firewall (WAF).",
    "categoryId": "azure-security"
  },
  {
    "id": 485,
    "text": "¿Cuál es el servicio preferido de identidad y autenticación de Azure?",
    "options": [
      "Facebook Connect",
      "Azure Active Directory",
      "Live Connect",
      "Grupo de seguridad de red"
    ],
    "correctAnswer": "Azure Active Directory",
    "explaination": "Azure Active Directory, actualmente llamado Microsoft Entra ID, es el servicio principal de identidad y autenticación de Microsoft para administrar acceso, SSO, MFA y protección de identidades.",
    "categoryId": "azure-management"
  },
  {
    "id": 486,
    "text": "No existen garantías SLA cuando un servicio está en disponibilidad general (GA).",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Cuando un servicio alcanza disponibilidad general (GA), Microsoft proporciona SLA que garantizan niveles mínimos de disponibilidad y rendimiento.",
    "categoryId": "azure-management"
  },
  {
    "id": 487,
    "text": "¿Quién es responsable de la seguridad de los servidores físicos en un centro de datos de Azure?",
    "options": [
      "El cliente es responsable de proteger los centros de datos físicos",
      "Azure es responsable de proteger los centros de datos físicos"
    ],
    "correctAnswer": "Azure es responsable de proteger los centros de datos físicos",
    "explaination": "En el modelo de responsabilidad compartida, Microsoft Azure protege la infraestructura física, mientras que los clientes protegen sus datos, aplicaciones y configuraciones.",
    "categoryId": "azure-security"
  },
  {
    "id": 488,
    "text": "¿Qué tipo de contenedor se utiliza para recopilar registros y métricas de distintos recursos de Azure?",
    "options": [
      "Log Analytics Workspace",
      "Append Blob Storage",
      "Cuenta de Azure Monitor",
      "Managed Storage"
    ],
    "correctAnswer": "Log Analytics Workspace",
    "explaination": "Log Analytics Workspace es un contenedor de Azure Monitor que recopila, almacena y analiza registros y métricas provenientes de diferentes recursos de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 489,
    "text": "¿Qué métodos proporciona Azure Resource Manager para implementar recursos?",
    "options": [
      "PowerShell",
      "REST API o SDK",
      "Portal de Azure",
      "CLI"
    ],
    "correctAnswer": "PowerShell",
    "correctAnswers": [
      "PowerShell",
      "REST API o SDK",
      "Portal de Azure",
      "CLI"
    ],
    "explaination": "Azure Resource Manager permite implementar y administrar recursos mediante múltiples herramientas como Azure PowerShell, REST API, SDKs, Portal de Azure y Azure CLI.",
    "categoryId": "azure-management"
  },
  {
    "id": 490,
    "text": "¿Cuál es el principal beneficio de una Content Delivery Network (CDN) en la nube?",
    "options": [
      "Permitir almacenar información temporal de sesiones",
      "Azure administra automáticamente las máquinas virtuales",
      "Reducir la carga del servidor distribuyendo contenido estático en múltiples servidores",
      "Proporcionar recuperación rápida y económica de datos"
    ],
    "correctAnswer": "Reducir la carga del servidor distribuyendo contenido estático en múltiples servidores",
    "explaination": "Una CDN distribuye contenido estático como imágenes, videos y archivos CSS a través de servidores globales, mejorando el rendimiento y reduciendo la carga del servidor principal.",
    "categoryId": "azure-services"
  },
  {
    "id": 491,
    "text": "En computación en la nube, ¿cómo se describe mejor el beneficio de la agilidad?",
    "options": [
      "La capacidad de aprovisionar recursos rápidamente",
      "La capacidad de escalar fácilmente",
      "La capacidad de responder rápidamente a cambios del mercado",
      "La capacidad de recuperarse rápidamente de fallos regionales"
    ],
    "correctAnswer": "La capacidad de responder rápidamente a cambios del mercado",
    "explaination": "La agilidad en la nube permite a las organizaciones adaptarse rápidamente a nuevas oportunidades y cambios de negocio mediante el despliegue rápido de aplicaciones y servicios.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 492,
    "text": "El soporte formal no está incluido en el modo de vista previa privada.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Los servicios en vista previa privada están en etapas tempranas de prueba y generalmente no incluyen soporte oficial ni SLA.",
    "categoryId": "azure-management"
  },
  {
    "id": 493,
    "text": "¿Cuál es el nombre del servicio hospedado de bases de datos SQL de Azure?",
    "options": [
      "SQL Server en una VM",
      "Azure SQL Database",
      "Table Storage",
      "Cosmos DB"
    ],
    "correctAnswer": "Azure SQL Database",
    "explaination": "Azure SQL Database es un servicio PaaS completamente administrado que proporciona capacidades de SQL Server en la nube sin administrar infraestructura física.",
    "categoryId": "azure-services"
  },
];