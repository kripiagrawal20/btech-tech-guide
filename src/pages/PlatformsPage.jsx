import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import SearchBar from '../components/common/SearchBar.jsx'
import { ResourceCard } from '../components/cards/Cards.jsx'
import { resources } from '../data/resources.js'
import { categories } from '../data/navigation.js'

export default function PlatformsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const category = searchParams.get('category') ?? 'All'
  const filtered = useMemo(() => resources.filter((resource) => {
    const matchesCategory = category === 'All' || resource.category === category
    const text = `${resource.name} ${resource.tagline} ${resource.category}`.toLowerCase()
    return matchesCategory && text.includes(query.trim().toLowerCase())
  }), [category, query])
  const chooseCategory = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setSearchParams(next, { replace: true })
  }

  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Platforms' }]} />
      <SectionHeader eyebrow="Tools are means, not milestones" title="Platforms and resources" description="Find out what a platform is for, when it might be useful, and how to take a small first step. We explain; official sites provide the current product details." />
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <SearchBar value={query} onChange={setQuery} placeholder="Search tools, platforms, or topics…" label="Search platforms" />
        <select className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-100" value={category} onChange={(event) => chooseCategory(event.target.value)} aria-label="Filter by category">
          <option>All</option>{categories.map((item) => <option key={item.name}>{item.name}</option>)}
        </select>
      </div>
      <div className="mt-7 flex items-center justify-between text-sm text-slate-500"><span>{filtered.length} {filtered.length === 1 ? 'resource' : 'resources'}</span><button type="button" onClick={() => { setQuery(''); chooseCategory('All') }} className="font-medium text-violet-700 hover:text-violet-900">Clear filters</button></div>
      {filtered.length ? <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{filtered.map((resource) => <ResourceCard key={resource.id} resource={resource} />)}</div> : <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-10 text-center"><p className="font-semibold text-slate-800">No matching resources</p><p className="mt-2 text-sm text-slate-500">Try a different search or category.</p></div>}
    </div>
  )
}
