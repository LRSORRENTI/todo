document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const input = document.getElementById('input');
    const todoContainer = document.createElement('div');
    document.body.appendChild(todoContainer);

    // Load stored to-dos from local storage
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todoText => {
        createTodoElement(todoText);
    });

    submitBtn.addEventListener('click', () => {
        const todoText = input.value.trim();

        if (todoText !== '') {
            createTodoElement(todoText);
            storedTodos.push(todoText);
            localStorage.setItem('todos', JSON.stringify(storedTodos));
            input.value = ''; // Clear the input field
        }
    });

    function createTodoElement(text) {
        const newTodo = document.createElement('div');
        newTodo.classList.add('todo-item');
    
        const todoText = document.createElement('p');
        todoText.textContent = text;
        todoText.addEventListener('click', () => {
            todoText.classList.toggle('completed');
        });
    
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            newTodo.remove(); // Remove the todo item from the DOM
            storedTodos.splice(storedTodos.indexOf(text), 1); // Remove from the storedTodos array
            localStorage.setItem('todos', JSON.stringify(storedTodos)); // Update local storage
        });
    
        newTodo.appendChild(todoText);
        newTodo.appendChild(deleteBtn);
        todoContainer.appendChild(newTodo);
    }
    
    
});
