import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  const series = [
    {
      name: "Visitors",
      data: [200, 100, 200, 300, 200, 300, 400, 300, 400, 500,],

    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      line: "straight",
      colors: ["#EE61C9"],
      background: ["#FFFFFF"],
      zoom: {
        enabled: true,
      }
    },
    toolbar: {
      show: true,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#EE61C9"],
    stroke: {
      curve: ["smooth", "straight", "stepline"],
    },
    title: {
      text: "Visitors",
      align: "left",
      style: {
        fontSize: '12px',
        fontFamily: undefined
      },
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "10 Jan",
        "28 Jan",
        "16 Feb",
        "05 Jan",
        "23 Mar",
        "10 Apr",
        "28 Apr",
        "17 May",
        "04 Jun",
        "22 Jun",
      ],
    },
  };
  return (
    <div
      id="chart"
      className="basis-1 md:w-6/12 sm:basis-1 lg:w-6/12 m-5 rounded-3xl">
      <select
        className="flat-select border-none bg-white rounded-xl text-xs font-semibold ">
        <option className="text-xs font-semibold">05-10 May</option>
        <option className="text-xs font-semibold" >16-25 Jun</option>
        <option className="text-xs font-semibold" >20-30 Jul</option>
      </select>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        className="sm:w-full md:w-full  lg:w-full"
      />
    </div>
  );
}
