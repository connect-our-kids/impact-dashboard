import React, {useState, useEffect} from 'react';
import { increment, decrement } from '../../redux/actions/index';
import {connect} from 'react-redux';
import './TeamDashboard.scss';

const TeamDashboard = (props) => {
  const [words, setWords] = useState()


  // useEffect(()=>{
  //   fetch('https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/commits')
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
        <h1>Team Dashboard</h1>
        <h2>Check out how our teams efforts are making an impact:</h2>
      </header>
      <main>
        <div className="public-stats-grid">
          {/* provided words is not undefined (after the fetch above happens), map over the first 6 words, displaying a div with the wordcount and word */}
          {words ? words.slice(0,6).map(word => <div className="metric">
            <b>{word.subject}</b>
            <p>{word.num_duplicates}</p>
          </div>) : 'Loading words'}
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

export default connect(mapStateToProps, {increment, decrement })(TeamDashboard);
