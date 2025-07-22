// src/features/onboarding/onboardingState.ts
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the shape of your onboarding data
interface OnboardingData {
  phoneNumber: string;
  otp: string;
  choiceRadio: string;
  choiceCheckbox1: boolean;
  choiceCheckbox2: boolean;
  monthName: string;
}

// Define the shape of the context values
interface OnboardingContextType {
  onboardingData: OnboardingData;
  updateOnboardingData: (data: Partial<OnboardingData>) => void;
  requiresOnboarding: boolean;
  markOnboardingComplete: (status: boolean) => void;
  resetOnboardingData: () => void;
  isLoadingOnboardingStatus: boolean; // New: to indicate if onboarding status check is in progress
}

const defaultOnboardingData: OnboardingData = {
  phoneNumber: '',
  otp: '',
  choiceRadio: '',
  choiceCheckbox1: false,
  choiceCheckbox2: false,
  monthName: '',
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [onboardingData, setOnboardingData] = useState<OnboardingData>(defaultOnboardingData);
  const [requiresOnboarding, setRequiresOnboarding] = useState<boolean>(true); // Set to true initially for new users
  const [isLoadingOnboardingStatus, setIsLoadingOnboardingStatus] = useState<boolean>(true); // Initially true

  useEffect(() => {
    // In a real app, you'd fetch this from the backend based on user ID
    // For now, simulate it with local storage
    const onboardedFlag = localStorage.getItem('onboardingComplete');
    if (onboardedFlag === 'true') {
      setRequiresOnboarding(false);
    }
    setIsLoadingOnboardingStatus(false);
  }, []);

  const updateOnboardingData = (data: Partial<OnboardingData>) => {
    setOnboardingData(prevData => ({ ...prevData, ...data }));
  };

  const markOnboardingComplete = (status: boolean) => {
    setRequiresOnboarding(!status); // If complete, then requiresOnboarding is false
    localStorage.setItem('onboardingComplete', status ? 'true' : 'false'); // Persist
  };

  const resetOnboardingData = () => {
    setOnboardingData(defaultOnboardingData);
  };

  // FIX: This 'return (' is now correct
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