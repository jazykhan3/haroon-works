import streakIcon from "../../../assets/svgs/streak.svg";
import rankerInsightImage from "../../../assets/images/ranker-insight.png";
import { Button } from "antd";
import { useState } from "react";

const EvaluationHeroSection = () => {
  const user = "Rajdeep";
  const streakData = [
    { day: "M", hasStreak: false },
    { day: "T", hasStreak: true },
    { day: "W", hasStreak: false },
    { day: "T", hasStreak: true },
    { day: "F", hasStreak: true },
    { day: "S", hasStreak: true },
    { day: "S", hasStreak: false },
  ];

  const getStreakMultiplier = () => {
    let consecutiveStreaks = 0;
    let maxConsecutive = 0;

    streakData.forEach((day) => {
      if (day.hasStreak) {
        consecutiveStreaks++;
        maxConsecutive = Math.max(maxConsecutive, consecutiveStreaks);
      } else {
        consecutiveStreaks = 0;
      }
    });

    return maxConsecutive >= 3 ? "x3" : "";
  };

  const [stats, setStats] = useState({
    testsAppeared: 17,
    averageScore: 80,
  });

  return (
    <div className="mb-6 px-6">
      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex-1 text-left font-inter">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome back,
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{user}</h2>
          <p className="text-gray-600 text-sm mb-6">
            Practice for 30 mins or more every day to build your streak.
          </p>

          <div className="flex items-center space-x-2 mb-4">
            {streakData.map((dayData, index) => (
              <div key={index} className="flex items-center space-x-2">
                {dayData.hasStreak ? (
                  <div className="w-10 h-10 rounded-full flex items-center justify-center">
                    <img src={streakIcon} alt="streak" className="w-8 h-8" />
                  </div>
                ) : (
                  <span className="text-sm text-gray-600 bg-gray-100 rounded-full px-4 py-2 inline-block">
                    {dayData.day}
                  </span>
                )}
              </div>
            ))}
            {getStreakMultiplier() && (
              <span className="text-md font-semibold text-[#f57900] ml-2">
                {getStreakMultiplier()}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-6 font-inter">
          <div className="bg-white rounded-xl p-6 shadow-sm w-[500px] h-[180px] relative overflow-hidden">
            <div className="flex justify-between items-start h-full">
              <div className="flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold text-gray-800 mb-6 text-left">
                  View Ranker Insight
                </h3>

                <div className="flex space-x-16">
                  <div>
                    <div className="text-[28px] font-bold text-gray-800 mb-1">
                      {stats.testsAppeared}
                    </div>
                    <div className="text-sm text-gray-500">Tests appeared</div>
                  </div>
                  <div>
                    <div className="text-[28px] font-bold text-gray-800 mb-1">
                      {stats.averageScore}%
                    </div>
                    <div className="text-sm text-gray-500">Tests appeared</div>
                  </div>
                </div>
              </div>

              <div className="z-10">
                <Button
                  type="ghost"
                  className="bg-orange-500 border border-orange-500 font-semibold px-6 h-10 text-sm mt-[70%] hover:bg-orange-600 hover:border-orange-600 transition-colors text-white rounded-lg font-inter"
                >
                  Know More
                </Button>
              </div>
            </div>

            <div className="absolute bottom-0 top-0 right-0 left-[50%]">
              <img
                src={rankerInsightImage}
                alt="Ranker Insight"
                className="w-full h-full object-cover pointer-events-none select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationHeroSection;
