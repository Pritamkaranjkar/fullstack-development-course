export const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

export async function fetchTasks() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error('Unable to fetch tasks');
  }

  return response.json();
}
