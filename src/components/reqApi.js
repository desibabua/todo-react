const fetchPost = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data||{}),
  });
};

let requestAPI = {};

requestAPI.getAllToDos = () => fetch('/api/getAllToDos').then((x) => x.json());
requestAPI.resetToDos = () => fetchPost('/api/resetTodo');

requestAPI.updateTitle = (title) => fetchPost('/api/updateTitle', { title });
requestAPI.addTask = (task) => fetchPost('/api/addTask', { task });
requestAPI.deleteTask = (taskId) => fetchPost('/api/deleteTask', { taskId });
requestAPI.updateStatus = (taskId) =>
  fetchPost('/api/updateStatus', { taskId });

export default requestAPI;
