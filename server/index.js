require('dotenv').config();
const express = require ('express')
const controller = require('./controller')
const massive = require('massive')
const session = require('session')




require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const controller = require('./controller');

// initialize express app
const app = express();

// destructure from .env
let {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

// middleware
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(express.static(`${__dirname}/build`));

// connect to db with massive
massive(CONNECTION_STRING).then(db => app.set('db', db));

// endpoints

app.post(`/auth/register`, controller.register)

app.post(`/auth/login`, controller.login);
app.post(`/api/user/:id`, controller.id );

app.get(`/api/user-posts`, controller.getUserPosts)

// listen
app.listen(SERVER_PORT, () => {
    console.log(`Port ${SERVER_PORT} is open for biz!`)
})


// const app = express();

// const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

// //middleware
// app.use(express.json());

// //database connection
// massive(CONNECTION_STRING).then(db => {
//     app.set('db', db)
//         console.log('Connected to the database')
    
// })

// //Endpoints
// app.post('/auth/register', controller.register)
// app.post('/auth/login', controller.login)

// app.listen(SERVER_PORT, () => {
//     console.log(`Server listening on port ${SERVER_PORT}`);
// });