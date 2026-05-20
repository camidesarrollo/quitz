# Product Requirements Document
## Quiz Platform — Next.js + TypeScript

> **Versión:** 1.0  
> **Fase actual:** Fase 1 — MVP  
> **Stack confirmado:** Next.js 14+, TypeScript, TailwindCSS, Shadcn/UI, Zustand, Framer Motion

---

## 1. Visión del Producto

Construir una plataforma de quizzes moderna, escalable y con arquitectura empresarial desde el día uno. El objetivo no es solo un quiz funcional, sino una base de producto que permita evolucionar hacia autenticación, gamificación, analytics, IA y tiempo real sin reescrituras.

**Principios que guían cada decisión técnica:**
- Separación de concerns estricta (Domain / Application / Infrastructure / UI)
- Features independientes y desacopladas
- TypeScript estricto, sin `any`
- Mobile-first en todo momento
- Performance y accesibilidad no son opcionales

---

## 2. Stack Técnico

| Capa | Tecnología | Rol |
|---|---|---|
| Framework | Next.js 14+ (App Router) | Routing, SSR, Server Components, Server Actions |
| Lenguaje | TypeScript (strict mode) | Tipado estático, DX, mantenibilidad |
| Estilos | TailwindCSS | Utility-first, sistema de diseño consistente |
| Componentes | Shadcn/UI | Base accesible, personalizable |
| Estado global | Zustand | Estado del quiz, usuario, preferencias |
| Animaciones | Framer Motion | Transiciones, microinteracciones, feedback |
| Base de datos | Supabase (Fase 2) | Auth, PostgreSQL, Edge Functions, Realtime |
| Deployment | Vercel (primario) | CI/CD, preview deployments, Edge Network |

---

## 3. Arquitectura

### 3.1 Clean Architecture por capas

```
Domain          → Entidades, reglas de negocio, interfaces puras. Sin React.
Application     → Casos de uso, orquestación. Llama a Domain + Infrastructure.
Infrastructure  → Supabase, fetch, APIs externas, repositorios.
Presentation    → Componentes React, páginas, hooks de UI.
```

**Regla de dependencia:** cada capa solo puede importar capas más internas. Presentation → Application → Domain. Infrastructure implementa interfaces de Domain.

### 3.2 Estructura de carpetas

```
src/
├── app/                    # Next.js App Router (páginas, layouts, rutas API)
├── features/               # Módulos por feature (ver 3.3)
├── components/             # Componentes UI compartidos
├── domain/                 # Entidades e interfaces de negocio
│   ├── quiz/
│   ├── user/
│   └── result/
├── application/            # Casos de uso
│   ├── quiz/
│   └── result/
├── infrastructure/         # Implementaciones concretas
│   ├── repositories/
│   └── services/
├── shared/                 # Utils, constantes, helpers
├── hooks/                  # Hooks React reutilizables
├── lib/                    # Configuración de librerías (supabase client, etc.)
├── types/                  # Tipos globales y DTOs
├── styles/                 # Estilos globales
└── config/                 # Variables de entorno tipadas, feature flags
```

### 3.3 Arquitectura por Features

Cada feature es un módulo autocontenido:

```
features/
├── quiz/
│   ├── components/         # QuizCard, QuestionView, AnswerOption, ProgressBar
│   ├── hooks/              # useQuiz, useQuizTimer, useQuizProgress
│   ├── store/              # Zustand slice del quiz
│   ├── types/              # Tipos específicos del feature
│   └── utils/              # Helpers del feature
├── results/
├── categories/
├── auth/                   # Fase 2
├── profile/                # Fase 3
└── admin/                  # Fase 3
```

---

## 4. Modelo de Dominio

### Entidades principales

```typescript
// Domain — nunca depende de React ni de librerías externas

interface Quiz {
  id: string
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: Category
  questions: Question[]
  timeLimit?: number        // segundos, opcional
  tags: string[]
  isPublished: boolean
  createdAt: Date
}

interface Question {
  id: string
  quizId: string
  text: string
  type: 'single' | 'multiple' | 'true_false'
  options: Answer[]
  explanation?: string      // Explicación post-respuesta
  order: number
}

interface Answer {
  id: string
  questionId: string
  text: string
  isCorrect: boolean
}

interface Category {
  id: string
  name: string
  slug: string
  parentId?: string         // Soporte subcategorías
  icon?: string
}

interface QuizResult {
  id: string
  quizId: string
  userId?: string           // Opcional en Fase 1 (guest)
  score: number             // 0–100
  correctAnswers: number
  totalQuestions: number
  timeUsed: number          // segundos
  answers: UserAnswer[]
  completedAt: Date
}

interface UserAnswer {
  questionId: string
  selectedAnswerIds: string[]
  isCorrect: boolean
  timeSpent: number
}
```

---

## 5. Casos de Uso (Application Layer)

### Fase 1 — MVP

| Caso de Uso | Input | Output | Notas |
|---|---|---|---|
| `StartQuiz` | `quizId` | Estado inicial del quiz | Carga preguntas, inicia timer |
| `SubmitAnswer` | `questionId, answerId[]` | Feedback inmediato | Valida, actualiza progreso |
| `AdvanceQuestion` | Estado actual | Siguiente pregunta | Maneja último → resultados |
| `CalculateScore` | `UserAnswer[]` | `QuizResult` | Lógica pura, testeable |
| `RestartQuiz` | `quizId` | Estado inicial | Limpia respuestas previas |
| `GetQuizzesByCategory` | `categoryId, filters` | `Quiz[]` | Con paginación |

### Fase 2+

- `AuthenticateUser` / `RegisterUser`
- `SaveResult` (persistencia en Supabase)
- `GetUserHistory`
- `GetLeaderboard`

---

## 6. Funcionalidades por Fase

### Fase 1 — MVP (actual)

**Sistema de Quiz:**
- [ ] Listado de quizzes con filtro por categoría y dificultad
- [ ] Vista de quiz con preguntas una a una
- [ ] Selección de respuesta con feedback visual inmediato (correcto/incorrecto)
- [ ] Barra de progreso (pregunta X de N)
- [ ] Timer opcional por quiz
- [ ] Pantalla de resultados: score, respuestas correctas/incorrectas, tiempo
- [ ] Revisión post-quiz: ver cada pregunta con la respuesta correcta y explicación
- [ ] Reiniciar quiz
- [ ] Estado persistido en Zustand durante la sesión (no se pierde al navegar)

**Sistema de Categorías:**
- [ ] Categorías y subcategorías (datos estáticos en Fase 1)
- [ ] Filtrado por categoría
- [ ] Filtrado por dificultad
- [ ] Búsqueda básica por título

**UX/UI:**
- [ ] Diseño mobile-first, completamente responsive
- [ ] Transiciones entre preguntas con Framer Motion
- [ ] Estados visuales completos: loading, success, error, empty, disabled
- [ ] Accesibilidad: navegación por teclado, ARIA labels, contraste WCAG AA

### Fase 2 — Auth + Persistencia

- [ ] Login / Registro con Supabase Auth
- [ ] OAuth (Google, GitHub)
- [ ] Guardar resultados por usuario
- [ ] Historial de quizzes completados
- [ ] Perfil de usuario básico
- [ ] Protección de rutas con middleware

### Fase 3 — Gamificación + Dashboard

- [ ] Ranking / Leaderboard
- [ ] Sistema de puntos y badges
- [ ] Estadísticas personales (por categoría, progreso histórico)
- [ ] Dashboard de administrador (CRUD de quizzes, preguntas, categorías)
- [ ] Analytics básico

### Fase 4 — Avanzado

- [ ] Generación de quizzes con IA
- [ ] Modo multiplayer / tiempo real (Supabase Realtime)
- [ ] PWA + modo offline
- [ ] Notificaciones push
- [ ] Internacionalización (i18n)

---

## 7. Diseño y UX

### Principios visuales

- **Estilo:** Moderno, minimalista, premium. Inspirado en Linear, Notion, Stripe.
- **No genérico:** Evitar estética de "AI slop" con gradientes púrpura y fuentes genéricas.
- **Espaciado generoso**, tipografía clara, jerarquía visual fuerte.
- **Dark mode** desde el inicio (Tailwind `dark:` classes).

### Componentes UI clave (Shadcn/UI base + custom)

| Componente | Uso |
|---|---|
| `QuizCard` | Listado de quizzes (título, categoría, dificultad, nº preguntas) |
| `QuestionView` | Texto de pregunta + opciones |
| `AnswerOption` | Botón de respuesta con estados: default, selected, correct, incorrect |
| `ProgressBar` | Progreso visual + número de pregunta |
| `ResultCard` | Score final con desglose |
| `CategoryBadge` | Chip visual por categoría |
| `DifficultyBadge` | Indicador visual de dificultad |
| `Timer` | Cuenta regresiva cuando aplica |

### Estados visuales requeridos

Todos los componentes interactivos deben implementar: `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `success`, `error`.

### Animaciones (Framer Motion)

- Transición entre preguntas: slide horizontal o fade
- Feedback de respuesta: micro-animación en la opción seleccionada
- Entrada de pantalla de resultados: staggered reveal
- Skeleton loading para carga de datos

---

## 8. Estado Global (Zustand)

```typescript
// store/quizStore.ts
interface QuizStore {
  // Estado
  currentQuiz: Quiz | null
  currentQuestionIndex: number
  userAnswers: Map<string, UserAnswer>
  quizStatus: 'idle' | 'active' | 'completed' | 'reviewing'
  timeElapsed: number
  
  // Acciones
  startQuiz: (quiz: Quiz) => void
  submitAnswer: (questionId: string, answerIds: string[]) => void
  nextQuestion: () => void
  previousQuestion: () => void   // Para modo revisión
  completeQuiz: () => QuizResult
  restartQuiz: () => void
  resetStore: () => void
}
```

Slices separados para: quiz, user (Fase 2), preferences (tema, idioma).

---

## 9. Routing (Next.js App Router)

```
app/
├── page.tsx                    # Home — listado de quizzes destacados
├── quizzes/
│   ├── page.tsx                # Explorar todos los quizzes
│   └── [slug]/
│       ├── page.tsx            # Detalle / inicio del quiz
│       ├── play/page.tsx       # Vista de juego activo
│       └── results/page.tsx    # Resultados post-quiz
├── categories/
│   ├── page.tsx                # Todas las categorías
│   └── [slug]/page.tsx         # Quizzes por categoría
├── profile/page.tsx            # Fase 2
├── admin/                      # Fase 3
└── api/                        # Route handlers (Fase 2+)
```

**Server vs Client Components:**
- Server Components por defecto (SEO, performance)
- Client Components solo cuando necesario: interactividad, estado, animaciones
- Marcar explícitamente con `'use client'`

---

## 10. Performance

| Requisito | Implementación |
|---|---|
| Core Web Vitals verdes | Server Components, sin JS innecesario en cliente |
| Imágenes optimizadas | `next/image` siempre |
| Lazy loading | `dynamic()` para componentes pesados |
| Caching | `revalidate`, `cache: 'force-cache'` donde aplique |
| Fonts | `next/font` con `display: swap` |
| Bundle size | Analizar con `@next/bundle-analyzer` |

---

## 11. Datos Estáticos — Fase 1

Durante Fase 1, los quizzes viven en archivos TypeScript tipados:

```typescript
// data/quizzes.ts
export const quizzes: Quiz[] = [...]

// data/categories.ts  
export const categories: Category[] = [...]
```

La capa de repositorios abstrae el origen de datos:

```typescript
// infrastructure/repositories/QuizRepository.ts
interface IQuizRepository {
  findAll(filters?: QuizFilters): Promise<Quiz[]>
  findById(id: string): Promise<Quiz | null>
  findByCategory(categoryId: string): Promise<Quiz[]>
}

// Fase 1: implementación con datos estáticos
class StaticQuizRepository implements IQuizRepository { ... }

// Fase 2: misma interfaz, implementación Supabase
class SupabaseQuizRepository implements IQuizRepository { ... }
```

Esto permite migrar a Supabase en Fase 2 sin tocar la capa de Application ni UI.

---

## 12. Calidad y Developer Experience

### Tooling

```json
{
  "eslint": "Next.js config + reglas estrictas",
  "prettier": "Formateo consistente",
  "husky": "Pre-commit hooks",
  "commitlint": "Conventional commits",
  "typescript": "strict: true, noUncheckedIndexedAccess: true"
}
```

### Testing (preparar desde Fase 1)

| Tipo | Herramienta | Qué testear |
|---|---|---|
| Unit | Vitest | Domain entities, casos de uso, utils |
| Integration | Vitest + Testing Library | Componentes con store |
| E2E | Playwright | Flujo completo quiz: inicio → respuestas → resultados |

### Variables de entorno

```bash
# .env.local
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_SUPABASE_URL=        # Fase 2
NEXT_PUBLIC_SUPABASE_ANON_KEY=   # Fase 2
SUPABASE_SERVICE_ROLE_KEY=       # Fase 2, solo servidor
```

---

## 13. Seguridad (preparar desde Fase 1)

- Validación de inputs con Zod en todos los boundaries
- Server Actions con validación server-side
- Fase 2: Row Level Security en Supabase, rate limiting, protección CSRF
- Nunca exponer claves de servicio al cliente

---

## 14. Criterios de Completitud por Feature

Una feature está "done" cuando:
1. ✅ Tipos definidos en `domain/`
2. ✅ Casos de uso implementados en `application/`
3. ✅ Repositorio/servicio en `infrastructure/`
4. ✅ Componentes con todos los estados visuales
5. ✅ Tests unitarios para lógica de dominio
6. ✅ Responsive en mobile, tablet y desktop
7. ✅ Accesible (keyboard nav, ARIA, contraste)
8. ✅ Sin errores de TypeScript en modo strict

---

## 15. Decisiones Técnicas y Restricciones

| Decisión | Razón |
|---|---|
| App Router sobre Pages Router | Es el futuro de Next.js; Server Components son clave para performance |
| Zustand sobre Redux/Context | Menos boilerplate, más simple, suficiente para la escala |
| Shadcn/UI sobre librería cerrada | Control total del código, accesible por defecto, sin lock-in |
| Clean Architecture desde el inicio | Evita reescrituras al escalar; facilita testing |
| Datos estáticos en Fase 1 | Velocidad de desarrollo; el patrón repositorio oculta el origen |
| Zod para validación | Schema-first, integra con TypeScript, sirve para formularios y API |

---

*Este documento es la fuente de verdad del proyecto. Actualizar cuando cambien decisiones arquitectónicas o se completen fases.*
