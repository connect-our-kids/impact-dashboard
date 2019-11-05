// Main server file which creates an express server, wraps it in serverless to be deployed as lambda function expressHandler
require('dotenv').config()

// helmet not installed yet, but we may want to consider it
// const helmet = require("helmet");
const cors = require("cors");

const serverless = require('serverless-http');
const express = require('express')
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// create server
const server = express()

// middleware

server.use(cors(), express.json());
const authenticate = require('./middleware/auth-middleware')

// import routers

const shakespeareRouter = require('./routers/shakespeare')
const moonPhasesRouter = require('./routers/moonPhases')
const commitsRouter = require('./routers/commits')

// API endpoints

// sanity check endpoint:
server.get('/api', function (req, res) {
  res.send('Hello World from express, in server.js')
})

// Set up Auth0 configuration
// currently set to ehalsmer's auth0. May be replaced with either production auth0 or Matt's - 
// check that config agrees in React app (auth_config.json and index.js import)
const authConfig = {
  domain: "dev-69nrm8mx.auth0.com",
  audience: "https://dev-69nrm8mx.auth0.com/api/v2/"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from YOUR_DOMAIN
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
// All we need to do to add authentication to an endpoint is insert checkJwt as middleware:
server.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

// Test routes still available:
server.use('/api/shakespeareQuotes', shakespeareRouter) // aka public dash data
server.use('/api/moonPhases', moonPhasesRouter) // team dash data
server.use('/api/commits', commitsRouter) // personal dash data

// Planned endpoints for when we have the real data:
/*
server.use('/api/public', )
server.use('/api/team', checkJwt, teamRouter)
server.use('/api/personal', checkJwt, personalRouter)
*/





module.exports.expressHandler = serverless(server);