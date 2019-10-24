// Contains test functions right now
///added headers to avoid CORS issues for now whil in dev
///added methods for new queries

'use strict';
const shakespeare = require('./queryShakespeare')
const gitHub = require('./queryGitHub')
const moon = require('./queryMoonPhase')

module.exports.hello = async event=> {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Go Serverless!',
            event
          },
          null,
          2
        )
      }
    }

module.exports.catMemes = async event=> {
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Look at all these chickens!',
            event
          },
          null,
          2
        )
      }
    }


// This function invokes queryShakespeare (awaiting it), then returns a message along with the query results (an array of words with associated wordcounts)
module.exports.shakespeareQuotes = async event=> {
  const query = await shakespeare.queryShakespeare();
      return {
        statusCode: 200,
        // This header is needed for CORS from localhost. Possibly not necessary once deployed with frontend and backend on the same domain, impact.connectourkids.org
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(
          {
            message: 'Look at all these chickens!',
            query,
            event
          },
          null,
          2
        )
      }
    }

module.exports.gitHubBigQuery = async event => {
    const query = await gitHub.queryGitHub();
    console.log(query, "This is another Query")
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
          },
        body: JSON.stringify(
            {
                message: 'Look at all these commits!',
                query,
                event
            },
            null,
            2
        )
    }
}
module.exports.moonPhases = async event => {
    const query = await moon.queryMoonPhases();
    console.log(query, "This is another Query")
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
          },
        body: JSON.stringify(
            {
                message: 'Look at all these Moon Phases!',
                query,
                event
            },
            null,
            2
        )
    }
}