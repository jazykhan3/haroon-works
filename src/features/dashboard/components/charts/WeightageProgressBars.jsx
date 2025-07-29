import React from 'react';

const WeightageProgressBars = ({ data = [] }) => {
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
      <div className="mb-6">
        <h3 className="text-xs font-medium text-[#444] mb-2">WEIGHTAGE</h3>
        <h2 className="md:text-2xl text-xl font-medium text-black mb-4">
          {chartData.length} Sections
        </h2>
      </div>
      
      {/* Progress Bars */}
      <div className="space-y-4 mb-6">
        {chartData.map((item, index) => (
          <div key={index} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
              <span className="text-sm font-semibold text-gray-900">
                {item.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{ 
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                  boxShadow: `0 2px 4px ${item.color}40`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Cards */}
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

export default WeightageProgressBars;