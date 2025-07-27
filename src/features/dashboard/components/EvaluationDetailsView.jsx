import React, { useState } from "react";
import fileUploadIcon from "../../../assets/svgs/file-upload.svg";
import fileWrite from "../../../assets/svgs/write.svg";
import writing from "../../../assets/svgs/writing.png";
import suggestion from "../../../assets/svgs/suggestions.svg";
import { Button } from "antd";

const EvaluationDetailsView = ({ evaluation, onBack }) => {
  const [evaluationData, setEvaluationData] = useState({
    score: {
      current: 10,
      total: 15,
      accuracy: 75,
    },
    marks: ["5", "7", "10", "12", "15"],
    selectedMark: "10",
    question:
      evaluation?.question ||
      "Evaluate the viability of nuclear power as a clean and sustainable energy source. Discuss the challenges associated with nuclear energy and provide your analysis on its role in addressing climate change.",
    answer:
      evaluation?.answer ||
      "Nuclear power presents a complex solution to clean energy needs with both significant advantages and challenges...",
    demands: [
      "Evaluate viability of nuclear power as clean energy source",
      "Evaluate viability of nuclear power as sustainable energy source",
      "Discuss challenges associated with nuclear energy",
    ],
    userResponse:
      "Energy consumption has grown around 6.5% annually since 2020. As coal is the major source of energy in India (around 43%), to meet growing demands and address climate change commitments. We shift",
    analysis: [
      "Good attempt to set context through energy consumption statistics and current energy mix",
      "However, the introduction could be more focused on nuclear power specifically",
    ],
    suggestions: [
      "Can start with India's nuclear power capacity (e.g., current 7 GW capacity with plans to increase to 22.5 GW by 2031) to establish immediate relevance",
      "Could highlight India's three-stage nuclear program to show long-term strategic importance",
    ],
  });

  return (
    <div className="bg-white rounded-xl mb-6 p-6 font-inter">
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-orange-500 hover:text-orange-600 flex items-center gap-2 text-sm font-medium"
        >
          ← Back to evaluation
        </button>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 bg-[#f7f7f9] p-3 rounded-lg">
          <img src={fileUploadIcon} alt="document" className="w-6 h-6" />
          <span className="text-xl font-semibold text-gray-800 leading-none">
            Uploaded Answer
          </span>
        </div>

        <div className="mb-4 text-left">
          <span className="text-lg font-semibold text-gray-500">Marks</span>
          <div className="flex gap-2 mt-1">
            {evaluationData.marks.map((mark) => (
              <span
                key={mark}
                className={`px-6 py-1 rounded-full border text-sm font-medium transition-colors ${
                  evaluationData.selectedMark === mark
                    ? "bg-[#fff1ee] text-[#F6581C] border-orange-500"
                    : "bg-white text-gray-600 border-gray-300 hover:border-orange-300"
                }`}
              >
                {mark}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Question</h3>

          <p className="text-gray-700 text-lg">{evaluationData.question}</p>
        </div>

        <div className="mb-4 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Answer</h3>
          <p className="text-gray-700 text-lg">{evaluationData.answer}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 bg-[#f7f7f9] p-3 rounded-lg">
          <img src={fileWrite} alt="document" className="w-6 h-6" />
          <span className="text-xl font-semibold text-gray-800 leading-none">
            Your Answer Evaluation
          </span>
        </div>

        <div className="mb-6 text-left">
          <span className="text-xl font-semibold text-gray-800 leading-none">
            Demand of the Question
          </span>
          <div className="space-y-2 mt-4">
            {evaluationData.demands.map((demand, index) => (
              <p key={index} className="text-gray-700 text-lg">
                {demand}
              </p>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xs mb-6">
          <div className="relative bg-white">
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 rounded-xl p-6 mb-4">
              <div className="flex items-center gap-[40%]">
                <div className="text-center">
                  <span className="block text-sm font-medium text-[#F6581C] mb-2 ">
                    Score
                  </span>
                  <div className="relative">
                    <span className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      {evaluationData.score.current}
                    </span>
                    <span className="text-2xl font-semibold text-gray-400">
                      /{evaluationData.score.total}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <span className="block text-sm font-medium text-[#F6581C] mb-2">
                    Accuracy
                  </span>
                  <div className="relative">
                    <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                      {evaluationData.score.accuracy}
                    </span>
                    <span className="text-2xl font-semibold text-gray-400">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4 bg-[#f7f7f9] p-3 rounded-lg">
          <img src={fileWrite} alt="document" className="w-6 h-6" />
          <span className="text-xl font-semibold text-gray-800 leading-none">
            What You Wrote
          </span>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 ">
            <img src={writing} alt="document" className="w-6 h-6" />
            <span className="text-xl font-semibold text-gray-800 leading-none">
              What You Wrote
            </span>
          </div>
          <p className="text-gray-700 text-lg">{evaluationData.userResponse}</p>
        </div>

        <div className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4 ">
            <span className="text-xl font-semibold text-gray-800 leading-none">
              🔍 Analysis:
            </span>
          </div>

          {evaluationData.analysis.map((point, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed mb-2 text-lg"
            >
              {point}
            </p>
          ))}
        </div>

        <div className="mb-8 text-left">
          <div className="flex items-center gap-3 mb-4 ">
            <img src={suggestion} alt="document" className="w-6 h-6" />
            <span className="text-xl font-semibold text-gray-800 leading-none">
              Suggestions to Improve
            </span>
          </div>
          {evaluationData.suggestions.map((suggestion, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed mb-2 text-lg"
            >
              {suggestion}
            </p>
          ))}
        </div>

        <div className="flex justify-end mt-6">
          <Button
            type="ghost"
            className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto" // Tailwind for styling
            onClick={() => {}}
          >
            Evaluate your answers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EvaluationDetailsView;
