import React from 'react';
import './PublicDashboard.scss';
import '../../components/DataGrid.scss';

import DataGrid from '../../components/DataGrid';
import { publicData } from '../../mockdata.js';
import USAMaps from "../../Visualization/USAMap";
import Pie from "../../Visualization/pie";

const PublicDashboard = props => {
  //// Data fetching. Currently commented out to display more realistic fake numbers but it does work
  // const [data, setData] = useState();
  // console.log('Data fetched: ', data)
  // React.useEffect(() => {
    //// at end of url, try /api/shakespeareQuotes, /api/commits, or /api/moonPhases
    // fetch('https://vjq0rnedic.execute-api.us-east-1.amazonaws.com/dev-ehalsmer/api/shakespeareQuotes')
    // .then(response => response.json())
    // .then(data => {
    // setData(data.query)
    // })
    // .catch(error => console.log(error))
  // }, [])

  return (
    <>
      <DataGrid data={publicData} />
      <h2 className="public__callout">This is how our efforts are making an impact.</h2>

      <a href='https://www.connectourkids.org/' className="public__donate">Donate</a>

      <div className="public__visuals">
        <div className="public__map">
          <USAMaps />
        </div>
        <div className="public__pie">
          <Pie />
        </div>
      </div>
    </>
  )
}


export default PublicDashboard;
