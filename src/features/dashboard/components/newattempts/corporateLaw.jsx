import React from 'react';
import { Tag } from 'antd';

const topics = {
  current: [
    "Meaning and scope of Business Economics",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
  ],
  removed: [
    "Meaning and scope of Business Economics",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
  ],
  added: [
    "Meaning and scope of Business Economics",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
    "Basic Problems of an Economy  and Role of Price Mechanism.",
  ],
};

const TopicSection = ({ title, color, data }) => (
  <div className="mb-6">
    <h3 className={`text-left text-lg font-semibold ${color}`}>{title}</h3>
    <div className="flex flex-wrap gap-3 mt-2">
      {data.map((topic, index) => (
        <Tag
          key={index}
          className="px-3 py-1 rounded-full text-sm text-black bg-white border border-[#f2f2f2]"
        >
          {topic}
        </Tag>
      ))}
    </div>
  </div>
);

const CorporateLaw = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-left">Corporate and Other Laws</h2>
      <TopicSection title="Current Topics" color="text-[#F6581C]" data={topics.current} />
      <TopicSection title="Removed Topics" color="text-[#D32121]" data={topics.removed} />
      <TopicSection title="Newly Added" color="text-[#08BD80]" data={topics.added} />
    </div>
  );
};

export default CorporateLaw;

