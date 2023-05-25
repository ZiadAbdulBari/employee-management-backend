const Todo = require('../models/Task.model');
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
const updateTodo = async (req,res)=>{
    try{
        const selectedTodo = await Todo.findOne({_id:req.params.id});
        if(selectedTodo.start_time==null && selectedTodo.finish_time==null){
            selectedTodo.start_time = req.body.time;
            await selectedTodo.save();
            return res.status(200).json({
                message:"You are started this task."
            })
        }
        else if(selectedTodo.start_time!=null && selectedTodo.finish_time==null){
            selectedTodo.start_time = req.body.time;
            selectedTodo.is_done = true;
            await selectedTodo.save();
            return res.status(200).json({
                message:"Congratulation! You are successfully completed this task."
            })
        }

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Sorry! Something went wrong."
        })
    }
}
const todoList = async (req,res)=>{
    try{
        let todos="";
        const role = await Employee.findOne({employee_id:req.id});
        if(role=='project_manager' || role=='tech_lead' || role=='CTO'){
            todos = await Todo.find();
        }
        else{
            todos = await Todo.find({assign_to:req.id});
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