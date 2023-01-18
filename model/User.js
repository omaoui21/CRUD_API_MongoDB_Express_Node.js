const express = require('express')
const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
})

module.exports = mongoose.model('User',userSchema)