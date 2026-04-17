import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, BookOpen, Upload, Edit, Trash2, Search, Filter, Plus, TrendingUp, Eye, FileText, Video, Mic } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard | Seventh Day Adventist Church Mwangaza",
  description: "Admin dashboard for managing sermons and church content",
}

// Mock data
const recentSermons = [
  {
    id: 1,
    title: "The Power of Prayer",
    date: "2026-04-17",
    speaker: "Pastor John Kimani",
    duration: "45 min",
    views: 234,
    category: "Prayer",
    status: "published"
  },
  {
    id: 2,
    title: "Walking by Faith",
    date: "2026-04-16",
    speaker: "Pastor Sarah Mwangi",
    duration: "38 min",
    views: 189,
    category: "Faith",
    status: "published"
  },
  {
    id: 3,
    title: "Love in Action",
    date: "2026-04-15",
    speaker: "Pastor Michael Otieno",
    duration: "52 min",
    views: 156,
    category: "Love",
    status: "draft"
  }
]

const stats = [
  { label: "Total Sermons", value: "47", icon: FileText, color: "teal", change: "+3 this week" },
  { label: "Total Views", value: "12.5K", icon: Eye, color: "blue", change: "+523 today" },
  { label: "Active Members", value: "1,234", icon: Users, color: "purple", change: "+12 this month" },
  { label: "Avg. Duration", value: "42 min", icon: Clock, color: "orange", change: "+2 min" }
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/20 to-cyan-50/30">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600">
              Manage sermons, devotions, and church content
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Sermon
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Media
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 flex items-center justify-center shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/dashboard/sermons/new">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <Plus className="h-6 w-6" />
                  <span className="text-sm">Add Sermon</span>
                </Button>
              </Link>
              <Link href="/dashboard/devotions/new">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  <span className="text-sm">Add Devotion</span>
                </Button>
              </Link>
              <Link href="/dashboard/events/new">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span className="text-sm">Add Event</span>
                </Button>
              </Link>
              <Link href="/dashboard/members">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center gap-2">
                  <Users className="h-6 w-6" />
                  <span className="text-sm">Manage Members</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Sermons */}
        <Card className="mb-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl font-bold text-gray-900">Recent Sermons</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search sermons..."
                    className="w-64 pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                  />
                </div>
                <select className="px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm">
                  <option>All Categories</option>
                  <option>Faith</option>
                  <option>Love</option>
                  <option>Prayer</option>
                  <option>Hope</option>
                </select>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              {recentSermons.map((sermon) => (
                <div key={sermon.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg border border-teal-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      sermon.status === 'published' ? 'bg-green-100' : 'bg-yellow-100'
                    }`}>
                      {sermon.status === 'published' ? (
                        <Video className="h-6 w-6 text-green-600" />
                      ) : (
                        <FileText className="h-6 w-6 text-yellow-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{sermon.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{sermon.speaker}</span>
                        <span>•</span>
                        <span>{sermon.date}</span>
                        <span>•</span>
                        <span>{sermon.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      sermon.status === 'published' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {sermon.status}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Eye className="h-4 w-4" />
                      <span>{sermon.views}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link href={`/dashboard/sermons/${sermon.id}/edit`}>
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Edit className="h-3 w-3" />
                          Edit
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="flex items-center gap-1 text-red-600 hover:text-red-700">
                        <Trash2 className="h-3 w-3" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Button variant="outline" className="flex items-center gap-2">
                View All Sermons
                <Calendar className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Daily Devotion Management */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-teal-600" />
                Daily Devotion Management
              </h2>
              <Link href="/dashboard/devotions/new">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  New Devotion
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
                <h3 className="font-semibold text-gray-900 mb-2">Today's Devotion</h3>
                <p className="text-sm text-gray-600 mb-3">Schedule and manage daily devotions</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Published</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Scheduled for:</span>
                    <span className="font-medium text-gray-900">April 17, 2026</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Edit Today's Devotion
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg border border-cyan-100">
                <h3 className="font-semibold text-gray-900 mb-2">Previous Devotions</h3>
                <p className="text-sm text-gray-600 mb-3">Browse and search previous devotions</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">This week:</span>
                    <span className="font-medium text-gray-900">7 devotions</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">This month:</span>
                    <span className="font-medium text-gray-900">28 devotions</span>
                  </div>
                </div>
                <Link href="/devotions">
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View All Devotions
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
