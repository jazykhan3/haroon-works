import EvaluationHeroSection from "../components/EvaluationHeroSection";
import { Select, Button, Card } from "antd";
import { subjects, years, topics, filters } from "../constants/allConstants";
import questionSet from "../../../assets/images/question-set.png";
import './practice.css'; // Assuming you have a CSS file for styles

const { Option } = Select;

function Practice() {
  const cards = Array(6).fill({
    title: "CA Mock Test - 2",
    date: "20 May, 2025",
    questions: 20,
  });

  return (
    <div>
      <EvaluationHeroSection />
      <div className="relative bg-white rounded-lg p-4 shadow-sm mx-auto overflow-hidden">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-br from-white via-[#FBFEFD] to-[#D0F2E7] rounded-lg pointer-events-none"></div>

        <h2 className="text-lg font-semibold mb-4 text-left font-inter relative z-10">
          Practice Previous Year Questions
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-3 space-y-6 md:space-y-0 relative z-10">
          <Select
            defaultValue="all"
            className="w-full md:w-1/4 custom-select"
            size="large"
          >
            {subjects.map((subject) => (
              <Option key={subject.value} value={subject.value}>
                {subject.label}
              </Option>
            ))}
          </Select>

          <Select
            defaultValue="2025"
            className="w-full md:w-1/4 custom-select"
            size="large"
          >
            {years.map((year) => (
              <Option key={year.value} value={year.value}>
                {year.label}
              </Option>
            ))}
          </Select>

          <Select
            defaultValue={topics[0].value}
            className="w-full md:w-1/4 custom-select"
            size="large"
          >
            {topics.map((topic) => (
              <Option key={topic.value} value={topic.value}>
                {topic.label}
              </Option>
            ))}
          </Select>

          <Select
            defaultValue={filters[0].value}
            className="w-full md:w-1/4 custom-select"
            size="large"
          >
            {filters.map((filter) => (
              <Option key={filter.value} value={filter.value}>
                {filter.label}
              </Option>
            ))}
          </Select>

          <Button
            type="ghost"
            className="disabled:bg-transparent disabled:border-[#f57900] border-[#f57900] disabled:text-black-800 bg-orange-gradient hover:bg-orange-gradient-hover text-white text-base font-bold leading-4 py-4 px-6 w-fit md:w-fit mx-auto md:mx-0 h-auto text-sm rounded-xl"
            onClick={() => {}}
          >
            Search PYQ
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 md:mb-0">
          Quick Question Sets
        </h2>
        <div className="flex gap-2">
          <Select
            defaultValue="All Subject"
            className="w-36 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="all">All Subject</Option>
            <Option value="maths">Maths</Option>
            <Option value="science">Science</Option>
          </Select>

          <Select
            defaultValue="Filter-1"
            className="w-28 border-none shadow-none focus:shadow-none focus:ring-0 bg-white rounded-lg"
            size="middle"
            bordered={false}
          >
            <Option value="filter1">Filter-1</Option>
            <Option value="filter2">Filter-2</Option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            className="shadow-sm rounded-lg"
            bodyStyle={{ padding: "16px" }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 mb-2">
                <img
                  src={questionSet}
                  alt="Question Set"
                  className="w-14 h-14"
                />
                <div className="flex flex-col">
                  <h3 className="text-gray-800 font-semibold text-base">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4 text-left">
                    {card.date}
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-md px-3 py-2 flex justify-between items-center mt-auto">
                <span className="text-gray-700 text-sm">
                  <strong>{card.questions}</strong> Questions <br />
                  <span className="-ml-8">Available</span>
                </span>
                <Button
                  type="text"
                  className="text-[#F6581C] font-semibold bg-transparent hover:bg-transparent hover:text-[#F6581C] focus:bg-transparent focus:text-[#F6581C] active:bg-transparent"
                >
                  Start Now
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Practice;
