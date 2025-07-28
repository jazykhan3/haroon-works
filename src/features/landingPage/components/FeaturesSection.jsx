import { useNavigate } from "react-router-dom";
import featureImage from "../../../assets/images/bg-features.png";

function FeaturesSection(props) {
  const features = [
    {
      id: 1,
      icon: "⭐",
      title: "Ask AI Anything",
      description:
        "Stuck on a concept or question? Just ask — our AI is trained specifically on IGAL-Level material.",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
    {
      id: 2,
      icon: "🧪",
      title: "Mock Tests, Instantly",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      id: 3,
      icon: "✏️",
      title: "Subjective Answer Checker",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      bgColor: "bg-red-50",
      iconBg: "bg-red-100",
    },
    {
      id: 4,
      icon: "🃏",
      title: "Auto-Generated Flashcards & Notes",
      description:
        "Orizn tracks your weak areas and turns them into revision cards. Learn faster, revise smarter.",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      id: 5,
      icon: "🎤",
      title: "Voice-Based Case Study Practice",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
  ];

  const navigate = useNavigate();
  return (
    <section
      className="py-16 px-4 bg-cover bg-center no-repeat w-full font-inter"
      style={{ backgroundImage: `url(${featureImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-orange-500 text-sm font-medium mb-4 bg-white rounded-full px-3 py-1 shadow-sm">
            <span>✏️</span>
            <span>Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why <span className="text-orange-500">Orizn AI</span>?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className={`bg-[#fbf7f5] rounded-2xl p-6  hover:shadow-lg transition-shadow duration-300 border border-4 border-white`}
            >
              <div
                className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center text-xl mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-10">
                {feature.description}
              </p>
              <button className="inline-flex justify-between items-center px-4 gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors border-2 border-gray-200 rounded-xl w-full py-2" onClick={() => navigate("/onboarding")}>
                <span>Get Started</span>
                <span className="text-lg">↗</span>
              </button>
            </div>
          ))}

          <div className="bg-[#fbf7f5] rounded-2xl p-6 border border-4 border-white hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-xl mb-4">
              🎤
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Voice-Based Case Study Practice
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-10">
              Auto-generate full-length papers and case scenarios in seconds —
              tailored to your level.
            </p>
            <button className="inline-flex justify-between items-center px-4 gap-2 text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors border-2 border-gray-200 rounded-xl w-full py-2" onClick={()=> navigate('/onboarding')}>
              <span>Get Started</span>
              <span className="text-lg">↗</span>
            </button>
          </div>
          <div className="bg-gradient-to-br from-[#F6581C] via-[#f57900] to-white rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 text-left">
                Get Early Access for
              </h3>
              <div className="text-2xl font-bold mb-24 text-left ">
                ₹2,000 / 3 months
              </div>
              <div className="text-sm opacity-90 mb-2 text-left">
                Only 100 Beta Seats Left
              </div>
              <button className="w-full bg-white text-gray-900 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-between gap-2" onClick={()=> navigate('/onboarding')}>
                Get Started
                <span className="text-lg">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
