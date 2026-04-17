"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Plus, Search, Filter, Mail, Phone, Trash2, Edit2 } from "lucide-react"
import { SidebarTrigger, SidebarProvider } from "@/components/ui/sidebar"

const dummyMembers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Kipchoge",
    email: "john.kipchoge@email.com",
    phone: "+254 712 345 678",
    membershipNumber: "MEM001",
    membershipStatus: "ACTIVE",
    joinDate: "2022-03-15",
  },
  {
    id: 2,
    firstName: "Grace",
    lastName: "Wanjiru",
    email: "grace.wanjiru@email.com",
    phone: "+254 722 456 789",
    membershipNumber: "MEM002",
    membershipStatus: "ACTIVE",
    joinDate: "2023-06-20",
  },
  {
    id: 3,
    firstName: "Peter",
    lastName: "Mutua",
    email: "peter.mutua@email.com",
    phone: "+254 701 567 890",
    membershipNumber: "MEM003",
    membershipStatus: "ACTIVE",
    joinDate: "2023-01-10",
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Kariuki",
    email: "sarah.kariuki@email.com",
    phone: "+254 711 678 901",
    membershipNumber: "MEM004",
    membershipStatus: "TRANSFERRED",
    joinDate: "2021-11-05",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Ochieng",
    email: "david.ochieng@email.com",
    phone: "+254 723 789 012",
    membershipNumber: "MEM005",
    membershipStatus: "ACTIVE",
  },
]

export default function AdminMembersPage() {
  const [members, setMembers] = useState(dummyMembers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredMembers = members.filter(
    (member) =>
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.membershipNumber.includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const deleteMember = (id: number) => {
    setMembers(members.filter((m) => m.id !== id))
  }

  return (
    <SidebarProvider>
      <div className="flex flex-col h-screen bg-gray-50">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-4 p-4">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="font-serif text-2xl font-bold text-gray-900">Members Management</h1>
              <p className="text-sm text-gray-600">Manage church members and their information</p>
            </div>
            <Link href="/admin/members/new">
              <Button className="gradient-teal text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto space-y-4">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search members by name, email, or membership number..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" className="sm:w-auto bg-transparent">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Members List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 gradient-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {member.firstName[0]}
                        {member.lastName[0]}
                      </div>
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          member.membershipStatus === "ACTIVE"
                            ? "bg-green-100 text-green-700"
                            : member.membershipStatus === "TRANSFERRED"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {member.membershipStatus}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {member.firstName} {member.lastName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">#{member.membershipNumber}</p>
                    <div className="space-y-2">
                      {member.email && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Mail className="h-4 w-4 text-gray-400" />
                          <span className="truncate">{member.email}</span>
                        </div>
                      )}
                      {member.phone && (
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Phone className="h-4 w-4 text-gray-400" />
                          <span>{member.phone}</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Joined {member.joinDate ? new Date(member.joinDate).toLocaleDateString() : 'N/A'}
                      </span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 px-2 text-teal-600">
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 px-2 text-red-600"
                          onClick={() => deleteMember(member.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 gradient-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Members Found</h3>
                  <p className="text-gray-600 mb-6">Get started by adding your first church member</p>
                  <Link href="/admin/members/new">
                    <Button className="gradient-teal text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Add First Member
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}
