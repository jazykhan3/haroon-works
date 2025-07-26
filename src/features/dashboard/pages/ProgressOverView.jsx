import { React, useState } from 'react'
import rankerInsights from '../../../assets/icons/ranker-insight.png'
import flameIcon from '../../../assets/icons/flame.svg';
import progressGraph from '../../../assets/images/progress-graph.png';

import {Button, Image, Typography } from 'antd'
import PracticeTable from '../components/tables/PracticeTable'

const { Title, Paragraph } = Typography;

function ProgressOverView() {
  const days = [
    { label: 'M', name: 'Monday' },
    { label: 'T', name: 'Tuesday' },
    { label: 'W', name: 'Wednesday' },
    { label: 'T', name: 'Thursday' },
    { label: 'F', name: 'Friday' },
    { label: 'S', name: 'Saturday' },
    { label: 'S', name: 'Sunday' },
  ];
  const segments = [
    {
      width: '25%',
      style: {
        backgroundColor: '#B6B0FB',
        border: '1.5px solid #978FED',
      }
    },
    {
      width: '30%',
      style: {
        backgroundColor: '#A4DDDC',
        border: '1.5px solid #A4DDDC',
      }
    },
    {
      width: '15%',
      style: {
        backgroundColor: '#FBDE9D',
        border: '1.5px solid #F6CF7D',
      }
    },
    {
      width: '30%',
      style: {
        backgroundColor: '#95A1FC',
        border: '1.5px solid #697BE9',
      }
    },
  ];
  const labeledDays = days.map((day, index) => ({
    ...day,
    key: `${day.name}-${index}`,
  }));
  const [isTastComplete, setIsTastComplete] = useState(true);
  const [selectedDays, setSelectedDays] = useState(['Friday', 'Saturday', 'Sunday']); 

  const toggleDay = (dayName) => {
    setSelectedDays((prev) =>
      prev.includes(dayName)
        ? prev.filter((d) => d !== dayName)
        : [...prev, dayName]
    );
  };
  return (
    <div>
      {/* Top info Box  */}
      <div className="flex md:flex-row flex-col mb-8 gap-3 justify-between">
        <div className="left grow">
          <div className="titleBox flex flex-col gap-3 mb-7">
            <Title className='!text-[20px] !text-left !font-medium !text-[#0C0D12] !mb-0 !leading-6 !h-full col-span-full'>
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
                ${isSelected ? 'bg-[#EDEFF1]' : 'bg-[#EDEFF1] text-[#666]'}`}
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
            <Title className='sm:!text-[18px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
              View Ranker Insight
            </Title>
            <Paragraph className="sm:max-w-[300px] max-w-full leading-4 text-sm text-left font-regular text-[#666666] !m-0 h-full">
              Practice problems and complete lessons every day to build your streak.
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
              className='ml-auto max-w-[100%] max-h-[130px] object-contain'
              src={rankerInsights}
            />
          </div>
        </div>
      </div>
      {/* Routine for Paper I - Accounting (100 Marks) */}
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 mb-8 bg-white shadow-sm p-5">
        <Title className='col-span-full sm:!text-[20px] !text-base !text-left !font-medium !text-[#0C0D12] !m-0'>
          Routine for Paper I - Accounting (100 Marks)
        </Title>
        <div className="left lg:col-span-3 col-span-1 shadow-inner-border rounded-2xl p-7">
          <div className="top">
            <Title className='!text-xs !text-left !font-medium !text-[#444] !m-0'>
              WEIGHTAGE
            </Title>
            <Title className='md:!text-2xl !text-xl !text-left !font-medium !text-black !m-0 !mt-2'>
              4 Sections
            </Title>
            <div className="flex w-full h-[6px] shadow-inner rounded-full overflow-hidden mt-5"> 
              {segments.map((segment, index) => (
                <div
                  key={index}
                  style={{ width: segment.width, ...segment.style }}
                  className={`h-full ${index < segments.length - 1 ? 'mr-1' : ''}`}
                ></div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 flex-wrap gap-3 mt-7">
            <div className="item p-3 bg-white shadow-inner-border rounded-lg">
              <p className='text-left mb-2 text-sm font-semibold text-[#7A7A7A] flex items-center gap-2'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#978FED]' />
                TOPIC 1</p>
              <h3 className='text-left text-xl font-medium text-black mb-0'>25-30%</h3>
            </div>
            <div className="item p-3 bg-white shadow-inner-border rounded-lg">
              <p className='text-left mb-2 text-sm font-semibold text-[#7A7A7A] flex items-center gap-2'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#F2CB27]' />
                TOPIC 1</p>
              <h3 className='text-left text-xl font-medium text-black mb-0'>25-30%</h3>
            </div>
            <div className="item p-3 bg-white shadow-inner-border rounded-lg">
              <p className='text-left mb-2 text-sm font-semibold text-[#7A7A7A] flex items-center gap-2'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#08BD80]' />
                TOPIC 1</p>
              <h3 className='text-left text-xl font-medium text-black mb-0'>25-30%</h3>
            </div>
            <div className="item p-3 bg-white shadow-inner-border rounded-lg">
              <p className='text-left mb-2 text-sm font-semibold text-[#7A7A7A] flex items-center gap-2'>
                <span className='w-[6px] h-[6px] rounded-full bg-[#5897F7]' />
                TOPIC 1</p>
              <h3 className='text-left text-xl font-medium text-black mb-0'>25-30%</h3>
            </div>
          </div>
        </div>
        <div className="right lg:col-span-2 col-span-1 shadow-inner-border rounded-2xl p-5">
          <Title className='!text-xs !text-left !font-medium !text-[#444] !m-0'>
            YOUR PROGRESS
          </Title>
          <div className='p-8 text-center'>
            <img src={progressGraph} alt="" className='max-h-[155px] object-contain mx-auto'/>
          </div>
          <div className="info flex flex-col items-center">
            <h2 className='text-base font-semibold text-black m-0'>Progress in Accounting</h2>
            <p className='text-xs font-medium text-[#444] mb-3'>Last Check on 21 Apr</p>
            <button className='bg-[#EAEAEA] text-[#7A7A7A] rounded-lg px-[10px] py-[6px] text-sm font-medium'>Update</button>
          </div>
        </div>
        <div className="col-span-full mt-5">
          <Title className='sm:!text-[20px] !text-base !text-left !font-medium !text-[#0C0D12] !m-0'>
            Chapters
          </Title>
          <PracticeTable />
        </div>
      </div>
    </div>
  )
}

export default ProgressOverView
