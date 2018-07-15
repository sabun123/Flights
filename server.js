// ExpressJS server which we'll use for our production build

var express = require('express');
var path = require('path');
var app = express(),
    DIR = path.join(__dirname, "dist"),
    HTML = path.join(DIR, "index.html");

// Tell Express to use webpack's outputted bundled files
app.use(express.static(DIR));

// Since we only have a single entry point (our HTML), any link should be redirected here
// Once here, React Router Redux will handle the links to the appropriate pages if any
app.get('*', (req,res) =>{
    res.send(HTML)
})

app.listen(3000, ()=>{
    console.log('Express server running on port 3000...')
    console.log("Open a browser and enter http://localhost:3000 to access the app")
})