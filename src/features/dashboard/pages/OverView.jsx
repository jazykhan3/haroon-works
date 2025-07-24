import { React, useState } from 'react'
import greebBG from '../../../assets/images/bg-green.png'
import yellowBG from '../../../assets/images/bg-yellow.png'
import blueBG from '../../../assets/images/bg-blue.png'
import greenreportIcon from '../../../assets/icons/green-report-icon.png'
import yellowreportIcon from '../../../assets/icons/yellow-report-icon.png'
import bluereportIcon from '../../../assets/icons/blue-report-icon.png'
import rankerInsights from '../../../assets/icons/ranker-insight.png'
import flameIcon from '../../../assets/icons/flame.svg';
import articleBGICON from '../../../assets/icons/article-bg-icon.png';
import crownicon from '../../../assets/icons/crown-icon.png'
import avatorIcon from '../../../assets/icons/pfp.png'

import { Avatar, Button, Image, Typography } from 'antd'
import { CrownFilled } from '@ant-design/icons'

const { Title, Paragraph } = Typography;

function OverView() {
  const days = [
    { label: 'M', name: 'Monday' },
    { label: 'T', name: 'Tuesday' },
    { label: 'W', name: 'Wednesday' },
    { label: 'T', name: 'Thursday' },
    { label: 'F', name: 'Friday' },
    { label: 'S', name: 'Saturday' },
    { label: 'S', name: 'Sunday' },
  ];

  const labeledDays = days.map((day, index) => ({
    ...day,
    key: `${day.name}-${index}`, // ensure unique keys
  }));
  const [isTastComplete, setIsTastComplete] = useState(true);
  const [selectedDays, setSelectedDays] = useState(['Friday', 'Saturday', 'Sunday']); // using `name`

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
      {/* Your Metrices */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-5 bg-white shadow-sm rounded-lg mb-8">
        <Title className='!text-[20px] !text-left !font-medium !text-[#0C0D12] !mb-0 !leading-6 !h-full col-span-full'>
          Your Metrices
        </Title>
        <div className="first-card relative">
          <Image
            preview={false}
            className='max-w-full h-[220px] object-contain rounded-lg shadow-sm'
            src={greebBG}
          />
          <div className='flex flex-col justify-between p-6 absolute top-0 left-0 right-0 w-full h-full'>
            <Image
              preview={false}
              className='!w-[36px] !h-[36px] object-contain'
              src={greenreportIcon}
            />
            <div className='flex flex-col'>
              <Title className='!text-[28px] !text-left !font-medium !text-[#0C0D12] !mb-2 !h-full'>
                17
              </Title>
              <Paragraph className="text-xs text-left font-regular text-[#666666] !m-0 h-full">
                Tests appeared
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="second-card relative">
          <Image
            preview={false}
            className='max-w-full h-[180px] object-contain shadow-sm'
            src={yellowBG}
          />
          <div className='flex flex-col justify-between p-6 absolute top-0 left-0 right-0 w-full h-full'>
            <Image
              preview={false}
              className='!w-[36px] !h-[36px] object-contain'
              src={yellowreportIcon}
            />
            <div className='flex flex-col'>
              <Title className='!text-[28px] !text-left !font-medium !text-[#0C0D12] !mb-2 !h-full'>
                17
              </Title>
              <Paragraph className="text-xs text-left font-regular text-[#666666] !m-0 h-full">
                Tests appeared
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="third-card relative">
          <Image
            preview={false}
            className='max-w-full h-[180px] object-contain shadow-sm'
            src={blueBG}
          />
          <div className='flex flex-col justify-between p-6 absolute top-0 left-0 right-0 w-full h-full'>
            <Image
              preview={false}
              className='!w-[36px] !h-[36px] object-contain'
              src={bluereportIcon}
            />
            <div className='flex flex-col'>
              <Title className='!text-[28px] !text-left !font-medium !text-[#0C0D12] !mb-2 !h-full'>
                17
              </Title>
              <Paragraph className="text-xs text-left font-regular text-[#666666] !m-0 h-full">
                Tests appeared
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 gap-5 mb-8">
        <div className="left lg:col-span-3 col-span-1">
          <div className="titleBox flex gap-2 flex-wrap justify-between items-center">
            <Title className='sm:!text-[20px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
              Recent Tests
            </Title>
            <a href="#" className='text-sm font-regular text-[#666666] hover:text-[#F6581C]'>View All</a>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 flex-wrap gap-5 mt-5 mb-8">
            <div className="item p-5 bg-white shadow-sm rounded-lg">
              <div className="top-title flex gap-3 items-center">
                <img src={articleBGICON} alt="icon" className="w-10 h-10" />
                <div>
                  <h3 className='text-left text-base font-medium text-black mb-0'>CA Mock Test - 2</h3>
                  <p className='text-left m-0 text-xs font-normal text-[#666]'>20 May, 2025</p>
                </div>
              </div>
              <div className="flex gap-2 justify-between items-center my-6">
                <div>
                  <p className='m-0 text-[#666] text-[10px] font-normal flex flex-col'>
                    <span className='font-bold'>15/20</span>
                    <span>Ques Attempted</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>15</span>
                    <span>Correrct</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>5</span>
                    <span>Wrong</span>
                  </p>
                </div>
              </div>
              <div className={`flex justify-between items-center gap-2 p-3 shadow-sm rounded-lg
                ${isTastComplete ? 'bg-light-green-gradient bg-[#EDFAF6]' : 'bg-[#FFF7EC] bg-light-orange-gradient'}`}>
                <p className='m-0 text-[#666] text-[10px] font-normal flex items gap-1'>
                  {isTastComplete ?
                    (
                      <>
                        <span>You Scored</span>
                        <span className='font-bold text-[#08BD80]'>80%</span>
                      </>
                    )
                    :
                    'You didn’t submit the test'
                  }
                </p>
                <a href="" className={`m-0 text-xs  font-medium ${isTastComplete ? 'text-black hover:text-black' : 'bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent'}`}>
                  {isTastComplete ? 'Analyse' : 'Resume Now'}
                </a>
              </div>
            </div>
            <div className="item p-5 bg-white shadow-sm rounded-lg">
              <div className="top-title flex gap-3 items-center">
                <img src={articleBGICON} alt="icon" className="w-10 h-10" />
                <div>
                  <h3 className='text-left text-base font-medium text-black mb-0'>CA Mock Test - 2</h3>
                  <p className='text-left m-0 text-xs font-normal text-[#666]'>20 May, 2025</p>
                </div>
              </div>
              <div className="flex gap-2 justify-between items-center my-6">
                <div>
                  <p className='m-0 text-[#666] text-[10px] font-normal flex flex-col'>
                    <span className='font-bold'>15/20</span>
                    <span>Ques Attempted</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>15</span>
                    <span>Correrct</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>5</span>
                    <span>Wrong</span>
                  </p>
                </div>
              </div>
              <div className={`flex justify-between items-center gap-2 p-3 shadow-sm rounded-lg
                ${isTastComplete ? 'bg-light-green-gradient bg-[#EDFAF6]' : 'bg-[#FFF7EC] bg-light-orange-gradient'}`}>
                <p className='m-0 text-[#666] text-[10px] font-normal flex items gap-1'>
                  {isTastComplete ?
                    (
                      <>
                        <span>You Scored</span>
                        <span className='font-bold text-[#08BD80]'>80%</span>
                      </>
                    )
                    :
                    'You didn’t submit the test'
                  }
                </p>
                <a href="" className={`m-0 text-xs  font-medium ${isTastComplete ? 'text-black hover:text-black' : 'bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent'}`}>
                  {isTastComplete ? 'Analyse' : 'Resume Now'}
                </a>
              </div>
            </div>
            <div className="item p-5 bg-white shadow-sm rounded-lg">
              <div className="top-title flex gap-3 items-center">
                <img src={articleBGICON} alt="icon" className="w-10 h-10" />
                <div>
                  <h3 className='text-left text-base font-medium text-black mb-0'>CA Mock Test - 2</h3>
                  <p className='text-left m-0 text-xs font-normal text-[#666]'>20 May, 2025</p>
                </div>
              </div>
              <div className="flex gap-2 justify-between items-center my-6">
                <div>
                  <p className='m-0 text-[#666] text-[10px] font-normal flex flex-col'>
                    <span className='font-bold'>15/20</span>
                    <span>Ques Attempted</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>15</span>
                    <span>Correrct</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>5</span>
                    <span>Wrong</span>
                  </p>
                </div>
              </div>
              <div className={`flex justify-between items-center gap-2 p-3 shadow-sm rounded-lg
                ${!isTastComplete ? 'bg-light-green-gradient bg-[#EDFAF6]' : 'bg-[#FFF7EC] bg-light-orange-gradient'}`}>
                <p className='m-0 text-[#666] text-[10px] font-normal flex items gap-1'>
                  {!isTastComplete ?
                    (
                      <>
                        <span>You Scored</span>
                        <span className='font-bold text-[#08BD80]'>80%</span>
                      </>
                    )
                    :
                    'You didn’t submit the test'
                  }
                </p>
                <a href="" className={`m-0 text-xs  font-medium ${!isTastComplete ? 'text-black' : 'bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent'}`}>
                  {!isTastComplete ? 'Analyse' : 'Resume Now'}
                </a>
              </div>
            </div>
            <div className="item p-5 bg-white shadow-sm rounded-lg">
              <div className="top-title flex gap-3 items-center">
                <img src={articleBGICON} alt="icon" className="w-10 h-10" />
                <div>
                  <h3 className='text-left text-base font-medium text-black mb-0'>CA Mock Test - 2</h3>
                  <p className='text-left m-0 text-xs font-normal text-[#666]'>20 May, 2025</p>
                </div>
              </div>
              <div className="flex gap-2 justify-between items-center my-6">
                <div>
                  <p className='m-0 text-[#666] text-[10px] font-normal flex flex-col'>
                    <span className='font-bold'>15/20</span>
                    <span>Ques Attempted</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>15</span>
                    <span>Correrct</span>
                  </p>
                </div>
                <div>
                  <p className='m-0 text-[#666] text-xs font-normal flex flex-col'>
                    <span className='font-bold'>5</span>
                    <span>Wrong</span>
                  </p>
                </div>
              </div>
              <div className={`flex justify-between items-center gap-2 p-3 shadow-sm rounded-lg
                ${!isTastComplete ? 'bg-light-green-gradient bg-[#EDFAF6]' : 'bg-[#FFF7EC] bg-light-orange-gradient'}`}>
                <p className='m-0 text-[#666] text-[10px] font-normal flex items gap-1'>
                  {!isTastComplete ?
                    (
                      <>
                        <span>You Scored</span>
                        <span className='font-bold text-[#08BD80]'>80%</span>
                      </>
                    )
                    :
                    'You didn’t submit the test'
                  }
                </p>
                <a href="" className={`m-0 text-xs  font-medium ${!isTastComplete ? 'text-black' : 'bg-orange-gradient bg-clip-text text-transparent hover:bg-orange-gradient-hover hover:bg-clip-text hover:text-transparent'}`}>
                  {!isTastComplete ? 'Analyse' : 'Resume Now'}
                </a>
              </div>
            </div>
          </div>
          {/* Weak Topics  */}
          <div className="titleBox flex gap-2 flex-wrap justify-between items-center mb-6">
            <Title className='sm:!text-[20px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
              Weak Topics
            </Title>
            <a href="#" className='text-sm font-regular text-[#666666] hover:text-[#F6581C]'>View All</a>
          </div>
          {/* Topics List */}
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className="flex gap-2 items-center justify-between p-5 shadow-sm rounded-lg bg-white mb-5">
              <div className='flex gap-3 items-center grow'>
                <img src={articleBGICON} alt="icon" className="w-10 h-10" />
                <div>
                  <h3 className='text-left text-base font-medium text-black mb-0'>Topic Name</h3>
                  <p className='text-left m-0 text-xs font-normal text-[#666]'>You made 20 mistakes in this topic in tests</p>
                </div>
              </div>
              <div className="buton-box bg-orange-gradient hover:bg-orange-gradient-hover p-[2px] rounded-lg">
                <Button
                  type="ghost"
                  onClick={''}
                  className="group bg-[#fff] hover:bg-orange-gradient-hover text-base font-bold leading-4 py-[10px] px-8 w-fit h-auto hover:text-white animate-none transition-none " // Tailwind for styling
                >
                  <span className='bg-orange-gradient bg-clip-text text-transparent group-hover:text-white'>Paractice</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="right lg:col-span-2 col-span-1 pt-5 bg-white rounded-lg shadow-sm h-max">
          <div className="titleBox flex gap-2 flex-wrap justify-between items-center mb-3 px-5">
            <Title className='sm:!text-[20px] !text-base !text-left !font-semibold !text-[#0C0D12] !m-0'>
              Leaderboard
            </Title>
            <a href="#" className='text-sm font-regular text-[#666666] hover:text-[#F6581C]'>View All</a>
          </div>

          {/* list  */}
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-light-orange-gradient p-5">
              <div className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full mr-4">
                <p className='text-sm font-regular text-[#666] m-0'>1</p>
              </div>
              <div className="flex items-center flex-1">
                <Avatar
                  src={avatorIcon} // replace with actual image
                  size={48}
                  className="mr-4"
                />
                <div>
                  <h4 className="text-sm font-medium text-black mb-0">Rajdeep Sarkar</h4>
                  <p className="mb-0 px-3 py-1 text-white bg-[#08BD80] text-sm font-medium rounded-full mt-1">
                    2,406 points
                  </p>
                </div>
              </div>
              {/* Crown Icon */}
              <div className="">
                <img src={crownicon} alt="crownIcon" className='w-9 h-9 object-contain' />
              </div>
            </div>
          ))}
          {Array(3).fill(null).map((_, index) => (
            <div key={index} className="flex items-center justify-between hover:bg-light-orange-gradient p-5">
              <div className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full mr-4">
                <p className='text-sm font-regular text-[#666] m-0'>1</p>
              </div>
              <div className="flex items-center flex-1">
                <Avatar
                  src={avatorIcon} // replace with actual image
                  size={48}
                  className="mr-4"
                />
                <div>
                  <h4 className="text-sm font-medium text-black mb-0">Rajdeep Sarkar</h4>
                  <p className="mb-0 px-3 py-1 text-white bg-[#5897F7] text-sm font-medium rounded-full mt-1">
                    2,406 points
                  </p>
                </div>
              </div>
              {/* Crown Icon */}
              <div className="hidden">
                <img src={crownicon} alt="crownIcon" className='w-9 h-9 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OverView
