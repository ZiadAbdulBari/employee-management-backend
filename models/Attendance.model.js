const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const attendance = new Schema({
    date:{
        type:String,
        required:true
        // default:Date.now()
    },
    check_in:{
        type: Date,
        required: true
    },
    check_out:{
        type: Date,
        required: false,
        default:'',
    },
    employee_id:{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }

})
module.exports = new model('Attendance', attendance);