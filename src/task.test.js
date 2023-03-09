import DoTask from './task.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-localstorage-mock';

beforeEach(() => {
  localStorage.clear();
  jest.clearAllMocks();
  localStorage.setItem.mockClear();
});

describe('Add and remove Task', () => {
  const newTask = new DoTask();
  newTask.addData('google is my dream');
  it('google is my dream was added to list', () => {
    expect(newTask.tasks[0].description).toBe('google is my dream');
  });

  // delete test
});