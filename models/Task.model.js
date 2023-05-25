const mongoose = require('mongoose');
const {Schema,model} = mongoose;
const task = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    assign_to:{
        type:String,
        required:true,
    },
    project_name:{
        type:String,
        required:true,
    },
    issue_date:{
        type:String,
        required:true,
    },
    start_time:{
        type:Date,
        default:''
    },
    duration:{
        type:String,
        default:''
    },
    finish_time:{
        type:Date,
        default:''
    },
    is_done:{
        type:Boolean,
        default:false
    },
})
module.exports = new model('Task',task);