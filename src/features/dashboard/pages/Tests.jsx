import EvaluationHeroSection from "../components/EvaluationHeroSection";
import { Select } from "antd";
import TestCard from "../components/TestCard";
import { classTestSeriesData, testSeriesData } from "../constants/allConstants";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

function Tests(props) {
  const navigate = useNavigate();
  return (
    <div>
      <EvaluationHeroSection />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          Test Series
        </h2>
        <div className="flex gap-2">
          <Select
            defaultValue="Added Recently"
            className="w-36 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="all">Added Recently</Option>
            <Option value="maths">Added last week</Option>
          </Select>

          <Select
            defaultValue="All Subject"
            className="w-28 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="filter1">All Subject</Option>
            <Option value="filter2">Filter-2</Option>
          </Select>
          <button className="text-gray-400 text-sm font-semibold hover:text-orange-600 transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2">
        {testSeriesData.map((item) => (
          <TestCard
            key={item.id}
            data={item}
            type="practice"
            onAttempClick={() => navigate(`/dashboard/test-insights`)}
            showAttemptButton={true}
            showShadow={true}
          />
        ))}
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          Class Tests
        </h2>
        <div className="flex gap-2">
          <Select
            defaultValue="Added Recently"
            className="w-36 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="all">Added Recently</Option>
            <Option value="maths">Added last week</Option>
          </Select>

          <Select
            defaultValue="All Subject"
            className="w-28 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="filter1">All Subject</Option>
            <Option value="filter2">Filter-2</Option>
          </Select>
          <button className="text-gray-400 text-sm font-semibold hover:text-orange-600 transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-2">
        {classTestSeriesData.map((item) => (
          <TestCard
            key={item.id}
            data={item}
            type="class"
            onAttempClick={() => navigate(`/dashboard/test-insights`)}
            showAttemptButton={true}
            showShadow={true}
          />
        ))}
      </div>
    </div>
  );
}

export default Tests;
