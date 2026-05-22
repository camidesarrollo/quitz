"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Home, Eye, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS: {
  href: string;
  label: string;
  icon: React.ElementType;
  isActive: (p: string) => boolean;
}[] = [
  {
    href: "/",
    label: "Inicio",
    icon: Home,
    isActive: (p) => p === "/",
  },
  {
    href: "/browse",
    label: "Banco",
    icon: Eye,
    isActive: (p) => p === "/browse",
  },
  {
    href: "/#historial",
    label: "Historial",
    icon: Clock,
    isActive: (p) => p.startsWith("/history"),
  },
];

export function AppHeader() {
  const [dark, setDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-bold text-slate-900 dark:text-slate-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Quitz
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon, isActive }) => {
            const active = isActive(pathname);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",
                  active
                    ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800"
                )}
              >
                <Icon size={14} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        type="button"
        onClick={toggle}
        className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        aria-label="Cambiar tema"
      >
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
