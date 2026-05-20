"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  QuizSession,
  QuizConfig,
  Answer,
  CompletedSession,
} from "@/types/quiz";
import { isAnswerCorrect, getSessionScore } from "@/types/quiz";
import { getAllQuestions, getQuestionsByCategory } from "@/lib/repositories/QuestionRepository";
import {
  getRandomQuestions,
  getSequentialQuestions,
  getWeightedQuestions,
} from "@/lib/quiz-utils";

interface QuizStore {
  session: QuizSession | null;
  history: CompletedSession[];

  startSession: (config: QuizConfig) => string;
  submitAnswer: (questionIndex: number, selected: string | string[]) => void;
  advanceQuestion: () => void;
  completeSession: () => void;
  clearSession: () => void;
}

export const useQuizStore = create<QuizStore>()(
  persist(
    (set, get) => ({
      session: null,
      history: [],

      startSession: (config) => {
        const sessionId = crypto.randomUUID();

        let questions;
        if (config.categoryWeights && !config.categoryId) {
          // Simulacro: distribute all questions by exam category weights
          questions = getWeightedQuestions(
            getAllQuestions(),
            config.questionCount,
            config.categoryWeights
          );
        } else {
          const pool = config.categoryId
            ? getQuestionsByCategory(config.categoryId)
            : getAllQuestions();
          questions =
            config.mode === "sequential"
              ? getSequentialQuestions(pool, config.questionCount)
              : getRandomQuestions(pool, config.questionCount);
        }

        const session: QuizSession = {
          id: sessionId,
          questions,
          currentIndex: 0,
          answers: {},
          status: "active",
          config,
          startedAt: Date.now(),
        };

        set({ session });
        return sessionId;
      },

      submitAnswer: (questionIndex, selected) => {
        const { session } = get();
        if (!session || session.status !== "active") return;

        const question = session.questions[questionIndex];
        const selectedArr = Array.isArray(selected) ? selected : [selected];
        const answer: Answer = {
          selectedOption: selectedArr[0],
          selectedOptions: selectedArr.length > 1 ? selectedArr : undefined,
          isCorrect: isAnswerCorrect(question, selected),
          answeredAt: Date.now(),
        };

        set({
          session: {
            ...session,
            answers: { ...session.answers, [questionIndex]: answer },
          },
        });
      },

      advanceQuestion: () => {
        const { session } = get();
        if (!session || session.status !== "active") return;

        const nextIndex = session.currentIndex + 1;

        if (nextIndex >= session.questions.length) {
          get().completeSession();
        } else {
          set({ session: { ...session, currentIndex: nextIndex } });
        }
      },

      completeSession: () => {
        const { session, history } = get();
        if (!session) return;

        const now = Date.now();
        const { score, total, percentage } = getSessionScore({
          ...session,
          answers: session.answers,
        });

        const completed: CompletedSession = {
          id: session.id,
          score,
          total,
          percentage,
          durationSeconds: Math.round((now - session.startedAt) / 1000),
          completedAt: now,
          config: session.config,
          questions: session.questions,
          answers: session.answers,
        };

        set({
          session: {
            ...session,
            status: "completed",
            completedAt: now,
          },
          history: [completed, ...history].slice(0, 10),
        });
      },

      clearSession: () => set({ session: null }),
    }),
    {
      name: "quitz-storage",
      partialize: (state) => ({
        session: state.session,
        history: state.history,
      }),
    }
  )
);
