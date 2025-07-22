// src/components/AppRouting.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../features/auth/AuthContext.tsx';
import { OnboardingProvider, useOnboardingStatus } from '../features/onboarding/onboardingState.ts';

// Layouts
import AuthLayout from '../layouts/AuthLayout.tsx';
import DashboardLayout from '../layouts/DashboardLayout.tsx';
import OnboardingLayout from '../layouts/OnboardingLayout.tsx';

// Pages/Components for Routing
import HomePage from '../pages/HomePage.tsx';
import NotFoundPage from '../pages/NotFoundPage.tsx';

// Auth Feature Pages
import LoginPage from '../features/auth/pages/LoginPage.tsx';

// Onboarding Feature Pages
import OnboardingPage from '../features/onboarding/pages/OnboardingPage.tsx';

// Dashboard Feature Pages
// import OverviewPage from '../features/dashboard/pages/';
// import ReportsPage from '../features/dashboard/pages/ReportsPage';
// import SettingsPage from '../features/dashboard/pages/SettingsPage';
// import UsersPage from '../features/dashboard/pages/UsersPage';

/**
 * A wrapper component to protect routes and handle onboarding redirection.
 *
 * - If not authenticated, redirects to /login.
 * - If authenticated but requires onboarding, redirects to /onboarding.
 * - Otherwise, renders children.
 */
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, isLoading: authLoading } = useAuth(); // Assume useAuth provides isLoading
  const { requiresOnboarding, isLoading: onboardingLoading } = useOnboardingStatus(); // Assume useOnboardingStatus provides isLoading

  // While loading auth or onboarding status, show nothing or a loader
  if (authLoading || onboardingLoading) {
    return <div>Loading application...</div>; // Or a proper AntD Spin component
  }

  // Case 1: Not authenticated, always go to login (unless it IS the login/register page)
  if (!isAuthenticated) {
    // This check is important to prevent infinite redirects if /login is protected
    // The actual /login route should NOT be wrapped by ProtectedRoute
    return <Navigate to="/login" replace />;
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


const AppRouter: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <OnboardingProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} /> {/* Your landing page */}

            {/* Authentication Routes (Public, using AuthLayout) */}
            {/* These routes should NOT be wrapped by ProtectedRoute */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* ONBOARDING ROUTE */}
            {/* This route needs to check authentication, but ALSO check if onboarding is needed.
                It can redirect if onboarding is NOT needed, even if authenticated. */}
            <Route
              path="/onboarding"
              element={
                <ProtectedRoute>
                  <OnboardingLayout>
                    <OnboardingPage />
                  </OnboardingLayout>
                </ProtectedRoute>
              }
            />

            {/* PROTECTED DASHBOARD ROUTES */}
            {/* All routes under /dashboard require authentication and completed onboarding */}
            <Route path="/dashboard/*" element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              {/* <Route index element={<OverviewPage />} /> 
              <Route path="reports" element={<ReportsPage />} /> 
              <Route path="settings" element={<SettingsPage />} />
              <Route path="users" element={<UsersPage />} />  */}
              {/* Add more dashboard sub-routes here */}
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