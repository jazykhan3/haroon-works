// src/features/onboarding/components/OnboardingNavigation.jsx
import React from 'react';
import { Button } from 'antd'; // Use AntD Button

const OnboardingNavigation = ({
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
        type="ghost"
        onClick={onBack}
        disabled={currentStep === 1}
        className="bg-transparent border disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 disabled:bg-transparent disabled:hover:bg-orange-gradient-hover hover:bg-orange-gradient-hover text-black hover:text-black text-base font-bold leading-4 py-4 px-6 w-fit h-auto" // Tailwind for styling
      >
        Back
      </Button>
      <Button
        type="ghost" // AntD primary button style
        onClick={onNext}
        disabled={isNextDisabled} // Use the new prop here
        className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto" // Tailwind for styling
      >
        {isLastStep ? 'Log In' : 'Next'}
      </Button>
    </div>
  );
};

export default OnboardingNavigation; 