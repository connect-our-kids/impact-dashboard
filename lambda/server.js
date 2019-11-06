const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(process.cwd() + '/build')));
app.get('/test', (req, res) => {
    res.json({message: "testing"})
})

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