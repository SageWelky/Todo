import openTodoForm from "../contollers/formHandling";

const listContainer = document.querySelector(".todo-list-view");
listContainer.addEventListener(onclick, e => {
  if (e.parents('.list-item-container') && !e.parents('.list-item-container').classList.contains("active-task")) {
    let activeElements = listContainer.querySelectorAll(".active-task");
    activeElements.forEach( (activeElement) => {
      activeElement.classList.remove("active-task");
    });
    e.parents('.list-item-container').classList.add('active-task');
  }
});

let addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener(onclick, () => {
  openTodoForm();
});

let editTaskButton = document.querySelector(".edit-task-button");
editTaskButton.addEventListener(onclick, () => {
  let activeElement = document.querySelector(".active-task");
  let todoUuid = activeElement.querySelector(".todo-uuid-::startsWith").substring(10);
  let projectUuid = activeElement.querySelector(".project-uuid-::startsWith").substring(13);
  let selectedTodo = JSON.stringify(projects[`${projectUuid}`].getListOfTodos()[`${todoUuid}`]);
  openTodoForm(...JSON.parse(selectedTodo));
});

let deleteTaskButton = document.querySelector(".delete-task-button");
deleteTaskButton.addEventListener(onclick, () => {

  let activeElement = document.querySelector(".active-task")

  let todoUuid = activeElement.querySelector(".todo-uuid-::startsWith").substring(10);
  let projectUuid = activeElement.querySelector(".project-uuid-::startsWith").substring(13);

  let listItemContainer = document.querySelector(`.todo-uuid-${todoUuid}`)

  listItemContainer.removeEventListener('click', handleDropDown());
  $(`.todo-list-view .todo-uuid-${todoUuid}`).remove();
  projects[`${projectUuid}`].removeTodofromList(`${todoUuid}`);

});