var config=require("./credentials.json");
module.exports=
{
    dbConnect:"mongodb://"+config.username+":"+config.password+"@ds131312.mlab.com:31312/node-todo"
}