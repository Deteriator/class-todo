class TodoList {
  constructor() {
    this.list = {};
  }

  addTodo(task, dueDate) {
    const todo = new Todo(task, dueDate);
    this.list[todo.taskID] = todo;
    return todo;
  }

  deleteTodo(taskID) {
    delete this.list[taskID];
  }
}