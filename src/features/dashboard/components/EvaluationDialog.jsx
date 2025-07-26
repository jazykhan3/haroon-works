import { useState } from "react";
import { Modal, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function EvaluationDialog({ visible, onClose }) {
  const navigate = useNavigate();
  const [selectedPaper, setSelectedPaper] = useState("Subject - 1");
  const [selectedMarks, setSelectedMarks] = useState("10");
  const [question, setQuestion] = useState("");

  const paperOptions = ["Subject - 1", "Subject - 1", "Subject - 1"];
  const marksOptions = ["10", "15", "20"];

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      closeIcon={<CloseOutlined className="text-gray-500 text-lg" />}
      className="evaluation-dialog"
      width={600}
      centered
    >
      <div className="p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Choose Appropriate
        </h2>

        {/* Paper Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Paper</h3>
          <div className="flex gap-3">
            {paperOptions.map((paper, index) => (
              <button
                key={index}
                onClick={() => setSelectedPaper(paper)}
                className={`px-4 py-2 rounded-full border transition-all duration-200 ${
                  selectedPaper === paper && index === 0
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {paper}
              </button>
            ))}
          </div>
        </div>

        {/* Question Section */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Question</h3>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter your question here..."
          />
        </div>

        {/* Marks Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Marks</h3>
          <div className="flex gap-3">
            {marksOptions.map((marks) => (
              <button
                key={marks}
                onClick={() => setSelectedMarks(marks)}
                className={`px-4 py-2 rounded-full border min-w-[60px] transition-all duration-200 ${
                  selectedMarks === marks
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-gray-100 text-gray-600 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {marks}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="ghost"
          size="large"
          block
          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto" // Tailwind for styling
          onClick={() => {
            // Handle evaluation logic here
            console.log({
              paper: selectedPaper,
              question,
              marks: selectedMarks,
            });
            navigate("/dashboard/evaluation-results");
            onClose();
          }}
        >
          Evaluate your answer
        </Button>
      </div>
    </Modal>
  );
}

export default EvaluationDialog;
