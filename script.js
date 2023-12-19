function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = `<span>${taskText}</span><button onclick="completeTask(this)">Complete</button>`;
        taskList.appendChild(newTask);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle("completed");
}
