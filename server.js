const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express()
const port=3000;

app.get('/',(req,res)=>{

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.listen(port,(err)=>{
    if(err) throw err
    console.log(`Server is listening on ${port}`)
})