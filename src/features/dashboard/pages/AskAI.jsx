import AskAIHeroSection from "../components/AskAIHeroSection";
import askAi from "../../../assets/images/ask-ai.png";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AskAI(props) {
  const navigate = useNavigate();
  return (
    <div>
      <AskAIHeroSection />

      <div className="font-inter px-8 py-12 rounded-xl bg-white">
        <div className="text-center mb-12">
          <img
            src={askAi}
            alt="Orizn.ai Logo"
            className="mx-auto w-24 h-24 mb-4"
          />
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Hey! I’m Orizn.ai
          </h1>
          <p className="text-sm text-gray-600 mb-4">
            Tell me everything you need about your CA preparation
          </p>
          <div className="border-4 border-orange-100 rounded-xl p-4 max-w-6xl mx-auto flex items-center justify-between gap-4 shadow-[0_0_20px_4px_rgba(246,88,28,0.1)] mt-10">
            <textarea
              placeholder="✨ Ask AI to create a problem set or explain any topics"
              className="text-sm text-gray-800 w-full resize-none border-none focus:outline-none bg-transparent placeholder:text-gray-400 h-40"
            ></textarea>
            <Button
              className="bg-[#F6581C] hover:bg-[#F6581C] text-white p-2 rounded-xl transition-colors mt-32"
              type="ghost"
              onClick={() => navigate("/dashboard/ask-ai-routine")}
            >
              <RightOutlined className="text-white" />
            </Button>
          </div>
        </div>
        <div className="previous-evaluations max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-semibold text-gray-900">
              History / Example
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
      </div>
    </div>
  );
}

export default AskAI;
