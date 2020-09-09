const express = require('express');
const { getDefaultStatus, getNextStatus } = require('./Statuses');

const app = express();
app.use(express.json());

const DEFAULT_HEADING = 'Todo';
const initializeToDos = () => {
  return {
    title: DEFAULT_HEADING,
    toDos: [],
    lastTaskId: 0,
  };
};

let todoList = initializeToDos();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.get('/api/resetTodo', (req, res) => {
  todoList = initializeToDos();
  res.json(todoList);
});

app.get('/api/getAllToDos', (req, res) => {
  res.end(JSON.stringify(todoList));
});

app.post('/api/updateTitle', (req, res) => {
  todoList.title = req.body.title;
  res.end();
});

app.post('/api/addTask', (req, res) => {
  const { task } = req.body;
  todoList.lastTaskId++;
  todoList.toDos = [
    ...todoList.toDos,
    { id: todoList.lastTaskId, task, status: getDefaultStatus() },
  ];
  res.end();
});

app.post('/api/deleteTask', (req, res) => {
  const { taskId } = req.body;
  todoList.toDos = todoList.toDos.filter((task) => task.id !== taskId);
  res.end();
});

app.post('/api/updateStatus', (req, res) => {
  const { taskId } = req.body;
  const task = todoList.toDos.find((task) => task.id === taskId);
  task.status = getNextStatus(task.status);
  res.end();
});

module.exports = { app };
