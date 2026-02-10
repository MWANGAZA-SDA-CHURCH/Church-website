import { neon } from "@neondatabase/serverless"

async function initDatabase() {
  const sql = neon(process.env.DATABASE_URL!)

  console.log("[v0] Starting database initialization...")

  try {
    console.log("[v0] Creating enums...")

    await sql`
      DO $$ BEGIN
        CREATE TYPE user_role AS ENUM ('MEMBER', 'ADMIN', 'CLERK');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `

    await sql`
      DO $$ BEGIN
        CREATE TYPE membership_status AS ENUM ('ACTIVE', 'TRANSFERRED', 'INACTIVE', 'DECEASED');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `

    await sql`
      DO $$ BEGIN
        CREATE TYPE transfer_status AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'COMPLETED');
      EXCEPTION
        WHEN duplicate_object THEN null;
      END $$;
    `

    console.log("[v0] Creating tables...")

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        role user_role DEFAULT 'MEMBER' NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS members (
        id TEXT PRIMARY KEY,
        user_id TEXT UNIQUE NOT NULL,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        date_of_birth TIMESTAMP,
        phone TEXT,
        address TEXT,
        membership_number TEXT UNIQUE NOT NULL,
        membership_status membership_status DEFAULT 'ACTIVE' NOT NULL,
        join_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        baptism_date TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS transfers (
        id TEXT PRIMARY KEY,
        member_id TEXT NOT NULL,
        from_church TEXT NOT NULL,
        to_church TEXT NOT NULL,
        request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        approval_date TIMESTAMP,
        status transfer_status DEFAULT 'PENDING' NOT NULL,
        reason TEXT,
        notes TEXT,
        approved_by_id TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        FOREIGN KEY (member_id) REFERENCES members(id),
        FOREIGN KEY (approved_by_id) REFERENCES members(id)
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS ministries (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        leader TEXT,
        image TEXT,
        is_active BOOLEAN DEFAULT true NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS sermons (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        speaker TEXT NOT NULL,
        date TIMESTAMP NOT NULL,
        video_url TEXT,
        audio_url TEXT,
        description TEXT,
        scripture TEXT,
        thumbnail TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `

    await sql`
      CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        start_date TIMESTAMP NOT NULL,
        end_date TIMESTAMP,
        location TEXT,
        image TEXT,
        is_public BOOLEAN DEFAULT true NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      )
    `

    console.log("[v0] Creating indexes...")

    await sql`CREATE INDEX IF NOT EXISTS idx_member_name ON members(first_name, last_name)`
    await sql`CREATE INDEX IF NOT EXISTS idx_member_number ON members(membership_number)`
    await sql`CREATE INDEX IF NOT EXISTS idx_transfer_member ON transfers(member_id)`
    await sql`CREATE INDEX IF NOT EXISTS idx_transfer_status ON transfers(status)`
    await sql`CREATE INDEX IF NOT EXISTS idx_sermon_date ON sermons(date)`
    await sql`CREATE INDEX IF NOT EXISTS idx_event_date ON events(start_date)`

    console.log("[v0] Database initialization complete!")
  } catch (error) {
    console.error("[v0] Database initialization error:", error)
    throw error
  }
}

initDatabase()
