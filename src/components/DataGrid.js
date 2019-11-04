import React from 'react';
import './DataGrid.scss';

export default function DataGrid(props){
console.log (props.data)

// commented out to pass data into the component through props
// const tempData = [
//   {
//     metric: "Children Served",
//     value: "3,236"
//   },
//   {
//     metric: "Successful Placement Ratio",
//     value: "70%"
//   },
//   {
//     metric: "Connections Discovered",
//     value: "44,234"
//   },
//   {
//     metric: "Kinship Search Users",
//     value: "865"
//   },
//   {
//     metric: "Permanent Placements",
//     value: "2,634"
//   },
//   {
//     metric: "Average Days To Placement",
//     value: "20"
//   },
// ]

return (
  <main>
    <div className="metricGrid">
      {props.data.map((el, idx) => (
        <div key={idx} className={`metric metric-${idx}`}>
          <div className="metricGrid__bold">{el.value}</div>
          <div className="metricGrid__divider" />
          <p className="metricGrid__title">{el.metric}</p>
        </div>
      ))}
    </div>
  </main>
  )
}