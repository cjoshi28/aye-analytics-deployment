import React from 'react'
import ReactApexChart from 'react-apexcharts';

export default function RealChart() {
  const series = [
    {
      name: 'Unique Visitors',
      data: [44, 55, 57, 56, 61, 58, 73, 60, 108, 90, 70, 56]
    }, {
      name: 'Page Views',
      data: [76, 55, 101, 68, 87, 105, 91, 120, 94, 27, 78, 89]
    },
  ];

  const options = {
    chart: {
      toolbar: {
        show: false,
        tools: {
          download: false
        }
      },
      type: 'bar',
      height: 250,
      foreColor: '#7f8c8d',
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '35%',
        endingShape: 'rounded',
        borderRadius: 5,

      },
      // series: {
      //   pointWidth: 20

      // }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ["#6667EB", "#EE61C9"],
    xaxis: {
      categories: ['16:20', '16:22', '16:24', '16:26', '16:28', '16:30', '16:32', '16:34', '16:36', '16:38', '16:40', '16:42']
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: true,
      position: 'left',
      offsetY: 120,
    },
    grid: {
      show: true,      // you can either change hear to disable all grids
      xaxis: {
        lines: {
          show: false, //or just here to disable only x axis grids
        }
      },
      yaxis: {
        opposite: true,
        lines: {
          show: false  //or just here to disable only y axis
        },
      },
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  };

  return (
    <div id="chart" className="basis-full">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={200}
      />
    </div>
  )
}

