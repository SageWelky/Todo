class TodoItem {
  #name;
  #id;
  #description;
  #notes;
  #priority;
  #dueDate
  #creationDate;


  //Add creationDate default paramater
  constructor(name, id, description, notes, priority, dueDate, creationDate) {
    this.#name = name;
    this.#id = id;
    this.#description = description;
    this.#notes = notes;
    this.#priority = priority;
    this.#dueDate = dueDate;
    this.#creationDate = creationDate;
  }
  toJSON() {
    return {
      name: this.getName,
      id: this.getId,
      description: this.getDescription,
      notes: this.getNotes,
      priority: this.getPriority,
      dueDate: this.getDueDate,
      creationDate: this.getCreationDate,
    };
  }
  getName() {
    return this.#name;
  }
  getId() {
    return this.#id;
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