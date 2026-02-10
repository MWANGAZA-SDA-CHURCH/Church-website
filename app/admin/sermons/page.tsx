"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus, BookOpen, Trash2, Edit2 } from "lucide-react"

const dummySermons = [
  {
    id: 1,
    title: "The Power of Faith",
    speaker: "Pastor Richard Ogemba",
    date: "2024-01-13",
    description: "A message about trusting God in difficult times",
    scriptureRef: "Hebrews 11:1",
  },
  {
    id: 2,
    title: "Love Your Neighbor",
    speaker: "Pastor Richard Ogemba",
    date: "2024-01-06",
    description: "Understanding the greatest commandment",
    scriptureRef: "Matthew 22:37-40",
  },
  {
    id: 3,
    title: "Seek First His Kingdom",
    speaker: "Guest Speaker",
    date: "2023-12-30",
    description: "Prioritizing God in our lives",
    scriptureRef: "Matthew 6:33",
  },
]

export default function AdminSermonsPage() {
  const [sermons, setSermons] = useState(dummySermons)

  const deleteSermon = (id: number) => {
    setSermons(sermons.filter((s) => s.id !== id))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Sermons Management</h1>
            <p className="text-sm text-gray-600">Manage and archive sermons</p>
          </div>
          <Button className="gradient-teal text-white">
            <Plus className="h-4 w-4 mr-2" />
            Add Sermon
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-3">
            {sermons.map((sermon) => (
              <Card key={sermon.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-gray-900 mb-1">{sermon.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{sermon.description}</p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                          <span>
                            <span className="font-medium">Speaker:</span> {sermon.speaker}
                          </span>
                          <span>
                            <span className="font-medium">Date:</span> {sermon.date}
                          </span>
                          <span>
                            <span className="font-medium">Scripture:</span> {sermon.scriptureRef}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button size="sm" variant="ghost" className="text-teal-600">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600"
                        onClick={() => deleteSermon(sermon.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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
