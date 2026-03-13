type Props = {
  streak: number;
  total: number;
  lastDate: string | null;
};

export default function StreakCard({ streak, total, lastDate }: Props) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center">
      <h2 className="text-xl font-bold mb-4">Your Study Stats</h2>

      <p className="text-lg">🔥 Current Streak: {streak} days</p>
      <p className="text-lg">📚 Total Study Days: {total}</p>
      <p className="text-lg">
        🗓 Last Studied: {lastDate ? lastDate : "Never"}
      </p>
    </div>
  );
}