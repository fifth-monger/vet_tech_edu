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
import { MedicalRecordLessonPage } from './pages/MedicalRecordLessonPage.jsx'
import { MedicalRecordReferencePage } from './pages/MedicalRecordReferencePage.jsx'
import { medicalRecordLesson } from './content/medicalRecord.js'
import { WordBuildingLessonPage } from './pages/WordBuildingLessonPage.jsx'
import { WordBuildingReferencePage } from './pages/WordBuildingReferencePage.jsx'
import { wordBuildingLesson } from './content/wordBuilding.js'
import { ClinicAbbreviationsLessonPage } from './pages/ClinicAbbreviationsLessonPage.jsx'
import { ClinicAbbreviationsReferencePage } from './pages/ClinicAbbreviationsReferencePage.jsx'
import { abbreviationLesson } from './content/clinicAbbreviations.js'
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
        <Route path="lessons/understanding-medical-records" element={<MedicalRecordLessonPage />} />
        <Route path="lessons/understanding-medical-records/quiz" element={<QuizPage lessonData={medicalRecordLesson} heading="Check your record-language skills" />} />
        <Route path="lessons/understanding-medical-records/reference" element={<MedicalRecordReferencePage />} />
        <Route path="lessons/building-medical-words" element={<WordBuildingLessonPage />} />
        <Route path="lessons/building-medical-words/quiz" element={<QuizPage lessonData={wordBuildingLesson} heading="Build the meaning" />} />
        <Route path="lessons/building-medical-words/reference" element={<WordBuildingReferencePage />} />
        <Route path="lessons/common-clinic-abbreviations" element={<ClinicAbbreviationsLessonPage />} />
        <Route path="lessons/common-clinic-abbreviations/quiz" element={<QuizPage lessonData={abbreviationLesson} heading="Translate the clinic shorthand" />} />
        <Route path="lessons/common-clinic-abbreviations/reference" element={<ClinicAbbreviationsReferencePage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
