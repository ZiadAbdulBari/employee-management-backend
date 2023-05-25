const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const employee= new Schema({
    employee_id: {
      type: String,
      required:false,
      default:"",
    },
    first_name: {
      type: String,
      required:false,
      default:" ",
    },
    last_name: {
      type: String,
      required:false,
      default:" ",
    },
    email:{
      type: String,
      required:true,
      unique:true
    },
    role:{
      type: String,
      required:false,
      default:" ",
    },
    salary:{
      type: String,
      required:false,
      default:" "
    },
    // status:{
    //   type: Array,
    //   required:true,
    // },

});
module.exports = new model('Employee',employee);