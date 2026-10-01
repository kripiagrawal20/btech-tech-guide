import { useMemo, useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import SearchBar from '../components/common/SearchBar.jsx'
import { GuideCard } from '../components/cards/Cards.jsx'
import { guides } from '../data/guides.js'

export default function GuidesPage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => guides.filter((guide) => `${guide.title} ${guide.summary} ${guide.category}`.toLowerCase().includes(query.trim().toLowerCase())), [query])
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Guides' }]} />
      <SectionHeader eyebrow="Practical, approachable explainers" title="Guides for your next step" description="Short introductions to the tools, skills, and opportunities students often encounter." />
      <SearchBar value={query} onChange={setQuery} placeholder="Search guides…" label="Search guides" />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((guide) => <GuideCard key={guide.id} guide={guide} />)}</div>
      {filtered.length === 0 && <p className="mt-8 text-center text-sm text-slate-500">No guides match that search.</p>}
    </div>
  )
}
