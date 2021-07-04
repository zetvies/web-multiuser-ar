const app = require('express')();

let PORT=process.env.PORT||3000;

app.use(express.static("./public_html"));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})