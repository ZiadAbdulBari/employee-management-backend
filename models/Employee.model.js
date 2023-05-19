const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const employee= new Schema({
    employee_id: {
      type: String,
      default:"",
      // required:true,
    },
    first_name: {
      type: String,
      required:true,
    },
    last_name: {
      type: String,
      required:true,
    },
    email:{
      type: String,
      required:true,
      unique:true
    },
    role:{
      type: String,
      required:true,
    },
    salary:{
      type: String,
      required:true,
    },
    // status:{
    //   type: Array,
    //   required:true,
    // },

});
module.exports = new model('Employee',employee);