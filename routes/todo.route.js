const express = require('express');
const route = express.Router();
const {makeTodo,updateTodo} = require('../controllers/todo.controller');

route.post('/create-todo/',makeTodo);
route.post('/update-todo/',updateTodo);

module.exports = route;