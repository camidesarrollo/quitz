import { Users } from "lucide-react";

export default function SocialPage() {
  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
          <Users size={32} className="text-indigo-500 dark:text-indigo-400" />
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">Social</h1>
        <p className="text-slate-400 dark:text-slate-500 mt-2 text-sm">Próximamente</p>
      </div>
    </main>
  );
}
