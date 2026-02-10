import bcrypt from "bcryptjs"

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

export async function getCurrentUser() {
  return {
    id: "admin-001",
    email: "admin@mwangazasda.org",
    role: "ADMIN",
    member: {
      firstName: "Admin",
      lastName: "User",
    },
  }
}
