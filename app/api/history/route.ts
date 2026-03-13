import { NextResponse } from "next/server"
import { studyDates } from "@/lib/data"

export async function GET(){

  const history = [...studyDates].reverse()

  return NextResponse.json(history)

}