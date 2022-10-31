import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default function Chart() {
    
  const  series = [{
        name: "Visitors",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }];
   const options = {
      chart: {
        height: 350,
        type: 'line',
        colors: ['#EE61C9'],
        zoom: {
          enabled: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Visitors',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['10 Jan', '28 Jan', '16 Feb', '05 Jan', '23 Mar', '10 Apr', '28 Apr', '17 May', '07 Jun', '22 Jun' ],
      }
    };
  return (
    <div id="chart">
    <ReactApexChart options={options} series={series} type="line" width={898} height={427} />
  </div>
  )
}
