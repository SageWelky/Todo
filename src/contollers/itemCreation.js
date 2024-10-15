import projects from "..";
import Project from "../models/project";
import TodoItem from "../models/todo";
import { saveProjects, loadProjects } from "./localStorage";
// add fn-date to get creation date


function createNewProject(name) {
  let newUuid = crypto.randomUUID();
  //amend this line to use the fndate library
  let timeCreated = new Date();
  let newProject = new Project(name, newUuid, timeCreated.toISOString());
  projects[`${newUuid}`] = newProject;
  saveProjects(projects);
  return (newProject);
}

function createNewTodo(projectUuid, name, status, description, notes, priority, dueDate, newUuid = crypto.randomUUID(), timeCreated = "") {

  //amend this line to use the fndate library
  timeCreated = new Date(timeCreated);
  let newTodo = new TodoItem(name, status, description, notes, priority, dueDate, newUuid, timeCreated);
  console.log(projectUuid);
  projects[`${projectUuid}`].addTodoToList(newTodo);
  saveProjects(projects);
  return (newTodo);
}

export { createNewTodo, createNewProject };