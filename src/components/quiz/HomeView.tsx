"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  PlayCircle, ArrowRight, Trophy, Clock, ChevronRight, Trash2,
  GraduationCap, Lightbulb, Home, BookOpen, UserCircle, Users,
  Target, Zap, CheckCircle2, XCircle,
} from "lucide-react";
import { useQuizStore } from "@/lib/store/quiz.store";
import { formatDate, formatDuration } from "@/lib/utils";
import { isPassing, PASS_THRESHOLD } from "@/lib/quiz-utils";
import { PassPredictor } from "@/components/quiz/PassPredictor";
import { CategoryDashboard } from "@/components/quiz/CategoryDashboard";
import { createClient } from "@/lib/supabase/client";
import { AZ900 } from "@/data/courses";
import { cn } from "@/lib/utils";
import { DIFFICULTY_XP, type CompletedSession } from "@/types/quiz";

const SIDEBAR_NAV = [
  { href: "/",        label: "Inicio",    icon: Home,         match: (p: string) => p === "/" },
  { href: "/exam",    label: "Examen",    icon: GraduationCap, match: (p: string) => p === "/exam" },
  { href: "/study",   label: "Estudio",   icon: BookOpen,     match: (p: string) => p === "/study" },
  { href: "/profile", label: "Mi Perfil", icon: UserCircle,   match: (p: string) => p === "/profile" },
  { href: "/social",  label: "Social",    icon: Users,        match: (p: string) => p === "/social" },
];

function computePassPct(history: CompletedSession[]): { pct: number; allCovered: boolean; passing: boolean } | null {
  const tally: Record<string, { correct: number; total: number }> = {};
  for (const s of history) {
    for (const [idxStr, answer] of Object.entries(s.answers)) {
      const q = s.questions[parseInt(idxStr, 10)];
      if (!q?.categoryId) continue;
      if (!tally[q.categoryId]) tally[q.categoryId] = { correct: 0, total: 0 };
      tally[q.categoryId].total++;
      if (answer.isCorrect) tally[q.categoryId].correct++;
    }
  }
  const weights = AZ900.defaultWeights;
  const withData = weights.filter((w) => (tally[w.categoryId]?.total ?? 0) > 0);
  if (withData.length === 0) return null;

  const allCovered = withData.length === weights.length;
  const coveredWeight = withData.reduce((s, w) => s + w.weight, 0);
  const coveredScore = withData.reduce((s, w) => {
    const t = tally[w.categoryId];
    return t && t.total > 0 ? s + (t.correct / t.total) * w.weight : s;
  }, 0);
  const pct = allCovered
    ? Math.round(coveredScore)
    : Math.round((coveredScore / coveredWeight) * 100);
  return { pct, allCovered, passing: allCovered && pct >= PASS_THRESHOLD };
}

export function HomeView() {
  const router = useRouter();
  const pathname = usePathname();
  const { session, history, clearSession, clearHistory } = useQuizStore();
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    createClient()
      .auth.getUser()
      .then(({ data }) => {
        const meta = data.user?.user_metadata;
        const name =
          (meta?.full_name as string | undefined)?.split(" ")[0] ??
          data.user?.email?.split("@")[0] ??
          "";
        setFirstName(name);
      });
  }, []);

  const totalSessions = history.length;
  const passCount = history.filter((s) => isPassing(s.percentage)).length;
  const avgPct =
    totalSessions > 0
      ? Math.round(history.reduce((sum, s) => sum + s.percentage, 0) / totalSessions)
      : 0;
  const bestPct = totalSessions > 0 ? Math.max(...history.map((s) => s.percentage)) : 0;

  const passPct = useMemo(() => computePassPct(history), [history]);

  const todayXP = useMemo(() => {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const ms = todayStart.getTime();
    let xp = 0;
    for (const s of history) {
      if (s.completedAt < ms) continue;
      for (const [idxStr, answer] of Object.entries(s.answers)) {
        if (!answer.isCorrect) continue;
        const q = s.questions[parseInt(idxStr, 10)];
        if (q) xp += DIFFICULTY_XP[q.difficulty ?? "easy"];
      }
    }
    if (session && session.startedAt >= ms) {
      for (const [idxStr, answer] of Object.entries(session.answers)) {
        if (!answer.isCorrect) continue;
        const q = session.questions[parseInt(idxStr, 10)];
        if (q) xp += DIFFICULTY_XP[q.difficulty ?? "easy"];
      }
    }
    return xp;
  }, [history, session]);
  const nextMilestone = (Math.floor(todayXP / 1000) + 1) * 1000;
  const dailyBarPct = Math.round((todayXP / nextMilestone) * 100);

  const activeSession = session?.status === "active" ? session : null;
  const answeredCount = activeSession ? Object.keys(activeSession.answers).length : 0;
  const progressPct = activeSession
    ? Math.round((answeredCount / activeSession.questions.length) * 100)
    : 0;

  const subtitle =
    totalSessions === 0
      ? "Comenzá tu preparación para la certificación AZ-900."
      : avgPct >= 70
      ? "¡Excelente rendimiento! Seguí así."
      : avgPct >= 50
      ? "Vas por buen camino. ¡Seguí practicando!"
      : "Con práctica constante vas a mejorar. ¡No pares!";

  // ─────────────────────────────────────────────────────────────────
  // Shared sub-renders to avoid duplication between mobile / desktop
  // ─────────────────────────────────────────────────────────────────

  const inProgressCard = (compact = false) =>
    activeSession ? (
      <>
        <div className="flex justify-end mb-5">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full">
            En Progreso
          </span>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-4">
          <PlayCircle size={22} className="text-amber-500 dark:text-amber-400" />
        </div>
        <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">Quiz en Progreso</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-auto truncate">{activeSession.config.label}</p>
        <div className="mt-5">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-slate-500 dark:text-slate-400">Progreso</span>
            <span className="font-bold tabular-nums text-slate-900 dark:text-white">
              {answeredCount}/{activeSession.questions.length} ({progressPct}%)
            </span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-amber-400 dark:bg-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={clearSession}
              className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
            >
              Descartar
            </button>
            <button
              type="button"
              onClick={() => router.push(`/quiz/${activeSession.id}`)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-colors"
            >
              Continuar <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="flex justify-end mb-5">
          <span className="text-[10px] font-bold tracking-widest uppercase bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 px-2.5 py-1 rounded-full">
            Modo Estudio
          </span>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center mb-4">
          <BookOpen size={22} className="text-sky-600 dark:text-sky-400" />
        </div>
        <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">Modo Estudio</p>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-auto">
          Reforzá conceptos por área temática a tu ritmo.
        </p>
        <div className="mt-5">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Progreso diario:{" "}
              <span className="font-bold text-slate-900 dark:text-white tabular-nums">
                {todayXP}/{nextMilestone}
              </span>
            </p>
            <span className="text-xs font-semibold text-sky-600 dark:text-sky-400 tabular-nums">{dailyBarPct}%</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-sky-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${dailyBarPct}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <button
            type="button"
            onClick={() => router.push("/study")}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-colors"
          >
            Continuar practicando <ArrowRight size={14} />
          </button>
        </div>
      </>
    );

  const examCard = () => (
    <>
      <div className="flex justify-end mb-5">
        {passPct ? (
          <span className={cn(
            "text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full",
            passPct.passing
              ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400"
              : "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400"
          )}>
            {passPct.allCovered ? "Historial completo" : "Datos parciales"}
          </span>
        ) : (
          <span className="text-[10px] font-bold tracking-widest uppercase bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-full">
            AZ-900
          </span>
        )}
      </div>
      <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
        <GraduationCap size={22} className="text-indigo-600 dark:text-indigo-400" />
      </div>
      <p className="text-lg font-bold text-slate-900 dark:text-white mb-1">Modo Examen</p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-auto">
        Simulacro de alta presión con feedback inmediato.
      </p>
      <div className="mt-5">
        <p className="text-[10px] font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-2">
          Status actual
        </p>
        {passPct ? (
          <>
            <p className={cn(
              "text-xl font-black leading-tight mb-1",
              passPct.passing
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-red-600 dark:text-red-400"
            )}>
              Probabilidad de aprobación {passPct.pct}%
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
              {passPct.allCovered ? "Basado en historial completo" : "Basado en áreas practicadas"}
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-4">
            Sin historial. Completá exámenes para ver tu probabilidad.
          </p>
        )}
        <button
          type="button"
          onClick={() => router.push("/exam")}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
        >
          Iniciar Simulacro <ArrowRight size={14} />
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* ══════════════════════════════════════════════════
          MOBILE — layout original sin cambios
      ══════════════════════════════════════════════════ */}
      <div className="sm:hidden max-w-lg mx-auto px-4 py-10">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">AZ-900</span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">Inicio</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1 text-sm">Métricas y progreso</p>
          </div>

          {/* In-progress session banner */}
          {activeSession && (
            <div className="bg-amber-50 dark:bg-amber-950/30 rounded-2xl border border-amber-200 dark:border-amber-800/60 p-5 mb-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0">
                  <PlayCircle size={18} className="text-amber-500 dark:text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Quiz en progreso</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{activeSession.config.label}</p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-0.5 font-medium">
                    {answeredCount} de {activeSession.questions.length} respondidas · {progressPct}%
                  </p>
                </div>
              </div>
              <div className="mt-3 h-1.5 bg-amber-100 dark:bg-amber-900/40 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-amber-400 dark:bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={clearSession}
                  className="flex-1 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-semibold hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  Descartar
                </button>
                <button type="button" onClick={() => router.push(`/quiz/${activeSession.id}`)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-semibold transition-colors"
                >
                  Continuar <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Empty state CTAs */}
          {totalSessions === 0 && !activeSession && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button type="button" onClick={() => router.push("/exam")}
                className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800/60 p-4 flex flex-col items-center gap-2 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                  <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Modo Examen</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">Preguntas de certificación</p>
              </button>
              <button type="button" onClick={() => router.push("/study")}
                className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-sky-200 dark:border-sky-800/60 p-4 flex flex-col items-center gap-2 hover:border-sky-400 dark:hover:border-sky-500 transition-colors text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center">
                  <Lightbulb size={20} className="text-sky-600 dark:text-sky-400" />
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Modo Estudio</p>
                <p className="text-xs text-slate-400 dark:text-slate-500">Conceptos por tema</p>
              </button>
            </div>
          )}

          {/* Stats overview */}
          {totalSessions > 0 && (
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { label: "Sesiones", value: totalSessions, color: "" },
                { label: "Promedio", value: `${avgPct}%`, color: avgPct >= 70 ? "text-emerald-600 dark:text-emerald-400" : "" },
                { label: "Mejor", value: `${bestPct}%`, color: bestPct >= 70 ? "text-emerald-600 dark:text-emerald-400" : "" },
                { label: "Aprobadas", value: passCount, color: passCount > 0 ? "text-emerald-600 dark:text-emerald-400" : "" },
              ].map(({ label, value, color }) => (
                <div key={label} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 text-center">
                  <p className={cn("text-base font-bold tabular-nums", color || "text-slate-900 dark:text-slate-50")}>{value}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          )}

          {history.length > 0 && <PassPredictor history={history} />}
          {history.length > 0 && <CategoryDashboard history={history} />}

          {/* Recent history */}
          {history.length > 0 && (
            <div id="historial">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Historial reciente</p>
                <button type="button" onClick={clearHistory}
                  className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                >
                  <Trash2 size={11} /> Borrar
                </button>
              </div>
              <div className="space-y-2">
                {history.slice(0, 5).map((s) => (
                  <button key={s.id} type="button" onClick={() => router.push(`/history/${s.id}`)}
                    className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center gap-3 hover:border-slate-300 dark:hover:border-slate-600 transition-colors text-left"
                  >
                    <div className={cn("w-9 h-9 rounded-full flex items-center justify-center shrink-0",
                      isPassing(s.percentage) ? "bg-green-100 dark:bg-green-900/50" : "bg-red-100 dark:bg-red-900/50"
                    )}>
                      <Trophy size={16} className={isPassing(s.percentage) ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                        {s.score}/{s.total}{" "}
                        <span className={cn("font-bold", isPassing(s.percentage) ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400")}>
                          {s.percentage}%
                        </span>
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{s.config.label} · {formatDate(s.completedAt)}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 shrink-0">
                      <Clock size={11} /> {formatDuration(s.durationSeconds)}
                      <ChevronRight size={13} className="opacity-40" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════
          DESKTOP — layout de dos paneles
      ══════════════════════════════════════════════════ */}
      <div className="hidden sm:flex h-[calc(100vh-3.5rem)] overflow-hidden">

        {/* ── Sidebar ── */}
        <aside className="w-60 shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-6">
          {/* Branding */}
          <div className="flex items-center gap-2.5 px-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0">
              <Zap size={15} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">Quitz</p>
              <p className="text-[10px] text-slate-400 dark:text-slate-500">AZ-900 Prep</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 flex flex-col gap-0.5">
            {SIDEBAR_NAV.map(({ href, label, icon: Icon, match }) => {
              const active = match(pathname);
              return (
                <Link key={href} href={href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    active
                      ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-100"
                  )}
                >
                  <Icon size={17} strokeWidth={active ? 2.5 : 2} />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <button type="button" onClick={() => router.push("/exam")}
            className="mx-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white text-sm font-semibold transition-colors"
          >
            Iniciar Práctica
          </button>
        </aside>

        {/* ── Main content ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto bg-slate-50 dark:bg-[#0a0a14]"
        >
          <div className="p-8 max-w-5xl">

            {/* Greeting */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                {firstName ? `Hola de nuevo, ${firstName}.` : "Hola de nuevo."}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 mt-1.5">{subtitle}</p>
            </div>

            {/* Top row — modo cards */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col min-h-64">
                {inProgressCard()}
              </div>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col min-h-64">
                {examCard()}
              </div>
            </div>

            {/* Bottom row — estadísticas + historial */}
            <div className="grid grid-cols-2 gap-5">

              {/* Stats */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <p className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500 mb-5">
                  Estadísticas
                </p>
                {totalSessions > 0 ? (
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Sesiones",  value: String(totalSessions), color: "" },
                      { label: "Promedio",  value: `${avgPct}%`,  color: avgPct >= 70  ? "text-emerald-600 dark:text-emerald-400" : "" },
                      { label: "Mejor",     value: `${bestPct}%`, color: bestPct >= 70 ? "text-emerald-600 dark:text-emerald-400" : "" },
                      { label: "Aprobadas", value: String(passCount), color: passCount > 0 ? "text-emerald-600 dark:text-emerald-400" : "" },
                    ].map(({ label, value, color }) => (
                      <div key={label} className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4">
                        <p className={cn("text-2xl font-bold tabular-nums", color || "text-slate-900 dark:text-white")}>{value}</p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{label}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-8 text-center">
                    <Target size={28} className="text-slate-300 dark:text-slate-700 mb-3" />
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      Completá tu primer examen para ver estadísticas.
                    </p>
                  </div>
                )}
              </div>

              {/* Recent history */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-5">
                  <p className="text-xs font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                    Historial reciente
                  </p>
                  {history.length > 0 && (
                    <button type="button" onClick={clearHistory}
                      className="flex items-center gap-1 text-xs text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={11} /> Borrar
                    </button>
                  )}
                </div>
                {history.length > 0 ? (
                  <div className="space-y-1">
                    {history.slice(0, 5).map((s) => (
                      <button key={s.id} type="button" onClick={() => router.push(`/history/${s.id}`)}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors text-left group"
                      >
                        {isPassing(s.percentage)
                          ? <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          : <XCircle size={16} className="text-red-400 shrink-0" />
                        }
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{s.config.label}</p>
                          <p className="text-xs text-slate-400 dark:text-slate-500">
                            {formatDate(s.completedAt)} · {formatDuration(s.durationSeconds)}
                          </p>
                        </div>
                        <span className={cn(
                          "text-sm font-bold tabular-nums shrink-0",
                          isPassing(s.percentage) ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"
                        )}>
                          {s.percentage}%
                        </span>
                        <ChevronRight size={14} className="text-slate-300 dark:text-slate-700 group-hover:text-slate-500 transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-8 text-center">
                    <Trophy size={28} className="text-slate-300 dark:text-slate-700 mb-3" />
                    <p className="text-sm text-slate-400 dark:text-slate-500">
                      Aún no hay sesiones completadas.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
