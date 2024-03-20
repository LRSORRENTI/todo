// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the input field, submit button, and create a container for to-do items
    const submitBtn = document.getElementById('submitBtn');
    const input = document.getElementById('input');
    const todoContainer = document.createElement('div');
    document.body.appendChild(todoContainer); // Append the container to the body of the document

    // Load stored to-dos from local storage, parse them into an array, and create elements for each
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todoText => {
        createTodoElement(todoText);
    });

    // Add an event listener to the submit button for adding new to-dos
    submitBtn.addEventListener('click', () => {
        const todoText = input.value.trim(); // Get the input value and trim any whitespace

        if (todoText !== '') { // Check if the input is not empty
            createTodoElement(todoText); // Create a new to-do element
            storedTodos.push(todoText); // Add the new to-do to the array
            localStorage.setItem('todos', JSON.stringify(storedTodos)); // Update local storage with the new array
            input.value = ''; // Clear the input field
        }
    });

    // Function to create a new to-do element
    function createTodoElement(text) {
        const newTodo = document.createElement('div'); // Create a new div for the to-do item
        newTodo.classList.add('to-do-item'); // Add a class for styling

        const todoText = document.createElement('p'); // Create a new paragraph element for the to-do text
        todoText.textContent = text; // Set the text content to the to-do text
        todoText.addEventListener('click', () => { // Add an event listener to toggle the 'completed' class
            todoText.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button'); // Create a new button element for deleting the to-do
        deleteBtn.textContent = 'del'; // Set the button text to 'Delete'
        deleteBtn.addEventListener('click', () => { // Add an event listener to delete the to-do item
            newTodo.remove(); // Remove the to-do item from the DOM
            storedTodos.splice(storedTodos.indexOf(text), 1); // Remove the to-do from the stored array
            localStorage.setItem('todos', JSON.stringify(storedTodos)); // Update local storage with the new array
        });

        newTodo.appendChild(todoText); // Append the to-do text to the to-do item
        newTodo.appendChild(deleteBtn); // Append the delete button to the to-do item
        todoContainer.appendChild(newTodo); // Append the to-do item to the container
    }
});
