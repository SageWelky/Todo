import projects from "..";
import Project from "../models/project";
import TodoItem from "../models/todo";
//import { updateProjectDisplay, updateTodoDisplay } from "../views/listModule";
import { saveProjects, loadProjects } from "./localStorage";
// add fn-date to get creation date


function createNewProject(name) {
  let newUuid = crypto.randomUUID;
  //amend this line to use the fndate library
  let timeCreated = fndate.now;
  let newProject = new Project(name, newUuid, timeCreated);
  projects[`${newUuid}`] = newProject;
  saveProjects(projects);
  return (newProject);
  //updateProjectDisplay();
}

function createNewTodo(projectUuid, name, description, notes, priority, dueDate) {
  let newUuid = crypto.randomUUID;
  //amend this line to use the fndate library
  let timeCreated = fndate.now;
  let newTodo = new TodoItem(name, newUuid, description, notes, priority, dueDate, timeCreated);
  projects[`${projectUuid}`].addTodoToList(newTodo);
  return (newTodo);
  //updateTodoDisplay();
}

export { createNewTodo, createNewProject };