//Helps to allow use of spread operator for task and project objects
export function makeIterable(obj) {
  let entries = Object.entries(obj);
  let iterable = [];
  let holderPair = {};
  for (const [key, value] of entries) {
    holderPair[key] = value;
    iterable.push(holderPair[key]);
  }
  return iterable;
}

export function refreshListViews() {
  document.querySelector('.todo-list-view').replaceChildren();
  if(document.querySelectorAll(".active-project").length > 0) {
    let activeElements = document.querySelectorAll(".active-project");
    let projectUuid = [...activeElements].map(element => [...element.classList]).flat()
    .find(className => className.startsWith("project-uuid-")).substring(13);
    loadProjectTodos(projectUuid);
  }
}