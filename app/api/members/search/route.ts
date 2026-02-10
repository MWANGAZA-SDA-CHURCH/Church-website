import { type NextRequest, NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("q")

    if (!query) {
      return NextResponse.json({ members: [] })
    }

    const members = await sql`
      SELECT 
        m.id,
        m.first_name,
        m.last_name,
        m.membership_number,
        m.date_of_birth,
        m.gender,
        m.phone_number,
        m.address,
        m.membership_status,
        m.join_date,
        u.email
      FROM members m
      LEFT JOIN users u ON m.user_id = u.id
      WHERE 
        LOWER(m.first_name) LIKE LOWER(${"%" + query + "%"})
        OR LOWER(m.last_name) LIKE LOWER(${"%" + query + "%"})
        OR LOWER(m.membership_number) LIKE LOWER(${"%" + query + "%"})
      ORDER BY m.last_name ASC
      LIMIT 20
    `

    const formattedMembers = members.map((m: any) => ({
      id: m.id,
      firstName: m.first_name,
      lastName: m.last_name,
      membershipNumber: m.membership_number,
      dateOfBirth: m.date_of_birth,
      gender: m.gender,
      phoneNumber: m.phone_number,
      address: m.address,
      membershipStatus: m.membership_status,
      joinDate: m.join_date,
      user: { email: m.email },
    }))

    return NextResponse.json({ members: formattedMembers })
  } catch (error) {
    console.error("Member search error:", error)
    return NextResponse.json({ error: "Failed to search members" }, { status: 500 })
  }
}
