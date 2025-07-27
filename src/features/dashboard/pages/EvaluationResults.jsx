import { Button } from "antd";
import EvaluationHeroSection from "../components/EvaluationHeroSection";
import EvaluationDetailsView from "../components/EvaluationDetailsView";
import { useState } from "react";

const EvaluationResults = () => {
  // State to manage evaluation questions with true/false answers
  const [evaluationData, setEvaluationData] = useState([
    {
      id: 1,
      question:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit? lorem ipsum dolor sit amet, consectetur adipiscing elit?lorem ipsum dolor sit amet, consectetur adipiscing elit? lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      marks: [10, 15, 20],
      selectedMark: 10,
      answer: false,
      feedback:
        "Orin.ai made a few spell corrections in your answer, check before you submit",
      content: {
        description:
          "India is upgrading its defence industry and expanding its exports globally to accomplish 'make in India'. Impediments",
        points: [
          "(i) Presence of large global players eg. Israel, Russia",
          "(ii) India's 2nd largest importer eg. SIPRI data",
          "(iii) low progress in large defence products eg. Iron dome of Israel, THAAD - US, S400 - Russia",
          "(iv) Low budget for research eg. less than 1% of GDP",
          "(v) Civilisational values of 'Ahimsa' sways public opinion against it.",
        ],
        governmentSteps: [
          "(i) Defence industry corridors set up eg. OP, TamilNadu",
          "(ii) Enhancing bilateral ties with importers eg USA",
          "(iii) Capturing the market of small nations eg. Philippines",
          "(iv) Fiscal support via govt schemes eg. lending Ordinance Factory Boards",
          "(v) Increasing budget of research eg. DRDO",
          "(vi) Accomplishing indigenous technology",
        ],
        example:
          "eg. Tejas light combat aircrafts Need to increase research expenditure Need to build ability for maintenance & repair This can reduce current A/L deficit and also ensure India's security",
      },
    },
  ]);

  // Function to toggle answer state
  const toggleAnswer = (id) => {
    setEvaluationData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, answer: !item.answer } : item
      )
    );
  };

  // Function to update selected mark
  const updateSelectedMark = (id, mark) => {
    setEvaluationData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedMark: mark } : item
      )
    );
  };

  return (
    <>
      <EvaluationHeroSection />

      {/* Evaluation Results Section */}
      <div className="px-6 py-4">
        {evaluationData.map((evaluation) => (
          <div key={evaluation.id}>
            {!evaluation.answer ? (
              // Show the original evaluation form when answer is false
              <div className="bg-white rounded-xl mb-6 p-6 font-inter">
                {/* Question Header */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">
                    Question
                  </h3>
                  <h3 className="text-lg font-normal text-gray-800 mb-3 text-left border-2 rounded-lg border-gray-300 p-2">
                    {evaluation.question}
                  </h3>

                  {/* Marks Selection */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">
                      Marks
                    </h3>
                    <div className="flex gap-2 mt-2">
                      {evaluation.marks.map((mark) => (
                        <button
                          key={mark}
                          onClick={() =>
                            updateSelectedMark(evaluation.id, mark)
                          }
                          className={`px-8 py-2 rounded-full border text-sm font-medium transition-colors ${
                            evaluation.selectedMark === mark
                              ? "bg-[#fff1ee] text-[#F6581C] border-orange-500"
                              : "bg-white text-gray-600 border-gray-300 hover:border-orange-300"
                          }`}
                        >
                          {mark}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Answer Section */}
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">
                    Answer
                  </h3>

                  {/* Feedback Alert */}
                  {evaluation.feedback && (
                    <div className="bg-[#ffedd5] border border-orange-200 rounded-lg p-3 mb-4 flex items-start">
                      <div className="text-orange-600 mr-2">⚠️</div>
                      <div className="text-md text-orange-800">
                        {evaluation.feedback}
                      </div>
                    </div>
                  )}

                  {/* Content Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed text-left">
                    {evaluation.content.description}
                  </p>

                  {/* Main Points */}
                  {evaluation.content.points && (
                    <div className="mb-4 text-left">
                      {evaluation.content.points.map((point, index) => (
                        <p key={index} className="text-gray-700 mb-1">
                          {point}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Government Steps */}
                  {evaluation.content.governmentSteps && (
                    <div className="mb-4 text-left">
                      <p className="font-medium text-gray-800 mb-2">
                        Steps taken by Govt
                      </p>
                      {evaluation.content.governmentSteps.map((step, index) => (
                        <p key={index} className="text-gray-700 mb-1 text-left">
                          {step}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Example */}
                  {evaluation.content.example && (
                    <div className="mb-4 text-left">
                      <p className="text-gray-700 leading-relaxed">
                        {evaluation.content.example}
                      </p>
                    </div>
                  )}

                  {/* Evaluate Button */}
                  <div className="flex justify-end mt-6">
                    <Button
                      type="ghost"
                      className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto" // Tailwind for styling
                      onClick={() => toggleAnswer(evaluation.id)}
                    >
                      Evaluate your answers
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              // Show the evaluation details view when answer is true
              <EvaluationDetailsView 
                evaluation={evaluation} 
                onBack={() => toggleAnswer(evaluation.id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default EvaluationResults;
