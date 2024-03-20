document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');
    const input = document.getElementById('input');
    const todoContainer = document.createElement('div');
    document.body.appendChild(todoContainer);

    submitBtn.addEventListener('click', () => {
        const todoText = input.value.trim();

        if (todoText !== '') {
            const newTodo = document.createElement('p');
            newTodo.textContent = todoText;
            todoContainer.appendChild(newTodo);
            input.value = ''; // Clear the input field
        }
    });
});
