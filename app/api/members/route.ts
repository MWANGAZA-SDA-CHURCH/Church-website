import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"
import { sql } from "@/lib/db"
import { hashPassword } from "@/lib/auth"
import { nanoid } from "nanoid"

export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()

    if (!user || (user.role !== "ADMIN" && user.role !== "CLERK")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { firstName, lastName, email, phone, address, dateOfBirth, baptismDate } = body

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Check if email already exists
    const existingUsers = await sql`SELECT id FROM users WHERE email = ${email}`
    if (existingUsers.length > 0) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 })
    }

    // Generate IDs
    const userId = nanoid()
    const memberId = nanoid()
    const membershipNumber = `MWZ${Date.now().toString().slice(-6)}`

    // Create user account with default password
    const defaultPassword = "welcome123"
    const passwordHash = await hashPassword(defaultPassword)

    await sql`
      INSERT INTO users (id, email, password_hash, role, created_at, updated_at)
      VALUES (${userId}, ${email}, ${passwordHash}, 'MEMBER', NOW(), NOW())
    `

    // Create member record
    await sql`
      INSERT INTO members (
        id, user_id, first_name, last_name, phone, address, 
        date_of_birth, baptism_date, membership_number, 
        membership_status, join_date, created_at, updated_at
      )
      VALUES (
        ${memberId}, ${userId}, ${firstName}, ${lastName}, ${phone || null}, ${address || null},
        ${dateOfBirth || null}, ${baptismDate || null}, ${membershipNumber},
        'ACTIVE', NOW(), NOW(), NOW()
      )
    `

    return NextResponse.json({
      success: true,
      member: {
        id: memberId,
        firstName,
        lastName,
        email,
        membershipNumber,
      },
    })
  } catch (error) {
    console.error("[v0] Error creating member:", error)
    return NextResponse.json({ error: "Failed to create member" }, { status: 500 })
  }
}
