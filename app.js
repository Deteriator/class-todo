const list = new TodoList();
const ui = new UI();
const form = document.getElementById('addTodo');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  //Adding ToDo instance to our TodoList object
  const task = document.getElementById('task');
  const dueDate = document.getElementById('dueDate');
  list.addTodo(task.value, dueDate.value);
  //Create table based on list data
  
  ui.clearTable();
  ui.paintTable();
  
  //Clear task and due date inputs
  ui.clearForm();

});

const deleteForms = document.getElementsByClassName('deleteForm');
  for(let deleteForm of deleteForms){
    deleteForm.addEventListener('submit', (event)=>{
      event.preventDefault();
      list.list.deleteTodo(deleteForm[0].id);
      ui.paintTable();
    });
  }
