import { notFound } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { departments } from "../data"

type DepartmentPageProps = {
  params: {
    slug: string
  }
}

export default function DepartmentDetailPage({ params }: DepartmentPageProps) {
  const department = departments.find((d) => d.slug === params.slug)

  if (!department) {
    notFound()
  }

  const Icon = department.icon

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
            <div className="absolute right-[-6rem] bottom-[-4rem] h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                Adventist Church Department
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-2">
                    {department.title}
                  </h1>
                  <p className="text-sm md:text-base text-white/80 max-w-xl">
                    {department.overview}
                  </p>
                </div>
              </div>
              <div className="text-xs md:text-sm text-white/80">
                <p className="uppercase tracking-[0.18em] text-teal-100/80 mb-1">Official Website</p>
                <a
                  href={`https://${department.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium hover:text-white"
                >
                  {department.website}
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground">What this department does</h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {department.description}
              </p>
            </div>

            {department.focusAreas && department.focusAreas.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-serif font-light text-foreground">Key focus areas</h3>
                <ul className="grid gap-3 sm:grid-cols-2 text-sm md:text-base text-muted-foreground">
                  {department.focusAreas.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-border/60 bg-muted/40 px-4 py-3"
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/60">
              <p className="text-sm text-muted-foreground">
                Learn more about {department.title} and access official resources on their global website.
              </p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link
                  href="/ministries"
                  className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 hover:bg-muted/60 transition-colors"
                >
                  ← Back to all departments
                </Link>
                <a
                  href={`https://${department.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition-colors"
                >
                  Visit official site
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

