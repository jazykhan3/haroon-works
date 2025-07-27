import React, { useState } from "react";
import { Button, Typography } from "antd";
import flameIcon from "../../../assets/icons/flame.svg";
import rankerInsights from '../../../assets/icons/ranker-insight.png'
import { Image } from "antd";

const { Title, Paragraph } = Typography;
function AskAIHeroSection(props) {
  const days = [
    { label: "M", name: "Monday" },
    { label: "T", name: "Tuesday" },
    { label: "W", name: "Wednesday" },
    { label: "T", name: "Thursday" },
    { label: "F", name: "Friday" },
    { label: "S", name: "Saturday" },
    { label: "S", name: "Sunday" },
  ];

  const labeledDays = days.map((day, index) => ({
    ...day,
    key: `${day.name}-${index}`, // ensure unique keys
  }));

  const [selectedDays, setSelectedDays] = useState([
    "Friday",
    "Saturday",
    "Sunday",
  ]); // using `name`

  const toggleDay = (dayName) => {
    setSelectedDays((prev) =>
      prev.includes(dayName)
        ? prev.filter((d) => d !== dayName)
        : [...prev, dayName]
    );
  };

  return (
    <div className="flex md:flex-row flex-col mb-8 gap-3 justify-between">
      <div className="left grow">
        <div className="titleBox flex flex-col gap-3 mb-7">
          <Title className="!text-[20px] !text-left !font-medium !text-[#0C0D12] !mb-0 !leading-6 !h-full col-span-full">
            Hi Rajdeep
          </Title>
          <Paragraph className="max-w-[300px] leading-4 text-sm text-left font-regular text-[#666666] !m-0 h-full">
            Practice for 30 mins or more every day to build your streak.
          </Paragraph>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          {labeledDays.map((day) => {
            const isSelected = selectedDays.includes(day.name);
            return (
              <div
                key={day.key}
                onClick={() => toggleDay(day.name)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer transition
                ${isSelected ? "bg-[#EDEFF1]" : "bg-[#EDEFF1] text-[#666]"}`}
                title={day.name}
              >
                {isSelected ? (
                  <img src={flameIcon} alt="fire" className="w-8 h-8" />
                ) : (
                  day.label
                )}
              </div>
            );
          })}
          <Paragraph className="!text-lg text-left !font-semibold !m-0 h-full bg-orange-gradient bg-clip-text text-transparent">
            x{selectedDays.length}
          </Paragraph>
        </div>
      </div>
      <div className="right relative p-5 pe-0 max-w-[600px] w-full bg-white shadow-sm rounded-lg">
        <div className="titleBox flex flex-col gap-1">
          <Title className="sm:!text-[18px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0">
            View Ranker Insight
          </Title>
          <Paragraph className="sm:max-w-[300px] max-w-full leading-4 text-sm text-left font-regular text-[#666666] !m-0 h-full">
            Practice problems and complete lessons every day to build your
            streak.
          </Paragraph>
          <Button
            type="ghost"
            className="mt-4 disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-3 px-6 w-fit h-auto" // Tailwind for styling
          >
            Know More
          </Button>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            preview={false}
            className="ml-auto max-w-[100%] max-h-[130px] object-contain"
            src={rankerInsights}
          />
        </div>
      </div>
    </div>
  );
}

export default AskAIHeroSection;
