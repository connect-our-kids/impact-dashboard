import React from 'react';
 
import './TeamDashboard.scss';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { increment, decrement } from '../../redux/actions/index';
import Pie from "../../Visualization/pie";
 
export default function TeamDashboard(){
 
  const Button = styled.button`
  height: 3rem;
  padding: 0 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 3rem;
  background-color: #1d8eb6;
  color: white;
  font-size: 20px;
`;
 
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
          <div key={idx} className={`metric-${idx}`}>
            <b>{el.value}</b>
            <div className="divider" />
            <p>{el.metric}</p>
          </div>
        ))}
      </div>
    </main>
 
    <h2 className="header-text"> Our Team's Impact</h2>
 
    <Button>
      Share My Impact
  </Button>
 
  <h3>Here's how your team is doing <br>
  </br> when it comes to placing children.</h3>
  
  <div className="charts">
      <div className="pie">
        <Pie />
      </div>
      </div>
  </>
)
}
