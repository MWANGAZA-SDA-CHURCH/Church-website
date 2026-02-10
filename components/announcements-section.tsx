"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight, Bell, Calendar, Clock, MapPin } from "lucide-react"
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
    description: "The new quarterly lessons for Q2 2024 are now available. These lessons explore the book of Psalms and provide deep spiritual insights for daily living.",
    publishedDate: "2024-03-10",
    category: "Education",
    image: "/images/events/bible-study.jpg"
  },
  {
    id: 3,
    title: "Church Maintenance Work",
    description: "Please note that the church will undergo minor maintenance this coming week. Services will continue as scheduled. We appreciate your patience and understanding during this time.",
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
  const [direction, setDirection] = useState(1) // 1 for forward, -1 for backward

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % dummyAnnouncements.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setAutoPlay(false)
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + dummyAnnouncements.length) % dummyAnnouncements.length)
  }

  const goToNext = () => {
    setAutoPlay(false)
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % dummyAnnouncements.length)
  }

  const goToSlide = (index: number) => {
    setAutoPlay(false)
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
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
                          backgroundImage: `url(${dummyAnnouncements[currentIndex].image || '/images/events/default.jpg'})`,
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-700/50" />
                      </div>
                      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                        <div>
                          <span className={cn(
                            "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4",
                            categoryColors[dummyAnnouncements[currentIndex].category] || categoryColors["Default"]
                          )}>
                            {dummyAnnouncements[currentIndex].category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            {dummyAnnouncements[currentIndex].title}
                          </h3>
                        </div>
                        <div className="text-teal-100 text-sm">
                          {dummyAnnouncements[currentIndex].eventDate && (
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(dummyAnnouncements[currentIndex].eventDate!).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                                {dummyAnnouncements[currentIndex].eventTime && ` • ${dummyAnnouncements[currentIndex].eventTime}`}
                              </span>
                            </div>
                          )}
                          {dummyAnnouncements[currentIndex].eventLocation && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{dummyAnnouncements[currentIndex].eventLocation}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col">
                      <div className="flex-1">
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                          {dummyAnnouncements[currentIndex].description}
                        </p>
                      </div>
                      
                      <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="text-sm text-gray-500">
                          <p>Posted on {new Date(dummyAnnouncements[currentIndex].publishedDate).toLocaleDateString('en-US', {
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
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {dummyAnnouncements.map((_, index) => (
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
                  <path d="m15 18-6-6 6-6" />
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
        </div>

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
