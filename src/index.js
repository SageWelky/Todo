import "./styles.css";
import "./views/listModule.js";
import "./contollers/localStorage";

let projects = loadProjects();
renderProjects(projects);

export default projects;