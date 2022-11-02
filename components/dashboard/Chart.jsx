import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Chart() {
  const series = [
    {
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
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#EE61C9"],
    stroke: {
      curve: ["smooth", "straight", "stepline"],
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
    <div id="chart" className="basis-full">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        className="sm:w-full md:w-full lg:w-full max-h-[300px]"
      />
    </div>
  );
}
