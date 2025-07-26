import React from 'react';
import LeaderBoardTable from '../components/tables/LeaderBoardTable';
import { CrownFilled } from '@ant-design/icons';
import { Avatar } from 'antd';
import bggradient from '../../../assets/images/bg-gradient-yellow.png'
import manAvator from '../../../assets/icons/man-avator.png'
import crownrewardIcon from '../../../assets/icons/crown-icon.png'
import podiumGradient from '../../../assets/icons/podium-gradient.png'


const LeaderBoard = () => {
  const users = [
    { position: 3, name: 'Davis Curtis', points: 2406 },
    { position: 1, name: 'Davis Curtis', points: 2406 },
    { position: 2, name: 'Davis Curtis', points: 2406 },
  ];

  const heightMap = {
    1: 'h-[240px]',
    2: 'h-40',
    3: 'h-40',
  };

  const orderMap = {
    1: 'order-2',
    2: 'order-3',
    3: 'order-1',
  };

  return (
    <div className="bg-white p-5 shadow-sm rounded-lg ">

      <div className="bg-gradient-to-br from-[#fff8ee] to-[#fde8c9] rounded-md lg:pt-16 md:pt-12 sm:pt-10 pt-7 mb-5">
        <div className='flex justify-center items-end gap-4 max-w-[850px] mx-auto relative lg:px-7 px-0'>
          <div className='absolute bottom-0'>
            <img src={bggradient} alt="" className='w-full h-full object-contain' />
          </div>
          {users.map((user) => (
            <div
              key={user.position}
              className={`flex flex-col items-center z-10 relative ${orderMap[user.position]}`}
            >
              {/* Avatar with Crown */}
              <div className="relative mb-2">
                <Avatar size={54} src={manAvator} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 rounded-full p-1">
                  <img src={crownrewardIcon} alt="" className='w-6 h-6 object-contain' />
                </span>
              </div>

              {/* Name */}
              <div className="text-base font-medium text-black">{user.name}</div>
              {/* Points */}
              <div className="text-[10px] bg-[#08BD80] text-white font-medium rounded-full px-3 py-1 mt-1">
                {user.points.toLocaleString()} points
              </div>

              {/* Podium Block */}
              <div
                className={` mt-4 w-full lg:max-w-[164px] md:max-w-[120px] sm:max-w-[80px] max-w-[60px]}`}
              >
                <span className='w-full lg:max-w-[164px] md:max-w-[120px] sm:max-w-[80px] max-w-[60px] h-[16px]'>
                  <img src={podiumGradient} alt="" className='w-full h-full object-contain' />
                </span>
                <span
                  className={`pt-5 w-full bg-[#F68C25] text-white text-[40px] font-black flex items-start justify-center ${heightMap[user.position]}`}
                >
                  {user.position}
                </span>
              </div>
            </div>
          ))}
          <div className='absolute z-30 max-w-[320px] mx-auto w-full rounded-t-[10px] bg-white p-3 flex flex-row gap-4'>
            <h4 className='w-14 h-14 rounded-xl bg-[#F68C25] p-[14px] text-2xl font-semibold m-0 leading-6 text-white'>#4</h4>
            <p className='text-base font-medium text-black m-0 text-left'>You are doing better than 60% of other players!</p>
          </div>
        </div>
      </div>

      <LeaderBoardTable />
    </div>
  );
};

export default LeaderBoard;
