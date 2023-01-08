//Create an application which are store the data about programmers 


/*We store
Name: 
which Tech you are learning:
subscriber channel status:
True or False*/
// We can use webrowser, which we can send the data from the client to the server

//GET: http:localhost:9000/aliens (I want to fetch all the aliens(programmers) from the data base)
//GET:http:localhost:9000/aliens/<id> (for one alien)
//POST: http:localhost:9000/aliens (I will send data from client to the server,where server is going to store in the db )
//Patch: http:localhost:9000/aliens/<id> 

const express = require('express')
const mongoose = require('mongoose')
//our nodejs framework connecting to the mongodb and mongodb will be connecting to our db AlienDbex
//this might be available in some other machine so in that case we also mention the IP address
const url = 'mongodb://127.0.0.1/AlienDBex'

//start our express
const app = express()

//url of our db
mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})