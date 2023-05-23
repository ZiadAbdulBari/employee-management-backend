const express = require('express');
const route = express.Router();
const {makeTodo,updateTodo, todoList} = require('../controllers/todo.controller');

route.post('/create-todo/',makeTodo);
route.post('/update-todo/',updateTodo);
route.get('/list-todo/:id',todoList);
module.exports = route;