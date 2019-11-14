import React, { useState, useEffect } from 'react';
import './PublicDashboard.scss';
import '../../components/DataGrid.scss';
import { increment, decrement } from '../../redux/actions/index';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DataGrid from '../../components/DataGrid';
import {publicData} from '../../mockdata.js';
import USAMaps from "../../Visualization/USAMap";
import Pie from "../../Visualization/pie";

// commented out to pass data into the component through props

  const PublicDashboard = props => {
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
      fetch('https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/Public-Dashboard-Metrics')
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
              value: parseFloat(data.Placement * 100).toFixed(0) // converts decimal to percent
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
        <DataGrid data={data}/>
        {/* commented out to pass data into the component through props */}
        {/* <main>
          <div className="metricGrid"> */}
            {/* provided words is not undefined (after the fetch above happens), map over the first 6 words, displaying a div with the wordcount and word */}
            {/* {words ? words.slice(0,6).map((word, idx) => <div key={idx} className="metric">
            <b>{word.word_count}</b>
            <p>{word.word}</p>
          </div>) : 'Loading words'} */}
            {/* {tempData.map((el, idx) => (
              <div key={idx} className={`metric metric-${idx}`}>
                <div className="metricGrid__bold">{el.value}</div>
                <div className="metricGrid__divider" />
                <p className="metricGrid__title">{el.metric}</p>
              </div>
            ))}
          </div>
        </main> */}

        <h2 className="public__callout">This is how our efforts are making an impact.</h2>

        <a href='https://www.connectourkids.org/donate' className="public__donate">Donate</a>
      
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


  const mapStateToProps = state => {
    return {
      count: state.count
    };
  };

  export default connect(
    mapStateToProps,
    { increment, decrement }
  )(PublicDashboard);
