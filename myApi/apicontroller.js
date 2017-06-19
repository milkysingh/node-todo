var Todo=require("../model/todomodel");
var bodyparser=require("body-parser");

module.exports=function(app)
{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.get("/todo/:user",function(req,res)
    {
Todo.find({name:req.params.user},function(err,todo)
{
    if(err) throw err;
    res.send(todo);
});
    });

    app.get("/todos/:id",function(req,res)
    {
Todo.findById({_id:req.params.id},function(err,data)
{
if(err) throw err;
res.send(data);
});
    });

    app.post("/todo/change",function(req,res)
    {
    if(req.body.id)
    {
Todo.findByIdAndUpdate(req.body.id,{
 
 todo:req.body.todo,
 isDone:req.body.isDone,
 isAttached:req.body.isAttached
},function(err,data)
{
    if(err) throw err;

    res.send("Values Updated");
});
    }
else{
    var newTodo=Todo({
        name:"Bilings",
        todo:req.body.todo,
      isDone:req.body.isDone,
  isAttached:req.body.isAttached
    });

newTodo.save(function(err)
{
if(err) throw err;
res.send("Record has been Saved!!");
});
   }
    });

    app.delete("/todo/change",function(req,res)
    {
Todo.findByIdAndRemove(req.body.id,function(err)
{
    if(err) throw err;
    res.send("Sucessfully Deleted");
})
    });
    app.get("/api/test",function(req,res)
    {
Todo.find({},function(err,data)
    {
res.send(data);
    });

    });
    
}