class List {
  constructor(name) {
    this.name = name;
    this.id = Utils.newGuid();
    this.tasks = [];
  }
  addTask(text) {
    const newTask = new Task(text);
    this.tasks.push(newTask);
  }
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }
  rename(name) {
    this.name = name;
  }
}
