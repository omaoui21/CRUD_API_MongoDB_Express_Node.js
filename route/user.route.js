const express = require('express')

//express router
const Router = express.Router();
const {getAllUser,getSingleUser,postNewUser,DeleteUser,UpdateUser} = require('../controller/user.controller')




//Routes
Router.get('/api',getAllUser)
Router.get('/api/:id',getSingleUser)
Router.post('/api',postNewUser)
Router.delete('/api/:id',DeleteUser)
Router.patch('/api/:id',UpdateUser)

module.exports = {
    Router
}