const express = require('express')
const app = express()
const port = 5000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})


//Get method

app.get('/',(req,res) =>{
    res.send('GET requiest to the home')
})

//Post Method

app.post('/',(req,res)=>{
    res.send('post request to homepage')
})

app.put('/user', (req,res)=>{
  res.send('Got a put request')
})

app.delete('/user',(req,res)=>{
  res.send('Got a delete at ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})