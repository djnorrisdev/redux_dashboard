import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchDemoSummary } from './reduxFolder/actions';
import styled from "styled-components/macro";
import { Bar } from "react-chartjs-2";
import axios from 'axios';


class DemoSummary extends Component {
	constructor(props) {
		super(props);
		this.state = {
      townData: [],
      
    };
    
  }



  componentDidMount () {
    this.props.fetchDemoSummary();
  }

  

    // setChartData = () => {
    //   const { data, labels } = this.props.summaryData
    //   console.log(data, labels)
    //   const newData = {...this.state.chartData}
    //   newData.labels = labels;
    //   newData.datasets[0].data = data;
    //   this.setState({
    //     ...this.state, newData
    //   })
    // }
  // getChartData = () => {
  //   axios.get(`http://localhost:3000/townData`)
	// 	.then (res => {
  //     const towns = res.data.map(item => item.town)
  //     const population = res.data.map(item => item.data)
	// 		const chartData = {...this.state.chartData}
  //     chartData.labels = towns;
  //     chartData.datasets[0].data = population;
  //     this.setState({
  //       ...this.state, chartData
  //     })
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
    // console.log(this.props.summaryData);
		return (
			<div className="chart">
        {this.props.summaryData ? 
        <Bar 
          data={this.props.summaryData}
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
        /> : null }
			</div>
		);
	}
}

const mapStateToProps = ({ summaryData }) => {
  return {
    summaryData: summaryData.chartData
  }
}

export default connect(mapStateToProps, { fetchDemoSummary })(DemoSummary);
