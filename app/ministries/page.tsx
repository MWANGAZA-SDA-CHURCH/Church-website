import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { departments, featuredMinistry } from "./data"

export const metadata = {
  title: "Departments | Mwangaza SDA Church",
  description: "Explore the Seventh-day Adventist Church departments and their missions worldwide.",
}

export default function DepartmentsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#014D4E] via-[#036564] to-[#014D4E] text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
            <div className="absolute right-[-6rem] bottom-[-4rem] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 mb-5">
                <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                  Church Departments &amp; Ministries
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-4 text-balance">
                Serving Together in{" "}
                <span className="font-normal italic">One Mission</span>
              </h1>
              <p className="text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed mb-8">
                Explore the global Seventh-day Adventist departments and ministries that support churches like Mwangaza
                in evangelism, nurture, and service.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 text-xs text-white/85">
                <div>
                  <p className="uppercase tracking-[0.18em] text-teal-100/80 mb-1">Departments</p>
                  <p className="text-lg font-semibold">{departments.length}</p>
                  <p className="text-[11px] text-teal-50/80">Supporting the world church</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.18em] text-teal-100/80 mb-1">Focus</p>
                  <p className="text-lg font-semibold">Discipleship</p>
                  <p className="text-[11px] text-teal-50/80">Equipping members for ministry</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.18em] text-teal-100/80 mb-1">Partnership</p>
                  <p className="text-lg font-semibold">Global &amp; Local</p>
                  <p className="text-[11px] text-teal-50/80">Resources for Mwangaza SDA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Ministry – Voice of Prophecy */}
        <section className="py-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <featuredMinistry.icon className="h-8 w-8" />
                  <h2 className="font-serif text-3xl md:text-4xl font-light">
                    {featuredMinistry.title}
                  </h2>
                </div>
                <p className="text-base md:text-lg opacity-90 mb-6 leading-relaxed">
                  {featuredMinistry.longDescription}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 text-sm">
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80 mb-1">Our Mission</p>
                    <p className="font-medium">{featuredMinistry.mission}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.18em] text-teal-100/80 mb-1">Our Impact</p>
                    <p className="font-medium">{featuredMinistry.impact}</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-400/10 blur-3xl rounded-3xl" />
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/40">
                    <p className="text-center text-base md:text-lg leading-relaxed italic">
                      "{featuredMinistry.description}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Departments Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-3">
                Explore the Departments
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each department serves a vital role in advancing the Adventist Church's mission worldwide and supporting
                local congregations like Mwangaza SDA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {departments.map((dept) => {
                const Icon = dept.icon
                return (
                  <div
                    key={dept.id}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${dept.color}`} />
                    <div className="absolute inset-0 bg-white/80 mix-blend-screen" />

                    <div className="relative p-6 flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-white shadow-sm border border-white/60">
                          <Icon className="h-6 w-6 text-slate-900" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-slate-900 leading-tight mb-1">
                            {dept.title}
                          </h3>
                          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                            Global Adventist Department
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed mb-6 flex-1">{dept.description}</p>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <Link
                          href={`/ministries/${dept.slug}`}
                          className="inline-flex items-center gap-2 text-teal-700 font-medium hover:text-teal-900 transition-colors"
                        >
                          View department
                          <span aria-hidden>→</span>
                        </Link>
                        <a
                          href={`https://${dept.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors text-xs"
                        >
                          Official site
                          <span aria-hidden>↗</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold mb-4">Support God's Work Globally</h2>
            <p className="text-lg opacity-90 mb-8">
              Learn more about how these departments advance the gospel and serve communities worldwide.
            </p>
            <a
              href="https://adventist.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Explore Adventist.org
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
