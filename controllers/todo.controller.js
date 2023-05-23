const Todo = require('../models/Todo.model');
const Employee = require('../models/Employee.model');
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
const todoList = async (req,res)=>{
    try{
        let todos="";
        const role = await Employee.findOne({employee_id:req.params.id});
        if(role=='project_manager' || role=='tech_lead' || role=='CTO'){
            todos = await Todo.find();
        }
        else{
            todos = await Todo.find({employee_id:req.params.id});
        }
        res.status(200).json({
            "all_task":todos
        })

    }
    catch(error){
        res.status(500).json({
            "message":error,
        })
    }
    console.log(req.params)
}
module.exports.makeTodo = makeTodo;
module.exports.updateTodo = updateTodo;
module.exports.todoList = todoList;