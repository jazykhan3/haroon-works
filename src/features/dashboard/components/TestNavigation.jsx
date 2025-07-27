import { Button } from 'antd';

const TestNavigation = ({
  currentQuestion,
  totalQuestions,
  onBack,
  onNext,
  onSubmitAnswer,
  onSubmitTest,
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
        
        {!isLastQuestion ? (
          <Button
            type="ghost"
            onClick={onNext}
            className="bg-transparent border border-gray-200 text-black hover:text-black text-base font-bold leading-4 py-4 px-10 w-fit h-auto rounded-xl shadow-sm bg-white"
          >
            Next
          </Button>
        ) : null}
        
        <Button
          type="ghost"
          onClick={isLastQuestion ? onSubmitTest : onSubmitAnswer}
          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto rounded-xl"
        >
          {isLastQuestion ? 'Submit Test' : 'Submit Answer'}
        </Button>
      </div>
    </div>
  );
};

export default TestNavigation;
