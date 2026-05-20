import { AppHeader } from "@/components/layout/AppHeader";
import { QuizMenu } from "@/components/quiz/QuizMenu";

export default function HomePage() {
  return (
    <>
      <AppHeader />
      <main>
        <QuizMenu />
      </main>
    </>
  );
}
