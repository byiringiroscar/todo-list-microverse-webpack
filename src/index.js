import './style.css';
import DoTask from './task.js';
import './delete.png';
import './action.png';
import './refresh.png';

const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');
const refreshBtn = document.querySelector('.refresh');

// class

const task = new DoTask();
const updateData = () => {
  let html = '';
  for (let i = 0; i < task.tasks.length; i += 1) {
    if (task.tasks[i].completed === false) {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${task.tasks[i].index}">
              <h5 class="descr">${task.tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="">
          <input type="text" class="item-input-edit" value="${task.tasks[i].description}" id="${task.tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${task.tasks[i].index}">
      </div>
  </div>`;
    } else {
      html += `<div class="item">
      <div class="main-item">
          <div class="item-detail">
              <input type="checkbox" class="item-check" id="${task.tasks[i].index}" checked>
              <h5 class="descr strike-through">${task.tasks[i].description}</h5>
          </div>
          <img src="./action.png"  alt="" class="dot" disabled>
      </div>
      <div class="main-edit">
          <input type="checkbox" class="checkbox-edit" id="${task.tasks[i].index}" checked>
          <input type="text" class="item-input-edit" value="${task.tasks[i].description}" id="${task.tasks[i].index}">
          <img src="./delete.png" alt="" class="delete-item" id="${task.tasks[i].index}">
      </div>
  </div>`;
    }
  }
  listContainer.innerHTML = html;
  listContainer.classList.add('text-gray');
  const allData = document.querySelectorAll('.item-check');
  const descriptionAll = document.querySelectorAll('.descr');
  for (let j = 0; j < allData.length; j += 1) {
    allData[j].addEventListener('change', function () {
      if (allData[j].checked) {
        descriptionAll[j].classList.add('strike-through');
        const btnId = parseInt(this.id, 10);
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = true;
        const updateArray = JSON.stringify(myArray);
        task.updateComplete(updateArray);
      } else {
        descriptionAll[j].classList.remove('strike-through');
        const btnId = parseInt(this.id, 10);
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = false;
        const updateArray = JSON.stringify(myArray);
        task.updateComplete(updateArray);
      }
    });
  }
  const allAction = document.querySelectorAll('.dot');
  const mainEdit = document.querySelectorAll('.main-edit');
  const mainItem = document.querySelectorAll('.main-item');
  allAction.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      mainEdit[index].classList.add('active');
      mainItem[index].classList.add('no-active');
    });
  });
  const itemInputEdit = document.querySelectorAll('.item-input-edit');
  itemInputEdit.forEach((ele) => {
    ele.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        task.editLocal(parseInt(event.target.id, 10), event.target.value);
        updateData();
      }
    });
  });
  const deleteBtn = document.querySelectorAll('.delete-item');
  deleteBtn.forEach((ele) => {
    ele.addEventListener('click', (event) => {
      const singleElementDelete = [];
      singleElementDelete.push(parseInt(event.target.id, 10));
      task.removeData(singleElementDelete);
      updateData();
    });
  });
};
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const myNewArray = task.tasks;
  const newIndexToRemove = [];
  for (let k = 0; k < myNewArray.length; k += 1) {
    if (myNewArray[k].completed === true) {
      const indexRem = parseInt(myNewArray[k].index, 10);
      newIndexToRemove.push(indexRem);
    }
  }
  task.removeData(newIndexToRemove);
  updateData();
});
const addData = (data) => {
  task.addData(data);
  updateData();
};

inputDo.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addData(event.target.value);
    event.target.value = '';
  }
});
refreshBtn.addEventListener('click', () => {
  updateData();
});

window.onload = () => updateData();