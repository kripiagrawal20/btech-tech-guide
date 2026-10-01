import { Link } from 'react-router-dom'
import { findResource } from '../../data/resources.js'

const cardClass = 'group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md'

export function ResourceCard({ resource }) {
  return (
    <Link to={`/platforms/${resource.id}`} className={cardClass}>
      <div className="flex items-start justify-between gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-violet-50 text-lg font-bold text-violet-700">{resource.name.slice(0, 1)}</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">{resource.category}</span>
      </div>
      <h3 className="mt-4 font-bold text-slate-950 group-hover:text-violet-800">{resource.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.tagline}</p>
      <span className="mt-4 text-sm font-semibold text-violet-700">Understand it <span aria-hidden="true">→</span></span>
    </Link>
  )
}

export function CategoryCard({ category, count }) {
  return (
    <Link to={`/platforms?category=${encodeURIComponent(category.name)}`} className={`${cardClass} hover:border-violet-300`}>
      <span className="grid size-11 place-items-center rounded-xl bg-violet-50 text-2xl text-violet-700" aria-hidden="true">{category.icon}</span>
      <h3 className="mt-4 font-bold text-slate-950">{category.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{category.description}</p>
      <span className="mt-4 text-xs font-semibold text-slate-500">{count} resources <span aria-hidden="true">→</span></span>
    </Link>
  )
}

export function RoadmapCard({ roadmap, index }) {
  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Step {String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-2 text-lg font-bold text-slate-950">{roadmap.title}</h3>
        </div>
        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800">{roadmap.timing}</span>
      </div>
      <p className="text-sm leading-6 text-slate-600">{roadmap.description}</p>
      <ul className="mt-4 space-y-2">
        {roadmap.topics.map((topic) => <li key={topic} className="flex gap-2 text-sm text-slate-700"><span className="text-violet-600" aria-hidden="true">✓</span>{topic}</li>)}
      </ul>
      {roadmap.resourceIds.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
          {roadmap.resourceIds.map((id) => {
            const resource = findResource(id)
            return resource ? <Link key={id} to={`/platforms/${id}`} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-800">{resource.name}</Link> : null
          })}
        </div>
      )}
    </article>
  )
}

export function CareerCard({ career }) {
  return (
    <Link to={`/careers/${career.id}`} className={cardClass}>
      <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-lg text-blue-700" aria-hidden="true">↗</span>
      <h3 className="mt-4 font-bold text-slate-950 group-hover:text-violet-800">{career.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{career.summary}</p>
      <span className="mt-4 text-sm font-semibold text-violet-700">Explore this path <span aria-hidden="true">→</span></span>
    </Link>
  )
}

export function GuideCard({ guide }) {
  return (
    <Link to={`/guides/${guide.id}`} className={cardClass}>
      <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">{guide.category}</span>
      <h3 className="mt-4 font-bold text-slate-950 group-hover:text-violet-800">{guide.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{guide.summary}</p>
      <span className="mt-4 text-sm font-semibold text-violet-700">Read guide <span aria-hidden="true">→</span></span>
    </Link>
  )
}
