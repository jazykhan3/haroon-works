// src/components/AppRouting.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingProvider, useOnboardingStatus } from '../features/onboarding/onboardingState';

// Layouts
import OnboardingLayout from '../layouts/OnboardingLayout';

// Pages/Components for Routing
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Onboarding Feature Pages
import OnboardingPage from '../features/onboarding/pages/OnboardingPage';

const AppRouter = () => {
  return (
    <Router>
      <OnboardingProvider>
        <Routes>
          {/* Default Route - Redirect to Onboarding */}
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          
          {/* Public Routes */}
          <Route path="/home" element={<HomePage />} />

          {/* ONBOARDING ROUTE */}
          <Route
            path="/onboarding"
            element={
              <OnboardingLayout>
                <OnboardingPage />
              </OnboardingLayout>
            }
          />

          {/* Catch-all 404 Not Found Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </OnboardingProvider>
    </Router>
  );
};

export default AppRouter; 