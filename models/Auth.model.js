const mongoose = require('mongoose');
const { Schema,model } = mongoose;
const auth= new Schema({
    email: {
      type: String,
      required:true,
      unique: true,
    },
    password: {
      type: String,
      required:true,
    }
});
module.exports = new model('Auth',auth);