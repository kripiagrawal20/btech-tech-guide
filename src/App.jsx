import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import StartHerePage from './pages/StartHerePage.jsx'
import RoadmapPage from './pages/RoadmapPage.jsx'
import PlatformsPage from './pages/PlatformsPage.jsx'
import ResourceDetailPage from './pages/ResourceDetailPage.jsx'
import GlossaryPage from './pages/GlossaryPage.jsx'
import CareersPage from './pages/CareersPage.jsx'
import CareerDetailPage from './pages/CareerDetailPage.jsx'
import GuidesPage from './pages/GuidesPage.jsx'
import GuideDetailPage from './pages/GuideDetailPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import InternshipsPage from './pages/InternshipsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="start-here" element={<StartHerePage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="platforms" element={<PlatformsPage />} />
        <Route path="platforms/:id" element={<ResourceDetailPage />} />
        <Route path="glossary" element={<GlossaryPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="careers/:id" element={<CareerDetailPage />} />
        <Route path="guides" element={<GuidesPage />} />
        <Route path="guides/:id" element={<GuideDetailPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="internships" element={<InternshipsPage />} />
        <Route path="opportunities/projects-hackathons" element={<Navigate to="/projects" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
