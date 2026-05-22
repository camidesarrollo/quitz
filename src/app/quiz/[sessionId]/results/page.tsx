import { ResultsView } from "@/components/quiz/ResultsView";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function ResultsPage({ params }: PageProps) {
  const { sessionId } = await params;
  return (
    <main>
      <ResultsView sessionId={sessionId} />
    </main>
  );
}
