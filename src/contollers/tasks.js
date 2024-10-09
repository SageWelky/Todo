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
  projects.push(newProject);
  saveProjects(projects);
  //updateProjectDisplay();
}

function createNewTodo(projectIndex, name, description, notes, priority, dueDate) {
  let newUuid = crypto.randomUUID;
  //amend this line to use the fndate library
  let timeCreated = fndate.now;
  let newTodo = new TodoItem(name, newUuid, description, notes, priority, dueDate, timeCreated);
  projects[projectIndex].addTodoToList(newTodo);
  //updateTodoDisplay();
}

