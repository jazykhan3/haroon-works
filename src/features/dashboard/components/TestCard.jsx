import { Button, Tag, Tooltip } from "antd";
import questionSet from "../../../assets/images/question-set.png";

const TestCard = ({ data, type , onAttempClick , showAttemptButton, showShadow}) => {
  return (
    <div className={`bg-white rounded-xl p-5 flex flex-col justify-between w-full font-inter ${showShadow ? "shadow" : ""}`}>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-3 mb-2">
          <img src={questionSet} alt="test" className="w-14 h-14" />
          <div className="flex flex-col">
            <div className="font-semibold text-lg text-left">{data.title}</div>
            <div className="flex items-center text-gray-500 text-sm gap-3 mt-1">
              <span className="font-bold">{data.questions}</span> Questions
              <span>•</span>
              <span className="font-bold">{data.time}</span> Minutes
              <span>•</span>
              <span className="font-bold">{data.points}</span> Points
            </div>
          </div>
        </div>
        {type === "practice" ? (
          <div
            className="flex justify-between items-center mb-3 p-2 rounded-3xl px-4"
            style={{
              background: "#e7f9f3",
            }}
          >
            <div className="text-sm font-bold" style={{ color: "#01BF17" }}>
              {data.attemptsToday} attempts today
            </div>
            <div className="flex -space-x-2 ml-1">
              {data.tags.map((tag, i) => (
                <Tooltip key={i} title={tag}>
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-white"
                    style={{
                      backgroundColor:
                        i === 0
                          ? "#FF9500"
                          : i === 1
                          ? "#01BF17"
                          : i === 2
                          ? "#6B7280"
                          : "#01BF17",
                      zIndex: i + 1,
                    }}
                  >
                    {i === 0 ? "A" : i === 1 ? "E" : "+"}
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-[#08BD80] text-white py-1 rounded-xl px-6">
            Free
          </div>
        )}
      </div>

      <div className="flex justify-between items-center p-2 mt-4 flex-wrap">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-gray-600 font-medium text-sm">Topics</span>
          <div className="flex flex-wrap gap-2">
            {data.topics.map((topic, i) => (
              <Tag
                key={i}
                className="bg-white border border-gray-300 text-gray-700 px-3 py-1 rounded-lg"
              >
                {topic}
              </Tag>
            ))}
          </div>
        </div>
        {showAttemptButton && (
          <Button
            type="ghost"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 self-start px-6 py-[10px] h-auto hover:bg-orange-gradient-hover font-semibold hover:text-white "
            onClick={onAttempClick}
          >
            Attempt Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default TestCard;
