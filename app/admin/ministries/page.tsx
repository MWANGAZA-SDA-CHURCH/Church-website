"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus, Heart, Trash2, Edit2, Users } from "lucide-react"

const dummyMinistries = [
  {
    id: 1,
    name: "Youth Ministry",
    leader: "John Muriithi",
    members: 45,
    description: "Engaging young adults in faith and community service",
  },
  {
    id: 2,
    name: "Women's Fellowship",
    leader: "Mary Kamau",
    members: 82,
    description: "Supporting and empowering women in the church",
  },
  {
    id: 3,
    name: "Men's Choir",
    leader: "Peter Kipchoge",
    members: 28,
    description: "Praising God through music and worship",
  },
  {
    id: 4,
    name: "Community Outreach",
    leader: "Sarah Wanjiru",
    members: 35,
    description: "Serving the community with love and compassion",
  },
]

export default function AdminMinistriesPage() {
  const [ministries, setMinistries] = useState(dummyMinistries)

  const deleteMinistry = (id: number) => {
    setMinistries(ministries.filter((m) => m.id !== id))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Ministries Management</h1>
            <p className="text-sm text-gray-600">Manage church ministries and groups</p>
          </div>
          <Button className="gradient-teal text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Ministry
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ministries.map((ministry) => (
              <Card key={ministry.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <Heart className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-teal-600">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600"
                        onClick={() => deleteMinistry(ministry.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{ministry.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{ministry.description}</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium">Leader:</span> {ministry.leader}
                    </p>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>
                        <span className="font-medium">{ministry.members}</span> Members
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
