const PORT = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const form = require('./routes/form')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(process.cwd(),"public")))

// app.use((req, res, next)=>{ // Auth Middleware
//     req.user = "Ahmer";
//     next();
// })

app.use("/form", form);

app.listen(PORT, ()=>{
    console.log("Port is Running on : " + PORT);
})