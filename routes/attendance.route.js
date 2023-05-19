const express = require('express');
const route = express.Router();
const tokenChecker = require('../middleware/tokenChecker');
const {checkIn,checkOut} = require('../controllers/attendance.controller');

route.post('/checkin',tokenChecker,checkIn);
route.post('/checkout',tokenChecker,checkOut);
module.exports = route;