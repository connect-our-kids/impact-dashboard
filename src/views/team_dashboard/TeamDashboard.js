import React from 'react';
 
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
  margin-top: 3rem;
  background-color: #1d8eb6;
  color: white;
  font-size: 20px;
`;

return (
  <>
  <div>
    {/* passed team data into the data grid through props */}
  <DataGrid data={teamData}/>
  </div>

 <div className="middle-section">
    <h2 className="header-text"> Our Team's Impact</h2>
 
    <Button>
      Share My Impact
  </Button>
 
  <h3>Here's how your team is doing <br>
  </br> when it comes to placing children.</h3>
  </div>

 
  <div className="charts">
      <div className="pie">
        <Pie />
      </div>
      </div>
  </>
)
}
