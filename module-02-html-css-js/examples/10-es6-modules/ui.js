export function renderTasks(tasks) {
  const list = document.querySelector('#task-list');

  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.textContent = `${task.id}. ${task.title}`;
    list.appendChild(item);
  });
}
