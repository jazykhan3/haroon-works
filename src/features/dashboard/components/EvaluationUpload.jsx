import { Button } from "antd";
import React, { useRef, useState } from "react";
import EvaluationDialog from "./EvaluationDialog";

const EvaluationUpload = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event?.dataTransfer?.files[0];
    if (file) {
      setSelectedFile(file);
      onFileUpload(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="font-inter px-8 py-12 rounded-xl">
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Upload your handwritten answers
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          for instant evaluation
        </h3>
        <p className="text-gray-600 text-sm">
          Ask AI to create a problem set or explain any topics
        </p>
      </div>

      <div className="flex justify-center mb-12 w-auto items-start bg-white">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={openFileDialog}
          className="max-h-[500px] overflow-hidden cursor-pointer"
        >
          <div className="h-full flex items-center justify-center bg-white">
            <img
              src={require("../../../assets/images/upload-evaluation.png")}
              alt="Upload Evaluation"
              className="max-h-[600px] w-auto object-contain transition-transform duration-200 drop-shadow-2xl bg-white"
            />
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.ppt,.pptx"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>
      </div>

      <div className="text-center">
        {selectedFile && (
          <h5 className="text-lg font-semibold text-gray-800">
            Selected file: {selectedFile.name}
          </h5>
        )}
      </div>

      <div className="text-center mb-16">
        <Button
          type="ghost"
          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto text-sm rounded-xl" // Tailwind for styling
          onClick={() => setDialogVisible(true)}
        >
          Evaluate your answers
        </Button>
      </div>

      <div className="previous-evaluations max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold text-gray-900">
            Previous Evaluation
          </h3>
          <button className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-inter">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h4 className="text-base font-semibold text-gray-900 mb-3 leading-tight text-left">
                Explain the 4 pillars of
              </h4>
              <div className="text-xs text-gray-500 text-left">
                Previous evaluation {item}
              </div>
              <div className="flex items-start justify-between mb-2 mt-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {dialogVisible && (
        <EvaluationDialog
          visible={dialogVisible}
          onClose={() => setDialogVisible(false)}
        />
      )}
    </div>
  );
};

export default EvaluationUpload;
