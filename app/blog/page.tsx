"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight, Heart, MessageCircle, Share2, Search, Filter, TrendingUp } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in Times of Trouble: A Biblical Perspective",
    excerpt: "Explore how biblical teachings can guide us through life's most challenging moments and bring us lasting peace.",
    content: "In today's fast-paced world, finding peace can seem impossible. However, Bible offers timeless wisdom that can help us navigate through troubled waters...",
    author: "Pastor James Mwangi",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Spiritual Growth",
    image: "/adventurers.jpeg",
    featured: true,
    likes: 145,
    comments: 23,
    tags: ["Peace", "Biblical Wisdom", "Spiritual Growth"]
  },
  {
    id: 2,
    title: "The Power of Prayer: Transforming Your Daily Life",
    excerpt: "Discover how consistent prayer can revolutionize your spiritual journey and bring you closer to God.",
    content: "Prayer is more than just a religious duty; it's a powerful tool that can transform every aspect of your life...",
    author: "Sarah Kamau",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Prayer",
    image: "/aym.jpeg",
    featured: false,
    likes: 89,
    comments: 15,
    tags: ["Prayer", "Spiritual Discipline", "Daily Devotion"]
  },
  {
    id: 3,
    title: "Building Strong Families: Biblical Principles for Modern Homes",
    excerpt: "Learn how to apply timeless biblical principles to strengthen your family relationships in today's world.",
    content: "Family is the foundation of society, and Bible provides clear guidance on how to build strong, healthy families...",
    author: "Esther Njoroge",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Family",
    image: "/awwm.jpeg",
    featured: false,
    likes: 112,
    comments: 28,
    tags: ["Family", "Biblical Principles", "Relationships"]
  },
  {
    id: 4,
    title: "Understanding Sabbath: More Than Just a Day of Rest",
    excerpt: "Deepen your understanding of Sabbath's significance and how it can enrich your spiritual life.",
    content: "The Sabbath is one of God's greatest gifts to humanity, offering physical rest, spiritual renewal, and divine fellowship...",
    author: "Pastor James Mwangi",
    date: "2024-03-08",
    readTime: "8 min read",
    category: "Sabbath",
    image: "/adventurers.jpeg",
    featured: true,
    likes: 203,
    comments: 41,
    tags: ["Sabbath", "Rest", "Spiritual Renewal"]
  },
  {
    id: 5,
    title: "Faith in Action: Serving Our Community",
    excerpt: "See how our church members are putting their faith into action through community service and outreach programs.",
    content: "True faith is not just about belief; it's about action. Our church family has been actively serving our community...",
    author: "Michael Ochieng",
    date: "2024-03-05",
    readTime: "4 min read",
    category: "Community Service",
    image: "/aym.jpeg",
    featured: false,
    likes: 67,
    comments: 12,
    tags: ["Service", "Community", "Outreach"]
  },
  {
    id: 6,
    title: "Youth Ministry: Empowering the Next Generation",
    excerpt: "Discover how our youth programs are helping young people develop strong faith and leadership skills.",
    content: "Investing in our youth is investing in the future of the church. Our comprehensive youth ministry program...",
    author: "David Kimani",
    date: "2024-03-03",
    readTime: "5 min read",
    category: "Youth",
    image: "/awwm.jpeg",
    featured: false,
    likes: 94,
    comments: 18,
    tags: ["Youth", "Leadership", "Next Generation"]
  }
]

const categories = ["All", "Spiritual Growth", "Prayer", "Family", "Sabbath", "Community Service", "Youth"]
const sideStories = [
  {
    id: 101,
    title: "Upcoming Youth Camp",
    excerpt: "Join us for an exciting weekend of spiritual growth and fun activities.",
    date: "2024-03-20",
    type: "Event"
  },
  {
    id: 102,
    title: "New Prayer Group Forming",
    excerpt: "Be part of our new morning prayer group starting next week.",
    date: "2024-03-18",
    type: "Announcement"
  },
  {
    id: 103,
    title: "Community Clean-Up Day",
    excerpt: "Help us make our neighborhood a better place this Saturday.",
    date: "2024-03-17",
    type: "Service"
  },
  {
    id: 104,
    title: "Bible Study Series Begins",
    excerpt: "Join our new study on the book of Romans starting Tuesday.",
    date: "2024-03-16",
    type: "Study"
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === "All" || post.category === selectedCategory
    const searchMatch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
    return categoryMatch && searchMatch
  }).sort((a, b) => {
    if (sortBy === "latest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else if (sortBy === "popular") {
      return b.likes - a.likes
    }
    return 0
  })

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-br from-teal-600 to-cyan-600">
          <div className="absolute inset-0">
           
            <img 
              src="/publishing.jpg"
              alt="Church Background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {blogPosts.filter(p => p.featured).length} Articles
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg text-center">Blog & Inspirational Stories</h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto text-center drop-shadow">
                Discover uplifting stories, biblical insights, and practical wisdom to strengthen your faith journey
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Bar */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  <option value="latest">Latest First</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      selectedCategory === category
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Featured Post */}
              {featuredPost && (
                <Card className="overflow-hidden border-0 shadow-xl">
                  <div className="relative h-64 bg-gradient-to-br from-teal-400 to-cyan-500">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2">{featuredPost.title}</h2>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                      <Link href={`/blog/${featuredPost.id}`}>
                        <Button className="bg-teal-600 hover:bg-teal-700">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Regular Posts */}
              <div className="space-y-6">
                {filteredPosts.filter(post => !post.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {new Date(post.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-teal-600 transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1 text-gray-500">
                                <Heart className="h-4 w-4" />
                                {post.likes}
                              </span>
                              <span className="flex items-center gap-1 text-gray-500">
                                <MessageCircle className="h-4 w-4" />
                                {post.comments}
                              </span>
                              <Link href={`/blog/${post.id}`}>
                                <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                                  Read More
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trending Stories */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-teal-600" />
                    <h3 className="text-lg font-bold text-gray-900">Side Stories</h3>
                  </div>
                  <div className="space-y-4">
                    {sideStories.map((story) => (
                      <div key={story.id} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className={cn(
                            "px-2 py-1 rounded-full text-xs font-semibold",
                            story.type === "Event" && "bg-blue-100 text-blue-700",
                            story.type === "Announcement" && "bg-green-100 text-green-700",
                            story.type === "Service" && "bg-purple-100 text-purple-700",
                            story.type === "Study" && "bg-orange-100 text-orange-700"
                          )}>
                            {story.type}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(story.date).toLocaleDateString()}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1 hover:text-teal-600 transition-colors cursor-pointer">
                          {story.title}
                        </h4>
                        <p className="text-sm text-gray-600">{story.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => {
                      const count = blogPosts.filter(post => post.category === category).length
                      return (
                        <Link
                          key={category}
                          href="#"
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-700">{category}</span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                            {count}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Subscribe */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Get the latest articles and spiritual insights delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-3"
                  />
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
