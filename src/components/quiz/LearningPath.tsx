"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  CheckCircle2,
  Play,
  BookMarked,
  X,
  Trophy,
  Star,
  RotateCcw,
  GraduationCap,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { AZ900_STUDY_CATEGORIES } from "@/data/study-categories";
import type { StudyCategory } from "@/data/study-categories";
import {
  getStudyQuestionsByCategory,
  getStudyCategoryCount,
  getStudyQuestionsByIds,
  getChapterExamQuestions,
} from "@/lib/repositories/StudyRepository";
import type { QuizConfig } from "@/types/quiz";
import { cn } from "@/lib/utils";

const PASS_THRESHOLD = 90;
const CHAPTER_EXAM_PASS = 100;
const EXAM_QUESTIONS_PER_SECTION = 2;

type SectionStatus = "locked" | "available" | "in-progress" | "passed";
type ReviewStatus = "locked" | "clear" | "available";
type ChapterExamStatus = "locked" | "available" | "passed";

function getSectionStatus(
  flatIndex: number,
  allSections: StudyCategory[],
  progress: Record<string, number>,
  chapterExamProgress: Record<string, number>
): SectionStatus {
  const section = allSections[flatIndex];
  const score = progress[section.id] ?? 0;
  if (score >= PASS_THRESHOLD) return "passed";
  if (flatIndex === 0) return score > 0 ? "in-progress" : "available";

  const prevSection = allSections[flatIndex - 1];
  const isNewChapter = prevSection.principalCategory !== section.principalCategory;

  if (isNewChapter) {
    const prevChapterKey = prevSection.principalCategory ?? "";
    if ((chapterExamProgress[prevChapterKey] ?? 0) < CHAPTER_EXAM_PASS) return "locked";
  } else {
    const prevScore = progress[prevSection.id] ?? 0;
    if (prevScore < PASS_THRESHOLD) return "locked";
  }

  return score > 0 ? "in-progress" : "available";
}

function getChapterReviewStatus(
  sections: StudyCategory[],
  lastAttempt: Record<string, number[]>
): ReviewStatus {
  if (!sections.every((s) => lastAttempt[s.id] !== undefined)) return "locked";
  const total = sections.reduce((acc, s) => acc + (lastAttempt[s.id]?.length ?? 0), 0);
  return total === 0 ? "clear" : "available";
}

function getChapterExamStatus(
  sections: StudyCategory[],
  progress: Record<string, number>,
  chapterExamProgress: Record<string, number>,
  chapterKey: string
): ChapterExamStatus {
  const allPassed = sections.every((s) => (progress[s.id] ?? 0) >= PASS_THRESHOLD);
  if (!allPassed) return "locked";
  if ((chapterExamProgress[chapterKey] ?? 0) >= CHAPTER_EXAM_PASS) return "passed";
  return "available";
}

function getChapterIncorrectIds(
  sections: StudyCategory[],
  lastAttempt: Record<string, number[]>
): number[] {
  const ids = new Set<number>();
  sections.forEach((s) => (lastAttempt[s.id] ?? []).forEach((id) => ids.add(id)));
  return Array.from(ids);
}

function buildChapters(categories: StudyCategory[]) {
  const chapters: { key: string; label: string; sections: StudyCategory[] }[] = [];
  const keyToIndex = new Map<string, number>();
  for (const cat of categories) {
    const key = cat.principalCategory ?? "";
    if (!keyToIndex.has(key)) {
      keyToIndex.set(key, chapters.length);
      chapters.push({ key, label: cat.principalLabel ?? key, sections: [] });
    }
    chapters[keyToIndex.get(key)!].sections.push(cat);
  }
  return chapters;
}

const NODE_COLORS: Record<SectionStatus, string> = {
  passed: "bg-emerald-500 shadow-emerald-500/30 hover:bg-emerald-600",
  available: "bg-sky-500 shadow-sky-500/30 hover:bg-sky-600 ring-4 ring-sky-500/20",
  "in-progress": "bg-amber-400 shadow-amber-400/30 hover:bg-amber-500 ring-4 ring-amber-400/20",
  locked: "bg-slate-200 dark:bg-slate-800 cursor-not-allowed shadow-none",
};

const STATUS_BADGE: Record<SectionStatus, { label: string; className: string }> = {
  passed: {
    label: "Aprobada",
    className: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
  },
  available: {
    label: "Disponible",
    className: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300",
  },
  "in-progress": {
    label: "En progreso",
    className: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
  },
  locked: {
    label: "Bloqueada",
    className: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400",
  },
};

const REVIEW_NODE_COLORS: Record<ReviewStatus, string> = {
  available: "bg-orange-400 shadow-orange-400/30 hover:bg-orange-500",
  clear: "bg-violet-500 shadow-violet-500/30 hover:bg-violet-600",
  locked: "bg-slate-200 dark:bg-slate-800 cursor-not-allowed shadow-none",
};

const EXAM_NODE_COLORS: Record<ChapterExamStatus, string> = {
  available: "bg-rose-500 shadow-rose-500/30 hover:bg-rose-600 ring-4 ring-rose-500/20",
  passed: "bg-emerald-500 shadow-emerald-500/30 hover:bg-emerald-600",
  locked: "bg-slate-200 dark:bg-slate-800 cursor-not-allowed shadow-none",
};

export function LearningPath() {
  const router = useRouter();
  const {
    clearSession,
    startSessionWithQuestions,
    studyProgress,
    studyLastAttempt,
    chapterExamProgress,
  } = useQuizStore();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedReviewKey, setSelectedReviewKey] = useState<string | null>(null);
  const [selectedExamKey, setSelectedExamKey] = useState<string | null>(null);

  const allSections = AZ900_STUDY_CATEGORIES;
  const chapters = useMemo(() => buildChapters(allSections), [allSections]);

  const flatIndexOf = useMemo(() => {
    const m = new Map<string, number>();
    allSections.forEach((s, i) => m.set(s.id, i));
    return m;
  }, [allSections]);

  const passedCount = allSections.filter(
    (s) => (studyProgress[s.id] ?? 0) >= PASS_THRESHOLD
  ).length;
  const overallPct = Math.round((passedCount / allSections.length) * 100);

  // Section modal state
  const selectedSection = selectedId ? allSections.find((s) => s.id === selectedId) : null;
  const selectedFlatIdx = selectedSection ? (flatIndexOf.get(selectedSection.id) ?? -1) : -1;
  const selectedStatus: SectionStatus | null =
    selectedSection && selectedFlatIdx >= 0
      ? getSectionStatus(selectedFlatIdx, allSections, studyProgress, chapterExamProgress)
      : null;

  // Review modal state
  const selectedReviewChapter = selectedReviewKey
    ? chapters.find((c) => c.key === selectedReviewKey)
    : null;
  const selectedReviewStatus: ReviewStatus | null = selectedReviewChapter
    ? getChapterReviewStatus(selectedReviewChapter.sections, studyLastAttempt)
    : null;
  const selectedReviewIncorrectIds = selectedReviewChapter
    ? getChapterIncorrectIds(selectedReviewChapter.sections, studyLastAttempt)
    : [];

  // Exam modal state
  const selectedExamChapter = selectedExamKey
    ? chapters.find((c) => c.key === selectedExamKey)
    : null;
  const selectedExamStatus: ChapterExamStatus | null = selectedExamChapter
    ? getChapterExamStatus(
        selectedExamChapter.sections,
        studyProgress,
        chapterExamProgress,
        selectedExamChapter.key
      )
    : null;
  const selectedExamScore = selectedExamChapter
    ? (chapterExamProgress[selectedExamChapter.key] ?? 0)
    : 0;

  function handleStartSection() {
    if (!selectedSection) return;
    const questions = getStudyQuestionsByCategory(selectedSection.id);
    if (questions.length === 0) return;
    clearSession();
    const config: QuizConfig = {
      courseId: "az-900-study",
      categoryId: selectedSection.id,
      questionCount: questions.length,
      mode: "random",
      label: `Estudio · ${selectedSection.name}`,
    };
    const sessionId = startSessionWithQuestions(config, questions);
    setSelectedId(null);
    router.push(`/quiz/${sessionId}`);
  }

  function handleStartReview() {
    if (!selectedReviewChapter || selectedReviewIncorrectIds.length === 0) return;
    const questions = getStudyQuestionsByIds(selectedReviewIncorrectIds);
    if (questions.length === 0) return;
    clearSession();
    const config: QuizConfig = {
      courseId: "az-900-review",
      questionCount: questions.length,
      mode: "random",
      label: `Repaso · ${selectedReviewChapter.label}`,
    };
    const sessionId = startSessionWithQuestions(config, questions);
    setSelectedReviewKey(null);
    router.push(`/quiz/${sessionId}`);
  }

  function handleStartChapterExam() {
    if (!selectedExamChapter) return;
    const categoryIds = selectedExamChapter.sections.map((s) => s.id);
    const questions = getChapterExamQuestions(categoryIds, EXAM_QUESTIONS_PER_SECTION);
    if (questions.length === 0) return;
    clearSession();
    const config: QuizConfig = {
      courseId: "az-900-chapter-exam",
      categoryId: selectedExamChapter.key,
      questionCount: questions.length,
      mode: "random",
      label: `Examen · ${selectedExamChapter.label}`,
    };
    const sessionId = startSessionWithQuestions(config, questions);
    setSelectedExamKey(null);
    router.push(`/quiz/${sessionId}`);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <span className="text-xs font-bold tracking-widest text-sky-500 uppercase">AZ-900</span>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5 mb-1">
          Camino del Aprendizaje
        </h1>
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-slate-500 dark:text-slate-400">
            {passedCount} de {allSections.length} secciones aprobadas
          </span>
          <span className="font-bold text-slate-900 dark:text-slate-50">{overallPct}%</span>
        </div>
        <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${overallPct}%` }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        </div>
        <div className="flex gap-2 mb-10">
          <button
            type="button"
            onClick={() => router.push("/terms")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-orange-200 dark:border-orange-800/60 bg-orange-50/50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 text-xs font-semibold hover:bg-orange-100/60 dark:hover:bg-orange-900/30 transition-colors"
          >
            <BookMarked size={13} />
            Vocabulario
          </button>
        </div>
      </motion.div>

      {/* Learning path */}
      <div className="relative flex flex-col items-center">
        {/* Background track */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700/50" />

        {chapters.map((chapter, chapterIdx) => {
          const reviewStatus = getChapterReviewStatus(chapter.sections, studyLastAttempt);
          const examStatus = getChapterExamStatus(
            chapter.sections,
            studyProgress,
            chapterExamProgress,
            chapter.key
          );
          const chapterIncorrectIds =
            reviewStatus !== "locked"
              ? getChapterIncorrectIds(chapter.sections, studyLastAttempt)
              : [];
          const examScore = chapterExamProgress[chapter.key] ?? 0;

          return (
            <div key={chapter.key} className="w-full">
              {chapterIdx > 0 && <div className="h-6" />}

              {/* Chapter pill */}
              <div className="relative z-10 flex justify-center mb-5">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-1.5 flex items-center gap-2 shadow-sm">
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    Cap. {chapterIdx + 1}
                  </span>
                  <span className="w-px h-3 bg-slate-300 dark:bg-slate-600" />
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {chapter.label}
                  </span>
                </div>
              </div>

              {/* Sections */}
              {chapter.sections.map((section) => {
                const fi = flatIndexOf.get(section.id)!;
                const status = getSectionStatus(fi, allSections, studyProgress, chapterExamProgress);
                const score = studyProgress[section.id] ?? 0;
                const labelOnLeft = fi % 2 === 0;

                return (
                  <div key={section.id} className="flex flex-col items-center">
                    <div className="relative z-10 flex items-center w-full gap-3">
                      {/* Left label */}
                      <div className="flex-1 flex justify-end">
                        {labelOnLeft && (
                          <span
                            className={cn(
                              "text-xs font-medium text-right leading-snug max-w-[110px]",
                              status === "locked"
                                ? "text-slate-300 dark:text-slate-600"
                                : "text-slate-700 dark:text-slate-300"
                            )}
                          >
                            {section.name}
                          </span>
                        )}
                      </div>

                      {/* Node */}
                      <motion.button
                        type="button"
                        aria-label={section.name}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: fi * 0.04,
                          type: "spring",
                          stiffness: 220,
                          damping: 18,
                        }}
                        onClick={() => {
                          if (status !== "locked") setSelectedId(section.id);
                        }}
                        disabled={status === "locked"}
                        className={cn(
                          "relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95",
                          NODE_COLORS[status]
                        )}
                      >
                        {status === "passed" && <CheckCircle2 size={22} className="text-white" />}
                        {status === "available" && (
                          <Play size={20} className="text-white fill-white" />
                        )}
                        {status === "in-progress" && <Star size={20} className="text-white" />}
                        {status === "locked" && (
                          <Lock size={16} className="text-slate-400 dark:text-slate-600" />
                        )}
                        {score > 0 && status !== "locked" && (
                          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-slate-200 dark:border-slate-700 leading-none text-slate-700 dark:text-slate-200 whitespace-nowrap shadow-sm">
                            {Math.round(score)}%
                          </span>
                        )}
                      </motion.button>

                      {/* Right label */}
                      <div className="flex-1 flex justify-start">
                        {!labelOnLeft && (
                          <span
                            className={cn(
                              "text-xs font-medium text-left leading-snug max-w-[110px]",
                              status === "locked"
                                ? "text-slate-300 dark:text-slate-600"
                                : "text-slate-700 dark:text-slate-300"
                            )}
                          >
                            {section.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Connector to next node */}
                    <div className="h-8 w-0.5 bg-slate-200 dark:bg-slate-700/50 mt-3" />
                  </div>
                );
              })}

              {/* Chapter review node */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.button
                  type="button"
                  aria-label={`Repaso capítulo ${chapter.label}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 18 }}
                  onClick={() => {
                    if (reviewStatus !== "locked") setSelectedReviewKey(chapter.key);
                  }}
                  disabled={reviewStatus === "locked"}
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shadow-md transition-all active:scale-95",
                    REVIEW_NODE_COLORS[reviewStatus]
                  )}
                >
                  {reviewStatus === "available" && <RotateCcw size={18} className="text-white" />}
                  {reviewStatus === "clear" && <CheckCircle2 size={18} className="text-white" />}
                  {reviewStatus === "locked" && (
                    <Lock size={14} className="text-slate-400 dark:text-slate-600" />
                  )}
                </motion.button>

                <span
                  className={cn(
                    "text-[11px] font-semibold mt-1.5 text-center",
                    reviewStatus === "available" && "text-orange-500 dark:text-orange-400",
                    reviewStatus === "clear" && "text-violet-500 dark:text-violet-400",
                    reviewStatus === "locked" && "text-slate-300 dark:text-slate-600"
                  )}
                >
                  {reviewStatus === "available" && `${chapterIncorrectIds.length} a repasar`}
                  {reviewStatus === "clear" && "¡Sin errores!"}
                  {reviewStatus === "locked" && "Repaso"}
                </span>
              </div>

              {/* Connector: review → chapter exam */}
              <div className="h-6 w-0.5 bg-slate-200 dark:bg-slate-700/50 mt-2" />

              {/* Chapter exam node */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.button
                  type="button"
                  aria-label={`Examen capítulo ${chapter.label}`}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 18 }}
                  onClick={() => {
                    if (examStatus !== "locked") setSelectedExamKey(chapter.key);
                  }}
                  disabled={examStatus === "locked"}
                  className={cn(
                    "relative w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all active:scale-95",
                    EXAM_NODE_COLORS[examStatus]
                  )}
                >
                  <GraduationCap
                    size={20}
                    className={
                      examStatus === "locked"
                        ? "text-slate-400 dark:text-slate-600"
                        : "text-white"
                    }
                  />
                  {examStatus === "passed" && examScore > 0 && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 text-[10px] font-bold rounded-full px-1.5 py-0.5 border border-slate-200 dark:border-slate-700 leading-none text-slate-700 dark:text-slate-200 whitespace-nowrap shadow-sm">
                      {Math.round(examScore)}%
                    </span>
                  )}
                </motion.button>

                <span
                  className={cn(
                    "text-[11px] font-semibold mt-1.5 text-center",
                    examStatus === "available" && "text-rose-500 dark:text-rose-400",
                    examStatus === "passed" && "text-emerald-600 dark:text-emerald-400",
                    examStatus === "locked" && "text-slate-300 dark:text-slate-600"
                  )}
                >
                  {examStatus === "available" && `${chapter.sections.length * EXAM_QUESTIONS_PER_SECTION} preg. · Examen`}
                  {examStatus === "passed" && "Capítulo aprobado"}
                  {examStatus === "locked" && "Examen final"}
                </span>
              </div>
            </div>
          );
        })}

        {/* Trophy — end of path */}
        <div className="h-6" />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring" }}
          className="relative z-10 flex flex-col items-center"
        >
          <div
            className={cn(
              "w-14 h-14 rounded-full flex items-center justify-center shadow-md",
              overallPct === 100
                ? "bg-gradient-to-br from-yellow-400 to-orange-500 shadow-orange-400/30"
                : "bg-slate-100 dark:bg-slate-800"
            )}
          >
            <Trophy
              size={22}
              className={
                overallPct === 100 ? "text-white" : "text-slate-300 dark:text-slate-600"
              }
            />
          </div>
          <span
            className={cn(
              "text-xs font-semibold mt-2",
              overallPct === 100 ? "text-orange-500" : "text-slate-400 dark:text-slate-600"
            )}
          >
            {overallPct === 100 ? "¡Curso completado!" : "Meta final"}
          </span>
        </motion.div>
      </div>

      {/* Section detail modal */}
      <AnimatePresence>
        {selectedSection && selectedStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "px-5 pt-5 pb-4",
                  selectedStatus === "passed" && "bg-emerald-50 dark:bg-emerald-900/20",
                  selectedStatus === "in-progress" && "bg-amber-50 dark:bg-amber-900/20",
                  selectedStatus === "available" && "bg-sky-50 dark:bg-sky-900/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span
                      className={cn(
                        "inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2",
                        STATUS_BADGE[selectedStatus].className
                      )}
                    >
                      {STATUS_BADGE[selectedStatus].label}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 leading-snug">
                      {selectedSection.name}
                    </h3>
                    {selectedSection.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {selectedSection.description}
                      </p>
                    )}
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setSelectedId(null)}
                    className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
                <div className="py-4 flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {getStudyCategoryCount(selectedSection.id)}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Preguntas
                  </span>
                </div>
                <div className="py-4 flex flex-col items-center">
                  <span
                    className={cn(
                      "text-lg font-bold",
                      (studyProgress[selectedSection.id] ?? 0) >= PASS_THRESHOLD
                        ? "text-emerald-600 dark:text-emerald-400"
                        : (studyProgress[selectedSection.id] ?? 0) > 0
                          ? "text-amber-500 dark:text-amber-400"
                          : "text-slate-400"
                    )}
                  >
                    {studyProgress[selectedSection.id]
                      ? `${Math.round(studyProgress[selectedSection.id])}%`
                      : "—"}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Mejor puntaje
                  </span>
                </div>
                <div className="py-4 flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {PASS_THRESHOLD}%
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Para aprobar
                  </span>
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <button
                  type="button"
                  onClick={handleStartSection}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors",
                    selectedStatus === "passed"
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : selectedStatus === "in-progress"
                        ? "bg-amber-400 hover:bg-amber-500 text-white"
                        : "bg-sky-500 hover:bg-sky-600 text-white"
                  )}
                >
                  <Play size={15} className="fill-white" />
                  {selectedStatus === "passed" ? "Volver a practicar" : "Comenzar sección"}
                </button>
                {selectedStatus === "in-progress" && (
                  <p className="text-center text-xs text-amber-600 dark:text-amber-400 mt-2.5">
                    Necesitás {PASS_THRESHOLD}% para desbloquear la siguiente sección
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter review modal */}
      <AnimatePresence>
        {selectedReviewChapter && selectedReviewStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedReviewKey(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "px-5 pt-5 pb-4",
                  selectedReviewStatus === "available"
                    ? "bg-orange-50 dark:bg-orange-900/20"
                    : "bg-violet-50 dark:bg-violet-900/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span
                      className={cn(
                        "inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2",
                        selectedReviewStatus === "available"
                          ? "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
                          : "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300"
                      )}
                    >
                      Repaso de capítulo
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 leading-snug">
                      {selectedReviewChapter.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {selectedReviewStatus === "available"
                        ? "Preguntas incorrectas del último intento de cada sección"
                        : "¡Dominaste todas las secciones de este capítulo!"}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setSelectedReviewKey(null)}
                    className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
                <div className="py-4 flex flex-col items-center">
                  <span
                    className={cn(
                      "text-2xl font-bold",
                      selectedReviewStatus === "available"
                        ? "text-orange-500 dark:text-orange-400"
                        : "text-violet-500 dark:text-violet-400"
                    )}
                  >
                    {selectedReviewIncorrectIds.length}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {selectedReviewIncorrectIds.length === 1
                      ? "pregunta a repasar"
                      : "preguntas a repasar"}
                  </span>
                </div>
                <div className="py-4 flex flex-col items-center">
                  <span className="text-2xl font-bold text-slate-900 dark:text-slate-50">
                    {selectedReviewChapter.sections.length}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    secciones intentadas
                  </span>
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                {selectedReviewStatus === "available" ? (
                  <button
                    type="button"
                    onClick={handleStartReview}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-orange-400 hover:bg-orange-500 text-white transition-colors"
                  >
                    <RotateCcw size={15} />
                    Repasar errores
                  </button>
                ) : (
                  <p className="text-center text-sm font-semibold text-violet-600 dark:text-violet-400 py-1">
                    ¡Perfecto! No tuviste errores en el último intento
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chapter exam modal */}
      <AnimatePresence>
        {selectedExamChapter && selectedExamStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedExamKey(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 48 }}
              transition={{ type: "spring", damping: 26, stiffness: 300 }}
              className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className={cn(
                  "px-5 pt-5 pb-4",
                  selectedExamStatus === "passed"
                    ? "bg-emerald-50 dark:bg-emerald-900/20"
                    : "bg-rose-50 dark:bg-rose-900/20"
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <span
                      className={cn(
                        "inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-2",
                        selectedExamStatus === "passed"
                          ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
                          : "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300"
                      )}
                    >
                      Examen de capítulo
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-slate-50 leading-snug">
                      {selectedExamChapter.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {selectedExamStatus === "passed"
                        ? "Ya aprobaste este examen. Podés volver a intentarlo."
                        : `${selectedExamChapter.sections.length * EXAM_QUESTIONS_PER_SECTION} preguntas del capítulo (${EXAM_QUESTIONS_PER_SECTION} difíciles por sección). Necesitás el 100% para avanzar.`}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Cerrar"
                    onClick={() => setSelectedExamKey(null)}
                    className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 divide-x divide-slate-100 dark:divide-slate-800 border-t border-slate-100 dark:border-slate-800">
                <div className="py-4 flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {selectedExamChapter.sections.length * EXAM_QUESTIONS_PER_SECTION}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Preguntas
                  </span>
                </div>
                <div className="py-4 flex flex-col items-center">
                  <span
                    className={cn(
                      "text-lg font-bold",
                      selectedExamScore >= CHAPTER_EXAM_PASS
                        ? "text-emerald-600 dark:text-emerald-400"
                        : selectedExamScore > 0
                          ? "text-amber-500 dark:text-amber-400"
                          : "text-slate-400"
                    )}
                  >
                    {selectedExamScore > 0 ? `${Math.round(selectedExamScore)}%` : "—"}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Mejor puntaje
                  </span>
                </div>
                <div className="py-4 flex flex-col items-center">
                  <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
                    {CHAPTER_EXAM_PASS}%
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    Para aprobar
                  </span>
                </div>
              </div>

              <div className="px-5 pb-5 pt-4">
                <button
                  type="button"
                  onClick={handleStartChapterExam}
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors",
                    selectedExamStatus === "passed"
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-rose-500 hover:bg-rose-600 text-white"
                  )}
                >
                  <GraduationCap size={16} />
                  {selectedExamStatus === "passed" ? "Volver a examinar" : "Comenzar examen"}
                </button>
                {selectedExamStatus === "available" && (
                  <p className="text-center text-xs text-rose-600 dark:text-rose-400 mt-2.5">
                    Necesitás responder todas correctamente para avanzar al siguiente capítulo
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
