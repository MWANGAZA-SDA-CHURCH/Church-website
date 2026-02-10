"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"

const foundersData = [
  { name: "Stephen Mutahi", role: "Founding Member" },
  { name: "Isaac Nyakeri", role: "Founding Member" },
  { name: "Basil A. Omondi", role: "Founding Member" },
  { name: "Mary Omandi", role: "Founding Member" },
  { name: "George Simba", role: "Founding Member" },
  { name: "Milka Simba", role: "Founding Member" },
  { name: "Penina Omondi", role: "Founding Member" },
  { name: "Millicent Kubai", role: "Founding Member" },
  { name: "Shem Odera", role: "Founding Member" },
  { name: "Pamella Odera", role: "Founding Member" },
  { name: "Fred Kubai Opondo", role: "Founding Member" },
  { name: "Joab Oboo", role: "Founding Member" },
  { name: "Mary Odera", role: "Founding Member" },
  { name: "Millicent Alang'o", role: "Founding Member" },
  { name: "Mellen Kemunto", role: "Founding Member" },
  { name: "Mrs. Omweri", role: "Founding Member" },
  { name: "Jane Oruko", role: "Founding Member" },
  { name: "Beatrice Gesora", role: "Founding Member" },
  { name: "Grace Abuga", role: "Founding Member" },
  { name: "Martin Mandila", role: "Youth" },
  { name: "Ronald Migiro", role: "Youth" },
  { name: "Kepha Omweri", role: "Youth" },
  { name: "Esther Maroko", role: "Founding Member" },
  { name: "Maureen Owino", role: "Founding Member" },
  { name: "Mrs Mutahi", role: "Founding Member" },
  { name: "Pamela Moturi", role: "Founding Member" },
  { name: "Esther Chemutai", role: "Founding Member" },
  { name: "Rebbeca Nyarangi", role: "Founding Member" },
  { name: "Everlyn Kemunto", role: "Founding Member" },
  { name: "Everlyn Ogore", role: "Founding Member" },
  { name: "John Ogore", role: "Founding Member" },
  { name: "Emmanuel Baraza", role: "Founding Member" },
  { name: "Ouma Bala", role: "Founding Member" },
  { name: "Joseph Omullo", role: "Founding Member" },
  { name: "Mrs. Omullo", role: "Founding Member" },
  { name: "Moses Oding", role: "Founding Member" },
  { name: "Mr. Matunda", role: "Founding Member" },
  { name: "Mrs. Matunda", role: "Founding Member" },
  { name: "Martha Otieno", role: "Founding Member" },
  { name: "Tobias Magambo", role: "Founding Member" },
  { name: "Benard Maina", role: "Founding Member" },
  { name: "Tom Malachi", role: "Founding Member" },
  { name: "Douglas Nyamweya", role: "Founding Member" },
  { name: "Francisca Njeri", role: "Founding Member" },
  { name: "Samuel Ndegwa", role: "Founding Member" },
]

const timelineEvents = [
  {
    year: "1997",
    title: "The Beginning",
    description: "Mwangaza started as a Sabbath School of the SDA Church Kayole, under the Central Kenya Conference.",
  },
  {
    year: "1998",
    title: "Official Organization",
    description:
      "Organized as a main church with 45 nucleus members. First Pastor: Peter Njenga. First Head Elder: Stephen Mutai.",
  },
  {
    year: "1999",
    title: "Our Home",
    description: "Land acquired and temporary structure constructed at the current location.",
  },
  {
    year: "2000",
    title: "Growing Community",
    description: "Hosted the first sub-district camp meeting with neighboring churches.",
  },
  {
    year: "2007",
    title: "Building Progress",
    description: "Foundation for permanent structure laid under Pastor Ebrahim Muraya's leadership.",
  },
  {
    year: "Today",
    title: "Thriving Congregation",
    description: "Over 1,750 members with weekly attendance averaging 2,500 worshippers.",
  },
]

export default function AboutClientPage() {
  const [expandedYear, setExpandedYear] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 px-6 bg-gradient-to-b from-[#014D4E] via-[#036564] to-[#014D4E] text-white">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
            <div className="absolute right-[-6rem] bottom-[-4rem] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 mb-6">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  About Mwangaza SDA Church
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-6 tracking-tight text-balance">
                A Legacy of <span className="block font-medium italic">Faith &amp; Growth</span>
              </h1>
              <p className="text-lg md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-10">
                Since 1997, Mwangaza SDA Church has been a beacon of spiritual devotion and community transformation
                across the Central Kenya Conference.
              </p>

              <div className="grid gap-6 sm:grid-cols-3 text-sm text-white/90">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80">Founded</p>
                  <p className="text-lg font-semibold">1997</p>
                  <p className="text-xs text-teal-50/80">From Sabbath School to thriving church</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80">Membership</p>
                  <p className="text-lg font-semibold">2,750+</p>
                  <p className="text-xs text-teal-50/80">Average attendance 2,500 weekly</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80">Conference</p>
                  <p className="text-lg font-semibold">East Nairobi Field</p>
                  <p className="text-xs text-teal-50/80">Serving Nairobi &amp; beyond</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="relative py-20 md:py-28 px-6 border-t border-border/30 bg-background">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Section header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[0.28em] text-primary/70">Who We Are</p>
              <h2 className="text-3xl md:text-5xl font-serif font-light leading-tight">
                Built on the faith of{" "}
                <span className="font-normal italic text-primary">45 pioneer members</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                From a small Sabbath School in 1997 to a vibrant congregation today, Mwangaza SDA Church continues to
                shine the light of Christ in Nairobi and beyond.
              </p>
            </div>

            {/* Two-column content */}
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 lg:gap-20 items-center">
              {/* Story & founders */}
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  Our story is one of prayer, sacrifice, and unwavering faith. The early members gathered with a simple
                  desire: to worship God, study His Word, and build a spiritual home that would nurture generations to
                  come. Their vision—to reach the lost and edify the saved—remains at the heart of who we are.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-border/60 bg-muted/40 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/70 mb-1">Our Identity</p>
                    <p className="text-sm md:text-base font-medium">
                      A Christ–centered, Bible–based Seventh‑day Adventist congregation.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-muted/40 px-5 py-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-primary/70 mb-1">Our Focus</p>
                    <p className="text-sm md:text-base font-medium">
                      Worship, discipleship, community service, and nurturing families in faith.
                    </p>
                  </div>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-full px-8 py-6 border-border hover:bg-primary/5 group bg-transparent"
                    >
                      Explore Founder Members
                      <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-3xl font-serif font-light">
                        The 45 Founding Members
                      </DialogTitle>
                      <p className="text-sm text-muted-foreground mt-2">
                        Honouring the men and women whose faith, sacrifice, and vision laid the foundation of Mwangaza
                        SDA Church.
                      </p>
                    </DialogHeader>
                    <div className="mt-6 rounded-2xl border border-border/60 bg-muted/60 px-4 py-3 text-xs text-muted-foreground flex items-center justify-between">
                      <span className="uppercase tracking-[0.22em] text-primary/70">Founders Roll</span>
                      <span className="font-medium text-foreground">
                        {foundersData.length} names • 1997 – Present
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      {foundersData.map((founder, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 p-4 border border-border rounded-xl bg-background hover:bg-primary/5 transition-colors"
                        >
                          <div className="mt-1 h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xs font-semibold text-primary">
                              {founder.name
                                .split(" ")
                                .slice(0, 2)
                                .map((n) => n.charAt(0))
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-sm md:text-base">{founder.name}</p>
                            <p className="mt-1 inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                              {founder.role}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              {/* Image / visual story */}
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted group shadow-xl shadow-black/5">
                <img
                  src="/church.jpg"
                  alt="Founding members of Mwangaza SDA Church"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
                  <div>
                    <p className="uppercase tracking-[0.22em] text-white/70">Mwangaza Origins</p>
                    <p className="text-sm font-medium">Kayole • Central Kenya Conference</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/10 border border-white/30 text-[11px] font-medium">
                    1997 – Today
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#014D4E] to-[#0a6f6e] text-white">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 md:mb-20">
              <h2 className="text-sm uppercase tracking-widest text-white/60 mb-3">Our Journey</h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light">
                Milestones Through Time
              </h3>
            </div>

            <div className="relative space-y-6">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-0 bottom-0 hidden md:block">
                <div className="h-full w-px bg-gradient-to-b from-white/40 via-white/20 to-white/5" />
              </div>

              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative pl-0 md:pl-10 group cursor-pointer"
                  onClick={() => setExpandedYear(expandedYear === event.year ? null : event.year)}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-0 top-8 -translate-x-1/2 items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-white/20 border border-white/40 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-300" />
                    </div>
                  </div>

                  <div className="rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl shadow-black/30 px-5 py-6 md:px-7 md:py-8 transition-transform transition-colors duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <p className="text-3xl md:text-4xl font-serif font-light text-white/60 group-hover:text-white/80 transition-colors mb-1">
                          {event.year}
                        </p>
                        <h4 className="text-lg md:text-2xl font-serif font-light mb-2">{event.title}</h4>
                        <p
                          className={`text-sm md:text-base font-light leading-relaxed text-white/85 transition-all ${
                            expandedYear === event.year ? "line-clamp-none" : "line-clamp-2 md:line-clamp-3"
                          }`}
                        >
                          {event.description}
                        </p>
                      </div>
                      {/* No explicit expand/collapse label to keep the UI clean */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-serif text-primary">M</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight">Our Mission</h3>
                <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                  We are committed, with the help of the Holy Spirit, to reach out to the lost, edify the saved, and
                  minister to those in need. Our mission is lived daily through every member's dedication to Christ's
                  great commission.
                </p>
              </div>
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-serif text-primary">V</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif font-light leading-tight">Our Vision</h3>
                <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                  To connect the unconnected to Jesus and grow together in full devotion to Him. We envision a vibrant,
                  Spirit-filled community of believers transforming society one heart at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 md:py-32 px-6 bg-primary/5 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight">Join Our Growing Family</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Whether you're seeking spiritual growth, community connection, or a place to serve, Mwangaza SDA Church
              welcomes you with open arms.
            </p>
            <Button className="rounded-full px-10 py-6 text-lg" asChild>
              <a href="/#sabbath-program">Visit Us</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
