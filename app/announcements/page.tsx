"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const allAnnouncements = [
  {
    id: 1,
    title: "Special Sabbath Service - Youth Day",
    description:
      "Join us for our annual Youth Day celebration with special music, testimonies, and youth-led service. Special activities planned for young people.",
    fullContent:
      "Our annual Youth Day is a special occasion where young members take center stage in leading worship. This year promises to be even more exciting with special music performances, youth testimonies, and youth-led discussions on faith and relevance in today's world.",
    publishedDate: "2024-01-12",
    category: "Events",
  },
  {
    id: 2,
    title: "Sabbath School Quarterly Update",
    description: "The new quarterly lessons for Q1 2024 are now available. Pick up your copy at the reception desk.",
    fullContent:
      "The new Sabbath School quarterly lessons are designed to deepen our understanding of God's Word. Each lesson provides daily devotionals and study materials. Copies are available at the church reception desk for a small contribution.",
    publishedDate: "2024-01-10",
    category: "Education",
  },
  {
    id: 3,
    title: "Church Maintenance Work",
    description:
      "Please note that the church will undergo minor maintenance this coming week. Services will continue as scheduled.",
    fullContent:
      "The church building will undergo routine maintenance and repairs to ensure it remains a welcoming space for worship. All services and activities will continue as scheduled. Thank you for your understanding.",
    publishedDate: "2024-01-08",
    category: "Maintenance",
  },
  {
    id: 4,
    title: "Women's Ministry Retreat",
    description:
      "Annual women's ministry retreat scheduled for next month. Registration is now open. Limited seats available.",
    fullContent:
      "Join us for an inspiring women's ministry retreat designed for spiritual renewal and fellowship. The retreat will feature keynote speakers, small group discussions, and opportunities for prayer and worship.",
    publishedDate: "2024-01-05",
    category: "Ministry",
  },
]

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(allAnnouncements.map((a) => a.category)))

  const filteredAnnouncements = allAnnouncements.filter((announcement) => {
    return !selectedCategory || announcement.category === selectedCategory
  })

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-3">All Announcements</h1>
            <p className="text-lg text-gray-600">Stay informed about everything happening at Mwangaza SDA Church</p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === null ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === cat ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Announcements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAnnouncements.map((announcement) => (
              <Card
                key={announcement.id}
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:border-teal-200"
              >
                <div className="h-1 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                <CardHeader className="pb-3">
                  <div className="flex-1">
                    <CardTitle className="text-base leading-tight group-hover:text-teal-600 transition-colors">
                      {announcement.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{announcement.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-teal-600 font-medium">{announcement.category}</span>
                      <span className="text-xs text-gray-400">
                        {new Date(announcement.publishedDate).toLocaleDateString()}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No announcements found matching your filters.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
