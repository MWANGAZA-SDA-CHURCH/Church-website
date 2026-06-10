import { neon } from "@neondatabase/serverless"

let _sql: ReturnType<typeof neon> | null = null

function getSql() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set")
    }
    _sql = neon(process.env.DATABASE_URL)
  }
  return _sql
}

export const sql = ((template: TemplateStringsArray, ...values: any[]) => {
  return getSql()(template, ...values)
}) as any
