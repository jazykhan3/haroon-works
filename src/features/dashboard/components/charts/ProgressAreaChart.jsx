import React from 'react';
import ReactECharts from 'echarts-for-react';

const ProgressAreaChart = ({ data = [], title = "Progress in Accounting" }) => {
  // Default data if none provided
  const defaultData = [
    { name: 'Jan', progress: 20 },
    { name: 'Feb', progress: 35 },
    { name: 'Mar', progress: 45 },
    { name: 'Apr', progress: 65 },
    { name: 'May', progress: 58 },
    { name: 'Jun', progress: 75 },
    { name: 'Jul', progress: 82 }
  ];

  const chartData = data.length > 0 ? data : defaultData;
  const currentProgress = chartData[chartData.length - 1]?.progress || 0;
  const lastUpdate = "21 Apr";

  const option = {
    title: {
      text: 'YOUR PROGRESS',
      textStyle: {
        fontSize: 12,
        fontWeight: 500,
        color: '#444444'
      },
      left: 0,
      top: 0
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.map(item => item.name),
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 12,
        color: '#666666'
      }
    },
    yAxis: {
      type: 'value',
      show: false,
      min: 0,
      max: 100
    },
    series: [
      {
        type: 'line',
        data: chartData.map(item => item.progress),
        smooth: true,
        lineStyle: {
          color: '#F57900',
          width: 3
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(245, 121, 0, 0.3)'
              },
              {
                offset: 1,
                color: 'rgba(245, 121, 0, 0.05)'
              }
            ]
          }
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#F57900'
        },
        emphasis: {
          itemStyle: {
            color: '#F57900',
            borderColor: '#fff',
            borderWidth: 2
          }
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      formatter: function(params) {
        const data = params[0];
        return `${data.name}: ${data.value}%`;
      },
      backgroundColor: '#ffffff',
      borderColor: '#e0e0e0',
      borderWidth: 1,
      textStyle: {
        color: '#333333'
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Interactive Area Chart */}
      <div className="flex-1 min-h-[200px]">
        <ReactECharts 
          option={option} 
          style={{ height: '100%', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>

      {/* Progress Info */}
      <div className="info flex flex-col items-center mt-4">
        <h2 className='text-base font-semibold text-black m-0'>{title}</h2>
        <p className='text-xs font-medium text-[#444] mb-3'>
          Last Check on {lastUpdate} • {currentProgress}% Complete
        </p>
        <button className='bg-[#EAEAEA] hover:bg-[#d5d5d5] transition-colors text-[#7A7A7A] rounded-lg px-[10px] py-[6px] text-sm font-medium'>
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default ProgressAreaChart;