const express = require('express')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

const app = express()

app.get('/user', (req, res)=>{
   res.send('working....')
})

app.listen(5000, console.log('server is running ate ' + 5000))