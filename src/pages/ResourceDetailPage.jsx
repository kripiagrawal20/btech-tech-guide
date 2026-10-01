import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import CTASection from '../components/common/CTASection.jsx'
import { findResource } from '../data/resources.js'

function DetailSection({ title, children }) {
  return <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"><h2 className="font-bold text-slate-950">{title}</h2><div className="mt-2 text-sm leading-6 text-slate-600">{children}</div></section>
}

export default function ResourceDetailPage() {
  const { id } = useParams()
  const resource = findResource(id)
  if (!resource) return <div className="py-16 text-center"><h1 className="text-2xl font-bold text-slate-950">Resource not found</h1><p className="mt-3 text-slate-600">This resource may have moved or is not part of this guide yet.</p><Link className="mt-5 inline-block font-semibold text-violet-700" to="/platforms">Browse platforms →</Link></div>

  return (
    <article>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Platforms', to: '/platforms' }, { label: resource.name }]} />
      <header className="mb-8 rounded-3xl bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-10">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-200">{resource.category} · {resource.level}</span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{resource.name}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">{resource.tagline}</p>
        <a className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-violet-100" href={resource.url} target="_blank" rel="noreferrer">Visit official website <span className="ml-2" aria-hidden="true">↗</span></a>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <DetailSection title="What is it?">{resource.what}</DetailSection>
        <DetailSection title="Why does it matter?">{resource.why}</DetailSection>
        <DetailSection title="Who should use it?">{resource.who}</DetailSection>
        <DetailSection title="When should I start?">{resource.when}</DetailSection>
        <DetailSection title="How do I use it?"><ol className="list-inside list-decimal space-y-1.5">{resource.how.map((step) => <li key={step}>{step}</li>)}</ol></DetailSection>
        <DetailSection title="Important terms"><div className="flex flex-wrap gap-2">{resource.terms.map((term) => <span key={term} className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800">{term}</span>)}</div></DetailSection>
        <DetailSection title="Your first task"><p>{resource.firstTask}</p></DetailSection>
        <DetailSection title="What next?"><p>{resource.next}</p></DetailSection>
      </div>
      <div className="mt-10"><CTASection title="Connect this tool to your learning path" description="See how tools and skills fit across the B.Tech years, and choose the next topic that makes sense for you." buttonText="View the roadmap" to="/roadmap" /></div>
    </article>
  )
}
