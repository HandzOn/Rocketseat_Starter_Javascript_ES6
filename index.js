class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class MyList extends List {

}

class TodoList extends List {
  constructor() {
    super();
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

const todoList = new MyList();

document.getElementById('newTodo').onclick = function () {
  todoList.add('Novo todo');
};