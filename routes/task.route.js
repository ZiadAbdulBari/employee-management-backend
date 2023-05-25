const express = require('express');
const route = express.Router();
const {makeTodo,updateTodo, todoList} = require('../controllers/task.controller');
const tokenChecker = require('../middleware/tokenChecker');
route.post('/create-todo/',makeTodo);
route.post('/update-todo/:id/',tokenChecker,updateTodo);
route.get('/list-todo/',tokenChecker,todoList);
module.exports = route;