require('dotenv').config();
const express = require ('express')
const controller = require('./controller')
const massive = require('massive')
const session = require('session')



const app = express();

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

//middleware
app.use(express.json());

//database connection
massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
        console.log('Connected to the database')
    
})

//Endpoints
app.post('/auth/register', controller.register)
app.post('/auth/login', controller.login)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
});