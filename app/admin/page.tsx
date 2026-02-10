"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users, ArrowLeftRight, Calendar, CheckCircle, Clock, BookOpen,
  Heart, Bell, Menu, X, Home, LogOut, UserPlus, TrendingUp,
} from "lucide-react"

const dummyStats = { totalMembers: 142, activeMembers: 128, pendingTransfers: 5, upcomingEvents: 8, totalAnnouncements: 3 }

const dummyMembers = [
  { id: 1, firstName: "John", lastName: "Kipchoge", membershipNumber: "MEM001", status: "ACTIVE", joinDate: "2022-03-15" },
  { id: 2, firstName: "Grace", lastName: "Wanjiru", membershipNumber: "MEM002", status: "ACTIVE", joinDate: "2023-06-20" },
  { id: 3, firstName: "Peter", lastName: "Mutua", membershipNumber: "MEM003", status: "ACTIVE", joinDate: "2023-01-10" },
  { id: 4, firstName: "Sarah", lastName: "Kariuki", membershipNumber: "MEM004", status: "TRANSFERRED", joinDate: "2021-11-05" },
  { id: 5, firstName: "David", lastName: "Ochieng", membershipNumber: "MEM005", status: "ACTIVE", joinDate: "2023-09-12" },
]

const dummyTransfers = [
  { id: 1, from: "Mwangaza SDA", to: "Nairobi Central SDA", status: "PENDING", date: "2024-01-10", member: "James Nyambura" },
  { id: 2, from: "Mwangaza SDA", to: "Westlands SDA", status: "APPROVED", date: "2024-01-05", member: "Lucy Muthoni" },
  { id: 3, from: "Langata SDA", to: "Mwangaza SDA", status: "COMPLETED", date: "2023-12-20", member: "Moses Kipketer" },
]

const navItems = [
  { href: "/admin", label: "Dashboard", icon: Home },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/transfers", label: "Transfers", icon: ArrowLeftRight },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/sermons", label: "Sermons", icon: BookOpen },
  { href: "/admin/ministries", label: "Ministries", icon: Heart },
  { href: "/admin/announcements", label: "Announcements", icon: Bell },
]

export default function AdminDashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("mwangaza_user")
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser({ firstName: parsed.firstName, lastName: parsed.lastName })
        setReady(true)
      } catch {
        localStorage.removeItem("mwangaza_user")
        router.replace("/login")
      }
    } else {
      router.replace("/login")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("mwangaza_user")
    router.replace("/login")
  }

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-serif">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className={`hidden md:flex flex-col fixed inset-y-0 left-0 z-50 text-white transition-all duration-300 ${sidebarOpen ? "w-60" : "w-16"}`} style={{ background: "#014d4e" }}>
        <div className="p-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>M</div>
            {sidebarOpen && (
              <div>
                <h2 className="font-serif font-bold text-base leading-tight">Mwangaza SDA</h2>
                <p className="text-[11px] opacity-70">Church Admin</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-0.5 overflow-y-auto" style={{ scrollbarWidth: "thin" }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${item.href === "/admin" ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors text-sm">
            <LogOut className="w-4 h-4 flex-shrink-0" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </button>
        </div>

        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute -right-3 top-20 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#014d4e", border: "2px solid rgba(255,255,255,0.2)" }}>
          {sidebarOpen ? "\u2039" : "\u203A"}
        </button>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileSidebarOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 text-white" style={{ background: "#014d4e" }}>
            <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center font-bold" style={{ background: "rgba(255,255,255,0.2)" }}>M</div>
                <div>
                  <h2 className="font-serif font-bold">Mwangaza SDA</h2>
                  <p className="text-xs opacity-70">Church Admin</p>
                </div>
              </div>
              <button onClick={() => setMobileSidebarOpen(false)} className="p-2 hover:bg-white/10 rounded-lg"><X className="w-5 h-5" /></button>
            </div>
            <nav className="p-2 space-y-0.5">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileSidebarOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors text-sm ${item.href === "/admin" ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"}`}>
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="absolute bottom-0 left-0 right-0 p-2" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <button onClick={handleLogout} className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-white/80 hover:bg-white/10 text-sm">
                <LogOut className="w-4 h-4" /><span className="font-medium">Logout</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? "md:ml-60" : "md:ml-16"}`}>
        <header className="sticky top-0 z-40 bg-white shadow-sm" style={{ borderBottom: "1px solid #e5e7eb" }}>
          <div className="flex items-center gap-4 px-4 py-3 md:px-6">
            <button onClick={() => setMobileSidebarOpen(true)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg"><Menu className="w-5 h-5" /></button>
            <div className="flex-1">
              <h1 className="font-serif text-xl md:text-2xl font-bold" style={{ background: "linear-gradient(135deg, #014d4e, #0d9488)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dashboard</h1>
              <p className="text-xs text-gray-500">Welcome back, {user?.firstName || "Admin"}</p>
            </div>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: "linear-gradient(135deg, #0d9488, #06b6d4)" }}>
              {user?.firstName?.[0]}{user?.lastName?.[0] || "A"}
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-6">
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2">
            <Link href="/admin/members"><Button size="sm" className="text-white border-0" style={{ background: "linear-gradient(135deg, #0d9488, #06b6d4)" }}><UserPlus className="w-4 h-4 mr-1" />Add Member</Button></Link>
            <Link href="/admin/announcements"><Button size="sm" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"><Bell className="w-4 h-4 mr-1" />Announcements</Button></Link>
            <Link href="/admin/events"><Button size="sm" variant="outline" className="border-teal-200 text-teal-700 hover:bg-teal-50 bg-transparent"><Calendar className="w-4 h-4 mr-1" />Events</Button></Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { label: "Total Members", value: dummyStats.totalMembers, sub: "+12 this month", icon: Users, color: "#0d9488" },
              { label: "Active", value: dummyStats.activeMembers, sub: "90% rate", icon: CheckCircle, color: "#059669" },
              { label: "Pending Transfers", value: dummyStats.pendingTransfers, sub: "Awaiting action", icon: Clock, color: "#d97706" },
              { label: "Events", value: dummyStats.upcomingEvents, sub: "Next 30 days", icon: Calendar, color: "#0891b2" },
              { label: "Announcements", value: dummyStats.totalAnnouncements, sub: "Active now", icon: Bell, color: "#014d4e" },
            ].map((stat) => (
              <Card key={stat.label} className="border-0 shadow-sm bg-white">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className="text-[11px] text-gray-400 mt-1">{stat.sub}</p>
                    </div>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: stat.color }}>
                      <stat.icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Members */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-serif flex items-center gap-2"><Users className="h-4 w-4 text-teal-600" />Recent Members</CardTitle>
                  <Link href="/admin/members"><Button variant="ghost" size="sm" className="text-teal-600 text-xs hover:bg-teal-50">View All</Button></Link>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {dummyMembers.map((m) => (
                  <div key={m.id} className="px-4 py-3 flex items-center justify-between hover:bg-teal-50/30 transition-colors" style={{ borderBottom: "1px solid #f9fafb" }}>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{m.firstName} {m.lastName}</p>
                      <p className="text-xs text-gray-500">#{m.membershipNumber}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${m.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{m.status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Transfers */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-serif flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-teal-600" />Recent Transfers</CardTitle>
                  <Link href="/admin/transfers"><Button variant="ghost" size="sm" className="text-teal-600 text-xs hover:bg-teal-50">View All</Button></Link>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {dummyTransfers.map((t) => (
                  <div key={t.id} className="px-4 py-3 flex items-center justify-between hover:bg-teal-50/30 transition-colors" style={{ borderBottom: "1px solid #f9fafb" }}>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{t.member}</p>
                      <p className="text-xs text-gray-500">{t.from} &rarr; {t.to}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${t.status === "PENDING" ? "bg-orange-100 text-orange-700" : t.status === "APPROVED" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>{t.status}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Growth Chart Placeholder */}
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-3" style={{ borderBottom: "1px solid #f3f4f6" }}>
              <CardTitle className="text-base font-serif flex items-center gap-2"><TrendingUp className="h-4 w-4 text-teal-600" />Membership Growth</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-end justify-between h-40 gap-2">
                {[40, 55, 45, 65, 58, 72, 68, 85, 90, 95, 110, 128].map((val, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t-sm transition-all" style={{ height: `${(val / 128) * 100}%`, background: "linear-gradient(to top, #014d4e, #0d9488)" }} />
                    <span className="text-[9px] text-gray-400">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
