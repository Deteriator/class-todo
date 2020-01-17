const list = new TodoList();
const form = document.getElementById('addTodo');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const task = document.getElementById('task');
  const dueDate = document.getElementById('dueDate');
  list.addTodo(task.value, dueDate.value);
  paintTable(list)

  // const tbody = document.getElementById('todoList');
  // const tr = document.createElement('tr');
  // tr.innerHTML = `
  // <td>${task.value}</td>
  // <td>${dueDate.value}</td>
  // <td>Complete</td>
  // <td>Delete</td>
  // `;
  // tbody.appendChild(tr);

  
})

function paintTable(todoList) {
  const tbody = document.getElementById('todoList');
  tbody.innerHTML = ''
  for (todo of Object.values(todoList.list)) {
    let newRow = document.createElement('tr')
    newRow.innerHTML = `
    <td>${todo.task}</td>
    <td>${todo.dueDate.toLocaleString()}</td>
    <td>Complete</td>
    <td>Delete</td>
    `
    tbody.appendChild(newRow)
  }
}