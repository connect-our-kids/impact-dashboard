// Main server file which creates an express server, wraps it in serverless to be deployed as lambda function expressHandler
require('dotenv').config()

// helmet not installed yet, but we may want to consider it
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
const moonPhasesRouter = require('./routers/moonPhases')
const commitsRouter = require('./routers/commits')

// API endpoints

server.use('/api/shakespeareQuotes', shakespeareRouter) // aka public dash data
// TODO insert authenticate as middleware for the following two routes:
server.use('/api/moonPhases', moonPhasesRouter) // team dash data
server.use('/api/commits', commitsRouter) // personal dash data

// For when we have the real data:
/*
server.use('/api/public', )
server.use('/api/team', authenticate, teamRouter)
server.use('/api/personal', authenticate, personalRouter)
*/

// sanity check endpoint:
server.get('/api', function (req, res) {
  res.send('Hello World from express, in server.js')
})



module.exports.expressHandler = serverless(server);