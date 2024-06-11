import React, { lazy } from 'react'
import ReactApexChart from 'react-apexcharts'

function ApexChart() {


  const data = {
    series: [{
      name: 'series1',
      data: [1, 25, 4, 1, 6, 74, 123, 412]
    }, {
      name: 'series2',
      data: [11, 124, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
    }
  }


  return (
    <div className='w-screen'>
      <ReactApexChart options={data.options} series={data.series} type="area" height={350} />
    </div>
  )
}

export default ApexChart