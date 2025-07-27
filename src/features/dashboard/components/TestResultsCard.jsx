import React from "react";
import pointsEarned from "../../../assets/svgs/points-earned.svg";

function TestResultsCard({ currentQuestion, totalQuestions, questionsData, onQuestionClick }) {
  const getQuestionStatus = (question) => {
    switch (question.status) {
      case 'correct': return 'bg-[#08BD80]';
      case 'wrong': return 'bg-[#FF5656]';
      case 'unanswered': return 'bg-[#C7C7C7]';
      default: return 'bg-[#C7C7C7]';
    }
  };

  const calculateStats = () => {
    const correct = questionsData.filter(q => q.status === 'correct').length;
    const wrong = questionsData.filter(q => q.status === 'wrong').length;
    const unanswered = questionsData.filter(q => q.status === 'unanswered').length;
    const totalPoints = questionsData.reduce((sum, q) => sum + (q.pointsEarned || 0), 0);
    const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;
    
    return { correct, wrong, unanswered, totalPoints, accuracy };
  };

  const stats = calculateStats();

  return (
    <div>
      <p className="text-gray-600 text-xl mb-2 font-inter font-bold text-left">
        Test Results
      </p>

      <p className="text-gray-500 text-sm mb-6 font-inter">
        Review your performance and learn from mistakes.
      </p>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {questionsData.map((question, index) => {
          const questionNumber = index + 1;
          const isCurrent = questionNumber === currentQuestion;

          return (
            <div key={questionNumber} className="relative">
              <div 
                className={`w-12 h-12 rounded flex items-center justify-center text-sm font-semibold text-black relative cursor-pointer hover:opacity-80 transition-opacity ${
                  isCurrent ? 'border-2 border-orange-500' : 'bg-[#edeff1]'
                }`}
                onClick={() => onQuestionClick(questionNumber)}
              >
                <div
                  className={`absolute top-0 right-0 w-3 h-3 rounded-sm ${getQuestionStatus(question)}`}
                ></div>
                {questionNumber}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#08BD80] rounded"></div>
          <span className="text-gray-600 text-sm font-inter">Correct</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#FF5656] rounded"></div>
          <span className="text-gray-600 text-sm font-inter">Wrong</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#C7C7C7] rounded"></div>
          <span className="text-gray-600 text-sm font-inter">Unanswered</span>
        </div>
      </div>

   
      <div className="bg-white rounded-t-xl p-6 shadow-sm border border-gray-100 w-full mb-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Result</h2>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full">
            <img
              src={pointsEarned}
              alt="Points Earned"
              className="w-4 h-4"
            />
            <span className="text-md font-medium text-orange-600">
              {stats.totalPoints} Points Earned
            </span>
          </div>
        </div>

        <div className="mb-6 text-left">
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {totalQuestions}
          </div>
          <div className="text-sm text-gray-500">
            Questions Attempted
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-1 text-left">
              {stats.correct}
            </div>
            <div className="text-sm text-gray-500">
              Questions Correct
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-1 text-left">
              {stats.wrong}
            </div>
            <div className="text-sm text-gray-500">Questions Wrong</div>
          </div>
        </div>
      </div>

   
      <div className="relative overflow-hidden rounded-xs mb-6">
        <div className="relative bg-white">
          <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-b-xl p-6">
            <div className="flex items-center gap-[40%]">
              <div className="text-center">
                <span className="block text-sm font-medium text-[#F6581C] mb-2">
                  Accuracy
                </span>
                <div className="relative">
                  <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                    {stats.accuracy}%
                  </span>
                </div>
              </div>

              <div className="text-center">
                <span className="block text-sm font-medium text-[#F6581C] mb-2 text-left">
                  Rank
                </span>
                <div className="relative">
                  <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    #12
                  </span>
                  <span className="text-sm font-semibold text-gray-400 ml-[2px]">
                    out of 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestResultsCard;
