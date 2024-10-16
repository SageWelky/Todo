import { saveProjects } from "../contollers/localStorage";
import projects from "../index";
import Project from "../models/project";
import { format } from "date-fns";
import { handleDropDown } from "./cleanupHelper";

function todoItemAppender(projectUuid, name, status, description, notes, priority, dueDate, todoUuid, creationDate) {

  const listItemContainer = document.createElement('li');
  listItemContainer.classList.add('list-item-container');
  listItemContainer.classList.add(`project-uuid-${projectUuid}`);
  listItemContainer.classList.add(`todo-uuid-${todoUuid}`);

  const listItemForm = document.createElement('form');
  listItemForm.classList.add('list-item-form');
  listItemForm.classList.add('checkbox-element');

  const checkboxContainer = document.createElement('p');
  checkboxContainer.classList.add('checkbox-element');
  const listItemInput = document.createElement('input');
  listItemInput.classList.add('checkbox-element');
  listItemInput.type = "checkbox";
  listItemInput.id = name;
  listItemInput.name = "completion";
  const listItemLabel = document.createElement('label');
  listItemLabel.classList.add('checkbox-element');
  listItemLabel.textContent = name;
  listItemLabel.htmlFor = name;

  const listItemInfoContainer = document.createElement('p');
  listItemInfoContainer.classList.add('list-item-info-container');

  const listItemPriority = document.createElement('p');
  listItemPriority.textContent = "Priority: " + priority;
  const listItemCreationDate = document.createElement('span');
  listItemCreationDate.textContent = "Created: " + `${format(creationDate, "MMM do, yyyy")}`;
  const listItemDueDate = document.createElement('span');
  listItemDueDate.textContent = "Due: " + `${format(dueDate, "MMM do, yyyy")}`;

  const listItemDropDown = document.createElement('div');
  listItemDropDown.classList.add('list-item-drop-down');
  listItemDropDown.classList.add('drop-down-section');
  listItemDropDown.style.display = "none";

  const listItemDescription = document.createElement('p');
  listItemDescription.textContent = description;
  listItemDescription.classList.add('drop-down-section');
  const listItemNotes = document.createElement('ul');
  listItemNotes.innerHTML = notes;
  listItemNotes.classList.add('drop-down-section');

  listItemContainer.appendChild(listItemForm);
  listItemContainer.appendChild(listItemInfoContainer);
  listItemContainer.appendChild(listItemDropDown);

  listItemForm.appendChild(checkboxContainer);
  checkboxContainer.appendChild(listItemInput);
  checkboxContainer.appendChild(listItemLabel);

  listItemInfoContainer.appendChild(listItemPriority);
  listItemInfoContainer.appendChild(listItemCreationDate);
  listItemInfoContainer.appendChild(listItemDueDate);

  listItemDropDown.appendChild(listItemDescription);
  listItemDropDown.appendChild(listItemNotes);

  listItemContainer.addEventListener('click', handleDropDown);

  return listItemContainer;
}

function projectItemAppender(id, name, creationDate) {

  const projectUuid = id;

  const listItemContainer = document.createElement('li');
  listItemContainer.classList.add('list-item-container');
  listItemContainer.classList.add(`project-uuid-${projectUuid}`);

  const listItemForm = document.createElement('form');
  listItemForm.classList.add('list-project-form');

  const listItemLabelInput = document.createElement('input');
  listItemLabelInput.type = "hidden";
  listItemLabelInput.value = name;

  const listItemLabel = document.createElement('p');
  listItemLabel.textContent = name;

  const listItemInfoContainer = document.createElement('p');
  listItemInfoContainer.classList.add('list-project-info-container');

  const listItemCreationDate = document.createElement('span');
  listItemCreationDate.textContent = "Created: " + `${format(creationDate, "MMM do, yyyy")}`;

  listItemContainer.appendChild(listItemForm);
  listItemContainer.appendChild(listItemInfoContainer);

  listItemForm.appendChild(listItemLabelInput);
  listItemForm.appendChild(listItemLabel);

  listItemInfoContainer.appendChild(listItemCreationDate);



  listItemLabel.addEventListener('click', function() {
    this.contentEditable = true;
    this.focus();
  });

  listItemLabel.addEventListener('blur', function() {
    listItemLabel.innerHTML = listItemLabelInput.value;
    this.contentEditable = false;
  });

  listItemLabel.addEventListener('keydown', function(e) {

    if(e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      if(listItemLabel.innerHTML && (listItemLabel.innerHTML.replace(/&nbsp;/gi, ' ').trim() !== "")) {
        listItemLabel.innerHTML = listItemLabel.innerHTML.replace(/&nbsp;/gi, ' ').trim();
        listItemLabelInput.setAttribute("value", this.innerHTML);
        projects[projectUuid].setName(listItemLabelInput.value);
        saveProjects();
        this.blur();
      }
    } else if(e.which === 27) {
      e.preventDefault();
      listItemForm.reset();
      this.blur();
    }
  });

  return listItemContainer;
}

export { todoItemAppender, projectItemAppender };