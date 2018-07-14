// ExpressJS server which we'll use for our production build

var express = require('express');
var path = require('path');
var app = express();

app.get('/', (req,res) =>{
    res.send(__dirname + '/app/index.html')
})

app.listen(3000, ()=>{
    console.log('Express server running on port 3000...')
})