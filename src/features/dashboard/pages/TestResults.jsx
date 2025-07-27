import TestCard from "../components/TestCard";
import { classTestSeriesData } from "../constants/allConstants";
import MultipleChoiceResult from "../components/MultipleChoiceResult";
import TextAnswerResult from "../components/TextAnswerResult";
import TestResultsNavigation from "../components/TestResultsNavigation";
import TestResultsCard from "../components/TestResultsCard";
import { testResultsData } from "../constants/testResultsData";
import { useTestResultsProgress } from "../hooks/useTestResultsProgress";

function TestResults(props) {
  const {
    currentQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    isLastQuestion,
    isFirstQuestion,
    totalQuestions
  } = useTestResultsProgress(testResultsData.length);

  const currentQuestionData = testResultsData[currentQuestion - 1];

  const renderQuestionResult = () => {
    if (currentQuestionData.type === "Multiple Choice") {
      return <MultipleChoiceResult question={currentQuestionData} />;
    } else {
      return <TextAnswerResult question={currentQuestionData} />;
    }
  };

  return (
    <div className="px-4 min-h-screen font-inter">
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <div className="flex-1 bg-white rounded-xl p-4 flex flex-col items-center justify-center">
          <TestCard
            key={classTestSeriesData[0].id}
            data={classTestSeriesData[0]}
            type="class"
            onAttempClick={() => {}}
            showAttemptButton={false}
            showShadow={false}
          />

          {renderQuestionResult()}

          <TestResultsNavigation
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onBack={goToPreviousQuestion}
            onNext={goToNextQuestion}
            isLastQuestion={isLastQuestion}
            isFirstQuestion={isFirstQuestion}
          />
        </div>

        <div className="w-full lg:w-[20%] rounded-xl px-6 flex flex-col">
          <TestResultsCard
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            questionsData={testResultsData}
            onQuestionClick={goToQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default TestResults;
