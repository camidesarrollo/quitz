"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { SRCard } from "@/types/quiz";
import { createSRCard, updateSRCard } from "@/lib/spaced-repetition";

interface SRStore {
  cards: Record<number, SRCard>;
  updateCard: (questionId: number, isCorrect: boolean) => void;
  resetAllCards: () => void;
}

export const useSRStore = create<SRStore>()(
  persist(
    (set, get) => ({
      cards: {},

      updateCard: (questionId, isCorrect) => {
        const { cards } = get();
        const existing = cards[questionId] ?? createSRCard(questionId);
        const updated = updateSRCard(existing, isCorrect);
        set({ cards: { ...cards, [questionId]: updated } });
      },

      resetAllCards: () => set({ cards: {} }),
    }),
    { name: "quitz-sr-storage" }
  )
);
