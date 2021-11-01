//jshint esversion:6

const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("HELLO!!" + "<h1>World</h1>")
})

app.listen(3000, function(){
    console.log("Server started at port 3000")
});
