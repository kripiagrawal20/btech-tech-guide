import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import Checklist from '../components/common/Checklist.jsx'
import CTASection from '../components/common/CTASection.jsx'
import { projectIdeas, hackathonBasics } from '../data/projects.js'
import { Link } from 'react-router-dom'

const projectChecklist = [
  'Choose a small problem you understand.',
  'Write down what the first version should do.',
  'Build and test one feature at a time.',
  'Explain the project and your contribution in a README.',
]

export default function ProjectsPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Projects & Hackathons' }]} />
      <SectionHeader eyebrow="Learn by making" title="Projects & hackathons" description="Projects let you apply ideas and learn from decisions, mistakes, and iteration. You can start small—your first project does not need to be original or complex." />
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <span className="text-2xl text-violet-700" aria-hidden="true">✦</span>
          <h2 className="mt-3 text-lg font-bold text-slate-950">What is a project?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">A project is a piece of work where you apply skills to a goal or problem. It might be a small program, a website, a design, or an analysis.</p>
          <h3 className="mt-5 font-semibold text-slate-900">Why projects matter</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">They help you practice turning an idea into working steps and give you something concrete to discuss. The process and your explanation matter more than a long feature list.</p>
        </section>
        <Checklist title="A sensible first project" items={projectChecklist} />
      </div>
      <section className="mt-10">
        <SectionHeader eyebrow="Start with something manageable" title="Beginner project ideas" description="Use these as prompts. Keep the first version small, and add features only when the basics work." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{projectIdeas.map((idea) => <article key={idea.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800">{idea.level}</span><h3 className="mt-4 font-bold text-slate-950">{idea.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{idea.description}</p><div className="mt-4 flex flex-wrap gap-1.5">{idea.skills.map((skill) => <span key={skill} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">{skill}</span>)}</div></article>)}</div>
      </section>
      <section className="mt-12">
        <SectionHeader eyebrow="Build together, learn quickly" title="What is a hackathon?" description="A hackathon is a time-bounded event where people work individually or in teams on a challenge, then often demonstrate or present what they made. Formats and rules vary by event." />
        <div className="grid gap-4 sm:grid-cols-3">{hackathonBasics.map((item, index) => <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-wider text-violet-700">0{index + 1}</p><h3 className="mt-2 font-bold text-slate-950">{item.title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p></article>)}</div>
      </section>
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-slate-950">Use GitHub to document your project</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Keep the code in a repository, make commits that describe changes, and add a README with the purpose, setup, and current status. If working with others, agree on branches and review changes together.</p>
        <Link className="mt-4 inline-block text-sm font-semibold text-violet-700 hover:text-violet-900" to="/platforms/github">Understand GitHub →</Link>
      </section>
      <div className="mt-12"><CTASection title="Want to turn a project into a showcase?" description="Learn how to describe your work and choose a few examples for a simple portfolio." buttonText="Read the portfolio guide" to="/guides/portfolio" /></div>
    </div>
  )
}
