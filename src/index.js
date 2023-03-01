import './style.css';

const listContainer = document.querySelector('.list-container');

const finalData = [
  {
    description: 'hello',
    completed: false,
    index: 0,
  },
  {
    description: 'time is up',
    completed: false,
    index: 1,
  },
  {
    description: 'how is it',
    completed: false,
    index: 2,
  },
];
const updateData = () => {
  let html = '';
  for (let i = 0; i < finalData.length; i += 1) {
    if (finalData[i].completed === false) {
      html += `<div class="item">
        <div class="item-detail">
            <input type="checkbox" class="item-check">
            <h5>${finalData[i].description}</h5>
        </div>
        <img src="./action.png" id="${i}" alt="" class="dot">
    </div>`;
    }
  }
  listContainer.innerHTML = html;
  listContainer.classList.add('text-gray');
};

window.onload = () => updateData();