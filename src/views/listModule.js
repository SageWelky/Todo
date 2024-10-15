import projects from "../index";
import Project from "../models/project";
import TodoItem from "../models/todo";
import { todoItemAppender } from "../helpers/listAppendHelper";

//active task selector to enable drop down logic via CSS
const todoListContainer = document.querySelector('.todo-list-view');
todoListContainer.addEventListener('click', function(e) {

  let listItem = e.target.closest('.list-item-container');

  if (listItem && !listItem.classList.contains('active-task')) {
    let activeElements = projectListContainer.querySelectorAll('.active-task');

    activeElements.forEach((activeElement) => {
      activeElement.classList.remove('active-task');
    });

    listItem.classList.add('active-task');
  }
});

//active project selector to retain which project each task belongs to
const projectListContainer = document.querySelector(".project-list-view");
projectListContainer.addEventListener('click', function(e) {

  let listItem = e.target.closest('.list-item-container');

  if (listItem && !listItem.classList.contains("active-project")) {
    let activeElements = projectListContainer.querySelectorAll(".active-project");

    activeElements.forEach((activeElement) => {
      activeElement.classList.remove("active-project");
    });

    listItem.classList.add('active-project');
    activeElements = projectListContainer.querySelectorAll(".active-project");
    let projectUuid = [...activeElements].map(element => [...element.classList]).flat()
    .find(className => className.startsWith("project-uuid-")).substring(13);
    loadProjectTodos(projectUuid);
  }
});

//pulling the todos list for the selected Project
export function loadProjectTodos(projectUuid) {
  const listContainer = document.querySelector(".todo-list-view");

  listContainer.replaceChildren();

  // let entries = Object.entries(todo);
  // let iterable = [];
  // let holderPair = {};
  // for (const [key, value] of entries) {
  //   holderPair[key] = value;
  //   iterable.push(holderPair[key]);
  // }
  // this.#listOfTodos[todo.id] = new TodoItem(...iterable);


  let todos = projects[`${projectUuid}`].getListOfTodos();

  if(Object.keys(todos).length > 0){
    for (let j = 0; j < Object.keys(todos).length; j++) {
      let myTodo = ([...Object.values(todos)][j]);
      let currentAppend = todoItemAppender(projectUuid, myTodo.getName(), myTodo.getStatus(), myTodo.getDescription(), myTodo.getNotes(), myTodo.getPriority(), myTodo.getDueDate(), myTodo.getId(), myTodo.getCreationDate() );
      listContainer.appendChild(currentAppend);
    }
  }
}