"use client";

import { useEffect, useState } from "react";
import StreakCard from "../components/StreakCard";
import StudyButton from "../components/StudyButton";
import { calculateStreak } from "../lib/streakLogic";
import Link from "next/link";

export default function Home() {
  const [streak, setStreak] = useState(0);
  const [total, setTotal] = useState(0);
  const [lastDate, setLastDate] = useState<string | null>(null);

  const loadData = () => {
    const stored = localStorage.getItem("studyDates");
    const dates = stored ? JSON.parse(stored) : [];

    const result = calculateStreak(dates);

    setStreak(result.streak);
    setTotal(result.total);
    setLastDate(result.lastDate);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-6">

      <h1 className="text-3xl font-bold">
        Daily Learning Streak Tracker
      </h1>

      <StreakCard
        streak={streak}
        total={total}
        lastDate={lastDate}
      />

      <StudyButton onStudy={loadData} />

      <Link
        href="/history"
        className="text-blue-600 underline"
      >
        View Study History
      </Link>

    </main>
  );
}