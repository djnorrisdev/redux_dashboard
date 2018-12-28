import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class DemoSummary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
      labels: ["Adults", "Children"],
        dataLabels: {
          enabled: false
        },
        fill: {
          type: 'gradient',
        },
        legend: {
          formatter: function (labels, opts) {
            return [labels + " - " + opts.w.globals.series[opts.seriesIndex]]
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'right'
            }
          }
        }]
      },
      series: [76,24]
    }
  }

  render() {
    return (
      

      <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height="200px" width="100%" />
      </div> 
    )
  }
}
export default DemoSummary;