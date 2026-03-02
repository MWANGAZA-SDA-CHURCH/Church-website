"use client"

import { BookOpen, Play, Users, Download, Search, ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"

// Types for our resources
interface Resource {
  id: number
  title: string
  type: 'sermon' | 'study' | 'document' | 'video'
  speaker?: string
  date?: string
  duration?: string
  description: string
  thumbnail?: string
  downloadUrl?: string
  views?: number
  tags?: string[]
}

// Mock data - replace with actual API calls
const mockResources: Resource[] = [
  {
    id: 1,
    title: "The Power of Faith",
    type: 'sermon',
    speaker: "Pastor Richard Ogemba",
    date: "January 10, 2024",
    duration: "45 min",
    description: "A powerful message about trusting God in uncertain times.",
    thumbnail: "/images/sermons/faith.jpg",
    views: 245,
    tags: ["faith", "trust", "sermon"]
  },
  {
    id: 2,
    title: "Living the Abundant Life",
    type: 'sermon',
    speaker: "Pastor Richard Ogemba",
    date: "January 3, 2024",
    duration: "52 min",
    description: "Jesus came that we might have life abundantly - discover what that means for you.",
    thumbnail: "/images/sermons/abundant-life.jpg",
    views: 198,
    tags: ["abundant life", "sermon", "spiritual growth"]
  },
  {
    id: 3,
    title: "God's Purpose for Your Life",
    type: 'sermon',
    speaker: "Elder James Kipchoge",
    date: "December 27, 2023",
    duration: "38 min",
    description: "Understanding your calling and living out God's purpose for your life.",
    thumbnail: "/images/sermons/purpose.jpg",
    views: 312,
    tags: ["purpose", "calling", "sermon"]
  },
  {
    id: 4,
    title: "Bible Study Guide - Quarter 1 2024",
    type: 'study',
    description: "Quarterly Bible study guide for personal and group study.",
    downloadUrl: "/downloads/study-guide-q1-2024.pdf",
    tags: ["bible study", "quarterly", "guide"]
  },
  {
    id: 5,
    title: "Prayer Journal Template",
    type: 'document',
    description: "A guided template for your daily prayer and devotion time.",
    downloadUrl: "/downloads/prayer-journal.pdf",
    tags: ["prayer", "journal", "devotional"]
  },
  {
    id: 6,
    title: "Understanding Daniel's Prophecies",
    type: 'study',
    description: "In-depth study of the book of Daniel and its end-time significance.",
    downloadUrl: "/downloads/daniel-study.pdf",
    tags: ["prophecy", "daniel", "bible study"]
  }
]

const resourceCategories = [
  { id: 'all', name: 'All Resources', icon: BookOpen },
  { id: 'sermon', name: 'Sermons', icon: Play },
  { id: 'study', name: 'Bible Studies', icon: BookOpen },
  { id: 'document', name: 'Documents', icon: Download },
  { id: 'video', name: 'Videos', icon: Play }
]


const fundamentalBeliefs = [
  "The Holy Scriptures",
  "The Godhead",
  "God the Father",
  "God the Son (Jesus Christ)",
  "God the Holy Spirit",
  "Creation",
  "The Nature of Humanity",
  "The Great Controversy",
  "The Life, Death, and Resurrection of Christ",
  "The Experience of Salvation",
  "Growing in Christ",
  "The Church",
  "The Remnant and Its Mission",
  "Unity in the Body of Christ",
  "Baptism",
  "The Lord's Supper",
  "Spiritual Gifts and Ministries",
  "The Gift of Prophecy",
  "The Law of God",
  "The Sabbath",
  "Stewardship",
  "Christian Behavior",
  "Marriage and the Family",
  "Christ's Ministry in the Heavenly Sanctuary",
  "The Second Coming of Christ",
  "Death and Resurrection",
  "The Millennium and the End of Sin",
  "The New Earth"
]

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showBeliefs, setShowBeliefs] = useState(false)
  const [resources, setResources] = useState<Resource[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // In a real app, this would be an API call
  useEffect(() => {
    // Simulate API call
    const fetchResources = async () => {
      setIsLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800))
      setResources(mockResources)
      setIsLoading(false)
    }
    
    fetchResources()
  }, [])

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.type === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getResourceIcon = (type: string) => {
    switch(type) {
      case 'sermon':
        return <Play className="h-5 w-5" />
      case 'study':
        return <BookOpen className="h-5 w-5" />
      case 'document':
        return <Download className="h-5 w-5" />
      case 'video':
        return <Play className="h-5 w-5" />
      default:
        return <BookOpen className="h-5 w-5" />
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
                Spiritual Resources
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Enhance your spiritual journey with sermons, Bible studies, and resources for deeper faith growth.
              </p>
              
              {/* Search Bar */}
              <div className="mt-8 max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-8 bg-slate-50 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {resourceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-foreground hover:bg-slate-100 border border-border'
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
                {activeCategory === 'all' ? 'All Resources' : 
                 resourceCategories.find(c => c.id === activeCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                    <div className="animate-pulse h-40 bg-slate-200"></div>
                    <div className="p-6">
                      <div className="h-6 bg-slate-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-slate-200 rounded w-5/6 mb-4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <div
                    key={resource.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border overflow-hidden group"
                  >
                    <div className="relative h-40 bg-gradient-to-br from-primary/10 to-cyan-600/10 flex items-center justify-center overflow-hidden">
                      {resource.thumbnail ? (
                        <img 
                          src={resource.thumbnail} 
                          alt={resource.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                          resource.type === 'sermon' ? 'from-blue-500 to-cyan-500' :
                          resource.type === 'study' ? 'from-green-500 to-teal-500' :
                          resource.type === 'document' ? 'from-purple-500 to-indigo-500' :
                          'from-orange-500 to-amber-500'
                        } flex items-center justify-center text-white`}>
                          {getResourceIcon(resource.type)}
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {resource.downloadUrl ? (
                          <a 
                            href={resource.downloadUrl}
                            download
                            className="p-3 bg-white/90 rounded-full text-foreground hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Download className="h-5 w-5" />
                          </a>
                        ) : (
                          <button className="p-3 bg-white/90 rounded-full text-foreground hover:bg-white transition-all transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                            <Play className="h-5 w-5 fill-current" />
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                        </span>
                        {resource.views && (
                          <span className="text-xs text-muted-foreground flex items-center">
                            {resource.views} views
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2 line-clamp-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        {resource.speaker && <p>Speaker: {resource.speaker}</p>}
                        {resource.date && resource.duration && (
                          <p className="text-xs">
                            {resource.date} • {resource.duration}
                          </p>
                        )}
                      </div>
                      {resource.tags && resource.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {resource.tags.slice(0, 3).map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-1">No resources found</h3>
                <p className="text-muted-foreground">
                  {searchQuery 
                    ? 'Try adjusting your search or filter to find what you\'re looking for.'
                    : 'Check back later for new resources.'}
                </p>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Clear search
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Seventh-day Adventist Beliefs */}
        <section className="py-16 bg-slate-50 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-4xl font-bold text-foreground mb-3">
                Seventh-day Adventist Fundamental Beliefs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the 28 Fundamental Beliefs that guide the Seventh-day Adventist Church
              </p>
              <button 
                onClick={() => setShowBeliefs(!showBeliefs)}
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                {showBeliefs ? (
                  <>
                    <span>Hide Beliefs</span>
                    <ChevronUp className="ml-1 h-5 w-5" />
                  </>
                ) : (
                  <>
                    <span>Show All 28 Beliefs</span>
                    <ChevronDown className="ml-1 h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            {(showBeliefs || typeof window === 'undefined') && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fundamentalBeliefs.map((belief, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {belief}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {/* You can add a brief description for each belief here */}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {!showBeliefs && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fundamentalBeliefs.slice(0, 6).map((belief, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-primary font-bold text-sm">{idx + 1}</span>
                    </div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {belief}
                    </h3>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
