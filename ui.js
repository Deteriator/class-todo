class UI {
    constructor(){
        this.tbody = document.getElementById('todoList');
        this.dueDateInput = document.getElementById('dueDate');
        this.taskInput = document.getElementById('task');
    }
    paintTable(){
        for (let todo of Object.values(list.list)){
            let newRow = document.createElement('tr');
            let deleteButton =`
            <form action = '#' class = 'deleteForm' method = 'delete'>
                <input type = 'submit'class = 'button button-clear' 
                id= ${todo.taskID} value = "Delete Task"></input>
            </form>`
            
            newRow.innerHTML = `
            <td>${todo.task}</td>
            <td>${todo.dueDate.toLocaleString()}</td>
            <td>Complete</td>
            <td>${deleteButton}</td>
            `;
        this.tbody.appendChild(newRow);
        
        const deleteForms = document.getElementsByClassName('deleteForm');
          for(let deleteForm of deleteForms){
            deleteForm.addEventListener('submit', (event)=>{
              event.preventDefault();
              list.deleteTodo(deleteForm[0].id);
              this.clearTable();
              this.paintTable();
            });
          }
        }
    }
    clearForm(){
        this.taskInput.value = '';
        this.dueDateInput.value = '';
    }
    
    clearTable(){
        this.tbody.innerHTML = '';
    }
}