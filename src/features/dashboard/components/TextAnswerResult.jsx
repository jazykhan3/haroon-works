import React from "react";
import { Input } from "antd";
import correct from "../../../assets/images/correct.png";

const { TextArea } = Input;

const TextAnswerResult = ({ question }) => {
  const getStatusColor = () => {
    switch (question.status) {
      case "correct":
        return "bg-[#08BD80] text-white";
      case "wrong":
        return "bg-[#FF5656] text-white";
      case "unanswered":
        return "bg-gray-300 text-gray-600";
      default:
        return "bg-gray-300 text-gray-600";
    }
  };

  const getStatusText = () => {
    switch (question.status) {
      case "correct":
        return "Correct";
      case "wrong":
        return "Wrong";
      case "unanswered":
        return "Unanswered";
      default:
        return "Unanswered";
    }
  };

  return (
    <div className="border border-gray-200 w-full mb-4 rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center text-sm font-bold">
            ?
          </div>
          <span className="text-lg font-semibold">
            Question {question.questionNumber}
          </span>
        </div>
        <div className="flex items-center gap-4 mt-[5px]">
          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2">
            <span className="text-sm text-gray-600">{question.type}</span>
          </div>
          <span className="text-sm font-semibold border border-gray-300 rounded-lg px-4 py-2">
            {question.points} Points
          </span>
          {question.status !== "unanswered" && (
            <span className="text-sm font-semibold border border-gray-300 rounded-lg px-4 py-2">
              {question.pointsEarned}/{question.points} Earned
            </span>
          )}
          <div
            className={`flex items-center gap-2 rounded-lg px-4 py-2 ${getStatusColor()}`}
          >
            {question.status === "correct" && (
              <img src={correct} alt="Correct" className="w-4 h-4" />
            )}
            <span className="text-sm">{getStatusText()}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-left">
          {question.title}
        </h3>

        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded flex items-center justify-center text-sm font-bold">
              U
            </div>
            <span className="text-lg font-semibold text-blue-600">
              Your Answer
            </span>
          </div>

          <div
            className={`border rounded-lg p-4 ${
              question.status === "unanswered"
                ? "bg-gray-50 border-gray-200"
                : question.status === "correct"
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            {question.userAnswer ? (
              <p className="text-gray-700 text-sm leading-relaxed">
                {question.userAnswer}
              </p>
            ) : (
              <p className="text-gray-400 text-sm italic">No answer provided</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold">
              ✓
            </div>
            <span className="text-lg font-semibold text-green-600">
              Model Answer
            </span>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-700 text-sm leading-relaxed">
              {question.modelAnswer}
            </p>
          </div>
        </div>

        {question.status !== "unanswered" && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  ★
                </div>
                <span className="text-sm font-semibold text-blue-700">
                  Score Breakdown
                </span>
              </div>
              <div className="text-right">
                <span className="text-lg font-bold text-blue-700">
                  {question.pointsEarned}/{question.points}
                </span>
                <span className="text-sm text-blue-600 block">Points</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAnswerResult;
