class Task {
  constructor(text) {
    this.text = text;
    this.id = Utils.newGuid();
    this.completed = false;
  }
  editText(text) {
    this.text = text;
  }
  markCompleted(completed) {
      this.completed = completed;
  }
}
