import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

// Layouts
import FrontendLayout from './layouts/FrontendLayout';
import BackendLayout from './layouts/BackendLayout';

// Pages
import Login from './pages/Login';
import StoryPage from './pages/frontend/StoryPage';
import GuidePage from './pages/frontend/GuidePage';
import VisitPlannerPage from './pages/frontend/VisitPlannerPage';
import VisitPlanPage from './pages/frontend/VisitPlanPage';
import VoiceCompanionPage from './pages/frontend/VoiceCompanionPage';
import MyFootprintsPage from './pages/frontend/MyFootprintsPage';
import ARRecognizePage from './pages/frontend/ARRecognizePage';
import ARNavigationPage from './pages/frontend/ARNavigationPage';
import CommunityPage from './pages/frontend/CommunityPage';

import ArchivePage from './pages/backend/ArchivePage';
import ReviewQueue from './pages/backend/ReviewQueue';
import UploadPage from './pages/backend/UploadPage';
import GuideGenPage from './pages/backend/GuideGenPage';
import EvidencePage from './pages/backend/EvidencePage';
import PublishPage from './pages/backend/PublishPage';
import ReviewDetailPage from './pages/backend/ReviewDetailPage';
import StoryCardPage from './pages/backend/StoryCardPage';
import AIToolsPage from './pages/backend/AIToolsPage';
import VersionPage from './pages/backend/VersionPage';
import SettingsPage from './pages/backend/SettingsPage';
import ReviewHistoryPage from './pages/backend/ReviewHistoryPage';
import KnowledgeGraphPage from './pages/backend/KnowledgeGraphPage';
import DashboardPage from './pages/backend/DashboardPage';
import OpenPlatformPage from './pages/backend/OpenPlatformPage';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public / Visitor Routes */}
          <Route element={<FrontendLayout />}>
            <Route path="/" element={<Navigate to="/experience/temple-of-heaven" replace />} />
            <Route path="/experience/:slug" element={<StoryPage />} />
            <Route path="/experience/:slug/guide" element={<GuidePage />} />
            <Route path="/visit-planner/:slug" element={<VisitPlannerPage />} />
            <Route path="/visit-plan/:slug" element={<VisitPlanPage />} />
            <Route path="/my-footprints" element={<MyFootprintsPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Route>
          
          {/* Immersive Fullscreen Routes */}
          <Route path="/voice" element={<VoiceCompanionPage />} />
          <Route path="/ar-recognize" element={<ARRecognizePage />} />
          <Route path="/navigation" element={<ARNavigationPage />} />

          {/* Login Route */}
          <Route path="/login" element={<Login />} />

          {/* Backend Routes (Researcher / Reviewer / Admin) */}
          <Route element={<BackendLayout />}>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/evidence" element={<EvidencePage />} />
            <Route path="/guide-gen" element={<GuideGenPage />} />
            <Route path="/publish" element={<PublishPage />} />
            <Route path="/review" element={<ReviewQueue />} />
            <Route path="/review/:id" element={<ReviewDetailPage />} />
            <Route path="/story" element={<StoryCardPage />} />
            <Route path="/ai" element={<AIToolsPage />} />
            <Route path="/version" element={<VersionPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/review-history" element={<ReviewHistoryPage />} />
            <Route path="/knowledge-graph" element={<KnowledgeGraphPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/open-platform" element={<OpenPlatformPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
