import React, { useState, useEffect } from 'react';
import './PublicDashboard.scss';
import '../../components/DataGrid.scss';

import DataGrid from '../../components/DataGrid';
import { publicData } from '../../mockdata.js';
import USAMaps from "../../Visualization/USAMap";
import Pie from "../../Visualization/pie";
import Loader from '../../components/Loader';

const PublicDashboard = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([
    {
      metric: "Children Served",
      value: "..."
    },
    {
      metric: "Successful Placement Ratio",
      value: "..."
    },
    {
      metric: "Connections Discovered",
      value: "..."
    },
    {
      metric: "Kinship Search Users",
      value: "..."
    },
    {
      metric: "Permanent Placements",
      value: "..."
    },
    {
      metric: "Average Days To Placement",
      value: "..."
    },
  ]);
  console.log('Data fetched: ', data)
  useEffect(() => {
    //// at end of url, try /api/shakespeareQuotes, /api/commits, or /api/moonPhases
    setIsLoading(true);
    fetch('https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/Public-Dashboard-Metrics')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setIsLoading(false);
        setData([
          {
            metric: "Children Served",
            value: data.Served
          },
          {
            metric: "Successful Placement Ratio",
            value: parseFloat(data.Placement * 100).toFixed(0) + '%' // converts decimal to percent
          },
          {
            metric: "Connections Discovered",
            value: data.Connections
          },
          {
            metric: "Kinship Search Users",
            value: data.Kinship
          },
          {
            metric: "Permanent Placements",
            value: data.Served
          },
          {
            metric: "Average Days To Placement",
            value: data.Avg.toFixed(0)
          },
        ])
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <DataGrid data={data} />
      <Loader isLoading={isLoading} />
      <h2 className="public__callout">This is how our efforts are making an impact.</h2>

      <a href='https://www.connectourkids.org/donate' className="public__donate">Donate</a>

      <div className="public__visuals">
        <div className="public__map">
          <USAMaps />
        </div>
        <div className="public__pie">
          {data[1].value !== "..." ? <Pie percent={Number(data[1].value.slice(0,data[1].value.length-1))}/> : "Loading"}
        </div>
      </div>
    </>
  )
}


export default PublicDashboard;
