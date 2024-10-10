class TodoItem {
  #name;
  #id;
  #status;
  #description;
  #notes;
  #priority;
  #dueDate
  #creationDate;

  constructor(name, id, status, description, notes, priority, dueDate, creationDate) {
    this.#name = name;
    this.#id = id;
    this.#status = status;
    this.#description = description;
    this.#notes = notes;
    this.#priority = priority;
    this.#dueDate = dueDate;
    this.#creationDate = creationDate;
  }

  toJSON() {
    return {
      name: this.getName(),
      id: this.getId(),
      status: this.getStatus(),
      description: this.getDescription(),
      notes: this.getNotes(),
      priority: this.getPriority(),
      dueDate: this.getDueDate(),
      creationDate: this.getCreationDate(),
    };
  }

  getName() {
    return this.#name;
  }
  getId() {
    return this.#id;
  }
  getStatus() {
    return this.#status;
  }
  getDescription() {
    return this.#description;
  }
  getNotes() {
    return this.#notes;
  }
  getPriority() {
    return this.#priority;
  }
  getDueDate() {
    return this.#dueDate;
  }
  getCreationDate() {
    return this.#creationDate;
  }
  setName(newName) {
    this.#name = newName;
  }
  setStatus(newStatus) {
    this.#status = newStatus;
  }
  setDescription(newDescription) {
    this.#description = newDescription;
  }
  setNotes(newNotes) {
    this.#notes = newNotes;
  }
  setPriority(newPriority) {
    this.#priority = newPriority;
  }
  setDueDate(newDueDate) {
    this.#dueDate = newDueDate;
  }

}

export default TodoItem;