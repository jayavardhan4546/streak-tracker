type Props={
  streak:number
  total:number
  lastDate:string
}

export default function StreakCard({streak,total,lastDate}:Props){

  return(

    <div className="bg-white p-8 rounded-xl shadow-lg w-[350px] text-center">

      <h2 className="text-2xl font-bold mb-4">
        Study Statistics
      </h2>

      <p>🔥 Current Streak: {streak}</p>
      <p>📚 Total Study Days: {total}</p>
      <p>📅 Last Studied: {lastDate}</p>

    </div>

  )

}