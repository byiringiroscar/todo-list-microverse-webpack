class DoTask {
  constructor(description) {
    this.tasks = JSON.parse(localStorage.getItem('toDoList')) || [];
    this.index = null;
    this.completed = false;
    this.description = description;
  }

  addData(description) {
    this.tasks.push({
      index: this.tasks.length,
      description,
      completed: false,
    });
    this.updateLocal();
  }

  updateComplete(updateArray) {
    localStorage.setItem('toDoList', updateArray);
    this.updateLocal();
  }

  removeData(indexRem) {
    for (let i = this.tasks.length - 1; i >= 0; i -= 1) {
      const currentObject = this.tasks[i];
      if (indexRem.includes(currentObject.index)) {
        this.tasks.splice(i, 1);
      }
    }
    for (let s = 0; s < this.tasks.length; s += 1) {
      this.tasks[s].index = s;
    }
    this.updateLocal();
  }

  updateLocal() {
    localStorage.setItem('toDoList', JSON.stringify(this.tasks));
  }

  editLocal(index, description) {
    const objects = this.tasks;
    const objectToUpdate = objects.find((obj) => obj.index === index);
    objectToUpdate.description = description;
    this.updateComplete(objects);
  }
}

export default DoTask;