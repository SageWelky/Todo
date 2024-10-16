import "./styles.css";
import "./views/listModule.js";
import "./contollers/localStorage";
import "./views/formModule";
import { loadProjectTodos } from "./views/listModule.js";
import { loadProjects } from "./contollers/localStorage";
import { refreshListViews } from "./helpers/formatHelper";

//localStorage.removeItem("projects");

let projects = {};
projects = loadProjects();
export default projects;
refreshListViews();