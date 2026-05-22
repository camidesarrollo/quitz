import type { SRCard } from "@/types/quiz";

const DEFAULT_EASE_FACTOR = 2.5;

export const SR_NEW_PER_SESSION = 10;
export const SR_REVIEW_PER_SESSION = 20;

export function createSRCard(questionId: number): SRCard {
  return {
    questionId,
    easeFactor: DEFAULT_EASE_FACTOR,
    interval: 0,
    repetitions: 0,
    nextReviewAt: 0,
  };
}

// SM-2 algorithm: quality 4 = correct, 1 = incorrect
export function updateSRCard(card: SRCard, isCorrect: boolean): SRCard {
  const quality = isCorrect ? 4 : 1;
  let { easeFactor, interval, repetitions } = card;

  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions++;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(
    1.3,
    easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  const now = Date.now();
  return {
    ...card,
    easeFactor,
    interval,
    repetitions,
    nextReviewAt: now + interval * 24 * 60 * 60 * 1000,
    lastReviewedAt: now,
  };
}

export type MasteryLevel = "new" | "learning" | "reviewing" | "mastered";

export function getMasteryLevel(card: SRCard | undefined): MasteryLevel {
  if (!card || card.repetitions === 0) return "new";
  if (card.interval < 7) return "learning";
  if (card.interval < 21) return "reviewing";
  return "mastered";
}

export interface SRSession<T> {
  questions: T[];
  newCount: number;
  reviewCount: number;
}

/**
 * Builds an SR session: up to maxReview due reviews + up to maxNew unseen cards,
 * interleaved so new cards are spread throughout the session.
 */
export function getSRSessionQuestions<T extends { id: number }>(
  questions: T[],
  cards: Record<number, SRCard>,
  maxNew = SR_NEW_PER_SESSION,
  maxReview = SR_REVIEW_PER_SESSION
): SRSession<T> {
  const now = Date.now();
  const dueReviews: T[] = [];
  const newCards: T[] = [];

  for (const q of questions) {
    const card = cards[q.id];
    if (!card || card.repetitions === 0) {
      newCards.push(q);
    } else if (card.nextReviewAt <= now) {
      dueReviews.push(q);
    }
  }

  // Most overdue first
  dueReviews.sort(
    (a, b) => (cards[a.id]?.nextReviewAt ?? 0) - (cards[b.id]?.nextReviewAt ?? 0)
  );

  const selectedReviews = dueReviews.slice(0, maxReview);
  const selectedNew = newCards.slice(0, maxNew);

  return {
    questions: interleaveCards(selectedReviews, selectedNew),
    newCount: selectedNew.length,
    reviewCount: selectedReviews.length,
  };
}

// Evenly distributes new cards among reviews (e.g., every ~3 reviews, 1 new card)
function interleaveCards<T>(reviews: T[], newCards: T[]): T[] {
  if (!newCards.length) return reviews;
  if (!reviews.length) return newCards;

  const result: T[] = [];
  const step = Math.max(1, Math.floor(reviews.length / (newCards.length + 1)));
  let ri = 0;
  let ni = 0;

  while (ri < reviews.length || ni < newCards.length) {
    for (let k = 0; k < step && ri < reviews.length; k++) result.push(reviews[ri++]);
    if (ni < newCards.length) result.push(newCards[ni++]);
  }
  return result;
}

/** Legacy helper — use getSRSessionQuestions for new code. */
export function getDueQuestions<T extends { id: number }>(
  questions: T[],
  cards: Record<number, SRCard>,
  maxCount = 20
): T[] {
  const now = Date.now();
  const due = questions.filter((q) => {
    const card = cards[q.id];
    return !card || card.nextReviewAt <= now;
  });
  due.sort((a, b) => (cards[a.id]?.nextReviewAt ?? 0) - (cards[b.id]?.nextReviewAt ?? 0));
  return due.slice(0, maxCount);
}

export interface SRStats {
  new: number;
  learning: number;
  reviewing: number;
  mastered: number;
  /** Cards already practiced that are due for review right now (excludes unseen cards). */
  dueReviews: number;
  nextReviewAt: number | null;
}

export function getSRStats(
  questions: { id: number }[],
  cards: Record<number, SRCard>
): SRStats {
  const now = Date.now();
  let newCount = 0, learning = 0, reviewing = 0, mastered = 0, dueReviews = 0;
  let nextReviewAt: number | null = null;

  for (const q of questions) {
    const card = cards[q.id];
    const level = getMasteryLevel(card);
    if (level === "new") newCount++;
    else if (level === "learning") learning++;
    else if (level === "reviewing") reviewing++;
    else mastered++;

    if (card && card.repetitions > 0) {
      if (card.nextReviewAt <= now) {
        dueReviews++;
      } else if (nextReviewAt === null || card.nextReviewAt < nextReviewAt) {
        nextReviewAt = card.nextReviewAt;
      }
    }
  }

  return { new: newCount, learning, reviewing, mastered, dueReviews, nextReviewAt };
}
