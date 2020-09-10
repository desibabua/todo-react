const express = require('express');
const redis = require('redis');
const { getDefaultStatus, getNextStatus } = require('./Statuses');
const { DbClient } = require('./dbClient');

const client = redis.createClient({
  url: 'redis://127.0.0.1:6379',
  db: 1,
});

const app = express();
app.use(express.json());
app.use(express.static('public'));

const DEFAULT_HEADING = 'Todo';
const initializeToDos = () => {
  return {
    title: DEFAULT_HEADING,
    toDos: [],
    lastTaskId: 0,
  };
};

app.locals.db = new DbClient(client);
// app.locals.todoList = initializeToDos();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use((req, res, next) => {
  req.app.locals.db
    .getTodoDetails()
    .then((details) => {
      req.app.locals.todoList = details || initializeToDos();
    })
    .then(next);
});

app.get('/api/resetTodo', (req, res) => {
  const { db } = app.locals;
  // app.locals.todoList = initializeToDos();
  db.setTodoDetails(initializeToDos());
  res.json(initializeToDos());
});

app.get('/api/getAllToDos', (req, res) => {
  const { todoList } = app.locals;
  res.json(todoList);
});

app.post('/api/updateTitle', (req, res) => {
  const { todoList,db } = app.locals;
  todoList.title = req.body.title;
  db.setTodoDetails(todoList);
  res.end();
});

app.post('/api/addTask', (req, res) => {
  const { todoList,db } = app.locals;
  const { task } = req.body;
  todoList.lastTaskId++;
  todoList.toDos = [
    ...todoList.toDos,
    { id: todoList.lastTaskId, task, status: getDefaultStatus() },
  ];
  db.setTodoDetails(todoList);
  res.end();
});

app.post('/api/deleteTask', (req, res) => {
  const { todoList,db } = app.locals;
  const { taskId } = req.body;
  todoList.toDos = todoList.toDos.filter((task) => task.id !== taskId);
  db.setTodoDetails(todoList);
  res.end();
});

app.post('/api/updateStatus', (req, res) => {
  const { todoList,db } = app.locals;
  const { taskId } = req.body;
  const task = todoList.toDos.find((task) => task.id === taskId);
  task.status = getNextStatus(task.status);
  db.setTodoDetails(todoList);
  res.end();
});

module.exports = { app };
