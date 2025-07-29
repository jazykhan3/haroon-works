import React from 'react';
import ReactECharts from 'echarts-for-react';

const WeightageBarChart = ({ data = [] }) => {
  // Default data if none provided
  const defaultData = [
    { name: 'Financial Accounting', percentage: 25, color: '#978FED' },
    { name: 'Cost Accounting', percentage: 30, color: '#A4DDDC' },
    { name: 'Taxation', percentage: 15, color: '#F6CF7D' },
    { name: 'Auditing', percentage: 30, color: '#697BE9' }
  ];

  const chartData = data.length > 0 ? data : defaultData;

  const option = {
    title: {
      text: 'WEIGHTAGE',
      textStyle: {
        fontSize: 12,
        fontWeight: 500,
        color: '#444444'
      },
      left: 0,
      top: 0
    },
    subtitle: {
      text: `${chartData.length} Sections`,
      textStyle: {
        fontSize: 20,
        fontWeight: 500,
        color: '#000000'
      },
      left: 0,
      top: 25
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '25%',
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
        fontSize: 11,
        color: '#666666',
        interval: 0,
        rotate: 15
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        fontSize: 11,
        color: '#666666',
        formatter: '{value}%'
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      }
    },
    series: [
      {
        type: 'bar',
        data: chartData.map(item => ({
          value: item.percentage,
          itemStyle: {
            color: item.color,
            borderRadius: [4, 4, 0, 0]
          }
        })),
        barWidth: '60%',
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%',
          fontSize: 12,
          color: '#333'
        }
      }
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        const data = params[0];
        return `${data.name}: ${data.value}%`;
      }
    }
  };

  return (
    <div className="w-full">
      {/* ECharts Bar Chart */}
      <div className="h-[280px] mb-6">
        <ReactECharts 
          option={option} 
          style={{ height: '100%', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>

      {/* Legend/Summary Cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {chartData.map((item, index) => (
          <div key={index} className="item p-3 bg-white shadow-inner-border rounded-lg">
            <p className='text-left mb-2 text-sm font-semibold text-[#7A7A7A] flex items-center gap-2'>
              <span 
                className='w-[6px] h-[6px] rounded-full' 
                style={{ backgroundColor: item.color }}
              />
              {item.name.toUpperCase()}
            </p>
            <h3 className='text-left text-xl font-medium text-black mb-0'>
              {item.percentage}%
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeightageBarChart;