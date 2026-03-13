import HistoryList from "../../components/HistoryList";
import Link from "next/link";

export default function HistoryPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">

      <h1 className="text-3xl font-bold">
        Study History
      </h1>

      <HistoryList />

      <Link
        href="/"
        className="text-blue-600 underline"
      >
        Back to Dashboard
      </Link>

    </main>
  );
}