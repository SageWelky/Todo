import { todoItemAppender } from "../helpers/listAppendHelper";
import { createNewTodo } from "./itemCreation";

function openTodoForm(projectUuid, todoUuid = "", name = "", status = "", description = "", notes = "", priority = "", dueDate = "", creationDate = "") {
  //all form append code
};

function todoFormSend(projectUuid, name, status, description, notes, priority, dueDate) {

  let newTodo = createNewTodo(projectUuid, name, description, notes, priority, dueDate);
  let docNewTodo = todoItemAppender(projectUuid, newTodo.getId(), name, status, description, notes, priority, dueDate, newTodo.getCreationDate());

  const listContainer = document.querySelector(".todo-list-view");
  listContainer.appendChild(docNewTodo);

}

function loadProjectTodos(projectUuid) {
  const listContainer = document.querySelector(".todo-list-view");

  listContainer.replaceChild();

  for( let todo in projects[`${projectUuid}`].getListOfTodos() ) {
    let currentAppend = todoItemAppender(projectUuid, newTodo.getId(), todo.getName(), todo.getStatus(), todo.getDescription(), todo.getNotes(), todo.getPriority(), todo.getDueDate(), todo.getCreationDate());
    listContainer.appendChild(currentAppend);
  }
}

function projectFormSend() {

}

export openTodoForm;