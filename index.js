const express = require('express')
const app = express()
const session = require('express-session')
require('dotenv').config()

app.set('view engine','ejs')

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:process.env.session_secret
}))