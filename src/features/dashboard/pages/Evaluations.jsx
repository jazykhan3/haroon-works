import React, { useState } from 'react';
import EvaluationUpload from '../components/EvaluationUpload';
import EvaluationResults from './EvaluationResults';
import EvaluationHeroSection from '../components/EvaluationHeroSection';

const Evaluations = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (file) => {
    // Process the file upload without navigating to results
    // You can add file processing logic here if needed
    console.log('File uploaded:', file);
    // Don't set uploadedFile to prevent navigation to results
  };

  const handleNewEvaluation = () => {
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with orange gradient background */}

      <EvaluationHeroSection />

      {/* Main Content Area - White background */}
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