const express = require('express')
const app = express()
const session = require('express-session')
require('dotenv').config()
const connectDB = require('./db/connectDb')

app.set('view engine','ejs')

app.use(session({
    resave:false,
    saveUninitialized:true,
    secret:process.env.session_secret
}))

var port = process.env.PORT || 3000

const start = async () =>{
  try {
     await config(process.env.Mongo_Url)
     app.listen(port)
  } catch (error) {
    console.log(error)
  }
}

start()