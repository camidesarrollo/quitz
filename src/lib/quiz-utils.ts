import type { Question } from "@/types/quiz";

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandomQuestions(
  allQuestions: Question[],
  count: number
): Question[] {
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, Math.min(count, allQuestions.length));
}

export function getOptionLabel(index: number): string {
  return String.fromCharCode(65 + index); // A, B, C, D...
}

export const PASS_THRESHOLD = 70; // AZ-900 passing score

export function isPassing(percentage: number): boolean {
  return percentage >= PASS_THRESHOLD;
}
