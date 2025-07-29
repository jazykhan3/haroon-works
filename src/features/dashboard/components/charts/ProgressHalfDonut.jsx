import React, { useRef } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const ProgressHalfDonut = ({
  progress = 48,
  title = "Progress in Accounting",
}) => {
  const chartRef = useRef();
  const lastUpdate = "21 Apr";

  const segments = [
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#FF9792" },
        { offset: 1, color: "#F0352C" },
      ]),
      threshold: 40,
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0.34, color: "#F6CF7D" },
        { offset: 0.87, color: "#FFE9BC" },
      ]),
      threshold: 20,
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
        { offset: 0.07, color: "#FF3F05" },
        { offset: 0.5, color: "#FF8205" },
        { offset: 0.96, color: "#FFEBD9" },
      ]),
      threshold: 20,
    },
    {
      gradient: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#08BD80" },
        { offset: 1, color: "#BDFFC5" },
      ]),
      threshold: 20,
    },
  ];

  const option = {
    series: [
      {
        type: "pie",
        radius: ["88%", "100%"],
        center: ["50%", "70%"],
        startAngle: 180,
        endAngle: 360,
        padAngle: 1,
        labelLine: { show: false },
        label: { show: false },
        silent: true,
        itemStyle: {
          borderRadius: 50,
        },
        data: segments.map((seg) => ({
          value: seg.threshold,
          itemStyle: { color: seg.gradient },
        })),
      },

      {
        type: "gauge",
        startAngle: 180,
        endAngle: 360,
        radius: "100%",
        center: ["50%", "70%"],
        splitNumber: 20,
        axisLine: { show: false },
        pointer: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          distance: 20,
          length: 6,
          lineStyle: {
            color: "#D9D9D9",
            width: 2,
          },
        },
        detail: { show: false },
      },

      {
        type: "scatter",
        coordinateSystem: "polar",
        polarIndex: 0,
        symbolSize: 25,
        symbolOffset: [0, -4], 
        itemStyle: {
          color: "#fff",
          borderColor: "#F0352C",
          borderWidth: 8,
        },
        data: [[315, 60]],
      },
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 360,
        radius: "100%",
        center: ["50%", "70%"],
        pointer: { show: false },
        progress: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: {
          valueAnimation: true,
          fontSize: 42,
          fontWeight: "bold",
          offsetCenter: [0, "-30%"],
          formatter: () => `${progress}%`,
        },
        data: [{ value: progress }],
      },
    ],
    polar: {
      radius: ["84%", "100%"],
      center: ["50%", "70%"],
    },
    angleAxis: {
      max: 360,
      startAngle: 180,
      show: false,
    },
    radiusAxis: { type: "category", show: false },
  };

  return (
    <>
      <div className="text-left">
        <h3 className="text-xs font-medium text-[#444444]">YOUR PROGRESS</h3>
      </div>

      <div className="w-full h-full flex flex-col items-center">
        <div className="w-full" style={{ height: "220px" }}>
          <ReactECharts
            ref={chartRef}
            option={option}
            style={{ height: "320px", width: "100%" }}
            opts={{ renderer: "canvas" }}
          />
        </div>
        <div className="text-center">
          <h2 className="text-base font-semibold text-black">{title}</h2>
          <p className="text-xs text-gray-600 mb-2">
            Last Check on {lastUpdate}
          </p>
          <button className="bg-[#EAEAEA] hover:bg-[#d5d5d5] text-[#7A7A7A] rounded-lg px-[12px] py-[6px] text-sm font-medium transition">
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgressHalfDonut;
