const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// const backend = require("./backendServer.js");
// backend dependencies/middleware:
const cors = require('cors');
const checkJwt = require('./checkJwt');

// backend routers
const shakespeareRouter = require('./routers/shakespeare')
const moonPhasesRouter = require('./routers/moonPhases')
const commitsRouter = require('./routers/commits')

const express = require('express');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(process.cwd() + '/build')));

// test endpoint
app.get('/test', (req, res) => {
    res.json({message: "testing"})
})

// Backend: 
// Test routes still available:
app.use('/api/shakespeareQuotes', shakespeareRouter) // aka public dash data
app.use('/api/moonPhases', moonPhasesRouter) // team dash data
app.use('/api/commits', commitsRouter) // personal dash data
// Planned endpoints for when we have mock data:
/*
server.use('/api/public', )
server.use('/api/team', checkJwt, teamRouter)
server.use('/api/personal', checkJwt, personalRouter)
*/


// React app is served on *: 
app.get('*.*', express.static(path.join(process.cwd() + '/build'), {
    maxAge: '1y'
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd() + '/build/index.html'));
});


//const port = process.env.PORT || 5000;
//app.listen(port);

//console.log('App is listening on port ' + port);
app.use(awsServerlessExpressMiddleware.eventContext());


module.exports = app;