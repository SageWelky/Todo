import TodoItem from "./todo";

class Project {
  #name;
  #id;
  #creationDate;
  #listOfTodos;

  constructor(name, id, creationDate, listOfTodos = {}) {
    this.#name = name;
    this.#id = id;
    this.#creationDate = creationDate;
    this.#listOfTodos = listOfTodos;
  }

  toJSON() {
    return {
      name: this.getName(),
      id: this.getId(),
      creationDate: this.getCreationDate(),
      listOfTodos: this.getListOfTodos(),
    };
  }


  getName() {
    return this.#name;
  }
  getId() {
    return this.#id;
  }
  getListOfTodos() {
    return this.#listOfTodos;
  }
  getCreationDate() {
    return this.#creationDate;
  }
  setName(newName) {
    this.#name = newName;
  }
  addTodoToList(newTodo) {
    this.#listOfTodos[`${newTodo.getId()}`] = newTodo;
  }
  removeTodoFromList(todoUuid) {
    delete this.#listOfTodos[`${todoUuid}`];
  }
  loadTaskStorage(todo) {
    this.#listOfTodos[`${todo.getId()}`] = new TodoItem(...todo);
  }

}

export default Project;