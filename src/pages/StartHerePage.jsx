import { useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { ResourceCard } from '../components/cards/Cards.jsx'
import { interests, roadmapYears, getStartingPath } from '../data/roadmaps.js'
import { resources } from '../data/resources.js'

const years = ['Before B.Tech', '1st Year', '2nd Year', '3rd Year', '4th Year']

export default function StartHerePage() {
  const [year, setYear] = useState(years[0])
  const [interest, setInterest] = useState('Not Sure')
  const path = getStartingPath(year, interest)
  const recommended = path.steps.map((id) => resources.find((resource) => resource.id === id)).filter(Boolean)

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Start here' }]} />
      <SectionHeader eyebrow="A little direction goes a long way" title="Find a starting point that fits you" description="Pick your current year and something you are curious about. There is no wrong answer, and you can change direction as you learn." />
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <fieldset>
            <legend className="text-base font-bold text-slate-950">What year are you in?</legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {years.map((item) => <button key={item} type="button" onClick={() => setYear(item)} aria-pressed={year === item} className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-medium transition ${year === item ? 'border-violet-500 bg-violet-50 text-violet-900 ring-2 ring-violet-100' : 'border-slate-200 text-slate-700 hover:border-violet-300'}`}>{item}</button>)}
            </div>
          </fieldset>
          <fieldset className="mt-7">
            <legend className="text-base font-bold text-slate-950">What are you interested in?</legend>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {interests.map((item) => <button key={item} type="button" onClick={() => setInterest(item)} aria-pressed={interest === item} className={`min-h-11 rounded-xl border px-3 py-2 text-left text-sm font-medium transition ${interest === item ? 'border-violet-500 bg-violet-50 text-violet-900 ring-2 ring-violet-100' : 'border-slate-200 text-slate-700 hover:border-violet-300'}`}>{item}</button>)}
            </div>
          </fieldset>
        </section>
        <section aria-live="polite" className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-300">Your starting path</p>
          <h2 className="mt-3 text-2xl font-bold">{year} · {interest}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Start with the fundamentals for this stage, then explore a few resources connected to your interest. This is a suggestion, not a fixed prescription.</p>
          <ol className="mt-6 space-y-3">
            {path.roadmap.topics.slice(0, 3).map((topic, index) => <li key={topic} className="flex gap-3 text-sm leading-6"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-violet-200">{index + 1}</span><span>{topic}</span></li>)}
          </ol>
          <Link className="mt-6 inline-flex font-semibold text-violet-200 hover:text-white" to="/roadmap">Explore the full roadmap →</Link>
        </section>
      </div>
      <section className="mt-12">
        <SectionHeader eyebrow="Try these next" title={`A few ${interest === 'Not Sure' ? 'beginner-friendly' : interest.toLowerCase()} resources`} description="Open a resource guide to learn what it is and try a small first task." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{recommended.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div>
      </section>
      <div className="mt-10 rounded-2xl border border-violet-100 bg-violet-50 p-5 text-sm leading-6 text-violet-950">
        <strong>Keep it flexible.</strong> Students have different schedules, interests, and opportunities. You do not need to learn every tool at once. Choose one small step, try it, and adjust.
      </div>
      <div className="sr-only">{roadmapYears.length} roadmap stages available.</div>
    </div>
  )
}
