const { urlencoded } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use("view engine", "ejs");
app.use( express.urlencoded({extended: true,}));
app.use(express.json());
//intiating all of the api we would be using






app.get("/",(req,res)=>{
    
    
    res.sendFile(__dirname + "/index.html");
})








app.listen(port, () => { console.log("server started")});