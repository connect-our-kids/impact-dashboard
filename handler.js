'use strict';

const shakespeare = require('./server/queryShakespeare')
const fakeData = require('./server/fakeData')

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


module.exports.shakespeareQuotes = async event=> {
  const query = await shakespeare.queryShakespeare();
  console.log(query, "This is a query maybe")
      return {
        statusCode: 200,
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
