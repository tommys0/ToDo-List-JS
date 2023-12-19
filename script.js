function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerHTML = `<input type="checkbox" onchange="completeTask(this)"><span>${taskText}</span>`;
        taskList.insertBefore(newTask, taskList.firstChild);
        taskInput.value = "";
    } else {
        alert("Please fill the input task box.");
    }
}

function completeTask(checkbox) {
    const taskItem = checkbox.parentNode;
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}
