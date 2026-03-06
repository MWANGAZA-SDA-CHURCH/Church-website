"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Filter, X, Search } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const allAnnouncements = [
  {
    id: 1,
    title: "Special Sabbath Service - Youth Day",
    description:
      "Join us for our annual Youth Day celebration with special music, testimonies, and youth-led service. Special activities planned for young people.",
    fullContent:
      "Our annual Youth Day is a special occasion where young members take center stage in leading worship. This year promises to be even more exciting with special music performances, youth testimonies, and youth-led discussions on faith and relevance in today's world.",
    publishedDate: "2024-03-15",
    eventDate: "2024-04-05",
    eventTime: "10:00 AM",
    eventLocation: "Main Sanctuary",
    category: "Events",
  },
  {
    id: 2,
    title: "Sabbath School Quarterly Update",
    description: "The new quarterly lessons for Q1 2024 are now available. Pick up your copy at reception desk.",
    fullContent:
      "The new Sabbath School quarterly lessons are designed to deepen our understanding of God's Word. Each lesson provides daily devotionals and study materials. Copies are available at church reception desk for a small contribution.",
    publishedDate: "2024-03-10",
    category: "Education",
  },
  {
    id: 3,
    title: "Church Maintenance Work",
    description:
      "Please note that church will undergo minor maintenance this coming week. Services will continue as scheduled.",
    fullContent:
      "The church building will undergo routine maintenance and repairs to ensure it remains a welcoming space for worship. All services and activities will continue as scheduled. Thank you for your understanding.",
    publishedDate: "2024-03-05",
    category: "Maintenance",
  },
  {
    id: 4,
    title: "Women's Ministry Retreat",
    description:
      "Annual women's ministry retreat scheduled for next month. Registration is now open. Limited seats available.",
    fullContent:
      "Join us for an inspiring women's ministry retreat designed for spiritual renewal and fellowship. The retreat will feature keynote speakers, small group discussions, and opportunities for prayer and worship.",
    publishedDate: "2024-02-28",
    eventDate: "2024-04-12",
    eventTime: "8:00 AM",
    eventLocation: "Mountain View Retreat Center",
    category: "Ministry",
  },
  {
    id: 5,
    title: "Easter Sunrise Service",
    description: "Join us for our special Easter sunrise service at 6:00 AM. We'll celebrate the resurrection with special music, communion, and a powerful message of hope.",
    fullContent:
      "Experience the joy of Easter morning with our special sunrise service. We'll gather in the church garden as the sun rises to celebrate the resurrection of our Lord with uplifting music, communion, and a message of hope and renewal.",
    publishedDate: "2024-03-20",
    eventDate: "2024-03-31",
    eventTime: "6:00 AM",
    eventLocation: "Church Garden",
    category: "Events",
  },
  {
    id: 6,
    title: "New Member Orientation",
    description: "Welcome to our new members! Join us for orientation session to learn about church ministries, programs, and how to get involved in our community.",
    fullContent:
      "Welcome to the Mwangaza SDA Church family! This orientation session is designed to help new members get acquainted with our church family, learn about various ministries, and discover opportunities for spiritual growth and service.",
    publishedDate: "2024-03-18",
    eventDate: "2024-03-25",
    eventTime: "2:00 PM",
    eventLocation: "Fellowship Hall",
    category: "Ministry",
  }
]

const categoryColors: Record<string, string> = {
  "Events": "bg-blue-100 text-blue-800",
  "Education": "bg-green-100 text-green-800",
  "Maintenance": "bg-amber-100 text-amber-800",
  "Ministry": "bg-purple-100 text-purple-800",
  "Default": "bg-gray-100 text-gray-800"
}

export default function AnnouncementsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dateFilter, setDateFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')

  const categories = Array.from(new Set(allAnnouncements.map((a) => a.category)))
  
  const filteredAnnouncements = allAnnouncements.filter((announcement) => {
    const categoryMatch = !selectedCategory || announcement.category === selectedCategory
    const searchMatch = !searchTerm || 
      announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      announcement.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (!categoryMatch || !searchMatch) return false
    
    if (dateFilter === 'all') return true
    
    const announcementDate = new Date(announcement.publishedDate)
    const today = new Date()
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
    
    switch (dateFilter) {
      case 'today':
        return announcementDate.toDateString() === today.toDateString()
      case 'week':
        return announcementDate >= oneWeekAgo
      case 'month':
        return announcementDate >= oneMonthAgo
      default:
        return true
    }
  }).sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())

  const clearFilters = () => {
    setSelectedCategory(null)
    setDateFilter('all')
    setSearchTerm('')
  }

  const hasActiveFilters = selectedCategory || dateFilter !== 'all' || searchTerm

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

          {/* Search and Filters */}
          <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Search & Filters
                </h3>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search announcements..."
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select 
                      value={selectedCategory || ''}
                      onChange={(e) => setSelectedCategory(e.target.value || null)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="">All Categories</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <select 
                      value={dateFilter}
                      onChange={(e) => setDateFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      <option value="all">All Time</option>
                      <option value="today">Today</option>
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                    </select>
                  </div>
                </div>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm text-gray-700"
                >
                  <X className="h-4 w-4" />
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredAnnouncements.length}</span> announcement{filteredAnnouncements.length !== 1 ? 's' : ''}
              {hasActiveFilters && <span> with filters applied</span>}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Sort by:</span>
              <button className="text-sm font-medium text-teal-600 hover:text-teal-700">Latest First</button>
            </div>
          </div>

          {/* Announcements Grid */}
          {filteredAnnouncements.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No announcements found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search terms</p>
              <button
                onClick={clearFilters}
                className="text-teal-600 hover:text-teal-700 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAnnouncements.map((announcement) => (
                <Card
                  key={announcement.id}
                  className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white hover:border-teal-200"
                >
                  <div className="h-2 bg-gradient-to-r from-teal-500 to-cyan-500"></div>
                  <CardHeader className="pb-3">
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <CardTitle className="text-base leading-tight group-hover:text-teal-600 transition-colors flex-1">
                          {announcement.title}
                        </CardTitle>
                        <span className={cn(
                          "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                          categoryColors[announcement.category] || categoryColors["Default"]
                        )}>
                          {announcement.category}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{announcement.description}</p>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(announcement.publishedDate).toLocaleDateString()}</span>
                        </div>
                        {announcement.eventDate && (
                          <div className="flex items-center gap-1 text-xs text-teal-600 font-medium">
                            <span>{new Date(announcement.eventDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
