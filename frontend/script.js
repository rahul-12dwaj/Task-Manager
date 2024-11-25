const API_URL = 'http://localhost:5000/api/tasks';
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Fetch Tasks
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  renderTasks(tasks);
}

// Render Tasks
function renderTasks(tasks) {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.title} - ${task.description}</span>
      <button class="delete-btn" data-id="${task._id}">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add Task
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, description }),
  });

  const newTask = await res.json();
  fetchTasks();
  taskForm.reset();
});

// Delete Task
taskList.addEventListener('click', async (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const id = e.target.dataset.id;
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
  }
});

// Initial Load
fetchTasks();
