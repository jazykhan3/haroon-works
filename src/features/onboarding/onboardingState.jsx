// src/features/onboarding/onboardingState.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const defaultOnboardingData = {
  phoneNumber: '',
  otp: '',
  choiceRadio: '',
  choiceCheckbox1: false,
  choiceCheckbox2: false,
  monthName: '',
};

const OnboardingContext = createContext(undefined);

export const OnboardingProvider = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState(defaultOnboardingData);
  const [requiresOnboarding, setRequiresOnboarding] = useState(true); // Set to true initially for new users
  const [isLoadingOnboardingStatus, setIsLoadingOnboardingStatus] = useState(true); // Initially true

  useEffect(() => {
    // In a real app, you'd fetch this from the backend based on user ID
    // For now, simulate it with local storage
    const onboardedFlag = localStorage.getItem('onboardingComplete');
    if (onboardedFlag === 'true') {
      setRequiresOnboarding(false);
    }
    setIsLoadingOnboardingStatus(false);
  }, []);

  const updateOnboardingData = (data) => {
    setOnboardingData(prevData => ({ ...prevData, ...data }));
  };

  const markOnboardingComplete = (status) => {
    setRequiresOnboarding(!status); // If complete, then requiresOnboarding is false
    localStorage.setItem('onboardingComplete', status ? 'true' : 'false'); // Persist
  };

  const resetOnboardingData = () => {
    setOnboardingData(defaultOnboardingData);
  };

  return (
    <OnboardingContext.Provider value={{
      onboardingData,
      updateOnboardingData,
      requiresOnboarding,
      markOnboardingComplete,
      resetOnboardingData,
      isLoadingOnboardingStatus,
    }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingStatus = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboardingStatus must be used within an OnboardingProvider');
  }
  return context;
}; 