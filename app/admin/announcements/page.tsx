"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bell, Plus, Edit2, Trash2 } from "lucide-react"

const dummyAnnouncements = [
  {
    id: 1,
    title: "Special Sabbath Service - Youth Day",
    description: "Join us for our annual Youth Day celebration with special music, testimonies, and youth-led service.",
    priority: "HIGH",
    publishedDate: "2024-01-12",
    category: "Events",
  },
  {
    id: 2,
    title: "Sabbath School Quarterly Update",
    description: "The new quarterly lessons for Q1 2024 are now available. Pick up your copy at the reception desk.",
    priority: "MEDIUM",
    publishedDate: "2024-01-10",
    category: "Education",
  },
  {
    id: 3,
    title: "Church Maintenance Work",
    description:
      "Please note that the church will undergo minor maintenance this coming week. Services will continue as scheduled.",
    priority: "LOW",
    publishedDate: "2024-01-08",
    category: "Maintenance",
  },
]

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState(dummyAnnouncements)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<(typeof dummyAnnouncements)[0] | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "MEDIUM",
    category: "",
  })

  const handleAdd = () => {
    setSelectedAnnouncement(null)
    setFormData({ title: "", description: "", priority: "MEDIUM", category: "" })
    setIsDialogOpen(true)
  }

  const handleEdit = (announcement: (typeof dummyAnnouncements)[0]) => {
    setSelectedAnnouncement(announcement)
    setFormData({
      title: announcement.title,
      description: announcement.description,
      priority: announcement.priority,
      category: announcement.category,
    })
    setIsDialogOpen(true)
  }

  const handleDelete = (id: number) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedAnnouncement) {
      setAnnouncements(
        announcements.map((a) =>
          a.id === selectedAnnouncement.id
            ? { ...a, ...formData, publishedDate: new Date().toISOString().split("T")[0] }
            : a,
        ),
      )
    } else {
      setAnnouncements([
        {
          id: Math.max(...announcements.map((a) => a.id), 0) + 1,
          ...formData,
          publishedDate: new Date().toISOString().split("T")[0],
        },
        ...announcements,
      ])
    }
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
              <Bell className="h-6 w-6 text-white" />
            </div>
            Manage Announcements
          </h1>
          <p className="text-gray-600 mt-2">Create and manage church announcements</p>
        </div>
        <Button
          onClick={handleAdd}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white"
        >
          <Plus className="mr-2 h-5 w-5" />
          New Announcement
        </Button>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader className="border-b border-gray-100">
          <CardTitle>All Announcements ({announcements.length})</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Category</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Priority</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement) => (
                  <tr key={announcement.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-gray-900">{announcement.title}</div>
                      <div className="text-sm text-gray-600 truncate">{announcement.description}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{announcement.category}</td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={
                          announcement.priority === "HIGH"
                            ? "bg-red-100 text-red-700"
                            : announcement.priority === "MEDIUM"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                        }
                      >
                        {announcement.priority}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {new Date(announcement.publishedDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(announcement)}
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(announcement.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedAnnouncement ? "Edit Announcement" : "Create New Announcement"}</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                <select
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="e.g., Events, Education"
                  required
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white flex-1"
              >
                {selectedAnnouncement ? "Update" : "Create"} Announcement
              </Button>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
