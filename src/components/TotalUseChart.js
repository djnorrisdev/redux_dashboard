import React, { Component } from 'react';
import { Line } from "react-chartjs-2";

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
            label: 'Pop 1',
            data: [
              617594,
              181045,
              152060,
              106519,
              105064,
              95000
            ],
            backgroundColor: [
              'rgba(95,227,161,0.54)'
              // 'rgba(54,162,235,0.6',
              // 'rgba(255,206,86,0.6',
              // 'rgba(75,192,192,0.6',
              // 'rgba(153,102,255,0.6',
              // 'rgba(255,159,64,0.6',
              // 'rgba(255,99,132,0.6',
            ]
          }, 
          {
            label: 'Pop 2',
            data: [
                12700,
                123432,
                10000,
                430000,
                670000,
                99999
            ],
            backgroundColor: 'rgba(54,162,235,0.6)'
          },
          {
            label: 'Pop 3',
            data: [
                112700,
                523432,
                100000,
                630000,
                170000,
                700000
            ],
            backgroundColor: 'rgba(231,120,142,0.64)'
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
    const { displayTitle, title } = this.props;
		return (
			<div className="chart">
        <Line 
          data={this.state.chartData}
          options={{
            // title: {
            //   display: displayTitle,
            //   text: title,
            //   fontSize: 25
            // },
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