import Project from "../models/project";


export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  let projects = JSON.parse(localStorage.getItem("projects") || "{}");

  for (let project in projects) {
    project = new Project(...project);
    for (let todo in project.getListofTodos()) {
      project.loadTaskStorage(todo);
    }
  }
  return projects;
}