const tasks = [
  { id: 1, title: 'Write HTML', done: true },
  { id: 2, title: 'Write CSS', done: false },
  { id: 3, title: 'Add JS', done: false }
];

const pendingTasks = tasks.filter((task) => !task.done);
const firstTask = tasks.find((task) => task.id === 2);

console.log('Pending tasks:', pendingTasks);
console.log('First matching task:', firstTask);
