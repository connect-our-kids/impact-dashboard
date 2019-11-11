// checkJwt is middleware for checking jwts sent on Authorization header from frontend. 
// use it on personal and team backend routes

const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

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

module.exports = checkJwt;