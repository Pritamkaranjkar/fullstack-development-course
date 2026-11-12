const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const statusElement = document.querySelector('#status');
const totalCount = document.querySelector('#total-count');
const doneCount = document.querySelector('#done-count');
const openCount = document.querySelector('#open-count');
const clearCompletedBtn = document.querySelector('#clear-completed');

let tasks = [];

function updateSummary() {
  totalCount.textContent = String(tasks.length);
  doneCount.textContent = String(tasks.filter((task) => task.done).length);
  openCount.textContent = String(tasks.filter((task) => !task.done).length);
}

function renderTasks() {
  taskList.innerHTML = '';

  if (!tasks.length) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No tasks yet. Add one to get started.';
    taskList.appendChild(emptyState);
    updateSummary();
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.className = `task-item ${task.done ? 'done' : ''}`;

    const main = document.createElement('div');
    main.className = 'task-main';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', `Mark ${task.title} as done`);

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.title;

    main.appendChild(checkbox);
    main.appendChild(text);

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.type = 'button';
    completeBtn.className = 'task-action complete';
    completeBtn.textContent = task.done ? 'Undo' : 'Done';

    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'task-action delete';
    deleteBtn.textContent = 'Delete';

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    item.appendChild(main);
    item.appendChild(actions);
    taskList.appendChild(item);

    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      renderTasks();
    });

    completeBtn.addEventListener('click', () => {
      task.done = !task.done;
      renderTasks();
    });

    deleteBtn.addEventListener('click', () => {
      tasks = tasks.filter((itemTask) => itemTask.id !== task.id);
      renderTasks();
    });
  });

  updateSummary();
}

function addTask(event) {
  event.preventDefault();

  const value = taskInput.value.trim();

  if (!value) {
    taskInput.focus();
    return;
  }

  tasks.unshift({
    id: Date.now(),
    title: value,
    done: false
  });

  taskInput.value = '';
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter((task) => !task.done);
  renderTasks();
}

async function loadTasks() {
  statusElement.textContent = 'Loading tasks...';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

    if (!response.ok) {
      throw new Error('Request failed');
    }

    const payload = await response.json();
    tasks = payload.map((task) => ({
      id: task.id,
      title: task.title,
      done: task.completed
    }));

    statusElement.textContent = 'Tasks loaded successfully';
    renderTasks();
  } catch (error) {
    statusElement.textContent = 'Could not load tasks. Showing local fallback data.';
    statusElement.classList.add('error');
    tasks = [
      { id: 1, title: 'Plan sprint review', done: false },
      { id: 2, title: 'Review CSS layout', done: true },
      { id: 3, title: 'Write task summary', done: false }
    ];
    renderTasks();
  }
}

taskForm.addEventListener('submit', addTask);
clearCompletedBtn.addEventListener('click', clearCompleted);
loadTasks();
