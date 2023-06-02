const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const employee= new Schema({
    employee_id: {
      type: String,
      required:false,
      default:null,
    },
    first_name: {
      type: String,
      required:false,
      default:null,
    },
    last_name: {
      type: String,
      required:false,
      default:null,
    },
    email:{
      type: String,
      required:true,
      unique:true
    },
    role:{
      type: String,
      required:false,
      default:null,
    },
    salary:{
      type: String,
      required:false,
      default:null
    },
    joining_date:{
      type:Date,
      require:false,
      default:null
    }
    // status:{
    //   type: Array,
    //   required:true,
    // },

});
module.exports = new model('Employee',employee);