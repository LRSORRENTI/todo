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
        const newTodo = document.createElement('p');
        newTodo.textContent = text;
        todoContainer.appendChild(newTodo);
    }
});
