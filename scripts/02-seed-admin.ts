import { neon } from "@neondatabase/serverless"
import bcrypt from "bcryptjs"

async function seedAdmin() {
  const sql = neon(process.env.DATABASE_URL!)

  console.log("[v0] Seeding admin user...")

  try {
    const adminEmail = "admin@mwangazasda.org"
    const adminPassword = "admin123"
    const hashedPassword = await bcrypt.hash(adminPassword, 10)
    const userId = `user_${Date.now()}`
    const memberId = `member_${Date.now()}`

    await sql`
      INSERT INTO users (id, email, password_hash, role)
      VALUES (${userId}, ${adminEmail}, ${hashedPassword}, 'ADMIN')
      ON CONFLICT (email) DO NOTHING
    `

    await sql`
      INSERT INTO members (id, user_id, first_name, last_name, membership_number, membership_status)
      VALUES (${memberId}, ${userId}, 'Church', 'Administrator', 'ADM001', 'ACTIVE')
      ON CONFLICT (user_id) DO NOTHING
    `

    console.log("[v0] Admin user created successfully!")
    console.log("[v0] Login credentials:")
    console.log("[v0] Email: admin@mwangazasda.org")
    console.log("[v0] Password: admin123")
  } catch (error) {
    console.error("[v0] Seeding error:", error)
    throw error
  }
}

seedAdmin()
