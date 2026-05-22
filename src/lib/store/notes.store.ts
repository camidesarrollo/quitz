"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotesStore {
  notes: Record<number, string>;
  setNote: (questionId: number, note: string) => void;
}

export const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
      notes: {},
      setNote: (questionId, note) =>
        set((s) => ({ notes: { ...s.notes, [questionId]: note } })),
    }),
    { name: "quitz-notes-storage" }
  )
);
