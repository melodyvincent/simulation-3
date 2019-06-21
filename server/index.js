require('dotenv').config();
const express = require ('express')
const controller = require('./controller')
const massive = require('massive')



const app = express();

let{CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env



app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});