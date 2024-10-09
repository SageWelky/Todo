import Project from "../models/project";


function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
  let projects = JSON.parse(localStorage.getItem("projects") || []);

  for (i = 0; i < projects.length - 1; i++) {
    projects[i] = new Project(...projects[i]);

    for (j = 0; j < projects[i].getListofTodos.length - 1; j++) {
      projects[i].loadTaskStorage(j);
    }
  }
  return projects;
}





export { saveProjects, loadProjects };