import React from 'react';

const WeightageSegmentedBar = ({ data = [] }) => {
  // Default data if none provided
  const defaultData = [
    { name: 'Financial Accounting', percentage: 25, color: '#978FED' },
    { name: 'Cost Accounting', percentage: 30, color: '#A4DDDC' },
    { name: 'Taxation', percentage: 15, color: '#F6CF7D' },
    { name: 'Auditing', percentage: 30, color: '#697BE9' }
  ];

  const chartData = data.length > 0 ? data : defaultData;

  return (
    <div className="w-full">
      <div className="mb-6 text-left">
        <h3 className="text-xs font-medium text-[#444] mb-2">WEIGHTAGE</h3>
        <h2 className="md:text-2xl text-xl font-medium text-black mb-4">
          {chartData.length} Sections
        </h2>
      </div>
      
      {/* Single Segmented Progress Bar */}
      <div className="w-full h-[8px] bg-gray-100 rounded-full overflow-hidden mb-8 shadow-inner">
        <div className="flex h-full">
          {chartData.map((segment, index) => (
            <div
              key={index}
              className={`h-full transition-all duration-700 ease-out hover:brightness-110 ${
                index < chartData.length - 1 ? 'mr-[2px]' : ''
              }`}
              style={{
                width: `${segment.percentage}%`,
                backgroundColor: segment.color,
                borderLeft: index > 0 ? '1px solid rgba(255,255,255,0.3)' : 'none',
                borderRight: index < chartData.length - 1 ? '1px solid rgba(255,255,255,0.3)' : 'none'
              }}
              title={`${segment.name}: ${segment.percentage}%`}
            />
          ))}
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
        {chartData.map((item, index) => (
          <div key={index} className="item p-3 bg-white shadow-inner-border rounded-lg hover:shadow-md transition-shadow">
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

export default WeightageSegmentedBar;