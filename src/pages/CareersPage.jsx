import { useMemo, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import SearchBar from '../components/common/SearchBar.jsx'
import CTASection from '../components/common/CTASection.jsx'
import { CareerCard } from '../components/cards/Cards.jsx'
import { careers } from '../data/careers.js'

export default function CareersPage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => careers.filter((career) => `${career.title} ${career.summary} ${career.skills.join(' ')}`.toLowerCase().includes(query.trim().toLowerCase())), [query])
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
      <SectionHeader eyebrow="Explore, don't compare" title="Career paths in tech" description="Learn what different roles may involve and what skills to explore. These are starting descriptions; roles differ between organizations." />
      <div className="mb-7 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-950">No role here is ranked as better than another. Explore based on your interests, and remember that job titles and responsibilities can vary.</div>
      <SearchBar value={query} onChange={setQuery} placeholder="Search career paths or skills…" label="Search careers" />
      <p className="mt-4 text-sm text-slate-500" aria-live="polite">{filtered.length} career paths</p>
      {filtered.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((career) => <CareerCard key={career.id} career={career} />)}</div> : <p className="mt-6 text-center text-sm text-slate-500">No careers match that search.</p>}
      <div className="mt-12"><CTASection title="Curious, but not sure yet?" description="Start from your year and interests, then use the suggested resources as a low-pressure way to explore." /></div>
    </div>
  )
}
