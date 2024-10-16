import Project from "../models/project";
import { projectItemAppender } from "../helpers/listAppendHelper";
import { loadProjectTodos } from "../views/listModule";
import { makeIterable } from "../helpers/formatHelper";


export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  let projects;

    try {
      projects = JSON.parse("projects")
    } catch (e) {
      console.log("I hate that I have to try catch this.");
    }

  if (projects == undefined) {
    projects = {};
  }


  if(Object.keys(projects).length !== 0) {
    for (let i = 0; i < Object.keys(projects).length; i++) {

      let iterable = makeIterable([...Object.values(projects)][i]);
      projects[[...Object.keys(projects)][i]] = new Project(...iterable);

      let newProject = projects[`${[...Object.keys(projects)][i]}`];

      if(Object.keys(projects[[...Object.keys(projects)][i]].getListOfTodos()).length > 0) {
        let todos = newProject.getListOfTodos();
        for (let j = 0; j < Object.keys(todos).length; j++) {
          [...Object.values(projects)][i].loadTaskStorage([...Object.values(todos)][j]);
        }
      }
      let docNewProject = projectItemAppender(newProject.getId(), newProject.getName(), newProject.getCreationDate());

      const listContainer = document.querySelector('.project-list-view');
      listContainer.appendChild(docNewProject);

    }

    document.querySelector('.project-list-view').querySelector(':first-child').classList.add('active-project');
  }

  return projects;
}