import React from "react";
import { Input } from "antd";
import multiChoiceImage from "../../../assets/images/multi-choice.png";
import questionImage from "../../../assets/images/question-image.png";

const QuestionCard = ({ question, answers, onAnswerChange }) => {
  const handleAnswerChange = (answerIndex, value) => {
    onAnswerChange(question.id, answerIndex, value);
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
            <img
              src={multiChoiceImage}
              alt="Multiple Choice"
              className="w-4 h-4"
            />
            <span className="text-sm text-gray-600">{question.type}</span>
          </div>
          <span className="text-sm font-semibold border border-gray-300 rounded-lg px-4 py-2">
            {question.points} Points
          </span>
        </div>
      </div>

      <div className="mb-4 font-inter text-left">
        <h3 className="text-lg font-bold mb-2">{question.title}</h3>
        <p className="text-gray-700 mb-4">{question.description}</p>
        <p className="text-gray-700 font-bold mb-3">{question.termsTitle}</p>
      </div>

      <img
        src={questionImage}
        alt="Question"
        className="w-[600px] h-auto object-contain rounded-lg"
      />

      <div className="mb-4 font-inter text-left mt-2">
        <p className="text-gray-700 font-bold mb-3">
          {question.additionalInfoTitle}
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
          {question.additionalInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ol>
        <p className="text-gray-700 mb-4">{question.requirement}</p>
        <div className="space-y-1 text-gray-700 font-bold mb-4">
          {question.requirementPoints.map((point, index) => (
            <p key={index}>{point}</p>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-green-500 text-white rounded flex items-center justify-center text-sm font-bold">
              ?
            </div>
            <span className="text-lg font-semibold text-green-600">
              Answers
            </span>
          </div>

          <div className="space-y-4">
            {question.answers.map((answer, index) => (
              <div key={index}>
                <h4 className="font-bold text-gray-800 mb-2">{answer.label}</h4>
                <Input
                  placeholder={answer.placeholder}
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="border-0 border-b border-gray-300 rounded-none p-0 pb-2 focus:border-blue-500 focus:shadow-none"
                  style={{
                    boxShadow: "none",
                    borderRadius: 0,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
