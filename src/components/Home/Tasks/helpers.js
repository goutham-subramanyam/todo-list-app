import * as dayjs from 'dayjs';

export const loadTasks = () => {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

export const updateTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export const deleteTask = (id) => {
  const tasks = loadTasks();
  const removeIndex = tasks.findIndex(task => task.id === id);
  tasks.splice(removeIndex, 1);
  updateTasks([...tasks]);
}

export const cloneTask = (id) => {
  const tasks = loadTasks();
  let newTask = tasks.find(task => task.id === id);
  newTask = { ...newTask, id: tasks.length + 1, comments: null }
  updateTasks([...tasks, newTask]);
}

export const formatDate = (date) => {
  const DATE_FORMAT = 'MMM DD, YYYY';
  const formattedDate = dayjs(date).format(DATE_FORMAT);
  return formattedDate;
}