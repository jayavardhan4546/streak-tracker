import { NextResponse } from "next/server"
import { studyDates } from "@/lib/data"

export async function POST(req:Request){

  const body = await req.json()
  const date = body.date

  if(studyDates.includes(date)){
    return NextResponse.json({
      message:"Already marked studied for this day"
    })
  }

  studyDates.push(date)

  return NextResponse.json({
    message:"Study recorded!"
  })

}