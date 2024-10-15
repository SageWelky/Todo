import { todoItemAppender, projectItemAppender } from "../helpers/listAppendHelper";
import { createNewTodo, createNewProject } from "./itemCreation";

let testModalButton = document.querySelector('.task-modal-test');
let taskModal = document.querySelector('.task-modal');

function openTodoForm(name = "", status = "", description = "", notes = "", priority = "average", dueDate = "", todoUuid = "", creationDate = "") {

  let taskForm = document.querySelector('#task-form');
  if(taskForm.classList.contains('edit-mode')) {
    editId = todoUuid;
    editCreationDate = creationDate;
    document.querySelector('#task-name').value = name;
    document.querySelector('#task-status').value = status;
    document.querySelector('#task-description').value = description;
    document.querySelector('#task-note-list-ul').innerHTML = `${notes}`;;
    document.getElementById(`${priority}`).checked = true;
    document.querySelector('#task-due-date').value = dueDate;
  }

  taskModal.classList.add('open');
};

function todoFormSend(projectUuid, name, status, description, notes, priority, dueDate, todoUuid, timeCreated) {

  let newTodo = createNewTodo(projectUuid, name, status, description, notes, priority, dueDate, todoUuid, timeCreated);
  let docNewTodo = todoItemAppender(projectUuid, name, status, description, notes, priority, dueDate, newTodo.getId(), newTodo.getCreationDate());

  const listContainer = document.querySelector(".todo-list-view");
  listContainer.appendChild(docNewTodo);
}

function projectFormSend(name) {
  let newProject = createNewProject(name);
  let docNewProject = projectItemAppender(newProject.getId(), name, newProject.getCreationDate());

  const listContainer = document.querySelector('.project-list-view');
  listContainer.appendChild(docNewProject);
}

export { openTodoForm, todoFormSend, projectFormSend };