import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import CTASection from '../components/common/CTASection.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { ResourceCard } from '../components/cards/Cards.jsx'
import { findResource } from '../data/resources.js'

const marks = {
  leetcode: 'LC', geeksforgeeks: 'GfG', codechef: 'CC', codeforces: 'CF', hackerrank: 'HR',
  github: 'GH', linkedin: 'in', vscode: 'VS', git: 'git', postman: 'PM',
  vercel: '▲', netlify: 'N', aws: 'aws', azure: 'Az', 'google-cloud': 'G',
  figma: 'F', notion: 'N', internships: '↗', jobs: '▤', resume: 'CV', portfolio: '✦',
}

const categoryColors = {
  'Coding & DSA': 'from-violet-600 to-indigo-700',
  Professional: 'from-blue-600 to-cyan-700',
  Development: 'from-cyan-600 to-teal-700',
  Cloud: 'from-sky-600 to-blue-800',
  'Design & Productivity': 'from-orange-500 to-pink-600',
  Career: 'from-emerald-600 to-teal-800',
}

function ResourceMark({ resource, large = false }) {
  return (
    <div className={`relative grid ${large ? 'size-28 rounded-[2rem] text-3xl sm:size-36 sm:text-4xl' : 'size-11 rounded-xl text-sm'} shrink-0 place-items-center overflow-hidden bg-gradient-to-br ${categoryColors[resource.category] ?? 'from-violet-600 to-indigo-700'} font-black tracking-tight text-white shadow-lg`}>
      <span className="absolute -right-4 -top-5 size-16 rounded-full border border-white/25" aria-hidden="true" />
      <span className="absolute -bottom-7 -left-5 size-16 rounded-full border border-white/25" aria-hidden="true" />
      <span className="relative">{marks[resource.id] ?? resource.name.slice(0, 2)}</span>
    </div>
  )
}

function GlanceCard({ icon, label, children, accent = 'violet' }) {
  const accents = {
    violet: 'bg-violet-50 text-violet-800',
    blue: 'bg-blue-50 text-blue-800',
    cyan: 'bg-cyan-50 text-cyan-800',
    amber: 'bg-amber-50 text-amber-900',
  }
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <span className={`grid size-10 place-items-center rounded-xl text-lg ${accents[accent]}`} aria-hidden="true">{icon}</span>
      <h3 className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">{label}</h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-800">{children}</p>
    </article>
  )
}

function JourneyTimeline({ journey, name }) {
  const stages = [
    { label: 'Before', title: 'Build the foundation', detail: journey.before, icon: '01' },
    { label: 'This resource', title: name, detail: journey.stage, icon: '02', current: true },
    { label: 'After', title: 'Keep progressing', detail: journey.after, icon: '03' },
  ]
  return (
    <ol className="grid gap-3 md:grid-cols-3">
      {stages.map((stage, index) => (
        <li key={stage.label} className="relative">
          {index < stages.length - 1 && <span className="absolute left-8 top-16 hidden h-px w-[calc(100%-1.25rem)] bg-violet-200 md:block" aria-hidden="true" />}
          <article className={`relative h-full rounded-2xl border p-5 ${stage.current ? 'border-violet-300 bg-violet-50 shadow-sm' : 'border-slate-200 bg-white'}`}>
            <div className="flex items-center gap-3">
              <span className={`grid size-9 place-items-center rounded-full text-xs font-bold ${stage.current ? 'bg-violet-700 text-white' : 'bg-slate-100 text-slate-600'}`}>{stage.icon}</span>
              <span className={`text-xs font-bold uppercase tracking-wider ${stage.current ? 'text-violet-800' : 'text-slate-500'}`}>{stage.label}</span>
            </div>
            <h3 className="mt-4 font-bold text-slate-950">{stage.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{stage.detail}</p>
          </article>
        </li>
      ))}
    </ol>
  )
}

export default function ResourceDetailPage() {
  const { id } = useParams()
  const resource = findResource(id)
  const [completedTasks, setCompletedTasks] = useState({})

  if (!resource) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-950">Resource not found</h1>
        <p className="mt-3 text-slate-600">This resource may have moved or is not part of this guide yet.</p>
        <Link className="mt-5 inline-block font-semibold text-violet-700" to="/platforms">Browse platforms →</Link>
      </div>
    )
  }

  const relatedResources = resource.relatedResources.map(findResource).filter(Boolean)
  const completedCount = Object.values(completedTasks).filter(Boolean).length
  const overviewParagraphs = resource.overview.split('\n\n')

  return (
    <article className="mx-auto max-w-6xl">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Platforms', to: '/platforms' }, { label: resource.name }]} />

      <header className="relative mb-12 overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-11 lg:px-12">
        <div className="absolute -right-10 -top-20 size-64 rounded-full bg-violet-600/20 blur-3xl" aria-hidden="true" />
        <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-9">
          <div className="flex items-center gap-4 sm:block">
            <ResourceMark resource={resource} large />
            <span className="sm:sr-only mt-3 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-200">{resource.category}</span>
          </div>
          <div className="max-w-3xl">
            <span className="hidden rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-200 sm:inline-flex">{resource.category} · Beginner guide</span>
            <h1 className="mt-1 text-3xl font-bold tracking-tight sm:mt-3 sm:text-4xl lg:text-5xl">{resource.name}</h1>
            <p className="mt-3 text-base leading-7 text-slate-300 sm:text-lg">{resource.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100" href={resource.url} target="_blank" rel="noreferrer">Visit official website <span className="ml-2" aria-hidden="true">↗</span></a>
              <span className="text-xs text-slate-400">Opens the provider’s website in a new tab</span>
            </div>
          </div>
        </div>
        <div className="relative mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-slate-400">
          <span className="grid size-6 place-items-center rounded-full bg-white/10 text-violet-200" aria-hidden="true">i</span>
          This guide explains where it fits; check the official site for current product details.
        </div>
      </header>

      <section className="mb-14" aria-labelledby="at-a-glance-heading">
        <SectionHeader eyebrow="The short version" title="At a glance" description="A quick orientation before you explore the details." />
        <h2 id="at-a-glance-heading" className="sr-only">At a glance</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <GlanceCard icon="◎" label="Purpose" accent="violet">{resource.purpose}</GlanceCard>
          <GlanceCard icon="♙" label="Who should use it" accent="blue">{resource.who}</GlanceCard>
          <GlanceCard icon="↗" label="When to start" accent="cyan">{resource.when}</GlanceCard>
          <GlanceCard icon="◷" label="Beginner level" accent="amber">{resource.difficulty}</GlanceCard>
        </div>
      </section>

      <section className="mb-14 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.6fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <SectionHeader eyebrow="Start with the idea" title="What is it?" />
          <div className="space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
            {overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <aside className="flex flex-col justify-between rounded-3xl bg-violet-950 p-6 text-white sm:p-8">
          <div>
            <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-xl text-violet-200" aria-hidden="true">✦</span>
            <h2 className="mt-5 text-xl font-bold">Think of it as a tool in your toolkit</h2>
            <p className="mt-3 text-sm leading-6 text-violet-100">You do not need to master every feature before getting value from it. Start with one real need and learn only what helps.</p>
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <ResourceMark resource={resource} />
            <div><p className="text-xs text-violet-200">You’re exploring</p><p className="mt-0.5 font-semibold">{resource.name}</p></div>
          </div>
        </aside>
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="Why it belongs in your learning journey" title="Why does it matter?" description="This is not a must-have badge. It is useful when it helps you learn, build, collaborate, or explain your work." />
        <div className="grid gap-3 md:grid-cols-3">
          {resource.whyItMatters.map((reason, index) => (
            <article key={reason} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-800" aria-hidden="true">0{index + 1}</span>
              <p className="text-sm leading-6 text-slate-700">{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="There is no single perfect schedule" title="Where does it fit in my B.Tech journey?" description="Think of this as a flexible order of learning, not a year-specific rule. Your course, interests, and opportunities may change the timing." />
        <JourneyTimeline journey={resource.journey} name={resource.name} />
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="See the process" title="How does it work?" description="A simplified view of the usual workflow. The exact details depend on how you choose to use this resource." />
        <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resource.visualSteps.map(([icon, title, description], index) => (
            <li key={title} className="relative">
              {index < resource.visualSteps.length - 1 && <span className="absolute right-[-0.55rem] top-7 z-10 hidden text-lg text-violet-400 lg:block" aria-hidden="true">→</span>}
              <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-violet-50 text-xl font-semibold text-violet-800" aria-hidden="true">{icon}</span>
                  <span className="text-xs font-bold text-slate-400">STEP {index + 1}</span>
                </div>
                <h3 className="mt-4 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="Vocabulary in context" title="Important terms" description="A few words you may see while using or learning about this resource." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {resource.importantTerms.map(({ term, definition }) => (
            <article key={term} className="rounded-2xl border border-violet-100 bg-violet-50/70 p-4">
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-900 shadow-sm">{term}</span>
              <p className="mt-3 text-sm leading-6 text-slate-700">{definition}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="Make the first step small" title="How do I start?" description="You do not need to know everything first. Try these steps in order and pause whenever something is unclear." />
        <ol className="mx-auto max-w-3xl space-y-3">
          {resource.howToStart.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:items-center sm:p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
              <p className="text-sm leading-6 text-slate-700 sm:text-base">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-emerald-950 p-6 text-white sm:p-8">
          <span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-xl text-emerald-200" aria-hidden="true">✓</span>
          <h2 className="mt-5 text-2xl font-bold">Your first task</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-100">Pick one or two tasks you can finish in a short session. Use the checklist to keep track on this page.</p>
          <p className="mt-6 text-3xl font-bold">{completedCount}<span className="text-lg font-medium text-emerald-200">/{resource.firstTasks.length}</span></p>
          <p className="text-xs text-emerald-200">tasks checked on this visit</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <ul className="space-y-3">
            {resource.firstTasks.map((task, index) => (
              <li key={task}>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl p-3 transition hover:bg-slate-50">
                  <input
                    className="mt-1 size-4 shrink-0 accent-emerald-700"
                    type="checkbox"
                    checked={Boolean(completedTasks[index])}
                    onChange={(event) => setCompletedTasks((current) => ({ ...current, [index]: event.target.checked }))}
                  />
                  <span className={`text-sm leading-6 ${completedTasks[index] ? 'text-slate-400 line-through' : 'text-slate-700'}`}>{task}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-14">
        <SectionHeader eyebrow="Build understanding in layers" title="What next?" description="You can move from a first try to deeper knowledge gradually. Skip or revisit steps to suit your goals." />
        <ol className="relative grid gap-3 md:grid-cols-3">
          {resource.nextSteps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <span className={`grid size-9 place-items-center rounded-full text-xs font-bold ${index === 0 ? 'bg-violet-100 text-violet-900' : index === 1 ? 'bg-blue-100 text-blue-900' : 'bg-emerald-100 text-emerald-900'}`}>{index + 1}</span>
                {index < resource.nextSteps.length - 1 && <span className="h-px flex-1 bg-slate-200" aria-hidden="true" />}
              </div>
              <h3 className="mt-4 font-bold text-slate-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      {relatedResources.length > 0 && (
        <section className="mb-14">
          <SectionHeader eyebrow="Keep the connections useful" title="Related resources" description="These tools or learning resources connect naturally to this topic. Explore only the ones that fit your next step." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((related) => <ResourceCard key={related.id} resource={related} />)}
          </div>
        </section>
      )}

      <CTASection title="Put this in context" description="See how resources like this fit alongside the skills you may explore during B.Tech." buttonText="Explore the B.Tech roadmap" to="/roadmap" />
    </article>
  )
}
