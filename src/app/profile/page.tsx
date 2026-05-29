"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, Mail, UserCircle, LogIn } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <main className="max-w-lg mx-auto px-4 py-10">
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="max-w-lg mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
            <UserCircle size={32} className="text-slate-400 dark:text-slate-500" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
            No estás conectado
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
            Iniciá sesión para ver tu perfil
          </p>
          <Link
            href="/auth/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
          >
            <LogIn size={15} />
            Iniciar sesión
          </Link>
        </motion.div>
      </main>
    );
  }

  const userInitial = user.email?.[0].toUpperCase() ?? "?";
  const memberSince = new Date(user.created_at).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold tracking-widest text-indigo-500 uppercase">Cuenta</span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mt-0.5">Mi Perfil</h1>
        </div>

        {/* Avatar + email */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-500/20 shrink-0">
              {userInitial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-bold text-slate-900 dark:text-slate-50 truncate">
                {user.email}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                Miembro desde {memberSince}
              </p>
            </div>
          </div>
        </div>

        {/* Email row */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <Mail size={16} className="text-slate-500 dark:text-slate-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Email
              </p>
              <p className="text-sm font-medium text-slate-900 dark:text-slate-50 truncate mt-0.5">
                {user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Sign out */}
        <button
          type="button"
          onClick={handleSignOut}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-red-200 dark:border-red-900/60 text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
        >
          <LogOut size={15} />
          Cerrar sesión
        </button>
      </motion.div>
    </main>
  );
}
