import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './PublicDashboard.scss';
import { increment, decrement } from '../../redux/actions/index';
import {connect} from 'react-redux';

const PublicDashboard = (props) => {

  const [shakespeare, setShakespeare] = useState([])


  useEffect(()=>{
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://a5rld810fi.execute-api.us-east-1.amazonaws.com/dev-ehalsmer/shakespeareQuotes', true);
    // xhr.send();
    // xhr.addEventListener("readystatechange", processRequest, false);
  
    // function processRequest(e) {
    //   if (xhr.readyState == 4 && xhr.status == 200) {
    //       // time to partay!!!
    //       let response = JSON.parse(xhr.responseText);
    //       console.log('RESPONSE:', response)
    //   }
    // }
    axios.get('https://a5rld810fi.execute-api.us-east-1.amazonaws.com/dev-ehalsmer/shakespeareQuotes')
    .then(res => {
      console.log(res)
    })
  }, [])

  return (
    <>
    <>
      <header>
        <h1>Public Dashboard</h1>
        <h2>Check out how our efforts are making an impact:</h2>
      </header>
      <main>
        <div className="public-stats-grid">
          <div className="metric">
            <b>#</b>
            <p>Metric 1</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 2</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 3</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 4</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 5</p>
          </div>
          <div className="metric">
            <b>#</b>
            <p>Metric 6</p>
          </div>
        </div>
      </main>
    </>

    
        <div>
            <p>
            Clicked: {props.count} times
            <button onClick={() => {props.increment() }}>
                +
            </button>
            <button onClick={() => {props.decrement() }}>
                -
            </button>
            </p>
        </div>
        </>
  )
}


const mapStateToProps = (state) => {
  return {
      count: state.count
  };
};

export default connect(mapStateToProps, {increment, decrement })(PublicDashboard);