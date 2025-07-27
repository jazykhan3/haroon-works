import multiChoiceImage from "../../../assets/images/multi-choice.png";
import correct from "../../../assets/images/correct.png";

const MultipleChoiceResult = ({ question }) => {
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

  const getOptionBorderColor = (optionIndex) => {
    if (question.status === "unanswered") return "border-gray-200";

    if (optionIndex === question.correctAnswer) {
      return "border-green-500 bg-green-50";
    } else if (
      optionIndex === question.selectedAnswer &&
      question.status === "wrong"
    ) {
      return "border-red-500 bg-red-50";
    }
    return "border-gray-200";
  };

  const getOptionIcon = (optionIndex) => {
    if (question.status === "unanswered") {
      return (
        <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-transparent rounded-full"></div>
        </div>
      );
    }

    if (optionIndex === question.correctAnswer) {
      return (
        <div className="w-5 h-5 border-2 border-green-500 rounded-full flex items-center justify-center bg-green-500">
          <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs text-green-500 font-bold">✓</span>
          </div>
        </div>
      );
    } else if (
      optionIndex === question.selectedAnswer &&
      question.status === "wrong"
    ) {
      return (
        <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center bg-red-500">
          <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs text-red-500 font-bold">✕</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-transparent rounded-full"></div>
        </div>
      );
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

        <div className="grid grid-cols-2 gap-4 mb-4">
          {question.options.map((option, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-sm border p-4 cursor-pointer hover:shadow-md transition-shadow ${getOptionBorderColor(
                index
              )}`}
            >
              <div className="flex items-center gap-3">
                {getOptionIcon(index)}
                <span
                  className={`${
                    index === question.correctAnswer
                      ? "text-green-700 font-medium"
                      : index === question.selectedAnswer &&
                        question.status === "wrong"
                      ? "text-red-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {option}
                </span>
              </div>
            </div>
          ))}
        </div>

        {question.status !== "unanswered" && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                i
              </div>
              <span className="text-sm font-semibold text-blue-700">
                Explanation
              </span>
            </div>
            <p className="text-sm text-blue-700">{question.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleChoiceResult;
