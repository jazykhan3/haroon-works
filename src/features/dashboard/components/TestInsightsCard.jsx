import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function TestInsightsCard({ currentQuestion, totalQuestions, answeredQuestions, onExitTest, onSubmitTest }) {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-gray-600 text-xl mb-2 font-inter font-bold text-left">
        Test Insights
      </p>

      <p className="text-gray-500 text-sm mb-6 font-inter">
        Practice for 30 mins or more every day to build your streak.
      </p>

      <div className="grid grid-cols-7 gap-2 mb-6">
        {[...Array(totalQuestions)].map((_, index) => {
          const questionNumber = index + 1;
          const isAnswered = answeredQuestions.includes(questionNumber);
          const isCurrent = questionNumber === currentQuestion;

          return (
            <div key={questionNumber} className="relative">
              <div
                className={`w-12 h-12 rounded flex items-center justify-center text-sm font-semibold text-black relative ${
                  isCurrent
                    ? "border-2 border-orange-500"
                    : "bg-[#edeff1]"
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-3 h-3 rounded-sm ${
                    isAnswered ? "bg-[#08BD80]" : "bg-[#C7C7C7]"
                  }`}
                ></div>
                {questionNumber}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#08BD80] rounded"></div>
          <span className="text-gray-600 text-sm font-inter">Attempted</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#C7C7C7] rounded"></div>
          <span className="text-gray-600 text-sm font-inter">Unattempted</span>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          type="ghost"
          onClick={onExitTest || (() => {})}
          className="bg-transparent border disabled:border-[#f57900]  border-gray-200 disabled:text-black-800 disabled:bg-transparent disabled:hover:bg-orange-gradient-hover  text-black hover:text-black text-base font-bold leading-4 py-4 px-10 w-fit h-auto rounded-xl shadow-sm bg-white" // Tailwind for styling
        >
          Exit Test
        </Button>
        <Button
          type="ghost"
          onClick={
            onSubmitTest ||
            (() => {
              navigate("/dashboard/test-results");
            })
          }
          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto rounded-xl" // Tailwind for styling
        >
          Submit Test
        </Button>
      </div>
    </div>
  );
}

export default TestInsightsCard;
