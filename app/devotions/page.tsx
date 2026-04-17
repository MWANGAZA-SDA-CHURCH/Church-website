"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Heart, Search, BookOpen, Share2, Bookmark, Filter, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

// Mock devotion data
const devotions = [
  {
    id: 1,
    date: "2026-04-17",
    title: "Finding Peace in Troubled Times",
    verse: "Philippians 4:6-7",
    verseText: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    author: "Pastor John Kimani",
    readTime: "3 min read",
    category: "Peace"
  },
  {
    id: 2,
    date: "2026-04-16",
    title: "Walking by Faith",
    verse: "2 Corinthians 5:7",
    verseText: "For we walk by faith, not by sight.",
    author: "Pastor Grace Wanjiru",
    readTime: "4 min read",
    category: "Faith"
  },
  {
    id: 3,
    date: "2026-04-15",
    title: "The Power of Prayer",
    verse: "Jeremiah 33:3",
    verseText: "Call to me and I will answer you and tell you great and unsearchable things you do not know.",
    author: "Pastor Peter Mutua",
    readTime: "5 min read",
    category: "Prayer"
  }
]

export default function DevotionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDate, setSelectedDate] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)

  // Get unique categories
  const categories = ["All", ...new Set(devotions.map(d => d.category))]
  
  // Get unique dates
  const uniqueDates = [...new Set(devotions.map(d => d.date))].sort((a, b) => new Date(b).getTime() - new Date(a).getTime())

  // Filter devotions based on all filters
  const filteredDevotions = devotions.filter(devotion => {
    const matchesSearch = searchTerm === "" || devotion.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        devotion.verse.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        devotion.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === "All" || devotion.category === selectedCategory
    const matchesDate = selectedDate === "" || devotion.date === selectedDate
    
    return matchesSearch && matchesCategory && matchesDate
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 min-h-[400px] flex items-center">
          {/* Hero Background with Image */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/youth/hero-bg.jpg)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-teal-900/60 to-slate-800/90"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-teal-800/30 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-700/30 to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Daily Devotions
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 font-medium mb-8 max-w-3xl mx-auto">
                Spiritual nourishment for your daily walk with God through scripture and reflection
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-6">
              {/* Search Bar */}
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur">
                <CardContent className="p-6">
                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                    <input
                      type="text"
                      placeholder="Search devotions by title, verse, or author..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm text-lg transition-all duration-300"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Filter Controls */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                {/* Category Filter */}
                <div className="w-full lg:w-auto">
                  <div className="relative">
                    <select 
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none w-full lg:w-auto px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 font-medium"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Date Filter */}
                <div className="w-full lg:w-auto">
                  <div className="relative">
                    <input
                      type={showDatePicker ? "date" : "text"}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      onFocus={() => setShowDatePicker(true)}
                      onBlur={() => setShowDatePicker(false)}
                      placeholder="Select date"
                      className="appearance-none w-full lg:w-auto px-6 py-3 pr-10 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 font-medium"
                    />
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Quick Date Buttons */}
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDate(new Date().toISOString().split('T')[0])}
                    className="px-4 py-2 border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300"
                  >
                    Today
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const yesterday = new Date()
                      yesterday.setDate(yesterday.getDate() - 1)
                      setSelectedDate(yesterday.toISOString().split('T')[0])
                    }}
                    className="px-4 py-2 border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300"
                  >
                    Yesterday
                  </Button>
                </div>

                {/* Clear Filters */}
                {(selectedCategory !== "All" || selectedDate || searchTerm) && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => {
                      setSelectedCategory("All")
                      setSelectedDate("")
                      setSearchTerm("")
                    }}
                    className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 transition-all duration-300"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Today's Featured Devotion */}
        <section className="py-12 bg-gradient-to-br from-teal-50 to-cyan-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-2">Today's Devotion</h2>
              <p className="text-gray-600">Focus on today's spiritual message</p>
            </div>
            
            {filteredDevotions.filter(d => d.date === new Date().toISOString().split('T')[0]).length > 0 ? (
              filteredDevotions.filter(d => d.date === new Date().toISOString().split('T')[0]).map((todayDevotion) => (
              <Card key={todayDevotion.id} className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
                {/* Featured Header */}
                <div className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-2xl">
                          {todayDevotion.title[0]}
                        </div>
                        <div>
                          <span className="text-sm font-medium bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                            {todayDevotion.category}
                          </span>
                          <div className="flex items-center gap-2 text-white/80 text-sm mt-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(todayDevotion.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 text-white/80 text-sm">
                          <Clock className="h-4 w-4" />
                          <span>{todayDevotion.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                      {todayDevotion.title}
                    </h1>
                    <p className="text-xl text-white/90 italic mb-6">
                      "{todayDevotion.verse}"
                    </p>
                    <div className="flex items-center gap-2 text-white/80">
                      <Heart className="h-4 w-4" />
                      <span>{todayDevotion.author}</span>
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {todayDevotion.verseText}
                    </p>
                  </div>

                  {/* Reflection Questions */}
                  <div className="bg-teal-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <Heart className="h-5 w-5 text-teal-600" />
                      Reflection Questions
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-teal-200 text-teal-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                        <span>How does this verse speak to your current situation?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-teal-200 text-teal-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                        <span>What practical steps can you take to apply this message today?</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-teal-200 text-teal-700 text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                        <span>How can you share this encouragement with others?</span>
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 transition-all duration-300">
                      <Share2 className="h-5 w-5 mr-2" />
                      Share Today's Devotion
                    </Button>
                    <Button variant="outline" className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300">
                      <Bookmark className="h-5 w-5 mr-2" />
                      Save for Later
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No devotion available for today</h3>
                <p className="text-gray-600">Check back later for today's spiritual message or browse previous devotions below.</p>
              </div>
            )}
          </div>
        </section>

        {/* Devotions List */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-teal-50/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">
                {filteredDevotions.length} {filteredDevotions.length === 1 ? 'Devotion' : 'Devotions'} Found
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Filter className="h-4 w-4" />
                <span>Filtered by: {selectedCategory} {selectedDate && `| ${selectedDate}`}</span>
              </div>
            </div>

            {/* Devotions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDevotions.filter(d => d.date !== new Date().toISOString().split('T')[0]).map((devotion) => (
                <Card key={devotion.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 p-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg">
                          {devotion.title[0]}
                        </div>
                        <span className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                          {devotion.category}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white mb-2 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {devotion.title}
                      </h3>
                      <p className="text-white/90 text-sm italic line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        "{devotion.verse}"
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <CardContent className="p-5">
                    {/* Verse Text */}
                    <div className="mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                        {devotion.verseText}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(devotion.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{devotion.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Heart className="h-4 w-4 text-gray-400" />
                        <span>{devotion.author}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300 group-hover:border-teal-300 group-hover:text-teal-800"
                      >
                        <Share2 className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Share</span>
                        <span className="sm:hidden">Share</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 transition-all duration-300 group-hover:border-teal-300 group-hover:text-teal-800"
                      >
                        <Bookmark className="h-4 w-4 mr-1" />
                        <span className="hidden sm:inline">Save</span>
                        <span className="sm:hidden">Save</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredDevotions.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No devotions found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
                <Button 
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedDate("")
                    setSearchTerm("")
                  }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
