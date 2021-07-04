var path = require('path');
var express = require('express');
var app = express();

let PORT=process.env.PORT||3000;

var htmlPath = path.join(__dirname, 'html');
app.use(express.static(htmlPath));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})