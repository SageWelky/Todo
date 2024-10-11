import "./styles.css";
import "./views/listModule.js";
import "./contollers/localStorage";
import "./views/formModule";
import { loadProjects } from "./contollers/localStorage";

let projects = loadProjects();
//renderProjects(projects);

export default projects;