class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class MyList extends List {}

class TodoList extends List {
  constructor(name) {
    super();
    this._name = name;
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const todoList = new TodoList('Minha lista');

document.getElementById('newTodo').onclick = function () {
  todoList.add('Novo todo');
};

console.log(todoList.name);