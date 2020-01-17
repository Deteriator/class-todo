class Todo {
  constructor(task, dueDate, isComplete = false) {
    this.task = task;
    this.dueDate = new Date(dueDate);
    this.isComplete = isComplete;
    this.taskID = Todo.idGenerator();
  }

  markComplete() {
    this.isComplete = true;
  }

  markIncomplete() {
    this.isComplete = false;
  }
}

Todo.idGenerator = (function() {
  let id = 0;

  return function() {
    return ++id;
  }
})()