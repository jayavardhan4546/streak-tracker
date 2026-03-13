"use client"

import { useEffect,useState } from "react"
import HistoryList from "@/components/HistoryList"
import Link from "next/link"

export default function HistoryPage(){

  const [dates,setDates] = useState<string[]>([])

  const loadHistory = async ()=>{

    const res = await fetch("/api/history")
    const data = await res.json()
    setDates(data)

  }

  useEffect(()=>{
    loadHistory()
  },[])

  return(

    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center gap-6 text-black">

      <HistoryList dates={dates}/>

      <Link href="/" className="underline">
        Back to Dashboard
      </Link>

    </div>

  )

}