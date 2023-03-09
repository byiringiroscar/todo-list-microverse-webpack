import DoTask from "./task.js";

require("jest-localstorage-mock"); // eslint-disable-line import/no-unresolved

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();
});

describe("Add and remove Task", () => {
  const newTask = new DoTask();
  newTask.addData("google is my dream");
  it("google is my dream was added to list", () => {
    expect(newTask.tasks[0].description).toBe("google is my dream");
  });

  it("delete data", () => {
    newTask.removeData([0]);
    expect(newTask.tasks.length).toBe(0);
  });
});

describe("Edit, update status and clear", () => {
  const newTask = new DoTask();
  newTask.addData("google is my dream");
  newTask.editLocal(0, "google is my future dream");
  it("google is my dream was added to list and is going to be edited", () => {
    expect(newTask.tasks[0].description).toBe("google is my future dream");
  });
  it("change status complete to true", () => {
    const dataObject = newTask.tasks[0];
    dataObject.completed = true;
    const updateData = JSON.stringify(dataObject);
    newTask.updateComplete(updateData);
    expect(newTask.tasks[0].completed).toBe(true);
  });
  it("change status complete to false", () => {
    const dataObject = newTask.tasks[0];
    dataObject.completed = false;
    const updateData = JSON.stringify(dataObject);
    newTask.updateComplete(updateData);
    expect(newTask.tasks[0].completed).toBe(false);
  });
  it("clear all complete data", () => {
    newTask.addData("day one");
    newTask.addData("day two");
    newTask.addData("day three");
    newTask.removeData([0, 1, 2, 3, 4]);
    expect(newTask.tasks.length).toBe(0);
  });
});
