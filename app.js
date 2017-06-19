var express=require("express");
var app=express();
var port=process.env.PORT||1122;
var mongoose=require("mongoose");
var config=require("./config");
var addData=require("./addToDatabase/addData.js");
var api=require("./myApi/apicontroller");
app.use("/prop",express.static(__dirname+"/public"));

app.set("view engine","ejs");
mongoose.connect(config.dbConnect);
console.log(config.dbConnect);
addData(app);
api(app);
app.listen(port);