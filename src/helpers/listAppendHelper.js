function todoItemAppender(projectUuid, todoUuid, name, status, description, notes, priority, dueDate, creationDate) {

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
  listItemCreationDate.textContent = "Created: " + creationDate;
  const listItemDueDate = document.createElement('span');
  listItemDueDate.textContent = "Due: " + dueDate;

  const listItemDropDown = document.createElement('div');
  listItemDropDown.classList.add('list-item-drop-down');
  listItemDropDown.classList.add('drop-down-section');
  listItemDropDown.stlye.display = "none";

  const listItemDescription = document.createElement('p');
  listItemDescription.textContent = description;
  listItemDescription.classList.add('drop-down-section');
  const listItemNotes = document.createElement('p');
  listItemNotes.textContent = notes;
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

  function handleDropDown() {
    if(e.currentTarget.children(".list-item-drop-down").style.display === "none"
    && !e.target.hasClass("checkbox-element")
    && !e.target.hasClass("drop-down-section")) {

      e.currentTarget.children(".list-item-drop-down").style.display = "flex";

    } else if(e.currentTarget.children(".list-item-drop-down").style.display === "flex"
    && !e.target.hasClass("checkbox-element")
    && !e.target.hasClass("drop-down-section")) {

      e.currentTarget.children(".list-item-drop-down").style.display = "none";

    }
  }

  listItemContainer.addEventListener('click', handleDropDown());

  return listItemContainer;
}









function projectItemAppender(name, id, status, description, notes, priority, dueDate, creationDate) {



  const listItemContainer = document.createElement('li');
  listItemContainer.classList.add('list-item-container');

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
  listItemCreationDate.textContent = "Created: " + creationDate;
  const listItemDueDate = document.createElement('span');
  listItemDueDate.textContent = "Due: " + dueDate;

  const listItemDropDown = document.createElement('div');
  listItemDropDown.classList.add('list-item-drop-down');
  listItemDropDown.classList.add('drop-down-section');
  listItemDropDown.stlye.display = "none";

  const listItemDescription = document.createElement('p');
  listItemDescription.textContent = description;
  listItemDescription.classList.add('drop-down-section');
  const listItemNotes = document.createElement('p');
  listItemNotes.textContent = notes;
  listItemNotes.classList.add('drop-down-section');

  listContainer.appendChild(listItemContainer);

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

  listItemContainer.addEventListener('click', e => {
    if(e.currentTarget.children(".list-item-drop-down").style.display === "none"
    && !e.target.hasClass("checkbox-element")
    && !e.target.hasClass("drop-down-section")) {

      e.currentTarget.children(".list-item-drop-down").style.display = "flex";

    } else if(e.currentTarget.children(".list-item-drop-down").style.display === "flex"
    && !e.target.hasClass("checkbox-element")
    && !e.target.hasClass("drop-down-section")) {

      e.currentTarget.children(".list-item-drop-down").style.display = "none";

    }
  });
  return listItemContainer;
}

export { todoItemAppender, projectItemAppender };