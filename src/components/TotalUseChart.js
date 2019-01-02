import React, { Component } from 'react';
import { Bar } from "react-chartjs-2";

class TotalUseChart extends Component {
  constructor(props) {
		super(props);
		this.state = {
      chartData: {}
    };
  }
  componentWillMount() {
    this.getChartData();
  }

  getChartData = () => {
    // Ajax call goes here
    this.setState({
      chartData: {
        labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets: [
          {
            label: 'Population',
            data: [
              617594,
              181045,
              152060,
              106519,
              105064,
              95000
            ],
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
    })
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right',
    location: 'City'
  }

	render() {
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
export default TotalUseChart;