import { openTodoForm, todoFormSend, projectFormSend, editId, editCreationDate, resetEditProps } from "../contollers/formHandling";
import projects from "../index";
import { handleDropDown } from "../helpers/cleanupHelper";
import Project from "../models/project";
import { saveProjects } from "../contollers/localStorage";
import { makeIterable, refreshListViews } from "../helpers/formatHelper";

let taskModal = document.querySelector('.task-modal');
let projectModal = document.querySelector(".project-modal");

//task form cancel button
let taskCancelButton = document.querySelector('.task-cancel-button');
taskCancelButton.addEventListener( "click", (event) => {
  taskModal.classList.remove('open');
  if(taskForm.classList.contains('edit-mode')){
    taskForm.classList.remove('edit-mode');
    resetEditProps();
  }
  taskForm.reset();
  document.getElementById('task-note-list-ul').replaceChildren();
});

//project form cancel button
let projectCancelButton = document.querySelector('.project-cancel-button');
projectCancelButton.addEventListener( "click", (event) => {
  document.getElementById('project-name').value = "";
  projectModal.classList.remove('open');
});

//handle task form submition
let taskForm = document.querySelector('#task-form');
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(taskForm);
  let activeProject = document.querySelector(".active-project");

  let projectUuid = [...activeProject.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);
  let todoNotes = document.querySelector("#task-note-list-ul").innerHTML;
  if(taskForm.classList.contains('edit-mode')){
    todoFormSend(projectUuid, formData.get("todoname"), formData.get("todostatus"), formData.get("tododescription"), todoNotes, formData.get("todopriority"), formData.get("tododuedate"), editId, editCreationDate);
  } else {
    todoFormSend(projectUuid, formData.get("todoname"), formData.get("todostatus"), formData.get("tododescription"), todoNotes, formData.get("todopriority"), formData.get("tododuedate"));
  }
  taskModal.classList.remove('open');
  taskForm.reset();
  document.getElementById('task-note-list-ul').replaceChildren();
  todoNotes = "";
});

//handle project form submition
let projectForm = document.querySelector('#project-form');
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(projectForm);
  projectModal.classList.remove('open');
  projectForm.reset();
  projectFormSend(formData.get("projectname"));
});

//add a task button
let addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener('click', () => {

  if(!document.querySelector(".active-project")) {
    console.log("add nope");
  } else {
    let activeProject = document.querySelector(".active-project");
    let projectUuid = [...activeProject.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);
    openTodoForm();
  }
});

//add a project button
let addProjectButton = document.querySelector(".add-project-button");
addProjectButton.addEventListener('click', () => {
  projectModal.classList.add('open');
});

//edit a task
let editTaskButton = document.querySelector(".edit-task-button");
editTaskButton.addEventListener('click', () => {
  if(!document.querySelector(".active-task")) {
    console.log("edit nope");
  } else {
    let activeElement = document.querySelector(".active-task");
    let todoUuid = [...activeElement.classList].find(className =>
      className.startsWith("todo-uuid-")
    ).substring(10);
    let projectUuid = [...activeElement.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);
    let selectedTodo = JSON.stringify(projects[`${projectUuid}`].getListOfTodos()[`${todoUuid}`]);
    taskForm.classList.add("edit-mode");
    let iterable = makeIterable(JSON.parse(selectedTodo));
    openTodoForm(...iterable);
  }
});

//delete a task
let deleteTaskButton = document.querySelector(".delete-task-button");
deleteTaskButton.addEventListener('click', () => {

  if(!document.querySelector(".active-task")) {
    console.log("delete nope");
  } else {
    let activeElement = document.querySelector(".active-task")

    let todoUuid = [...activeElement.classList].find(className =>
      className.startsWith("todo-uuid-")
    ).substring(10);
    let projectUuid = [...activeElement.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);

    let listItemContainer = document.querySelector(`.todo-uuid-${todoUuid}`)

    listItemContainer.removeEventListener('click', handleDropDown);
    $(`.todo-list-view .todo-uuid-${todoUuid}`).remove();
    projects[`${projectUuid}`].removeTodoFromList(`${todoUuid}`);
    saveProjects();
  }
});

//delete a project
let deleteProjectButton = document.querySelector(".delete-project-button");
deleteProjectButton.addEventListener('click', () => {

  if(!document.querySelector(".active-project")) {
    console.log("delete nope");
  } else {
    let activeElement = document.querySelector(".active-project")

    let projectUuid = [...activeElement.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);

    let listItemContainer = document.querySelector(`.project-uuid-${projectUuid}`)

    $(`.project-list-view .project-uuid-${projectUuid}`).remove();
    delete projects[`${projectUuid}`];
    saveProjects();
    refreshListViews();
  }
});