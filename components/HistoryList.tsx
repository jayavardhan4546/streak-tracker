"use client";

import { useEffect, useState } from "react";

export default function HistoryList() {
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("studyDates");
    const data = stored ? JSON.parse(stored) : [];
    setDates(data.reverse());
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Study History</h2>

      {dates.length === 0 && <p>No study history yet.</p>}

      <ul>
        {dates.map((date, index) => (
          <li key={index} className="border-b py-2">
            {date}
          </li>
        ))}
      </ul>
    </div>
  );
}