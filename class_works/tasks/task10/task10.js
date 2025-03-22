let taskStack = [];

function addTask() {
    let taskInput = document.getElementById("task_input");
    let taskName = taskInput.value.trim();

    if (taskName) {
        taskStack.push(taskName);
        taskInput.value = "";
        displayTasks();
    } else {
        alert("Please enter a task name.");
    }
}

function undoTask() {
    if (taskStack.length > 0) {
        taskStack.pop();
        displayTasks();
    } else {
        alert("No tasks to undo.");
    }
}

function displayTasks() {
    let taskListDiv = document.getElementById("task_list");
    taskListDiv.innerHTML = "";

    let taskListHTML = taskStack.join('\n');
    
    taskListDiv.innerHTML = taskListHTML;
}
