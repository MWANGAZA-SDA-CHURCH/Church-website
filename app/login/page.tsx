"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LogIn, Loader2 } from "lucide-react"

const VALID_CREDENTIALS = {
  email: "admin@mwangazasda.org",
  password: "admin123",
}

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    setTimeout(() => {
      if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
        localStorage.setItem(
          "mwangaza_user",
          JSON.stringify({
            id: "admin-001",
            email: email,
            role: "ADMIN",
            firstName: "Admin",
            lastName: "User",
            loggedInAt: Date.now(),
          }),
        )
        router.push("/admin")
      } else {
        setError("Invalid email or password")
        setIsLoading(false)
      }
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #014d4e 40%, #0f172a 100%)" }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(13, 148, 136, 0.3)" }} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(6, 182, 212, 0.2)", animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "rgba(13, 148, 136, 0.1)", animationDelay: "2s" }} />
      </div>

      <main className="flex-1 flex items-center justify-center py-12 px-4 relative z-10">
        <Card className="w-full max-w-md shadow-2xl border-0 rounded-2xl overflow-hidden" style={{ background: "rgba(255, 255, 255, 0.08)", backdropFilter: "blur(24px)", border: "1px solid rgba(255, 255, 255, 0.15)" }}>
          <CardHeader className="text-center space-y-2 pb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg" style={{ background: "linear-gradient(135deg, #0d9488, #06b6d4)" }}>
              <LogIn className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-serif font-bold text-white">Welcome Back</CardTitle>
            <CardDescription className="text-white/70">Sign in to your church admin account</CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="px-4 py-3 rounded-lg text-sm text-red-100" style={{ background: "rgba(239, 68, 68, 0.2)", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@mwangazasda.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  className="border-0 text-white placeholder:text-white/40"
                  style={{ background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                  className="border-0 text-white placeholder:text-white/40"
                  style={{ background: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full text-white font-semibold py-2 rounded-lg transition-all duration-200 shadow-lg border-0"
                style={{ background: "linear-gradient(135deg, #0d9488, #06b6d4)" }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="mr-2 h-4 w-4" />
                    Sign In
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-white/70 mt-6 pt-4" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.15)" }}>
                <p className="font-medium mb-2">Demo Credentials:</p>
                <p className="font-mono text-xs text-white/50 rounded p-2" style={{ background: "rgba(255, 255, 255, 0.05)" }}>
                  admin@mwangazasda.org / admin123
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
