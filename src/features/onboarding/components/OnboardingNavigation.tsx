// src/features/onboarding/components/OnboardingNavigation.tsx
import React from 'react';
import { Button } from 'antd'; // Use AntD Button

interface OnboardingNavigationProps {
  currentStep: number;
  totalSteps: number;
  onBack: () => void;
  onNext: () => void;
  isLastStep: boolean;
  isNextDisabled: boolean; // New prop
}

const OnboardingNavigation: React.FC<OnboardingNavigationProps> = ({
  currentStep,
  totalSteps,
  onBack,
  onNext,
  isLastStep,
  isNextDisabled, // Destructure new prop
}) => {
  return (
    <div className="flex justify-between mt-8">
      <Button
        onClick={onBack}
        disabled={currentStep === 1}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800" // Tailwind for styling
      >
        Back
      </Button>
      <Button
        type="primary" // AntD primary button style
        onClick={onNext}
        disabled={isNextDisabled} // Use the new prop here
        className="bg-indigo-600 hover:bg-indigo-700 text-white" // Tailwind for styling
      >
        {isLastStep ? 'Finish' : 'Next'}
      </Button>
    </div>
  );
};

export default OnboardingNavigation;