import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-800">B.Tech Tech-Guide</p>
          <p className="mt-1">Understand what to learn, why it matters, and what to do next.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="hover:text-violet-700" to="/start-here">Start here</Link>
          <Link className="hover:text-violet-700" to="/roadmap">Roadmap</Link>
          <Link className="hover:text-violet-700" to="/glossary">Glossary</Link>
          <Link className="hover:text-violet-700" to="/guides">Guides</Link>
        </div>
        <p>Independent student guide · Check official sources for current details.</p>
      </div>
    </footer>
  )
}
