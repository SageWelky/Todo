import projects from "..";
import Project from "../models/project";
import TodoItem from "../models/todo";
import { saveProjects, loadProjects } from "./localStorage";
import { format, parseISO } from 'date-fns';


function createNewProject(name) {
  let newUuid = crypto.randomUUID();
  //amend this line to use the fndate library
  let timeCreated = new Date();
  let newProject = new Project(name, newUuid, timeCreated.toISOString());
  projects[`${newUuid}`] = newProject;
  saveProjects(projects);
  return (newProject);
}

function createNewTodo(projectUuid, name, status, description, notes, priority, dueDate, newUuid = crypto.randomUUID(), inputTimeCreated = "") {

  //amend this line to use the fndate library
  let taskForm = document.querySelector('#task-form');
  let timeCreated;
  if(taskForm.classList.contains('edit-mode')) {
    timeCreated = inputTimeCreated;
  } else {
    timeCreated = (new Date()).toISOString();
  }

  let newTodo = new TodoItem(name, status, description, notes, priority, dueDate, newUuid, timeCreated);
  projects[`${projectUuid}`].addTodoToList(newTodo);
  saveProjects(projects);
  return (newTodo);
}

export { createNewTodo, createNewProject };