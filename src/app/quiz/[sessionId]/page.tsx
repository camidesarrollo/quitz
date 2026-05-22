import { QuizPlayer } from "@/components/quiz/QuizPlayer";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function QuizPage({ params }: PageProps) {
  const { sessionId } = await params;
  return (
    <main>
      <QuizPlayer sessionId={sessionId} />
    </main>
  );
}
