"use client";

import { useState } from "react";

export default function StudyButton({ onStudy }: { onStudy: () => void }) {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const today = new Date().toDateString();

    const stored = localStorage.getItem("studyDates");
    const dates = stored ? JSON.parse(stored) : [];

    if (dates.includes(today)) {
      setMessage("You already marked today.");
      return;
    }

    dates.push(today);
    localStorage.setItem("studyDates", JSON.stringify(dates));

    setMessage("Study marked successfully!");
    onStudy();
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleClick}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        I Studied Today
      </button>

      {message && <p className="mt-3 text-green-600">{message}</p>}
    </div>
  );
}