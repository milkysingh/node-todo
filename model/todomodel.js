var mongoose=require("mongoose");
var Schema=mongoose.Schema;
var mySchema=new Schema(
    {
        name:String,
        todo:String,
        isDone:Boolean,
        isAttached:Boolean
    }
);
var Todo=mongoose.model("Todo",mySchema);
console.log("Schema has been created");
module.exports=Todo;
