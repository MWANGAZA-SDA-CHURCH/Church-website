import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { memberId, fromChurch, toChurch, reason } = body

    const [transfer] = await sql`
      INSERT INTO transfers (
        member_id, 
        from_church, 
        to_church, 
        reason, 
        status,
        request_date,
        created_at,
        updated_at
      )
      VALUES (
        ${memberId},
        ${fromChurch},
        ${toChurch},
        ${reason},
        'PENDING',
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP
      )
      RETURNING *
    `

    const formattedTransfer = {
      id: transfer.id,
      memberId: transfer.member_id,
      fromChurch: transfer.from_church,
      toChurch: transfer.to_church,
      reason: transfer.reason,
      status: transfer.status,
      requestDate: transfer.request_date,
    }

    return NextResponse.json({ transfer: formattedTransfer }, { status: 201 })
  } catch (error) {
    console.error("Transfer creation error:", error)
    return NextResponse.json({ error: "Failed to create transfer request" }, { status: 500 })
  }
}
