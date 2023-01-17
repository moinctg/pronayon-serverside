const express = require('express')
// const {MongoClient} = require('mongodb');
const colors = require('colors')
// const ObjectId = require('mongodb').ObjectId


const cors = require('cors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT ||  5000;


connectDB()
const app = express()




//middleware 

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/project',require('./routes/projectRoutes'))
app.use(errorHandler)
// const uri = 
// `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4t39k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})