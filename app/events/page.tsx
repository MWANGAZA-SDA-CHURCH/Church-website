"use client"

import { Calendar, MapPin, Clock, Users, ArrowRight, Sparkles, Heart, Star, BookOpen } from "lucide-react"
import { HugeiconsIcon } from "@hugeicons/react"
import { 
  Calendar01Icon, 
  Clock01Icon, 
  ArrowRight01Icon, 
  SparklesIcon, 
  StarIcon, 
  BookOpenIcon 
} from "@hugeicons/core-free-icons"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"

const upcomingEvents = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    description: "Join us for our weekly worship service with inspiring messages and worship.",
    attendees: "200+",
    category: "weekly",
    featured: true,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: 2,
    title: "Youth Sabbath Celebration",
    date: "January 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Fellowship Hall",
    description: "Special program featuring youth talents, games, and spiritual input.",
    attendees: "150+",
    category: "youth",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Ladies Retreat",
    date: "February 10-12, 2024",
    time: "All Day",
    location: "Conference Center",
    description: "A weekend of spiritual renewal, fellowship, and empowerment for women.",
    attendees: "100+",
    category: "women",
    color: "from-rose-500 to-orange-600"
  },
  {
    id: 4,
    title: "Men's Breakfast & Fellowship",
    date: "Second Saturday Monthly",
    time: "7:00 AM - 9:00 AM",
    location: "Church Café",
    description: "Men gathering for fellowship, breakfast, and spiritual discussion.",
    attendees: "50+",
    category: "men",
    color: "from-amber-500 to-red-600"
  },
  {
    id: 5,
    title: "Community Health Fair",
    date: "March 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Church Grounds",
    description: "Free health screening, wellness education, and community service.",
    attendees: "300+",
    category: "community",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 6,
    title: "Easter Sunrise Service",
    date: "March 31, 2024",
    time: "6:00 AM",
    location: "Mountain Peak",
    description: "Begin Easter morning celebrating the resurrection of Christ together.",
    attendees: "500+",
    category: "special",
    featured: true,
    color: "from-yellow-500 to-orange-600"
  },
]


export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', name: 'All Events', icon: SparklesIcon },
    { id: 'weekly', name: 'Weekly', icon: Calendar01Icon },
    { id: 'youth', name: 'Youth', icon: StarIcon },
    { id: 'women', name: 'Women', icon: Heart },
    { id: 'men', name: 'Men', icon: Users },
    { id: 'community', name: 'Community', icon: Heart },
    { id: 'special', name: 'Special', icon: StarIcon },
  ]

  const filteredEvents = selectedCategory === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory)

  const featuredEvents = upcomingEvents.filter(event => event.featured)
  const regularEvents = upcomingEvents.filter(event => !event.featured)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#014d4e]/10 via-[#0d9488]/10 to-[#06b6d4]/10" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#0d9488]/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06b6d4]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4" />
                <span>Join Our Community</span>
              </div>
              <h1 className="font-serif text-6xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-[#014d4e] to-slate-900 bg-clip-text text-transparent mb-6">
                Upcoming Events
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Experience meaningful connections, spiritual growth, and joyful fellowship at our upcoming church events and activities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Events */}
        {featuredEvents.length > 0 && (
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">Featured Events</h2>
                  <p className="text-slate-600">Don't miss these special gatherings</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-teal-600">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-medium">Highlighted</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    <div className="relative p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-lg`}>
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="inline-flex items-center px-2 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                              {event.title}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-slate-500">Date</p>
                            <p className="font-medium text-slate-900">{event.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Clock className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-slate-500">Time</p>
                            <p className="font-medium text-slate-900">{event.time}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <MapPin className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-slate-500">Location</p>
                            <p className="font-medium text-slate-900">{event.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                          <Users className="h-5 w-5 text-teal-600" />
                          <div>
                            <p className="text-xs text-slate-500">Expected</p>
                            <p className="font-medium text-slate-900">{event.attendees}</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6">{event.description}</p>

                      <button className="group/btn w-full py-3 px-6 bg-gradient-to-r from-[#0d9488] to-[#06b6d4] text-white font-semibold rounded-xl hover:from-[#014d4e] hover:to-[#0d9488] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <section className="py-8 bg-white/50 backdrop-blur-sm border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#0d9488] to-[#06b6d4] text-white shadow-lg'
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  {category.id === 'all' || category.id === 'weekly' || category.id === 'youth' || category.id === 'special' ? (
                    <HugeiconsIcon icon={category.icon} className="h-4 w-4" />
                  ) : (
                    <category.icon className="h-4 w-4" />
                  )}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-2">
                {selectedCategory === 'all' ? 'All Events' : categories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-slate-600">
                {filteredEvents.length} {filteredEvents.length === 1 ? 'event' : 'events'} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-teal-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${event.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center text-white shadow-md`}>
                        <Calendar className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                        {event.title}
                      </h3>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-teal-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Clock className="h-4 w-4 text-teal-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 text-teal-500" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Users className="h-4 w-4 text-teal-500" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-2">{event.description}</p>

                    <button className="w-full py-2 px-4 bg-gradient-to-r from-[#0d9488] to-[#06b6d4] text-white font-medium rounded-lg hover:from-[#014d4e] hover:to-[#0d9488] transition-all duration-300 flex items-center justify-center gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regular Activities */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm mb-4">
                <Calendar className="h-4 w-4" />
                <span>Weekly Schedule</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-slate-900 mb-4">Regular Activities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Join us for these recurring opportunities for worship, learning, and fellowship</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { day: "Sunday", time: "9:00 AM", activity: "Main Worship Service", icon: Calendar, description: "Celebrate with us in inspiring worship and biblical teaching" },
                { day: "Wednesday", time: "7:00 PM", activity: "Mid-week Prayer & Bible Study", icon: BookOpen, description: "Mid-week spiritual refreshment and community prayer" },
                { day: "Saturday", time: "10:00 AM", activity: "Youth Sabbath School", icon: Users, description: "Engaging Bible study and fellowship for young people" },
                { day: "Monthly", time: "Various", activity: "Men's & Women's Ministry Meetings", icon: Heart, description: "Specialized ministries and fellowship opportunities" },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-teal-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0d9488] to-[#06b6d4] flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <h3 className="font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                            {activity.day}
                          </h3>
                          <p className="text-sm text-teal-600 font-medium">{activity.time}</p>
                        </div>
                      </div>
                      <p className="font-semibold text-slate-800 mb-2">{activity.activity}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
