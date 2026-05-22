import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Quitz — AZ-900 Practice",
  description: "Practica para la certificación Microsoft Azure AZ-900",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen`}
      >
        <AppHeader />
        <div className="pb-20 sm:pb-0">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
