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
            <Route path="/" element={<Navigate to="/onboarding" replace />} />
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
            <Route path="/dashboard/*" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route index element={<OverviewPage />} />
              <Route path="progress-overview" element={<ProgressOverviewPage />} />
              <Route path="leader-board" element={<LeaderBoardPage />} />
              <Route path="voice-revision" element={<VoiceRevisionPage />} />
              <Route path="settings" element={<SettingPage />} />
              <Route path="pricings" element={<PricingProPage />} />
              <Route path="referrals" element={<ReferrelPage />} />

              {/* <Route path="evaluation" element={<Evaluation />} /> */}
              <Route path='evaluation' element={<EvaluationsHistory />} />
              <Route path="evaluation-results" element={<EvaluationResults />} />
              <Route path="profile" element={<UserProfile />} />

              <Route path="priority-support" element={<PrioritySupportPage />} />
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