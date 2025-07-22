// src/features/onboarding/pages/OnboardingPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spin, Alert } from 'antd'; // Import AntD components for loading/error

// Import individual step components
import Step1PhoneNumber from '../components/Step1PhoneNumber';
import Step2OTP from '../components/Step2OTP';
import Step3RadioChoice from '../components/Step3RadioChoice';
import Step4CheckboxChoice from '../components/Step4CheckboxChoice';
import Step5MonthDropdown from '../components/Step5MonthDropdown';

import OnboardingNavigation from '../components/OnboardingNavigation';
import { useOnboardingProgress } from '../hooks/useOnboardingProgress';
import { useOnboardingStatus } from '../onboardingState';

const OnboardingPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, goToPreviousStep, isLastStep, resetOnboarding } = useOnboardingProgress();
  const { onboardingData, markOnboardingComplete } = useOnboardingStatus();

  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function passed to each step to update its validity
  const handleStepValidation = (isValid: boolean) => {
    setIsCurrentStepValid(isValid);
  };

  // Re-evaluate validity when step changes or data changes
  useEffect(() => {
    // This is a simplified check. In a real app, you might have more complex validation.
    switch (currentStep) {
      case 1:
        setIsCurrentStepValid(/^\d{10,15}$/.test(onboardingData.phoneNumber));
        break;
      case 2:
        setIsCurrentStepValid(/^\d{6}$/.test(onboardingData.otp));
        break;
      case 3:
        setIsCurrentStepValid(!!onboardingData.choiceRadio);
        break;
      case 4:
        setIsCurrentStepValid(onboardingData.choiceCheckbox1 || onboardingData.choiceCheckbox2);
        break;
      case 5:
        setIsCurrentStepValid(!!onboardingData.monthName);
        break;
      default:
        setIsCurrentStepValid(false);
        break;
    }
  }, [currentStep, onboardingData]);


  const handleNext = async () => {
    if (!isCurrentStepValid) {
      setError("Please complete the current step before proceeding.");
      return;
    }
    setError(null); // Clear any previous errors

    if (isLastStep) {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate API call to save onboarding data
        console.log("Submitting Onboarding Data:", onboardingData);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request

        markOnboardingComplete(true); // Mark onboarding as complete in global state
        resetOnboarding(); // Reset local step state
        navigate('/dashboard'); // Redirect to dashboard
      } catch (err) {
        setError("Failed to complete onboarding. Please try again.");
        console.error("Onboarding submission error:", err);
      } finally {
        setIsLoading(false);
      }
    } else {
      goToNextStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1PhoneNumber onValidate={handleStepValidation} />;
      case 2: return <Step2OTP onValidate={handleStepValidation} />;
      case 3: return <Step3RadioChoice onValidate={handleStepValidation} />;
      case 4: return <Step4CheckboxChoice onValidate={handleStepValidation} />;
      case 5: return <Step5MonthDropdown onValidate={handleStepValidation} />;
      default: return <Navigate to="/dashboard" replace />; // Fallback
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Onboarding - Step {currentStep} of 5
        </h2>
        {error && (
          <Alert
            message="Error"
            description={error}
            type="error"
            showIcon
            closable
            onClose={() => setError(null)}
            className="mb-4"
          />
        )}
        <Spin spinning={isLoading} size="large">
          <div className="mb-8">{renderStep()}</div>
          <OnboardingNavigation
            currentStep={currentStep}
            totalSteps={5}
            onBack={goToPreviousStep}
            onNext={handleNext}
            isLastStep={isLastStep}
            isNextDisabled={!isCurrentStepValid || isLoading} // Disable Next button if invalid or loading
          />
        </Spin>
      </div>
    </div>
  );
};

export default OnboardingPage;