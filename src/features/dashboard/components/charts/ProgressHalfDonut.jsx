import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';

const ProgressHalfDonut = ({ progress = 48, title = "Progress in Accounting" }) => {
  const chartRef = useRef();
  const lastUpdate = "21 Apr";

  const segments = [
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#FF9792' },
        { offset: 1, color: '#F0352C' }
      ]),
      threshold: 25
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0.34, color: '#F6CF7D' },
        { offset: 0.87, color: '#FFE9BC' }
      ]),
      threshold: 25
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0.07, color: '#FF3F05' },
        { offset: 0.5, color: '#FF8205' },
        { offset: 0.96, color: '#FFEBD9' }
      ]),
      threshold: 25
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#08BD80' },
        { offset: 1, color: '#BDFFC5' }
      ]),
      threshold: 25
    }
  ];

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        padAngle: 1,
        itemStyle: {
          borderRadius: 50
        },
        labelLine: { show: false },
        label: { show: false, position: 'center' },
        name: 'Access From',
        type: 'pie',
        radius: ['84%', '100%'],
        center: ['50%', '70%'],
        startAngle: 180,
        endAngle: 360,
        data: [
          { value: 25, itemStyle: { color: segments[0].gradient } },
          { value: 25, itemStyle: { color: segments[1].gradient } },
          { value: 25, itemStyle: { color: segments[2].gradient } },
          { value: 25, itemStyle: { color: segments[3].gradient } }
        ]
      }
    ],
  
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full" style={{ height: '220px' }}>
        <ReactECharts
          ref={chartRef}
          option={option}
          style={{ height: '250px', width: '100%' }}
          opts={{ renderer: 'canvas' }}
        />
      </div>
      <div className="text-center mt-2">
        <h2 className='text-base font-semibold text-black'>{title}</h2>
        <p className='text-xs text-gray-600 mb-2'>Last Check on {lastUpdate}</p>
        <button className='bg-[#EAEAEA] hover:bg-[#d5d5d5] text-[#7A7A7A] rounded-lg px-[12px] py-[6px] text-sm font-medium transition'>
          Update
        </button>
      </div>
    </div>
  );
};

export default ProgressHalfDonut;