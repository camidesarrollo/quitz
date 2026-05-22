"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Eye, ChevronLeft, CheckCircle2, Search, X } from "lucide-react";
import { getAllQuestions, getQuestionsByCategory, getCategoryCount } from "@/lib/repositories/QuestionRepository";
import { cn } from "@/lib/utils";
import { AZ900 } from "@/data/courses";
import type { Question } from "@/types/quiz";
import { QuestionNote } from "@/components/quiz/QuestionNote";
import { QuestionHistory } from "@/components/quiz/QuestionHistory";

const COURSE = AZ900;

type Filter = "all" | string;

const FILTER_OPTIONS: { value: Filter; label: string; count: number }[] = [
  {
    value: "all",
    label: "Todas",
    count: COURSE.categories.reduce((s, c) => s + getCategoryCount(c.id), 0),
  },
  ...COURSE.categories.map((c) => ({
    value: c.id,
    label: c.name,
    count: getCategoryCount(c.id),
  })),
];

function isCorrectOption(q: Question, option: string): boolean {
  if (q.correctAnswers && q.correctAnswers.length > 0) {
    return q.correctAnswers.includes(option);
  }
  return option === q.correctAnswer;
}

export function BrowseView() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const baseQuestions = filter === "all" ? getAllQuestions() : getQuestionsByCategory(filter);
  const query = search.trim().toLowerCase();
  const questions = query
    ? baseQuestions.filter(
        (q) =>
          q.text.toLowerCase().includes(query) ||
          q.options.some((o) => o.toLowerCase().includes(query))
      )
    : baseQuestions;
  const total = questions.length;
  const q = questions[Math.min(index, total - 1)];

  function handleFilter(f: Filter) {
    setFilter(f);
    setIndex(0);
    setRevealed(false);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setIndex(0);
    setRevealed(false);
  }

  function handlePrev() {
    if (index === 0) return;
    setDirection(-1);
    setIndex((i) => i - 1);
    setRevealed(false);
  }

  function handleNext() {
    if (index >= total - 1) return;
    setDirection(1);
    setIndex((i) => i + 1);
    setRevealed(false);
  }

  const keyHandlerRef = useRef<(e: KeyboardEvent) => void>(() => {});
  useEffect(() => {
    function onKey(e: KeyboardEvent) { keyHandlerRef.current(e); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  keyHandlerRef.current = (e: KeyboardEvent) => {
    if (e.metaKey || e.ctrlKey || e.altKey || total === 0) return;
    if (e.key === "ArrowLeft")  { e.preventDefault(); handlePrev(); }
    else if (e.key === "ArrowRight") { e.preventDefault(); handleNext(); }
    else if (e.key.toUpperCase() === "R" && !revealed) { e.preventDefault(); setRevealed(true); }
  };

  const isMulti = !!(q?.correctAnswers && q.correctAnswers.length > 1);
  const categoryName = q ? COURSE.categories.find((c) => c.id === q.categoryId)?.name : undefined;

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => router.push("/")}
          title="Volver al menú"
          className="w-9 h-9 rounded-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shrink-0"
        >
          <ChevronLeft size={18} />
        </button>
        <div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50">
            Banco de preguntas
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Solo lectura · revelá la respuesta cuando quieras
          </p>
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1">
        {FILTER_OPTIONS.map(({ value, label, count }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleFilter(value)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border",
              filter === value
                ? "bg-teal-600 border-teal-600 text-white"
                : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900"
            )}
          >
            {label}
            <span
              className={cn(
                "ml-1.5 font-normal",
                filter === value ? "text-teal-200" : "text-slate-400 dark:text-slate-500"
              )}
            >
              {count}
            </span>
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Buscar por texto u opciones…"
          className="w-full pl-8 pr-8 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-700 focus:border-transparent transition-colors"
        />
        {search && (
          <button
            type="button"
            onClick={() => handleSearch("")}
            title="Limpiar búsqueda"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X size={13} />
          </button>
        )}
      </div>

      {total === 0 ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 text-center mt-2">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Sin resultados</p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Ninguna pregunta coincide con{" "}
            <span className="font-semibold">"{search}"</span>
          </p>
        </div>
      ) : (
        <>
          {/* Progress row */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 tabular-nums shrink-0">
              {index + 1} / {total}
            </span>
            <div className="flex-1 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-teal-500 rounded-full"
                animate={{ width: `${((index + 1) / total) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            {categoryName && (
              <span className="shrink-0 text-[10px] font-medium text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border border-teal-100 dark:border-teal-800/60 px-2 py-0.5 rounded-full">
                {categoryName}
              </span>
            )}
          </div>

          {/* Question card */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${filter}-${index}`}
              initial={{ opacity: 0, x: direction * 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -24 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4"
            >
              <p className="text-[10px] font-bold text-slate-300 dark:text-slate-600 mb-2 tabular-nums">
                #{q!.id}
              </p>

              <p className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4 leading-relaxed">
                {q!.text}
              </p>

              {isMulti && (
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mb-3">
                  Respuesta múltiple · {q!.correctAnswers!.length} opciones correctas
                </p>
              )}

              {/* Options */}
              <div className="space-y-2 mb-4">
                {q!.options.map((option, i) => {
                  const correct = revealed && isCorrectOption(q!, option);
                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm transition-colors",
                        revealed
                          ? correct
                            ? "border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200"
                            : "border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-600"
                          : "border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                      )}
                    >
                      <span className="font-bold text-xs text-slate-400 dark:text-slate-500 shrink-0 w-4">
                        {String.fromCharCode(65 + i)}.
                      </span>
                      <span className="flex-1">{option}</span>
                      {correct && (
                        <CheckCircle2 size={13} className="shrink-0 text-emerald-500" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Reveal button / Explanation */}
              {!revealed ? (
                <button
                  type="button"
                  onClick={() => setRevealed(true)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-2 border-teal-200 dark:border-teal-800/60 text-teal-600 dark:text-teal-400 text-sm font-semibold hover:bg-teal-50 dark:hover:bg-teal-950/20 transition-colors"
                >
                  <Eye size={14} />
                  Revelar respuesta
                </button>
              ) : q!.explaination ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.22 }}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3"
                >
                  <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1.5">
                    Explicación
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {q!.explaination}
                  </p>
                </motion.div>
              ) : null}

              <QuestionNote questionId={q!.id} accent="teal" />
              <QuestionHistory questionId={q!.id} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={handlePrev}
              disabled={index === 0}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-colors",
                index === 0
                  ? "border-slate-100 dark:border-slate-800 text-slate-300 dark:text-slate-700 cursor-not-allowed"
                  : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
              )}
            >
              <ArrowLeft size={15} />
              Anterior
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={index >= total - 1}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-colors",
                index >= total - 1
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white"
              )}
            >
              Siguiente
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Keyboard hints */}
          <div className="mt-5 flex items-center justify-center gap-4 select-none">
            {([["←", "anterior"], ["→", "siguiente"], ["R", "revelar"]] as [string, string][]).map(([key, label]) => (
              <span key={key} className="flex items-center gap-1 text-[10px] text-slate-300 dark:text-slate-700">
                <kbd className="px-1 py-0.5 rounded border border-current font-mono leading-none">
                  {key}
                </kbd>
                {label}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
