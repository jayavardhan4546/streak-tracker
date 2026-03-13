"use client"

import { useEffect,useState } from "react"
import StreakCard from "@/components/StreakCard"
import StudyButton from "@/components/StudyButton"
import Link from "next/link"

export default function Home(){

  const [data,setData] = useState({
    streak:0,
    total:0,
    lastDate:"None"
  })

  const loadData = async ()=>{

    const res = await fetch("/api/streak")
    const json = await res.json()
    setData(json)

  }

  useEffect(()=>{
    loadData()
  },[])

  return(

    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-6 text-black">

      <h1 className="text-4xl font-bold">
        📚 Daily Learning Streak
      </h1>

      <StreakCard
      streak={data.streak}
      total={data.total}
      lastDate={data.lastDate}
      />

      <StudyButton refresh={loadData}/>

      <Link
      href="/history"
      className="underline"
      >
        View Study History
      </Link>

    </div>

  )

}