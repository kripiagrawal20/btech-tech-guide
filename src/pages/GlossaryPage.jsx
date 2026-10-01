import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import SearchBar from '../components/common/SearchBar.jsx'
import { glossary } from '../data/glossary.js'

export default function GlossaryPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('term') ?? ''
  const setQuery = (value) => {
    const next = new URLSearchParams(searchParams)
    if (value) next.set('term', value)
    else next.delete('term')
    setSearchParams(next, { replace: true })
  }
  const filtered = useMemo(() => glossary.filter(({ term, definition }) => `${term} ${definition}`.toLowerCase().includes(query.trim().toLowerCase())), [query])
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Glossary' }]} />
      <SectionHeader eyebrow="Tech terms, in plain language" title="Beginner-friendly glossary" description="Look up terms you hear in class, tutorials, and project conversations." />
      <SearchBar value={query} onChange={setQuery} placeholder="Search a term or its meaning…" label="Search glossary" />
      <p className="mt-4 text-sm text-slate-500" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'term' : 'terms'}</p>
      {filtered.length ? <dl className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-7">{filtered.map(({ id, term, definition }) => <div key={id} className="py-5 sm:grid sm:grid-cols-[minmax(10rem,0.35fr)_1fr] sm:gap-6"><dt className="font-bold text-slate-950">{term}</dt><dd className="mt-1 text-sm leading-6 text-slate-600 sm:mt-0">{definition}</dd></div>)}</dl> : <div className="mt-5 rounded-2xl border border-dashed border-slate-300 p-10 text-center"><p className="font-semibold text-slate-800">No matching terms</p><p className="mt-2 text-sm text-slate-500">Try searching for a different word.</p></div>}
    </div>
  )
}
