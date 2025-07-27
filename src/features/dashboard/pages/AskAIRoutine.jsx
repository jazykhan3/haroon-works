import React, { useState, useEffect, useRef } from 'react';
import { Carousel, Progress, Button } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  PlusOutlined,
  CheckOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import AskAIHeroSection from '../components/AskAIHeroSection';
import { 
  ROUTINE_CONFIG, 
  CHALLENGES_DATA, 
  HABITS_DATA, 
  UI_CONSTANTS, 
  DAY_NAMES 
} from '../constants/routineConstants';
import './AskAIRoutine.css';

const generateCurrentMonthDays = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();
  
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days = [];
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dayName = DAY_NAMES[date.getDay()];
    
    days.push({
      day: day.toString(),
      label: dayName,
      active: day === today,
      date: date
    });
  }
  
  return days;
};

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

function AskAIRoutine() {
  const carouselRef = useRef(null);
  const [currentMonthDays, setCurrentMonthDays] = useState([]);
  const [dayChunks, setDayChunks] = useState([]);
  const [datesPerRow, setDatesPerRow] = useState(16);

  useEffect(() => {
    const updateDatesPerRow = () => {
      const width = window.innerWidth;
      const breakpoints = UI_CONSTANTS.responsiveBreakpoints;
      const datesConfig = UI_CONSTANTS.datesPerRow;
      
      if (width <= breakpoints.mobile) {
        setDatesPerRow(datesConfig.mobile);
      } else if (width <= breakpoints.tablet) {
        setDatesPerRow(datesConfig.tablet);
      } else if (width <= breakpoints.desktop) {
        setDatesPerRow(datesConfig.desktop);
      } else {
        setDatesPerRow(datesConfig.large);
      }
    };

    updateDatesPerRow();
    window.addEventListener('resize', updateDatesPerRow);
    return () => window.removeEventListener('resize', updateDatesPerRow);
  }, []);

  useEffect(() => {
    const days = generateCurrentMonthDays();
    setCurrentMonthDays(days);
    setDayChunks(chunkArray(days, datesPerRow));
  }, [datesPerRow]);

  const handlePrev = () => {
    carouselRef.current?.prev();
  };

  const handleNext = () => {
    carouselRef.current?.next();
  };

  return (
    <div className="bg-[#f9f9fa] min-h-screen px-4 py-8 font-inter">
      <AskAIHeroSection />

      <div className="mx-auto mt-10 bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-left">
          {ROUTINE_CONFIG.title}
        </h2>

        <div className="border border-gray-100 rounded-lg p-4 mb-6">
          <div className="relative mb-4">
            <div className="relative">
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition-all duration-200"
                onClick={handlePrev}
              >
                <DoubleLeftOutlined className="text-white" />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer shadow-md transition-all duration-200"
                onClick={handleNext}
              >
                <DoubleRightOutlined className="text-white" />
              </button>
              <Carousel
                ref={carouselRef}
                dots={true}
                infinite={false}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={false}
                className="date-carousel"
              >
                {dayChunks.map((chunk, chunkIndex) => (
                  <div key={chunkIndex} className="px-12">
                    <div
                      className="grid gap-3 justify-items-center"
                      style={{
                        gridTemplateColumns: `repeat(${datesPerRow}, 1fr)`,
                        maxWidth: "100%",
                      }}
                    >
                      {chunk.map((d, index) => (
                        <div
                          key={`${chunkIndex}-${index}`}
                          className="flex flex-col items-center"
                        >
                          <div
                            className={`w-14 h-20 flex flex-col items-center justify-center rounded-2xl transition-all duration-200 cursor-pointer ${
                              d.active
                                ? `date-rectangle active bg-white text-[${UI_CONSTANTS.colors.primary}] font-bold shadow-lg border border-[${UI_CONSTANTS.colors.primary}] border-2`
                                : "text-gray-700 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                            }`}
                          >
                            <span className="text-lg font-bold">{d.day}</span>
                            <span className="text-xs font-medium mt-1">
                              {d.label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#fff6ea] to-[#feecd2] rounded-lg px-4 py-3 mb-4 gap-4 flex font-inter">
            <div className="flex items-center space-x-4">
              <Progress
                percent={ROUTINE_CONFIG.dailyGoals.progress}
                size={50}
                type="circle"
                strokeColor={ROUTINE_CONFIG.dailyGoals.color}
              />
            </div>
            <div className="flex flex-col  p-2">
              <p className={`font-bold text-[16px] text-[${ROUTINE_CONFIG.dailyGoals.color}]  leading-none m-0`}>
                {ROUTINE_CONFIG.dailyGoals.title}
              </p>
              <p className={`text-sm text-[${ROUTINE_CONFIG.dailyGoals.color}] mt-1 text-left m-0`}>
                {ROUTINE_CONFIG.dailyGoals.subtitle}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold font-inter">Challenges</h3>
              <button className="text-blue-600 text-sm font-medium">
                VIEW ALL
              </button>
            </div>
            <div className="border border-gray-200 rounded-xl p-2">
              {CHALLENGES_DATA.map((challenge) => (
                <div key={challenge.id}>
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm bg-[#ebecff] rounded-full">{challenge.icon}</div>
                          <p className="font-bold text-gray-800 text-md">
                            {challenge.title}
                          </p>
                        </div>
                        <p className="text-xs text-gray-500">
                          {challenge.timeLeft}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 flex-col">
                      <div className="flex -space-x-2">
                        {challenge.users.map((user) => (
                          <img
                            key={user.id}
                            src={user.avatar}
                            alt={user.name}
                            className="w-8 h-8 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2 mt-2">
                        {challenge.friendsJoined} friends joined
                      </span>
                    </div>
                  </div>
                  <div>
                    <Progress
                      percent={challenge.progress}
                      size="small"
                      showInfo={false}
                      strokeColor={UI_CONSTANTS.colors.progressGradient}
                      className="w-full -mt-1"
                      strokeWidth={6}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-bold font-inter">Habits</h3>
              <button className="text-blue-600 text-sm font-medium">
                VIEW ALL
              </button>
            </div>
            <div className="space-y-2">
              {HABITS_DATA.map((habit) => (
                <div
                  key={habit.id}
                  className="flex items-center p-4 rounded-xl border border-gray-200 bg-[#fdfdfd]"
                >
                  <div className="flex items-center justify-center relative w-16 flex-shrink-0">
                    <Progress
                      percent={habit.progressPercent}
                      size={48}
                      type="circle"
                      strokeColor={UI_CONSTANTS.colors.progressGradient}
                      showInfo={false}
                      strokeWidth={6}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xl">
                      {habit.icon}
                    </div>
                  </div>
                  <div className="flex-1 text-center px-4">
                    <p className="font-bold">{habit.title}</p>
                    <p className="text-xs text-gray-500">{habit.progress}</p>
                  </div>
                  <div className="flex items-center space-x-2 w-20 justify-end">
                    {habit.users.length > 0 && (
                      <div className="flex -space-x-2">
                        {habit.users.slice(0, 2).map((userImg, i) => (
                          <img
                            key={i}
                            src={userImg}
                            alt={`User ${i + 1}`}
                            className="w-6 h-6 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                        {habit.users.length > 2 && (
                          <div className="w-6 h-6 rounded-full bg-gray-300 text-[#3843FF] text-xs flex items-center justify-center border border-white">
                            +{habit.users.length - 2}
                          </div>
                        )}
                      </div>
                    )}
                    <Button
                      shape="circle"
                      icon={
                        habit.completed ? (
                          <CheckOutlined className="text-green-600" />
                        ) : (
                          <PlusOutlined />
                        )
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskAIRoutine;
