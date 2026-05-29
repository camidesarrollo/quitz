"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lightbulb, Eye, BookMarked, ChevronRight } from "lucide-react";
import { AZ900_TERMS } from "@/data/az900-terms";
import { useQuizStore } from "@/lib/store/quiz.store";
import {
  AZ900_STUDY_CATEGORIES,
  getStudyQuestionsByCategory,
  getStudyCategoryCount,
} from "@/lib/repositories/StudyRepository";
import type { QuizConfig } from "@/types/quiz";

export function StudyMenu() {
  const router = useRouter();
  const { clearSession, startSessionWithQuestions } = useQuizStore();
  const [studyCategory, setStudyCategory] = useState<string>(
    AZ900_STUDY_CATEGORIES[0]?.id ?? ""
  );

  function handleStartStudy() {
    if (!studyCategory) return;
    const questions = getStudyQuestionsByCategory(studyCategory);
    if (questions.length === 0) return;
    clearSession();
    const catName =
      AZ900_STUDY_CATEGORIES.find((c) => c.id === studyCategory)?.name ?? studyCategory;
    const config: QuizConfig = {
      courseId: "az-900-study",
      categoryId: studyCategory,
      questionCount: questions.length,
      mode: "random",
      label: `Estudio · ${catName}`,
    };
    const sessionId = startSessionWithQuestions(config, questions);
    router.push(`/quiz/${sessionId}`);
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-sky-500 uppercase">AZ-900</span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">Estudio</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">
            Aprende y repasa conceptos
          </p>
        </div>

        {/* Study by category */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-sky-200 dark:border-sky-800/60 p-5 mb-4">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center shrink-0">
              <Lightbulb size={18} className="text-sky-600 dark:text-sky-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                Estudio de Conceptos
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Preguntas conceptuales por tema · no son de examen
              </p>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Tema
            </p>
            <select
              value={studyCategory}
              onChange={(e) => setStudyCategory(e.target.value)}
              aria-label="Tema de estudio"
              className="w-full px-3 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-700 dark:text-slate-300 outline-none focus:border-sky-500 dark:focus:border-sky-500 transition-colors"
            >
              {AZ900_STUDY_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} · {getStudyCategoryCount(cat.id)} preg.
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={handleStartStudy}
            disabled={!studyCategory}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Lightbulb size={15} />
            Comenzar estudio
          </button>
        </div>

        {/* Browse bank */}
        <button
          type="button"
          onClick={() => router.push("/browse")}
          className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-teal-200 dark:border-teal-800/60 p-4 mb-4 flex items-center gap-3 hover:border-teal-300 dark:hover:border-teal-700 transition-colors text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-teal-100 dark:bg-teal-900/40 flex items-center justify-center shrink-0">
            <Eye size={18} className="text-teal-600 dark:text-teal-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Explorar banco</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Modo lectura · repasá sin ser evaluado
            </p>
          </div>
          <ChevronRight size={16} className="text-slate-400 shrink-0" />
        </button>

        {/* Vocabulary */}
        <button
          type="button"
          onClick={() => router.push("/terms")}
          className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-orange-200 dark:border-orange-800/60 p-4 mb-4 flex items-center gap-3 hover:border-orange-300 dark:hover:border-orange-700 transition-colors text-left"
        >
          <div className="w-9 h-9 rounded-xl bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center shrink-0">
            <BookMarked size={18} className="text-orange-600 dark:text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Vocabulario AZ-900
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {AZ900_TERMS.length} términos clave · practica definiciones
            </p>
          </div>
          <ChevronRight size={16} className="text-slate-400 shrink-0" />
        </button>
      </motion.div>
    </div>
  );
}
