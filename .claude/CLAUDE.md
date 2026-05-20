# Quitz — CLAUDE.md

## Proyecto
Aplicación de quiz en español para la certificación **Microsoft Azure AZ-900**. Next.js 15 (App Router), React 19, Zustand, Framer Motion, Tailwind CSS. Sin backend ni API — todos los datos son estáticos en memoria.

## Comandos de desarrollo
```bash
npm run dev      # Turbopack dev server
npm run build    # Build de producción
npm run lint     # ESLint
npx tsc --noEmit # Verificar tipos (siempre correr antes de dar por terminado)
```

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
│   └── az900-questions.ts        # Banco de ~483 preguntas en español
├── lib/
│   ├── quiz-utils.ts             # Lógica de selección, shuffle, utilidades
│   ├── utils.ts                  # cn(), formatDuration(), formatDate()
│   ├── repositories/             # Wrappers de consulta sobre datos estáticos
│   └── store/quiz.store.ts       # Zustand store principal
└── types/quiz.ts                 # Todas las interfaces TypeScript + helpers
```

## Tipos clave (`src/types/quiz.ts`)
```typescript
Question        // id, categoryId?, text, options[], correctAnswer,
                // correctAnswers[]?, explaination?   ← typo intencional en el campo
Answer          // selectedOption, selectedOptions[]?, isCorrect, answeredAt
QuizConfig      // courseId, categoryId?, categoryWeights[]?,
                // questionCount, mode, label
QuizSession     // sesión activa: questions[], currentIndex, answers{}, status
CompletedSession// sesión guardada: +score, total, percentage, durationSeconds,
                // questions[], answers{}   ← incluye preguntas y respuestas completas
```

## Zustand store (`src/lib/store/quiz.store.ts`)
Estado persistido en `localStorage` bajo la clave `quitz-storage`.

| Acción | Descripción |
|--------|-------------|
| `startSession(config)` | Construye preguntas desde repositorio y crea sesión |
| `startSessionWithQuestions(config, questions[])` | Crea sesión con preguntas prearmadas (repaso de errores) |
| `submitAnswer(index, selected)` | Evalúa y guarda respuesta |
| `advanceQuestion()` | Avanza índice; llama `completeSession()` si es el final |
| `completeSession()` | Guarda en `history` (máx. 10, más reciente primero) |
| `clearSession()` | Limpia sesión activa |
| `clearHistory()` | Vacía historial |

Ambos `startSession` y `startSessionWithQuestions` llaman `shuffleQuestionOptions()` — las opciones se barajan en cada sesión, excepto preguntas de tipo Sí/No.

## Lógica de quiz (`src/lib/quiz-utils.ts`)
- `shuffleArray(arr)` — Fisher-Yates
- `getRandomQuestions`, `getSequentialQuestions`, `getWeightedQuestions` — selección de pool
- `shuffleQuestionOptions(questions)` — baraja opciones; preserva orden en preguntas cuyas opciones son exactamente `{"Sí", "No"}`
- `getWrongQuestionsFromHistory(history)` — deduplica por `question.id`, devuelve todas las incorrectas del historial
- `PASS_THRESHOLD = 70`, `isPassing(pct)`
- `getOptionLabel(i)` — 0→A, 1→B, etc.

## Datos del curso
**AZ-900** (`src/data/courses.ts` + `src/data/az900-questions.ts`):
- 3 categorías válidas: `cloud-concepts`, `azure-services`, `azure-management`
- Pesos del examen real: 28% / 37% / 35%
- Cualquier `categoryId` distinto hace que la pregunta quede fuera del conteo de pool

## Convenciones del código
- `"use client"` en todos los componentes interactivos
- Pages de rutas dinámicas son `async` con `await params` (Next.js 15)
- Dark mode: clase `dark` en `<html>`, toggle en `AppHeader`, guardado en `localStorage`
- Clases CSS: Tailwind utility-first + `cn()` (clsx + tailwind-merge) para condicionales
- Animaciones: Framer Motion (`AnimatePresence`, `motion.div`) — no CSS puro para transiciones de UI
- Variantes de componentes: CVA en `Button` y `Badge`
- El campo de explicación se llama **`explaination`** (typo deliberado del usuario — no corregir)
- UI siempre en español; nombres de variables y funciones en inglés

## Patrones a respetar
- **No agregar preguntas sin `categoryId`** — quedan invisibles para el conteo del pool
- **No cambiar `correctAnswer`/`correctAnswers` a índices** — la corrección compara por texto
- **No mockear la store en tests** — si se agregan tests, usar estado real
- **Máximo 10 sesiones en historial** — hardcodeado en `completeSession()`
- **Sesiones antiguas sin `questions`/`answers`** — `HistoryDetailView` tiene guard `hasQuestions`

## Modo "Simulacro"
Usa `getWeightedQuestions()` — distribuye por pesos exactos del examen AZ-900. El último bucket absorbe el resto del redondeo. No usar `categoryId` ni `categoryWeights` simultáneamente.

## Agregar un nuevo curso (futura extensión)
1. Definir el `Course` en `src/data/courses.ts`
2. Agregar banco de preguntas en `src/data/`
3. Importar en `QuestionRepository.ts`
4. Instanciar el curso en `QuizMenu.tsx` (actualmente hardcodeado a `AZ900`)
