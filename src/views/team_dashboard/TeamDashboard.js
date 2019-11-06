import React from 'react';
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'
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

const download_img = async (e) => {
  // const logoCanvas = await html2canvas(document.querySelector('.nav__logo'));
  await html2canvas(document.querySelector('#capture'), {
    windowWidth: 1800,
    windowHeight: 1377,
    onclone: (document) => {
    document.querySelector('#print-button').style.display = 'none'
    }})
    .then(function(canvas) {
      // let logo = document.querySelector('.nav__logo')
      // let logo = logoCanvas.toDataURL("image/png");
      let image = canvas.toDataURL("image/png");
      const pdf = new jsPdf({
        unit: 'px',
        orientation: 'landscape'
      })
      // pdf.addImage(logo, 'png', 0, 0, 300, 70)
      pdf.addImage(image, 'png', 0, 0, 670, 450)
      pdf.save('myteam.pdf')
  });
}

return (
  <div id="capture">
    <div>
      {/* passed team data into the data grid through props */}
      <DataGrid data={teamData}/>
    </div>

    <div className="team">
      <section className="team__section--middle">
        <h2 className="team__header"> Our Team's Impact</h2>
  
        <Button id="print-button" onClick={download_img}> Share My Impact </Button>
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
  </div>
)
}
