const tasks = [
  { id: 1, title: 'Write HTML', done: true },
  { id: 2, title: 'Write CSS', done: false },
  { id: 3, title: 'Add JS', done: false },
  { id: 4, title: 'Ship demo', done: true }
];

const pendingTasks = tasks.filter((task) => !task.done);
const titles = tasks.map((task) => task.title);

console.log('Pending tasks:', pendingTasks);
console.log('Task titles:', titles);
