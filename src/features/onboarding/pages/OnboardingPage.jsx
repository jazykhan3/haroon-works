import React, { useState, useEffect } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { Spin, Alert, Image } from 'antd'; 

import Step1PhoneNumber from '../components/Step1number';
import Step2OTP from '../components/Step2OTP';
import Step3success from '../components/Step3success';
import Step4group from '../components/Step4group';
import Step5MonthDropdown from '../components/Step5month';

import OnboardingNavigation from '../components/OnboardingNavigation';
import { useOnboardingProgress } from '../hooks/useOnboardingProgress';
import { useOnboardingStatus } from '../onboardingState';
import bgImage from '../../../assets/images/front-screen-bg.svg'
import Logo from '../../../assets/icons/Logo.svg'
import { useAuth } from '../../auth/AuthContext';
const OnboardingPage = () => {
  const navigate = useNavigate();
  const { currentStep, goToNextStep, goToPreviousStep, isLastStep, resetOnboarding } = useOnboardingProgress();
  const { onboardingData, markOnboardingComplete } = useOnboardingStatus();
    const { login } = useAuth();
  

  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStepValidation = (isValid) => {
    setIsCurrentStepValid(isValid);
  };
  console.log('onboardingData', onboardingData)
  useEffect(() => {
    switch (currentStep) {
      case 1:
       setIsCurrentStepValid(/^\+?\d{10,15}$/.test(onboardingData.phoneNumber));
        break;
      case 2:
        setIsCurrentStepValid(onboardingData.otp);
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
    setError(null);

    if (isLastStep) {
      setIsLoading(true);
      setError(null);
      try {
        console.log("Submitting Onboarding Data:", onboardingData);
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        login('1234567890')
        markOnboardingComplete(true); 
        resetOnboarding(); 
        navigate('/dashboard'); 
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
      case 3: return <Step3success onValidate={handleStepValidation} />;
      case 4: return <Step4group onValidate={handleStepValidation} />;
      case 5: return <Step5MonthDropdown onValidate={handleStepValidation} />;
      default: return <Navigate to="/dashboard" replace />; // Fallback
    }
  };

  return (
    <div className="bg-white flex md:flex-row flex-col-reverse md:gap-16 gap-0 w-full md:h-screen max-w-screen-xl mx-auto items-center px-4">
      <div className="w-full max-w-lg left flex flex-col md:pb-0 pb-8">
        <Image
          preview={false}
          className='max-w-[120px] h-[45px] object-contain mb-7'
          src={Logo}
        />
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
            isNextDisabled={!isCurrentStepValid || isLoading} 
          />
        </Spin>
      </div>
      <div className="right grow md:pt-0 pt-8 md:mb-0 mb-10">
        <Image
          preview={false}
          className='w-full md:max-w-2xl max-w-sm h-auto'
          src={bgImage}
        />
      </div>
    </div>
  );
};

export default OnboardingPage; 