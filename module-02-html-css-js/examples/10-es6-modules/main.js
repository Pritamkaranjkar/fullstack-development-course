import { fetchTasks } from './api.js';
import { renderTasks } from './ui.js';

async function init() {
  try {
    const tasks = await fetchTasks();
    renderTasks(tasks);
  } catch (error) {
    console.error('Could not load tasks', error);
  }
}

init();
