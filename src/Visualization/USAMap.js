//Map works but does not render useful data yet

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
      "NY": {
        fill: "#158FB4"
      },
      "TX": {
        fill: "#158FB4"
      },
      "FL": {
        fill: "#158FB4"
      },
      "OR": {
        fill: "#D4E4F9"
      },
      "NV": {
        fill: "#D4E4F9"
      },
      "UT": {
        fill: "#D4E4F9"
      },
      "OK": {
        fill: "#D4E4F9"
      },
      "AR": {
        fill: "#D4E4F9"
      },
      "LA": {
        fill: "#D4E4F9"
      },
      "MS": {
        fill: "#D4E4F9"
      },
      "AL": {
        fill: "#D4E4F9"
      },
      "SC": {
        fill: "#D4E4F9"
      },
      "KY": {
        fill: "#D4E4F9"
      },
      "IA": {
        fill: "#D4E4F9"
      }, 
      "WY": {
        fill: "#E9F1FB"
      }, 
      "MT": {
        fill: "#E9F1FB"
      }, 
      "ID": {
        fill: "#E9F1FB"
      }, 
      "ND": {
        fill: "#E9F1FB"
      }, 
      "SD": {
        fill: "#E9F1FB"
      }, 
      "NE": {
        fill: "#E9F1FB"
      }, 
      "NM": {
        fill: "#E9F1FB"
      }, 
      "WV": {
        fill: "#E9F1FB"
      }, 
      "ME": {
        fill: "#E9F1FB"
      }, 
      "NH": {
        fill: "#E9F1FB"
      }, 
      "VT": {
        fill: "#E9F1FB"
      }, 
      "AK": {
        fill: "#E9F1FB"
      }, 
      "HI": {
        fill: "#E9F1FB"
      },
      "KS": {
        fill: "#D4E4F9"
      }, 
      "WA": {
        fill: "#92C3E4"
      }, 
      "AZ": {
        fill: "#92C3E4"
      }, 
      "CO": {
        fill: "#92C3E4"
      }, 
      "WI": {
        fill: "#92C3E4"
      }, 
      "MN": {
        fill: "#92C3E4"
      }, 
      "IN": {
        fill: "#92C3E4"
      }, 
      "TN": {
        fill: "#92C3E4"
      }, 
      "RI": {
        fill: "#92C3E4"
      }, 
      "CT": {
        fill: "#92C3E4"
      }, 
      "MA": {
        fill: "#92C3E4"
      }, 
      "NJ": {
        fill: "#92C3E4"
      }, 
      "DE": {
        fill: "#92C3E4"
      }, 
      "MD": {
        fill: "#92C3E4"
      }, 
      "MO": {
        fill: "#92C3E4"
      },
      "CA": {
        fill: "#0F6580"
      }, 
      "PA":{
        fill: "#408DC1"
      }, 
      "OH":{
        fill: "#408DC1"
      }, 
      "IL":{
        fill: "#408DC1"
      },
      "MI": {
        fill: "#629CC2"
      },
      "NC": {
        fill: "#629CC2"
      },
      "VA": {
        fill: "#629CC2"
      },
      "GA": {
        fill: "#629CC2"
      }
    };
  };

  render() {
    return (
      <div className="mapHolder">
        <h2>Map of users by state</h2>
        <USAMap customize={this.statesCustomConfig()} onHover={this.stateHover}  />
      </div>
    );
  }
}

export default USAMaps;
