import { NextResponse } from 'next/server'
import clientPromise from "@/app/lib/mongodb"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route"

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { action, data } = await request.json()

  const client = await clientPromise
  const db = client.db("traittune")
  const actionsCollection = db.collection("user_actions")

  await actionsCollection.insertOne({
    userId: session.user.id,
    action,
    data,
    timestamp: new Date()
  })

  return NextResponse.json({ success: true })
}