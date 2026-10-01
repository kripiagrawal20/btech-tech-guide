import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl py-16 text-center sm:py-24">
      <p className="text-sm font-bold uppercase tracking-widest text-violet-700">404 · Not found</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">We couldn't find that page</h1>
      <p className="mt-3 text-slate-600">The link may be outdated, or the page may have moved.</p>
      <Link className="mt-7 inline-flex min-h-11 items-center rounded-xl bg-violet-700 px-5 py-3 text-sm font-semibold text-white hover:bg-violet-800" to="/">Back to home</Link>
    </div>
  )
}
