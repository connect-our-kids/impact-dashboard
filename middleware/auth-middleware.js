// from auth0 docs at https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#create-the-backend-api


const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-mjherich.auth0.com",
//   audience: "" audience needed for auth0
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
