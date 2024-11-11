const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const resetButton = document.getElementById('resetButton');

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            ${taskText}
            <div class="style-select">
                <select onchange="handleAction(this)">
                    <option value="">Selecione</option>
                    <option value="complete">Concluído</option>
                    <option value="delete">Excluir</option>
                </select>
            </div>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function handleAction(select) {
    const action = select.value;
    const li = select.parentElement.parentElement;

    if (action === 'complete') {
        li.classList.toggle('completed');
        li.classList.add('celebrate');
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        setTimeout(() => li.classList.remove('celebrate'), 1000);
    } else if (action === 'delete') {
        taskList.removeChild(li);
    }

    select.value = '';
}

resetButton.addEventListener('click', function() {
    taskList.innerHTML = '';
});