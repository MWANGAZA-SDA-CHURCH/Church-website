import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen gradient-teal flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="inline-flex items-center text-white hover:text-teal-100 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <Card>
          <CardHeader className="text-center">
            <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center text-white mx-auto mb-4 text-2xl font-bold">
              M
            </div>
            <CardTitle className="text-2xl font-serif">Welcome Back</CardTitle>
            <p className="text-gray-600 text-sm">Sign in to access your account</p>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
