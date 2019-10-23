import React, { useState, useEffect } from "react";
import "./PersonalDashboard.scss";
import { increment, decrement } from "../../redux/actions/index";
import { connect } from "react-redux";
const PersonalDashboard = props => {
  const [query, setQuery] = useState();
  useEffect(() => {
    fetch(
      "https://bv9cpgqr4l.execute-api.us-east-1.amazonaws.com/dev-nisa/moonPhases"
    )
      .then(res => res.json())
      .then(data => {
        setQuery(data.query);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <>
      <> 
        <header>
          <h1>Personal Impact</h1>           
          <h2>Check out your efforts at making an impact:</h2>         
        </header>
                
        <main>
                     
          {/* <div className="public-stats-grid">    
            {query             
           ? query.map(moon => (  
                    <div className="metric">      
                  <b>{moon.phase}</b>   
                     <p>{moon.phase_emoji}</p>     
                   <p>{moon.peak_datetime}</p>  
                    </div>     
               ))              
    : "Loading phases"} 
             </div> */}
                   
        </main>
              
      </>
             
      <div>
                 
        <p>
                    Clicked: {props.count} times           
          <button
            onClick={() => {
              props.increment();
            }}
          >
                         +           
          </button>
                    
          <button
            onClick={() => {
              props.decrement();
            }}
          >
                         -           
          </button>
                   
        </p>
              
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
)(PersonalDashboard);
