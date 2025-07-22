// src/features/onboarding/hooks/useOnboardingProgress.ts
import { useState } from 'react';

export const useOnboardingProgress = (totalSteps: number = 5) => {
    const [currentStep, setCurrentStep] = useState(1);

    const goToNextStep = () => {
        setCurrentStep(prevStep => Math.min(prevStep + 1, totalSteps));
    };

    const goToPreviousStep = () => {
        setCurrentStep(prevStep => Math.max(prevStep - 1, 1));
    };

    const isLastStep = currentStep === totalSteps;
    const isFirstStep = currentStep === 1;

    const resetOnboarding = () => {
        setCurrentStep(1);
    };

    return {
        currentStep,
        goToNextStep,
        goToPreviousStep,
        isLastStep,
        isFirstStep,
        resetOnboarding,
        totalSteps,
    };
};