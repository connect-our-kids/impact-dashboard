// Example of a component that calls an external API which is protected by auth0. 
// The Authorization header must be passed with `Bearer {token}`

import React, { useState } from "react";
import { useAuth0 } from "../auth0-wrapper.js";

const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  // callApi gets a token, then makes a request to /api/external with that token on the Authorization header.
  // possible TODO extract callApi into a custom hook to reuse in multiple components
  const callApi = async () => {
    try {
      const token = await getTokenSilently();
      console.log('TOKEN', token)
      // /api/external is a test endpoint protected by auth0. change endpoint url here once backend is deployed to production
      const response = await fetch("https://vjq0rnedic.execute-api.us-east-1.amazonaws.com/dev-ehalsmer/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const responseData = await response.json();

      setShowResult(true);
      setApiMessage(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="mb-5">
        <h1>External API</h1>
        <p>
          Ping an external API by clicking the button below. This will call the
          external API using an access token, and the API will validate it using
          the API's audience value.
        </p>

        <button onClick={callApi}>
          Ping API
        </button>
      </div>

      <div className="result-block-container">
        <div className={`result-block ${showResult && "show"}`}>
          <h6 className="muted">Result</h6>
          <p>{JSON.stringify(apiMessage.msg, null, 2)}</p>
        </div>
      </div>
    </>
  );
};

export default ExternalApi;
