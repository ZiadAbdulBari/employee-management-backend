const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

//api list
const auth = require('./routes/auth.route');
const employee = require('./routes/employee.route');
const attendance = require('./routes/attendance.route');
const task = require('./routes/task.route');

app.use('/api/auth', auth);
app.use('/api/auth',auth);
app.use('/api/employee',employee);
app.use('/api/todo',task);
app.use('/api/employee',attendance);


mongoose.connect(process.env.DB_STRING)
.then(()=>{
    console.log('DB server connected.')
})
.catch((error)=>{
    console.log(error);
});
app.listen(8000, () => {
    console.log(`Server is running on port 8000`)
})