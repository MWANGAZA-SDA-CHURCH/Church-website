"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight, Bell, Calendar, Clock, MapPin, Filter, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const dummyAnnouncements = [
  {
    id: 1,
    title: "Special Sabbath Service - Youth Day",
    description: "Join us for our annual Youth Day celebration with special music, testimonies, and youth-led service. This event is open to all youth and young adults in our community.",
    publishedDate: "2024-03-15",
    eventDate: "2024-04-05",
    eventTime: "10:00 AM",
    eventLocation: "Main Sanctuary",
    category: "Events",
    image: "/images/events/youth-day.jpg"
  },
  {
    id: 2,
    title: "Sabbath School Quarterly Update",
    description: "The new quarterly lessons for Q2 2024 are now available. These lessons explore book of Psalms and provide deep spiritual insights for daily living.",
    publishedDate: "2024-03-10",
    category: "Education",
    image: "/images/events/bible-study.jpg"
  },
  {
    id: 3,
    title: "Church Maintenance Work",
    description: "Please note that church will undergo minor maintenance this coming week. Services will continue as scheduled. We appreciate your patience and understanding during this time.",
    publishedDate: "2024-03-05",
    category: "Maintenance",
    image: "/images/events/church-building.jpg"
  },
  {
    id: 4,
    title: "Women's Ministry Retreat",
    description: "Annual women's ministry retreat 'Strength & Grace' is scheduled for next month. This is a time of spiritual renewal, fellowship, and growth. Registration is now open. Limited seats available.",
    publishedDate: "2024-02-28",
    eventDate: "2024-04-12",
    eventTime: "8:00 AM",
    eventLocation: "Mountain View Retreat Center",
    category: "Ministry",
    image: "/images/events/womens-retreat.jpg"
  },
  {
    id: 5,
    title: "Easter Sunrise Service",
    description: "Join us for our special Easter sunrise service at 6:00 AM. We'll celebrate the resurrection with special music, communion, and a powerful message of hope.",
    publishedDate: "2024-03-20",
    eventDate: "2024-03-31",
    eventTime: "6:00 AM",
    eventLocation: "Church Garden",
    category: "Events",
    image: "/images/events/easter.jpg"
  },
  {
    id: 6,
    title: "New Member Orientation",
    description: "Welcome to our new members! Join us for orientation session to learn about church ministries, programs, and how to get involved in our community.",
    publishedDate: "2024-03-18",
    eventDate: "2024-03-25",
    eventTime: "2:00 PM",
    eventLocation: "Fellowship Hall",
    category: "Ministry",
    image: "/images/events/orientation.jpg"
  }
]

const categoryColors: Record<string, string> = {
  "Events": "bg-blue-100 text-blue-800",
  "Education": "bg-green-100 text-green-800",
  "Maintenance": "bg-amber-100 text-amber-800",
  "Ministry": "bg-purple-100 text-purple-800",
  "Default": "bg-gray-100 text-gray-800"
}

export function AnnouncementsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [direction, setDirection] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [dateFilter, setDateFilter] = useState<string>('all')

  const categories = Array.from(new Set(dummyAnnouncements.map((a) => a.category)))
  
  const filteredAnnouncements = dummyAnnouncements.filter((announcement) => {
    const categoryMatch = !selectedCategory || announcement.category === selectedCategory
    
    if (dateFilter === 'all') return categoryMatch
    
    const announcementDate = new Date(announcement.publishedDate)
    const today = new Date()
    const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
    const oneMonthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)
    
    switch (dateFilter) {
      case 'today':
        return categoryMatch && announcementDate.toDateString() === today.toDateString()
      case 'week':
        return categoryMatch && announcementDate >= oneWeekAgo
      case 'month':
        return categoryMatch && announcementDate >= oneMonthAgo
      default:
        return categoryMatch
    }
  })

  useEffect(() => {
    if (!autoPlay || filteredAnnouncements.length <= 1) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % filteredAnnouncements.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay, filteredAnnouncements.length])

  const goToPrevious = () => {
    if (filteredAnnouncements.length <= 1) return
    setAutoPlay(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + filteredAnnouncements.length) % filteredAnnouncements.length)
  }

  const goToNext = () => {
    if (filteredAnnouncements.length <= 1) return
    setAutoPlay(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % filteredAnnouncements.length)
  }

  const goToSlide = (index: number) => {
    setAutoPlay(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const clearFilters = () => {
    setSelectedCategory(null)
    setDateFilter('all')
  }

  return (
    <section id="announcements" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-50 mb-6">
            <Bell className="h-8 w-8 text-teal-600" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Church Announcements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest updates, events, and important notices from Mwangaza SDA Church.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </h3>
              <div className="flex flex-wrap gap-3">
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
            {(selectedCategory || dateFilter !== 'all') && (
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

        {filteredAnnouncements.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <p className="text-gray-600 text-lg">No announcements found matching your filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 text-teal-600 hover:text-teal-700 font-medium"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative"
                >
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Image Section */}
                      <div className="relative h-64 lg:h-auto">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${filteredAnnouncements[currentIndex].image || '/images/events/default.jpg'})`,
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-700/50" />
                        </div>
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                          <div>
                            <span className={cn(
                              "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4",
                              categoryColors[filteredAnnouncements[currentIndex].category] || categoryColors["Default"]
                            )}>
                              {filteredAnnouncements[currentIndex].category}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                              {filteredAnnouncements[currentIndex].title}
                            </h3>
                          </div>
                          <div className="text-teal-100 text-sm">
                            {filteredAnnouncements[currentIndex].eventDate && (
                              <div className="flex items-center gap-2 mb-2">
                                <Calendar className="h-4 w-4" />
                                <span>
                                  {new Date(filteredAnnouncements[currentIndex].eventDate!).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                  {filteredAnnouncements[currentIndex].eventTime && ` • ${filteredAnnouncements[currentIndex].eventTime}`}
                                </span>
                              </div>
                            )}
                            {filteredAnnouncements[currentIndex].eventLocation && (
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{filteredAnnouncements[currentIndex].eventLocation}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col">
                        <div className="flex-1">
                          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                            {filteredAnnouncements[currentIndex].description}
                          </p>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                          <div className="text-sm text-gray-500">
                            <p>Posted on {new Date(filteredAnnouncements[currentIndex].publishedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</p>
                          </div>
                          <Link href="/announcements" className="group inline-flex items-center text-teal-600 hover:text-teal-800 font-medium">
                            Read more details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {filteredAnnouncements.length > 1 && (
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2">
                  {filteredAnnouncements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? "w-6 bg-gradient-to-r from-teal-600 to-cyan-500" 
                          : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to announcement ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={goToPrevious}
                    className="p-2 rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-50 transition-colors"
                    aria-label="Previous announcement"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m15 18-6-6 6" />
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-teal-600 text-white shadow-md hover:bg-teal-700 transition-colors"
                    aria-label="Next announcement"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Link href="/announcements">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 hover:border-teal-700 hover:text-teal-700 px-8 py-6 text-base"
            >
              View All Announcements
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
