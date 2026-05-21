// Domain entities

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface CategoryWeight {
  categoryId: string;
  weight: number; // percentage 0-100
}

export interface ExamConfig {
  questionCount: number;
  timeLimitSeconds: number;
  passingPercentage: number;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  categories: Category[];
  defaultWeights: CategoryWeight[];
  examConfig?: ExamConfig;
}

export interface Question {
  id: number;
  categoryId?: string;
  text: string;
  options: string[];
  correctAnswer: string;
  correctAnswers?: string[]; // multi-answer questions
  explaination?: string;
}

export interface Answer {
  selectedOption: string;
  selectedOptions?: string[]; // for multi-answer questions
  isCorrect: boolean;
  answeredAt: number;
}

export type QuizMode = "random" | "sequential";
export type QuizStatus = "active" | "completed";

export interface QuizConfig {
  courseId: string;
  categoryId?: string;             // single-category quiz
  categoryWeights?: CategoryWeight[]; // simulacro: weighted multi-category
  questionCount: number;
  mode: QuizMode;
  label: string;
  isExamMode?: boolean;
  timeLimitSeconds?: number;
  passingPercentage?: number;
}

export interface QuizSession {
  id: string;
  questions: Question[];
  currentIndex: number;
  answers: Record<number, Answer>;
  status: QuizStatus;
  config: QuizConfig;
  startedAt: number;
  completedAt?: number;
  pendingIndices?: number[]; // questions explicitly skipped, to revisit
}

export interface CompletedSession {
  id: string;
  score: number;
  total: number;
  percentage: number;
  durationSeconds: number;
  completedAt: number;
  config: QuizConfig;
  questions: Question[];
  answers: Record<number, Answer>;
}

// Derived helpers

export function isAnswerCorrect(question: Question, selected: string | string[]): boolean {
  const selections = Array.isArray(selected) ? selected : [selected];

  if (question.correctAnswers && question.correctAnswers.length > 1) {
    const correct = question.correctAnswers;
    return (
      selections.length === correct.length &&
      selections.every((s) => correct.includes(s))
    );
  }

  return selections[0] === question.correctAnswer;
}

export function getSessionScore(session: QuizSession): {
  score: number;
  total: number;
  percentage: number;
} {
  const score = Object.values(session.answers).filter((a) => a.isCorrect).length;
  const total = session.questions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  return { score, total, percentage };
}
