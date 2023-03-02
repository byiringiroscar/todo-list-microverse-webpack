// import './style.css';

const listContainer = document.querySelector('.list-container');
const inputDo = document.getElementById('todo-input');

// class

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

  removeData(index) {
    const data = this.tasks;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].index === index) {
        data.splice(i, 1);
        localStorage.setItem('toDoList', JSON.stringify(data));
      }
    }
    this.updateLocal();
  }

  updateLocal() {
    localStorage.setItem('toDoList', JSON.stringify(this.tasks));
  }
}

const task = new DoTask();
const updateData = () => {
  let html = '';
  for (let i = 0; i < task.tasks.length; i += 1) {
    if (task.tasks[i].completed === false) {
      html += `<div class="item">
        <div class="item-detail">
            <input type="checkbox" class="item-check" id="${task.tasks[i].index}">
            <h5>${task.tasks[i].description}</h5>
        </div>
        <img src="./action.png"  alt="" class="dot">
    </div>`;
    }
  }
  listContainer.innerHTML = html;
  listContainer.classList.add('text-gray');
  const allData = document.querySelectorAll('.item-check');
  for (let j = 0; j < allData.length; j += 1) {
    allData[j].addEventListener('change', function () {
      if (allData[j].checked) {
        const btnId = parseInt(this.id);
        // const storedArray = task.tasks;
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = true;
        const updateArray = JSON.stringify(myArray);
        localStorage.setItem('toDoList', updateArray);
      } else {
        const btnId = parseInt(this.id);
        const myArray = task.tasks;
        const myObject = myArray.find((obj) => obj.index === btnId);
        myObject.completed = false;
        const updateArray = JSON.stringify(myArray);
        localStorage.setItem('toDoList', updateArray);
      }
    });
  }
};
const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const NewStoredData = localStorage.getItem('toDoList');
  const myNewArray = JSON.parse(NewStoredData);
  for (let k = 0; k < myNewArray.length; k += 1) {
    if (myNewArray[k].completed) {
      const indexRem = parseInt(myNewArray[k].index);
      task.removeData(indexRem);
    }
  }
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

window.onload = () => updateData();
