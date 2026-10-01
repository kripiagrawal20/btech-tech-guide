import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import { guides } from '../data/guides.js'
import { findResource } from '../data/resources.js'

export default function GuideDetailPage() {
  const { id } = useParams()
  const guide = guides.find((item) => item.id === id)
  if (!guide) return <div className="py-16 text-center"><h1 className="text-2xl font-bold text-slate-950">Guide not found</h1><Link className="mt-5 inline-block font-semibold text-violet-700" to="/guides">Browse guides →</Link></div>
  const related = guide.resourceIds.map(findResource).filter(Boolean)
  return (
    <article className="mx-auto max-w-3xl">
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Guides', to: '/guides' }, { label: guide.title }]} />
      <header className="mb-8 border-b border-slate-200 pb-7">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">{guide.category}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{guide.title}</h1>
        <p className="mt-3 text-base leading-7 text-slate-600">{guide.summary}</p>
      </header>
      <div className="space-y-7">
        {guide.sections.map((section, index) => <section key={section.title}><p className="text-xs font-bold uppercase tracking-wider text-violet-700">Part {index + 1}</p><h2 className="mt-2 text-xl font-bold text-slate-950">{section.title}</h2><p className="mt-2 leading-7 text-slate-600">{section.body}</p></section>)}
      </div>
      {related.length > 0 && <aside className="mt-10 rounded-2xl bg-violet-50 p-5"><h2 className="font-bold text-violet-950">Explore related resources</h2><div className="mt-3 flex flex-wrap gap-2">{related.map((resource) => <Link key={resource.id} to={`/platforms/${resource.id}`} className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-violet-800 hover:bg-violet-100">{resource.name} →</Link>)}</div></aside>}
      <Link className="mt-8 inline-block text-sm font-semibold text-violet-700 hover:text-violet-900" to="/guides">← All guides</Link>
    </article>
  )
}
