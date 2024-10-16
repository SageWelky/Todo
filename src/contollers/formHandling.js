import { todoItemAppender, projectItemAppender } from "../helpers/listAppendHelper";
import { createNewTodo, createNewProject } from "./itemCreation";
import $ from "jquery";

let taskModal = document.querySelector('.task-modal');

export let editId;
export let editCreationDate;

export function resetEditProps() {
  editId = "";
  editCreationDate = "";
}

function openTodoForm(name = "", status = "", description = "", notes = "", priority = "average", dueDate = "", todoUuid = "", creationDate = "") {

  let taskForm = document.querySelector('#task-form');
  if(taskForm.classList.contains('edit-mode')) {
    editId = todoUuid;
    editCreationDate = creationDate;
    document.querySelector('#task-name').value = name;
    document.querySelector('#task-status').value = status;
    document.querySelector('#task-description').value = description;

    function noteAppender(notes) {
      notes.split("<li>").forEach( function(note) {
        if(note !== "") {
          const newNote = $(`<li>${note}`);
          $('#task-note-list-ul').append(newNote);
          $(this).val("");
          editNotesList(newNote[0]);
        }
      });
    }

    noteAppender(notes);


    document.getElementById(`${priority}`).checked = true;
    document.querySelector('#task-due-date').value = dueDate;
  }

  taskModal.classList.add('open');
};

function editNotesList(listItem) {
  const listItemLabelInput = listItem.querySelector('.modal-note-list-input');
  const listItemLabel = listItem.querySelector('.modal-note-list-text');
  const listItemForm = listItem.querySelector('.modal-note-list-form');

  if (listItemLabel) {
    listItemLabel.addEventListener('click', function () {
      this.contentEditable = true;
      this.focus();
    });

    listItemLabel.addEventListener('blur', function () {
      listItemLabel.innerHTML = listItemLabelInput.value;
      this.contentEditable = false;
    });

    listItemLabel.addEventListener('keydown', function (e) {
      if (e.which === 13 && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        if (
          listItemLabel.innerHTML &&
          listItemLabel.innerHTML.replace(/&nbsp;/gi, ' ').trim() !== ""
        ) {
          listItemLabel.innerHTML = listItemLabel.innerHTML
            .replace(/&nbsp;/gi, ' ')
            .trim();
          listItemLabelInput.setAttribute("value", this.innerHTML);
          this.blur();
        }
      } else if (e.which === 27) {
        e.preventDefault();
        listItemForm.reset();
        this.blur();
      }
    });
  }
}

// Add notes from the form text field to the note list
$(document).ready(function () {
  $('#task-notes').keypress(function (e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault();
      const note = $(this).val();

      const newNote = $(`
        <li>
          <form class="modal-note-list-form">
            <input class="modal-note-list-input" type="hidden" value="${note}">
            <p class="modal-note-list-text">${note}</p>
          </form>
        </li>
      `);

      $('#task-note-list-ul').append(newNote);
      $(this).val("");

      // Call editNotesList with the newly added note element
      editNotesList(newNote[0]);
    }
  });
});


function todoFormSend(projectUuid, name, status, description, notes, priority, dueDate, todoUuid, timeCreated) {

  let newTodo = createNewTodo(projectUuid, name, status, description, notes, priority, dueDate, todoUuid, timeCreated);
  let docNewTodo = todoItemAppender(projectUuid, name, status, description, notes, priority, dueDate, newTodo.getId(), newTodo.getCreationDate());

  let taskForm = document.querySelector('#task-form');
  const listContainer = document.querySelector(".todo-list-view");

  if(!taskForm.classList.contains('edit-mode')){
    listContainer.appendChild(docNewTodo);
  } else {
    let targetTask = document.querySelector('.active-task');
    listContainer.replaceChild(docNewTodo, targetTask);
    taskForm.classList.remove('edit-mode');
    resetEditProps();
  }
}

function projectFormSend(name) {
  let newProject = createNewProject(name);
  let docNewProject = projectItemAppender(newProject.getId(), name, newProject.getCreationDate());

  const listContainer = document.querySelector('.project-list-view');
  listContainer.appendChild(docNewProject);
}

export { openTodoForm, todoFormSend, projectFormSend, editNotesList };