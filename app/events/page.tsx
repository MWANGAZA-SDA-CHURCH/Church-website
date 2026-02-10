import { Calendar, MapPin, Clock, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const upcomingEvents = [
  {
    id: 1,
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM - 12:00 PM",
    location: "Main Sanctuary",
    description: "Join us for our weekly worship service with inspiring messages and worship.",
    attendees: "200+",
  },
  {
    id: 2,
    title: "Youth Sabbath Celebration",
    date: "January 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Fellowship Hall",
    description: "Special program featuring youth talents, games, and spiritual input.",
    attendees: "150+",
  },
  {
    id: 3,
    title: "Ladies Retreat",
    date: "February 10-12, 2024",
    time: "All Day",
    location: "Conference Center",
    description: "A weekend of spiritual renewal, fellowship, and empowerment for women.",
    attendees: "100+",
  },
  {
    id: 4,
    title: "Men's Breakfast & Fellowship",
    date: "Second Saturday Monthly",
    time: "7:00 AM - 9:00 AM",
    location: "Church Café",
    description: "Men gathering for fellowship, breakfast, and spiritual discussion.",
    attendees: "50+",
  },
  {
    id: 5,
    title: "Community Health Fair",
    date: "March 15, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Church Grounds",
    description: "Free health screening, wellness education, and community service.",
    attendees: "300+",
  },
  {
    id: 6,
    title: "Easter Sunrise Service",
    date: "March 31, 2024",
    time: "6:00 AM",
    location: "Mountain Peak",
    description: "Begin Easter morning celebrating the resurrection of Christ together.",
    attendees: "500+",
  },
]

export const metadata = {
  title: "Events | Mwangaza SDA Church",
  description: "Explore upcoming church events and activities.",
}

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-20 pb-12 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
                Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Join us for worship, fellowship, and spiritual growth opportunities throughout the year.
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-border overflow-hidden group"
                >
                  <div className="h-2 bg-gradient-to-r from-primary to-cyan-600" />
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Users className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{event.attendees} expected</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{event.description}</p>

                    <button className="w-full py-2 px-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recurring Activities */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-12 text-center">Regular Activities</h2>

            <div className="space-y-4">
              {[
                { day: "Sunday", time: "9:00 AM", activity: "Main Worship Service" },
                { day: "Wednesday", time: "7:00 PM", activity: "Mid-week Prayer & Bible Study" },
                { day: "Saturday", time: "10:00 AM", activity: "Youth Sabbath School" },
                { day: "Monthly", time: "Various", activity: "Men's & Women's Ministry Meetings" },
              ].map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-6 p-4 bg-white rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-fit">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">{activity.day}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                  <p className="text-foreground font-medium">{activity.activity}</p>
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
