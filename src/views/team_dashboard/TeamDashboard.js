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


const screenshot = (e) => {
  html2canvas(document.body).then(function(canvas) {
    document.body.appendChild(canvas);
  });
}

const download_img = (e) => {
  html2canvas(document.body, { onclone: (document) => {
    document.querySelector('#print-button').style.display = 'none'
    document.querySelector('nav').style.display = 'none'
    document.querySelector('.subNav__menu').style.display = 'none'
    document.querySelector('footer').style.display = 'none'
    }})
    .then(function(canvas) {
      let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
      var link = document.createElement('a');
      link.download = "my-image.png";
      link.href = image;
      link.click();
  });
}

// function printPDF () {
//   const domElement = document.getElementsByClassName('nav')
//   html2canvas(domElement)
//   .then((canvas) => {
//       const img = canvas.toDataURL('image/png')
//       const pdf = new jsPdf()
//       pdf.addImage(img, 'JPEG', 0, 0, 500, 500)
//       pdf.save('your-filename.pdf')
// })
// }

return (
  <>
    <div id="capture">
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
  </>
)
}
