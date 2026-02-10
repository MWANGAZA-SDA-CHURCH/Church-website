"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Plus, Calendar, Trash2, Edit2 } from "lucide-react"

const dummyEvents = [
  {
    id: 1,
    title: "Sabbath Service",
    description: "Weekly Sabbath worship service",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    time: "10:00 AM",
    location: "Main Sanctuary",
    category: "Worship",
  },
  {
    id: 2,
    title: "Youth Fellowship",
    description: "Youth ministry gathering and activities",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    time: "3:00 PM",
    location: "Fellowship Hall",
    category: "Youth",
  },
  {
    id: 3,
    title: "Prayer Meeting",
    description: "Mid-week prayer and Bible study",
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    time: "7:00 PM",
    location: "Prayer Room",
    category: "Spiritual",
  },
]

export default function AdminEventsPage() {
  const [events, setEvents] = useState(dummyEvents)

  const deleteEvent = (id: number) => {
    setEvents(events.filter((e) => e.id !== id))
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Events Management</h1>
            <p className="text-sm text-gray-600">Create and manage church events</p>
          </div>
          <Button className="gradient-teal text-white">
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  <div className="space-y-1 text-xs text-gray-600 mb-4">
                    <p>
                      <span className="font-medium">Date:</span> {event.date}
                    </p>
                    <p>
                      <span className="font-medium">Time:</span> {event.time}
                    </p>
                    <p>
                      <span className="font-medium">Location:</span> {event.location}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-gray-100">
                    <Button size="sm" variant="ghost" className="flex-1 text-teal-600">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="flex-1 text-red-600"
                      onClick={() => deleteEvent(event.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
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
