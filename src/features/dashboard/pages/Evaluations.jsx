import { useState } from "react";
import EvaluationUpload from "../components/EvaluationUpload";
import EvaluationResults from "./EvaluationResults";
import EvaluationHeroSection from "../components/EvaluationHeroSection";

const Evaluations = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    console.log("File uploaded:", file);
  };

  const handleNewEvaluation = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen">
      <EvaluationHeroSection />
      <div className="px-6 mt-4 rounded-xl">
        <div className="evaluation-content bg-white rounded-xl border border-gray-100 overflow-hidden">
          {uploadedFile ? (
            <EvaluationResults
              file={uploadedFile}
              onNewEvaluation={handleNewEvaluation}
            />
          ) : (
            <EvaluationUpload onFileUpload={handleFileUpload} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Evaluations;
