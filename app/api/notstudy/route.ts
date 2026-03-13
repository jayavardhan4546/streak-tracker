import { NextResponse } from "next/server"
import { missedDates } from "@/lib/data"

export async function POST(req:Request){

  const body = await req.json()
  const date = body.date

  if(missedDates.includes(date)){
    return NextResponse.json({
      message:"Already marked not studied"
    })
  }

  missedDates.push(date)

  return NextResponse.json({
    message:"Marked as not studied"
  })

}