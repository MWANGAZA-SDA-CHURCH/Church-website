"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function TransferRequestForm({
  memberId,
  currentChurch,
}: {
  memberId: string
  currentChurch: string
}) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      memberId,
      fromChurch: currentChurch,
      toChurch: formData.get("toChurch"),
      reason: formData.get("reason"),
    }

    try {
      const response = await fetch("/api/transfers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        router.push("/dashboard/transfers")
        router.refresh()
      }
    } catch (error) {
      console.error("Transfer request error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fromChurch">Current Church</Label>
        <Input id="fromChurch" value={currentChurch} disabled className="mt-2" />
      </div>

      <div>
        <Label htmlFor="toChurch">
          Transfer To <span className="text-red-500">*</span>
        </Label>
        <Input id="toChurch" name="toChurch" placeholder="Enter destination church name" required className="mt-2" />
      </div>

      <div>
        <Label htmlFor="reason">Reason for Transfer (Optional)</Label>
        <Textarea
          id="reason"
          name="reason"
          placeholder="Please provide a reason for your transfer request..."
          rows={4}
          className="mt-2"
        />
      </div>

      <div className="pt-4">
        <Button type="submit" disabled={loading} className="w-full gradient-teal text-white">
          {loading ? "Submitting..." : "Submit Transfer Request"}
        </Button>
      </div>
    </form>
  )
}
