const app = require('express')();

let PORT=process.env.PORT||3000;

app.get("/", (req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})