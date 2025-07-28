function TailoredSection(props) {
  const stages = [
    {
      title: "CA Foundation",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: "⭐",
      bgColor: "#fce5bc",
      textColor: "yellow-600",
    },
    {
      title: "CA Inter",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: "⭐",
      bgColor: "#FFDAC7",
      textColor: "black",
    },
    {
      title: "CA Final",
      description:
        "Auto-generate full-length papers and case scenarios in seconds — tailored to your level.",
      icon: "⭐",
      bgColor: "#fce5bc",
      textColor: "yellow-600",
    },
  ];

  const getTextColor = (stage) => {
    switch (stage) {
      case "CA Foundation":
        return "text-yellow-600";
      case "CA Inter":
        return "text-black";
      case "CA Final":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stages.map((stage, index) => (
            <div
              key={index}
              className="bg-[#fbf8f6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-4 border-white text-left"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 ml-0"
                style={{ backgroundColor: stage.bgColor }}
              >
                <span className={`${getTextColor(stage)} text-xl`}>
                  {stage.icon}
                </span>
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
