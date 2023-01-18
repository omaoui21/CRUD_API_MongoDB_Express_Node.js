const express = require('express')
const mongoose =require('mongoose')
require('dotenv').config()
const {Router} = require('./route/user.route')

//express app
const app = express()

//connect to db
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONG_URI)
.then(()=> console.log("connected to db"))
.catch(()=> console.log("connection failed"))

//Middleware
app.use(express.json())
app.use((req, res, next) =>{
    console.log(req.path,req.method)
    next()
})

//route
app.use('/',Router)

//Listen request
PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}!`);
})