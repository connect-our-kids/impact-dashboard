import React, { Component } from 'react';
import './USAMap.scss'; /* optional for styling like the :hover pseudo-class */
import USAMap from "react-usa-map";

class USAMaps extends Component {
  /* mandatory */
  mapHandler = (event) => {
    const state = event.target.dataset.name
    alert(state);
    console.log(event.target.dataset)
  };

  stateHover = () => {
    const state = document.querySelector('path.MI.state')
    console.log("michigan", state)
    state.addEventListener("mouseenter", function( event ) {   
        // highlight the mouseenter target
        event.target.style.color = "purple";
      
        // reset the color after a short delay
        setTimeout(function() {
          event.target.style.color = "";
        }, 500);
      }, false);
    }

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "navy",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "lightblue"
      },
      "VA": {
        fill: "teal"
      }
    };
  };

  render() {
    return (
      <div className="App">
        <USAMap customize={this.statesCustomConfig()} onHover={this.stateHover}  />
      </div>
    );
  }
}

export default USAMaps;