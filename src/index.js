import "./styles.css";
import "./views/listModule.js";
import "./contollers/localStorage";
import "./views/formModule";
import { loadProjectTodos } from "./views/listModule.js";
import { loadProjects } from "./contollers/localStorage";

let projects = {};

//localStorage.removeItem("projects");
projects = loadProjects();
export default projects;

if(document.querySelectorAll(".active-project")) {
  let activeElements = document.querySelectorAll(".active-project");
  let projectUuid = [...activeElements].map(element => [...element.classList]).flat()
  .find(className => className.startsWith("project-uuid-")).substring(13);
  console.log(projectUuid);
  loadProjectTodos(projectUuid);
}
