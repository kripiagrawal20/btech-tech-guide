import { Link } from 'react-router-dom'
import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Checklist from '../components/common/Checklist.jsx'
import CTASection from '../components/common/CTASection.jsx'

const preparation = [
  'Read the role description and eligibility requirements carefully.',
  'Prepare a concise resume with accurate project details.',
  'Make sure any portfolio and code links open and are easy to understand.',
  'Practice explaining your decisions and what you learned.',
]

const guidance = [
  { title: 'What is an internship?', body: 'A time-bounded work or learning experience with an organization. Tasks, supervision, compensation, and eligibility vary; read the details of each opportunity.' },
  { title: 'When should I start?', body: 'There is no single correct year. Explore early to learn what roles ask for, then apply when your skills, schedule, and the listing requirements are a reasonable match.' },
  { title: 'Where can I search?', body: 'Check organization career pages, your college placement or career office, and established job platforms. Verify that a listing and contact are genuine before sharing personal information.' },
  { title: 'How do I prepare?', body: 'Be ready to discuss relevant coursework, projects, problem-solving, and what you want to learn. Interview formats vary, so review the role and any instructions provided.' },
]

export default function InternshipsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Internships' }]} />
      <SectionHeader eyebrow="Explore with care" title="A student guide to internships" description="An internship can offer a chance to learn in a work setting. Requirements, timelines, and experience differ by role and organization." />
      <div className="grid gap-4 sm:grid-cols-2">{guidance.map((item) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><h2 className="font-bold text-slate-950">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p></article>)}</div>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Checklist title="Application preparation" items={preparation} />
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <h2 className="font-bold text-amber-950">Protect your time and information</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-amber-950">
            <li>• Verify openings using an organization’s official website or trusted campus contact.</li>
            <li>• Be cautious of requests for payment to secure an internship or interview.</li>
            <li>• Do not share passwords, one-time codes, or unnecessary sensitive information.</li>
            <li>• Confirm schedule, responsibilities, compensation, and terms before accepting.</li>
          </ul>
        </section>
      </div>
      <section className="mt-10 rounded-2xl bg-slate-950 p-6 text-white sm:p-8">
        <h2 className="text-xl font-bold">Make your work easy to understand</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">A resume gives a quick overview. A portfolio or GitHub repository can provide examples. LinkedIn can help you keep professional information in one place. Use all of them accurately—none guarantees an internship.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/guides/resume" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-violet-100">Resume guide</Link>
          <Link to="/guides/portfolio" className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Portfolio guide</Link>
          <Link to="/platforms/linkedin" className="rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">LinkedIn explained</Link>
        </div>
      </section>
      <div className="mt-12"><CTASection title="Build your experience step by step" description="Explore the roadmap and find skills or projects that suit your current stage." buttonText="View the B.Tech roadmap" to="/roadmap" /></div>
    </div>
  )
}
