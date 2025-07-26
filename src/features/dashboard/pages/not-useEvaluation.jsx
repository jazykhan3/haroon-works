import { Button, Progress } from "antd";
import uploadImage from "../../../assets/images/upload-evaulation-file.jpeg";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/ui/Button";

function Evaluation() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event?.target?.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event?.dataTransfer?.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="px-4 min-h-screen font-inter">
      <div className="mb-6 bg-white rounded-lg flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold  p-[15px] text-left">
          Evaluate Answer
        </h2>
        <PrimaryButton buttonText="Start Evaluation" onClick={() => {}} />
      </div>

      <div className="flex flex-wrap gap-4 items-start">
        {/* Upload Box */}
        <div className="w-full lg:flex-1 bg-white rounded-xl p-4 flex flex-col items-center justify-center">
          <div className="w-full max-h-[430px] rounded-md flex flex-col items-center justify-center text-center">
            {/* Placeholder for Drag Drop */}
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={openFileDialog}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <img
                src={uploadImage}
                alt="Upload"
                className="w-full max-w-[700px] h-[600px] max-h-[400px] object-contain"
              />
              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.ppt,.pptx"
                onChange={handleFileSelect}
                className="hidden"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <h1 className="font-bold text-xl text-[#484848] font-inter">
              Upload your Handwritten Answer for{" "}
              <span className="block">instant Evaluation</span>
            </h1>
          </div>

          <div className="text-center">
            <h5 className="text-lg font-semibold text-gray-800">
              {selectedFile ? `Selected file: ${selectedFile.name}` : ""}
            </h5>
          </div>

          <div className="mt-6 mb-16">
            <PrimaryButton
              buttonText="Start Evaluation"
              onClick={() => {
                navigate("/dashboard/evaluation-history");
              }}
            />
          </div>
        </div>

        {/* Right Box */}
        <div className="w-full lg:w-[20%] bg-white rounded-xl p-6 flex flex-col">
          <p className="text-gray-600 text-xl mb-2 font-inter font-bold text-left">
            Evaluations left this month
          </p>

          <Progress
            percent={80}
            strokeColor="#01bf17"
            strokeWidth={8}
            trailColor="#F5F5F5"
            className="w-full h-2 rounded-full"
            format={() => "4/5"}
          />

          <p className="text-gray-600 text-lg mb-2 font-inter text-left mt-6">
            Get unlimited evaluations and more with (Company) Plan
          </p>
          <Button
            type="ghost"
            onClick={() => {}}
            className="mt-4 bg-transparent border border-[#f57900] text-[#f57900] hover:bg-orange-gradient-hover hover:text-white text-base font-bold leading-4 py-[20px] px-6 w-full bg-[#fff1ee] font-inter"
          >
            Start Evaluation
          </Button>
          <Button
            type="ghost"
            onClick={() => {}}
            className="mt-4 bg-transparent border border-black text-black hover:text-black text-base font-bold leading-4 py-[20px] px-6 w-full bg-[#e8e8e8] font-inter"
          >
            Know All Benefits
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Evaluation;
