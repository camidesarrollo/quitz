# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto
Aplicación de quiz en español para la certificación **Microsoft Azure AZ-900**. Next.js 15 (App Router), React 19, Zustand, Framer Motion, Tailwind CSS. Sin backend ni API — todos los datos son estáticos en memoria.

## Comandos de desarrollo
```bash
npm run dev      # Turbopack dev server
npm run build    # Build de producción
npm run lint     # ESLint
npx tsc --noEmit # Verificar tipos (siempre correr antes de dar por terminado)
```
No hay tests configurados actualmente.

## Estructura de directorios
```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Home → QuizMenu
│   ├── quiz/[sessionId]/         # Quiz activo → QuizPlayer
│   ├── quiz/[sessionId]/results/ # Resultados → ResultsView
│   └── history/[sessionId]/      # Detalle historial → HistoryDetailView
├── components/
│   ├── layout/AppHeader.tsx      # Header con toggle dark/light
│   └── quiz/                     # Todos los componentes de quiz
├── data/
│   ├── courses.ts                # Definición del curso AZ-900
│   ├── az900-questions.ts        # Banco de preguntas principal (examen)
│   ├── az900-difficulty.ts       # Mapa id→Difficulty (separado de las preguntas)
│   ├── az900-study-questions.ts  # Banco de preguntas de estudio (separado del examen)
│   ├── az900-terms.ts            # Glosario de términos AZ-900
│   └── study-categories.ts      # Categorías específicas para modo estudio
├── lib/
│   ├── quiz-utils.ts             # Lógica de selección, shuffle, utilidades
│   ├── utils.ts                  # cn(), formatDuration(), formatDate()
│   ├── repositories/
│   │   ├── QuestionRepository.ts # Pool principal (examen); fusiona difficulty al leer
│   │   ├── StudyRepository.ts    # Pool de estudio; categorías propias
│   │   └── CourseRepository.ts   # Metadatos del curso
│   └── store/quiz.store.ts       # Zustand store principal
└── types/quiz.ts                 # Todas las interfaces TypeScript + helpers
```

## Tipos clave (`src/types/quiz.ts`)
```typescript
Question        // id, categoryId?, text, options[], correctAnswer,
                // correctAnswers[]?, explaination?, difficulty?
                //   ← "explaination" es typo deliberado — no corregir
Answer          // selectedOption, selectedOptions[]?, isCorrect, answeredAt
QuizConfig      // courseId, categoryId?, categoryWeights[]?,
                //   questionCount, mode, label, isExamMode?,
                //   timeLimitSeconds?, passingPercentage?
QuizSession     // sesión activa: questions[], currentIndex, answers{},
                //   status, pendingIndices?  ← índices de preguntas skipeadas
CompletedSession// sesión guardada: +score, total, percentage, durationSeconds,
                //   questions[], answers{}
SRCard          // estado de spaced-repetition por pregunta: easeFactor,
                //   interval, repetitions, nextReviewAt, lastReviewedAt
```

**Tipos enumerados:**
```typescript
QuizMode   = "random" | "sequential" | "spaced-repetition" | "sniper" | "mental-state"
Difficulty = "easy" | "medium" | "hard"
MentalState = "hot" | "neutral" | "cold"
```

## Zustand store (`src/lib/store/quiz.store.ts`)
Estado persistido en `localStorage` bajo la clave `quitz-storage`. Persiste `session`, `history` y `markedQuestionIds`.

| Acción | Descripción |
|--------|-------------|
| `startSession(config)` | Construye preguntas desde repositorio y crea sesión |
| `startSessionWithQuestions(config, questions[])` | Crea sesión con preguntas prearmadas (repaso de errores) |
| `submitAnswer(index, selected)` | Evalúa y guarda respuesta |
| `advanceQuestion()` | Avanza al siguiente sin responder; llama `completeSession()` si no quedan pendientes |
| `skipQuestion()` | Salta la pregunta actual (sin responder) y la agrega a `pendingIndices`; no skippea la última sin responder |
| `reinsertCurrentQuestion()` | Reinserta la pregunta actual 2 posiciones adelante (para modos de repaso) |
| `reorderForMentalState(preferred)` | Mueve la próxima pregunta con `difficulty === preferred` al frente |
| `toggleMarkQuestion(id)` | Agrega/quita un id de `markedQuestionIds` (bookmark persistente) |
| `completeSession()` | Guarda en `history` (máx. 10, más reciente primero) |
| `clearSession()` | Limpia sesión activa |
| `clearHistory()` | Vacía historial |

`startSession` y `startSessionWithQuestions` llaman `shuffleQuestionOptions()` — las opciones se barajan en cada sesión, excepto preguntas cuyas opciones son exactamente `{"Sí", "No"}`.

## Dos bancos de preguntas

El proyecto tiene **dos pools distintos** que no se mezclan:

| Pool | Archivo datos | Repositorio | Uso |
|------|---------------|-------------|-----|
| Examen | `az900-questions.ts` | `QuestionRepository.ts` | Modos random, simulacro, sniper, mental-state |
| Estudio | `az900-study-questions.ts` | `StudyRepository.ts` | Modo estudio por tema (subcategorías propias) |

`QuestionRepository` fusiona `az900-difficulty.ts` (mapa `id → Difficulty`) en cada pregunta al leerla — la dificultad no está inline en el banco de preguntas.

## Lógica de quiz (`src/lib/quiz-utils.ts`)
- `shuffleArray(arr)` — Fisher-Yates
- `getRandomQuestions`, `getSequentialQuestions`, `getWeightedQuestions` — selección de pool
- `shuffleQuestionOptions(questions)` — baraja opciones; preserva orden Sí/No
- `getWrongQuestionsFromHistory(history)` — deduplica por `question.id`, devuelve incorrectas del historial
- `PASS_THRESHOLD = 70`, `isPassing(pct)`
- `getOptionLabel(i)` — 0→A, 1→B, etc.

## Datos del curso
**AZ-900** (`src/data/courses.ts`):
- 3 categorías válidas del examen: `cloud-concepts`, `azure-services`, `azure-management`
- Pesos: 28% / 37% / 35%
- Cualquier `categoryId` distinto hace que la pregunta quede fuera del pool del examen

## Convenciones del código
- `"use client"` en todos los componentes interactivos
- Pages de rutas dinámicas son `async` con `await params` (Next.js 15)
- Dark mode: clase `dark` en `<html>`, toggle en `AppHeader`, guardado en `localStorage`
- Clases CSS: Tailwind utility-first + `cn()` (clsx + tailwind-merge) para condicionales
- Animaciones: Framer Motion (`AnimatePresence`, `motion.div`) — no CSS puro para transiciones de UI
- Variantes de componentes: CVA en `Button` y `Badge`
- UI siempre en español; nombres de variables y funciones en inglés

## Patrones a respetar
- **No agregar preguntas sin `categoryId`** — quedan invisibles para el conteo del pool
- **No cambiar `correctAnswer`/`correctAnswers` a índices** — la corrección compara por texto (`isAnswerCorrect` en `types/quiz.ts`)
- **No mockear la store en tests** — si se agregan tests, usar estado real
- **Máximo 10 sesiones en historial** — hardcodeado en `completeSession()`
- **Sesiones antiguas sin `questions`/`answers`** — `HistoryDetailView` tiene guard `hasQuestions`
- **No usar `categoryId` y `categoryWeights` simultáneamente** en `QuizConfig`

## Modo "Simulacro"
Usa `getWeightedQuestions()` — distribuye por pesos exactos del examen AZ-900. El último bucket absorbe el resto del redondeo.

## Agregar un nuevo curso (futura extensión)
1. Definir el `Course` en `src/data/courses.ts`
2. Agregar banco de preguntas en `src/data/`
3. Importar en `QuestionRepository.ts`
4. Instanciar el curso en `QuizMenu.tsx` (actualmente hardcodeado a `AZ900`)
