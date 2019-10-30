require('dotenv').config()

// helmet and cors not installed yet, but we may want to consider them
// const helmet = require("helmet");
const cors = require("cors");

const serverless = require('serverless-http');
const express = require('express')
const server = express()

// middleware

server.use(cors(), express.json());
const authenticate = require('./middleware/auth-middleware')

// import routers

const shakespeareRouter = require('./routers/shakespeare')

// API endpoints
server.use('/api/shakespeareQuotes', shakespeareRouter)

// sanity check endpoint:
server.get('/api', function (req, res) {
  res.send('Hello World from express, in server.js')
})



module.exports.expressHandler = serverless(server);