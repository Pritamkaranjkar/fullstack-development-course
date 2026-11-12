const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = input.value.trim();

  if (!value) {
    return;
  }

  const item = document.createElement('li');
  item.className = 'task-item';
  item.innerHTML = `
    <span class="task-text">${value}</span>
    <button type="button" class="complete-btn">Done</button>
    <button type="button" class="delete-btn">Delete</button>
  `;

  list.appendChild(item);
  input.value = '';
});

list.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('complete-btn')) {
    const taskText = target.parentElement.querySelector('.task-text');
    taskText.classList.toggle('done');
  }

  if (target.classList.contains('delete-btn')) {
    target.parentElement.remove();
  }
});
