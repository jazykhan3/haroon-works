import { Button } from "antd";
import heroImage from "../../../assets/images/bg-hero.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate()
  return (
    <section
      className="min-h-screen flex items-center font-labil-grotesk bg-cover bg-center no-repeat w-full"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="mx-auto py-10 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="text-[#F6581C] text-sm font-medium">
              🚀 Only 100 Beta Seats Left
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-6">
            <span className="text-gray-900">Crack CA Exams</span>
            <br />
            <span className="text-[#F6581C]">Smarter</span>
            <span className="text-gray-900">, Not Harder</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Your AI Copilot for Personalized CA Preparation
          </p>
          <p className="text-base text-gray-500 mb-12">
            - from Foundation to Final
          </p>

          <Button
            type="ghost"
            size="large"
            className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto rounded-xl"
            onClick={()=> navigate('/onboarding')}
          >
            Get Early Access for ₹2000 / 3 months
          </Button>

          <p className="text-sm text-gray-500 mt-6 max-w-md mx-auto">
            From past papers to mock tests, flashcards to voice-based case
            discussions — Orizn AI adapts to how you learn best.
          </p>

          <div className="aspect-video flex items-center justify-center bg-white rounded-2xl max-w-[92%] w-[92%] mx-auto mt-12 h-[520px] -mb-32">
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                AI-Powered Learning Platform
              </h3>
              <p className="text-gray-600">
                Personalized study plans, smart assessments, and real-time
                guidance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
