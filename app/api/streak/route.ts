import { NextResponse } from "next/server"
import { studyDates } from "@/lib/data"

export async function GET(){

  if(studyDates.length === 0){
    return NextResponse.json({
      streak:0,
      total:0,
      lastDate:"None"
    })
  }

  // sort dates
  const sorted = [...studyDates].sort(
    (a,b)=> new Date(a).getTime() - new Date(b).getTime()
  )

  let streak = 1

  for(let i = sorted.length-1; i > 0; i--){

    const current = new Date(sorted[i])
    const prev = new Date(sorted[i-1])

    const diff =
      (current.getTime() - prev.getTime()) /
      (1000*60*60*24)

    if(diff === 1){
      streak++
    }else{
      break
    }

  }

  return NextResponse.json({
    streak: streak,
    total: studyDates.length,
    lastDate: sorted[sorted.length-1]
  })

}