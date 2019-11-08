// Contains test functions right now
///added headers to avoid CORS issues for now whil in dev
///added methods for new queries

"use strict";
const shakespeare = require("./queryShakespeare");
const gitHub = require("./queryGitHub");
const moon = require("./queryMoonPhase");

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless!",
        event
      },
      null,
      2
    )
  };
};

module.exports.catMemes = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Look at all these chickens!",
        event
      },
      null,
      2
    )
  };
};

// This function invokes queryShakespeare (awaiting it), then returns a message along with the query results (an array of words with associated wordcounts)
module.exports.shakespeareQuotes = async event => {
  const query = await shakespeare.queryShakespeare();
  return {
    statusCode: 200,
    // This header is needed for CORS from localhost. Possibly not necessary once deployed with frontend and backend on the same domain, impact.connectourkids.org
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: "Look at all these chickens!",
        query,
        event
      },
      null,
      2
    )
  };
};

module.exports.gitHubBigQuery = async event => {
  const query = await gitHub.queryGitHub();
  console.log(query, "This is another Query");
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: "Look at all these commits!",
        query,
        event
      },
      null,
      2
    )
  };
};
module.exports.moonPhases = async event => {
  const query = await moon.queryMoonPhases();
  console.log(query, "This is another Query");
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(
      {
        message: "Look at all these Moon Phases!",
        query,
        event
      },
      null,
      2
    )
  };
};
////for unit testing/integration testing
module.exports.testing = async (event, context) => {
  let body = {};
  if (event.body) {
    body = JSON.parse(event.body);
  }

  const name = body.name || "world";

  return {
    statusCode: 200,
    body: `Hello, ${name}`
  };
};

module.exports.Badge1 = (event, context, callback) => {
  const html = `
  <html>
    <style>
      h1 { color: #73757d; }
      div.personal__main {
        display: flex;
        justify-content: center;
        text-align: left}
      div.personal__card1{
        border: 1px solid #E5E4E2;
        height: 15rem;
        width: 22rem;
        margin-right:1rem;
        display: flex;
        justify-content: space-between}
      div.personal__card1--right{
        background-color: #158fb4;
        width: 7rem;
        justify-content: center;
        padding-top:4rem;
        text-align: center}
      div.personal__card1--left h3{
        margin-top:4rem;
        margin-left:1rem;
        margin-bottom: 2rem}
      div.personal__card1--left p{
        margin-left: 1rem;
        margin-top: 0;
        margin-bottom: 0}
    </style>
    <body>
    <div className='personal__main'>
    <div className='personal__card1'>
        <div className='personal__card1--left'>
            <h3>Children Served</h3>
            <p> Your total: <strong>500</strong></p>
            <p>Next Threshold: <strong>700</strong></p>
        </div>
       
        <div className='personal__card1--right'>
            <img src='Badge1.svg' alt='children served icon'></img>
        </div>
    </div>
    </div>
    </body>
  </html>`;

  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: html
  };

  // callback is sending HTML back
  callback(null, response);
};
