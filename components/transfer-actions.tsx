"use client"

import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export function TransferActions({ transferId }: { transferId: string }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleAction = async (action: "approve" | "reject") => {
    setLoading(true)
    try {
      const response = await fetch(`/api/transfers/${transferId}/${action}`, {
        method: "POST",
      })

      if (response.ok) {
        router.refresh()
      }
    } catch (error) {
      console.error("Action error:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        onClick={() => handleAction("approve")}
        disabled={loading}
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        <Check className="h-4 w-4 mr-1" />
        Approve
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => handleAction("reject")}
        disabled={loading}
        className="border-red-300 text-red-600 hover:bg-red-50"
      >
        <X className="h-4 w-4 mr-1" />
        Reject
      </Button>
    </div>
  )
}
