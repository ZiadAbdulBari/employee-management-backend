const express = require('express');
const route = express.Router();
const tokenChecker = require('../middleware/tokenChecker');
const {signon,signoff, getMonthlyAttendance} = require('../controllers/attendance.controller');

route.post('/signon/',tokenChecker,signon);
route.post('/signoff/',tokenChecker,signoff);
route.post('/attendance-history/',tokenChecker,getMonthlyAttendance);
module.exports = route;