import { Link } from 'react-router-dom'

export default function CTASection({ title, description, buttonText = 'Start here', to = '/start-here' }) {
  return (
    <section className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 text-white sm:px-10 sm:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="mb-2 text-sm font-semibold text-violet-300">One step at a time</p>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">{description}</p>
        </div>
        <Link className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-violet-100" to={to}>
          {buttonText}<span className="ml-2" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
