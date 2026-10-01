import Breadcrumb from '../components/common/Breadcrumb.jsx'
import SectionHeader from '../components/common/SectionHeader.jsx'
import { RoadmapCard } from '../components/cards/Cards.jsx'
import { roadmapYears } from '../data/roadmaps.js'
import CTASection from '../components/common/CTASection.jsx'

export default function RoadmapPage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Roadmap' }]} />
      <SectionHeader eyebrow="A map, not a mandate" title="A B.Tech learning roadmap" description="Use these stages to understand what might come next. You can explore at your own pace and adapt the sequence to your goals." />
      <div className="mb-8 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950"><strong>Make it your own.</strong> Courses, prior experience, interests, and career goals vary. This roadmap is a flexible guide, not a guarantee or a required sequence.</div>
      <div className="relative space-y-4 before:absolute before:bottom-5 before:left-[17px] before:top-5 before:w-px before:bg-violet-200 sm:before:left-5">
        {roadmapYears.map((roadmap, index) => (
          <div key={roadmap.id} className="relative pl-10 sm:pl-12">
            <span className="absolute left-0 top-6 grid size-9 place-items-center rounded-full border-4 border-white bg-violet-600 text-xs font-bold text-white shadow-sm">{index + 1}</span>
            <RoadmapCard roadmap={roadmap} index={index} />
          </div>
        ))}
      </div>
      <div className="mt-12"><CTASection title="Choose your next small step" description="Tell us your year and current interest to get a simple suggested path." buttonText="Personalize my start" to="/start-here" /></div>
    </div>
  )
}
