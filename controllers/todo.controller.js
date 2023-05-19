const Todo = require('../models/Todo.model');
const makeTodo = async (req,res)=>{
    const newTodo = new Todo({
        title:req.body.title,
        description:req.body.description,
        assign_to:req.body.assign_to,
        project_name:req.body.project_name,
        issue_date:req.body.issue_date,
    })
    try{
        await newTodo.save();
        return res.status(200).json({
            message:"New todo is created."
        })
    }
    catch(error){
        return res.status(500).json({
            message:error
        })
    }
}
const updateTodo = (req,res)=>{

}
module.exports.makeTodo = makeTodo;
module.exports.updateTodo = updateTodo;