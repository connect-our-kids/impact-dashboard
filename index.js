const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/index', function (req, res) {
  res.send('Hello World from index.js')
})

module.exports.expressHandler = serverless(app);