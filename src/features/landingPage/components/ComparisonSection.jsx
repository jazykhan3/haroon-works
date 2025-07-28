import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function ComparisonSection() {
  const navigate = useNavigate();
  const features = [
    "Reviewing Docs",
    "Reviewing Docs",
    "Reviewing Docs",
    "Reviewing Docs",
    "Reviewing Docs",
  ];

  const platforms = [
    { name: "Notebook", available: false },
    { name: "Youtube", available: false },
    { name: "Coaching", available: false },
    { name: "Orizn AI", available: true, highlight: true },
  ];

  return (
    <div className="py-16 px-4 bg-[#fafaf7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-orange-500 text-sm font-medium bg-white rounded-lg px-3 py-1 shadow-sm">
              ✏️ Process
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What makes
            <br />
            us different?
          </h2>

          <p className="text-gray-600 text-lg">
            Simple Workflow. Smart Results.
          </p>
        </div>

        <div className="rounded-3xl p-8 md:p-12">
          <div className="overflow-x-auto">
            <table className="w-full border-spacing-0 border-separate">
              <thead>
                <tr>
                  <th className="text-left pb-8 pr-8">
                    <span className="text-gray-700 font-semibold text-lg">
                      Features
                    </span>
                  </th>
                  {platforms.map((platform, index) => (
                    <th
                      key={index}
                      className={`text-center pb-8 px-4 min-w-[120px] text-left align-top ${
                        platform.highlight
                          ? "bg-[#fffbfa] border border-orange-200 rounded-t-xl"
                          : ""
                      }`}
                    >
                      <div
                        className={`px-4 py-3 font-semibold ${
                          platform.highlight ? "text-orange-600" : ""
                        }`}
                      >
                        {platform.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr
                    key={featureIndex}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <td className="py-6 pr-8 text-left">
                      <span className="text-gray-800 font-medium">
                        {feature}
                      </span>
                    </td>
                    {platforms.map((platform, platformIndex) => (
                      <td
                        key={platformIndex}
                        className={`py-6 px-4 text-center ${
                          platform.highlight
                            ? "bg-[#fffbfa] border-x border-orange-200"
                            : ""
                        }`}
                      >
                        <div className="flex justify-center">
                          {platform.available ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-white"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                <tr>
                  <td></td>
                  {platforms.map((platform, idx) => (
                    <td
                      key={idx}
                      className={`text-center py-6 ${
                        platform.highlight
                          ? "bg-[#fffbfa] border border-orange-200 rounded-b-xl"
                          : ""
                      }`}
                    >
                      {platform.highlight && (
                        <Button
                          type="ghost"
                          size="large"
                          className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit h-auto rounded-xl"
                          onClick={() => navigate("/onboarding")}
                        >
                          Get Early Access
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonSection;
