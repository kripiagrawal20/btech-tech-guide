import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import CTASection from '../components/common/CTASection.jsx'
import { careers } from '../data/careers.js'
import { findResource } from '../data/resources.js'

export default function CareerDetailPage() {
  const { id } = useParams()
  const career = careers.find((item) => item.id === id)
  if (!career) return <div className="py-16 text-center"><h1 className="text-2xl font-bold text-slate-950">Career path not found</h1><Link className="mt-5 inline-block font-semibold text-violet-700" to="/careers">Browse career paths →</Link></div>
  const related = career.resourceIds.map(findResource).filter(Boolean)
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Careers', to: '/careers' }, { label: career.title }]} />
      <header className="mb-8 rounded-3xl bg-blue-950 px-6 py-8 text-white sm:px-10 sm:py-10">
        <p className="text-sm font-semibold text-blue-200">Career path overview</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{career.title}</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-blue-100">{career.summary}</p>
      </header>
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">Skills to explore</h2><div className="mt-4 flex flex-wrap gap-2">{career.skills.map((skill) => <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-900" key={skill}>{skill}</span>)}</div></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">Technologies you may encounter</h2><div className="mt-4 flex flex-wrap gap-2">{career.technologies.map((item) => <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700" key={item}>{item}</span>)}</div></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">A beginner roadmap</h2><ol className="mt-4 space-y-3">{career.roadmap.map((step, index) => <li key={step} className="flex gap-3 text-sm leading-6 text-slate-600"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-800">{index + 1}</span>{step}</li>)}</ol></section>
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">Project ideas</h2><ul className="mt-4 space-y-2">{career.projects.map((project) => <li className="flex gap-2 text-sm leading-6 text-slate-600" key={project}><span className="text-violet-600" aria-hidden="true">✦</span>{project}</li>)}</ul></section>
      </div>
      <section className="mt-10"><SectionHeader title="Useful platforms to explore" description="These are starting resources, not required credentials or endorsements." /><div className="flex flex-wrap gap-3">{related.map((resource) => <Link key={resource.id} to={`/platforms/${resource.id}`} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:border-violet-300 hover:text-violet-800">{resource.name} →</Link>)}</div></section>
      <div className="mt-10"><CTASection title="Explore the skills step by step" description="Use the year-wise roadmap to connect these topics to your current stage." buttonText="View the roadmap" to="/roadmap" /></div>
    </div>
  )
}
