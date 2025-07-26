import React, { useState } from 'react';

const notificationsList = [
  {
    title: 'Exam & Registration Alerts',
    description:
      'You\'ll be notified of important dates for CA exams and registration deadlines',
  },
  {
    title: 'Study Plan Reminders',
    description:
      'You\'ll be notified of significant milestones & updates in your CA study schedule',
  },
  {
    title: 'Offers & Announcements',
    description:
      'You\'ll be notified of significant milestones & updates in your CA study schedule',
  },
  {
    title: 'Mock Test Results & Feedback',
    description:
      'You\'ll be notified when mock test results are published and feedback is available.',
  },
];

const NotificationsTabs = () => {
  const [masterToggle, setMasterToggle] = useState(true);
  const [toggles, setToggles] = useState(Array(notificationsList.length).fill(true));

  const handleMasterToggle = (value) => {
    setMasterToggle(value);
    setToggles(Array(notificationsList.length).fill(value));
  };

  const handleToggle = (index, value) => {
    const updated = [...toggles];
    updated[index] = value;
    setToggles(updated);
  };

  const renderToggleButtons = (value, onChange) => (
    <div className="flex border border-[#f2f2f2] rounded-md overflow-hidden">
      <button
        onClick={() => onChange(true)}
        className={`px-[20px] py-[10px] text-xs font-medium ${value
          ? 'bg-[#08BD80] text-white'
          : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
      >
        On
      </button>
      <button
        onClick={() => onChange(false)}
        className={`px-[20px] py-[10px] text-xs font-medium ${!value
          ? 'bg-gray-200 text-gray-700'
          : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
      >
        Off
      </button>
    </div>
  );

  return (
    <div className="px-6 py-7 bg-white border border-[#f2f2f2] rounded-2xl">
      <div className="flex justify-between items-center py-6 gap-1">
        <h2 className="text-xl font-medium text-black mb-0">Notifications</h2>
        <div className="flex items-center md:gap-6 sm:gap-4 gap-2">
          <span className="text-sm font-medium text-gray-700">Enable All</span>
          {renderToggleButtons(masterToggle, handleMasterToggle)}
        </div>
      </div>

      {notificationsList.map((item, index) => (
        <div key={index} className="flex justify-between items-center border-t border-[#f2f2f2] py-6">
          <div className="">
            <h3 className="text-left text-base font-medium text-black mb-0">{item.title}</h3>
            <p className="text-left text-sm text-[#666] mt-1 mb-0">{item.description}</p>
          </div>
          <div className="mt-1">{renderToggleButtons(toggles[index], (val) => handleToggle(index, val))}</div>
        </div>
      ))}
    </div>
  );
};

export default NotificationsTabs;
