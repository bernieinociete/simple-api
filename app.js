const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);

require('dotenv').config({path: './app/config/.env'});


app.use(function(req, res, next) {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Max-Age': '3600',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Auth-User',
    })
    next();
});

app.use(express.urlencoded({extended: true}));
// Accepts Raw Text
app.use(express.text());
// Filters Encrypted Req.body
// app.use(middleware.decryptPayload);
// For Returning JSON Payload
app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const accounts = require('./app/routes/account.routes.js');

app.use('/api', accounts);

app.get('/', (req, res)=>{
    res.json({message: 'Connected to Server'})
})

const port = 4230;
server.listen(port, () => console.log('listening on port' + port));