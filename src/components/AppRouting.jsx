// src/components/AppRouting.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../features/auth/AuthContext';
import { OnboardingProvider, useOnboardingStatus } from '../features/onboarding/onboardingState';

// Layouts
// import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import OnboardingLayout from '../layouts/OnboardingLayout';

// Pages/Components for Routing
import NotFoundPage from '../pages/NotFoundPage';

// Onboarding Feature Pages
import OnboardingPage from '../features/onboarding/pages/OnboardingPage';

// Dashboard Feature Pages
import OverviewPage from '../features/dashboard/pages/TestOverView';
import ProgressOverviewPage from '../features/dashboard/pages/ProgressOverView';
import LeaderBoardPage from '../features/dashboard/pages/LeaderBoard';
import VoiceRevisionPage from '../features/dashboard/pages/VoiceRevision';
import SettingPage from '../features/dashboard/pages/Settings';
import PricingProPage from '../features/dashboard/pages/PricingPro';
import ReferrelPage from '../features/dashboard/pages/Referrel';

import PrioritySupportPage from '../features/dashboard/pages/PrioritySupportPage';
import RequestHelpPage from '../features/dashboard/pages/RequestHelpPage';
import TalkToOriznPage from '../features/dashboard/pages/TalkToOriznPage';


// import Evaluation from '../features/dashboard/pages/not-useEvaluation';
import UserProfile from '../features/dashboard/pages/UserProfile';
import EvaluationsHistory from '../features/dashboard/pages/Evaluations';
import EvaluationResults from '../features/dashboard/pages/EvaluationResults';

import LoaderSpiner from './Spiner';
import AskAI from '../features/dashboard/pages/AskAI';
import AskAIRoutine from '../features/dashboard/pages/AskAIRoutine';
import Practice from '../features/dashboard/pages/Practice';
import Tests from '../features/dashboard/pages/Tests';
import TestInsights from '../features/dashboard/pages/TestInsights';
import TestResults from '../features/dashboard/pages/TestResults';
import FlashCardPage from '../features/dashboard/pages/FlashCards';
import FlashCardDetailPage from '../features/dashboard/components/flashcard/cardDetails';
import FlashCardDetailOverViewPage from '../features/dashboard/components/flashcard/cardDetailsOverview';
import RankersInsightsPage from '../features/dashboard/pages/RankersInsights';
import RankersCardDetailPage from '../features/dashboard/components/insightDetails/cardDetails';
import NewAttemptPage from '../features/dashboard/pages/NewAttempt';
import HowAttemptPage from '../features/dashboard/components/newattempts/howToAttempt';
import CorporateLawPage from '../features/dashboard/components/newattempts/corporateLaw';
import LandingPage from '../features/landingPage/LandingPage';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { requiresOnboarding, isLoading: onboardingLoading } = useOnboardingStatus();

  if (authLoading || onboardingLoading) {
    return <LoaderSpiner />;
  }

  // Case 1: Not authenticated, always go to login (unless it IS the onboarding)
  if (!isAuthenticated) {
    return <Navigate to="/onboarding" replace />;
  }

  // Case 2: Authenticated, but requires onboarding
  // If the user is authenticated AND needs onboarding, and they are NOT already on the onboarding path,
  // redirect them to the onboarding path.
  // Make sure this doesn't create a loop if the onboarding page itself is also protected by THIS same route.
  if (requiresOnboarding && window.location.pathname !== '/onboarding') {
    return <Navigate to="/onboarding" replace />;
  }

  // Case 3: Authenticated and onboarding is complete (or not required)
  // If the user is on the onboarding page, but onboarding is COMPLETE, redirect to dashboard.
  if (!requiresOnboarding && window.location.pathname === '/onboarding') {
    return <Navigate to="/dashboard" replace />;
  }
  return <>{children}</>;

};

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <OnboardingProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LandingPage />} />
            <Route
              path="/onboarding"
              element={
                <OnboardingLayout>
                  <OnboardingPage />
                </OnboardingLayout>
              }
            />

            {/* PROTECTED DASHBOARD ROUTES */}
            {/* All routes under /dashboard require authentication and completed onboarding */}
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<OverviewPage />} />
              <Route
                path="progress-overview"
                element={<ProgressOverviewPage />}
              />
              <Route path="leader-board" element={<LeaderBoardPage />} />
              <Route path="voice-revision" element={<VoiceRevisionPage />} />
              <Route path="settings" element={<SettingPage />} />
              <Route path="pricings" element={<PricingProPage />} />
              <Route path="referrals" element={<ReferrelPage />} />

              <Route path="ask-ai" element={<AskAI />} />
              <Route path="ask-ai-routine" element={<AskAIRoutine />} />
              <Route path="practice" element={<Practice />} />
              <Route path="tests" element={<Tests />} />
              <Route path="test-insights" element={<TestInsights />} />
              <Route path="test-results" element={<TestResults />} />
              <Route path="flash-cards" element={<FlashCardPage />} />
              <Route path="card-details" element={<FlashCardDetailPage />} />
              <Route
                path="card-overview"
                element={<FlashCardDetailOverViewPage />}
              />
              <Route
                path="rankers-insights"
                element={<RankersInsightsPage />}
              />
              <Route
                path="rankers-details"
                element={<RankersCardDetailPage />}
              />
              <Route path="new-attempt" element={<NewAttemptPage />} />
              <Route path="how-attempt" element={<HowAttemptPage />} />
              <Route path="corporate-law" element={<CorporateLawPage />} />

              {/* <Route path="evaluation" element={<Evaluation />} /> */}
              <Route path="evaluation" element={<EvaluationsHistory />} />
              <Route
                path="evaluation-results"
                element={<EvaluationResults />}
              />
              <Route path="profile" element={<UserProfile />} />

              <Route
                path="priority-support"
                element={<PrioritySupportPage />}
              />
              <Route path="request-help" element={<RequestHelpPage />} />
              <Route path="voice-mode" element={<TalkToOriznPage />} />
            </Route>
            {/* Catch-all 404 Not Found Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </OnboardingProvider>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter; 