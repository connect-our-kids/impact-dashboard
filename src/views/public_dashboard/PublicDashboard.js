import React, { useState, useEffect } from "react";
import "./PublicDashboard.scss";
import { increment, decrement } from "../../redux/actions/index";
import { connect } from "react-redux";
import styled from "styled-components";
import USAMaps from "../../Visualization/USAMap";
import Pie from "../../Visualization/pie";

const PublicDashboard = props => {
  const Button = styled.button`
    height: 3rem;
    width: 7rem;
    margin-top: 3rem;
    background-color: #1d8eb6;
    color: white;
    font-size: 20px;
  `;

  const [words, setWords] = useState();

  // useEffect(()=>{
  //   fetch('https://wp4hb8gbwh.execute-api.us-east-1.amazonaws.com/dev-ehalsmert/shakespeareQuotes')
  //     .then(response => response.json())
  //     .then(data => {
  //       setWords(data.query)
  //     })
  //     .catch(error => console.log(error))
  // }, [])

  return (
    <>
      <>
        <header>
          <h1>Public Dashboard</h1>
          <h2>Check out how our efforts are making an impact:</h2>
        </header>
        <main>
          <div className="public-stats-grid">
            {/* provided words is not undefined (after the fetch above happens), map over the first 6 words, displaying a div with the wordcount and word */}
            {words
              ? words.slice(0, 6).map((word, idx) => (
                  <div key={idx} className="metric">
                    <b>{word.word_count}</b>
                    <p>{word.word}</p>
                  </div>
                ))
              : "Loading words"}
          </div>
        </main>

        <a href="https://www.connectourkids.org/donate">
          <Button>Donate</Button>
        </a>
      </>
      <div className="holder">
        <div className="map">
          <USAMaps />
        </div>
        <div className="pie">
          <Pie />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  { increment, decrement }
)(PublicDashboard);
