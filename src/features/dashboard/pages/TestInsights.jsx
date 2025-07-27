import { useNavigate } from 'react-router-dom';
import { classTestSeriesData } from "../constants/allConstants";
import TestCard from "../components/TestCard";
import TestInsightsCard from "../components/TestInsightsCard";
import QuestionCard from "../components/QuestionCard";
import TestNavigation from "../components/TestNavigation";
import { testInsightsData } from "../constants/testInsightsData";
import { useTestProgress } from "../hooks/useTestProgress";

function TestInsights(props) {
  const navigate = useNavigate();
  const {
    currentQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    isLastQuestion,
    isFirstQuestion,
    updateAnswer,
    getAnswer,
    getAnsweredQuestions,
    submitTest,
    totalQuestions
  } = useTestProgress(testInsightsData.length);

  const currentQuestionData = testInsightsData[currentQuestion - 1];
  
  const getCurrentQuestionAnswers = () => {
    const answers = {};
    currentQuestionData.answers.forEach((_, index) => {
      answers[index] = getAnswer(currentQuestionData.id, index);
    });
    return answers;
  };

  const handleAnswerChange = (questionId, answerIndex, value) => {
    updateAnswer(questionId, answerIndex, value);
  };

  const handleSubmitAnswer = () => {
    goToNextQuestion();
  };

  const handleSubmitTest = () => {
    const allAnswers = submitTest();
    console.log('Test submitted successfully:', allAnswers);
    alert('Test submitted successfully!');
    navigate('/dashboard/test-results');
  };

  const handleExitTest = () => {
    console.log('Exiting test...');
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

          <QuestionCard
            question={currentQuestionData}
            answers={getCurrentQuestionAnswers()}
            onAnswerChange={handleAnswerChange}
          />

          <TestNavigation
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            onBack={goToPreviousQuestion}
            onNext={goToNextQuestion}
            onSubmitAnswer={handleSubmitAnswer}
            onSubmitTest={handleSubmitTest}
            isLastQuestion={isLastQuestion}
            isFirstQuestion={isFirstQuestion}
          />
        </div>

        <div className="w-full lg:w-[20%] rounded-xl px-6 flex flex-col">
          <TestInsightsCard 
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
            answeredQuestions={getAnsweredQuestions()}
            onExitTest={handleExitTest}
            onSubmitTest={handleSubmitTest}
          />
        </div>
      </div>
    </div>
  );
}

export default TestInsights;
