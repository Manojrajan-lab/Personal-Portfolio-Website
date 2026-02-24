let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

const taskInput = document.getElementById("taskInput");

// Save to LocalStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add Task
function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text, completed: false });
  taskInput.value = "";
  saveTasks();
  renderTasks();
}

// Toggle Complete
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Edit Task
function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    saveTasks();
    renderTasks();
  }
}

// Filter Tasks
function setFilter(filter) {
  currentFilter = filter;
  renderTasks();
}

// Render Tasks
function renderTasks() {
  const list = document.getElementById("taskList");
  const count = document.getElementById("taskCount");

  list.innerHTML = "";

  let filtered = tasks;

  if (currentFilter === "active") {
    filtered = tasks.filter(t => !t.completed);
  } else if (currentFilter === "completed") {
    filtered = tasks.filter(t => t.completed);
  }

  if (filtered.length === 0) {
    list.innerHTML = "<p>No tasks found.</p>";
  }

  filtered.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span onclick="toggleTask(${index})" class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>
      <div class="task-actions">
        <button class="edit-btn" onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">X</button>
      </div>
    `;

    list.appendChild(li);
  });

  count.textContent = `Total Tasks: ${tasks.length}`;
}

// Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Add task with Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

renderTasks();