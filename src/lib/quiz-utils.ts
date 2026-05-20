import type { Question, CategoryWeight } from "@/types/quiz";

export function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function getRandomQuestions(allQuestions: Question[], count: number): Question[] {
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, Math.min(count, allQuestions.length));
}

export function getSequentialQuestions(allQuestions: Question[], count: number): Question[] {
  return allQuestions.slice(0, Math.min(count, allQuestions.length));
}

// Distributes `total` questions across categories by weight, then shuffles the result.
// The last weight bucket absorbs any rounding remainder.
export function getWeightedQuestions(
  allQuestions: Question[],
  total: number,
  weights: CategoryWeight[]
): Question[] {
  if (weights.length === 0) return getRandomQuestions(allQuestions, total);

  const totalWeight = weights.reduce((sum, w) => sum + w.weight, 0);
  const result: Question[] = [];
  let remaining = total;

  weights.forEach((cw, i) => {
    const isLast = i === weights.length - 1;
    const count = isLast
      ? remaining
      : Math.round((cw.weight / totalWeight) * total);

    const pool = allQuestions.filter((q) => q.categoryId === cw.categoryId);
    const picked = getRandomQuestions(pool, Math.min(count, pool.length));
    result.push(...picked);
    remaining -= picked.length;
  });

  return shuffleArray(result);
}

export function getOptionLabel(index: number): string {
  return String.fromCharCode(65 + index); // A, B, C, D…
}

export const PASS_THRESHOLD = 70; // AZ-900 passing score

export function isPassing(percentage: number): boolean {
  return percentage >= PASS_THRESHOLD;
}
