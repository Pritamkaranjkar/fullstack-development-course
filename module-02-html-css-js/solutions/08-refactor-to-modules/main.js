import { tasks } from './tasks.js';
import { renderTasks } from './render.js';

const taskList = document.querySelector('#task-list');
renderTasks(taskList, tasks);
