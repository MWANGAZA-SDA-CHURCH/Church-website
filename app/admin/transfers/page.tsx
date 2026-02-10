import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeftRight, Filter } from "lucide-react"
import { sql } from "@/lib/db"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { TransferActions } from "@/components/transfer-actions"

export default async function AdminTransfersPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const transfersData = await sql`
    SELECT 
      t.*,
      m.first_name,
      m.last_name,
      u.email
    FROM transfers t
    JOIN members m ON t.member_id = m.id
    LEFT JOIN users u ON m.user_id = u.id
    ORDER BY t.created_at DESC
  `

  const transfers = transfersData.map((t: any) => ({
    id: t.id,
    memberId: t.member_id,
    fromChurch: t.from_church,
    toChurch: t.to_church,
    reason: t.reason,
    status: t.status,
    requestDate: t.request_date,
    approvalDate: t.approval_date,
    notes: t.notes,
    member: {
      firstName: t.first_name,
      lastName: t.last_name,
      user: {
        email: t.email,
      },
    },
  }))

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Transfer Management</h1>
            <p className="text-sm text-gray-600">Review and approve transfer requests</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto space-y-4">
          {/* Filters */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Filter className="h-4 w-4" />
                  <span>Showing {transfers.length} transfers</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    All
                  </Button>
                  <Button variant="ghost" size="sm">
                    Pending
                  </Button>
                  <Button variant="ghost" size="sm">
                    Approved
                  </Button>
                  <Button variant="ghost" size="sm">
                    Completed
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Transfers List */}
          <div className="space-y-3">
            {transfers.map((transfer) => (
              <Card key={transfer.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 gradient-teal rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <ArrowLeftRight className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-base text-gray-900 mb-1">
                            {transfer.member.firstName} {transfer.member.lastName}
                          </h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">From:</span> {transfer.fromChurch}
                            </div>
                            <div>
                              <span className="font-medium">To:</span> {transfer.toChurch}
                            </div>
                            {transfer.reason && (
                              <div>
                                <span className="font-medium">Reason:</span> {transfer.reason}
                              </div>
                            )}
                            <div className="text-xs text-gray-500 pt-1">
                              Requested on {new Date(transfer.requestDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          transfer.status === "PENDING"
                            ? "bg-orange-100 text-orange-700"
                            : transfer.status === "APPROVED"
                              ? "bg-blue-100 text-blue-700"
                              : transfer.status === "COMPLETED"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                      >
                        {transfer.status}
                      </span>

                      {transfer.status === "PENDING" && <TransferActions transferId={transfer.id} />}
                    </div>
                  </div>

                  {transfer.notes && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Notes:</span> {transfer.notes}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}

            {transfers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <ArrowLeftRight className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">No Transfers Found</h3>
                  <p className="text-gray-600">No transfer requests have been submitted yet.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
