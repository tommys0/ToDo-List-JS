function addTask() {
    const taskInput = document.querySelector("#taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.querySelector("#taskList");
        const newTask = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => completeTask(checkbox));

        const span = document.createElement("span");
        span.textContent = taskText;

        newTask.appendChild(checkbox);
        newTask.appendChild(span);

        taskList.insertBefore(newTask, taskList.firstChild);
        taskInput.value = "";
    } else {
        alert("Please fill the input task box.");
    }
}

function completeTask(checkbox) {
    const taskItem = checkbox.parentNode
    if (checkbox.checked) {
        taskItem.classList.add("completed");
    } else {
        taskItem.classList.remove("completed");
    }
}
