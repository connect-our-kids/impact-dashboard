////doughnut chart for visualization
import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import "./pie.scss";

///needed to be left to var instead of let so I could get my text below to show "82%"
///rather than 400 as this code wants to show the total of the data points
///boilerplate code to get text in middle of doughnut chart
var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDoughnutDraw.apply(this, arguments);

    var chart = this.chart;
    var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.ctx;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em sans-serif";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
      textX = Math.round((width - ctx.measureText(text).width) / 2),
      textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});



const PieChart = props => {
  console.log('PieChart props: ', props)
  const data = {
    datasets: [
      {
        data: [props.percent, 100-props.percent],
        backgroundColor: ["#158FB4", "#EDF9FD"],
        hoverBackgroundColor: ["#0F6580", "#A4E1F4"]
      }
    ],
    text: props.percent + '%'
  };
  
  //boilerplate for data to be turned into percents
  const option = {
    cutoutPercentage: 65,
    legend: {
      display: false
    },
    animation: {
      animateRotate: false
    },
    tooltips: {
      hover: {
        mode: null
      },
      enabled: false,
      callbacks: {
        label: function(tooltipItem, data) {
          let dataset = data.datasets[tooltipItem.datasetIndex];
          let meta = dataset._meta[Object.keys(dataset._meta)[0]];
          let total = meta.total;
          let currentValue = dataset.data[tooltipItem.index];
          let percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
          return percentage + "%)";
        },
        title: function(tooltipItem, data) {
          return data.labels[tooltipItem[0].index];
        }
      }
    }
  };
  return (
    <div>
      {/* <h2>Successful placements:</h2> */}
      <Doughnut data={data} options={option} />
      <h3>Of all kids we work with are successfully placed</h3>
    </div>
  );
};
export default PieChart;
