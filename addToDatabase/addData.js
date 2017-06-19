var Todo=require("../model/todomodel.js");
module.exports=function(app)
{
    app.get("/todo/data",function(req,res)
    {
     var todoData=[
         {
             name:"Malkeet",
             todo:"Buy the chicken",
             isDone:true,
             isAttached:false
         },
         {
             name:"Aman",
             todo:"Get the Eggs",
             isDone:false,
             isAttached:false
         }
     ];
      Todo.create(todoData,function(err,result)
    {
        if(err) throw err;
res.send(result);
    }
    );

    });
   
}