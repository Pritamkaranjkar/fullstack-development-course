export function renderTasks(taskList, tasks) {
  taskList.innerHTML = tasks.map((task) => `<li>${task.title}</li>`).join('');
}
