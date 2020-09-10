const express = require('express');
const redis = require('redis');
const {DbClient} = require('./dbClient');
const handlers = require('./handlers');

const client = redis.createClient({
  url: 'redis://127.0.0.1:6379',
  db: 1,
});

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.locals.db = new DbClient(client);


app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(handlers.attachTodo);
app.get('/api/resetTodo', handlers.resetTodo);
app.get('/api/getAllToDos', handlers.getAllToDos);
app.post('/api/updateTitle', handlers.updateTitle);
app.post('/api/addTask', handlers.addTask);
app.post('/api/deleteTask', handlers.deleteTask);
app.post('/api/updateStatus', handlers.updateStatus);

module.exports = { app };
