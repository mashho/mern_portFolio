const express=require("express");
const app=express();
const dotenv=require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config({path:'./config.env'});
const port=process.env.PORT || 5000;
require('./db/conn');
app.use(express.json())

app.use(cookieParser());

app.use(require('./router/auth'));

app.use(require('./router/demo'));

app.use(require('./router/project'));


if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"))
}


app.listen(port,()=>{
    console.log(`connection is setup at port ${port}`);
});