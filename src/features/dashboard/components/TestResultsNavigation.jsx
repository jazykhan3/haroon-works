import React from 'react';
import { Button } from 'antd';

const TestResultsNavigation = ({
  currentQuestion,
  totalQuestions,
  onBack,
  onNext,
  isLastQuestion,
  isFirstQuestion,
}) => {
  return (
    <div className="mt-4 w-full justify-end flex">
      <div className="flex justify-between mt-4 gap-6">
        <Button
          type="ghost"
          onClick={onBack}
          disabled={isFirstQuestion}
          className="bg-transparent border disabled:border-gray-300 border-gray-200 disabled:text-gray-400 disabled:bg-gray-50 text-black hover:text-black text-base font-bold leading-4 py-4 px-10 w-fit h-auto rounded-xl shadow-sm bg-white"
        >
          Previous
        </Button>
        
        <Button
          type="ghost"
          onClick={onNext}
          disabled={isLastQuestion}
          className="bg-transparent border disabled:border-gray-300 border-gray-200 disabled:text-gray-400 disabled:bg-gray-50 text-black hover:text-black text-base font-bold leading-4 py-4 px-10 w-fit h-auto rounded-xl shadow-sm bg-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default TestResultsNavigation;
