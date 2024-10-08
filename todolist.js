document.getElementById('addTaskButton').addEventListener('click', addTask);
document.getElementById('signOutButton').addEventListener('click', signOut);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const dateInput = document.getElementById('dateInput');

    const taskText = taskInput.value.trim();
    const descriptionText = descriptionInput.value.trim();
    const dateText = dateInput.value;

    // Validate inputs
    if (taskText === '' || descriptionText === '' || dateText === '') {
        alert('Please fill in all fields.');
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    // Add task details
    listItem.innerHTML = `
        <div class="task-title">${taskText}</div>
        <div class="task-description">${descriptionText}</div>
        <div class="task-date">Due Date: ${dateText}</div>
    `;

    // Create a delete button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.classList.add('remove');
    removeButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Append the delete button to the list item
    listItem.appendChild(removeButton);
    // Append the list item to the task list
    taskList.appendChild(listItem);
    
    // Clear input fields
    taskInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
}

function signOut() {
    alert('You have signed out.');
    window.location.href = 'signin.html'; // Redirect to sign-in page
}
