import { openTodoForm, todoFormSend, projectFormSend } from "../contollers/formHandling";
import projects from "../index";
import { handleDropDown } from "../helpers/cleanupHelper";
import Project from "../models/project";
import { saveProjects } from "../contollers/localStorage";

let taskModal = document.querySelector('.task-modal');
let projectModal = document.querySelector(".project-modal");

//test task form open button
let testModalButton = document.querySelector('.task-modal-test');
testModalButton.addEventListener( "click", (event) => {
  taskModal.classList.add('open');
  openTodoForm();
});

//task form cancel button
let taskCancelButton = document.querySelector('.task-cancel-button');
taskCancelButton.addEventListener( "click", (event) => {
  taskModal.classList.remove('open');
  if(taskForm.classList.contains('edit-mode')){
    taskForm.classList.remove('edit-mode');
    editId = "";
    editCreationDate = "";
  }
  taskForm.reset();
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
  console.log("task submition caught");
  e.preventDefault();
  const formData = new FormData(taskForm);
  taskModal.classList.remove('open');
  taskForm.reset();
  let activeProject = document.querySelector(".active-project");

  let projectUuid = [...activeProject.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);
  let todoNotes = document.querySelector("#task-note-list-ul").innerHTML;
  if(taskForm.classList.contains('edit-mode')){
    taskForm.classList.remove('edit-mode');
    todoFormSend(projectUuid, formData.get("todoname"), formData.get("todostatus"), formData.get("tododescription"), todoNotes, formData.get("todopriority"), formData.get("tododuedate"), editId, editCreationDate);
    editId = "";
    editCreationDate = "";
  } else {
    todoFormSend(projectUuid, formData.get("todoname"), formData.get("todostatus"), formData.get("tododescription"), todoNotes, formData.get("todopriority"), formData.get("tododuedate"));
  }
});

//handle project form submition
let projectForm = document.querySelector('#project-form');
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("project submition caught");
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
let editId, editCreationDate;
let editTaskButton = document.querySelector(".edit-task-button");
editTaskButton.addEventListener('click', () => {
  if(!document.querySelector(".active-task")) {
    console.log("edit nope");
  } else {
    let activeElement = document.querySelector(".active-task");
    let todoUuid = [...activeProject.classList].find(className =>
      className.startsWith("todo-uuid-")
    ).substring(10);
    let projectUuid = [...activeElement.classList].find(className =>
      className.startsWith("project-uuid-")
    ).substring(13);
    let selectedTodo = JSON.stringify(projects[`${projectUuid}`].getListOfTodos()[`${todoUuid}`]);
    taskForm.classList.add("edit-mode");
    openTodoForm(...JSON.parse(selectedTodo));
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
    console.log(projects[`${projectUuid}`]);
    projects[`${projectUuid}`].removeTodoFromList(`${todoUuid}`);
    saveProjects();
  }
});





const textField = document.getElementById('myTextField');
const wire = document.getElementById('wire');
const write = document.querySelector('.writing');
//textField.setAttribute("value", "Click to edit this text.");

textField.addEventListener("click", function() {
  this.contentEditable = true;
  this.focus();
});

textField.addEventListener("blur", function() {
  textField.innerHTML = write.value;
  this.contentEditable = false;
});

$('#myTextField').keydown( function(e) {

  if(e.which === 13 && !e.shiftKey) {
    e.preventDefault();
    if(this.innerHTML && (this.innerHTML.replace(/&nbsp;/gi, ' ').trim() !== "")) {
      write.setAttribute("value", this.innerHTML);
      this.blur();
    }
  } else if(e.which === 27) {
    console.log("escaping");
    e.preventDefault();
    wire.reset();
    this.blur();
  }
});