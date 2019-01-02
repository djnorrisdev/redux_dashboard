import React, { Component } from "react";
import styled from "styled-components/macro";
import { Bar } from "react-chartjs-2";
import axios from 'axios';


class DemoSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
      townData: [],
      chartData: {
        labels: '',
        datasets: [
          {
            label: 'Population',
            data: '',
            backgroundColor: [
              'rgba(255,99,132,0.6',
              'rgba(54,162,235,0.6',
              'rgba(255,206,86,0.6',
              'rgba(75,192,192,0.6',
              'rgba(153,102,255,0.6',
              'rgba(255,159,64,0.6',
              'rgba(255,99,132,0.6',
            ]
          }
        ]
      }
    };
  }
  componentWillMount() {
    this.getChartData();
  }
  getChartData = () => {
    axios.get(`http://localhost:3000/townData`)
		.then (res => {
      const towns = res.data.map(item => item.town)
      const population = res.data.map(item => item.data)
			const chartData = {...this.state.chartData}
      chartData.labels = towns;
      chartData.datasets[0].data = population;
      this.setState({
        ...this.state, chartData
      })
		})
		.catch(error => console.log(error, this.state.townData))
  }
  // getChartData = () => {
  //   let newLabels = [];
  //   let newDataSet = [];
  //   axios.get(`http://localhost:3000/townData`) 
	// 	.then (res => {
  //     res.data.map((item) => {
  //       newLabels.push(item.town)
  //       newDataSet.push(item.data)
  //     })
	// 			this.setState({
	// 				chartData: {
  //             ...this.state.chartData,
  //             labels: newLabels,
  //         },
  //         chartData: {
  //           ...this.state.chartData,
  //           datasets: {
  //             ...this.state.chartData.datasets[0],
  //               data: newDataSet
  //           }
  //         }
	// 			})
	// 	})
	// 	.catch(error => console.log(error, this.state.townData))
  // }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

	render() {
    console.log(this.state.chartData.datasets);
		return (
			<div className="chart">
        <Bar 
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Largest Cities in '+ this.props.location,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
			</div>
		);
	}
}
export default DemoSummary;

// Static data
// this.setState({
    //   chartData: {
    //     labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    //     datasets: [
    //       {
    //         label: 'Population',
    //         data: [
    //           617594,
    //           181045,
    //           152060,
    //           106519,
    //           105064,
    //           95000
    //         ],
    //         backgroundColor: [
    //           'rgba(255,99,132,0.6',
    //           'rgba(54,162,235,0.6',
    //           'rgba(255,206,86,0.6',
    //           'rgba(75,192,192,0.6',
    //           'rgba(153,102,255,0.6',
    //           'rgba(255,159,64,0.6',
    //           'rgba(255,99,132,0.6',
    //         ]
    //       }
    //     ]
    //   }
    // })