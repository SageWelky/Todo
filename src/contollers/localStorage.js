import Project from "../models/project";
import { projectItemAppender } from "../helpers/listAppendHelper";
import { loadProjectTodos } from "../views/listModule";


export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjects() {
  let projects = JSON.parse(localStorage.getItem("projects") || "{}");

  // console.log(projects);
  // console.log(typeof(projects));
  // console.log(Object.keys(projects).length);
  // console.log(Object.keys(projects));
  // console.log(Object.values(projects));
  // console.log(...Object.keys(projects));
  // console.log(...Object.values(projects));
  // console.log([...Object.keys(projects)][0]);
  // console.log([...Object.values(projects)][0]);
  // let temp = [...Object.values(projects)][0];
  // console.log("TEMP TESTING");
  // console.log(temp);
  // console.log(typeof(temp));
  // console.log(Object.entries(temp));

  if(Object.keys(projects).length !== 0) {
    console.log("object(s) to load detected");
    for (let i = 0; i < Object.keys(projects).length; i++) {
      console.log([...Object.keys(projects)][i]);
      let entries = Object.entries([...Object.values(projects)][i]);
      let iterable = [];
      let holderPair = {};
      for (const [key, value] of entries) {
        holderPair[key] = value;
        iterable.push(holderPair[key]);
      }
      console.log(...iterable);

      projects[[...Object.keys(projects)][i]] = new Project(...iterable);
      let newProject = projects[`${[...Object.keys(projects)][i]}`];

      if(Object.keys(projects[[...Object.keys(projects)][i]].getListOfTodos()).length > 0) {
        console.log(newProject);
        let todos = newProject.getListOfTodos();
        console.log("TODO Data type:");
        console.log(todos);
        for (let j = 0; j < Object.keys(todos).length; j++) {
          [...Object.values(projects)][i].loadTaskStorage([...Object.values(todos)][j]);
        }
      }
      let docNewProject = projectItemAppender(newProject.getId(), newProject.getName(), newProject.getCreationDate());

      const listContainer = document.querySelector('.project-list-view');
      listContainer.appendChild(docNewProject);

    }

    document.querySelector('.project-list-view').querySelector(':first-child').classList.add('active-project');

    // console.log("RESULTS:")
    // console.log(projects);
    // console.log("DETAILS:")
    // console.log(Object.keys(projects).length);
    // console.log(Object.keys(projects));
    // console.log(Object.values(projects));
    // console.log(...Object.keys(projects));
    // console.log(...Object.values(projects));
    // console.log([...Object.keys(projects)][0]);
    // console.log([...Object.values(projects)][0]);

  }

  return projects;
}