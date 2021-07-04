const app = require('express')();

let PORT=process.env.PORT||3000;

var htmlPath = path.join(__dirname, 'html');
app.use(express.static("htmlPath"));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})