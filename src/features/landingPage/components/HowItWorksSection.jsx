import processStep1 from "../../../assets/images/process-step-1.png";
import processStep2 from "../../../assets/images/process-step-2.png";
import processStep3 from "../../../assets/images/process-step-3.png";
import processStep4 from "../../../assets/images/process-step-4.png";

function HowItWorksSection() {
  const steps = [
    {
      stepNumber: "Step 1",
      title: "Upload or Select a Topic",
      description: "Pick from ICAI syllabus or upload PDFs.",
      image: processStep1,
      features: [],
    },
    {
      stepNumber: "Step 2",
      title: "Choose a Mode",
      description:
        "Ask AI | Generate Quiz | Full Mock | Flashcards | Voice Discussion",
      image: processStep2,
      features: [
        { icon: "🤖", label: "Ask AI", type: "ai-support" },
        { icon: "📝", label: "Evaluation", type: "study" },
        { icon: "📚", label: "Practice", type: "study" },
        { icon: "📊", label: "Tests", type: "study" },
        { icon: "🎙️", label: "Voice Mode", type: "study" },
      ],
    },
    {
      stepNumber: "Step 3",
      title: "Personalized Output",
      description:
        "Ask AI | Generate Quiz | Full Mock | Flashcards | Voice Discussion",
      image: processStep3,
      features: [],
      aiDemo: true,
    },
    {
      stepNumber: "Step 4",
      title: "Track Your Growth",
      description: "Pick from ICAI syllabus or upload PDFs.",
      image: processStep4,
      features: [],
      progressDemo: true,
    },
  ];

  return (
    <div id="how-it-works" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-orange-500 text-sm font-medium bg-white rounded-lg px-3 py-1 shadow-sm">
              ✏️ Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            How It Works
          </h2>

          <p className="text-gray-600 text-lg">
            Simple Workflow. Smart Results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-b from-[#fbf9f6] to-white rounded-xl p-8 h-full">
                <div className="mb-6">
                  <span className="text-black text-sm font-lg mb-2 block text-left bg-white rounded-lg px-6 py-4 w-24">
                    {step.stepNumber}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-left">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed text-left">
                    {step.description}
                  </p>
                </div>

                <img
                  src={step.image}
                  alt={`Process ${step.stepNumber}`}
                  className="w-full h-auto rounded-2xl mb-6"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorksSection;
