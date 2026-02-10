import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth"

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const user = await getCurrentUser()
    const { id } = await params

    if (!user || (user.role !== "ADMIN" && user.role !== "CLERK")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const [transfer] = await sql`
      UPDATE transfers
      SET 
        status = 'APPROVED',
        approval_date = CURRENT_TIMESTAMP,
        approved_by_id = ${user.member?.id || null},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
      RETURNING *
    `

    if (!transfer) {
      return NextResponse.json({ error: "Transfer not found" }, { status: 404 })
    }

    const formattedTransfer = {
      id: transfer.id,
      memberId: transfer.member_id,
      fromChurch: transfer.from_church,
      toChurch: transfer.to_church,
      status: transfer.status,
      approvalDate: transfer.approval_date,
    }

    return NextResponse.json({ transfer: formattedTransfer })
  } catch (error) {
    console.error("Transfer approval error:", error)
    return NextResponse.json({ error: "Failed to approve transfer" }, { status: 500 })
  }
}
