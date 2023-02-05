const express = require('express')
// const {MongoClient} = require('mongodb');
const colors = require('colors')
// const multer = require('multer');
// const upload = multer();
// const ObjectId = require('mongodb').ObjectId


const cors = require('cors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
// const {upload} = require('./middleware/uploadMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT ||  5000;


connectDB()
const app = express()




//middleware 

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/project',require('./routes/projectRoutes'))
app.use('/api/team',require('./routes/teamRoutes'))
app.use('/api/clients',require('./routes/clientsRoutes'))
app.use('/api/img',require('./routes/imageRoutes'))
// error handaler 
app.use(errorHandler)

// static image folder 
app.use('/upload',express.static('./upload'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})