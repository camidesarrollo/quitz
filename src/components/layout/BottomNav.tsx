"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, GraduationCap, BookOpen, UserCircle, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS: {
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

export function BottomNav() {
  const pathname = usePathname();

  // Hidden during active quiz to avoid distraction
  if (/^\/quiz\/[^/]+$/.test(pathname)) return null;

  return (
    <nav className="sm:hidden fixed bottom-0 inset-x-0 z-10 bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
      <div className="flex items-center h-16">
        {NAV_ITEMS.map(({ href, label, icon: Icon, isActive }) => {
          const active = isActive(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-1 h-full transition-colors",
                active
                  ? "text-indigo-600 dark:text-indigo-400"
                  : "text-slate-400 dark:text-slate-500 active:text-slate-600 dark:active:text-slate-300"
              )}
            >
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              <span className={cn("text-[10px]", active ? "font-bold" : "font-semibold")}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
