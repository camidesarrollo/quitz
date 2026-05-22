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
    "text": "Tu cuenta de prueba de Azure caducó. ¿Qué acciones aún puedes realizar? (Selecciona todas las que correspondan)",
    "options": [
      "No es necesario realizar ningún cambio",
      "Iniciar una máquina virtual de Azure existente",
      "Acceder a tus datos almacenados en Azure",
      "Acceder al portal de Azure"
    ],
    "correctAnswers": [
      "Iniciar una máquina virtual de Azure existente",
      "Acceder a tus datos almacenados en Azure",
      "Acceder al portal de Azure"
    ],
    "categoryId": "azure-management",
    "explaination": "Cuando una cuenta de prueba de Azure expira, no puedes crear nuevos recursos ni agregar nuevas cuentas de Microsoft Entra ID. Sin embargo, normalmente aún puedes acceder al portal de Azure, consultar recursos existentes y acceder a datos almacenados durante el período de retención."
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
    "options": ["VMs: virtualización OS; Containers: portátil; App Service: apps web; Functions: sin servidor", "Functions: virtualización OS; VMs: portátil; Containers: apps web; App Service: sin servidor", "Containers: virtualización OS; VMs: portátil; App Service: apps web; Functions: sin servidor", "VMs: virtualización OS; Functions: portátil; App Service: apps web; Containers: sin servidor"],
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
    "explaination": "Una cuenta de Microsoft (o cuenta de trabajo/escuela) puede ser propietaria o co-administradora de múltiples suscripciones de Azure. Esto permite a organizaciones o individuos separar entornos (producción, desarrollo, pruebas) o departamentos bajo una misma identidad, facilitando la facturación independiente pero la gestión centralizada desde el portal."
  },
  {
    "id": 223,
    "text": "¿Se pueden fusionar dos suscripciones de Azure en una sola?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure no ofrece una función nativa para fusionar o combinar suscripciones. Cada suscripción es una unidad de facturación y gestión independiente. Si se necesita consolidar recursos, la alternativa es migrar o mover recursos individualmente entre suscripciones usando Azure Resource Mover o la opción 'Mover' del portal, pero la suscripción de origen seguirá existiendo."
  },
  {
    "id": 224,
    "text": "¿Una empresa puede utilizar recursos de múltiples suscripciones?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Una organización puede tener y operar recursos distribuidos en varias suscripciones simultáneamente. Es una práctica común en empresas grandes: separar suscripciones por departamento, proyecto o entorno (producción vs. desarrollo). Azure Management Groups permiten aplicar políticas y controles de acceso a todas las suscripciones de la organización de forma jerárquica."
  },
  {
    "id": 225,
    "text": "¿Las zonas de disponibilidad se pueden implementar en todas las regiones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Las Availability Zones solo están disponibles en regiones de Azure específicas que cuentan con la infraestructura física necesaria (centros de datos separados con energía, refrigeración y red independientes). Regiones más pequeñas o recientes pueden no tenerlas. Microsoft publica la lista de regiones compatibles; antes de diseñar una arquitectura de alta disponibilidad con zonas, se debe verificar que la región de destino las soporte."
  },
  {
    "id": 226,
    "text": "¿En las zonas de disponibilidad solo se pueden crear VMs que ejecuten Windows Server?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Las zonas de disponibilidad son agnósticas al sistema operativo. Se pueden desplegar VMs con Windows Server, distribuciones de Linux (Ubuntu, Red Hat, SUSE, etc.) y cualquier imagen disponible en Azure Marketplace. La característica de zona afecta únicamente la ubicación física del hardware, no el software que corre sobre él."
  },
  {
    "id": 227,
    "text": "¿Las zonas de disponibilidad se utilizan para replicar datos y aplicaciones en varias regiones?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-services",
    "explaination": "Las zonas de disponibilidad protegen contra fallos dentro de una misma región (son centros de datos físicamente separados dentro de la misma área metropolitana). Para replicar datos y aplicaciones entre regiones distintas (por ejemplo, Este de EE. UU. y Oeste de Europa) se usan otras soluciones como Azure Site Recovery, geo-replicación de bases de datos o el emparejamiento de regiones (region pairs)."
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
    "text": "¿Cuál de las siguientes opciones relaciona correctamente los servicios de red de Azure con sus características principales?",
    "options": [
      "ExpressRoute: cifrada pública; VPN Gateway: privada; VNet Peering: combina redes",
      "VPN Gateway: privada; ExpressRoute: combina redes; VNet Peering: cifrada pública",
      "VPN Gateway: privada; VNet Peering: combina redes; ExpressRoute: cifrada pública",
      "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública"
    ],
    "correctAnswer": "ExpressRoute: privada; VNet Peering: combina redes; VPN Gateway: cifrada pública",
    "explaination": "ExpressRoute ofrece conectividad privada dedicada (no pasa por Internet), VPN Gateway cifra el tráfico sobre Internet público, y VNet Peering conecta redes virtuales de Azure directamente.",
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
    "explaination": "Las reservas de Azure (Azure Reservations) se utilizan principalmente para obtener descuentos al comprometerse a usar ciertos recursos durante 1 o 3 años, como máquinas virtuales, bases de datos o capacidad de cómputo. No garantizan reservar servidores físicos específicos en un centro de datos determinado. Las Azure Reservations permiten reducir costos mediante compromisos a largo plazo sobre recursos de Azure. Aunque algunas ofertas pueden incluir prioridad de capacidad, su propósito principal es el ahorro de costos y no la reserva física de servidores específicos en un datacenter."
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
    "categoryId": "azure-management",
    "explaination": "Azure normalmente cobra por el tráfico de salida (egress) desde Azure hacia redes locales o internet."
  },
  {
    "id": 384,
    "text": "¿El tráfico de datos entre servicios de Azure dentro de la misma región de Azure siempre es gratuito?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "La transferencia de datos entre servicios de Azure dentro de la misma región generalmente no tiene costo."
  },
  {
    "id": 385,
    "text": "Su empresa tiene recursos sin usar. ¿Qué recursos sin usar debería eliminar para reducir costos?",
    "options": ["Las interfaces de red", "Las direcciones IP públicas", "Los grupos de Entra ID", "Las cuentas de usuario de Entra ID"],
    "correctAnswer": "Las direcciones IP públicas",
    "correctAnswers": ["Las interfaces de red", "Las direcciones IP públicas"],
    "categoryId": "azure-management",
    "explaination": "Las direcciones IP públicas y las interfaces de red pueden generar costos aunque no estén en uso."
  },
  {
    "id": 386,
    "text": "Si una VM de Azure tiene el estado Detenida (desasignada), ¿por qué seguirá pagando?",
    "options": ["Capacidad de cómputo", "Operaciones de E/S", "Redes", "Almacenamiento"],
    "correctAnswer": "Almacenamiento",
    "categoryId": "azure-management",
    "explaination": "Aunque la VM esté desasignada, los discos asociados continúan almacenados y generan costos."
  },
  {
    "id": 387,
    "text": "¿Almacenar 1 TB de datos en Azure Blob Storage siempre tendrá el mismo costo, independientemente de la región?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los precios de Azure Storage varían según la región seleccionada."
  },
  {
    "id": 388,
    "text": "¿Al usar una cuenta de Azure Storage v2 de uso general, solo se cobra por los datos almacenados y las operaciones de lectura/escritura son gratuitas?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Azure Storage cobra tanto por almacenamiento como por operaciones y transferencia de datos."
  },
  {
    "id": 389,
    "text": "¿La transferencia de datos entre cuentas de Azure Storage en diferentes regiones de Azure es gratuita?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La transferencia de datos entre regiones normalmente tiene costos asociados."
  },
  {
    "id": 390,
    "text": "¿En Microsoft Entra ID Premium P2, se garantiza una disponibilidad de al menos el 99,9%?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Microsoft garantiza un SLA de al menos 99,9% para Entra ID Premium P2."
  },
  {
    "id": 391,
    "text": "¿El SLA para Microsoft Entra ID Premium P2 es el mismo que el SLA para Microsoft Entra ID Free?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "El SLA de disponibilidad es el mismo para ambas ediciones."
  },
  {
    "id": 392,
    "text": "¿Todos los clientes de Azure que pagan reciben un crédito si su tiempo de actividad mensual es inferior a la cantidad garantizada en el SLA?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure ofrece créditos de servicio cuando no se cumplen los SLA establecidos."
  },
  {
    "id": 393,
    "text": "¿Agregar grupos de recursos a una suscripción de Azure genera costos adicionales?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los grupos de recursos son contenedores lógicos y no generan costos."
  },
  {
    "id": 394,
    "text": "¿Copiar 10 GB de datos a Azure desde una red local a través de una VPN genera costos adicionales de transferencia en Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "La transferencia de datos entrante hacia Azure generalmente es gratuita."
  },
  {
    "id": 395,
    "text": "¿Copiar 10 GB de datos de Azure a una red local a través de una VPN genera costos adicionales de transferencia de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "La transferencia de datos saliente desde Azure normalmente tiene costo."
  },
  {
    "id": 396,
    "text": "¿Cada suscripción de Azure puede contener varios administradores de cuenta?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Cada suscripción tiene un único administrador de cuenta, aunque puede tener varios administradores y roles RBAC."
  },
  {
    "id": 397,
    "text": "¿Cada suscripción a Azure solo puede administrarse mediante una cuenta de Microsoft?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Las suscripciones pueden administrarse usando cuentas de Microsoft o identidades organizacionales de Entra ID."
  },
  {
    "id": 398,
    "text": "¿Un grupo de recursos de Azure contiene varias suscripciones de Azure?",
    "options": ["Sí", "No"],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Un grupo de recursos pertenece únicamente a una suscripción."
  },
  {
    "id": 399,
    "text": "Los datos en el nivel de acceso de archivo de una cuenta de Azure Storage [...].",
    "options": ["Se puede acceder en cualquier momento mediante azcopy.exe", "Solo se puede leer mediante Azure Backup", "Deben restaurarse antes de poder acceder a los datos", "Deben rehidratarse antes de poder acceder a los datos"],
    "correctAnswer": "Deben rehidratarse antes de poder acceder a los datos",
    "categoryId": "azure-services",
    "explaination": "Los blobs archivados deben rehidratarse antes de poder leerse."
  },
  {
    "id": 400,
    "text": "Azure Cosmos DB es un ejemplo de una oferta [...].",
    "options": ["Plataforma como servicio (PaaS)", "Infraestructura como servicio (IaaS)", "Sin servidor", "Software como servicio (SaaS)"],
    "correctAnswer": "Plataforma como servicio (PaaS)",
    "categoryId": "azure-services",
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
    "explaination": "Azure DevOps Services es una plataforma de gestión del ciclo de desarrollo: incluye repositorios de código (Azure Repos), pipelines de CI/CD (Azure Pipelines), seguimiento de trabajo (Azure Boards) y gestión de artefactos. Puede automatizar el build y el despliegue de una aplicación web, pero el alojamiento lo realizan servicios distintos como Azure App Service, Azure Static Web Apps o Azure Kubernetes Service. DevOps orquesta el proceso; no es un servicio de hosting."
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
    "categoryId": "azure-management"
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
    "categoryId": "azure-management"
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
    "categoryId": "azure-management"
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
   {
    "id": 494,
    "text": "¿Qué característica de Azure Active Directory requiere que los usuarios tengan su teléfono móvil para poder iniciar sesión?",
    "options": [
      "Azure Information Protection",
      "Advanced Threat Protection",
      "Microsoft Defender for Cloud",
      "Autenticación multifactor"
    ],
    "correctAnswer": "Autenticación multifactor",
    "explaination": "La autenticación multifactor de Azure AD agrega una capa adicional de seguridad solicitando dos o más métodos de verificación, como contraseña y teléfono móvil mediante SMS, llamada o aplicación autenticadora.",
    "categoryId": "azure-management"
  },
  {
    "id": 495,
    "text": "¿Quién es responsable de la seguridad de las claves de acceso de una cuenta de almacenamiento de Azure?",
    "options": [
      "Azure es responsable de asegurar las claves de acceso",
      "Yo soy responsable de asegurar las claves de acceso"
    ],
    "correctAnswer": "Yo soy responsable de asegurar las claves de acceso",
    "explaination": "Aunque Azure proporciona herramientas para proteger las claves de acceso, el cliente es responsable de administrarlas y protegerlas adecuadamente utilizando prácticas como rotación de claves y Azure Key Vault.",
    "categoryId": "azure-management"
  },
  {
    "id": 496,
    "text": "¿Cuál de las siguientes acciones puede realizar actualmente Azure Cognitive Services?",
    "options": [
      "Traducir texto de un idioma a otro",
      "Reconocer texto en una imagen",
      "Convertir audio en texto",
      "Generar voz realista a partir de texto",
      "Todas las anteriores"
    ],
    "correctAnswer": "Todas las anteriores",
    "explaination": "Azure Cognitive Services incluye APIs de inteligencia artificial capaces de traducir texto, reconocer texto en imágenes, convertir voz a texto y generar voz sintética realista.",
    "categoryId": "azure-services"
  },
  {
    "id": 497,
    "text": "¿Es posible dar acceso a otra persona a una suscripción de Azure sin compartir el nombre de usuario y contraseña?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "Sí",
    "explaination": "Azure permite otorgar acceso mediante RBAC (Role-Based Access Control), asignando roles específicos a usuarios sin compartir credenciales.",
    "categoryId": "azure-management"
  },
  {
    "id": 498,
    "text": "¿Cómo se denomina el modelo de nube en el que Azure se utiliza como extensión de un centro de datos local?",
    "options": [
      "Nube privada",
      "Nube híbrida",
      "Nube pública"
    ],
    "correctAnswer": "Nube híbrida",
    "explaination": "La nube híbrida combina infraestructura local con servicios en la nube, permitiendo usar Azure como extensión del centro de datos para almacenamiento, respaldo o capacidad adicional.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 499,
    "text": "¿Qué característica de Azure entrega recomendaciones para reducir costos en una cuenta?",
    "options": [
      "Azure Dashboard",
      "Azure Service Health",
      "Azure Advisor",
      "Microsoft Defender for Cloud"
    ],
    "correctAnswer": "Azure Advisor",
    "explaination": "Azure Advisor proporciona recomendaciones relacionadas con costos, rendimiento, seguridad y disponibilidad para optimizar recursos y reducir gastos.",
    "categoryId": "azure-management"
  },
  {
    "id": 500,
    "text": "¿Qué servicio de Azure permite organizar y administrar múltiples suscripciones en una estructura jerárquica?",
    "options": [
      "RBAC",
      "Resource Groups",
      "Management Groups",
      "Azure Active Directory"
    ],
    "correctAnswer": "Management Groups",
    "explaination": "Azure Management Groups permite organizar varias suscripciones en jerarquías y aplicar políticas, permisos y reglas de cumplimiento de forma centralizada.",
    "categoryId": "azure-management"
  },
  {
    "id": 501,
    "text": "¿Qué característica de un sistema basado en la nube contribuye principalmente a su elasticidad?",
    "options": [
      "La capacidad de resistir ataques DDoS",
      "La capacidad de aumentar y disminuir recursos dinámicamente según la demanda",
      "La capacidad de mantener disponibilidad durante actualizaciones",
      "La capacidad de recuperarse automáticamente después de una falla"
    ],
    "correctAnswer": "La capacidad de aumentar y disminuir recursos dinámicamente según la demanda",
    "explaination": "La elasticidad en la computación en la nube permite ajustar automáticamente la capacidad de recursos en tiempo real según la demanda.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 502,
    "text": "¿Qué servicio de Azure permite controlar el acceso a aplicaciones utilizando autenticación multifactor?",
    "options": [
      "Microsoft Entra ID",
      "Azure Authorization",
      "Azure Function",
      "Azure Authentication"
    ],
    "correctAnswer": "Microsoft Entra ID",
    "explaination": "Microsoft Entra ID proporciona autenticación multifactor para reforzar la seguridad y controlar el acceso a recursos y aplicaciones.",
    "categoryId": "azure-management"
  },
  {
    "id": 503,
    "text": "¿Qué característica de Azure puede generar el ahorro más inmediato en costos?",
    "options": [
      "Cambiar almacenamiento de redundancia global a local",
      "Restringir VM costosas con Azure Policy",
      "Apagar automáticamente servidores de desarrollo y QA fuera de horario",
      "Usar instancias reservadas"
    ],
    "correctAnswer": "Apagar automáticamente servidores de desarrollo y QA fuera de horario",
    "explaination": "El apagado automático de servidores de desarrollo y QA durante noches y fines de semana evita costos innecesarios y genera ahorros inmediatos.",
    "categoryId": "azure-management"
  },
  {
    "id": 514,
    "text": "¿Los scripts de Azure PowerShell y Azure CLI son completamente compatibles entre sí?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Falso",
    "explaination": "Azure PowerShell y Azure CLI utilizan sintaxis y estructuras de comandos diferentes, por lo que no son directamente intercambiables.",
    "categoryId": "azure-management"
  },
  {
    "id": 515,
    "text": "¿Si una característica está en fase de disponibilidad general (GA), recibe soporte de todos los canales de soporte de Microsoft?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "explaination": "Cuando un servicio alcanza la fase de disponibilidad general (GA), Microsoft ofrece soporte oficial, documentación y acuerdos de nivel de servicio (SLA).",
    "categoryId": "azure-management"
  },
  {
    "id": 516,
    "text": "¿Qué sucede si Azure no cumple con su Acuerdo de Nivel de Servicio (SLA)?",
    "options": [
      "No es posible, Azure siempre cumple el SLA",
      "Se recibe un reembolso parcial como crédito de servicio",
      "El servicio será gratuito ese mes"
    ],
    "correctAnswer": "Se recibe un reembolso parcial como crédito de servicio",
    "explaination": "Si Azure no cumple con el SLA, los clientes pueden recibir créditos de servicio equivalentes a un pequeño porcentaje de la tarifa mensual.",
    "categoryId": "azure-management"
  },
  {
    "id": 517,
    "text": "¿Qué sistemas operativos son compatibles con las máquinas virtuales de Azure?",
    "options": [
      "Solo Linux",
      "Solo Windows",
      "Windows, Linux y macOS",
      "Solo macOS",
      "Windows y Linux"
    ],
    "correctAnswer": "Windows y Linux",
    "explaination": "Azure Virtual Machines admite sistemas operativos Windows y Linux. macOS no está soportado como sistema operativo general en máquinas virtuales de Azure.",
    "categoryId": "azure-services"
  },
  {
    "id": 518,
    "text": "¿Cuál de los siguientes recursos NO se considera un recurso de cómputo?",
    "options": [
      "Azure Batch",
      "Máquinas virtuales",
      "Virtual Machine Scale Sets",
      "Load Balancer",
      "Function Apps"
    ],
    "correctAnswer": "Load Balancer",
    "explaination": "Un Load Balancer distribuye tráfico de red y no realiza procesamiento computacional, por lo que no se considera un recurso de cómputo.",
    "categoryId": "azure-services"
  },
  {
    "id": 519,
    "text": "¿Dónde se puede consultar con qué estándares y normativas cumple Microsoft Azure?",
    "options": [
      "Azure Service Health",
      "Azure Security Center",
      "Azure Privacy Page",
      "Trust Center"
    ],
    "correctAnswer": "Trust Center",
    "explaination": "El Azure Trust Center proporciona información sobre cumplimiento normativo, certificaciones y estándares de seguridad de Microsoft Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 520,
    "text": "¿Cuántos minutos de inactividad al mes representan un 99.99% de disponibilidad?",
    "options": [
      "4 minutos",
      "40 minutos",
      "100 minutos",
      "1 minuto"
    ],
    "correctAnswer": "4 minutos",
    "explaination": "Una disponibilidad de 99.99% permite aproximadamente 4 minutos de inactividad al mes.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 521,
    "text": "¿Cómo se puede evitar que una cuenta de Azure genere costos inesperados sobre un cierto límite?",
    "options": [
      "Configurar alertas de facturación",
      "Usar únicamente Azure Functions",
      "Utilizar Azure Reserved Instances",
      "Implementar Spending Limit"
    ],
    "correctAnswer": "Configurar alertas de facturación",
    "explaination": "Las alertas de facturación permiten recibir notificaciones cuando el gasto alcanza un umbral específico, ayudando a controlar costos.",
    "categoryId": "azure-management"
  },
  {
    "id": 522,
    "text": "¿Qué ocurre cuando una cuenta gratuita de Azure alcanza el límite de crédito de $200?",
    "options": [
      "Todos los servicios se detienen hasta decidir si convertir la cuenta en pagada",
      "La cuenta se cierra automáticamente",
      "La tarjeta de crédito se cobra automáticamente",
      "No se pueden crear más recursos hasta agregar más crédito"
    ],
    "correctAnswer": "Todos los servicios se detienen hasta decidir si convertir la cuenta en pagada",
    "explaination": "Al alcanzar el límite de crédito de la cuenta gratuita, Azure detiene los servicios y el usuario debe decidir si cambia a un modelo de pago.",
    "categoryId": "azure-management"
  },
  {
    "id": 523,
    "text": "¿Cuál es la importancia de seleccionar una región de Azure al crear recursos?",
    "options": [
      "No tiene consecuencias importantes",
      "Es solo una estructura organizativa",
      "No se pueden crear recursos fuera de la región elegida",
      "Define la ubicación física donde se hospedarán los recursos"
    ],
    "correctAnswer": "Define la ubicación física donde se hospedarán los recursos",
    "explaination": "La región de Azure determina la ubicación geográfica de los recursos, afectando latencia, cumplimiento normativo y estrategias de disponibilidad.",
    "categoryId": "azure-services"
  },
   {
    "id": 524,
    "text": "¿Qué servicio de Azure puede bloquear automáticamente tráfico hacia o desde direcciones IP y dominios maliciosos?",
    "options": [
      "Load Balancer",
      "Azure Active Directory",
      "Azure Firewall",
      "Network Security Groups"
    ],
    "correctAnswer": "Azure Firewall",
    "explaination": "Azure Firewall puede integrar inteligencia de amenazas de Microsoft para bloquear tráfico malicioso hacia o desde IPs y dominios sospechosos.",
    "categoryId": "azure-services"
  },
  {
    "id": 525,
    "text": "¿Qué software se utiliza para sincronizar Active Directory local con Azure Active Directory?",
    "options": [
      "Azure AD Federation Services",
      "LDAP",
      "AD Connect",
      "Azure AD Domain Services"
    ],
    "correctAnswer": "AD Connect",
    "explaination": "Azure AD Connect sincroniza usuarios, grupos y credenciales entre Active Directory local y Azure Active Directory.",
    "categoryId": "azure-management"
  },
  {
    "id": 526,
    "text": "¿Un tenant de Azure es una instancia dedicada y confiable de Azure Active Directory creada automáticamente al suscribirse a un servicio de Microsoft?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "explaination": "Cuando una organización se registra en servicios como Azure o Microsoft 365, se crea automáticamente un tenant de Azure AD.",
    "categoryId": "azure-management"
  },
  {
    "id": 527,
    "text": "¿Qué modelo de computación es más sencillo para migrar una aplicación existente desde un datacenter local hacia la nube?",
    "options": [
      "FaaS",
      "Serverless",
      "IaaS",
      "PaaS"
    ],
    "correctAnswer": "IaaS",
    "explaination": "IaaS permite realizar migraciones tipo lift-and-shift usando máquinas virtuales con mínimos cambios en la arquitectura original.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 528,
    "text": "¿Qué significa la letra R en RBAC?",
    "options": [
      "Review",
      "Rights",
      "Role",
      "Rule"
    ],
    "correctAnswer": "Role",
    "explaination": "RBAC significa Role-Based Access Control, un modelo de control de acceso basado en roles.",
    "categoryId": "azure-management"
  },
  {
    "id": 529,
    "text": "¿Qué componentes forman parte del despliegue de aplicaciones en Azure App Services?",
    "options": [
      "Configuración",
      "Código empaquetado",
      "Scripts de base de datos",
      "Administración de actualizaciones del sistema operativo"
    ],
    "correctAnswer": "Configuración",
    "correctAnswers": ["Configuración", "Código empaquetado"],
    "explaination": "El despliegue de aplicaciones en Azure App Services requiere configuraciones como variables de entorno y el código de la aplicación.",
    "categoryId": "azure-services"
  },
  {
    "id": 530,
    "text": "¿Cuántas horas gratuitas mensuales ofrece una VM B1S en la cuenta gratuita de Azure durante los primeros 12 meses?",
    "options": [
      "750 horas",
      "500 horas",
      "Horas ilimitadas",
      "300 horas"
    ],
    "correctAnswer": "750 horas",
    "explaination": "La cuenta gratuita de Azure incluye hasta 750 horas mensuales de uso para una máquina virtual B1S durante los primeros 12 meses.",
    "categoryId": "azure-services"
  },
  {
    "id": 531,
    "text": "¿Cuál de los siguientes elementos pertenece a la capa de seguridad de red?",
    "options": [
      "Separar servidores en subredes según su función",
      "Candados en las puertas del datacenter",
      "Mantener sistemas operativos actualizados",
      "Todas las anteriores"
    ],
    "correctAnswer": "Separar servidores en subredes según su función",
    "explaination": "La seguridad de red incluye segmentación mediante subredes para aislar recursos según roles o funciones.",
    "categoryId": "azure-services"
  },
  {
    "id": 532,
    "text": "¿Qué son los Resource Groups en Azure?",
    "options": [
      "Grupos automáticos de recursos del mismo tipo",
      "Grupos de usuarios con permisos",
      "Una estructura lógica para organizar recursos",
      "Grupos basados en etiquetas automáticas"
    ],
    "correctAnswer": "Una estructura lógica para organizar recursos",
    "explaination": "Los Resource Groups permiten organizar y administrar recursos relacionados como máquinas virtuales, redes y bases de datos.",
    "categoryId": "azure-management"
  },
  {
    "id": 533,
    "text": "¿Qué servicio de Azure permite habilitar MFA solo para administradores y no para usuarios normales?",
    "options": [
      "Privileged Identity Management",
      "Azure AD B2B",
      "Advanced Threat Protection",
      "Azure Firewall"
    ],
    "correctAnswer": "Privileged Identity Management",
    "explaination": "Azure Privileged Identity Management permite aplicar controles avanzados como MFA únicamente a usuarios con privilegios elevados.",
    "categoryId": "azure-management"
  },
  {
    "id": 534,
    "text": "¿Qué servicio de Azure, al habilitarse, bloquea automáticamente tráfico hacia o desde direcciones IP y dominios maliciosos?",
    "options": [
      "Load Balancer",
      "Azure Active Directory",
      "Azure Firewall",
      "Network Security Groups"
    ],
    "correctAnswer": "Azure Firewall",
    "explaination": "Azure Firewall utiliza inteligencia de amenazas de Microsoft para bloquear tráfico sospechoso hacia o desde direcciones IP y dominios maliciosos.",
    "categoryId": "azure-services"
  },
  {
    "id": 535,
    "text": "¿Qué software se utiliza para sincronizar Active Directory local con Azure Active Directory?",
    "options": [
      "Azure AD Federation Services",
      "LDAP",
      "AD Connect",
      "Azure AD Domain Services"
    ],
    "correctAnswer": "AD Connect",
    "explaination": "Azure AD Connect sincroniza usuarios, grupos y credenciales entre Active Directory local y Azure Active Directory.",
    "categoryId": "azure-services"
  },
  {
    "id": 536,
    "text": "¿Cuál es una ventaja principal de ejecutar una nube privada?",
    "options": [
      "Puedes cambiar fácilmente de proveedor",
      "Tus aplicaciones y datos están en hardware y redes aisladas",
      "Es mucho más barata que la nube pública"
    ],
    "correctAnswer": "Tus aplicaciones y datos están en hardware y redes aisladas",
    "explaination": "La nube privada ofrece aislamiento de infraestructura y red, aumentando el control y la seguridad.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 537,
    "text": "¿Qué herramienta de Azure entrega recomendaciones basadas en el uso real de tus recursos?",
    "options": [
      "Azure Monitor",
      "Azure Dashboard",
      "Azure Advisor",
      "Azure Service Health"
    ],
    "correctAnswer": "Azure Advisor",
    "explaination": "Azure Advisor analiza tu entorno y entrega recomendaciones para optimizar costos, seguridad, rendimiento y disponibilidad.",
    "categoryId": "azure-management"
  },
  {
    "id": 538,
    "text": "¿Qué tipo de información entrega Microsoft Service Trust Portal?",
    "options": [
      "Herramientas para gestionar cumplimiento",
      "Documentación y reportes de cumplimiento y seguridad",
      "Documentación técnica de servicios Azure",
      "Recomendaciones de optimización"
    ],
    "correctAnswer": "Documentación y reportes de cumplimiento y seguridad",
    "explaination": "Service Trust Portal contiene reportes de auditoría, certificaciones, evaluaciones de seguridad y documentos de cumplimiento.",
    "categoryId": "azure-management"
  },
  {
    "id": 539,
    "text": "¿Por qué se recomienda dividir una aplicación en múltiples subredes?",
    "options": [
      "Cada servidor requiere obligatoriamente una subred distinta",
      "Permite aplicar diferentes reglas de seguridad y limitar ataques laterales",
      "Las subredes tienen límites estrictos de direcciones IP"
    ],
    "correctAnswer": "Permite aplicar diferentes reglas de seguridad y limitar ataques laterales",
    "explaination": "La segmentación en subredes mejora la seguridad permitiendo aplicar reglas NSG específicas y limitar movimientos laterales.",
    "categoryId": "azure-services"
  },
  {
    "id": 540,
    "text": "¿Qué característica de Azure informa sobre incidentes y problemas de la plataforma Azure?",
    "options": [
      "Azure Service Health",
      "Azure Security Center",
      "Azure Monitor",
      "Azure Portal Dashboard"
    ],
    "correctAnswer": "Azure Service Health",
    "explaination": "Azure Service Health entrega alertas sobre incidentes, mantenimientos y problemas que afectan servicios de Azure.",
    "categoryId": "azure-management"
  },
  {
    "id": 541,
    "text": "¿Qué ventajas entrega la elasticidad en la computación en la nube? (Selecciona dos)",
    "options": [
      "Permite ahorrar dinero",
      "Permite hacer más respaldos",
      "Los servidores dañados no necesitan reparación",
      "Permite agregar capacidad automáticamente en periodos de alta demanda"
    ],
    "correctAnswer": "Permite ahorrar dinero y Permite agregar capacidad automáticamente en periodos de alta demanda",
    "correctAnswers": [
      "Permite ahorrar dinero",
      "Permite agregar capacidad automáticamente en periodos de alta demanda"
    ],
    "explaination": "La elasticidad permite escalar recursos según la demanda, optimizando costos y manteniendo el rendimiento.",
    "categoryId": "cloud-concepts"
  },
  {
    "id": 542,
    "text": "¿Dónde puedes configurar una alerta cuando se crea una nueva máquina virtual en Azure?",
    "options": [
      "Subscription Settings",
      "Azure Monitor",
      "Azure Policy",
      "Azure Dashboard"
    ],
    "correctAnswer": "Azure Monitor",
    "explaination": "Azure Monitor permite crear alertas basadas en eventos y actividades, como la creación de nuevas máquinas virtuales.",
    "categoryId": "azure-management"
  },
  {
    "id": 543,
    "text": "¿Qué ventaja tiene Application Gateway sobre un Load Balancer?",
    "options": [
      "Comprende HTTP y puede tomar decisiones según la URL",
      "Puede escalar automáticamente",
      "Es el único recomendado para producción"
    ],
    "correctAnswer": "Comprende HTTP y puede tomar decisiones según la URL",
    "explaination": "Application Gateway opera en capa 7 y puede enrutar tráfico según URL, encabezados y contenido HTTP.",
    "categoryId": "azure-services"
  },
  {
    "id": 544,
    "text": "¿Qué herramienta de administración de Azure analiza el uso y entrega recomendaciones sobre costos, seguridad y rendimiento?",
    "options": [
      "Azure Firewall",
      "Azure Service Health",
      "Azure Advisor",
      "Azure Mobile App"
    ],
    "correctAnswer": "Azure Advisor",
    "explaination": "Azure Advisor analiza el uso de recursos y entrega recomendaciones personalizadas para optimizar el entorno.",
    "categoryId": "azure-management"
  },
  {
    "id": 545,
    "text": "¿Cuál es el objetivo de un ataque DDoS?",
    "options": [
      "Descifrar contraseñas de administradores",
      "Engañar usuarios para obtener información",
      "Extraer datos desde una base de datos",
      "Sobrecargar y agotar los recursos de una aplicación"
    ],
    "correctAnswer": "Sobrecargar y agotar los recursos de una aplicación",
    "explaination": "Un ataque DDoS busca inundar un sistema con tráfico excesivo para dejarlo fuera de servicio.",
    "categoryId": "azure-services"
  },
  {
    "id": 546,
    "text": "Se puede decir que un recurso pertenece a uno y solo un grupo de recursos. ¿A qué pertenece un grupo de recursos?",
    "options": [
      "Grupo de administración",
      "Microsoft Entra ID",
      "Otros grupos de recursos",
      "Suscripción"
    ],
    "correctAnswer": "Suscripción",
    "categoryId": "azure-management",
    "explaination": "Un grupo de recursos en Azure pertenece a una única suscripción. Todos los recursos dentro del grupo se administran bajo esa misma suscripción, la cual determina la facturación, las políticas y el control de acceso."
  },
  {
    "id": 547,
    "text": "¿Qué modelo de nube sería el más adecuado para una organización de salud que maneja datos sensibles de pacientes y datos administrativos no sensibles?",
    "options": [
      "Nube pública",
      "Nube híbrida",
      "Nube privada",
      "Nube comunitaria"
    ],
    "correctAnswer": "Nube híbrida",
    "categoryId": "cloud-concepts",
    "explaination": "Una nube híbrida permite almacenar datos sensibles en una nube privada para mayor seguridad y cumplimiento normativo, mientras que las cargas menos sensibles pueden ejecutarse en la nube pública para mejorar la escalabilidad y reducir costos."
  },
  {
    "id": 548,
    "text": "¿Cuál es la principal diferencia entre PaaS e IaaS?",
    "options": [
      "La escalabilidad del servicio",
      "El costo del servicio",
      "El nivel de control sobre la infraestructura",
      "La seguridad del servicio"
    ],
    "correctAnswer": "El nivel de control sobre la infraestructura",
    "categoryId": "cloud-concepts",
    "explaination": "IaaS proporciona mayor control sobre máquinas virtuales, almacenamiento y redes, mientras que PaaS abstrae la administración de infraestructura para que los desarrolladores se enfoquen en las aplicaciones."
  },
  {
    "id": 549,
    "text": "¿Cómo minimiza el tiempo de inactividad la alta disponibilidad en la computación en la nube?",
    "options": [
      "Limitando el uso de recursos durante horas punta",
      "Proporcionando sistemas de energía de respaldo",
      "Reduciendo el costo de la infraestructura",
      "Replicando automáticamente recursos en múltiples regiones o zonas"
    ],
    "correctAnswer": "Replicando automáticamente recursos en múltiples regiones o zonas",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad reduce el tiempo de inactividad replicando recursos en varias regiones o zonas de disponibilidad, asegurando que los servicios continúen funcionando incluso si una ubicación falla."
  },
  {
    "id": 550,
    "text": "¿Cuál es el nivel más alto de organización dentro de la jerarquía de Azure?",
    "options": [
      "Grupo de administración",
      "Suscripción",
      "Grupo de recursos",
      "Recurso"
    ],
    "correctAnswer": "Grupo de administración",
    "categoryId": "azure-management",
    "explaination": "Los grupos de administración son el nivel más alto de la jerarquía de Azure y permiten administrar múltiples suscripciones con políticas y gobernanza unificadas."
  },
  {
    "id": 551,
    "text": "¿Qué característica de las máquinas virtuales de Azure permite elegir en qué centro de datos físico desplegar una VM?",
    "options": [
      "Conjuntos de disponibilidad",
      "Región",
      "Instancias Spot",
      "Zonas de disponibilidad"
    ],
    "correctAnswer": "Zonas de disponibilidad",
    "categoryId": "azure-services",
    "explaination": "Las zonas de disponibilidad son centros de datos físicamente separados dentro de una región de Azure y proporcionan mayor disponibilidad y tolerancia a fallos."
  },
  {
    "id": 552,
    "text": "Aplicar regularmente parches de software a los servidores en la nube es un ejemplo de gobernanza.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-management",
    "explaination": "La aplicación de parches forma parte de la gobernanza porque ayuda a mantener los sistemas seguros, actualizados y alineados con estándares organizacionales."
  },
  {
    "id": 553,
    "text": "¿Qué tipo de escalado en la computación en la nube prácticamente no tiene límite?",
    "options": [
      "Escalado vertical",
      "Escalado horizontal"
    ],
    "correctAnswer": "Escalado horizontal",
    "categoryId": "cloud-concepts",
    "explaination": "El escalado horizontal consiste en agregar más instancias, como máquinas virtuales o contenedores, permitiendo crecer continuamente según la demanda."
  },
  {
    "id": 554,
    "text": "Planeas implementar tu aplicación en un conjunto de escalado de máquinas virtuales (VMSS) y permitir que escale automáticamente según la demanda. ¿Cómo se distribuye el tráfico entre las máquinas del conjunto?",
    "options": [
      "Debes agregar un servicio adicional como Load Balancer o Application Gateway",
      "Los conjuntos de escalado de máquinas virtuales incluyen balanceo de carga"
    ],
    "correctAnswer": "Los conjuntos de escalado de máquinas virtuales incluyen balanceo de carga",
    "categoryId": "azure-services",
    "explaination": "Azure VM Scale Sets incluye automáticamente balanceo de carga para distribuir el tráfico de forma uniforme entre las instancias."
  },
  {
    "id": 555,
    "text": "¿Qué frase describe mejor la propiedad de escalabilidad?",
    "options": [
      "La facilidad de administrar y mantener un sistema",
      "La capacidad de prever y planificar el rendimiento y los recursos del sistema",
      "La capacidad de un sistema de permanecer operativo y accesible durante un alto porcentaje del tiempo",
      "La capacidad de un sistema para manejar una mayor carga agregando recursos dinámicamente"
    ],
    "correctAnswer": "La capacidad de un sistema para manejar una mayor carga agregando recursos dinámicamente",
    "categoryId": "cloud-concepts",
    "explaination": "La escalabilidad se refiere a la capacidad de un sistema para adaptarse al aumento de demanda agregando recursos sin afectar el rendimiento."
  },
  {
    "id": 556,
    "text": "¿Cuál de las siguientes NO es una condición que puede utilizarse en una política de acceso condicional?",
    "options": [
      "Tipo de aplicación",
      "Tipo de dispositivo",
      "Ubicación del usuario",
      "Nivel de riesgo del usuario"
    ],
    "correctAnswer": "Tipo de aplicación",
    "categoryId": "azure-management",
    "explaination": "Las políticas de acceso condicional admiten condiciones como tipo de dispositivo, ubicación y nivel de riesgo del usuario, pero no el tipo de aplicación."
  },
  {
    "id": 557,
    "text": "Si necesitas almacenar más de 5 PB en una cuenta de almacenamiento de Azure, ¿cuál es la mejor opción?",
    "options": [
      "Abrir un ticket con Azure para solicitar un límite mayor",
      "El máximo permitido en Azure es 5 PB y no existe solución",
      "Crear una segunda cuenta de almacenamiento y particionar los datos",
      "Crear otra cuenta de almacenamiento en otra región"
    ],
    "correctAnswer": "Crear una segunda cuenta de almacenamiento y particionar los datos",
    "categoryId": "azure-services",
    "explaination": "Para superar los límites de almacenamiento de una cuenta, Azure recomienda distribuir los datos entre múltiples cuentas de almacenamiento."
  },
  {
    "id": 558,
    "text": "¿Cuál es el principio fundamental de la seguridad Zero Trust?",
    "options": [
      "Confiar hasta que se demuestre lo contrario",
      "Confiar pero verificar",
      "Seguridad mediante oscuridad",
      "Nunca confiar, siempre verificar"
    ],
    "correctAnswer": "Nunca confiar, siempre verificar",
    "categoryId": "azure-management",
    "explaination": "Zero Trust exige verificar continuamente la identidad y el acceso de usuarios y dispositivos antes de conceder permisos."
  },
  {
    "id": 559,
    "text": "¿Cuál es la opción de almacenamiento de menor costo en Azure?",
    "options": [
      "SSD estándar",
      "HDD estándar",
      "SSD premium",
      "Ultra Disk"
    ],
    "correctAnswer": "HDD estándar",
    "categoryId": "azure-services",
    "explaination": "Los discos HDD estándar son la opción de almacenamiento más económica en Azure y están orientados a cargas con menores requerimientos de rendimiento."
  },
  {
    "id": 560,
    "text": "¿Qué opción de almacenamiento de Azure es la solución NoSQL de menor costo para datos estructurados no relacionales?",
    "options": [
      "Queue Storage",
      "Blob Storage",
      "Table Storage",
      "Cosmos DB"
    ],
    "correctAnswer": "Table Storage",
    "categoryId": "azure-services",
    "explaination": "Azure Table Storage es un almacén NoSQL económico y escalable diseñado para datos estructurados no relacionales."
  },
  {
    "id": 561,
    "text": "Completa el espacio en blanco: ________ es un dispositivo físico que permite transferir grandes cantidades de datos hacia y desde Azure.",
    "options": [
      "Data Migration Assistant",
      "Azure Migrate",
      "Steve, el becario mal pagado de TI",
      "Azure Data Box"
    ],
    "correctAnswer": "Azure Data Box",
    "categoryId": "azure-services",
    "explaination": "Azure Data Box es un dispositivo físico utilizado para transferir grandes volúmenes de datos cuando la transferencia por Internet no es práctica."
  },
  {
    "id": 562,
    "text": "Completa el espacio en blanco: ________ es un intento malicioso de interrumpir o impedir el funcionamiento de un servicio en la nube saturándolo con tráfico o solicitudes excesivas.",
    "options": [
      "Un ataque de denegación de servicio",
      "Malware",
      "Phishing",
      "Una inyección SQL"
    ],
    "correctAnswer": "Un ataque de denegación de servicio",
    "categoryId": "azure-management",
    "explaination": "Un ataque DoS busca saturar un servicio con tráfico excesivo para volverlo lento o inaccesible."
  },
  {
    "id": 563,
    "text": "¿Cuál es el papel de la tolerancia a fallos en la estrategia de confiabilidad de Azure?",
    "options": [
      "Prevenir que ocurran fallos",
      "Minimizar el impacto de fallos individuales de componentes",
      "Optimizar el rendimiento del sistema",
      "Garantizar una recuperación rápida ante grandes interrupciones"
    ],
    "correctAnswer": "Minimizar el impacto de fallos individuales de componentes",
    "categoryId": "cloud-concepts",
    "explaination": "La tolerancia a fallos asegura que el sistema continúe funcionando incluso si algunos componentes fallan, minimizando interrupciones."
  },
  {
    "id": 564,
    "text": "¿Cuál es el propósito principal de la herramienta AzCopy en Azure?",
    "options": [
      "Crear y administrar cuentas de almacenamiento de Azure",
      "Transferir datos hacia y desde Azure Storage",
      "Monitorear el uso de recursos en Azure",
      "Administrar máquinas virtuales de Azure"
    ],
    "correctAnswer": "Transferir datos hacia y desde Azure Storage",
    "categoryId": "azure-services",
    "explaination": "AzCopy es una herramienta de línea de comandos optimizada para transferir datos entre sistemas locales y servicios de Azure Storage."
  },
  {
    "id": 565,
    "text": "¿Qué tipo de almacenamiento de Azure está diseñado específicamente como un volumen de almacenamiento a nivel de bloque administrado por Azure para máquinas virtuales?",
    "options": [
      "Azure File Storage",
      "General Purpose v2",
      "Azure Disk",
      "Azure Blob Storage"
    ],
    "correctAnswer": "Azure Disk",
    "categoryId": "azure-services",
    "explaination": "Azure Disk proporciona almacenamiento administrado a nivel de bloque optimizado para máquinas virtuales de Azure."
  },
  {
    "id": 566,
    "text": "¿En qué entorno de nube el proveedor administra el sistema operativo, lo que significa que no puedes determinar la versión exacta de Windows o Linux que se está utilizando?",
    "options": [
      "IaaS",
      "PaaS",
      "Máquinas virtuales",
      "Conjuntos de escalado de máquinas virtuales"
    ],
    "correctAnswer": "PaaS",
    "categoryId": "cloud-concepts",
    "explaination": "En un entorno PaaS, el proveedor de la nube administra el sistema operativo y la infraestructura subyacente, permitiendo a los usuarios enfocarse en desarrollar y desplegar aplicaciones."
  },
  {
    "id": 567,
    "text": "¿Cuál es el propósito principal de las regiones soberanas en Azure?",
    "options": [
      "Proporcionar mayor rendimiento para clientes en países específicos",
      "Ofrecer descuentos para clientes en ciertas regiones",
      "Garantizar el cumplimiento de residencia de datos",
      "Proporcionar acceso a servicios de Azure en ubicaciones geográficas específicas"
    ],
    "correctAnswer": "Garantizar el cumplimiento de residencia de datos",
    "categoryId": "azure-management",
    "explaination": "Las regiones soberanas ayudan a cumplir requisitos legales y regulatorios relacionados con dónde se almacenan y procesan los datos."
  },
  {
    "id": 568,
    "text": "¿Qué modelo de nube es utilizado frecuentemente por agencias gubernamentales u organizaciones con estrictos requisitos de cumplimiento?",
    "options": [
      "Nube pública",
      "Nube híbrida",
      "Nube comunitaria",
      "Nube privada"
    ],
    "correctAnswer": "Nube comunitaria",
    "categoryId": "cloud-concepts",
    "explaination": "La nube comunitaria está diseñada para organizaciones con necesidades regulatorias similares, proporcionando un entorno seguro y compatible."
  },
  {
    "id": 569,
    "text": "¿Los grupos de administración pueden anidarse?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "Sí",
    "categoryId": "azure-management",
    "explaination": "Azure permite anidar grupos de administración para crear estructuras jerárquicas de gobernanza y aplicar políticas en múltiples suscripciones."
  },
  {
    "id": 570,
    "text": "¿Cuál de las siguientes NO es un caso de uso común para Azure Policy?",
    "options": [
      "Denegar acceso a recursos a una persona específica",
      "Aplicar estándares de seguridad de red",
      "Exigir etiquetas de recursos para asignación de costos",
      "Evitar la creación de recursos en regiones específicas"
    ],
    "correctAnswer": "Denegar acceso a recursos a una persona específica",
    "categoryId": "azure-management",
    "explaination": "Azure Policy se utiliza para gobernanza y cumplimiento. El control de acceso a usuarios específicos se administra mediante RBAC."
  },
  {
    "id": 571,
    "text": "¿Cuál de las siguientes NO es una característica clave de Microsoft Defender for Cloud?",
    "options": [
      "Detección y respuesta ante amenazas",
      "Evaluación de vulnerabilidades",
      "Administración de contraseñas",
      "Gestión de postura de seguridad"
    ],
    "correctAnswer": "Administración de contraseñas",
    "categoryId": "azure-services",
    "explaination": "Microsoft Defender for Cloud se centra en la seguridad y protección de recursos, pero la administración de contraseñas corresponde a otros servicios como Microsoft Entra ID."
  },
  {
    "id": 572,
    "text": "¿Cuál de las siguientes es una buena razón para ejecutar tu infraestructura localmente en lugar de utilizar la nube?",
    "options": [
      "Escalabilidad potencialmente ilimitada",
      "Necesidad de servidores en muchos países",
      "Necesidad de una amplia variedad de servicios y herramientas",
      "Puede ser más económico operar infraestructura propia"
    ],
    "correctAnswer": "Puede ser más económico operar infraestructura propia",
    "categoryId": "cloud-concepts",
    "explaination": "En algunos casos, las organizaciones pueden reducir costos usando infraestructura propia, especialmente si ya poseen el hardware necesario."
  },
  {
    "id": 573,
    "text": "¿Cuál es el propósito principal de Azure Virtual Desktop?",
    "options": [
      "Entregar escritorios Windows virtualizados a los usuarios",
      "Crear y administrar máquinas virtuales en Azure",
      "Proporcionar un entorno virtualizado para cargas de Windows Server",
      "Proporcionar una plataforma para hospedar aplicaciones web"
    ],
    "correctAnswer": "Entregar escritorios Windows virtualizados a los usuarios",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Desktop permite a los usuarios acceder a escritorios y aplicaciones Windows virtualizadas desde cualquier lugar."
  },
  {
    "id": 574,
    "text": "¿Cuál es el propósito del rol Owner en Azure RBAC?",
    "options": [
      "Administrar recursos de Azure incluyendo delegar permisos",
      "Administrar recursos de Azure sin delegar permisos",
      "Monitorear recursos de Azure para detectar amenazas",
      "Visualizar recursos de Azure"
    ],
    "correctAnswer": "Administrar recursos de Azure incluyendo delegar permisos",
    "categoryId": "azure-management",
    "explaination": "El rol Owner proporciona acceso total a los recursos y permite asignar permisos a otros usuarios."
  },
  {
    "id": 575,
    "text": "¿Cuál de las siguientes opciones es un ejemplo de una oferta IaaS de Azure?",
    "options": [
      "Azure Managed Storage",
      "Servicios de protección DDoS",
      "Azure Firewall",
      "Virtual Network"
    ],
    "correctAnswer": "Virtual Network",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Network es una oferta IaaS porque proporciona capacidades básicas de red para recursos en Azure."
  },
  {
    "id": 576,
    "text": "¿Qué dispositivo debe implementarse en una red virtual de Azure antes de conectarse mediante VPN?",
    "options": [
      "Azure Application Gateway",
      "Azure Firewall",
      "Azure VPN Gateway",
      "Virtual Network Peering"
    ],
    "correctAnswer": "Azure VPN Gateway",
    "categoryId": "azure-services",
    "explaination": "Azure VPN Gateway permite establecer conexiones VPN seguras entre redes locales y redes virtuales de Azure."
  },
  {
    "id": 577,
    "text": "¿Cuál es la principal ventaja de utilizar instancias Spot en la nube?",
    "options": [
      "Siempre están disponibles",
      "Proporcionan importantes ahorros de costos",
      "Ofrecen el máximo rendimiento",
      "Son ideales para aplicaciones con requisitos estrictos de rendimiento"
    ],
    "correctAnswer": "Proporcionan importantes ahorros de costos",
    "categoryId": "azure-services",
    "explaination": "Las instancias Spot permiten utilizar capacidad no utilizada a un menor costo, aunque pueden ser interrumpidas."
  },
  {
    "id": 578,
    "text": "Uno de los beneficios de la computación en la nube es poder usar scripts de línea de comandos para crear o destruir máquinas virtuales programáticamente. ¿Qué tipo de beneficio de administración representa esto?",
    "options": [
      "Administración de la nube",
      "Administración en la nube"
    ],
    "correctAnswer": "Administración en la nube",
    "categoryId": "cloud-concepts",
    "explaination": "La administración en la nube permite automatizar recursos utilizando scripts, APIs e infraestructura como código."
  },
  {
    "id": 579,
    "text": "En Azure, ________ es una división lógica de una red virtual.",
    "options": [
      "Dirección IP",
      "Firewall",
      "Subred",
      "Grupo de seguridad de red (NSG)"
    ],
    "correctAnswer": "Subred",
    "categoryId": "azure-services",
    "explaination": "Las subredes permiten segmentar y administrar recursos dentro de una red virtual de Azure."
  },
  {
    "id": 580,
    "text": "El modelo de ________ es un marco que define la división de responsabilidades entre el proveedor de nube y el cliente.",
    "options": [
      "GDPR",
      "Responsabilidad compartida",
      "Serverless",
      "Pago por uso"
    ],
    "correctAnswer": "Responsabilidad compartida",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo de responsabilidad compartida divide las responsabilidades de seguridad y administración entre el proveedor y el cliente."
  },
  {
    "id": 581,
    "text": "¿Cuál es el propósito principal de Azure B2C?",
    "options": [
      "Permitir que empleados accedan a recursos corporativos desde dispositivos personales",
      "Administrar identidad y acceso para socios y proveedores externos",
      "Permitir a las organizaciones ofrecer gestión de identidad y acceso para sus clientes",
      "Proporcionar gestión de identidad y acceso para usuarios internos"
    ],
    "correctAnswer": "Permitir a las organizaciones ofrecer gestión de identidad y acceso para sus clientes",
    "categoryId": "azure-services",
    "explaination": "Azure B2C está diseñado para administrar autenticación e identidad de usuarios externos en aplicaciones orientadas al consumidor."
  },
  {
    "id": 582,
    "text": "¿Qué modelo de nube utiliza típicamente el modelo de precios basado en consumo?",
    "options": [
      "Nube pública",
      "Infraestructura local",
      "Nube híbrida",
      "Nube privada"
    ],
    "correctAnswer": "Nube pública",
    "categoryId": "cloud-concepts",
    "explaination": "La nube pública utiliza generalmente un modelo de pago por uso, permitiendo pagar solo por los recursos consumidos."
  },
  {
    "id": 583,
    "text": "¿Cuál de las siguientes opciones NO es un ejemplo de un recurso de Azure?",
    "options": [
      "Una cuenta de almacenamiento",
      "Una suscripción de Azure",
      "Una base de datos Azure SQL",
      "Una red virtual"
    ],
    "correctAnswer": "Una suscripción de Azure",
    "categoryId": "azure-management",
    "explaination": "Una suscripción es un contenedor lógico que organiza recursos, pero no es un recurso en sí."
  },
  {
    "id": 584,
    "text": "¿Cuál es el propósito principal de la autenticación multifactor (MFA)?",
    "options": [
      "Simplificar el proceso de inicio de sesión",
      "Agregar una capa extra de seguridad mediante múltiples formas de verificación",
      "Eliminar la necesidad de contraseñas",
      "Proteger contra ataques de phishing"
    ],
    "correctAnswer": "Agregar una capa extra de seguridad mediante múltiples formas de verificación",
    "categoryId": "azure-management",
    "explaination": "MFA mejora la seguridad requiriendo dos o más factores de autenticación antes de permitir el acceso."
  },
  {
    "id": 585,
    "text": "Microsoft Entra Domain Services es un servicio de dominio administrado que puede utilizarse para:",
    "options": [
      "Reemplazar completamente Active Directory Domain Services (AD DS)",
      "Soportar únicamente aplicaciones basadas en la nube",
      "Extender AD DS a la nube",
      "Proporcionar un sistema de identidad completamente separado de AD DS"
    ],
    "correctAnswer": "Extender AD DS a la nube",
    "categoryId": "azure-services",
    "explaination": "Microsoft Entra Domain Services permite extender funcionalidades tradicionales de Active Directory a Azure sin administrar controladores de dominio."
  },
  {
    "id": 586,
    "text": "Varias máquinas virtuales en el mismo conjunto de disponibilidad se implementan en múltiples dominios de actualización. ¿Contra qué ayudan a proteger los dominios de actualización?",
    "options": [
      "Tiempo de inactividad no planificado",
      "Tiempo de inactividad planificado"
    ],
    "correctAnswer": "Tiempo de inactividad planificado",
    "categoryId": "azure-services",
    "explaination": "Los dominios de actualización ayudan a evitar que todas las máquinas virtuales se actualicen o reinicien al mismo tiempo durante tareas de mantenimiento planificadas."
  },
  {
    "id": 587,
    "text": "¿Cuántas zonas de disponibilidad suelen existir dentro de una sola región de Azure?",
    "options": [
      "Dos",
      "Una",
      "Cuatro",
      "Tres"
    ],
    "correctAnswer": "Tres",
    "categoryId": "azure-services",
    "explaination": "Normalmente una región de Azure cuenta con tres zonas de disponibilidad físicamente separadas para proporcionar alta disponibilidad y tolerancia a fallos."
  },
  {
    "id": 588,
    "text": "¿Cuál es el propósito principal de Microsoft Purview en Azure?",
    "options": [
      "Unificar la gobernanza y el cumplimiento de datos entre distintas fuentes de datos",
      "Monitorear y optimizar el rendimiento de recursos de Azure",
      "Automatizar la implementación y configuración de recursos de Azure",
      "Proporcionar funciones avanzadas de seguridad para recursos de Azure"
    ],
    "correctAnswer": "Unificar la gobernanza y el cumplimiento de datos entre distintas fuentes de datos",
    "categoryId": "azure-management",
    "explaination": "Microsoft Purview permite descubrir, clasificar y administrar datos para asegurar cumplimiento normativo y gobernanza."
  },
  {
    "id": 589,
    "text": "Si dos redes están conectadas mediante peering en diferentes regiones, ¿por qué red viajan los datos entre ellas?",
    "options": [
      "Red global de Microsoft",
      "Internet pública"
    ],
    "correctAnswer": "Red global de Microsoft",
    "categoryId": "azure-services",
    "explaination": "El tráfico entre redes emparejadas en distintas regiones viaja por la red global privada de Microsoft, garantizando seguridad y alto rendimiento."
  },
  {
    "id": 590,
    "text": "¿Qué servicio de Azure se utiliza para hospedar Azure App Services?",
    "options": [
      "Dedicated Host",
      "App Service Plan",
      "Máquina virtual",
      "Grupo de recursos"
    ],
    "correctAnswer": "App Service Plan",
    "categoryId": "azure-services",
    "explaination": "Un App Service Plan define la región, tamaño, escalabilidad y nivel de precios de las aplicaciones hospedadas en Azure App Service."
  },
  {
    "id": 591,
    "text": "¿En qué opción de redundancia de almacenamiento Azure mantiene tres copias de tus archivos distribuidas en tres zonas de una sola región?",
    "options": [
      "GRS",
      "GZRS",
      "ZRS",
      "LRS"
    ],
    "correctAnswer": "ZRS",
    "categoryId": "azure-services",
    "explaination": "ZRS replica los datos en múltiples zonas de disponibilidad dentro de una misma región para mejorar disponibilidad y durabilidad."
  },
  {
    "id": 592,
    "text": "¿Cómo ayudan las instancias reservadas de Azure a lograr previsibilidad de costos?",
    "options": [
      "Ofreciendo pruebas gratuitas para nuevos servicios",
      "Utilizando precios de pago por uso",
      "Habilitando escalado automático",
      "Proporcionando descuentos por compromisos a largo plazo"
    ],
    "correctAnswer": "Proporcionando descuentos por compromisos a largo plazo",
    "categoryId": "azure-management",
    "explaination": "Las instancias reservadas ofrecen descuentos significativos a cambio de compromisos de uno o tres años."
  },
  {
    "id": 593,
    "text": "¿Qué tipo de recurso de Azure permite administrar, configurar y actualizar centralmente una gran cantidad de máquinas virtuales?",
    "options": [
      "Azure App Services",
      "Azure Kubernetes Service",
      "Azure Functions",
      "Virtual Machine Scale Sets"
    ],
    "correctAnswer": "Virtual Machine Scale Sets",
    "categoryId": "azure-services",
    "explaination": "VM Scale Sets permiten administrar y escalar automáticamente múltiples máquinas virtuales según la demanda."
  },
  {
    "id": 594,
    "text": "¿Cuál es un beneficio importante de utilizar computación serverless para aplicaciones con cargas impredecibles?",
    "options": [
      "Mayor complejidad",
      "Reducción de costos operacionales",
      "Administración manual de infraestructura",
      "Estructura de precios fija"
    ],
    "correctAnswer": "Reducción de costos operacionales",
    "categoryId": "cloud-concepts",
    "explaination": "Serverless permite pagar solo por los recursos realmente utilizados, evitando costos de infraestructura inactiva."
  },
  {
    "id": 595,
    "text": "¿Cómo puede Azure Cost Management ayudar a identificar oportunidades de ahorro?",
    "options": [
      "Apagando automáticamente máquinas virtuales inactivas",
      "Proporcionando pronósticos de costos en tiempo real",
      "Analizando el uso de recursos e identificando recursos subutilizados",
      "Recomendando los servicios más baratos de Azure"
    ],
    "correctAnswer": "Analizando el uso de recursos e identificando recursos subutilizados",
    "categoryId": "azure-management",
    "explaination": "Azure Cost Management ayuda a optimizar costos detectando recursos con baja utilización y oportunidades de mejora."
  },
  {
    "id": 596,
    "text": "¿Qué hace difícil estimar el costo de una cuenta de almacenamiento no administrada?",
    "options": [
      "No existe forma de predecir la cantidad de datos almacenados",
      "Se cobra por los datos que ingresan a Azure y es difícil predecirlos",
      "El costo del almacenamiento cambia frecuentemente",
      "Se cobra por los datos que salen de Azure y es difícil predecirlos"
    ],
    "correctAnswer": "Se cobra por los datos que salen de Azure y es difícil predecirlos",
    "categoryId": "azure-management",
    "explaination": "Los costos de salida de datos pueden variar considerablemente y dificultan estimar el gasto total."
  },
  {
    "id": 597,
    "text": "¿Cuál de las siguientes NO es una característica de Azure Functions?",
    "options": [
      "Puede no costarte nada gracias a una capa gratuita generosa",
      "Está diseñado para aplicaciones backend que se ejecutan continuamente",
      "Permite editar código directamente en el portal de Azure",
      "Puede ejecutarse mediante eventos de Azure como la carga de archivos en Blob Storage"
    ],
    "correctAnswer": "Está diseñado para aplicaciones backend que se ejecutan continuamente",
    "categoryId": "azure-services",
    "explaination": "Azure Functions está orientado a cargas de trabajo serverless basadas en eventos, no a procesos que deben ejecutarse permanentemente."
  },
  {
    "id": 598,
    "text": "¿Qué servicio de base de datos está diseñado específicamente para responder extremadamente rápido a solicitudes de pequeñas cantidades de datos, conocido como baja latencia?",
    "options": [
      "SQL Data Warehouse",
      "Cosmos DB",
      "SQL Database",
      "SQL Server en una máquina virtual"
    ],
    "correctAnswer": "Cosmos DB",
    "categoryId": "azure-services",
    "explaination": "Azure Cosmos DB está optimizado para aplicaciones globales de alta velocidad y baja latencia."
  },
  {
    "id": 599,
    "text": "¿Qué recurso de Azure permite dividir uniformemente el tráfico entrante y dirigirlo a varias máquinas virtuales idénticas?",
    "options": [
      "Azure App Services",
      "Virtual Network",
      "Load Balancer o Application Gateway",
      "Azure Logic Apps"
    ],
    "correctAnswer": "Load Balancer o Application Gateway",
    "categoryId": "azure-services",
    "explaination": "Azure Load Balancer y Application Gateway distribuyen el tráfico entre múltiples máquinas virtuales para mejorar disponibilidad y rendimiento."
  },
  {
    "id": 600,
    "text": "¿Cuál es el cobro mínimo mensual por tener una cuenta de Azure aunque no utilices recursos?",
    "options": [
      "Se negocia con el administrador empresarial",
      "$200",
      "$1",
      "$0"
    ],
    "correctAnswer": "$0",
    "categoryId": "azure-management",
    "explaination": "Azure no cobra una tarifa mínima mensual; solo se paga por los recursos utilizados."
  },
  {
    "id": 601,
    "text": "¿Qué servicio de Azure es la oferta recomendada de identidad como servicio?",
    "options": [
      "Identity and Access Management (IAM)",
      "Azure Portal",
      "Azure Front Door",
      "Azure Active Directory"
    ],
    "correctAnswer": "Azure Active Directory",
    "categoryId": "azure-services",
    "explaination": "Azure Active Directory proporciona autenticación, autorización y administración de identidades para aplicaciones y servicios."
  },
  {
    "id": 602,
    "text": "¿Qué significa el concepto de regiones emparejadas en Azure?",
    "options": [
      "Los empleados de Azure en esas regiones realizan actividades juntos",
      "El código se despliega automáticamente en otra región como respaldo",
      "Cada región tiene otra región emparejada en otro país para respaldos",
      "Cada región tiene al menos otra región emparejada con conexiones de alta velocidad y coordinación para evitar caídas simultáneas"
    ],
    "correctAnswer": "Cada región tiene al menos otra región emparejada con conexiones de alta velocidad y coordinación para evitar caídas simultáneas",
    "categoryId": "azure-services",
    "explaination": "Las regiones emparejadas ofrecen resiliencia y recuperación ante desastres mediante conexiones rápidas y mantenimiento coordinado."
  },
  {
    "id": 603,
    "text": "Selecciona todas las características que forman parte de Azure AD.",
    "options": [
      "Administración de dispositivos",
      "Inicio de sesión único (SSO)",
      "Smart Lockout",
      "Lista personalizada de contraseñas prohibidas",
      "Reglas de alerta de registros"
    ],
    "correctAnswers": [
      "Inicio de sesión único (SSO)",
      "Smart Lockout",
      "Lista personalizada de contraseñas prohibidas"
    ],
    "categoryId": "azure-services",
    "explaination": "Azure AD incluye funcionalidades como SSO, Smart Lockout y políticas avanzadas de contraseñas para mejorar la seguridad."
  },
  {
    "id": 604,
    "text": "¿Qué es el concepto de Big Data?",
    "options": [
      "Un conjunto de servicios de Azure para ejecutar código sin administrar servidores",
      "Una forma de inteligencia artificial que aprende automáticamente",
      "Un conjunto extremadamente grande de datos que requiere tecnologías especializadas para análisis",
      "Un pequeño sensor que envía constantemente información a la nube"
    ],
    "correctAnswer": "Un conjunto extremadamente grande de datos que requiere tecnologías especializadas para análisis",
    "categoryId": "cloud-concepts",
    "explaination": "Big Data se refiere a conjuntos de datos tan grandes o complejos que requieren herramientas especializadas para procesarlos y analizarlos."
  },
  {
    "id": 605,
    "text": "¿Qué característica de seguridad adicional opcional ofrece Application Gateway sobre un Load Balancer tradicional?",
    "options": [
      "Web Application Firewall (WAF)",
      "Autenticación multifactor",
      "Protección avanzada contra DDoS",
      "Azure AD Advanced Information Protection"
    ],
    "correctAnswer": "Web Application Firewall (WAF)",
    "categoryId": "azure-services",
    "explaination": "Application Gateway puede incluir WAF para proteger aplicaciones web frente a amenazas como inyección SQL y ataques XSS."
  },
  {
    "id": 606,
    "text": "¿Cuál de las siguientes opciones NO es un ejemplo de infraestructura como servicio (IaaS)?",
    "options": [
      "Virtual Network",
      "Azure SQL Database",
      "Máquina virtual",
      "SQL Server en una máquina virtual",
      "Virtual Machine Scale Sets"
    ],
    "correctAnswer": "Azure SQL Database",
    "categoryId": "cloud-concepts",
    "explaination": "Azure SQL Database es un servicio PaaS porque Microsoft administra el mantenimiento, la seguridad y el escalado. Los demás ejemplos corresponden a IaaS."
  },
  {
    "id": 607,
    "text": "¿Cuál sería una buena razón para tener múltiples suscripciones de Azure?",
    "options": [
      "Existe una sola persona o tarjeta de crédito pagando los recursos, pero muchas personas necesitan administrar recursos completamente aislados entre clientes",
      "Existe una sola persona administrando todos los recursos y solo se quiere identificar qué recursos pertenecen a cada cliente"
    ],
    "correctAnswer": "Existe una sola persona o tarjeta de crédito pagando los recursos, pero muchas personas necesitan administrar recursos completamente aislados entre clientes",
    "categoryId": "azure-management",
    "explaination": "Las suscripciones proporcionan límites de seguridad, facturación y cumplimiento, ideales para aislar recursos entre distintos clientes."
  },
  {
    "id": 608,
    "text": "¿Cuál de las siguientes opciones es un buen ejemplo de nube híbrida?",
    "options": [
      "Tecnología para crear tejido vivo sobre un exoesqueleto",
      "Una aplicación móvil que utiliza una base de datos en la nube",
      "Un servidor local que utiliza almacenamiento en la nube para ampliar su capacidad",
      "Usuarios dentro de la red corporativa utilizando aplicaciones en la nube"
    ],
    "correctAnswer": "Un servidor local que utiliza almacenamiento en la nube para ampliar su capacidad",
    "categoryId": "cloud-concepts",
    "explaination": "La nube híbrida combina infraestructura local con servicios en la nube para extender capacidades y recursos."
  },
  {
    "id": 609,
    "text": "¿Por qué un usuario y contraseña a veces no son suficientes para demostrar la identidad de una persona?",
    "options": [
      "Las credenciales pueden ser utilizadas por terceros como hackers, ex empleados o compañeros de trabajo",
      "Las contraseñas deben cifrarse antes de almacenarse",
      "Las contraseñas suelen olvidarse fácilmente",
      "Algunas personas podrían elegir el mismo usuario y contraseña"
    ],
    "correctAnswer": "Las credenciales pueden ser utilizadas por terceros como hackers, ex empleados o compañeros de trabajo",
    "categoryId": "azure-management",
    "explaination": "Las contraseñas pueden verse comprometidas, por lo que se recomienda usar MFA para verificar adicionalmente la identidad."
  },
  {
    "id": 610,
    "text": "¿Cuál es el SLA de Azure para dos o más máquinas virtuales en un conjunto de disponibilidad?",
    "options": [
      "99.90%",
      "99.99%",
      "100%",
      "99.95%"
    ],
    "correctAnswer": "99.95%",
    "categoryId": "azure-services",
    "explaination": "Azure ofrece un SLA de 99.95% para dos o más máquinas virtuales configuradas en un Availability Set."
  },
  {
    "id": 611,
    "text": "¿Qué herramienta de Azure incluye Azure Status, Service Health y Resource Health?",
    "options": [
      "Azure Advisor",
      "Azure Dashboard",
      "Azure Service Health",
      "Azure Monitor"
    ],
    "correctAnswer": "Azure Service Health",
    "categoryId": "azure-management",
    "explaination": "Azure Service Health proporciona información sobre el estado global de los servicios y recursos de Azure."
  },
  {
    "id": 612,
    "text": "¿Cómo se obtiene acceso a servicios en modo Private Preview?",
    "options": [
      "Debes solicitar acceso",
      "Están disponibles directamente en Marketplace",
      "Debes aceptar términos de uso",
      "No es posible utilizar servicios en Private Preview"
    ],
    "correctAnswer": "Debes solicitar acceso",
    "categoryId": "azure-services",
    "explaination": "Los servicios en Private Preview requieren aprobación previa por parte de Microsoft antes de poder utilizarlos."
  },
  {
    "id": 613,
    "text": "¿Qué modelo de computación en la nube requiere el mayor nivel de participación del cliente en el mantenimiento del sistema operativo y sistema de archivos?",
    "options": [
      "PaaS",
      "FaaS",
      "SaaS",
      "IaaS"
    ],
    "correctAnswer": "IaaS",
    "categoryId": "cloud-concepts",
    "explaination": "En IaaS el cliente administra el sistema operativo, aplicaciones y configuraciones, mientras el proveedor administra el hardware."
  },
  {
    "id": 614,
    "text": "¿Qué regulación de privacidad y protección de datos entró en vigor en Europa en mayo de 2018?",
    "options": [
      "PCI DSS",
      "FedRAMP",
      "ISO 9001:2015",
      "GDPR"
    ],
    "correctAnswer": "GDPR",
    "categoryId": "azure-management",
    "explaination": "GDPR establece normas estrictas para proteger la privacidad y los datos personales de los ciudadanos de la Unión Europea."
  },
  {
    "id": 615,
    "text": "¿Cuál es el SLA para dos o más máquinas virtuales de Azure colocadas manualmente en diferentes zonas de disponibilidad dentro de la misma región?",
    "options": [
      "100%",
      "99.95%",
      "99.99%",
      "99.90%"
    ],
    "correctAnswer": "99.99%",
    "categoryId": "azure-services",
    "explaination": "Azure ofrece un SLA de 99.99% para máquinas virtuales distribuidas entre distintas zonas de disponibilidad."
  },
  {
    "id": 616,
    "text": "¿Cuál de las siguientes opciones se considera una desventaja del gasto de capital (CapEx)?",
    "options": [
      "No requiere mucho dinero inicial",
      "No se garantiza obtener ganancias",
      "Debes esperar años para depreciar la inversión en impuestos",
      "Puedes deducir gastos a medida que ocurren"
    ],
    "correctAnswer": "Debes esperar años para depreciar la inversión en impuestos",
    "categoryId": "cloud-concepts",
    "explaination": "CapEx implica grandes inversiones iniciales que deben depreciarse durante varios años."
  },
  {
    "id": 617,
    "text": "Azure Cloud Shell permite acceder a consolas Bash y PowerShell desde el portal de Azure.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Azure Cloud Shell proporciona acceso directo a Bash y PowerShell desde el navegador sin instalar herramientas locales."
  },
  {
    "id": 618,
    "text": "¿Qué significa que un servicio esté en modo General Availability (GA)?",
    "options": [
      "Debes solicitar acceso para usar el servicio",
      "Cualquiera puede usarlo pero no en producción",
      "Cualquiera puede usar el servicio para cualquier propósito",
      "El servicio está en Public Preview y tiene soporte de Microsoft"
    ],
    "correctAnswer": "Cualquiera puede usar el servicio para cualquier propósito",
    "categoryId": "azure-services",
    "explaination": "General Availability indica que el servicio está completamente disponible, estable y soportado para producción."
  },
  {
    "id": 619,
    "text": "¿En cuál de los siguientes escenarios Azure Policy sería el método recomendado para aplicar reglas?",
    "options": [
      "Agregar una advertencia al crear recursos sin etiquetas",
      "Obligar a una máquina virtual a instalar automáticamente los últimos parches",
      "Permitir solo ciertos roles de usuario en un grupo de recursos",
      "Evitar que se usen ciertos tamaños de máquinas virtuales en un grupo de recursos"
    ],
    "correctAnswer": "Evitar que se usen ciertos tamaños de máquinas virtuales en un grupo de recursos",
    "categoryId": "azure-management",
    "explaination": "Azure Policy permite restringir configuraciones y tipos de recursos para cumplir estándares organizacionales."
  },
  {
    "id": 620,
    "text": "¿Qué significa ARM en Azure?",
    "options": [
      "Azure Resource Manager",
      "Advance Risks Machine",
      "Availability Reliability Maintainability",
      "Account Resource Manager"
    ],
    "correctAnswer": "Azure Resource Manager",
    "categoryId": "azure-management",
    "explaination": "Azure Resource Manager es el servicio de implementación y administración de recursos en Azure."
  },
  {
    "id": 621,
    "text": "¿Qué tipo de archivos puede acelerar una red de entrega de contenido (CDN)?",
    "options": [
      "Imágenes",
      "Videos",
      "Archivos JavaScript",
      "PDFs"
    ],
    "correctAnswers": [
      "Imágenes",
      "Videos",
      "Archivos JavaScript",
      "PDFs"
    ],
    "categoryId": "azure-services",
    "explaination": "Una CDN mejora la entrega de contenido estático como imágenes, videos, scripts y documentos almacenándolos en caché globalmente."
  },
  {
    "id": 622,
    "text": "¿Cuál es la cantidad máxima de almacenamiento que puede tener una sola suscripción de Azure?",
    "options": [
      "5 PB",
      "2 TB",
      "500 GB",
      "Prácticamente ilimitado"
    ],
    "correctAnswer": "Prácticamente ilimitado",
    "categoryId": "azure-services",
    "explaination": "Aunque las cuentas individuales tienen límites, una suscripción puede escalar prácticamente sin límites utilizando múltiples cuentas de almacenamiento."
  },
  {
    "id": 623,
    "text": "¿Qué concepto representa la capacidad de ejecutar rápidamente aplicaciones y datos en otro entorno?",
    "options": [
      "Azure DevOps",
      "Implementaciones reproducibles",
      "Azure Blueprint",
      "Continuidad del negocio o recuperación ante desastres"
    ],
    "correctAnswer": "Implementaciones reproducibles",
    "categoryId": "cloud-concepts",
    "explaination": "Las implementaciones reproducibles permiten recrear entornos de manera consistente usando automatización e infraestructura como código."
  },
  {
    "id": 624,
    "text": "Además de Azure Service Health, ¿dónde puedes revisar problemas que afecten la red global de Azure y tus recursos?",
    "options": [
      "Azure Updates Blog",
      "La aplicación móvil de Azure",
      "Resource Health de cada máquina virtual",
      "Azure enviará un correo electrónico"
    ],
    "correctAnswer": "Resource Health de cada máquina virtual",
    "categoryId": "azure-management",
    "explaination": "Resource Health proporciona información específica sobre el estado y problemas de recursos individuales."
  },
  {
    "id": 625,
    "text": "¿De qué manera la autenticación multifactor (MFA) aumenta la seguridad de una cuenta de usuario?",
    "options": [
      "Requiere que el usuario posea algo como un teléfono, aplicación móvil o identificación biométrica",
      "No aumenta la seguridad, solo el acceso",
      "Requiere funcionalidad de inicio de sesión único",
      "Requiere aprobación manual antes del primer inicio de sesión"
    ],
    "correctAnswer": "Requiere que el usuario posea algo como un teléfono, aplicación móvil o identificación biométrica",
    "categoryId": "azure-management",
    "explaination": "MFA agrega capas adicionales de verificación, haciendo mucho más difícil el acceso no autorizado."
  },
  {
    "id": 626,
    "text": "¿Cuál de los siguientes elementos se considera parte de la capa perimetral de seguridad?",
    "options": [
      "Mantener los sistemas operativos actualizados con parches",
      "Cerraduras en las puertas del centro de datos",
      "Usar un firewall",
      "Separar servidores en subredes distintas según su rol"
    ],
    "correctAnswer": "Usar un firewall",
    "categoryId": "azure-management",
    "explaination": "La capa perimetral de seguridad protege el límite externo de la red. Los firewalls filtran el tráfico y bloquean conexiones maliciosas antes de que lleguen a los sistemas internos."
  },
  {
    "id": 627,
    "text": "¿Cuál es el beneficio de usar PowerShell en lugar de Azure CLI?",
    "options": [
      "No hay beneficio, son iguales",
      "Es más barato",
      "Comandos más potentes",
      "Despliegue más rápido de máquinas virtuales"
    ],
    "correctAnswer": "Comandos más potentes",
    "categoryId": "azure-management",
    "explaination": "PowerShell ofrece scripting orientado a objetos, integración profunda con Windows y automatización avanzada para tareas administrativas complejas."
  },
  {
    "id": 628,
    "text": "Azure cobra por el ancho de banda de entrada hacia Azure.",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Falso",
    "categoryId": "azure-management",
    "explaination": "Azure normalmente no cobra por la transferencia de datos entrante. Los costos se aplican principalmente a los datos que salen de Azure."
  },
  {
    "id": 629,
    "text": "¿Cuál es el beneficio de usar herramientas de línea de comandos como PowerShell o Azure CLI en lugar del portal de Azure?",
    "options": [
      "Es más barato",
      "Despliegue más rápido de máquinas virtuales",
      "Automatización"
    ],
    "correctAnswer": "Automatización",
    "categoryId": "azure-management",
    "explaination": "PowerShell y Azure CLI permiten automatizar tareas repetitivas, implementar infraestructura como código y administrar entornos de manera eficiente."
  },
  {
    "id": 630,
    "text": "¿Qué dos tipos de protección DDoS ofrece Azure? (Selecciona dos)",
    "options": [
      "DDoS Advanced Protection",
      "DDoS IP Protection",
      "DDoS Network Protection",
      "DDoS Premium Protection"
    ],
    "correctAnswers": [
      "DDoS Advanced Protection",
      "DDoS IP Protection"
    ],
    "categoryId": "azure-services",
    "explaination": "Azure ofrece DDoS IP Protection y DDoS Advanced Protection para mitigar ataques de denegación de servicio distribuido."
  },
  {
    "id": 631,
    "text": "¿Qué producto de Azure permite escalar automáticamente máquinas virtuales desde 1 hasta 1000 instancias y además incluye balanceo de carga integrado?",
    "options": [
      "Azure Virtual Machines",
      "Azure App Services",
      "Application Gateway",
      "Virtual Machine Scale Sets"
    ],
    "correctAnswers": [
      "Virtual Machine Scale Sets"
    ],
    "categoryId": "azure-services",
    "explaination": "Virtual Machine Scale Sets permite escalar automáticamente máquinas virtuales y distribuir tráfico mediante balanceo de carga integrado."
  },
  {
    "id": 632,
    "text": "En el contexto de privacidad y cumplimiento, ¿qué significa el acrónimo ISO?",
    "options": [
      "Instead Of",
      "Information System Officer",
      "International Organization for Standardization",
      "Intelligence and Security Office"
    ],
    "correctAnswers": [
      "International Organization for Standardization"
    ],
    "categoryId": "azure-management",
    "explaination": "ISO es una organización internacional que desarrolla estándares relacionados con seguridad, privacidad y cumplimiento."
  },
  {
    "id": 633,
    "text": "¿Dónde se encuentran dentro del portal de Azure las máquinas virtuales de terceros y otras ofertas?",
    "options": [
      "Azure Mobile App",
      "Elegir una imagen al crear una VM",
      "Azure Marketplace",
      "Bing"
    ],
    "correctAnswers": [
      "Azure Marketplace"
    ],
    "categoryId": "azure-services",
    "explaination": "Azure Marketplace permite descubrir e implementar imágenes de máquinas virtuales, aplicaciones y servicios de terceros."
  },
  {
    "id": 634,
    "text": "¿Cuáles son formas de aumentar la seguridad de un sistema tradicional de usuario y contraseña? (Selecciona todas las que correspondan)",
    "options": [
      "Exigir contraseñas más largas y complejas",
      "Permitir acceso solo desde dispositivos registrados por la empresa",
      "Usar autenticación multifactor (MFA)",
      "Obligar a cambiar contraseñas con más frecuencia"
    ],
    "correctAnswers": [
      "Exigir contraseñas más largas y complejas",
      "Permitir acceso solo desde dispositivos registrados por la empresa",
      "Usar autenticación multifactor (MFA)"
    ],
    "categoryId": "azure-management",
    "explaination": "El uso de contraseñas seguras, dispositivos confiables y MFA mejora considerablemente la protección de cuentas."
  },
  {
    "id": 635,
    "text": "¿Cuántas regiones de Azure existen en Brasil?",
    "options": [
      "Una",
      "Cuatro",
      "Dos",
      "Ninguna"
    ],
    "correctAnswer": "Dos",
    "categoryId": "azure-services",
    "explaination": "Azure cuenta con las regiones Brazil South y Brazil Southeast."
  },
  {
    "id": 636,
    "text": "¿Qué representa el concepto de disponibilidad?",
    "options": [
      "El porcentaje de tiempo en que un sistema responde correctamente a las solicitudes",
      "Un sistema que escala automáticamente según la demanda",
      "Un sistema debe tener 100% de uptime para considerarse disponible",
      "Un sistema con un único punto de falla"
    ],
    "correctAnswer": "El porcentaje de tiempo en que un sistema responde correctamente a las solicitudes",
    "categoryId": "cloud-concepts",
    "explaination": "La disponibilidad mide cuánto tiempo un sistema permanece operativo y accesible, normalmente expresado como porcentaje."
  },
  {
    "id": 637,
    "text": "¿Por qué Azure App Services se considera una plataforma como servicio (PaaS)?",
    "options": [
      "Entregas el código y configuración a Azure sin acceso al hardware subyacente",
      "Eres responsable de mantener actualizado el sistema operativo",
      "Puedes elegir el tipo exacto de máquina virtual",
      "Azure App Services no es PaaS, es SaaS"
    ],
    "correctAnswer": "Entregas el código y configuración a Azure sin acceso al hardware subyacente",
    "categoryId": "cloud-concepts",
    "explaination": "Azure administra infraestructura, red y sistema operativo mientras los desarrolladores solo gestionan la aplicación."
  },
  {
    "id": 638,
    "text": "¿Cuál es un beneficio de las economías de escala?",
    "options": [
      "Mientras más compras, más barato resulta",
      "Los precios siempre bajan cada año",
      "Las grandes empresas no necesitan obtener ganancias",
      "Las grandes empresas no necesitan ganar dinero en cada venta"
    ],
    "correctAnswer": "Mientras más compras, más barato resulta",
    "categoryId": "cloud-concepts",
    "explaination": "Las economías de escala permiten reducir costos unitarios a medida que aumenta el uso de servicios."
  },
  {
    "id": 639,
    "text": "¿Qué servicio gratuito de seguridad de Azure revisa el tráfico de red de una subred según reglas antes de permitirlo o bloquearlo?",
    "options": [
      "Azure Firewall",
      "Advanced Threat Protection",
      "Network Security Group",
      "Azure DDoS Protection"
    ],
    "correctAnswer": "Network Security Group",
    "categoryId": "azure-services",
    "explaination": "Los NSG filtran tráfico entrante y saliente usando reglas de seguridad aplicadas a subredes o interfaces de red."
  },
  {
    "id": 640,
    "text": "¿Qué significa que un servicio de Azure esté en Public Preview?",
    "options": [
      "Debes solicitar acceso",
      "Cualquiera puede usarlo pero no se recomienda para producción",
      "Solo está disponible para empresas",
      "Ya está en disponibilidad general"
    ],
    "correctAnswer": "Cualquiera puede usarlo pero no se recomienda para producción",
    "categoryId": "azure-services",
    "explaination": "Los servicios en Public Preview están disponibles para pruebas, pero aún pueden cambiar y no se recomiendan para entornos productivos."
  },
  {
    "id": 641,
    "text": "¿Cuántas suscripciones puede tener asociadas una sola cuenta de Azure?",
    "options": [
      "10",
      "1",
      "Sin límite",
      "250 por región"
    ],
    "correctAnswer": "Sin límite",
    "categoryId": "azure-management",
    "explaination": "Una cuenta de Azure puede administrar múltiples suscripciones para distintos proyectos, equipos o entornos."
  },
  {
    "id": 642,
    "text": "¿En qué estado de Estados Unidos se encuentra la región East US 2?",
    "options": [
      "Virginia",
      "Iowa",
      "Texas",
      "California"
    ],
    "correctAnswer": "Virginia",
    "categoryId": "azure-services",
    "explaination": "La región East US 2 está ubicada en Virginia."
  },
  {
    "id": 643,
    "text": "¿Cuál es la recomendación para asegurar los protocolos RDP y SSH en servidores?",
    "options": [
      "Usar contraseñas fuertes",
      "No exponer directamente RDP ni SSH a Internet y utilizar Azure Bastion o VPN",
      "Deshabilitar RDP completamente",
      "No habilitar SSH en Linux"
    ],
    "correctAnswer": "No exponer directamente RDP ni SSH a Internet y utilizar Azure Bastion o VPN",
    "categoryId": "azure-management",
    "explaination": "Exponer RDP o SSH directamente a Internet aumenta el riesgo de ataques. Azure Bastion proporciona acceso seguro sin abrir puertos públicos."
  },
  {
    "id": 644,
    "text": "¿Aproximadamente cuántas regiones tiene Azure en el mundo?",
    "options": [
      "10",
      "60+",
      "40",
      "25"
    ],
    "correctAnswer": "60+",
    "categoryId": "azure-services",
    "explaination": "Azure cuenta con más de 60 regiones distribuidas globalmente."
  },
  {
    "id": 645,
    "text": "Si eres una entidad gubernamental federal, estatal, local o tribal de Estados Unidos, ¿qué opción de Azure deberías considerar?",
    "options": [
      "Azure Government",
      "Azure no está disponible para gobiernos",
      "Azure Department of Defense",
      "Azure Public Portal"
    ],
    "correctAnswer": "Azure Government",
    "categoryId": "azure-services",
    "explaination": "Azure Government ofrece entornos aislados y compatibles con regulaciones específicas del gobierno de Estados Unidos."
  },
  {
    "id": 646,
    "text": "¿Cómo mejora la seguridad general un modelo de defensa en profundidad?",
    "options": [
      "Eliminando la necesidad de capacitación de usuarios",
      "Simplificando la infraestructura de seguridad",
      "Reduciendo la necesidad de actualizaciones de seguridad",
      "Haciendo más difícil que los atacantes atraviesen múltiples capas de seguridad"
    ],
    "correctAnswer": "Haciendo más difícil que los atacantes atraviesen múltiples capas de seguridad",
    "categoryId": "azure-management",
    "explaination": "El modelo de defensa en profundidad mejora la seguridad implementando múltiples capas de protección, como firewalls, cifrado, controles de acceso y monitoreo. Incluso si una capa es vulnerada, las demás continúan protegiendo el sistema."
  },
  {
    "id": 647,
    "text": "¿Qué servicio de Azure puede utilizarse para crear una aplicación altamente disponible en múltiples zonas de disponibilidad?",
    "options": [
      "Azure App Service",
      "Azure Storage",
      "Todas las respuestas son correctas",
      "Azure Virtual Machines"
    ],
    "correctAnswer": "Todas las respuestas son correctas",
    "categoryId": "azure-services",
    "explaination": "Azure App Service, Azure Storage y Azure Virtual Machines admiten alta disponibilidad utilizando zonas de disponibilidad, proporcionando redundancia y tolerancia a fallos."
  },
  {
    "id": 648,
    "text": "¿Qué significa redundancia en el contexto de Azure?",
    "options": [
      "Implementar recuperación ante desastres en un centro de datos secundario",
      "Monitorear la salud del sistema para detectar problemas",
      "Usar una sola instancia de un recurso",
      "Tener múltiples copias de un recurso para garantizar disponibilidad"
    ],
    "correctAnswer": "Tener múltiples copias de un recurso para garantizar disponibilidad",
    "categoryId": "azure-services",
    "explaination": "La redundancia en Azure consiste en mantener múltiples copias de recursos, como datos o máquinas virtuales, para garantizar disponibilidad y tolerancia a fallos."
  },
  {
    "id": 649,
    "text": "En el modelo de responsabilidad compartida en la nube, ¿quién suele ser responsable de proteger los datos del cliente?",
    "options": [
      "El proveedor y el cliente son igualmente responsables",
      "El cliente",
      "Nadie es realmente responsable",
      "El proveedor de la nube"
    ],
    "correctAnswer": "El cliente",
    "categoryId": "azure-management",
    "explaination": "En el modelo de responsabilidad compartida, el proveedor protege la infraestructura física y de red, mientras que el cliente es responsable de proteger sus datos, aplicaciones y configuraciones."
  },
  {
    "id": 650,
    "text": "¿Cuál es un beneficio clave de utilizar Azure Budgets?",
    "options": [
      "Aplicar políticas de seguridad",
      "Automatizar aprovisionamiento de recursos",
      "Establecer límites y alertas de gasto",
      "Optimizar el rendimiento de máquinas virtuales"
    ],
    "correctAnswer": "Establecer límites y alertas de gasto",
    "categoryId": "azure-management",
    "explaination": "Azure Budgets permite controlar costos estableciendo presupuestos y alertas cuando el consumo se acerca o supera los límites definidos."
  },
  {
    "id": 651,
    "text": "¿Cómo ayuda Azure Policy a administrar recursos de Azure?",
    "options": [
      "Optimizando el uso y costo de recursos",
      "Proporcionando alertas de seguridad en tiempo real",
      "Definiendo reglas que gobiernan configuración y uso de recursos",
      "Escalando recursos automáticamente"
    ],
    "correctAnswer": "Definiendo reglas que gobiernan configuración y uso de recursos",
    "categoryId": "azure-management",
    "explaination": "Azure Policy permite aplicar reglas y estándares corporativos para garantizar cumplimiento, auditoría y control de configuraciones."
  },
  {
    "id": 652,
    "text": "¿Cuál es el propósito principal de Azure B2B Collaboration?",
    "options": [
      "Proporcionar administración de identidades para aplicaciones en la nube",
      "Permitir acceso a usuarios externos de otras organizaciones",
      "Administrar identidades internas",
      "Permitir compras desde un sitio web corporativo"
    ],
    "correctAnswer": "Permitir acceso a usuarios externos de otras organizaciones",
    "categoryId": "azure-management",
    "explaination": "Azure B2B permite colaborar de forma segura con usuarios externos, como socios, contratistas o proveedores, manteniendo el control de seguridad y cumplimiento."
  },
  {
    "id": 653,
    "text": "¿Qué tipo de escalado implica agregar más recursos a un conjunto existente?",
    "options": [
      "Escalado horizontal",
      "Escalado vertical",
      "Escalado hacia arriba"
    ],
    "correctAnswer": "Escalado horizontal",
    "categoryId": "azure-services",
    "explaination": "El escalado horizontal agrega más instancias de recursos para distribuir la carga de trabajo y mejorar disponibilidad y rendimiento."
  },
  {
    "id": 654,
    "text": "¿Qué modelo de precios en la nube es ideal para cargas de trabajo predecibles y de largo plazo?",
    "options": [
      "Serverless",
      "Pago por uso",
      "Spot instances",
      "Instancias reservadas"
    ],
    "correctAnswer": "Instancias reservadas",
    "categoryId": "azure-management",
    "explaination": "Las instancias reservadas ofrecen descuentos significativos a cambio de compromisos de uno o tres años, siendo ideales para cargas de trabajo estables."
  },
  {
    "id": 655,
    "text": "¿Cuál es un beneficio clave de Microsoft Entra Domain Services?",
    "options": [
      "Proporcionar un dominio administrado en la nube sin controladores de dominio locales",
      "Administrar Active Directory local",
      "Ser solo apto para pequeñas implementaciones",
      "Reemplazar Azure Active Directory"
    ],
    "correctAnswer": "Proporcionar un dominio administrado en la nube sin controladores de dominio locales",
    "categoryId": "azure-services",
    "explaination": "Microsoft Entra Domain Services ofrece servicios administrados de dominio como LDAP, unión a dominio y directivas de grupo sin administrar controladores de dominio."
  },
  {
    "id": 656,
    "text": "¿Qué modelo de servicio en la nube es necesario para ejecutar una aplicación que requiere acceso al registro de Windows?",
    "options": [
      "Serverless",
      "IaaS",
      "SaaS",
      "PaaS"
    ],
    "correctAnswer": "IaaS",
    "categoryId": "cloud-concepts",
    "explaination": "IaaS proporciona control total sobre el sistema operativo y permite modificar el registro de Windows, algo que no es posible en PaaS o SaaS."
  },
  {
    "id": 657,
    "text": "¿Cómo ayuda el modelo basado en consumo a administrar costos de TI?",
    "options": [
      "Alineando costos con el uso real",
      "Limitando el uso de recursos",
      "Requiriendo inversiones iniciales",
      "Incrementando compromisos a largo plazo"
    ],
    "correctAnswer": "Alineando costos con el uso real",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo de pago por uso permite pagar únicamente por los recursos consumidos, evitando inversiones innecesarias."
  },
  {
    "id": 658,
    "text": "¿Cómo se denomina un entorno donde una empresa utiliza infraestructura local y la nube para escalar temporalmente?",
    "options": [
      "Nube pública",
      "Nube privada",
      "Autoescalado",
      "Nube híbrida"
    ],
    "correctAnswer": "Nube híbrida",
    "categoryId": "cloud-concepts",
    "explaination": "La nube híbrida combina infraestructura local con recursos en la nube para ampliar capacidad cuando es necesario."
  },
  {
    "id": 659,
    "text": "¿Cómo ayuda la alta disponibilidad a evitar pérdidas financieras?",
    "options": [
      "Incrementando el tiempo fuera de servicio",
      "Garantizando continuidad de ingresos",
      "Previniendo pérdida de datos",
      "Reduciendo costos operativos"
    ],
    "correctAnswer": "Garantizando continuidad de ingresos",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad minimiza interrupciones del servicio, permitiendo que las empresas continúen operando y generando ingresos."
  },
  {
    "id": 660,
    "text": "¿Qué propiedad describe la capacidad de una aplicación en la nube para aumentar y reducir recursos automáticamente según la demanda?",
    "options": [
      "Alta disponibilidad",
      "Escalabilidad",
      "Predictibilidad",
      "Administrabilidad"
    ],
    "correctAnswer": "Escalabilidad",
    "categoryId": "cloud-concepts",
    "explaination": "La escalabilidad permite adaptar automáticamente recursos según la demanda, optimizando rendimiento y costos."
  },
  {
    "id": 661,
    "text": "¿Cuál es el propósito principal de Azure Data Box?",
    "options": [
      "Crear máquinas virtuales",
      "Desarrollar aplicaciones web",
      "Monitorear uso de recursos",
      "Transferir grandes volúmenes de datos hacia y desde Azure"
    ],
    "correctAnswer": "Transferir grandes volúmenes de datos hacia y desde Azure",
    "categoryId": "azure-services",
    "explaination": "Azure Data Box es un dispositivo físico diseñado para transferir grandes cantidades de datos de manera segura cuando la transferencia por red no es práctica."
  },
  {
    "id": 662,
    "text": "¿Qué beneficio de administrabilidad representa el escalado automático de máquinas virtuales?",
    "options": [
      "Administración de la nube",
      "Administración en la nube"
    ],
    "correctAnswer": "Administración en la nube",
    "categoryId": "cloud-concepts",
    "explaination": "La administración en la nube se refiere a capacidades automáticas del entorno cloud, como escalado y aprovisionamiento dinámico."
  },
  {
    "id": 663,
    "text": "¿Qué práctica representa auditar regularmente recursos cloud para cumplir regulaciones y estándares corporativos?",
    "options": [
      "Escalabilidad",
      "Confiabilidad",
      "Gobernanza",
      "Enfoque reactivo"
    ],
    "correctAnswer": "Gobernanza",
    "categoryId": "azure-management",
    "explaination": "La gobernanza en la nube implica políticas, auditorías y controles para garantizar cumplimiento y uso adecuado de recursos."
  },
  {
    "id": 664,
    "text": "¿Cuáles de los siguientes son roles integrados de Azure RBAC?",
    "options": [
      "Reader",
      "Owner",
      "User",
      "Contributor"
    ],
    "correctAnswer": "Reader, Owner, Contributor",
    "categoryId": "azure-management",
    "explaination": "Reader, Owner y Contributor son roles integrados de Azure RBAC. Reader permite visualizar recursos, Contributor administrarlos y Owner tiene control total."
  },
  {
    "id": 665,
    "text": "¿Cuál de los siguientes es un ejemplo de una oferta IaaS en Azure?",
    "options": [
      "Azure SQL Database",
      "Azure Virtual Machines",
      "Azure App Service",
      "Azure Functions"
    ],
    "correctAnswer": "Azure Virtual Machines",
    "categoryId": "cloud-concepts",
    "explaination": "Azure Virtual Machines es un servicio IaaS porque proporciona recursos de cómputo virtualizados donde el cliente administra el sistema operativo y aplicaciones."
  },
  {
    "id": 666,
    "text": "¿Cuál es el número máximo de aplicaciones web que puede soportar un único plan App Service Premium V3?",
    "options": [
      "100",
      "1",
      "10",
      "Ilimitado"
    ],
    "correctAnswer": "Ilimitado",
    "categoryId": "azure-services",
    "explaination": "El plan Premium V3 de Azure App Service no tiene un límite predefinido de aplicaciones web. Sin embargo, la cantidad real depende de la capacidad de recursos del plan y la carga de las aplicaciones."
  },
  {
    "id": 667,
    "text": "¿Cómo pueden utilizarse las etiquetas (tags) para optimizar costos en Azure?",
    "options": [
      "Apagando automáticamente recursos subutilizados",
      "Identificando recursos que pueden migrarse a un nivel más económico",
      "Categorizando recursos según costo y uso",
      "Aplicando descuentos automáticos a recursos etiquetados"
    ],
    "correctAnswer": "Categorizando recursos según costo y uso",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas permiten organizar recursos por metadatos como departamento, centro de costos o entorno, facilitando el análisis y optimización de gastos."
  },
  {
    "id": 668,
    "text": "¿En qué opción de redundancia Azure mantiene seis copias de los archivos en dos regiones?",
    "options": [
      "ZRS",
      "LRS",
      "GRS"
    ],
    "correctAnswer": "GRS",
    "categoryId": "azure-services",
    "explaination": "Geo-Redundant Storage (GRS) mantiene tres copias en la región primaria y tres copias adicionales en una región secundaria geográficamente separada."
  },
  {
    "id": 669,
    "text": "¿Qué opción de conectividad de Azure proporciona conexión privada desde una red corporativa local hacia Azure sin usar Internet pública?",
    "options": [
      "VPN Site-to-Site",
      "Azure Global Peering",
      "Azure ExpressRoute",
      "VPN Point-to-Site"
    ],
    "correctAnswer": "Azure ExpressRoute",
    "categoryId": "azure-services",
    "explaination": "Azure ExpressRoute ofrece conexiones privadas dedicadas entre redes locales y Azure, proporcionando mayor seguridad, menor latencia y mayor confiabilidad."
  },
  {
    "id": 670,
    "text": "¿Qué significa predictibilidad en el contexto de Azure?",
    "options": [
      "La capacidad de prever costos futuros con precisión",
      "La capacidad de evitar cargos inesperados",
      "La capacidad de asignar costos a recursos específicos",
      "La capacidad de reducir costos con el tiempo"
    ],
    "correctAnswer": "La capacidad de prever costos futuros con precisión",
    "categoryId": "azure-management",
    "explaination": "La predictibilidad en Azure se refiere a la capacidad de estimar y planificar costos futuros basándose en el uso actual y proyectado."
  },
  {
    "id": 671,
    "text": "¿Cuál es la cantidad máxima de datos que puede almacenar una única cuenta de almacenamiento de Azure?",
    "options": [
      "5 petabytes",
      "5 terabytes",
      "5 gigabytes",
      "No hay límite"
    ],
    "correctAnswer": "5 petabytes",
    "categoryId": "azure-services",
    "explaination": "Una cuenta de almacenamiento de Azure puede almacenar hasta 5 PB de datos utilizando redundancias como LRS, ZRS o GRS."
  },
  {
    "id": 672,
    "text": "¿Qué es un fault domain en Azure?",
    "options": [
      "Un reporte disponible en Azure Service Health",
      "Un método para resolver nombres en direcciones IP",
      "El lugar donde se unen placas tectónicas",
      "Un agrupamiento físico de servidores dentro de un centro de datos Azure"
    ],
    "correctAnswer": "Un agrupamiento físico de servidores dentro de un centro de datos Azure",
    "categoryId": "azure-services",
    "explaination": "Un fault domain agrupa servidores que comparten energía y red. Azure los utiliza para distribuir máquinas virtuales y reducir puntos únicos de fallo."
  },
  {
    "id": 673,
    "text": "¿Cuál es el propósito principal del Single Sign-On (SSO)?",
    "options": [
      "Agregar una capa extra de seguridad",
      "Permitir iniciar sesión en múltiples aplicaciones con una sola credencial",
      "Aplicar políticas estrictas de contraseñas",
      "Evitar accesos no autorizados"
    ],
    "correctAnswer": "Permitir iniciar sesión en múltiples aplicaciones con una sola credencial",
    "categoryId": "azure-management",
    "explaination": "SSO permite autenticarse una sola vez y acceder a múltiples aplicaciones sin volver a iniciar sesión."
  },
  {
    "id": 674,
    "text": "¿Cuál es el nombre del grupo de administración de nivel superior en Azure?",
    "options": [
      "Contoso",
      "yourcompanyname.onmicrosoft.com",
      "admin",
      "root"
    ],
    "correctAnswer": "root",
    "categoryId": "azure-management",
    "explaination": "El grupo de administración raíz (root management group) es el nivel superior de la jerarquía de administración en Azure."
  },
  {
    "id": 675,
    "text": "¿Azure Virtual Network Peering puede conectar redes de diferentes suscripciones o cuentas?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Azure VNet Peering permite conectar redes virtuales incluso si pertenecen a distintas suscripciones o tenants."
  },
  {
    "id": 676,
    "text": "¿Qué mecanismo permite conectar dos redes virtuales dentro de Azure?",
    "options": [
      "Azure Load Balancer",
      "Azure Peering",
      "Azure ExpressRoute",
      "Azure Application Gateway"
    ],
    "correctAnswer": "Azure Peering",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Network Peering conecta redes virtuales con baja latencia y alto ancho de banda."
  },
  {
    "id": 677,
    "text": "¿Cuál es el propósito principal de Microsoft Entra ID?",
    "options": [
      "Proteger tráfico de red",
      "Proporcionar servicios de dominio locales",
      "Administrar identidades y acceso a aplicaciones y recursos",
      "Almacenar grandes volúmenes de datos"
    ],
    "correctAnswer": "Administrar identidades y acceso a aplicaciones y recursos",
    "categoryId": "azure-management",
    "explaination": "Microsoft Entra ID es un servicio de administración de identidades y accesos basado en la nube."
  },
  {
    "id": 678,
    "text": "¿Cuál de los siguientes es un método de autenticación sin contraseña soportado por Azure?",
    "options": [
      "Solo autenticación biométrica",
      "PIN de cuatro dígitos",
      "Autenticación biométrica y llaves de seguridad",
      "Solo llaves de seguridad"
    ],
    "correctAnswer": "Autenticación biométrica y llaves de seguridad",
    "categoryId": "azure-management",
    "explaination": "Azure admite autenticación passwordless mediante Windows Hello, llaves FIDO2 y Microsoft Authenticator."
  },
  {
    "id": 679,
    "text": "¿Cuál es el propósito principal de un Resource Group en Azure?",
    "options": [
      "Agrupar recursos relacionados para administración y despliegue",
      "Proporcionar un contenedor lógico para suscripciones",
      "Actuar como panel central de servicios Azure",
      "Administrar cuentas de usuario"
    ],
    "correctAnswer": "Agrupar recursos relacionados para administración y despliegue",
    "categoryId": "azure-management",
    "explaination": "Los Resource Groups permiten organizar recursos relacionados para facilitar administración, monitoreo y control de acceso."
  },
  {
    "id": 680,
    "text": "¿Cuál de las siguientes NO es una capacidad principal de Microsoft Purview?",
    "options": [
      "Etiquetado de sensibilidad de datos",
      "Prevención de pérdida de datos",
      "Descubrimiento y clasificación de datos",
      "Migración e integración de datos"
    ],
    "correctAnswer": "Migración e integración de datos",
    "categoryId": "azure-management",
    "explaination": "Microsoft Purview se centra en gobierno y cumplimiento de datos, no en migración o integración."
  },
  {
    "id": 681,
    "text": "¿Qué servicio de Azure permite desplegar y escalar aplicaciones contenedorizadas sin servidor?",
    "options": [
      "Azure Kubernetes Service",
      "Azure App Service",
      "Azure Functions",
      "Azure Container Instances"
    ],
    "correctAnswer": "Azure Container Instances",
    "categoryId": "azure-services",
    "explaination": "Azure Container Instances permite ejecutar contenedores sin administrar máquinas virtuales ni clústeres Kubernetes."
  },
  {
    "id": 682,
    "text": "¿Qué es una región en Azure?",
    "options": [
      "Una red edge",
      "Un centro de datos",
      "Un área geográfica con uno o más centros de datos conectados",
      "Una zona de disponibilidad"
    ],
    "correctAnswer": "Un área geográfica con uno o más centros de datos conectados",
    "categoryId": "azure-services",
    "explaination": "Una región de Azure es un área geográfica que contiene uno o más centros de datos conectados mediante redes de baja latencia."
  },
  {
    "id": 683,
    "text": "¿Cuál es el propósito principal de un Availability Set en Azure?",
    "options": [
      "Garantizar redundancia de datos",
      "Proteger contra puntos únicos de falla",
      "Proporcionar balanceo de carga",
      "Agrupar máquinas virtuales"
    ],
    "correctAnswer": "Proteger contra puntos únicos de falla",
    "categoryId": "azure-services",
    "explaination": "Los Availability Sets distribuyen máquinas virtuales en distintos fault domains y update domains para mejorar disponibilidad."
  },
  {
    "id": 684,
    "text": "¿Cuál de las siguientes NO es una característica de IaaS?",
    "options": [
      "Pago por uso",
      "Sistema operativo administrado",
      "Virtualización de hardware",
      "Aprovisionamiento bajo demanda"
    ],
    "correctAnswer": "Sistema operativo administrado",
    "categoryId": "cloud-concepts",
    "explaination": "En IaaS, el cliente administra el sistema operativo. El proveedor solo administra la infraestructura física."
  },
  {
    "id": 685,
    "text": "¿Cuál es el beneficio de usar Azure Virtual Desktop frente a soluciones tradicionales locales?",
    "options": [
      "Mayor escalabilidad",
      "Todas las respuestas son correctas",
      "Mayor seguridad",
      "Menor costo"
    ],
    "correctAnswer": "Todas las respuestas son correctas",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Desktop ofrece escalabilidad, seguridad integrada y reducción de costos al eliminar infraestructura local."
  },
  {
    "id": 686,
    "text": "¿Cuál es el número máximo de aplicaciones web que puede soportar un único plan App Service Premium V3?",
    "options": [
      "100",
      "1",
      "10",
      "Ilimitado"
    ],
    "correctAnswer": "Ilimitado",
    "categoryId": "azure-services",
    "explaination": "En el nivel Premium V3 de Azure App Service no existe un límite predefinido de aplicaciones web que puedan hospedarse. Sin embargo, la cantidad real depende de la capacidad de recursos del plan y del consumo de las aplicaciones."
  },
  {
    "id": 687,
    "text": "¿Cómo se pueden utilizar las etiquetas (tags) para optimizar costos en Azure?",
    "options": [
      "Apagando automáticamente recursos subutilizados",
      "Identificando recursos que pueden migrarse a un nivel más económico",
      "Clasificando recursos según costo y uso",
      "Aplicando descuentos automáticamente"
    ],
    "correctAnswer": "Clasificando recursos según costo y uso",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas permiten organizar recursos utilizando metadatos como centro de costos, departamento o entorno. Esto facilita el análisis y optimización de gastos en Azure."
  },
  {
    "id": 688,
    "text": "¿En qué opción de redundancia Azure mantiene seis copias de los archivos en dos regiones?",
    "options": [
      "ZRS",
      "LRS",
      "GRS"
    ],
    "correctAnswer": "GRS",
    "categoryId": "azure-services",
    "explaination": "Geo-Redundant Storage (GRS) mantiene tres copias en la región principal y tres copias adicionales en una región secundaria geográficamente distante."
  },
  {
    "id": 689,
    "text": "¿Qué opción de conectividad de Azure proporciona conexión privada entre la red corporativa local y Azure sin usar Internet pública?",
    "options": [
      "VPN Site-to-Site",
      "Azure Global Peering",
      "Azure ExpressRoute",
      "VPN Point-to-Site"
    ],
    "correctAnswer": "Azure ExpressRoute",
    "categoryId": "azure-services",
    "explaination": "Azure ExpressRoute ofrece una conexión privada y dedicada entre la infraestructura local y Azure, brindando menor latencia, mayor confiabilidad y mejor seguridad."
  },
  {
    "id": 690,
    "text": "¿Qué significa predictibilidad en el contexto de Azure?",
    "options": [
      "La capacidad de pronosticar costos futuros con precisión",
      "La capacidad de evitar cargos inesperados",
      "La capacidad de asignar costos a recursos específicos",
      "La capacidad de reducir costos con el tiempo"
    ],
    "correctAnswer": "La capacidad de pronosticar costos futuros con precisión",
    "categoryId": "azure-management",
    "explaination": "La predictibilidad de costos en Azure permite estimar y planificar gastos futuros basándose en el uso actual y proyectado."
  },
  {
    "id": 691,
    "text": "¿Cuál es la cantidad máxima de datos que puede almacenarse en una sola cuenta de almacenamiento de Azure?",
    "options": [
      "5 Petabytes",
      "5 Terabytes",
      "5 Gigabytes",
      "No hay límite"
    ],
    "correctAnswer": "5 Petabytes",
    "categoryId": "azure-services",
    "explaination": "Una cuenta de almacenamiento de Azure puede almacenar hasta 5 PB de datos utilizando opciones de redundancia como LRS, ZRS o GRS."
  },
  {
    "id": 692,
    "text": "¿Qué es un dominio de error (fault domain) en Azure?",
    "options": [
      "Un reporte disponible en Azure Service Health",
      "Un método para resolver nombres en direcciones IP",
      "El lugar donde chocan placas tectónicas",
      "Un agrupamiento físico de servidores dentro de un centro de datos Azure"
    ],
    "correctAnswer": "Un agrupamiento físico de servidores dentro de un centro de datos Azure",
    "categoryId": "azure-services",
    "explaination": "Un fault domain representa un grupo de servidores que comparten energía y red. Azure utiliza fault domains para distribuir máquinas virtuales y evitar puntos únicos de falla."
  },
  {
    "id": 693,
    "text": "¿Cuál es el propósito principal del Single Sign-On (SSO)?",
    "options": [
      "Agregar una capa extra de seguridad",
      "Permitir iniciar sesión en múltiples aplicaciones con un solo conjunto de credenciales",
      "Aplicar políticas de contraseñas fuertes",
      "Prevenir accesos no autorizados"
    ],
    "correctAnswer": "Permitir iniciar sesión en múltiples aplicaciones con un solo conjunto de credenciales",
    "categoryId": "azure-management",
    "explaination": "SSO permite a los usuarios autenticarse una sola vez y acceder a múltiples aplicaciones sin volver a iniciar sesión."
  },
  {
    "id": 694,
    "text": "¿Cómo se llama el grupo de administración de nivel superior en Azure?",
    "options": [
      "Contoso",
      "yourcompanyname.onmicrosoft.com",
      "admin",
      "root"
    ],
    "correctAnswer": "root",
    "categoryId": "azure-management",
    "explaination": "El grupo de administración raíz (root management group) contiene todas las suscripciones y grupos de administración de la organización."
  },
  {
    "id": 695,
    "text": "¿Azure Peering puede conectar redes que pertenecen a diferentes suscripciones o cuentas?",
    "options": [
      "Verdadero",
      "Falso"
    ],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Network Peering permite conectar redes virtuales incluso entre diferentes suscripciones o tenants."
  },
  {
    "id": 696,
    "text": "¿Qué mecanismo permite conectar dos redes virtuales dentro de Azure?",
    "options": [
      "Azure Load Balancer",
      "Azure Peering",
      "Azure ExpressRoute",
      "Azure Application Gateway"
    ],
    "correctAnswer": "Azure Peering",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Network Peering permite conectar redes virtuales con baja latencia y alto ancho de banda."
  },
  {
    "id": 697,
    "text": "¿Cuál es el propósito principal de Microsoft Entra ID?",
    "options": [
      "Proteger tráfico de red",
      "Proveer servicios de dominio locales en la nube",
      "Administrar identidades y acceso a aplicaciones y recursos",
      "Almacenar grandes cantidades de datos"
    ],
    "correctAnswer": "Administrar identidades y acceso a aplicaciones y recursos",
    "categoryId": "azure-management",
    "explaination": "Microsoft Entra ID es un servicio de administración de identidades y acceso basado en la nube."
  },
  {
    "id": 698,
    "text": "¿Cuál de los siguientes es un método de autenticación sin contraseña compatible con Azure?",
    "options": [
      "Solo autenticación biométrica",
      "PIN de cuatro dígitos",
      "Autenticación biométrica y llaves de seguridad",
      "Solo llaves de seguridad"
    ],
    "correctAnswer": "Autenticación biométrica y llaves de seguridad",
    "categoryId": "azure-management",
    "explaination": "Azure admite autenticación sin contraseña mediante biometría, llaves FIDO2 y Microsoft Authenticator."
  },
  {
    "id": 699,
    "text": "¿Cuál es el propósito principal de un grupo de recursos en Azure?",
    "options": [
      "Agrupar recursos relacionados para administración e implementación",
      "Proveer un contenedor lógico para suscripciones",
      "Actuar como panel central de Azure",
      "Administrar cuentas de usuario"
    ],
    "correctAnswer": "Agrupar recursos relacionados para administración e implementación",
    "categoryId": "azure-management",
    "explaination": "Los grupos de recursos ayudan a organizar y administrar recursos que comparten el mismo ciclo de vida."
  },
  {
    "id": 700,
    "text": "¿Cuál de las siguientes NO es una capacidad principal de Microsoft Purview?",
    "options": [
      "Etiquetado de sensibilidad de datos",
      "Prevención de pérdida de datos",
      "Descubrimiento y clasificación de datos",
      "Migración e integración de datos"
    ],
    "correctAnswer": "Migración e integración de datos",
    "categoryId": "azure-management",
    "explaination": "Microsoft Purview se enfoca en gobernanza y cumplimiento de datos, no en migración o integración."
  },
  {
    "id": 701,
    "text": "¿Qué servicio de Azure permite implementar y escalar aplicaciones contenedorizadas sin servidor?",
    "options": [
      "Azure Kubernetes Service",
      "Azure App Service",
      "Azure Functions",
      "Azure Container Instances"
    ],
    "correctAnswer": "Azure Container Instances",
    "categoryId": "azure-services",
    "explaination": "Azure Container Instances permite ejecutar contenedores sin administrar máquinas virtuales ni clústeres Kubernetes."
  },
  {
    "id": 702,
    "text": "¿Qué es una región en Azure?",
    "options": [
      "Una red edge",
      "Un centro de datos",
      "Un área geográfica con uno o más centros de datos conectados",
      "Una zona de disponibilidad"
    ],
    "correctAnswer": "Un área geográfica con uno o más centros de datos conectados",
    "categoryId": "azure-services",
    "explaination": "Una región de Azure contiene uno o más centros de datos conectados mediante redes de baja latencia."
  },
  {
    "id": 703,
    "text": "¿Cuál es el propósito principal de un Availability Set en Azure?",
    "options": [
      "Garantizar redundancia y durabilidad de datos",
      "Proteger contra puntos únicos de falla",
      "Proporcionar balanceo de carga",
      "Agrupar máquinas virtuales"
    ],
    "correctAnswer": "Proteger contra puntos únicos de falla",
    "categoryId": "azure-services",
    "explaination": "Los Availability Sets distribuyen máquinas virtuales entre dominios de error y actualización."
  },
  {
    "id": 704,
    "text": "¿Cuál de las siguientes NO es una característica de IaaS?",
    "options": [
      "Pago por uso",
      "Sistema operativo administrado",
      "Virtualización de hardware",
      "Aprovisionamiento bajo demanda"
    ],
    "correctAnswer": "Sistema operativo administrado",
    "categoryId": "cloud-concepts",
    "explaination": "En IaaS, el cliente administra el sistema operativo, a diferencia de PaaS."
  },
  {
    "id": 705,
    "text": "¿Cuál es un beneficio de Azure Virtual Desktop frente a soluciones tradicionales locales?",
    "options": [
      "Mayor escalabilidad",
      "Todas las respuestas son correctas",
      "Mayor seguridad",
      "Menor costo"
    ],
    "correctAnswer": "Todas las respuestas son correctas",
    "categoryId": "azure-services",
    "explaination": "Azure Virtual Desktop mejora escalabilidad, seguridad y costos al ejecutarse en la nube."
  },
  {
    "id": 706,
    "text": "¿Qué opción de almacenamiento ofrece el mayor rendimiento para cargas intensivas como SAP HANA?",
    "options": [
      "Ultra Disk",
      "Standard HDD",
      "Premium SSD",
      "Standard SSD"
    ],
    "correctAnswer": "Ultra Disk",
    "categoryId": "azure-services",
    "explaination": "Azure Ultra Disk proporciona el mayor rendimiento en IOPS, throughput y baja latencia."
  },
  {
    "id": 707,
    "text": "¿Cuál de los siguientes NO es un aspecto clave de la predictibilidad en Azure?",
    "options": [
      "Escalabilidad",
      "Optimización de costos",
      "Rendimiento consistente",
      "Tolerancia a fallos"
    ],
    "correctAnswer": "Tolerancia a fallos",
    "categoryId": "azure-management",
    "explaination": "La tolerancia a fallos está relacionada con confiabilidad y disponibilidad, no con predictibilidad."
  },
  {
    "id": 708,
    "text": "¿Cuál es un beneficio clave del modelo basado en consumo en la nube?",
    "options": [
      "Contratos a largo plazo",
      "Compra inicial de hardware",
      "Costo mensual fijo",
      "Pago por uso"
    ],
    "correctAnswer": "Pago por uso",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo de pago por uso permite pagar solo por los recursos consumidos."
  },
  {
    "id": 709,
    "text": "¿Cuál de los siguientes NO es un componente principal de la estrategia de confiabilidad de Azure?",
    "options": [
      "Rendimiento",
      "Disponibilidad",
      "Tolerancia a fallos",
      "Redundancia"
    ],
    "correctAnswer": "Rendimiento",
    "categoryId": "azure-services",
    "explaination": "La estrategia de confiabilidad de Azure se centra en disponibilidad, redundancia y tolerancia a fallos."
  },
  {
    "id": 710,
    "text": "¿Qué característica es exclusiva de la nube privada?",
    "options": [
      "Infraestructura dedicada a una sola organización",
      "Red virtual no accesible desde Internet",
      "Uso de múltiples mecanismos de seguridad",
      "Cualquier persona puede registrarse"
    ],
    "correctAnswer": "Infraestructura dedicada a una sola organización",
    "categoryId": "cloud-concepts",
    "explaination": "La nube privada ofrece infraestructura exclusiva para una sola organización."
  },
  {
    "id": 711,
    "text": "¿Qué opción de redundancia proporciona un endpoint secundario de solo lectura?",
    "options": [
      "RA-GRS",
      "ZRS",
      "LRS",
      "GRS"
    ],
    "correctAnswer": "RA-GRS",
    "categoryId": "azure-services",
    "explaination": "RA-GRS ofrece replicación geográfica y acceso de solo lectura a la región secundaria."
  },
  {
    "id": 712,
    "text": "¿Cómo afecta el costo la transferencia de datos entre regiones de Azure?",
    "options": [
      "Se cobra según la región de destino",
      "Se cobra según la región de origen",
      "Siempre es gratis",
      "Se cobra según la cantidad y distancia de transferencia"
    ],
    "correctAnswer": "Se cobra según la cantidad y distancia de transferencia",
    "categoryId": "azure-management",
    "explaination": "La transferencia entre regiones genera costos de salida de datos según volumen y distancia."
  },
  {
    "id": 713,
    "text": "¿Cuál es el beneficio principal de Microsoft Entra Conditional Access?",
    "options": [
      "Mejor experiencia de usuario",
      "Reducir dependencia de contraseñas",
      "Autenticación simplificada",
      "Mejorar seguridad limitando acceso a usuarios y dispositivos autorizados"
    ],
    "correctAnswer": "Mejorar seguridad limitando acceso a usuarios y dispositivos autorizados",
    "categoryId": "azure-management",
    "explaination": "Conditional Access aplica controles de acceso basados en condiciones como ubicación, dispositivo y riesgo."
  },
  {
    "id": 714,
    "text": "¿Cuál es el principal beneficio de PaaS frente a IaaS?",
    "options": [
      "Mayor flexibilidad",
      "Menor costo",
      "Reducir tiempo de desarrollo",
      "Mayor control sobre infraestructura"
    ],
    "correctAnswer": "Reducir tiempo de desarrollo",
    "categoryId": "cloud-concepts",
    "explaination": "PaaS proporciona entornos preconfigurados que aceleran el desarrollo y despliegue."
  },
  {
    "id": 715,
    "text": "¿Qué tipo de almacenamiento guarda datos offline y ofrece el costo más bajo?",
    "options": [
      "Cool Access",
      "Cold Access",
      "Hot Access",
      "Archive Storage"
    ],
    "correctAnswer": "Archive Storage",
    "categoryId": "azure-services",
    "explaination": "Archive Storage está diseñado para datos poco utilizados y almacenamiento a largo plazo."
  },
  {
    "id": 716,
    "text": "¿Qué nivel de acceso de Azure Storage está optimizado para datos poco accedidos almacenados por al menos 30 días?",
    "options": [
      "Archive Access Tier",
      "Cool Access Tier",
      "Premium Storage",
      "Hot Access Tier"
    ],
    "correctAnswer": "Cool Access Tier",
    "categoryId": "azure-services",
    "explaination": "El nivel Cool está optimizado para datos accedidos con poca frecuencia y almacenamiento mínimo de 30 días."
  },
  {
    "id": 717,
    "text": "¿Qué característica hace durable el almacenamiento de Azure?",
    "options": [
      "Accesibilidad",
      "Seguridad",
      "Redundancia",
      "Escalabilidad"
    ],
    "correctAnswer": "Redundancia",
    "categoryId": "azure-services",
    "explaination": "La redundancia mantiene múltiples copias de los datos para protegerlos ante fallas."
  },
  {
    "id": 718,
    "text": "¿Cuál es el propósito principal de las etiquetas (tags) en Azure?",
    "options": [
      "Categorizar y organizar recursos",
      "Monitorear rendimiento",
      "Asignar permisos",
      "Automatizar aprovisionamiento"
    ],
    "correctAnswer": "Categorizar y organizar recursos",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas agregan metadatos a los recursos para facilitar organización, costos y automatización."
  },
  {
    "id": 719,
    "text": "¿Qué describe mejor la escalabilidad en la nube?",
    "options": [
      "Reducir costos limitando almacenamiento",
      "Aumentar o disminuir recursos según demanda",
      "Ejecutar aplicaciones sin Internet"
    ],
    "correctAnswer": "Aumentar o disminuir recursos según demanda",
    "categoryId": "cloud-concepts",
    "explaination": "La escalabilidad permite adaptar recursos dinámicamente según la carga de trabajo."
  },
  {
    "id": 720,
    "text": "¿Cuál es el propósito principal de Azure RBAC?",
    "options": [
      "Proteger suscripciones de accesos no autorizados",
      "Aplicar MFA",
      "Otorgar niveles adecuados de acceso a recursos",
      "Administrar NSG"
    ],
    "correctAnswer": "Otorgar niveles adecuados de acceso a recursos",
    "categoryId": "azure-management",
    "explaination": "Azure RBAC permite asignar permisos específicos a usuarios, grupos y aplicaciones."
  },
  {
    "id": 721,
    "text": "¿Cuál es el número mínimo de zonas de disponibilidad necesarias para una aplicación altamente disponible?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctAnswer": "2",
    "categoryId": "azure-services",
    "explaination": "Se requieren al menos dos Availability Zones para proteger aplicaciones contra fallas de zona."
  },
  {
    "id": 722,
    "text": "¿Cuál es un beneficio de usar regiones soberanas en Azure?",
    "options": [
      "Menor costo",
      "Mayor flexibilidad",
      "Mayor rendimiento",
      "Reducir riesgos de cumplimiento"
    ],
    "correctAnswer": "Reducir riesgos de cumplimiento",
    "categoryId": "azure-management",
    "explaination": "Las regiones soberanas ayudan a cumplir requisitos legales y regulatorios específicos."
  },
  {
    "id": 723,
    "text": "¿Cuál es la principal diferencia entre Pay-As-You-Go y Reserved Instances?",
    "options": [
      "Reserved Instances tienen mayor rendimiento",
      "Reserved Instances ofrecen descuentos por compromisos a largo plazo",
      "Pay-As-You-Go requiere pago anticipado",
      "Pay-As-You-Go solo funciona en nube pública"
    ],
    "correctAnswer": "Reserved Instances ofrecen descuentos por compromisos a largo plazo",
    "categoryId": "azure-management",
    "explaination": "Reserved Instances ofrecen precios reducidos a cambio de compromisos de uno o tres años."
  },
  {
    "id": 724,
    "text": "¿Qué beneficios ofrece Azure ExpressRoute frente a una VPN Site-to-Site?",
    "options": [
      "Los datos viajan por una red privada",
      "Conexión más económica",
      "Conexión más rápida a Azure",
      "Acceso a VNets privadas sin IP pública"
    ],
    "correctAnswer": "Los datos viajan por una red privada",
    "categoryId": "azure-services",
    "explaination": "ExpressRoute utiliza conexiones privadas dedicadas, brindando mayor seguridad y rendimiento."
  },
  {
    "id": 725,
    "text": "¿Por qué Azure tiene centros de datos en múltiples regiones del mundo?",
    "options": [
      "Cumplir regulaciones locales",
      "Reducir latencia",
      "Todas las respuestas son correctas",
      "Garantizar redundancia y alta disponibilidad"
    ],
    "correctAnswer": "Todas las respuestas son correctas",
    "categoryId": "azure-services",
    "explaination": "La distribución global permite cumplir normativas, reducir latencia y asegurar alta disponibilidad."
  },
  {
    "id": 726,
    "text": "¿Cuál es la principal ventaja de usar las características de seguridad integradas de Azure en comparación con administrar la seguridad localmente?",
    "options": [
      "Menor costo",
      "Menor experiencia requerida",
      "Menor flexibilidad",
      "Mayor complejidad"
    ],
    "correctAnswer": "Menor experiencia requerida",
    "categoryId": "azure-management",
    "explaination": "Azure incluye herramientas y servicios de seguridad administrados que reducen la necesidad de contar con especialistas avanzados en seguridad, automatizando tareas como detección de amenazas, cifrado y control de acceso."
  },
  {
    "id": 727,
    "text": "¿Qué tipo de cómputo ofrece mayor flexibilidad y control sobre el hardware subyacente permitiendo personalizar el entorno según necesidades específicas?",
    "options": [
      "Contenedores",
      "Serverless",
      "Funciones",
      "Máquinas virtuales"
    ],
    "correctAnswer": "Máquinas virtuales",
    "categoryId": "azure-services",
    "explaination": "Las máquinas virtuales permiten seleccionar el sistema operativo, configurar hardware e instalar software personalizado, ofreciendo el mayor nivel de control y flexibilidad."
  },
  {
    "id": 728,
    "text": "¿Qué tipo de escalamiento implica pasar de una máquina pequeña a una más grande y potente?",
    "options": [
      "Escalamiento vertical",
      "Escalamiento horizontal",
      "Escalamiento hacia afuera"
    ],
    "correctAnswer": "Escalamiento vertical",
    "categoryId": "cloud-concepts",
    "explaination": "El escalamiento vertical consiste en aumentar la capacidad de una sola máquina agregando más CPU, memoria RAM o almacenamiento."
  },
  {
    "id": 729,
    "text": "¿Qué herramienta permite centralizar archivos compartidos en Azure Files manteniendo la compatibilidad y rendimiento de un servidor de archivos Windows?",
    "options": [
      "Azure File Sync",
      "Azure Storage Explorer",
      "AzCopy"
    ],
    "correctAnswer": "Azure File Sync",
    "categoryId": "azure-services",
    "explaination": "Azure File Sync sincroniza servidores Windows locales con Azure Files, permitiendo un entorno híbrido con almacenamiento centralizado."
  },
  {
    "id": 730,
    "text": "¿Los grupos de recursos pueden anidarse en Azure?",
    "options": [
      "Sí",
      "No"
    ],
    "correctAnswer": "No",
    "categoryId": "azure-management",
    "explaination": "Los grupos de recursos en Azure no pueden contener otros grupos de recursos. Cada grupo funciona como un contenedor independiente."
  },
  {
    "id": 731,
    "text": "¿Cuál es el propósito principal de un Virtual Machine Scale Set en Azure?",
    "options": [
      "Agrupar máquinas virtuales para facilitar la administración",
      "Proporcionar balanceo de carga para aplicaciones web",
      "Escalar automáticamente máquinas virtuales según la demanda",
      "Garantizar redundancia y durabilidad de datos"
    ],
    "correctAnswer": "Escalar automáticamente máquinas virtuales según la demanda",
    "categoryId": "azure-services",
    "explaination": "Virtual Machine Scale Sets permiten aumentar o disminuir automáticamente la cantidad de máquinas virtuales según la carga de trabajo."
  },
  {
    "id": 732,
    "text": "¿Qué entidades pueden contener los Management Groups en Azure?",
    "options": [
      "Grupos de recursos",
      "Suscripciones",
      "Management Groups",
      "Recursos"
    ],
    "correctAnswer": "Suscripciones",
    "categoryId": "azure-management",
    "explaination": "Los Management Groups se utilizan para organizar y administrar múltiples suscripciones aplicando políticas y controles de acceso."
  },
  {
    "id": 733,
    "text": "¿Qué opción de hospedaje de Azure App Service proporciona hardware y red aislados dedicados exclusivamente a un cliente?",
    "options": [
      "App Service Environment",
      "Bare metal hosting",
      "App Service Plan",
      "Máquina virtual"
    ],
    "correctAnswer": "App Service Environment",
    "categoryId": "azure-services",
    "explaination": "App Service Environment proporciona un entorno aislado y dedicado para aplicaciones web con mayor seguridad y control de red."
  },
  {
    "id": 734,
    "text": "¿En qué escenario es más apropiado elegir una solución IaaS en la nube?",
    "options": [
      "Ejecutar una aplicación gratuita en la nube",
      "Reducir al máximo la administración",
      "Desarrollo completamente nuevo",
      "Migración lift-and-shift"
    ],
    "correctAnswer": "Migración lift-and-shift",
    "categoryId": "cloud-concepts",
    "explaination": "IaaS es ideal para migraciones lift-and-shift porque permite mover aplicaciones y servidores existentes a la nube con mínimos cambios."
  },
  {
    "id": 735,
    "text": "¿Cuál es la característica clave de la computación serverless que la diferencia de la infraestructura tradicional?",
    "options": [
      "Escalamiento automático según demanda",
      "Opciones limitadas de escalabilidad",
      "Modelo de precio fijo",
      "Requiere administración manual de servidores"
    ],
    "correctAnswer": "Escalamiento automático según demanda",
    "categoryId": "cloud-concepts",
    "explaination": "La computación serverless ajusta automáticamente los recursos según la carga de trabajo sin necesidad de administrar servidores."
  },
  {
    "id": 736,
    "text": "¿Qué recurso necesita una máquina virtual para ser accesible desde Internet?",
    "options": [
      "Servidor web IIS",
      "Azure Firewall",
      "Dirección IP pública",
      "VPN Gateway"
    ],
    "correctAnswer": "Dirección IP pública",
    "categoryId": "azure-services",
    "explaination": "Una dirección IP pública permite que una máquina virtual tenga un endpoint accesible desde Internet."
  },
  {
    "id": 737,
    "text": "La computación en la nube entrega servicios de TI sobre Internet bajo un modelo de:",
    "options": [
      "Pago anticipado como gasto de capital",
      "Pago por uso",
      "Contrato a largo plazo",
      "Caso por caso"
    ],
    "correctAnswer": "Pago por uso",
    "categoryId": "cloud-concepts",
    "explaination": "El modelo pay-as-you-go permite pagar solo por los recursos consumidos, evitando grandes inversiones iniciales."
  },
  {
    "id": 738,
    "text": "¿Cuál de los siguientes NO es un componente clave del modelo de seguridad Zero Trust?",
    "options": [
      "Microsegmentación",
      "Acceso de mínimo privilegio",
      "Monitoreo continuo",
      "Contraseñas fuertes"
    ],
    "correctAnswer": "Contraseñas fuertes",
    "categoryId": "azure-management",
    "explaination": "Aunque las contraseñas fuertes son importantes, Zero Trust se centra principalmente en validación continua, mínimo privilegio y segmentación."
  },
  {
    "id": 739,
    "text": "¿Cuál es el tipo de cuenta de almacenamiento predeterminado utilizado por AzCopy?",
    "options": [
      "Blob Storage",
      "Queue Storage",
      "Table Storage",
      "File Storage"
    ],
    "correctAnswer": "Blob Storage",
    "categoryId": "azure-services",
    "explaination": "AzCopy está diseñado principalmente para transferir datos hacia y desde Azure Blob Storage."
  },
  {
    "id": 740,
    "text": "¿Cuál es el principal beneficio de la alta disponibilidad en la computación en la nube?",
    "options": [
      "Reducir escalabilidad",
      "Incrementar costos",
      "Minimizar el tiempo de inactividad y garantizar continuidad",
      "Requerir intervención manual"
    ],
    "correctAnswer": "Minimizar el tiempo de inactividad y garantizar continuidad",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad utiliza redundancia y mecanismos de failover para mantener los servicios operativos."
  },
  {
    "id": 741,
    "text": "¿Cuál es una diferencia clave entre Azure B2B y Azure B2C?",
    "options": [
      "B2B es para usuarios internos y B2C para externos",
      "B2B es para aplicaciones cloud y B2C para aplicaciones locales",
      "B2B es para colaboración entre empresas y B2C para interacción con clientes",
      "No existe diferencia significativa"
    ],
    "correctAnswer": "B2B es para colaboración entre empresas y B2C para interacción con clientes",
    "categoryId": "azure-management",
    "explaination": "Azure B2B permite colaboración segura con organizaciones externas, mientras Azure B2C gestiona identidades de clientes."
  },
  {
    "id": 742,
    "text": "¿Qué modelo de nube es más adecuado para una startup pequeña con recursos TI limitados y necesidad de escalabilidad flexible?",
    "options": [
      "Nube comunitaria",
      "Nube privada",
      "Nube híbrida",
      "Nube pública"
    ],
    "correctAnswer": "Nube pública",
    "categoryId": "cloud-concepts",
    "explaination": "La nube pública ofrece escalabilidad, flexibilidad y bajo costo inicial, ideal para startups."
  },
  {
    "id": 743,
    "text": "¿Cuáles son los dos tipos de administrabilidad en la computación en la nube?",
    "options": [
      "Recursos humanos",
      "Administración de la nube",
      "Administración en la nube",
      "Reducción de costos mediante escalamiento automático"
    ],
    "correctAnswers": ["Administración de la nube", "Administración en la nube"],
    "categoryId": "cloud-concepts",
    "explaination": "La administración de la nube se refiere a la gestión de la infraestructura y servicios cloud."
  },
  {
    "id": 744,
    "text": "¿Cuál es el segundo tipo de administrabilidad en la computación en la nube?",
    "options": [
      "Recursos humanos",
      "Administración de la nube",
      "Administración en la nube",
      "Reducción de costos mediante escalamiento automático"
    ],
    "correctAnswer": "Administración en la nube",
    "categoryId": "cloud-concepts",
    "explaination": "La administración en la nube se refiere a la gestión de aplicaciones, datos y servicios hospedados en la nube."
  },
  {
    "id": 745,
    "text": "Según el modelo de responsabilidad compartida, ¿quién es responsable de mantener actualizado el sistema operativo invitado en una máquina virtual de Azure?",
    "options": [
      "El cliente",
      "Nadie, es automático",
      "Microsoft Azure"
    ],
    "correctAnswer": "El cliente",
    "categoryId": "azure-management",
    "explaination": "En máquinas virtuales Azure, el cliente es responsable del sistema operativo invitado y sus actualizaciones."
  },
  {
    "id": 746,
    "text": "¿Qué término describe las políticas, procesos y controles que garantizan que las iniciativas cloud estén alineadas con los objetivos y riesgos del negocio?",
    "options": [
      "Gobernanza",
      "Seguridad",
      "Administrabilidad",
      "Confiabilidad"
    ],
    "correctAnswer": "Gobernanza",
    "categoryId": "azure-management",
    "explaination": "La gobernanza cloud asegura cumplimiento, control de riesgos y alineación con los objetivos organizacionales."
  },
   {
    "id": 747,
    "text": "En Azure, puedes reducir costos reservando recursos por un período de 1 a 3 años.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-management",
    "explaination": "Azure ofrece descuentos de hasta 72% cuando reservas recursos como máquinas virtuales o bases de datos por 1 o 3 años. Esto se llama instancias reservadas y es ideal para cargas de trabajo predecibles."
  },
  {
    "id": 748,
    "text": "Las etiquetas (tags) de Azure permiten a las organizaciones gestionar mejor los costos categorizando recursos según metadatos específicos como centros de costos o entornos.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-management",
    "explaination": "Las etiquetas ayudan a categorizar recursos con metadatos como nombres de departamento o centros de costos, facilitando el seguimiento y la rendición de cuentas por gastos."
  },
  {
    "id": 749,
    "text": "En Azure, mover datos entre regiones dentro de la misma zona no tiene costo.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-management",
    "explaination": "Aunque algunas transferencias de datos entrantes son gratuitas, las transferencias salientes, incluso dentro de la misma región o zona de disponibilidad de Azure, generalmente tienen costo. Los precios varían según el destino y la dirección del flujo de datos."
  },
  {
    "id": 750,
    "text": "Azure CLI solo está disponible en Windows y no es compatible con otras plataformas como Linux y Mac.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-management",
    "explaination": "Azure CLI es una herramienta multiplataforma. Puedes instalarla y usarla en Windows, Linux y macOS. Incluso es accesible a través de Azure Cloud Shell directamente desde el navegador."
  },
  {
    "id": 751,
    "text": "¿Cómo mejora la nube la seguridad de tu red contra ataques de denegación de servicio distribuido (DDoS)?",
    "options": [
      "Instala automáticamente firewalls que previenen los ataques DDoS",
      "Requiere intervención manual para detener los ataques DDoS cuando ocurren",
      "Los proveedores de nube están equipados para manejar ataques DDoS, haciendo tu red más robusta",
      "Previene completamente todos los ciberataques"
    ],
    "correctAnswer": "Los proveedores de nube están equipados para manejar ataques DDoS, haciendo tu red más robusta",
    "categoryId": "azure-management",
    "explaination": "Los proveedores de nube invierten en infraestructura avanzada y herramientas de seguridad diseñadas para detectar y mitigar ataques DDoS automáticamente, filtrando el tráfico malicioso y manteniendo la disponibilidad del servicio. Sin embargo, ningún sistema garantiza inmunidad total ante ciberataques."
  },
  {
    "id": 752,
    "text": "La alta disponibilidad garantiza que los recursos de TI siempre sean accesibles cuando se necesitan.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad se refiere a que los sistemas y recursos sean accesibles de manera confiable cuando se necesitan, minimizando el tiempo de inactividad y asegurando que los servicios continúen funcionando incluso ante fallos."
  },
  {
    "id": 753,
    "text": "Los proveedores de nube como Azure ofrecen garantías de tiempo de actividad como parte de sus acuerdos de nivel de servicio (SLA).",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "cloud-concepts",
    "explaination": "Los proveedores de nube definen compromisos de tiempo de actividad a través de acuerdos de nivel de servicio. Por ejemplo, Azure puede garantizar un 99.9% o más de tiempo de actividad, lo que brinda confianza en la disponibilidad de sus servicios."
  },
  {
    "id": 754,
    "text": "La alta disponibilidad elimina todas las posibles interrupciones de los servicios en la nube.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad reduce el riesgo de interrupciones pero no las elimina por completo. Pueden ocurrir interrupciones por interrupciones regionales, errores de configuración o desastres naturales. El objetivo es reducir su frecuencia e impacto, no garantizar inmunidad total."
  },
  {
    "id": 755,
    "text": "Diseñar para alta disponibilidad requiere redundancia y mecanismos de conmutación por error (failover).",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "cloud-concepts",
    "explaination": "Diseñar para alta disponibilidad implica agregar redundancia, como servidores duplicados o múltiples rutas de red, y mecanismos de failover que trasladen automáticamente las cargas de trabajo si algo falla, garantizando la continuidad del servicio."
  },
  {
    "id": 756,
    "text": "¿Cuál es un ejemplo de elasticidad en la computación en la nube?",
    "options": [
      "Implementar nuevos servicios rápidamente",
      "Escalar automáticamente una aplicación para asegurar que tenga los recursos necesarios para satisfacer la demanda",
      "Distribuir servicios en diferentes ubicaciones geográficas",
      "Mantener los servicios en funcionamiento cuando los componentes fallan"
    ],
    "correctAnswer": "Escalar automáticamente una aplicación para asegurar que tenga los recursos necesarios para satisfacer la demanda",
    "categoryId": "cloud-concepts",
    "explaination": "La elasticidad en la computación en la nube es la capacidad de ajustar automáticamente los recursos según la demanda actual. Por ejemplo, durante temporadas pico como el Black Friday, un sistema puede escalar hacia arriba añadiendo más máquinas virtuales y luego reducirse durante períodos más tranquilos para ahorrar costos."
  },
  {
    "id": 757,
    "text": "¿Qué ventajas principales ofrecen las máquinas virtuales de Azure a través de los conjuntos de disponibilidad y los conjuntos de escalado?",
    "options": [
      "Los conjuntos de disponibilidad garantizan tolerancia a fallos replicando VMs en zonas de disponibilidad, mientras que los conjuntos de escalado habilitan el escalado automático según la demanda",
      "Los conjuntos de disponibilidad reducen costos y los conjuntos de escalado mejoran la seguridad",
      "Los conjuntos de disponibilidad gestionan el tráfico de red y los conjuntos de escalado almacenan datos",
      "Ambos sirven para la misma función de distribuir cargas de trabajo"
    ],
    "correctAnswer": "Los conjuntos de disponibilidad garantizan tolerancia a fallos replicando VMs en zonas de disponibilidad, mientras que los conjuntos de escalado habilitan el escalado automático según la demanda",
    "categoryId": "azure-services",
    "explaination": "Los conjuntos de disponibilidad distribuyen VMs en diferentes hardware físico para reducir la posibilidad de fallos simultáneos. Los conjuntos de escalado permiten ajustar automáticamente el número de instancias de VM según el uso, creando más cuando la demanda aumenta y eliminando el exceso cuando baja."
  },
  {
    "id": 758,
    "text": "Una empresa usa AWS para servicios en la nube, pero quiere comenzar a usar Azure para aplicaciones basadas en IA mientras mantiene sus recursos de AWS para otras tareas. ¿Qué tipo de modelo de nube representa esto?",
    "options": ["Nube pública", "Multi-nube", "Nube híbrida", "Nube privada"],
    "correctAnswer": "Multi-nube",
    "categoryId": "cloud-concepts",
    "explaination": "Multi-nube significa usar más de un proveedor de nube pública. En este caso, la empresa usa AWS y ahora quiere agregar Azure para servicios de IA. Esa combinación de dos plataformas de nube pública separadas define exactamente el modelo multi-nube. La nube híbrida combina nube privada y pública, no dos nubes públicas."
  },
  {
    "id": 759,
    "text": "¿Cuál de las siguientes describe mejor la alta disponibilidad en la computación en la nube?",
    "options": [
      "Garantizar que una aplicación esté disponible el 100% del tiempo sin interrupciones",
      "Maximizar el tiempo de actividad de los servicios, minimizando el tiempo de inactividad debido a interrupciones o fallos",
      "Garantizar que tu aplicación siempre pueda escalar para satisfacer la demanda",
      "Ejecutar múltiples versiones de la misma aplicación simultáneamente"
    ],
    "correctAnswer": "Maximizar el tiempo de actividad de los servicios, minimizando el tiempo de inactividad debido a interrupciones o fallos",
    "categoryId": "cloud-concepts",
    "explaination": "La alta disponibilidad consiste en diseñar sistemas para que permanezcan funcionales incluso cuando algo sale mal. En lugar de prometer un servicio perfecto e ininterrumpido, se enfoca en reducir el tiempo de inactividad y garantizar una recuperación rápida. Ningún sistema puede garantizar un 100% de tiempo de actividad."
  },
  {
    "id": 760,
    "text": "¿Cuáles dos afirmaciones son verdaderas sobre el acceso de invitados externos en Azure?",
    "options": [
      "Habilita la seguridad fuera de los límites organizacionales",
      "Requiere que los usuarios externos creen nuevos IDs para el acceso",
      "Aplica políticas de acceso condicional a los usuarios invitados",
      "Impide que los usuarios externos accedan a las aplicaciones"
    ],
    "correctAnswers": [
      "Habilita la seguridad fuera de los límites organizacionales",
      "Aplica políticas de acceso condicional a los usuarios invitados"
    ],
    "categoryId": "azure-management",
    "explaination": "El acceso de invitados externos permite a las organizaciones colaborar de forma segura con usuarios fuera de su red. Las políticas de acceso condicional como MFA o restricciones de dispositivos pueden aplicarse a estos usuarios. Los usuarios externos no necesitan crear nuevos IDs; pueden iniciar sesión con sus credenciales existentes a través de Entra External ID."
  },
  {
    "id": 761,
    "text": "Las regiones de Azure generalmente están emparejadas con otra región en la misma geografía para mejorar la recuperación ante desastres.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Las regiones de Azure están emparejadas dentro de la misma área geográfica para mejorar la recuperación ante desastres. Si una región tiene un problema, la otra del par puede servir como respaldo."
  },
  {
    "id": 762,
    "text": "Los pares de regiones garantizan que ambas regiones siempre se restauren simultáneamente después de una interrupción.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "En caso de una interrupción mayor, Microsoft prioriza restaurar primero una región para reducir el tiempo de inactividad general, en lugar de restaurar ambas simultáneamente."
  },
  {
    "id": 763,
    "text": "Los pares de regiones ayudan con las actualizaciones planificadas de Azure implementándolas en una región a la vez.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Azure implementa actualizaciones en solo una región de un par a la vez para minimizar el riesgo de tiempo de inactividad o interrupciones."
  },
  {
    "id": 764,
    "text": "Todos los servicios de Azure replican automáticamente datos entre pares de regiones.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "No todos los servicios de Azure replican automáticamente datos entre pares de regiones. Muchos requieren configuración manual. Las organizaciones a menudo necesitan configurar ellas mismas la geo-redundancia o políticas de respaldo."
  },
  {
    "id": 765,
    "text": "Las máquinas virtuales de Azure proporcionan infraestructura como servicio (IaaS), lo que permite a los usuarios tener control total sobre el sistema operativo y la capacidad de ejecutar software personalizado.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "cloud-concepts",
    "explaination": "Las VMs de Azure son IaaS: Microsoft proporciona la infraestructura subyacente mientras el usuario tiene acceso total al sistema operativo. Pueden instalar, configurar y gestionar el SO, además de desplegar sus propias aplicaciones y software personalizado."
  },
  {
    "id": 766,
    "text": "¿Qué herramienta de transferencia de datos de Azure es una utilidad de línea de comandos para transferir datos hacia almacenamiento de blobs y archivos de Azure?",
    "options": ["AzCopy", "Azure Storage Explorer", "Azure File Sync", "Azure Data Box"],
    "correctAnswer": "AzCopy",
    "categoryId": "azure-services",
    "explaination": "AzCopy es una herramienta de línea de comandos liviana diseñada para transferencias de alto rendimiento hacia y desde el almacenamiento de blobs y archivos de Azure. Es ideal para automatización y scripting en Bash o PowerShell."
  },
  {
    "id": 767,
    "text": "¿Qué herramienta de administración de almacenamiento de Azure ofrece una interfaz gráfica para gestionar y transferir datos en todos los tipos de almacenamiento de Azure?",
    "options": ["AzCopy", "Azure Storage Explorer", "Azure File Sync", "Azure Data Box"],
    "correctAnswer": "Azure Storage Explorer",
    "categoryId": "azure-services",
    "explaination": "Azure Storage Explorer es la herramienta gráfica que permite navegar, cargar, descargar y gestionar almacenamiento en servicios de blob, cola, tabla y archivos. Es ideal para usuarios que prefieren una GUI en lugar de escribir scripts."
  },
  {
    "id": 768,
    "text": "¿Qué servicio de Azure sincroniza servidores de archivos locales con Azure Files para almacenamiento en nube híbrida?",
    "options": ["AzCopy", "Azure Storage Explorer", "Azure File Sync", "Azure Data Box"],
    "correctAnswer": "Azure File Sync",
    "categoryId": "azure-services",
    "explaination": "Azure File Sync permite a los servidores Windows locales sincronizarse con Azure Files. Es útil para organizaciones que aún usan servidores de archivos locales pero quieren los beneficios del acceso y la redundancia en la nube."
  },
  {
    "id": 769,
    "text": "Las redes virtuales de Azure solo admiten comunicación entre recursos de Azure, no con redes locales.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "Las redes virtuales de Azure admiten conectividad híbrida. Puedes conectar tus centros de datos locales a Azure mediante VPN o ExpressRoute, lo que permite extender la infraestructura local hacia la nube."
  },
  {
    "id": 770,
    "text": "Las rutas definidas por el usuario (UDR) permiten a los administradores modificar el comportamiento de enrutamiento predeterminado en las redes virtuales de Azure.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Las UDR permiten anular el comportamiento de enrutamiento predeterminado de Azure. Con ellas, puedes dirigir el tráfico a través de dispositivos virtuales específicos o puertas de enlace, lo cual es útil en topologías de red complejas."
  },
  {
    "id": 771,
    "text": "La cuenta gratuita de Azure incluye acceso gratuito a algunos servicios durante 12 meses.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-management",
    "explaination": "La cuenta gratuita de Azure incluye acceso gratuito a ciertos servicios por 12 meses completos, como máquinas virtuales, bases de datos y almacenamiento, ideal para prueba y aprendizaje."
  },
  {
    "id": 772,
    "text": "Los usuarios de la cuenta gratuita de Azure deben pagar después de sus primeros 30 días, aunque no actualicen su cuenta.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-management",
    "explaination": "Los usuarios no son cobrados automáticamente después de 30 días. Una vez que termina el período de prueba inicial con créditos gratuitos, solo se les cobra si eligen actualizar su cuenta a una suscripción de pago por uso."
  },
  {
    "id": 773,
    "text": "Azure Table Storage es una solución de base de datos relacional.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "Azure Table Storage es un almacén NoSQL de clave-valor, no una base de datos relacional. No admite relaciones ni consultas estructuradas como SQL Server."
  },
  {
    "id": 774,
    "text": "Azure Queue Storage se utiliza para la comunicación asincrónica entre aplicaciones.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "Azure Queue Storage habilita la comunicación asincrónica entre aplicaciones distribuidas, permitiendo por ejemplo que una aplicación web ponga en cola elementos de trabajo que un servicio en segundo plano procese más tarde."
  },
  {
    "id": 775,
    "text": "Los mensajes en una cola de Azure se eliminan automáticamente después de ser recuperados una vez.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "Cuando se recupera un mensaje de Azure Queue Storage, este no se elimina automáticamente. La aplicación debe eliminarlo explícitamente después de procesarlo exitosamente. Este diseño asegura que si un proceso falla a mitad, el mensaje pueda ser reprocesado."
  },
  {
    "id": 776,
    "text": "El tráfico de ExpressRoute se cifra automáticamente de forma predeterminada.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "categoryId": "azure-services",
    "explaination": "Aunque ExpressRoute proporciona una conexión privada entre tu red y Azure, no cifra automáticamente los datos. Si tu organización requiere cifrado, deberás implementar soluciones como VPNs con IPsec."
  },
  {
    "id": 777,
    "text": "ExpressRoute puede configurarse con conmutación por error (failover) de VPN para garantizar conectividad continua en caso de fallo.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "categoryId": "azure-services",
    "explaination": "ExpressRoute admite failover de VPN. Si la conexión privada falla, el tráfico puede redirigirse automáticamente a través de una puerta de enlace VPN de Azure para mantener la conectividad."
  },
  {
    "id": 778,
    "text": "Una empresa de retail quiere crear una tienda en línea con soporte para alto tráfico, escalado automático y tareas en segundo plano como la sincronización de inventario. También necesita una API REST y soporte para aplicaciones móviles. ¿Qué servicios de Azure debería usar?",
    "options": [
      "Azure App Service para aplicaciones web",
      "Azure App Service para aplicaciones de API",
      "Azure App Service para WebJobs",
      "Máquinas virtuales de Azure con escalado automático personalizado"
    ],
    "correctAnswers": [
      "Azure App Service para aplicaciones web",
      "Azure App Service para aplicaciones de API",
      "Azure App Service para WebJobs"
    ],
    "categoryId": "azure-services",
    "explaination": "App Service para web apps gestiona el escaparate con alto tráfico y escalado automático. App Service para API apps provee los endpoints RESTful para móviles y aplicaciones cliente. App Service para WebJobs soporta el procesamiento en segundo plano como la sincronización de inventario. Las VMs requieren más mantenimiento manual y no son ideales cuando la agilidad y automatización son prioridades."
  },
  {
    "id": 779,
    "text": "¿Cuáles son los modos de implementación disponibles para Azure Database for PostgreSQL?",
    "options": [
      "Servidor único",
      "Servidor flexible",
      "Servidor de propósito general",
      "Servidor básico",
      "Hyperscale (Citus)"
    ],
    "correctAnswers": [
      "Servidor único",
      "Servidor flexible",
      "Hyperscale (Citus)"
    ],
    "categoryId": "azure-services",
    "explaination": "Los tres modos de implementación oficiales de Azure para PostgreSQL son: Servidor único (ideal para cargas pequeñas con alta disponibilidad integrada), Servidor flexible (más control y personalización para cargas exigentes), e Hyperscale (Citus) (escala horizontalmente para aplicaciones con grandes volúmenes de datos). Servidor de propósito general y básico son niveles de rendimiento, no modos de implementación."
  },
  {
    "id": 780,
    "text": "¿Qué solución recomendarías para la ejecución bajo demanda de tareas automatizadas en Python con el mínimo costo?",
    "options": ["Azure Monitor", "Azure Cloud Shell", "Azure Automation", "Azure Functions"],
    "correctAnswer": "Azure Functions",
    "categoryId": "azure-services",
    "explaination": "Azure Functions es un servicio de cómputo serverless que permite ejecutar código en respuesta a eventos o disparadores sin necesitar aprovisionar infraestructura. Es ideal para tareas ocasionales como scripts Python bajo demanda, y como solo se paga por el tiempo que el código se ejecuta, es extremadamente rentable para cargas de trabajo ligeras o irregulares."
  },
  {
    "id": 781,
    "text": "¿Qué es verdadero sobre los conjuntos de escalado de máquinas virtuales (VMSS) de Azure?",
    "options": [
      "Permiten crear múltiples VMs, pero requieren configuración manual del balanceo de carga",
      "Permiten crear y gestionar un grupo de VMs idénticas con balanceo de carga y escalado automático",
      "Se usan para emparejar VMs en diferentes regiones para recuperación ante desastres",
      "Son parte de la oferta de plataforma como servicio (PaaS) de Azure"
    ],
    "correctAnswer": "Permiten crear y gestionar un grupo de VMs idénticas con balanceo de carga y escalado automático",
    "categoryId": "azure-services",
    "explaination": "Los conjuntos de escalado de VMs de Azure escalan automáticamente el número de instancias según la demanda e integran el balanceo de carga automáticamente con Azure Load Balancer o Application Gateway. Son parte de IaaS, no PaaS, y no están relacionados con el emparejamiento de regiones para recuperación ante desastres."
  },
  {
    "id": 782,
    "text": "Estás diseñando una aplicación crítica que debe estar disponible incluso en caso de un desastre regional. ¿Cuáles dos opciones ayudarían a lograr resiliencia?",
    "options": [
      "Implementar la aplicación en múltiples zonas de disponibilidad dentro de una sola región",
      "Usar pares de regiones para replicar datos en dos regiones dentro de la misma geografía",
      "Colocar la aplicación en una región soberana para garantizar cumplimiento",
      "Configurar servicios con redundancia de zona para recursos como bases de datos SQL y almacenamiento",
      "Implementar la aplicación en una región sin zonas de disponibilidad"
    ],
    "correctAnswers": [
      "Usar pares de regiones para replicar datos en dos regiones dentro de la misma geografía",
      "Configurar servicios con redundancia de zona para recursos como bases de datos SQL y almacenamiento"
    ],
    "categoryId": "azure-services",
    "explaination": "Los pares de regiones proporcionan redundancia geográfica; si un desastre afecta a una región, Azure puede conmutar a la región emparejada. Los servicios con redundancia de zona distribuyen los recursos entre múltiples zonas de disponibilidad dentro de una región, garantizando que la app siga operativa si una zona falla. Combinar ambos ofrece recuperación ante desastres regional y alta disponibilidad a nivel de zona."
  },
  {
    "id": 783,
    "text": "¿Qué servicio de almacenamiento de Azure deberías usar para almacenar datos del sistema operativo y de aplicaciones para múltiples máquinas virtuales?",
    "options": ["Blob Storage", "File Storage", "Disk Storage", "Queue Storage"],
    "correctAnswer": "Disk Storage",
    "categoryId": "azure-services",
    "explaination": "Disk Storage está diseñado específicamente para su uso con máquinas virtuales en Azure. Admite almacenamiento persistente, lo que significa que los discos del SO y los discos de datos se conservan incluso después de apagar una VM. Blob Storage es para datos no estructurados, File Storage para acceso compartido de archivos vía SMB, y Queue Storage para mensajería entre componentes de aplicaciones."
  },
  {
    "id": 784,
    "text": "¿Cuál es el propósito de los pares de regiones de Azure?",
    "options": [
      "Replicar datos entre diferentes geografías para recuperación ante desastres",
      "Optimizar la facturación y el uso en diferentes geografías",
      "Aumentar la velocidad de implementación de máquinas virtuales",
      "Proporcionar acceso aislado para agencias gubernamentales y militares"
    ],
    "correctAnswer": "Replicar datos entre diferentes geografías para recuperación ante desastres",
    "categoryId": "azure-services",
    "explaination": "El propósito principal de los pares de regiones de Azure es mejorar la resiliencia y habilitar la recuperación ante desastres. Cada región de Azure se empareja estratégicamente con otra dentro de la misma geografía, permitiendo la replicación automática de datos y la conmutación por error si una región queda no disponible."
  },
  {
    "id": 785,
    "text": "¿Cuál de las siguientes NO es una característica de Azure Policy?",
    "options": [
      "Aplicar políticas automáticamente al crear recursos",
      "Gestionar el cumplimiento para entornos multi-nube y SaaS",
      "Definir políticas individuales o iniciativas",
      "Remediar automáticamente recursos no conformes"
    ],
    "correctAnswer": "Gestionar el cumplimiento para entornos multi-nube y SaaS",
    "categoryId": "azure-management",
    "explaination": "Azure Policy está diseñado para aplicar estándares organizacionales dentro del entorno de Azure. La gestión del cumplimiento en entornos multi-nube o SaaS está fuera del alcance de Azure Policy; esa es una característica de Microsoft Purview, diseñado para la gobernanza de datos más amplia entre plataformas."
  },
  {
    "id": 786,
    "text": "¿Qué herramienta de Azure permite la implementación declarativa de infraestructura usando un archivo JSON?",
    "options": ["Azure CLI", "Plantillas ARM", "Azure Cloud Shell", "Azure Arc"],
    "correctAnswer": "Plantillas ARM",
    "categoryId": "azure-management",
    "explaination": "Las plantillas ARM (Azure Resource Manager) permiten definir infraestructura y configuraciones usando sintaxis declarativa en JSON. Describes qué recursos necesitas y Azure determina cómo implementarlos, permitiendo despliegues consistentes y repetibles. Azure CLI sigue un modelo imperativo, Cloud Shell es el entorno de ejecución, y Azure Arc gestiona recursos fuera de Azure."
  },
  {
    "id": 787,
    "categoryId": "azure-services",
    "text": "Azure Arc permite administrar servidores SQL alojados fuera de Azure como si estuvieran en Azure.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Azure Arc permite administrar no solo servidores en Azure, sino también los que están fuera de él, como instancias de SQL Server en entornos locales u otras nubes. Los trata como recursos de Azure, lo que proporciona gobernanza y administración consistentes."
  },
  {
    "id": 788,
    "categoryId": "azure-management",
    "text": "Azure PowerShell puede instalarse y ejecutarse en plataformas Linux, Mac y Windows.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Azure PowerShell está diseñado para la flexibilidad. Es multiplataforma, por lo que ya sea que uses Windows, Linux o macOS, puedes instalarlo y utilizarlo. Esto es ideal para administradores que trabajan en entornos diversos."
  },
  {
    "id": 789,
    "categoryId": "azure-management",
    "text": "Azure Service Health solo proporciona actualizaciones de estado global y no ofrece información sobre la salud de recursos individuales.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Azure Service Health hace más que mostrar una vista global. Proporciona alertas personalizadas e información detallada sobre la salud de tus recursos específicos de Azure a través de herramientas como Resource Health."
  },
  {
    "id": 790,
    "categoryId": "azure-services",
    "text": "Application Insights, una característica de Azure Monitor, solo puede monitorear aplicaciones que se ejecutan en Azure.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Aunque Application Insights forma parte de Azure Monitor, no está limitado a aplicaciones alojadas en Azure. También puedes usarlo para monitorear aplicaciones en entornos locales o en otros servicios en la nube, lo que lo hace muy versátil."
  },
  {
    "id": 791,
    "categoryId": "azure-management",
    "text": "Azure Monitor solo puede recopilar datos de recursos de Azure y no admite la recopilación de datos de entornos locales o de múltiples nubes.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Azure Monitor es una solución integral. No solo recopila datos de servicios de Azure, sino que también funciona con sistemas locales y entornos de múltiples nubes, lo que lo hace ideal para la monitorización de infraestructuras híbridas."
  },
  {
    "id": 792,
    "categoryId": "cloud-concepts",
    "text": "Una pequeña empresa decide usar Office 365 y un proveedor de nube principal para todos sus servicios. ¿Cuál de las siguientes opciones describe mejor el modelo de nube que han elegido?",
    "options": ["Nube privada", "Nube pública", "Nube híbrida", "Nube gubernamental"],
    "correctAnswer": "Nube pública",
    "explaination": "Cuando una empresa utiliza servicios como Office 365, depende de recursos proporcionados y administrados por un proveedor externo a través de internet. Esto es característico de la nube pública. Microsoft posee y administra la infraestructura, mientras que la empresa simplemente consume los servicios."
  },
  {
    "id": 793,
    "categoryId": "cloud-concepts",
    "text": "La computación en la nube permite a las organizaciones usar servicios de cómputo a través de internet en lugar de depender únicamente de centros de datos físicos.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "La computación en la nube permite a las organizaciones acceder a servicios como almacenamiento, redes y máquinas virtuales a través de internet. En lugar de mantener servidores físicos, dependen de proveedores como Microsoft Azure o AWS."
  },
  {
    "id": 794,
    "categoryId": "cloud-concepts",
    "text": "En la computación en la nube, el proveedor gestiona la red física mientras los usuarios administran sus propios recursos y configuraciones.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "El proveedor de la nube no solo administra la red física, sino toda la infraestructura subyacente. Los usuarios sí gestionan las configuraciones de sus propios servicios, como máquinas virtuales o aplicaciones, pero no la red física."
  },
  {
    "id": 795,
    "categoryId": "cloud-concepts",
    "text": "La computación en la nube permite a las organizaciones escalar su infraestructura de TI rápidamente sin necesidad de construir nuevos centros de datos.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Una de las mayores ventajas de la computación en la nube es la escalabilidad rápida. Las empresas pueden aumentar o reducir recursos rápidamente sin invertir en nuevos centros de datos."
  },
  {
    "id": 796,
    "categoryId": "cloud-concepts",
    "text": "Los usuarios son responsables de proteger sus datos en la nube, mientras que el proveedor de la nube protege la infraestructura subyacente.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "El modelo de responsabilidad compartida aplica en la computación en la nube. Los proveedores protegen el hardware, los centros de datos y las redes, pero el usuario es responsable de la seguridad de los datos: control de acceso, gestión de identidades y cifrado."
  },
  {
    "id": 797,
    "categoryId": "cloud-concepts",
    "text": "Una base de datos SQL en la nube representa un gasto __________, mientras que un clúster SQL en las instalaciones representa un gasto __________.",
    "options": ["operativo (OpEx) / de capital (CapEx)", "de capital (CapEx) / operativo (OpEx)", "operativo (OpEx) / operativo (OpEx)", "de capital (CapEx) / de capital (CapEx)"],
    "correctAnswer": "operativo (OpEx) / de capital (CapEx)",
    "explaination": "Una base de datos SQL en la nube usa el modelo de pago por uso, lo que representa un gasto operativo (OpEx) recurrente. Un clúster SQL en las instalaciones requiere una gran inversión inicial en hardware y licencias, lo que constituye un gasto de capital (CapEx)."
  },
  {
    "id": 798,
    "categoryId": "azure-services",
    "text": "Las cuentas de almacenamiento de Azure incluyen el servicio __________, que almacena datos no estructurados, y el servicio __________, que actúa como servidor de archivos en la nube.",
    "options": ["Blob storage / File storage", "File storage / Blob storage", "Disk storage / Queue storage", "Queue storage / Table storage"],
    "correctAnswer": "Blob storage / File storage",
    "explaination": "Blob storage está optimizado para grandes volúmenes de datos no estructurados como imágenes, videos y registros. File storage es un servicio de uso compartido de archivos administrado que funciona como un servidor de archivos tradicional, accesible mediante protocolos SMB."
  },
  {
    "id": 799,
    "categoryId": "azure-services",
    "text": "Una empresa está preocupada por quedarse sin espacio de almacenamiento de datos y no quiere comprar discos duros adicionales. ¿Cuál es el mejor enfoque?",
    "options": ["Comprar múltiples discos duros con anticipación", "Eliminar datos antiguos", "Almacenar datos en dispositivos personales de empleados", "Usar almacenamiento en la nube para solicitar más espacio según sea necesario"],
    "correctAnswer": "Usar almacenamiento en la nube para solicitar más espacio según sea necesario",
    "explaination": "El almacenamiento en la nube está diseñado para escalar. Puedes aumentar la capacidad bajo demanda sin necesidad de invertir en hardware nuevo. Servicios como Azure Blob Storage permiten escalar de gigabytes a petabytes con solo unos clics."
  },
  {
    "id": 800,
    "categoryId": "cloud-concepts",
    "text": "¿Cuál de las siguientes opciones describe mejor la computación en la nube?",
    "options": ["Una configuración de TI tradicional donde los recursos se instalan en las instalaciones", "Una tecnología que permite a los usuarios acceder a recursos de cómputo a través de internet", "Un servicio limitado al almacenamiento de archivos y documentos", "Una tecnología que elimina todas las responsabilidades de mantenimiento de TI"],
    "correctAnswer": "Una tecnología que permite a los usuarios acceder a recursos de cómputo a través de internet",
    "explaination": "La computación en la nube trata fundamentalmente sobre la entrega de servicios de cómputo como servidores, almacenamiento, bases de datos, redes, software y análisis a través de internet, de manera flexible, escalable y eficiente."
  },
  {
    "id": 801,
    "categoryId": "cloud-concepts",
    "text": "¿Cuáles dos beneficios de la computación en la nube ayudan a las organizaciones a reducir los gastos de capital (CapEx)? (Selecciona dos)",
    "options": ["Modelo de precios de pago por uso", "Redundancia multirregión", "Capacidad de escalar recursos dinámicamente", "SLA de tiempo de actividad del 99.99%"],
    "correctAnswers": ["Modelo de precios de pago por uso", "Capacidad de escalar recursos dinámicamente"],
    "explaination": "El modelo de pago por uso evita inversiones iniciales elevadas en servidores. La capacidad de escalar dinámicamente elimina la necesidad de comprar hardware en exceso para prepararse para demandas futuras. La redundancia multirregión y el SLA de disponibilidad son beneficios de resiliencia, no de reducción de CapEx."
  },
  {
    "id": 802,
    "categoryId": "azure-services",
    "text": "¿Qué subservicio de almacenamiento de Azure almacena datos no estructurados como imágenes y videos?",
    "options": ["File storage", "Disk storage", "Blob storage", "Queue storage"],
    "correctAnswer": "Blob storage",
    "explaination": "Blob storage está optimizado para manejar grandes cantidades de datos no estructurados como imágenes, videos y registros. Se compara frecuentemente con Amazon S3 por su uso en escenarios de almacenamiento de objetos a escala web."
  },
  {
    "id": 803,
    "categoryId": "azure-services",
    "text": "Las redes virtuales de Azure permiten crear una __________ entre recursos locales y recursos de Azure, permitiendo la comunicación como si estuvieran en la misma red local.",
    "options": ["VPN", "Firewall", "Peering", "NAT Gateway"],
    "correctAnswer": "VPN",
    "explaination": "Una red privada virtual (VPN) en Azure se usa para conectar de forma segura la infraestructura local con la nube de Azure, haciendo que los dos entornos funcionen como una sola red local."
  },
  {
    "id": 804,
    "categoryId": "azure-services",
    "text": "Azure Queue Storage se usa para la cola de mensajes entre componentes de aplicaciones.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Azure Queue Storage está diseñado exactamente para esto: hacer cola de mensajes entre componentes de aplicaciones. Permite la comunicación asíncrona, lo que ayuda a que los sistemas funcionen de manera independiente y más eficiente."
  },
  {
    "id": 805,
    "categoryId": "azure-services",
    "text": "Cada mensaje de cola en Azure Queue Storage puede tener hasta 256 kilobytes de tamaño.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Esta afirmación es falsa porque cada mensaje en Azure Queue Storage puede tener hasta 64 kilobytes de tamaño. Si necesitas almacenar mensajes más grandes, deberías guardar el contenido en Blob Storage y colocar una referencia en la cola, o usar Azure Service Bus."
  },
  {
    "id": 806,
    "categoryId": "azure-services",
    "text": "Los mensajes de Azure Queue Storage son accesibles globalmente mediante HTTP/HTTPS.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Los mensajes de Azure Queue Storage son accesibles globalmente a través de HTTP/HTTPS, lo que significa que los desarrolladores y aplicaciones pueden recuperar o añadir mensajes de forma segura a través de internet usando protocolos web estándar."
  },
  {
    "id": 807,
    "categoryId": "azure-services",
    "text": "Queue Storage puede almacenar un número ilimitado de mensajes siempre que la cuenta de almacenamiento tenga capacidad.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Una cola puede almacenar un número ilimitado de mensajes, pero solo mientras la cuenta de almacenamiento de Azure tenga capacidad suficiente. No hay un límite fijo en el número de mensajes, solo en el almacenamiento que los respalda."
  },
  {
    "id": 808,
    "categoryId": "azure-services",
    "text": "Las redes virtuales en Azure solo pueden usarse para máquinas virtuales.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Las redes virtuales de Azure no están limitadas a máquinas virtuales. Pueden conectarse a una amplia variedad de servicios como Azure Kubernetes Service, App Service Environments, Azure Bastion y más."
  },
  {
    "id": 809,
    "categoryId": "azure-services",
    "text": "Las redes virtuales de Azure pueden vincular recursos tanto en la nube como en entornos locales.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Las redes virtuales de Azure pueden vincular recursos en la nube con infraestructura local usando opciones de conectividad híbrida como VPN Gateways o ExpressRoute, lo que hace posibles y eficientes las configuraciones de nube híbrida."
  },
  {
    "id": 810,
    "categoryId": "azure-services",
    "text": "Las redes virtuales de Azure no pueden conectarse directamente a internet.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Las redes virtuales de Azure sí pueden conectarse a internet. Al asignar direcciones IP públicas o usar herramientas como el Azure Load Balancer, puedes permitir el acceso a internet a tus recursos cuando sea necesario."
  },
  {
    "id": 811,
    "categoryId": "azure-services",
    "text": "Los discos administrados de Azure gestionan automáticamente el escalado del almacenamiento y la disponibilidad.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Los discos administrados de Azure gestionan el escalado del almacenamiento y la disponibilidad sin configuración manual. Microsoft se encarga de la infraestructura, para que puedas concentrarte en tus aplicaciones."
  },
  {
    "id": 812,
    "categoryId": "azure-services",
    "text": "Los discos SSD Premium V2 pueden admitir tamaños de hasta 32 TB.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Los discos SSD Premium V2 admiten tamaños de hasta 64 TB, no solo 32 TB. El potencial de almacenamiento es mucho mayor de lo que afirma esta opción."
  },
  {
    "id": 813,
    "categoryId": "azure-management",
    "text": "El objetivo de la defensa en profundidad es prevenir el acceso no autorizado a los datos usando una sola capa de seguridad.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "El objetivo de la defensa en profundidad no es depender de una sola capa de seguridad. Se trata de superponer protecciones como capas de identidad, red, cómputo, aplicación y datos para que, si una falla, las otras aún brinden defensa."
  },
  {
    "id": 814,
    "categoryId": "azure-management",
    "text": "Si se vulnera una capa en el modelo de defensa en profundidad, las capas adicionales aún ayudan a proteger el sistema.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Este enfoque por capas significa que si un atacante vulnera una capa, las capas restantes siguen activas. Esto proporciona resiliencia y da tiempo para la detección y respuesta."
  },
  {
    "id": 815,
    "categoryId": "azure-management",
    "text": "La capa de cómputo en la defensa en profundidad es responsable de proteger las aplicaciones frente a vulnerabilidades.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "La capa de cómputo no protege directamente las aplicaciones. Su función es proteger las máquinas virtuales, aplicar parches y proteger los endpoints. La protección de aplicaciones es responsabilidad de la capa de aplicación."
  },
  {
    "id": 816,
    "categoryId": "azure-management",
    "text": "Microsoft Entra ID monitorea intentos de inicio de sesión sospechosos y alerta a los administradores.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Microsoft Entra ID usa señales como ubicaciones o dispositivos de inicio de sesión no familiares para detectar intentos sospechosos y luego alerta a los administradores para que puedan tomar medidas inmediatas."
  },
  {
    "id": 817,
    "categoryId": "azure-management",
    "text": "Microsoft Entra ID no puede integrarse con proveedores de autenticación de terceros.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Microsoft Entra ID admite la federación con sistemas de identidad como Google, Facebook y Okta, brindando a las organizaciones flexibilidad en sus estrategias de autenticación."
  },
  {
    "id": 818,
    "categoryId": "azure-services",
    "text": "Azure Migrate solo admite la migración de máquinas virtuales, no de bases de datos ni aplicaciones.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Azure Migrate admite mucho más que solo VMs. Se integra con herramientas como Azure Database Migration Service para bases de datos y App Service Migration Assistant para aplicaciones, lo que le da amplias capacidades de migración de cargas de trabajo."
  },
  {
    "id": 819,
    "categoryId": "azure-services",
    "text": "Azure Data Box es un dispositivo físico usado para transferir grandes cantidades de datos hacia o desde Azure.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Azure Data Box es un dispositivo físico real que Microsoft envía a los clientes. Se usa para mover conjuntos de datos muy grandes, generalmente más de 40 TB, de forma segura hacia o desde Azure."
  },
  {
    "id": 820,
    "categoryId": "azure-services",
    "text": "Azure China y Azure Government son ejemplos de:",
    "options": ["Nubes privadas", "Regiones soberanas", "Geografías de Azure", "Grupos de administración"],
    "correctAnswer": "Regiones soberanas",
    "explaination": "Las regiones soberanas son entornos especiales de Azure creados para cumplir con estrictos requisitos gubernamentales o de cumplimiento normativo en países específicos. Azure China y Azure Government operan de forma independiente de la nube global de Azure bajo políticas y reglas de cumplimiento distintas."
  },
  {
    "id": 821,
    "categoryId": "azure-services",
    "text": "Una empresa de medios necesita archivar terabytes de metraje de video histórico, pero espera recuperarlo solo por razones legales. ¿Qué nivel de acceso de Azure Blob es el más rentable para este escenario?",
    "options": ["Activo (Hot)", "Esporádico (Cool)", "Frío (Cold)", "Archivo (Archive)"],
    "correctAnswer": "Archivo (Archive)",
    "explaination": "El nivel de archivo está diseñado específicamente para almacenar datos a los que raramente se accede pero que deben conservarse por razones de cumplimiento, legales o históricas. Ofrece el menor costo de almacenamiento entre todos los niveles de blob de Azure."
  },
  {
    "id": 822,
    "categoryId": "azure-services",
    "text": "¿Cuál es la función principal de las zonas de disponibilidad de Azure?",
    "options": ["Proporcionar almacenamiento de datos aislado por seguridad", "Aumentar la disponibilidad de los servicios usando centros de datos independientes", "Gestionar el acceso de usuarios en diferentes regiones", "Organizar la facturación para diferentes departamentos"],
    "correctAnswer": "Aumentar la disponibilidad de los servicios usando centros de datos independientes",
    "explaination": "Las zonas de disponibilidad de Azure son centros de datos físicamente separados dentro de una sola región de Azure. Su propósito principal es proporcionar alta disponibilidad y tolerancia a fallos. Si un centro de datos falla, las otras zonas mantienen los servicios en funcionamiento."
  },
  {
    "id": 823,
    "categoryId": "azure-services",
    "text": "Las máquinas virtuales (VMs) proporcionan el mayor nivel de control sobre los entornos de alojamiento en Azure.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Verdadero",
    "explaination": "Las máquinas virtuales de Azure ofrecen control total sobre el entorno de alojamiento. Puedes configurar el SO, instalar cualquier software, gestionar la configuración de red y ajustar las políticas de seguridad, lo que lo convierte en la opción de alojamiento más flexible y personalizable."
  },
  {
    "id": 824,
    "categoryId": "azure-services",
    "text": "Azure App Service solo puede usarse para alojar aplicaciones web.",
    "options": ["Verdadero", "Falso"],
    "correctAnswer": "Falso",
    "explaination": "Azure App Service no está limitado solo a aplicaciones web. También puede ejecutar aplicaciones de API, aplicaciones móviles y WebJobs para procesamiento en segundo plano, lo que lo convierte en una plataforma PaaS versátil."
  },
  {
    "id": 825,
    "categoryId": "azure-management",
    "text": "¿Cuál de las siguientes NO es una característica de Azure DNS?",
    "options": ["Alojar dominios DNS privados para redes virtuales personalizadas", "Control de acceso basado en roles (RBAC) para gestionar el acceso a recursos DNS", "Proporcionar servicios de compra de nombres de dominio", "Ofrecer resolución DNS rápida a través de una red global de servidores"],
    "correctAnswer": "Proporcionar servicios de compra de nombres de dominio",
    "explaination": "Azure DNS es un servicio de alojamiento del sistema de nombres de dominio que permite gestionar registros DNS, pero no ofrece la posibilidad de comprar nombres de dominio. Esa función la manejan los dominios de App Service o registradores de dominios de terceros."
  },
  {
    "id": 826,
    "categoryId": "azure-management",
    "text": "¿Cuál de las siguientes opciones NO es una característica de Azure Log Analytics?",
    "options": ["Escribir y probar consultas de registros", "Realizar análisis estadísticos sobre datos de registros", "Generar alertas detalladas sobre interrupciones del servicio", "Visualizar resultados mediante gráficos y paneles"],
    "correctAnswer": "Generar alertas detalladas sobre interrupciones del servicio",
    "explaination": "Azure Log Analytics es principalmente una herramienta para consultar y analizar datos de registros. La generación de alertas detalladas sobre interrupciones del servicio es responsabilidad de herramientas como Azure Monitor Alerts y Azure Service Health, no de Log Analytics."
  },
  {
    id: 827,
    categoryId: "azure-management",
    text: "Una empresa quiere predecir el costo futuro de su uso en la nube. ¿Cuáles de los siguientes pasos o herramientas podrían ayudarles? (Selecciona dos respuestas)",
    options: [
      "Usar la calculadora de costo total de propiedad (TCO) para estimar costos a largo plazo.",
      "Implementar balanceo de carga para reducir el estrés del servidor.",
      "Rastrear y monitorear el uso de recursos en tiempo real para identificar patrones de costo.",
      "Configurar múltiples máquinas virtuales para distribuir el tráfico.",
    ],
    correctAnswers: [
      "Usar la calculadora de costo total de propiedad (TCO) para estimar costos a largo plazo.",
      "Rastrear y monitorear el uso de recursos en tiempo real para identificar patrones de costo.",
    ],
    explaination: "La calculadora TCO está diseñada para estimar el costo general del uso de servicios en la nube a lo largo del tiempo, considerando tipos de recursos, duración de uso y costos asociados. El monitoreo en tiempo real del uso de recursos permite observar patrones, detectar picos o ineficiencias y tomar decisiones basadas en datos para optimizar costos. El balanceo de carga está orientado a la optimización del rendimiento, no a la predicción de costos. Configurar múltiples VMs se relaciona con escalabilidad y disponibilidad, no con la previsión de gastos.",
  },
  {
    id: 828,
    categoryId: "cloud-concepts",
    text: "En el modelo de responsabilidad compartida de IaaS, ¿el proveedor de la nube gestiona todas las medidas de seguridad?",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "En IaaS, la seguridad es una responsabilidad compartida. El proveedor gestiona la infraestructura física (servidores, almacenamiento, red), mientras que el usuario es responsable de proteger sus datos, sistemas operativos y aplicaciones.",
  },
  {
    id: 829,
    categoryId: "cloud-concepts",
    text: "En un modelo IaaS, los usuarios son responsables de las actualizaciones de software y los parches de seguridad.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "En IaaS, los usuarios deben instalar actualizaciones, aplicar parches de seguridad y configurar firewalls para sus máquinas virtuales, igual que se mantiene una computadora personal.",
  },
  {
    id: 830,
    categoryId: "cloud-concepts",
    text: "En un modelo IaaS, el proveedor de la nube se encarga de la seguridad de la infraestructura física.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El proveedor de la nube garantiza la seguridad del centro de datos físico, incluyendo energía, refrigeración y seguridad del hardware.",
  },
  {
    id: 831,
    categoryId: "cloud-concepts",
    text: "El modelo de responsabilidad compartida se aplica únicamente a IaaS y no a otros modelos de servicio en la nube.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "El modelo de responsabilidad compartida también aplica a PaaS y SaaS; la diferencia es cómo se divide la responsabilidad según el modelo de servicio.",
  },
  {
    id: 832,
    categoryId: "azure-management",
    text: "La herencia permite que los usuarios de un grupo reciban los mismos permisos asignados al grupo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Cuando los usuarios se colocan en un grupo, heredan automáticamente los permisos otorgados a ese grupo, lo que simplifica la gestión de accesos en organizaciones grandes.",
  },
  {
    id: 833,
    categoryId: "azure-management",
    text: "Los roles personalizados solo pueden asignarse a nivel de suscripción.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Los roles personalizados pueden asignarse en distintos ámbitos: grupo de administración, suscripción, grupo de recursos o recursos individuales.",
  },
  {
    id: 834,
    categoryId: "azure-management",
    text: "El control de acceso basado en roles (RBAC) aplica el principio de privilegio mínimo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "RBAC está construido en torno al principio de privilegio mínimo: los usuarios solo deben tener acceso a los recursos que necesitan para realizar su trabajo.",
  },
  {
    id: 835,
    categoryId: "azure-management",
    text: "Una vez asignado, los permisos de un rol no pueden modificarse.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure permite a los administradores actualizar definiciones de roles personalizados o reasignar usuarios a roles distintos conforme cambien las necesidades organizativas.",
  },
  {
    id: 836,
    categoryId: "azure-services",
    text: "Azure Kubernetes Service simplifica la ____________ de contenedores.",
    options: [
      "Orquestación",
      "Autenticación",
      "Facturación",
      "Monitorización",
    ],
    correctAnswer: "Orquestación",
    explaination: "Azure Kubernetes Service (AKS) es una plataforma de orquestación de contenedores administrada que gestiona la implementación, escalado y operación de entornos Kubernetes.",
  },
  {
    id: 837,
    categoryId: "azure-services",
    text: "Azure Machine Learning automatiza el ____________ para el procesamiento de datos a gran escala.",
    options: [
      "Enrutamiento de red",
      "Entrenamiento e implementación de modelos",
      "Aprovisionamiento de máquinas virtuales",
      "Almacenamiento de blobs",
    ],
    correctAnswer: "Entrenamiento e implementación de modelos",
    explaination: "Azure Machine Learning automatiza el flujo de trabajo de aprendizaje automático, incluido el entrenamiento de modelos, el escalado de cómputo y la implementación eficiente de modelos.",
  },
  {
    id: 838,
    categoryId: "azure-services",
    text: "Azure Synapse Analytics se integra con ____________ para analizar conjuntos de datos masivos.",
    options: [
      "Azure Blob Storage",
      "Azure SQL Database",
      "Azure Data Lake",
      "Azure Cosmos DB",
    ],
    correctAnswer: "Azure Data Lake",
    explaination: "Azure Synapse Analytics se integra con Azure Data Lake, que proporciona almacenamiento escalable que Synapse puede consultar directamente para análisis avanzados sobre grandes conjuntos de datos.",
  },
  {
    id: 839,
    categoryId: "cloud-concepts",
    text: "¿Cuál de los siguientes escenarios demuestra la necesidad de elasticidad en la nube? (Selecciona una respuesta)",
    options: [
      "Juan gestiona una aplicación de procesamiento de imágenes en Azure. El tráfico aumenta un 67% los fines de semana y cae a menos del 30% entre semana. Quiere que las VMs escalen automáticamente sin contratar un plan dedicado de alto costo.",
      "Jane ejecuta una aplicación de seguimiento de higiene personal en Azure. Quiere que la aplicación permanezca operativa en todo momento, incluidos los fines de semana, sin tiempo de inactividad.",
      "Alexe supervisa una base de datos masiva en Azure utilizada por un sitio de moda en línea y necesita un 100% de tiempo de actividad de red garantizado.",
      "Tina es administradora de red y requiere una red privada local conectada de forma segura a una nube pública con acceso solo a través de llamadas API.",
    ],
    correctAnswer: "Juan gestiona una aplicación de procesamiento de imágenes en Azure. El tráfico aumenta un 67% los fines de semana y cae a menos del 30% entre semana. Quiere que las VMs escalen automáticamente sin contratar un plan dedicado de alto costo.",
    explaination: "La elasticidad es la capacidad de un sistema en la nube de aumentar o disminuir automáticamente la asignación de recursos según la demanda. El caso de Juan, con picos de tráfico los fines de semana y caídas entre semana, es un caso clásico de elasticidad. Los demás escenarios se refieren a disponibilidad, rendimiento y conectividad híbrida.",
  },
  {
    id: 840,
    categoryId: "cloud-concepts",
    text: "Una empresa tiene datos sensibles que desea mantener en su propia infraestructura, pero también quiere la flexibilidad de escalar a la nube pública cuando la demanda aumente. ¿Qué modelo de nube deben adoptar? (Selecciona una respuesta)",
    options: [
      "Multinube",
      "Nube pública",
      "Nube híbrida",
      "Nube privada",
    ],
    correctAnswer: "Nube híbrida",
    explaination: "La nube híbrida combina los puntos fuertes de las nubes privada y pública. Permite a la empresa mantener los datos sensibles seguros en las instalaciones locales y escalar hacia servicios de nube pública cuando el tráfico o las cargas de trabajo aumentan. La nube privada ofrece control pero no escalabilidad externa; la nube pública permite escalabilidad pero no almacenamiento local de datos sensibles; la multinube usa varios proveedores públicos pero no crea un entorno integrado con la nube privada.",
  },
  {
    id: 841,
    categoryId: "azure-services",
    text: "¿Cuál de las siguientes opciones describe mejor Azure Arc? (Selecciona una respuesta)",
    options: [
      "Una tecnología para gestionar recursos en la nube en entornos públicos, privados e híbridos.",
      "Una herramienta para gestionar únicamente servidores físicos locales.",
      "Un servicio dedicado a gestionar bases de datos en Azure.",
      "Una solución para ejecutar cargas de trabajo de VMware en una nube pública.",
    ],
    correctAnswer: "Una tecnología para gestionar recursos en la nube en entornos públicos, privados e híbridos.",
    explaination: "Azure Arc extiende las capacidades de administración y gobernanza de Azure más allá de Azure mismo, permitiendo gestionar servidores, clústeres de Kubernetes y bases de datos en distintos entornos: locales, en otra nube o en el perímetro.",
  },
  {
    id: 842,
    categoryId: "azure-services",
    text: "Azure Virtual Desktop proporciona implementaciones de sesión múltiple para Windows 10 o Windows 11 Enterprise, lo que permite ____________ en una sola VM.",
    options: [
      "Un único usuario administrador",
      "Múltiples usuarios concurrentes",
      "Acceso de solo lectura",
      "Instancias de contenedor aisladas",
    ],
    correctAnswer: "Múltiples usuarios concurrentes",
    explaination: "Azure Virtual Desktop admite sesiones múltiples, lo que significa que varios usuarios pueden iniciar sesión en la misma máquina virtual al mismo tiempo, reduciendo costos al disminuir el número de VMs necesarias.",
  },
  {
    id: 843,
    categoryId: "azure-services",
    text: "Una red virtual (VNet) requiere un espacio de direcciones y todas las subredes dentro de la VNet deben tener rangos de IP que quepan dentro del ____________.",
    options: [
      "Grupo de recursos principal",
      "Espacio de direcciones principal",
      "Balanceador de carga",
      "Firewall de Azure",
    ],
    correctAnswer: "Espacio de direcciones principal",
    explaination: "Una red virtual en Azure debe tener asignado un espacio de direcciones (en notación CIDR) que define el rango de IPs disponibles. Las subredes son segmentos más pequeños creados dentro de ese espacio de direcciones principal.",
  },
  {
    id: 844,
    categoryId: "azure-services",
    text: "¿Cuál tipo de almacenamiento premium de Azure es ideal para aplicaciones empresariales que requieren recursos compartidos de archivos de alta velocidad y admite los protocolos SMB y NFS?",
    options: [
      "Blobs en bloques premium",
      "Blobs en páginas premium",
      "Recursos compartidos de archivos premium",
      "Discos administrados premium",
    ],
    correctAnswer: "Recursos compartidos de archivos premium",
    explaination: "Los recursos compartidos de archivos premium ofrecen almacenamiento basado en archivos que admite los protocolos SMB (Windows) y NFS (Linux), y son ideales para necesidades empresariales de recursos compartidos en distintas cargas de trabajo.",
  },
  {
    id: 845,
    categoryId: "azure-services",
    text: "Todos los tipos de almacenamiento premium de Azure (blobs en bloques, blobs en páginas y recursos compartidos de archivos) utilizan SSDs en lugar de HDDs para un rendimiento mejorado.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Todas las opciones de almacenamiento premium de Azure utilizan unidades de estado sólido (SSD) para garantizar un rendimiento mejorado en comparación con los discos duros tradicionales (HDD).",
  },
  {
    id: 846,
    categoryId: "azure-services",
    text: "¿Qué servicio de Azure distribuye el tráfico de red entrante entre múltiples máquinas virtuales en la capa 4 (nivel de transporte)?",
    options: [
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Application Gateway",
      "Azure Front Door",
    ],
    correctAnswer: "Azure Load Balancer",
    explaination: "Azure Load Balancer opera en la capa 4 del modelo OSI, enrutando el tráfico según la dirección IP y el puerto para distribuir las solicitudes entrantes entre múltiples VMs y garantizar alta disponibilidad.",
  },
  {
    id: 847,
    categoryId: "azure-services",
    text: "¿Qué servicio de Azure ofrece distribución global de tráfico basada en DNS para mejorar la disponibilidad?",
    options: [
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Application Gateway",
      "Azure Front Door",
    ],
    correctAnswer: "Azure Traffic Manager",
    explaination: "Azure Traffic Manager es un director de tráfico basado en DNS que mejora la disponibilidad dirigiendo a los usuarios hacia la región más cercana o con menor latencia.",
  },
  {
    id: 848,
    categoryId: "azure-services",
    text: "¿Qué servicio de Azure ofrece balanceo de carga en la capa 7 con terminación SSL y enrutamiento de tráfico web?",
    options: [
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Application Gateway",
      "Azure Front Door",
    ],
    correctAnswer: "Azure Application Gateway",
    explaination: "Azure Application Gateway opera en la capa 7 (capa de aplicación) y admite funciones avanzadas como enrutamiento basado en URL y terminación SSL, ideal para aplicaciones web que necesitan distribución inteligente del tráfico.",
  },
  {
    id: 849,
    categoryId: "azure-services",
    text: "¿Qué servicio de Azure mejora las aplicaciones web con balanceo de carga global, características de seguridad y caché de contenido?",
    options: [
      "Azure Load Balancer",
      "Azure Traffic Manager",
      "Azure Application Gateway",
      "Azure Front Door",
    ],
    correctAnswer: "Azure Front Door",
    explaination: "Azure Front Door está diseñado para aplicaciones web globales y combina balanceo de carga, seguridad (WAF) y optimización del rendimiento, incluyendo caché de contenido para mejorar la capacidad de respuesta global.",
  },
  {
    id: 850,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia local (LRS) es la mejor opción para aplicaciones críticas que requieren protección ante desastres regionales.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "LRS solo mantiene los datos dentro de un único centro de datos. Si ese centro de datos sufre una interrupción o desastre, los datos podrían perderse. Para recuperación ante desastres se debe usar GRS o GZRS.",
  },
  {
    id: 851,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia de zona (ZRS) se recomienda para aplicaciones que requieren alta disponibilidad dentro de una región, pero sin replicación entre regiones.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "ZRS almacena datos en múltiples zonas de disponibilidad dentro de la misma región, garantizando alta disponibilidad si falla una zona, pero no protege contra interrupciones de toda la región.",
  },
  {
    id: 852,
    categoryId: "azure-services",
    text: "GZRS ofrece mejor protección que LRS, ZRS y GRS porque combina redundancia regional y de zonas.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "GZRS combina los beneficios de ZRS (redundancia en zonas de disponibilidad) y GRS (replicación en una región secundaria), haciéndolo más resiliente que cualquiera de las opciones anteriores por separado.",
  },
  {
    id: 853,
    categoryId: "azure-services",
    text: "RA-GZRS es la mejor opción para aplicaciones que requieren recuperación ante desastres entre regiones con acceso de lectura a los datos replicados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "RA-GZRS amplía GZRS permitiendo el acceso de solo lectura a los datos en la región secundaria, lo que es ideal para escenarios de recuperación ante desastres donde las aplicaciones necesitan acceder a los datos incluso cuando la región primaria no está disponible.",
  },
  {
    id: 854,
    categoryId: "azure-services",
    text: "Azure AD DS es un servicio de dominio administrado que no requiere mantenimiento a nivel del sistema operativo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Microsoft gestiona los controladores de dominio en Azure AD DS, por lo que no es necesario preocuparse por aplicar parches ni por el mantenimiento del sistema operativo.",
  },
  {
    id: 855,
    categoryId: "azure-services",
    text: "Azure AD DS extiende un entorno de Active Directory local como una extensión directa en Azure.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure AD DS crea un dominio administrado independiente que puede sincronizarse con Azure AD, pero no es una extensión directa del entorno local de Active Directory.",
  },
  {
    id: 856,
    categoryId: "azure-services",
    text: "Azure AD DS admite directivas de grupo (Group Policy), LDAP, NTLM y Kerberos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Azure AD DS admite características tradicionales de Active Directory como directivas de grupo, LDAP, NTLM y Kerberos, lo que lo hace útil para aplicaciones heredadas que requieren esos protocolos.",
  },
  {
    id: 857,
    categoryId: "azure-services",
    text: "Azure AD DS permite la sincronización bidireccional entre Entra ID y un AD local.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure AD DS solo admite sincronización unidireccional desde Entra ID (antes Azure AD) hacia Azure AD DS. No sincroniza cambios de vuelta a Entra ID ni al AD local.",
  },
  {
    id: 858,
    categoryId: "azure-services",
    text: "Azure Files puede montarse como una unidad en dispositivos Windows, Linux y Mac.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Azure Files admite el montaje de recursos compartidos mediante los protocolos SMB y NFS, lo que permite su uso en una amplia variedad de sistemas operativos incluyendo Windows, Linux y macOS.",
  },
  {
    id: 859,
    categoryId: "azure-services",
    text: "Azure Files admite los protocolos SMB y NFS para el uso compartido de archivos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Azure Files admite el protocolo SMB (utilizado principalmente en Windows) y NFS (popular en entornos Linux), mejorando la compatibilidad para distintos casos de uso.",
  },
  {
    id: 860,
    categoryId: "azure-services",
    text: "Azure File Sync requiere configurar una máquina virtual de Azure para funcionar.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure File Sync instala un agente en el servidor de archivos local de Windows existente para sincronizarlo con Azure Files; no requiere implementar una VM de Azure.",
  },
  {
    id: 861,
    categoryId: "azure-services",
    text: "Azure Files debe usarse junto con Azure Blob Storage para funcionar.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure Files es independiente de Azure Blob Storage. Aunque ambos son servicios de almacenamiento en Azure, sirven para propósitos diferentes y operan de forma separada.",
  },
  {
    id: 862,
    categoryId: "azure-management",
    text: "El acceso condicional garantiza que las identidades externas tengan el mismo nivel de aplicación de seguridad que los usuarios internos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Las directivas de acceso condicional pueden aplicarse tanto a usuarios internos como externos, asegurando que los colaboradores externos cumplan los mismos estándares de seguridad, incluidos MFA y cumplimiento del dispositivo.",
  },
  {
    id: 863,
    categoryId: "azure-management",
    text: "La colaboración B2B de Azure solo admite cuentas de Microsoft para la autenticación externa.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "La colaboración B2B de Azure admite varios proveedores de identidad, incluidos Google, Facebook e identidades corporativas mediante federación, lo que hace la colaboración mucho más flexible.",
  },
  {
    id: 864,
    categoryId: "azure-management",
    text: "Las revisiones de acceso en Microsoft Entra ID permiten a las organizaciones revocar el acceso de invitados si ya no es necesario.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Microsoft Entra ID incluye capacidades de revisión de acceso que ayudan a las organizaciones a evaluar periódicamente el acceso de invitados. Si ya no es necesario, puede revocarse automáticamente o de forma manual.",
  },
  {
    id: 865,
    categoryId: "azure-management",
    text: "El acceso condicional puede usarse para aplicar directivas de autenticación sólida tanto para usuarios internos como externos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El acceso condicional permite aplicar autenticación sólida, como MFA, dispositivos conformes o comprobaciones de riesgo del usuario, independientemente de si el usuario es interno o externo.",
  },
  {
    id: 866,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia local (LRS) mantiene tres copias de los datos dentro del mismo centro de datos de Azure.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "LRS almacena tres copias de los datos dentro de un único centro de datos, lo que protege contra fallos de hardware, pero no ofrece resiliencia ante interrupciones del centro de datos o de la región.",
  },
  {
    id: 867,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia geográfica (GRS) mantiene copias de los datos en dos regiones de Azure separadas.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "GRS almacena los datos en una región de Azure y los replica de forma asíncrona en una región emparejada, brindando protección ante fallos regionales completos.",
  },
  {
    id: 868,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia de zona (ZRS) replica los datos en múltiples zonas de disponibilidad dentro de la misma región.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "ZRS replica los datos en varias zonas de disponibilidad dentro de la misma región, proporcionando mejor disponibilidad que LRS porque los datos se distribuyen en centros de datos físicamente separados dentro de la región.",
  },
  {
    id: 869,
    categoryId: "azure-services",
    text: "El almacenamiento con redundancia geográfica con acceso de lectura (RA-GRS) proporciona acceso de solo lectura a los datos replicados en la región secundaria.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "RA-GRS amplía GRS permitiendo el acceso de solo lectura a la réplica en la región secundaria, lo que es muy valioso para escenarios de recuperación ante desastres donde se necesita acceso a los datos incluso cuando la región primaria no está disponible.",
  },
  {
    id: 870,
    categoryId: "azure-services",
    text: "El nivel de acceso activo (hot) está optimizado para datos a los que se accede con frecuencia.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El nivel de acceso activo está diseñado para datos a los que se accede con frecuencia, como imágenes, informes o registros usados habitualmente. Ofrece baja latencia y alta disponibilidad, aunque con un costo de almacenamiento mayor.",
  },
  {
    id: 871,
    categoryId: "azure-services",
    text: "El nivel de acceso esporádico (cool) está optimizado para datos a los que se accede con poca frecuencia y requiere que los datos se almacenen al menos 30 días.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El nivel esporádico es para datos a los que se accede con poca frecuencia y es rentable solo si los datos se almacenan al menos 30 días. Acceder a ellos más frecuentemente generaría cargos más altos.",
  },
  {
    id: 872,
    categoryId: "azure-services",
    text: "El nivel de acceso de archivo (archive) es adecuado para el almacenamiento de datos a corto plazo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "El nivel de archivo no es adecuado para almacenamiento a corto plazo. Está diseñado específicamente para la retención de datos a largo plazo, como copias de seguridad regulatorias o datos de cumplimiento, y los datos deben permanecer en ese nivel al menos 180 días.",
  },
  {
    id: 873,
    categoryId: "azure-services",
    text: "El nivel de acceso frío (cold) requiere que los datos se almacenen al menos 90 días.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El nivel frío está dirigido a datos que deben almacenarse al menos 90 días, ofreciendo costos más bajos que los niveles esporádico o activo, pero con costos de recuperación más altos.",
  },
  {
    id: 874,
    categoryId: "azure-services",
    text: "¿Cuáles de los siguientes tipos de aplicaciones admite Azure App Service? (Selecciona tres respuestas)",
    options: [
      "Aplicaciones web",
      "Aplicaciones móviles",
      "Aplicaciones de API",
      "Logic Apps",
    ],
    correctAnswers: [
      "Aplicaciones web",
      "Aplicaciones móviles",
      "Aplicaciones de API",
    ],
    explaination: "Azure App Service admite aplicaciones web (usando .NET, Java, Node.js, Python), aplicaciones móviles (backend con autenticación, notificaciones push y sincronización sin conexión) y aplicaciones de API (servicios RESTful). Logic Apps pertenece a un servicio separado diseñado para crear flujos de trabajo automatizados con poca codificación.",
  },
  {
    id: 875,
    categoryId: "azure-management",
    text: "Una cuenta de Azure Storage denominada 'storage001' es un ejemplo de: (Selecciona una respuesta)",
    options: [
      "Un recurso",
      "Un grupo de recursos",
      "Un administrador de recursos",
      "Una suscripción",
    ],
    correctAnswer: "Un recurso",
    explaination: "Un recurso en Azure es cualquier elemento administrable que se crea e instala, como cuentas de almacenamiento, máquinas virtuales, bases de datos y aplicaciones web. 'storage001' es el nombre de una cuenta de almacenamiento específica, por lo que es un recurso. Un grupo de recursos es un contenedor lógico; Azure Resource Manager es el servicio subyacente de implementación; una suscripción es el límite de facturación.",
  },
  {
    id: 876,
    categoryId: "azure-management",
    text: "Al conectar el Active Directory local con Microsoft Entra ID mediante Microsoft Entra Connect, ¿cuál es el orden correcto de los pasos?",
    options: [
      "Instalar Entra Connect → Habilitar sincronización → Configurar ajustes → Sincronizar cambios",
      "Configurar ajustes → Instalar Entra Connect → Habilitar sincronización → Sincronizar cambios",
      "Instalar Entra Connect → Configurar ajustes de sincronización → Habilitar sincronización → Sincronizar cambios",
      "Habilitar sincronización → Instalar Entra Connect → Configurar ajustes → Sincronizar cambios",
    ],
    correctAnswer: "Instalar Entra Connect → Configurar ajustes de sincronización → Habilitar sincronización → Sincronizar cambios",
    explaination: "El orden correcto es: (1) Instalar Microsoft Entra Connect en el servidor local para crear el puente entre el AD local y Entra ID; (2) Configurar los ajustes de sincronización (qué sincronizar y con qué frecuencia); (3) Habilitar la sincronización de identidades para activar el motor de sincronización; (4) Sincronizar los cambios para asegurar que las actualizaciones del AD local se reflejen en Entra ID.",
  },
  {
    id: 877,
    categoryId: "azure-services",
    text: "Una empresa de manufactura necesita una conexión de alta velocidad y dedicada a Azure para procesamiento de datos en tiempo real, además de una ruta de conmutación por error segura. ¿Qué opciones deben considerar? (Selecciona dos respuestas)",
    options: [
      "ExpressRoute",
      "VPN basada en rutas con configuración activo-activo",
      "VPN basada en políticas",
      "Emparejamiento de redes virtuales",
    ],
    correctAnswers: [
      "ExpressRoute",
      "VPN basada en rutas con configuración activo-activo",
    ],
    explaination: "ExpressRoute proporciona una conexión privada, dedicada y de alto rendimiento a Azure, ideal para transferencia de datos en tiempo real al eludir la red pública. Una VPN basada en rutas con configuración activo-activo admite enrutamiento dinámico y puede configurarse para alta disponibilidad como respaldo si ExpressRoute falla. La VPN basada en políticas es demasiado limitada para escenarios de alta disponibilidad, y el emparejamiento de redes virtuales conecta redes virtuales de Azure entre sí, no entornos locales con Azure.",
  },
  {
    id: 878,
    categoryId: "azure-services",
    text: "Los conjuntos de escalado de máquinas virtuales (VM Scale Sets) automatizan el escalado de VMs según la demanda o un programa predefinido.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Los conjuntos de escalado de VMs permiten a Azure agregar o quitar instancias de VM automáticamente según la demanda, como durante picos de tráfico o según un programa establecido.",
  },
  {
    id: 879,
    categoryId: "azure-services",
    text: "Los conjuntos de disponibilidad aseguran que todas las VMs del grupo se reinicien simultáneamente durante el mantenimiento.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Los conjuntos de disponibilidad están diseñados para evitar que todas las VMs de un grupo se reinicien al mismo tiempo. Utilizan dominios de actualización para distribuir las VMs en diferentes ciclos de actualización, garantizando que algunas instancias permanezcan disponibles durante el mantenimiento planificado.",
  },
  {
    id: 880,
    categoryId: "azure-services",
    text: "Un dominio de error agrupa las VMs según fuentes comunes de energía y red.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Los dominios de error protegen contra fallos de hardware distribuyendo las VMs en diferentes equipos físicos, fuentes de alimentación y conmutadores de red, de modo que un fallo en un dominio no afecte a todos los recursos.",
  },
  {
    id: 881,
    categoryId: "azure-services",
    text: "Los conjuntos de disponibilidad de Azure permiten aplicar actualizaciones sin detener todas las VMs al mismo tiempo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Con dominios de actualización y dominios de error, Azure puede aplicar parches y mantenimiento sin detener toda la aplicación, manteniendo los servicios en funcionamiento durante las actualizaciones.",
  },
  {
    id: 882,
    categoryId: "azure-services",
    text: "¿Qué herramienta mantiene automáticamente los archivos sincronizados entre un servidor Windows local y un entorno de nube de Azure? (Selecciona una respuesta)",
    options: [
      "Azure File Sync",
      "Azure Storage Explorer",
      "AzCopy",
      "Azure Backup",
    ],
    correctAnswer: "Azure File Sync",
    explaination: "Azure File Sync está diseñado específicamente para mantener sincronizados los archivos automáticamente entre un servidor Windows local y Azure Files. Azure Storage Explorer es una herramienta visual para gestionar cuentas de almacenamiento manualmente; AzCopy es una utilidad de línea de comandos para transferencias puntuales; Azure Backup está diseñado para copia de seguridad y recuperación, no para sincronización continua.",
  },
  {
    id: 883,
    categoryId: "azure-services",
    text: "¿Cuál de las siguientes opciones NO es un modelo de conectividad admitido por Azure ExpressRoute? (Selecciona una respuesta)",
    options: [
      "Conectividad de cualquier a cualquier (any-to-any)",
      "Conexión Ethernet de punto a punto",
      "Conexión cruzada virtual en instalaciones de coubicación",
      "Conexión VPN de punto a sitio",
    ],
    correctAnswer: "Conexión VPN de punto a sitio",
    explaination: "ExpressRoute admite conectividad any-to-any (para WAN), conexiones Ethernet de punto a punto y conexiones cruzadas virtuales en instalaciones de coubicación. Las conexiones VPN de punto a sitio (para dispositivos cliente individuales como laptops) no forman parte del modelo de ExpressRoute; esa funcionalidad está cubierta por Azure VPN Gateway.",
  },
  {
    id: 884,
    categoryId: "azure-management",
    text: "Un equipo de desarrollo desea explorar los servicios de Azure sin incurrir en costos, necesita acceso temporal a recursos de Azure durante un módulo de formación y prefiere que los recursos creados se eliminen automáticamente al finalizar. ¿Qué característica o tipo de cuenta de Azure se adapta mejor a sus necesidades? (Selecciona una respuesta)",
    options: [
      "Cuenta gratuita de Azure",
      "Cuenta gratuita de Azure para estudiantes",
      "Espacio aislado de Microsoft Learn (sandbox)",
      "Suscripción de pago de Azure con límites de gasto",
    ],
    correctAnswer: "Espacio aislado de Microsoft Learn (sandbox)",
    explaination: "El espacio aislado de Microsoft Learn proporciona acceso temporal a recursos de Azure durante los módulos de aprendizaje y elimina automáticamente los recursos creados al finalizar el módulo, sin cargos sorpresa. La cuenta gratuita de Azure y la cuenta de estudiante requieren eliminar los recursos manualmente; una suscripción de pago requiere supervisión manual.",
  },
  {
    id: 885,
    categoryId: "azure-management",
    text: "Su organización usa Active Directory local y desea aprovechar aplicaciones en la nube de forma segura con una experiencia de identidad consistente. ¿Qué servicio sería el mejor para sincronizar identidades entre ambos entornos? (Selecciona una respuesta)",
    options: [
      "Azure Active Directory B2C",
      "Microsoft Entra Domain Services",
      "Microsoft Entra Connect",
      "Microsoft Authenticator",
    ],
    correctAnswer: "Microsoft Entra Connect",
    explaination: "Microsoft Entra Connect es la herramienta adecuada porque actúa como puente entre el Active Directory local y Microsoft Entra ID, sincronizando automáticamente las identidades de usuario para que puedan iniciar sesión con las mismas credenciales en aplicaciones locales y en la nube. Azure AD B2C es para identidades de consumidores externos; Entra Domain Services admite protocolos heredados pero no sincroniza identidades; Microsoft Authenticator es una aplicación de MFA.",
  },
  {
    id: 886,
    categoryId: "azure-services",
    text: "Su empresa está construyendo un motor de recomendaciones que requiere almacenar grandes cantidades de datos no estructurados y proporcionar acceso global en tiempo real. ¿Qué servicio de base de datos de Azure se adapta mejor a este requisito? (Selecciona una respuesta)",
    options: [
      "Azure SQL Database",
      "Azure Cosmos DB",
      "Azure Synapse Analytics",
      "Azure Data Lake",
    ],
    correctAnswer: "Azure Cosmos DB",
    explaination: "Azure Cosmos DB está diseñado para escenarios que requieren acceso de alta velocidad a datos no estructurados o semiestructurados de forma global, con baja latencia y distribución global automática. Azure SQL Database está optimizado para datos relacionales; Azure Synapse Analytics es para análisis de big data; Azure Data Lake es excelente para almacenar datos en bruto, pero no está diseñado para respuestas en tiempo real a nivel de aplicación.",
  },
  {
    id: 887,
    categoryId: "azure-management",
    text: "El acceso condicional puede requerir que los usuarios se autentiquen con MFA antes de acceder a los recursos corporativos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Una de las condiciones más comunes del acceso condicional es exigir la autenticación multifactor (MFA). Los usuarios pueden necesitar verificar su identidad con un segundo factor, como una aplicación móvil o un código SMS, antes de acceder a datos sensibles.",
  },
  {
    id: 888,
    categoryId: "azure-management",
    text: "El acceso condicional otorga automáticamente acceso a todas las aplicaciones corporativas después de un inicio de sesión exitoso.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "El acceso condicional no concede acceso simplemente tras un inicio de sesión exitoso. El acceso se determina evaluando un conjunto de directivas definidas que pueden incluir la ubicación del usuario, el cumplimiento del dispositivo, el nivel de riesgo o el estado de MFA.",
  },
  {
    id: 889,
    categoryId: "azure-management",
    text: "Las directivas de acceso condicional pueden aplicarse según el cumplimiento del dispositivo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El acceso condicional puede evaluar el estado de cumplimiento del dispositivo del usuario, por ejemplo, bloqueando el acceso desde una laptop personal no administrada pero permitiéndolo desde un dispositivo corporativo que cumple los estándares de seguridad.",
  },
  {
    id: 890,
    categoryId: "azure-management",
    text: "Las directivas de acceso condicional no pueden usarse para bloquear métodos de autenticación heredados.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "El acceso condicional puede bloquear protocolos heredados como IMAP o POP3, que no admiten MFA, lo que ayuda a reforzar la postura de seguridad de la organización.",
  },
  {
    id: 891,
    categoryId: "azure-management",
    text: "Una iniciativa de Azure Policy es una colección de múltiples directivas relacionadas.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Las iniciativas de Azure Policy agrupan definiciones de directivas relacionadas para facilitar la administración de múltiples directivas que persiguen un objetivo común de cumplimiento.",
  },
  {
    id: 892,
    categoryId: "azure-management",
    text: "Las iniciativas no pueden usarse para rastrear el cumplimiento a través de múltiples directivas.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Las iniciativas están diseñadas específicamente para proporcionar una vista unificada del cumplimiento de todas las directivas incluidas, permitiendo ver el cumplimiento general en un solo panel.",
  },
  {
    id: 893,
    categoryId: "azure-management",
    text: "Las iniciativas de Azure Policy ayudan a las organizaciones a alcanzar objetivos de cumplimiento más amplios.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Las iniciativas de Azure Policy ayudan a las organizaciones a cumplir objetivos de cumplimiento más amplios al aplicar un conjunto coherente de reglas en todos los recursos en la nube, asegurando que todos los equipos y departamentos estén alineados con los estándares de gobernanza.",
  },
  {
    id: 894,
    categoryId: "azure-management",
    text: "Las iniciativas en Azure Policy aplican directivas de forma aleatoria a diferentes recursos.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Las iniciativas no aplican directivas de forma aleatoria. Trabajan dentro del ámbito que se define (suscripción, grupo de recursos o grupo de administración), garantizando que la aplicación sea estructurada y predecible.",
  },
  {
    id: 895,
    categoryId: "azure-management",
    text: "El uso del modelo de precios de pago por uso de Azure proporciona flexibilidad sin compromisos a largo plazo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "El modelo de pago por uso permite a los usuarios consumir servicios de Azure bajo demanda sin necesidad de comprometerse con un plan a largo plazo, lo que ofrece gran flexibilidad para cargas de trabajo fluctuantes o temporales.",
  },
  {
    id: 896,
    categoryId: "azure-management",
    text: "La fijación de precios basada en consumo significa que solo se paga por los recursos cuando están activamente en uso.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "Azure factura por la capacidad aprovisionada, que incluye recursos reservados o en ejecución continua, incluso si están inactivos. No solo se cobra cuando los recursos están realizando trabajo activo.",
  },
  {
    id: 897,
    categoryId: "azure-management",
    text: "La calculadora de precios de Azure aprovisiona automáticamente los recursos seleccionados en el cálculo.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Falso",
    explaination: "La calculadora de precios de Azure es simplemente una herramienta de previsión. No implementa nada; solo ayuda a estimar los costos mensuales según la configuración y la región seleccionada.",
  },
  {
    id: 898,
    categoryId: "azure-management",
    text: "Las regiones de Azure se agrupan en zonas para ayudar a determinar los costos de ancho de banda de red.",
    options: ["Verdadero", "Falso"],
    correctAnswer: "Verdadero",
    explaination: "Las regiones de Azure se agrupan en zonas de facturación, y estas zonas determinan cómo se aplican los costos de transferencia de datos. Por ejemplo, transferir datos entre dos regiones en la misma zona puede ser más económico que entre regiones en zonas diferentes.",
  },
  {
    id: 899,
    categoryId: "azure-management",
    text: "Una empresa está preocupada de que recursos críticos en Azure puedan eliminarse accidentalmente. Quieren garantizar que ciertos recursos puedan modificarse pero no eliminarse. ¿Qué tipo de bloqueo deben aplicar? (Selecciona una respuesta)",
    options: [
      "Bloqueo de solo lectura",
      "Bloqueo de eliminación",
      "Azure Policy",
      "Control de acceso basado en roles (RBAC)",
    ],
    correctAnswer: "Bloqueo de eliminación",
    explaination: "El bloqueo de eliminación impide que los usuarios eliminen un recurso, pero aún permite realizar modificaciones. Es ideal cuando un recurso está en uso activo y puede necesitar actualizaciones, pero se quiere evitar el riesgo de que alguien lo elimine accidentalmente. El bloqueo de solo lectura bloquearía tanto la eliminación como la modificación; Azure Policy aplica reglas de configuración y cumplimiento; RBAC define quién puede hacer qué, pero no evita directamente eliminaciones accidentales como lo hace un bloqueo.",
  },
  {
    id: 900,
    categoryId: "azure-management",
    text: "¿Cuál de las siguientes características NO forma parte de las capacidades de monitorización de Application Insights? (Selecciona una respuesta)",
    options: [
      "Monitorización de tasas de solicitudes y tasas de error",
      "Monitorización del rendimiento de dependencias",
      "Monitorización de tiempos de carga de páginas",
      "Monitorización de interrupciones globales del servicio de Azure",
    ],
    correctAnswer: "Monitorización de interrupciones globales del servicio de Azure",
    explaination: "Application Insights monitoriza tasas de solicitudes, tasas de errores, rendimiento de dependencias y tiempos de carga de páginas. Sin embargo, la monitorización de interrupciones globales del servicio de Azure está fuera de su alcance; esa responsabilidad recae en Azure Service Health, que notifica sobre problemas que afectan a los servicios de Azure en tu región o globalmente.",
  },
  {
    id: 901,
    categoryId: "azure-management",
    text: "Un administrador desea generar informes oficiales sobre incidentes de servicio en Azure para compartir con las partes interesadas. ¿Qué tipo de informe oficial puede generarse desde Azure Service Health? (Selecciona una respuesta)",
    options: [
      "Informe de estado del servicio",
      "Informe de análisis de causa raíz (RCA)",
      "Informe de mantenimiento planificado",
      "Informe de resumen de incidentes",
    ],
    correctAnswer: "Informe de análisis de causa raíz (RCA)",
    explaination: "El informe de análisis de causa raíz (RCA) es un informe oficial generado por Azure Service Health que proporciona un desglose detallado del incidente, incluyendo la causa raíz, el alcance del impacto y las medidas de mitigación adoptadas. El informe de estado del servicio muestra el estado actual, el informe de mantenimiento planificado se centra en eventos programados, y el resumen de incidentes no es un tipo de informe oficial de Azure Service Health.",
  },
  {
    id: 902,
    categoryId: "azure-management",
    text: "¿Qué dos componentes se pueden usar para implementar una implementación de infraestructura como código (IaC)? (Selecciona dos respuestas)",
    options: [
      "Bicep",
      "Plantillas ARM",
      "Azure Policy",
      "Azure Arc",
    ],
    correctAnswers: [
      "Bicep",
      "Plantillas ARM",
    ],
    explaination: "Bicep es un lenguaje específico de dominio que simplifica la escritura de código para implementar recursos de Azure, siendo una alternativa más legible al JSON. Las plantillas ARM son archivos en formato JSON que definen configuraciones de infraestructura y pueden implementarse de forma declarativa. Azure Policy aplica cumplimiento pero no aprovisiona infraestructura; Azure Arc gestiona recursos en entornos híbridos y multinube, pero no ofrece funcionalidad de IaC por sí mismo.",
  },
  {
    id: 903,
    categoryId: "azure-management",
    text: "¿Qué característica de Azure puede ayudar a mantenerse organizado y rastrear el uso basándose en metadatos asociados a los recursos? (Selecciona una respuesta)",
    options: [
      "Etiquetas (Tags)",
      "Rastreadores (Tracers)",
      "Valores (Values)",
      "Grupos de recursos",
    ],
    correctAnswer: "Etiquetas (Tags)",
    explaination: "Las etiquetas en Azure son pares clave-valor que permiten adjuntar metadatos a los recursos, facilitando la agrupación lógica, el seguimiento de costos y el uso con mayor precisión. Los grupos de recursos son útiles para estructurar recursos, pero no proporcionan el seguimiento basado en metadatos y análisis de costos que ofrecen las etiquetas.",
  },
  {
    id: 904,
    categoryId: "azure-management",
    text: "Su equipo está migrando cargas de trabajo a Azure y necesita entender los posibles ahorros de costos a lo largo del tiempo. ¿Cuáles dos herramientas serían beneficiosas para comparar costos de Azure con infraestructura local y estimar gastos de recursos aprovisionados? (Selecciona dos respuestas)",
    options: [
      "Calculadora de precios",
      "Calculadora TCO",
      "Azure Advisor",
      "Alertas de costos",
    ],
    correctAnswers: [
      "Calculadora de precios",
      "Calculadora TCO",
    ],
    explaination: "La calculadora de precios es una herramienta de planificación que permite estimar el costo de los servicios de Azure antes de implementarlos. La calculadora TCO compara el costo de ejecutar cargas de trabajo en Azure frente a configuraciones locales tradicionales, útil para planificación a largo plazo. Azure Advisor da recomendaciones de optimización pero no hace comparaciones entre Azure y entornos locales; las alertas de costos notifican cuando el gasto supera un umbral pero no ayudan a estimar o comparar costos.",
  },
  {
    id: 905,
    categoryId: "azure-management",
    text: "Tiene una máquina virtual de Azure a la que solo se accede entre las 9:00 y las 17:00 cada día. ¿Qué debe hacer para minimizar costos pero preservar los discos duros y los datos asociados? (Selecciona una respuesta)",
    options: [
      "Desasignar la máquina virtual cuando no sea necesaria",
      "Eliminar la máquina virtual cuando no sea necesaria",
      "Implementar administración de identidades con privilegios (PIM)",
      "Cambiar el tamaño de la máquina virtual a un tamaño más pequeño",
    ],
    correctAnswer: "Desasignar la máquina virtual cuando no sea necesaria",
    explaination: "Al desasignar una máquina virtual, se detiene el uso de recursos de cómputo y ya no se cobra por CPU ni memoria, pero Azure conserva los discos y datos adjuntos. Cuando se necesite la VM de nuevo, puede reiniciarse con todo intacto. Eliminar la VM borraría los discos y los datos permanentemente; PIM gestiona el acceso a recursos pero no afecta los costos de ejecución; cambiar el tamaño a una VM más pequeña reduciría ligeramente los costos pero seguiría cobrando 24/7.",
  },
];
