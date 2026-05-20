import { AppHeader } from "@/components/layout/AppHeader";
import { ResultsView } from "@/components/quiz/ResultsView";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function ResultsPage({ params }: PageProps) {
  const { sessionId } = await params;
  return (
    <>
      <AppHeader />
      <main>
        <ResultsView sessionId={sessionId} />
      </main>
    </>
  );
}
