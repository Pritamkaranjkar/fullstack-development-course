const statusElement = document.querySelector('#status');
const listElement = document.querySelector('#task-list');

async function loadTasks() {
  statusElement.textContent = 'Loading tasks...';
  listElement.innerHTML = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const tasks = await response.json();

    tasks.forEach((task) => {
      const item = document.createElement('li');
      item.textContent = `${task.id}. ${task.title}`;
      listElement.appendChild(item);
    });

    statusElement.textContent = 'Tasks loaded successfully';
  } catch (error) {
    statusElement.textContent = 'Could not load tasks right now.';
    statusElement.classList.add('error');
  }
}

loadTasks();
