// from auth0 docs at https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#create-the-backend-api
// WIP, this middleware is not currently being implemented or protecting any routes

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Set up Auth0 configuration
const authConfig = {
  // currently set to Eleasah's test auth0. See also ehalsmer_auth_config.json. 
  // For production, change to Impact dashboard's domain and audience. 
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

module.exports = checkJwt;
