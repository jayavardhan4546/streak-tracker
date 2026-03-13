"use client"

import { useState } from "react"

export default function StudyButton({refresh}:any){

  const [date,setDate] = useState("")
  const [msg,setMsg] = useState("")

  const markStudy = async () => {

    const res = await fetch("/api/study",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({date})
    })

    const data = await res.json()
    setMsg(data.message)
    refresh()

  }

  const markMiss = async () => {

    const res = await fetch("/api/notstudy",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({date})
    })

    const data = await res.json()
    setMsg(data.message)
    refresh()

  }

  return(

    <div className="bg-white p-6 rounded-xl shadow-lg w-[350px]">

      <h3 className="text-lg font-semibold mb-4">
        Mark Study Day
      </h3>

      <input
      type="date"
      value={date}
      onChange={(e)=>setDate(e.target.value)}
      className="border p-2 w-full rounded mb-4"
      />

      <div className="flex gap-3">

        <button
        onClick={markStudy}
        className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700"
        >
          Studied
        </button>

        <button
        onClick={markMiss}
        className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700"
        >
          Not Studied
        </button>

      </div>

      <p className="text-center mt-3 text-sm">
        {msg}
      </p>

    </div>

  )

}