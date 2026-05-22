"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, BookMarked, Shuffle, ListOrdered } from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { AZ900_TERMS, TERM_CATEGORIES } from "@/data/az900-terms";
import { getTermQuestions, getTermCount } from "@/lib/terms-quiz";
import { AZ900 } from "@/data/courses";
import { cn } from "@/lib/utils";
import type { QuizConfig, QuizMode } from "@/types/quiz";

const PREFERRED_COUNTS = [10, 20, 40];

function buildCountOptions(poolSize: number): number[] {
  return [...new Set(PREFERRED_COUNTS.filter((n) => n < poolSize).concat(poolSize))];
}

const TOTAL = AZ900_TERMS.length;

export function TermsView() {
  const router = useRouter();
  const { startSessionWithQuestions, clearSession } = useQuizStore();

  const [categoryId, setCategoryId] = useState<string | undefined>(undefined);
  const [mode, setMode] = useState<QuizMode>("random");

  const poolSize = getTermCount(categoryId);
  const countOptions = buildCountOptions(poolSize);
  const [count, setCount] = useState(Math.min(10, poolSize));
  const [isCustom, setIsCustom] = useState(false);
  const [customInput, setCustomInput] = useState("");

  function handleCategoryChange(id: string | undefined) {
    setCategoryId(id);
    setCustomInput("");
    setIsCustom(false);
    const newPool = getTermCount(id);
    const opts = buildCountOptions(newPool);
    setCount((prev) => (opts.includes(prev) ? prev : opts[0] ?? 10));
  }

  function handlePresetClick(n: number) {
    setCount(n);
    setCustomInput("");
    setIsCustom(false);
  }

  function handleCustomChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setCustomInput(val);
    setIsCustom(true);
    const num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= poolSize) setCount(num);
  }

  function handleCustomBlur() {
    const num = parseInt(customInput, 10);
    if (!isNaN(num) && num >= 1) {
      const clamped = Math.min(num, poolSize);
      setCount(clamped);
      setCustomInput(String(clamped));
    } else {
      setCustomInput("");
      setIsCustom(false);
    }
  }

  function handleStart() {
    if (poolSize === 0) return;
    clearSession();

    let questions = getTermQuestions(categoryId);
    if (mode === "random") {
      questions = [...questions].sort(() => Math.random() - 0.5);
    }
    questions = questions.slice(0, count);

    const catName = categoryId
      ? TERM_CATEGORIES.find((c) => c.id === categoryId)?.name ?? categoryId
      : "Todos los términos";

    const config: QuizConfig = {
      courseId: AZ900.id,
      questionCount: questions.length,
      mode,
      label: `Vocabulario · ${catName} · ${questions.length} términos`,
    };

    const sessionId = startSessionWithQuestions(config, questions);
    router.push(`/quiz/${sessionId}`);
  }

  const previewTerms = (
    categoryId
      ? AZ900_TERMS.filter((t) => t.categoryId === categoryId)
      : AZ900_TERMS
  ).slice(0, count);

  return (
    <div className="max-w-lg mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => router.push("/")}
          title="Volver al menú"
          className="w-9 h-9 rounded-xl border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shrink-0"
        >
          <ChevronLeft size={18} />
        </button>
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              AZ-900
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">
            Vocabulario
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {TOTAL} términos clave · practica definiciones antes del examen
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Config card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4 space-y-5">

          {/* Category filter */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Categoría
            </p>
            <div className="flex gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => handleCategoryChange(undefined)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border",
                  !categoryId
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900"
                )}
              >
                Todas
                <span className={cn("ml-1.5 font-normal", !categoryId ? "text-orange-200" : "text-slate-400 dark:text-slate-500")}>
                  {TOTAL}
                </span>
              </button>
              {TERM_CATEGORIES.map((cat) => {
                const catCount = getTermCount(cat.id);
                const active = categoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold transition-colors border",
                      active
                        ? "bg-orange-500 border-orange-500 text-white"
                        : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-900"
                    )}
                  >
                    {cat.icon} {cat.name}
                    <span className={cn("ml-1.5 font-normal", active ? "text-orange-200" : "text-slate-400 dark:text-slate-500")}>
                      {catCount}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Count */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Términos
            </p>
            <div className="flex gap-2">
              {countOptions.map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => handlePresetClick(n)}
                  className={cn(
                    "flex-1 py-2 rounded-lg text-sm font-semibold transition-colors border-2",
                    !isCustom && count === n
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300"
                      : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  {n === poolSize ? "Todo" : n}
                </button>
              ))}
              <input
                type="number"
                min={1}
                max={poolSize}
                value={customInput}
                onChange={handleCustomChange}
                onBlur={handleCustomBlur}
                placeholder="..."
                className={cn(
                  "w-16 py-2 rounded-lg text-sm font-semibold text-center transition-colors border-2 bg-transparent outline-none",
                  isCustom
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300"
                    : "border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                )}
              />
            </div>
          </div>

          {/* Mode */}
          <div>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">
              Orden
            </p>
            <div className="flex gap-2">
              {(
                [
                  { value: "random", label: "Aleatorio", icon: Shuffle },
                  { value: "sequential", label: "Secuencial", icon: ListOrdered },
                ] as const
              ).map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setMode(value)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition-colors border-2",
                    mode === value
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300"
                      : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                  )}
                >
                  <Icon size={14} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleStart}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold transition-colors text-sm"
          >
            <BookMarked size={15} />
            Comenzar · {count} término{count !== 1 ? "s" : ""}
          </button>
        </div>

        {/* Preview of terms */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
            Términos incluidos
            {categoryId && (
              <span className="ml-2 font-normal normal-case text-slate-400 dark:text-slate-500">
                ({TERM_CATEGORIES.find((c) => c.id === categoryId)?.icon}{" "}
                {TERM_CATEGORIES.find((c) => c.id === categoryId)?.name})
              </span>
            )}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {previewTerms.map((t) => (
              <span
                key={t.id}
                className="text-[11px] font-medium bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded-full"
              >
                {t.term}
              </span>
            ))}
            {poolSize > count && (
              <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 px-2 py-0.5">
                +{poolSize - count} más
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
