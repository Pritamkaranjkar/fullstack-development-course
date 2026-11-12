const taskForm = document.querySelector('#task-form');
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');
const totalCount = document.querySelector('#total-count');
const doneCount = document.querySelector('#done-count');
const openCount = document.querySelector('#open-count');
const clearCompletedBtn = document.querySelector('#clear-completed');

const initialTasks = [
  { id: 1, title: 'Review sprint board', done: true },
  { id: 2, title: 'Write CSS for card layout', done: false },
  { id: 3, title: 'Plan next task list', done: false }
];

let tasks = [...initialTasks];

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
    return;
  }

  tasks.push({
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

// TODO: Replace this starter with full Task Manager behavior.
// TODO: Add a task form with validation and better error states.
// TODO: Make the task list render from a fetched API or mock dataset.
// TODO: Add support for keyboard accessibility and button labels.
// TODO: Keep the UI responsive on mobile and tablet screens.

taskForm.addEventListener('submit', addTask);
clearCompletedBtn.addEventListener('click', clearCompleted);
renderTasks();
