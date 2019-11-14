import React, {useState, useEffect} from 'react';
 
import './TeamDashboard.scss';
import styled from 'styled-components';
import Pie from "../../Visualization/pie-td";
import DataGrid from "../../components/DataGrid";
import {teamData} from "../../mockdata.js";
 
export default function TeamDashboard(){
 
  const Button = styled.button`
  height: 3rem;
  padding: 0 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  // margin-top: 1rem;
  background-color: #1d8eb6;
  color: white;
  font-size: 20px;
`;

const [data, setData] = useState([
  {
    metric: "Children Served",
    value: ""
  },
  {
    metric: "Successful Placement Ratio",
    value: ""
  },
  {
    metric: "Connections Discovered",
    value: ""
  },
  {
    metric: "Kinship Search Users",
    value: ""
  },
  {
    metric: "Permanent Placements",
    value: ""
  },
  {
    metric: "Average Days To Placement",
    value: ""
  },
]);
console.log('Data fetched: ', data)
useEffect(() => {
  //// at end of url, try /api/shakespeareQuotes, /api/commits, or /api/moonPhases
  fetch('https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/Team-Dashboard-Metrics')
    .then(response => response.json())
    .then(data => {
      console.log(data)
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
    <div>
      {/* passed team data into the data grid through props */}
      <DataGrid data={data}/>
    </div>

    <div className="team">
      <section className="team__section--middle">
        <h2 className="team__header"> Our Team's Impact</h2>
  
        <Button> Share My Impact </Button>
      </section>

      <section className="team__section--bottom">
        <h3 className="team__impact">Here's how your team is doing <br>
        </br> when it comes to placing children.</h3>
  
        <div className="team__charts">
          <div className="team__pie">
            <Pie />
          </div>
        </div>
      </section>
    </div>
  </>
)
}
