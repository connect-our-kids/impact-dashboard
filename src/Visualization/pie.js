import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import './pie.scss';

const data = {
	labels: [
		'Connect Our Kids',
		'USA'
	],
	datasets: [{
		data: [328, 72],
		backgroundColor: [
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#ACE9F8',
		'#F0F8AC'
		]
	}]
};

const option = {
	// responsive: true,
	// maintainAspectRatio: false,
	tooltips: {
	  callbacks: {
		label: function(tooltipItem, data) {
		  let dataset = data.datasets[tooltipItem.datasetIndex];
		  let meta = dataset._meta[Object.keys(dataset._meta)[0]];
		  let total = meta.total;
		  let currentValue = dataset.data[tooltipItem.index];
		  let percentage = parseFloat((currentValue/total*100).toFixed(1));
		  return percentage + '%)';
		},
		title: function(tooltipItem, data) {
		  return data.labels[tooltipItem[0].index];
		}
	  }
	}
  }

const PieChart = (props) => {
 return (
	<div>
	  <h2>Connect Our Kids Placement Rates Compared to National Average</h2>
	  <Doughnut data={data} 
	  	   options={option} />
	</div>
  );
}
export default PieChart
