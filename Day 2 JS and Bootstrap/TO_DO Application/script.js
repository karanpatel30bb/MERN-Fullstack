// Get DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const deleteCompletedButton = document.getElementById('deleteCompletedButton');
const searchInput = document.getElementById('searchInput');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Function to render tasks based on search
function renderTasks() {
    const searchTerm = searchInput.value.toLowerCase();
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        // Filter by search term
        if (!task.text.toLowerCase().includes(searchTerm)) return;

        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        // Delete button (in front, for all tasks)
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(index));
        li.appendChild(deleteBtn);

        // Task text (editable on double-click)
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.addEventListener('dblclick', () => editTask(index, taskText));
        li.appendChild(taskText);

        // Toggle completion on click (only if not clicking on text or delete button)
        li.addEventListener('click', (e) => {
            if (e.target !== taskText && e.target !== deleteBtn) {
                toggleComplete(index);
            }
        });

        taskList.appendChild(li);
    });
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
}

// Function to toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Function to edit a task
function editTask(index, taskTextElement) {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = tasks[index].text;
    taskTextElement.replaceWith(input);
    input.focus();

    input.addEventListener('blur', () => {
        tasks[index].text = input.value.trim() || tasks[index].text;
        renderTasks();
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            input.blur();
        }
    });
}

// Function to delete all completed tasks
function deleteCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
deleteCompletedButton.addEventListener('click', deleteCompletedTasks);
searchInput.addEventListener('input', renderTasks); // Real-time search

// Initial render
renderTasks();