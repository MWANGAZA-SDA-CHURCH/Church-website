"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

// Dummy member data
const dummyMembers = [
  {
    id: 1,
    firstName: "John",
    lastName: "Kipchoge",
    membershipNumber: "MWZ-2022-001",
    joinDate: "2022-03-15",
    status: "ACTIVE",
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Kariuki",
    membershipNumber: "MWZ-2021-015",
    joinDate: "2021-07-20",
    status: "ACTIVE",
  },
  {
    id: 3,
    firstName: "Samuel",
    lastName: "Mwangi",
    membershipNumber: "MWZ-2023-042",
    joinDate: "2023-01-10",
    status: "ACTIVE",
  },
  {
    id: 4,
    firstName: "Grace",
    lastName: "Ochieng",
    membershipNumber: "MWZ-2020-008",
    joinDate: "2020-11-05",
    status: "ACTIVE",
  },
  {
    id: 5,
    firstName: "David",
    lastName: "Kimani",
    membershipNumber: "MWZ-2022-031",
    joinDate: "2022-06-12",
    status: "ACTIVE",
  },
  {
    id: 6,
    firstName: "Faith",
    lastName: "Nyambura",
    membershipNumber: "MWZ-2023-055",
    joinDate: "2023-02-28",
    status: "ACTIVE",
  },
]

export function MemberSearchFloating() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredMembers = dummyMembers.filter(
    (member) =>
      member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.membershipNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <>
      {/* Floating button positioned bottom-right */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button
            className="fixed bottom-20 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center group"
            aria-label="Search church members"
            title="Search Church Members"
          >
            <Search className="h-6 w-6 group-hover:scale-110 transition-transform" />
          </button>
        </DialogTrigger>

        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Verify Church Membership</DialogTitle>
            <DialogDescription>
              Search for members by name or membership number. Only membership numbers are displayed in compliance with
              data protection.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Search Input */}
            <Input
              placeholder="Search by name or membership number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-gray-300 focus:border-teal-500 focus:ring-teal-500"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((member) => (
                  <Card
                    key={member.id}
                    className="hover:shadow-md transition-shadow bg-gradient-to-br from-white to-gray-50"
                  >
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        {/* Member Name */}
                        <div>
                          <p className="text-xs text-gray-500 font-medium">NAME</p>
                          <h3 className="font-semibold text-gray-900">
                            {member.firstName} {member.lastName}
                          </h3>
                        </div>

                        {/* Membership Number - Primary Information */}
                        <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                          <p className="text-xs text-teal-700 font-medium mb-1">MEMBERSHIP NUMBER</p>
                          <p className="font-mono font-bold text-teal-700 text-lg">{member.membershipNumber}</p>
                        </div>

                        {/* Status and Join Date */}
                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div>
                            <p className="text-xs text-gray-500 font-medium">STATUS</p>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                              {member.status}
                            </span>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500 font-medium">MEMBER SINCE</p>
                            <p className="text-sm text-gray-700 font-medium">{member.joinDate}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 text-center py-12">
                  <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No members found matching "{searchTerm}"</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Try searching by first name, last name, or membership number
                  </p>
                </div>
              )}
            </div>

            {/* Results Summary */}
            <div className="text-sm text-gray-600 pt-4 border-t">
              <span className="font-medium">{filteredMembers.length}</span> of{" "}
              <span className="font-medium">{dummyMembers.length}</span> members found
            </div>

            {/* Data Protection Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-700">
                <span className="font-semibold">Privacy Notice:</span> Only public membership information is displayed.
                For additional member details, please contact the church office directly.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
