"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Home, GraduationCap, BookOpen, UserCircle, Users, LogIn, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import type { User } from "@supabase/supabase-js";

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
    href: "/exam",
    label: "Examen",
    icon: GraduationCap,
    isActive: (p) => p === "/exam",
  },
  {
    href: "/study",
    label: "Estudio",
    icon: BookOpen,
    isActive: (p) => p === "/study",
  },
  {
    href: "/profile",
    label: "Mi Perfil",
    icon: UserCircle,
    isActive: (p) => p === "/profile",
  },
  {
    href: "/social",
    label: "Social",
    icon: Users,
    isActive: (p) => p === "/social",
  },
];

export function AppHeader() {
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const userInitial = user?.email?.[0].toUpperCase() ?? "";

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm px-4 h-14 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm font-bold text-slate-900 dark:text-slate-50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          Quitz
        </Link>

        {/* Desktop nav — hidden on home page (sidebar handles nav there) */}
        {user && pathname !== "/" && <nav className="hidden sm:flex items-center gap-1">
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
        </nav>}
      </div>

      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggle}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Cambiar tema"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Auth */}
        {user ? (
          <div className="flex items-center gap-2">
            <Link
              href="/profile"
              className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold hover:bg-indigo-700 transition-colors"
              aria-label="Mi perfil"
            >
              {userInitial}
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Cerrar sesión"
            >
              <LogOut size={15} />
            </button>
          </div>
        ) : (
          <Link
            href="/auth/login"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LogIn size={14} />
            Ingresar
          </Link>
        )}
      </div>
    </header>
  );
}
