# Roadmap de Producto — Quiz Platform
## Visión: "Convierte cualquier contenido en aprendizaje activo"

> Este documento detalla cada etapa del producto con features, lógica de negocio y notas técnicas.
> Complementa `PRODUCT_REQUIREMENTS.md` con la dirección estratégica del producto.

---

## Etapa 1 — MVP (base actual)

**Objetivo:** Plataforma funcional con quizzes estáticos, buena UX, arquitectura lista para escalar.

Ya definida en `PRODUCT_REQUIREMENTS.md`. El foco es tener la base técnica sólida antes de agregar complejidad.

**Criterio de salida:** Un usuario puede explorar quizzes, completar uno, ver sus resultados y reintentar. Sin login, sin IA, sin persistencia.

---

## Etapa 2 — Retención ("sticky product")

**Objetivo:** Que el usuario tenga razones concretas para volver todos los días.

Sin retención no hay negocio de suscripción. Esta etapa construye los mecanismos que hacen que el producto sea acumulativo — es decir, que valga más cuanto más tiempo lo usás.

---

### 2.1 Autenticación y perfil base

**Qué es:**
Login/registro con email y OAuth (Google). El perfil guarda historial, progreso y preferencias. Sin esto nada de lo demás persiste.

**Features:**
- Registro con email + verificación
- Login con Google / GitHub
- Perfil: avatar, nombre, bio corta
- Configuración: tema (dark/light), idioma futuro, notificaciones
- Eliminar cuenta (requerimiento legal)

**Lógica de negocio:**
- Los usuarios guest pueden jugar pero se les muestra un nudge al terminar cada quiz: *"Guardá tu progreso — es gratis"*
- El historial de una sesión guest se transfiere al crear cuenta (no se pierde lo jugado)

**Notas técnicas:**
- Supabase Auth con Row Level Security en todas las tablas
- Middleware Next.js para proteger rutas `/profile`, `/dashboard`
- Hook `useUser()` disponible globalmente via Zustand
- Tabla `profiles` sincronizada con `auth.users` via trigger Supabase

---

### 2.2 Historial y resultados persistentes

**Qué es:**
Todo quiz completado queda guardado. El usuario puede revisar qué respondió, cuánto tardó y cómo evolucionó con el tiempo.

**Features:**
- Historial de quizzes completados (fecha, score, tiempo)
- Revisión post-quiz: ver cada pregunta con la respuesta que dio y la correcta
- Comparar intentos del mismo quiz ("primera vez: 60%, última vez: 85%")
- Borrar historial (privacidad)

**Lógica de negocio:**
- Guardar todos los `UserAnswer` por resultado, no solo el score final
- Calcular métricas derivadas: tiempo promedio por pregunta, categorías más fuertes/débiles
- Limitar historial en plan Free (últimos 10 resultados) vs Pro (ilimitado)

**Notas técnicas:**
```sql
-- Tablas clave
quiz_results (id, user_id, quiz_id, score, time_used, completed_at)
user_answers (id, result_id, question_id, selected_answer_ids[], is_correct, time_spent)
```
- Índices en `user_id` y `completed_at` para queries de historial
- Server Action para guardar resultado atómicamente (result + answers en una transacción)

---

### 2.3 Dashboard personal de aprendizaje

**Qué es:**
Una página que muestra al usuario exactamente cómo está aprendiendo: fortalezas, debilidades, tiempo invertido y evolución.

**Features:**
- Score promedio global y por categoría
- Gráfico de actividad (tipo GitHub contribution graph — días activos)
- Racha actual y racha máxima (streak)
- Categorías donde más falla (oportunidades de mejora)
- Tiempo total de estudio acumulado
- Quizzes completados este mes vs mes anterior
- Próximos quizzes recomendados basados en debilidades

**Lógica de negocio:**
- La racha se incrementa si el usuario completa al menos 1 quiz por día
- Las recomendaciones priorizan categorías con score < 70% en los últimos 30 días
- El dashboard es el primer lugar que ve el usuario al hacer login — debe ser motivador, no abrumador

**Notas técnicas:**
- Calcular métricas en el servidor (Server Component) para no exponer lógica al cliente
- Cachear stats pesadas con `revalidate` (no necesitan ser real-time)
- Recharts para gráficos de evolución temporal
- Skeleton loaders para cada widget del dashboard

---

### 2.4 Paths de aprendizaje

**Qué es:**
Secuencias curadas de quizzes con progresión de dificultad hacia un objetivo concreto. En vez de quizzes sueltos, el usuario sigue un camino.

**Features:**
- Paths predefinidos: "Fundamentos de JavaScript", "Preparación IELTS B2", "Historia del Arte"
- Cada path tiene: descripción, duración estimada, nivel, prerequisitos opcionales
- Progreso visual del path (porcentaje completado, quizzes restantes)
- Desbloqueo secuencial: el quiz 3 se habilita al completar el 2 con score ≥ 60%
- Certificado de completación al terminar el path (ver Etapa 5)
- Paths recomendados según historial del usuario

**Lógica de negocio:**
- Un path puede mezclar quizzes propios y de creadores (cuando haya marketplace)
- El score mínimo para avanzar es configurable por path (default 60%)
- Si el usuario falla, puede reintentar sin límite pero con un cooldown de 10 minutos (evita clickear ciegamente)
- Los paths premium son parte del plan Pro

**Notas técnicas:**
```typescript
interface LearningPath {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedHours: number
  steps: PathStep[]
  isPremium: boolean
}

interface PathStep {
  order: number
  quizId: string
  minScoreToAdvance: number  // 0-100
  isUnlocked: boolean        // calculado en runtime
}
```
- Tabla `user_path_progress` con estado por step
- Función de desbloqueo como lógica de dominio pura (testeable sin DB)

---

### 2.5 Spaced Repetition

**Qué es:**
Las preguntas que el usuario responde mal vuelven a aparecer en el momento óptimo para reforzar el recuerdo. Es el mecanismo de memorización más efectivo científicamente (algoritmo SM-2, base de Anki).

**Features:**
- Cola de repaso: preguntas falladas en los últimos 30 días, ordenadas por prioridad
- Indicador "X preguntas para repasar hoy"
- Sesión de repaso: 10-15 preguntas, mix de preguntas difíciles del usuario
- Notificación/recordatorio diario si hay preguntas pendientes de repaso
- Estadística: "retención estimada" por categoría

**Lógica de negocio (algoritmo SM-2 simplificado):**
```
Cada pregunta tiene:
  - easiness_factor (EF): empieza en 2.5, baja si falla
  - interval: días hasta el próximo repaso
  - repetitions: cuántas veces la respondió bien seguidas

Al responder:
  - Bien → interval se multiplica por EF, sube repetitions
  - Mal  → interval vuelve a 1, repetitions = 0, EF baja 0.15
```

**Notas técnicas:**
```sql
-- Por usuario y pregunta
spaced_repetition_cards (
  user_id, question_id,
  easiness_factor DECIMAL DEFAULT 2.5,
  interval_days INT DEFAULT 1,
  repetitions INT DEFAULT 0,
  next_review_at TIMESTAMP,
  last_reviewed_at TIMESTAMP
)
```
- Cron job diario (Supabase Edge Function) para calcular próximas revisiones
- El repaso es una feature exclusiva Pro — gran driver de conversión

---

## Etapa 3 — Monetización freemium

**Objetivo:** Convertir usuarios activos en suscriptores pagos con una propuesta de valor clara y sin fricción.

---

### 3.1 Arquitectura de planes

| Feature | Free | Pro | Creator |
|---|---|---|---|
| Quizzes públicos | ✅ Ilimitado | ✅ Ilimitado | ✅ Ilimitado |
| Historial | Últimos 10 | ✅ Ilimitado | ✅ Ilimitado |
| Dashboard stats | Básico | ✅ Completo | ✅ Completo |
| Spaced repetition | ❌ | ✅ | ✅ |
| Paths de aprendizaje | Solo gratuitos | ✅ Todos | ✅ Todos |
| Generación con IA | 3/mes | ✅ Ilimitado | ✅ Ilimitado |
| Quizzes privados | ❌ | ✅ 10 | ✅ Ilimitado |
| Exportar resultados PDF | ❌ | ✅ | ✅ |
| Publicar quizzes | ❌ | ❌ | ✅ |
| Analytics de creador | ❌ | ❌ | ✅ |
| Sin ads (futuro) | ❌ | ✅ | ✅ |
| **Precio** | $0 | ~$8/mes | ~$15/mes |

---

### 3.2 Sistema de pagos (Stripe)

**Features:**
- Checkout con Stripe Checkout (hosted, menos fricción)
- Suscripción mensual y anual (anual con descuento ~20%)
- Período de prueba Pro: 7 días gratis
- Portal de cliente: cambiar plan, cancelar, ver facturas (Stripe Customer Portal)
- Downgrade graceful: al cancelar, mantiene Pro hasta fin del período

**Lógica de negocio:**
- Webhook de Stripe actualiza el estado del plan en DB en tiempo real
- Feature flags basados en el plan: `canUseAI()`, `canPublishQuizzes()`, etc.
- Si el pago falla, 3 días de gracia antes de degradar a Free
- Email de dunning automático (Stripe maneja esto)

**Notas técnicas:**
```typescript
// Hook para verificar acceso a features
function usePlanFeature(feature: PlanFeature): boolean {
  const { user } = useUser()
  return checkFeatureAccess(user.plan, feature)
}

// Uso en componentes
const canUseAI = usePlanFeature('ai_generation')
```
- Tablas: `subscriptions`, `plans` sincronizadas via Stripe webhooks
- Nunca confiar en el cliente para verificar el plan — siempre validar en servidor

---

### 3.3 Paywall UX

**Principios:**
- Mostrar el valor antes de pedir el pago (no bloquear, seducir)
- El usuario Free debe sentir que hay mucho más esperándolo
- Nunca interrumpir el flujo activo — el paywall aparece en transiciones naturales

**Implementación:**
- Feature bloqueada → modal con propuesta de valor concreta, no genérica
  - ❌ "Esta es una feature Pro"
  - ✅ "Con Pro podés repasar las 12 preguntas que fallaste esta semana con spaced repetition"
- Banner sutil en el dashboard: "X días de prueba gratis — sin tarjeta"
- Post-quiz para usuarios Free: "Tu resultado no se guardó. Creá una cuenta gratis para no perderlo"
- Límite de IA visible: "2 de 3 generaciones usadas este mes"

---

## Etapa 4 — Contenido generado por IA

**Objetivo:** Ser la herramienta que cualquier persona usa para aprender activamente desde sus propios materiales.

---

### 4.1 Generación de quiz desde texto

**Qué es:**
El usuario pega texto (apuntes, artículo, transcripción) y la IA genera un quiz completo y personalizado.

**Features:**
- Input de texto libre (hasta 10.000 caracteres en Pro)
- Configurar antes de generar: cantidad de preguntas (5-20), dificultad, tipo (opción múltiple, verdadero/falso, mixto)
- Preview del quiz antes de guardarlo
- Editar preguntas generadas antes de guardar
- Regenerar preguntas específicas que no gustan
- Guardar como quiz privado o publicar

**Lógica de negocio:**
- La IA debe generar preguntas que requieran comprensión, no solo memorización de datos literales
- Detectar idioma del texto y generar en el mismo idioma
- Si el texto es muy corto (<200 palabras), advertir que la calidad puede ser baja
- Guardar el "source text" encriptado para poder regenerar o auditar

**Prompt engineering:**
```
Sistema: Eres un experto en diseño instruccional. Genera quizzes que evalúen comprensión 
profunda, no memorización. Las preguntas deben ser claras, sin ambigüedad, con una sola 
respuesta correcta inequívoca. Los distractores deben ser plausibles pero claramente incorrectos.

Formato de respuesta: JSON estricto con schema [Quiz].
```

**Notas técnicas:**
- Server Action con streaming para mostrar progreso de generación
- Validar y sanitizar el output de la IA con Zod antes de guardar
- Rate limiting por usuario (no solo por plan) para controlar costos de API
- Cachear quizzes generados idénticos (mismo hash de texto) para reducir costos

---

### 4.2 Generación desde PDF

**Qué es:**
El usuario sube un PDF (apuntes, libro, paper) y la IA extrae el contenido y genera un quiz.

**Features:**
- Upload de PDF hasta 20MB (Pro) / 5MB (límite Free)
- Barra de progreso: "Analizando documento… Extrayendo conceptos clave… Generando preguntas…"
- Seleccionar rango de páginas si el PDF es largo
- Mismo flujo de edición y guardado que generación desde texto

**Notas técnicas:**
- Extraer texto del PDF con `pdf-parse` o `pdfjs-dist` en el servidor
- Para PDFs con imágenes/scans: OCR con Tesseract.js o API externa
- Chunking: dividir documentos largos en secciones y generar preguntas por sección
- Almacenar PDFs en Supabase Storage con path `user_id/filename_hash.pdf`
- Nunca procesar el PDF en el cliente — siempre server-side

---

### 4.3 Generación desde URL

**Qué es:**
El usuario pega un link (artículo, blog post, Wikipedia, documentación) y la IA genera un quiz sobre ese contenido.

**Features:**
- Input de URL con validación
- Preview del contenido extraído antes de generar
- Indicador de fuente en el quiz generado ("Basado en: [título del artículo]")
- Manejo de errores claro: paywalls, páginas no accesibles, contenido vacío

**Notas técnicas:**
- Web scraping con `cheerio` o `@mozilla/readability` para extraer contenido limpio
- Respetar `robots.txt`
- Timeout de 10 segundos para fetch
- Cachear el contenido scrapeado por URL + fecha (no re-fetchear el mismo link el mismo día)

---

### 4.4 Generación desde YouTube

**Qué es:**
El usuario pega un link de YouTube y la IA genera un quiz sobre el contenido del video usando la transcripción.

**Features:**
- Input de URL de YouTube
- Mostrar título y thumbnail del video confirmando que es el correcto
- Si el video tiene capítulos, permitir seleccionar sobre qué sección generar
- Atribución: "Quiz generado desde [título del video] por [canal]"

**Notas técnicas:**
- Extraer transcripción con `youtube-transcript` (API no oficial pero estable)
- Fallback: si no hay transcripción disponible, informar al usuario
- No guardar la transcripción completa — solo el hash para auditoría
- Validar que la URL sea de YouTube antes de procesar

---

### 4.5 Quiz adaptativo con IA

**Qué es:**
El quiz ajusta su dificultad en tiempo real según las respuestas del usuario. Si acierta seguido, las preguntas se vuelven más difíciles. Si falla, se vuelven más simples.

**Features:**
- Modo "Adaptativo" como opción al iniciar cualquier quiz con suficientes preguntas
- Indicador visual sutil del nivel actual (sin mostrar números, algo como una barra de "intensidad")
- Reporte final: "El quiz se adaptó 4 veces durante la sesión"

**Lógica de negocio:**
```
Ventana deslizante de las últimas 3 respuestas:
  - 3 correctas → subir dificultad
  - 2 incorrectas → bajar dificultad
  - Mantener historial de nivel para el reporte final
```

**Notas técnicas:**
- El pool de preguntas debe estar taggeado por dificultad (easy/medium/hard) para funcionar
- Para quizzes generados por IA, pedir explícitamente preguntas en 3 niveles de dificultad
- La lógica adaptativa vive en el domain layer (pura, sin side effects)

---

## Etapa 5 — Comunidad y creadores

**Objetivo:** Los usuarios generan el contenido, la plataforma crece sola.

---

### 5.1 Publicación de quizzes

**Qué es:**
Los usuarios (plan Creator) pueden publicar sus quizzes para que otros los jueguen.

**Features:**
- Publicar quiz: agregar descripción, tags, dificultad, imagen de portada
- Vista pública del perfil del creador con sus quizzes publicados
- Quizzes con visibilidad: público, con link, privado
- Reportar quiz (contenido inapropiado)
- Featured quizzes curados por el equipo

**Lógica de negocio:**
- Un quiz publicado no puede editarse sin crear una nueva versión (preservar la experiencia de otros)
- Los quizzes con reportes se ocultan automáticamente hasta revisión manual
- El creador puede ver cuántas personas completaron su quiz y el score promedio

**Notas técnicas:**
- Campo `status: 'draft' | 'published' | 'archived' | 'under_review'`
- Moderación: cola de revisión para quizzes nuevos de cuentas sin historial
- Full-text search con `pg_trgm` en Supabase para búsqueda de quizzes

---

### 5.2 Colecciones y Study Sets

**Qué es:**
Agrupar quizzes en colecciones temáticas que se pueden compartir con un link.

**Features:**
- Crear colección: nombre, descripción, quizzes seleccionados (propios o públicos)
- Link compartible: `plataforma.com/sets/[slug]`
- Seguir colecciones de otros usuarios
- "Estudiar esta colección": reproduce todos los quizzes en secuencia
- Colecciones populares en el home/explorar

**Casos de uso concretos:**
- Un profesor comparte un set con sus alumnos via link
- Un estudiante arma su set de preparación para un examen
- Un influencer de educación comparte su "lista de lectura" como quizzes

---

### 5.3 Analytics para creadores

**Qué es:**
Dashboard donde el creador ve el impacto de sus quizzes.

**Features:**
- Total de plays, plays únicos, completions, tasa de completión
- Score promedio de todos los usuarios en su quiz
- Pregunta más fallada (para mejorar el quiz)
- Gráfico de plays por día/semana
- Top países de donde vienen los jugadores
- Quizzes trending (subida de plays en las últimas 24h)

**Notas técnicas:**
- Eventos de analytics guardados en tabla append-only `quiz_events (event_type, quiz_id, user_id, metadata, created_at)`
- Agregaciones calculadas en background (no en tiempo real para no impactar performance)
- Edge Function diaria que calcula y cachea las métricas por creador

---

### 5.4 Sistema social ligero

**Qué es:**
Elementos sociales que aumentan el engagement sin convertir la plataforma en una red social.

**Features:**
- Likes en quizzes
- Comentarios simples post-quiz ("¡Muy buen quiz!", "La pregunta 3 tiene un error")
- Seguir a creadores para ver sus nuevos quizzes
- Feed de actividad: "Los creadores que seguís publicaron X quizzes esta semana"
- Compartir resultado en redes: imagen generada con tu score (Open Graph dinámico)

**Notas técnicas:**
- Generar imagen de resultado con `@vercel/og` (sin canvas, sin puppeteer)
- Notificaciones in-app con Supabase Realtime
- Los comentarios tienen moderación simple: filtro de palabras + reportar

---

## Etapa 6 — Features premium de alto valor

**Objetivo:** Features que por sí solos justifican la suscripción y se convierten en el argumento de venta.

---

### 6.1 Modo examen simulado

**Qué es:**
Replica las condiciones reales de un examen. Sin hints, sin feedback hasta el final, con tiempo estricto.

**Features:**
- Configurar: duración total, cantidad de preguntas, sin feedback durante el examen
- UI diferente al quiz normal: más seria, sin distracciones, timer prominente
- Al terminar: reporte completo como un examen real
  - Score con nota (A/B/C/D/F o porcentaje)
  - Tiempo por pregunta
  - Preguntas no respondidas
  - Comparación con tu mejor intento
  - Comparación con el promedio de todos los usuarios
- Historial de simulacros separado del historial de quizzes normales
- Modo sin internet: los exámenes descargados se pueden hacer offline (PWA)

**Casos de uso:**
- Preparar IELTS, TOEFL, SAT
- Certificaciones técnicas (AWS, Azure, Google Cloud)
- Exámenes universitarios
- Oposiciones y concursos

---

### 6.2 Certificados de completación

**Qué es:**
Al completar un path de aprendizaje o superar un score mínimo en un examen simulado, el usuario recibe un certificado.

**Features:**
- Certificado PDF descargable con: nombre del usuario, path/quiz completado, score obtenido, fecha, ID único verificable
- URL de verificación pública: `plataforma.com/verify/[certificado-id]` — cualquiera puede confirmar que el certificado es real
- Diseño premium, personalizable por el creador del path
- Compatible para subir a LinkedIn (formato correcto de credencial)
- Los paths certificados se marcan con un badge especial en el explorador

**Notas técnicas:**
- Generar PDF con `@react-pdf/renderer` en una Edge Function
- Guardar hash del certificado en DB para verificación
- Los certificados son inmutables — si el usuario repite y mejora, recibe uno nuevo sin invalidar el anterior

---

### 6.3 Plan Educador

**Qué es:**
Un plan específico para docentes que quieren usar la plataforma con sus alumnos, sin que los alumnos paguen.

**Features:**
- El educador crea un "Aula" con código de acceso (similar a Google Classroom)
- Los alumnos se unen gratis con el código — acceden a los quizzes del aula sin plan Pro
- El educador asigna quizzes con fecha límite
- Dashboard del educador: ve los resultados de todos sus alumnos, quién completó, quién no
- Exportar resultados de clase a CSV/Excel para la libreta de notas
- Los alumnos ven su propio progreso pero no el de otros (privacidad)

**Modelo de negocio:**
- Precio por educador: ~$12/mes o ~$80/año
- Los alumnos son gratis (el educador es el que paga — modelo B2B ligero)
- Límite de alumnos por aula: 50 en plan Educador, ilimitado en plan Institución (futuro)

**Por qué es poderoso:**
- Un profesor trae 30-50 alumnos que se registran → potenciales usuarios Pro futuros
- El educador es el decision maker y paga — venta directa simple
- Diferenciador real frente a Kahoot/Quizlet que cobran por alumno

---

### 6.4 Quizzes de pago (Marketplace)

**Qué es:**
Los creadores pueden cobrar por acceso a sus quizzes o colecciones premium.

**Features:**
- El creador fija un precio único por quiz/colección ($1–$50)
- El usuario compra acceso permanente
- La plataforma cobra comisión del 20% (Stripe Connect)
- Preview gratuito: las primeras 3 preguntas son siempre gratis
- Política de reembolso: 7 días sin preguntas

**Lógica de negocio:**
- Usar Stripe Connect para pagos a creadores (no manejar dinero propio)
- Los quizzes de pago tienen badge visual en el explorador
- Los creadores ven sus ingresos en tiempo real en su dashboard
- Umbral mínimo de retiro: $20

**Notas técnicas:**
- Stripe Connect Express para onboarding de creadores simplificado
- Tabla `purchases (user_id, quiz_id, amount, stripe_payment_intent_id, created_at)`
- Verificación de compra en middleware antes de servir el quiz

---

## Etapa 7 — Escala técnica y producto

**Objetivo:** Preparar la plataforma para crecimiento de usuarios y contenido sin degradar la experiencia.

---

### 7.1 PWA + Modo offline

**Features:**
- Instalar como app en móvil (sin App Store)
- Quizzes descargados disponibles sin conexión
- Sincronización automática de resultados al recuperar conexión
- Notificaciones push: racha en riesgo, preguntas de repaso del día

**Notas técnicas:**
- `next-pwa` o configuración manual de Service Worker
- IndexedDB para almacenamiento offline con `idb` o `Dexie.js`
- Background sync para enviar resultados offline cuando vuelve la conexión

---

### 7.2 Internacionalización

**Features:**
- Interfaz en: español, inglés, portugués (los 3 mercados principales de LATAM+España)
- Detección automática de idioma del navegador
- El usuario puede cambiar el idioma en cualquier momento
- Los quizzes mantienen su idioma original — no se traducen automáticamente

**Notas técnicas:**
- `next-intl` para i18n con App Router
- Archivos de traducción en `messages/es.json`, `messages/en.json`, `messages/pt.json`
- Rutas localizadas: `/es/quizzes`, `/en/quizzes`

---

### 7.3 Búsqueda avanzada

**Features:**
- Búsqueda full-text por título, descripción, tags
- Filtros combinables: categoría, dificultad, duración, idioma, rating, gratis/pago
- Ordenar por: relevancia, más jugado, mejor puntuado, más reciente
- Búsqueda con IA: "quizzes para preparar entrevistas de frontend" → interpreta la intención

**Notas técnicas:**
- PostgreSQL full-text search con `to_tsvector` + `pg_trgm`
- Para búsqueda semántica con IA: embeddings con `pgvector` en Supabase
- Índices en columnas de filtrado frecuente

---

### 7.4 Multiplayer / Tiempo real

**Qué es:**
Competir en el mismo quiz en tiempo real contra otros usuarios o contra amigos.

**Features:**
- Crear sala: el host elige el quiz y comparte un código de 6 dígitos
- Hasta 20 jugadores por sala
- Todos responden simultáneamente — el que responde más rápido y bien suma más puntos
- Leaderboard en vivo que se actualiza después de cada pregunta
- Sala privada (con código) o pública (matchmaking aleatorio)
- Modo "espectador" para ver partidas en curso

**Notas técnicas:**
- Supabase Realtime (WebSockets) para sincronización de estado de la sala
- Estado de la sala en servidor — el cliente solo envía acciones
- Lógica de puntuación con factor de velocidad: `points = base_points * (1 + (time_left / time_limit))`
- Rooms con TTL: se limpian automáticamente si llevan 30 minutos inactivas

---

## Resumen estratégico

```
Etapa 1 → Base técnica sólida         [Ahora]
Etapa 2 → Retención y hábito          [+2 meses]
Etapa 3 → Primer peso                 [+3 meses]
Etapa 4 → Diferenciador con IA        [+4 meses]  ← El gran driver de crecimiento
Etapa 5 → Comunidad y contenido UGC   [+6 meses]
Etapa 6 → Features de alto valor      [+8 meses]
Etapa 7 → Escala                      [+12 meses]
```

**El único KPI que importa en cada etapa:**
- Etapa 2: DAU/MAU ratio > 20% (la gente vuelve)
- Etapa 3: Conversion Free→Pro > 4%
- Etapa 4: % de usuarios que usan generación IA al menos 1 vez/mes > 60%
- Etapa 5: % de quizzes creados por usuarios vs equipo > 50%
- Etapa 6: NPS > 50

---

*Documento vivo — revisar y ajustar prioridades cada sprint según métricas reales de usuarios.*