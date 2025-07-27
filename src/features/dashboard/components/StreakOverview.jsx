import React, { useRef, useState, useEffect } from "react";
import { Carousel } from "antd";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
import { ReactComponent as StreakIcon } from "../../../assets/svgs/streak.svg";
import { ReactComponent as SmallIcon } from "../../../assets/svgs/Small.svg";
import "./StreakOverview.css";
import { useWindowSize } from "react-use";

// Dummy data for streak calendar
const generateStreakData = (monthsPerSlide = 6) => {
  const allMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsData = allMonths.map((month, monthIndex) => {
    const daysInMonth = new Date(2025, monthIndex + 1, 0).getDate();
    const days = [];

    // Create more realistic streak patterns
    let streakCount = 0;
    let shouldHaveStreak = true;

    for (let day = 1; day <= daysInMonth; day++) {
      // Create streak patterns - some consecutive days, some gaps
      if (streakCount > 0) {
        streakCount--;
        shouldHaveStreak = true;
      } else {
        // Random chance to start a new streak or have a gap
        const random = Math.random();
        if (random > 14) {
          // Start a new streak (3-7 days)
          streakCount = Math.floor(Math.random() * 5) + 2;
          shouldHaveStreak = true;
        } else if (random > 0.4) {
          // Single day streak
          shouldHaveStreak = true;
        } else {
          // Gap day
          shouldHaveStreak = false;
        }
      }

      days.push({
        day,
        hasStreak: shouldHaveStreak,
        date: new Date(2025, monthIndex, day),
      });
    }

    return {
      month,
      monthIndex,
      days,
    };
  });

  // Group months into slides based on monthsPerSlide
  const slides = [];
  for (let i = 0; i < monthsData.length; i += monthsPerSlide) {
    slides.push(monthsData.slice(i, i + monthsPerSlide));
  }

  return slides;
};

function StreakOverview(props) {
  const carouselRef = useRef(null);
  const [monthsPerSlide, setMonthsPerSlide] = useState(6);
  const [streakData, setStreakData] = useState([]);

  const { width } = useWindowSize();

  useEffect(() => {
    let newMonths = 6;
    console.log("Width:", width);
    if (width <= 480) newMonths = 1;
    else if (width <= 768) newMonths = 3;

    setMonthsPerSlide(newMonths); // ✅ Set in state
    setStreakData(generateStreakData(newMonths)); // ✅ Generate with it
  }, [width]);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  const renderMonth = (monthData) => (
    <div key={monthData.month} className="streak-month">
      <div className="streak-grid">
        {monthData.days.map((dayData) => (
          <div key={dayData.day} className="streak-day">
            {dayData.hasStreak ? (
              <div className="streak-icon-container">
                <StreakIcon className="streak-icon" />
              </div>
            ) : (
              <div className="streak-icon-container">
                <SmallIcon className="small-icon" />
              </div>
            )}
          </div>
        ))}
      </div>
      <h3 className="month-title">{monthData.month}</h3>
    </div>
  );

  const renderSlide = (slideMonths, slideIndex) => (
    <div key={slideIndex} className="streak-slide">
      <div
        className="months-row"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${monthsPerSlide}, 1fr)`,
          gap: "12px",
        }}
      >
        {slideMonths.map(renderMonth)}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-xl p-6 font-inter mt-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 text-left">
          Streak Overview
        </h2>
        <p className="text-md text-gray-600 text-left">
          Practice for 30 mins or more every day to build your streak.
        </p>
      </div>
      <div className="streak-carousel-container">
        <button className="carousel-nav-btn carousel-prev" onClick={handlePrev}>
          <DoubleLeftOutlined className="text-white" />
        </button>
        <button className="carousel-nav-btn carousel-next" onClick={handleNext}>
          <DoubleRightOutlined className="text-white" />
        </button>
        <Carousel
          ref={carouselRef}
          dots={true}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}
          className="streak-carousel"
        >
          {streakData.map(renderSlide)}
        </Carousel>
      </div>
    </div>
  );
}

export default StreakOverview;
