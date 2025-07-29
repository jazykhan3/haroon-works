import yellowStart from "../../../assets/icons/Vector.png"
import orangeStar from "../../../assets/icons/Vector2.png"

function TailoredSection(props) {
  const stages = [
    {
      title: "CA Foundation",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: yellowStart ,
      bgColor: "#fce5bc",
      textColor: "yellow-600",
    },
    {
      title: "CA Inter",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: orangeStar,
      bgColor: "#FFDAC7",
      textColor: "black",
    },
    {
      title: "CA Final",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: yellowStart,
      bgColor: "#fce5bc",
      textColor: "yellow-600",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="mx-auto text-center w-full">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-orange-500 text-sm font-medium bg-white rounded-lg px-3 py-1 shadow-sm">
            ✏️ Process
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 leading-tight">
          Tailored for
          <br />
          every stage
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto w-[98%]">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-[#fbf8f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-4 border-white text-left"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 ml-0"
                style={{ backgroundColor: stage.bgColor }}
              >
                <img src={stage.icon} alt={stage.title} className="w-[20px] h-[20px]" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {stage.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-gray-500 text-sm">
          Coming Soon: Hindi language support & ICAI resource integration
        </div>
      </div>
    </div>
  );
}

export default TailoredSection;
