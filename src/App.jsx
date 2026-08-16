import { Route, Routes } from 'react-router'
import { AppShell } from './components/AppShell.jsx'
import { CoursePage } from './pages/CoursePage.jsx'
import { DashboardPage } from './pages/DashboardPage.jsx'
import { LessonPage } from './pages/LessonPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { ProgressPage } from './pages/ProgressPage.jsx'
import { QuizPage } from './pages/QuizPage.jsx'
import { ReferencePage } from './pages/ReferencePage.jsx'
import { ReviewPage } from './pages/ReviewPage.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<DashboardPage />} />
        <Route path="courses" element={<CoursePage />} />
        <Route path="courses/medical-terminology" element={<CoursePage />} />
        <Route path="lessons/anatomical-directional-terms" element={<LessonPage />} />
        <Route path="lessons/anatomical-directional-terms/quiz" element={<QuizPage />} />
        <Route path="lessons/anatomical-directional-terms/reference" element={<ReferencePage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
