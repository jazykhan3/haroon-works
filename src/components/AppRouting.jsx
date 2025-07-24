// src/components/AppRouting.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../features/auth/AuthContext';
import { OnboardingProvider, useOnboardingStatus } from '../features/onboarding/onboardingState';

// Layouts
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import OnboardingLayout from '../layouts/OnboardingLayout';

// Pages/Components for Routing
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Auth Feature Pages
import LoginPage from '../features/auth/pages/LoginPage';

// Onboarding Feature Pages
import OnboardingPage from '../features/onboarding/pages/OnboardingPage';

// Dashboard Feature Pages
import OverviewPage from '../features/dashboard/pages/OverView';
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
const ProtectedRoute = ({ children }) => {
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
  // If the user is on the onboarding page, but onboarding is COMPLETE, redirect to home.
  if (!requiresOnboarding && window.location.pathname === '/onboarding') {
      return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <OnboardingProvider>
          <Routes>
            {/* Default Route - Redirect to Home */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            
            {/* Public Routes */}
            <Route path="/home" element={<HomePage />} /> {/* Your landing page */}

            {/* Authentication Routes (Public, using AuthLayout) */}
            {/* These routes should NOT be wrapped by ProtectedRoute */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* ONBOARDING ROUTE */}
            {/* Show onboarding directly without authentication check */}
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
              {/* <Route path="reports" element={<ReportsPage />} /> 
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