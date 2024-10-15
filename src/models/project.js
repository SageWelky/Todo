import TodoItem from "./todo";
import { parseISO } from 'date-fns';

class Project {
  #name;
  #id;
  #creationDate;
  #listOfTodos;

  constructor(name, id, creationDate, listOfTodos = {}) {
    this.#name = name;
    this.#id = id;
    this.#creationDate = parseISO(creationDate);
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
    console.log(todo);
    console.log(todo.id);
    let entries = Object.entries(todo);
    let iterable = [];
    let holderPair = {};
    for (const [key, value] of entries) {
      holderPair[key] = value;
      iterable.push(holderPair[key]);
    }
    this.#listOfTodos[todo.id] = new TodoItem(...iterable);
  }

}

export default Project;