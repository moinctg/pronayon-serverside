const express = require('express')
const fs = require('fs');
const sharp = require("sharp");

// const {MongoClient} = require('mongodb');
const colors = require('colors')
// const multer = require('multer');
// const upload = multer();
// const ObjectId = require('mongodb').ObjectId


const cors = require('cors');
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
// const {upload} = require('./middleware/uploadMiddleware')
const connectDB = require('./config/db');
const { upload } = require('./controllers/imageController');
const port = process.env.PORT ||  8000;


connectDB()
const app = express()

// Create upload folder if it does not exist
const dir = process.env.IMAGE_UPLOAD_DIR;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.access("./uploads", (error) => {
  if (error) {
    fs.mkdirSync("./uploads");
  }
});




//middleware 

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/project',require('./routes/projectRoutes'))
app.use('/api/team',require('./routes/teamRoutes'))
app.use('/api/departments',require('./routes/departmentRoutes'))
app.use('/api/clients',require('./routes/clientsRoutes'))
app.use('/api/img',require('./routes/imageRoutes'))
app.use('/api/testomonial',require('./routes/testomonialRoute'))
app.use('/api/register',require('./routes/registerRoute'))
app.use('/api/firebaseRegister',require('./routes/FirebaseWIthRegisterRoute'))
// error handaler 
app.use(errorHandler)

// // static image folder 
app.use('/upload',express.static('./upload'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})