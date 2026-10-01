import { Link } from 'react-router-dom'
import { categories, navigationLinks } from '../data/navigation.js'
import { resources } from '../data/resources.js'
import { roadmapYears } from '../data/roadmaps.js'
import { careers } from '../data/careers.js'
import { ResourceCard, CategoryCard, RoadmapCard, CareerCard } from '../components/cards/Cards.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import CTASection from '../components/common/CTASection.jsx'

export default function HomePage() {
  const popular = ['github', 'leetcode', 'git', 'linkedin'].map((id) => resources.find((item) => item.id === id))
  return (
    <div className="space-y-16 sm:space-y-20">
      <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
        <div className="absolute -right-20 -top-24 size-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 size-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-violet-200">A practical guide for your B.Tech journey</span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Confused about what to learn in B.Tech?</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Make sense of the tools, platforms, careers, and opportunities you hear about—and find a clear next step for your own journey.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/start-here" className="inline-flex min-h-12 items-center justify-center rounded-xl bg-violet-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-violet-300">I’m new to tech <span className="ml-2" aria-hidden="true">→</span></Link>
            <Link to="/roadmap" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Explore B.Tech roadmap</Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">Understand what to learn, why it matters, and what to do next.</p>
        </div>
        <div className="relative mt-10 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:max-w-xl sm:gap-6">
          {[['01', 'Understand'], ['02', 'Explore'], ['03', 'Take a step']].map(([number, label]) => <div key={label}><p className="text-xs font-bold text-violet-300">{number}</p><p className="mt-1 text-sm font-medium text-slate-200">{label}</p></div>)}
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="A friendly starting point" title="The tech world, made easier to navigate" description="You don't need to learn everything at once. Find a term, tool, or topic and understand where it fits." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map((category) => <CategoryCard key={category.name} category={category} count={category.resourceIds.length} />)}</div>
      </section>

      <section>
        <SectionHeader eyebrow="Start with the familiar" title="Popular resources, explained" description="Learn what well-known platforms do, when to use them, and one simple way to begin." action={<Link className="text-sm font-semibold text-violet-700 hover:text-violet-900" to="/platforms">Browse all platforms →</Link>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{popular.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div>
      </section>

      <section>
        <SectionHeader eyebrow="Your degree, at a glance" title="A flexible B.Tech roadmap" description="A starting point for each year—not a rulebook. Your next steps depend on what you want to explore." action={<Link className="text-sm font-semibold text-violet-700 hover:text-violet-900" to="/roadmap">See full roadmap →</Link>} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{roadmapYears.slice(0, 3).map((roadmap, index) => <RoadmapCard key={roadmap.id} roadmap={roadmap} index={index} />)}</div>
      </section>

      <section>
        <SectionHeader eyebrow="Many ways to use your skills" title="Explore career paths" description="Get a beginner-friendly view of roles, skills, technologies, and project ideas. No path is ranked above another." action={<Link className="text-sm font-semibold text-violet-700 hover:text-violet-900" to="/careers">Explore all careers →</Link>} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{careers.slice(0, 4).map((career) => <CareerCard key={career.id} career={career} />)}</div>
      </section>

      <CTASection title="Not sure where to begin?" description="Choose your year and an interest. We'll suggest a simple starting path using this guide's learning map." buttonText="Find my starting path" to="/start-here" />
      <nav className="sr-only" aria-label="Explore all sections">{navigationLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</nav>
    </div>
  )
}
