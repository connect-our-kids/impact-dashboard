import React, { useState, useEffect } from 'react';
import './DataGrid.scss';

export default function DataGrid(){

const tempData = [
  {
    metric: "Children Served",
    value: "3,236"
  },
  {
    metric: "Successful Placement Ratio",
    value: "70%"
  },
  {
    metric: "Connections Discovered",
    value: "44,234"
  },
  {
    metric: "Kinship Search Users",
    value: "865"
  },
  {
    metric: "Permanent Placements",
    value: "2,634"
  },
  {
    metric: "Average Days To Placement",
    value: "20"
  },
]

return (
    <>
      <main>
        <div className="public-stats-grid">
          {tempData.map((el, idx) => (
            <div key={idx} className={`metric metric-${idx}`}>
              <b>{el.value}</b>
              <div className="divider" />
              <p>{el.metric}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}