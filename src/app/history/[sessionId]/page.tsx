import { AppHeader } from "@/components/layout/AppHeader";
import { HistoryDetailView } from "@/components/quiz/HistoryDetailView";

interface PageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function HistoryDetailPage({ params }: PageProps) {
  const { sessionId } = await params;
  return (
    <>
      <AppHeader />
      <main>
        <HistoryDetailView sessionId={sessionId} />
      </main>
    </>
  );
}
