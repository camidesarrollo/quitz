import type { Question } from "@/types/quiz";
import { AZ900_TERMS, type TermCard } from "@/data/az900-terms";

export function buildTermQuestion(term: TermCard): Question {
  const others = AZ900_TERMS.filter((t) => t.id !== term.id);

  // Deterministic distractor selection: rotate by term.id offset so each term
  // always gets the same 3 distractors (stable across re-renders).
  const offset = term.id % others.length;
  const rotated = [...others.slice(offset), ...others.slice(0, offset)];
  const distractors = rotated.slice(0, 3).map((t) => t.definition);

  return {
    id: term.id,
    text: `¿Cuál es la definición de "${term.term}"?`,
    options: [term.definition, ...distractors],
    correctAnswer: term.definition,
    categoryId: term.categoryId,
  };
}

export function getTermQuestions(categoryId?: string): Question[] {
  const terms = categoryId
    ? AZ900_TERMS.filter((t) => t.categoryId === categoryId)
    : AZ900_TERMS;
  return terms.map(buildTermQuestion);
}

export function getTermCount(categoryId?: string): number {
  if (!categoryId) return AZ900_TERMS.length;
  return AZ900_TERMS.filter((t) => t.categoryId === categoryId).length;
}
