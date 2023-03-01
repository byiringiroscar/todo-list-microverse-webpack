/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// import './index.css';

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXBzdG9uZV9taWNyb3ZlcnNlX29uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWNvbnRhaW5lcicpO1xuXG5jb25zdCBmaW5hbERhdGEgPSBbXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogJ2hlbGxvJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiAwLFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246ICd0aW1lIGlzIHVwJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIGluZGV4OiAxLFxuICB9LFxuICB7XG4gICAgZGVzY3JpcHRpb246ICdob3cgaXMgaXQnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IDIsXG4gIH0sXG5dO1xuY29uc3QgdXBkYXRlRGF0YSA9ICgpID0+IHtcbiAgbGV0IGh0bWwgPSAnJztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbERhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoZmluYWxEYXRhW2ldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWRldGFpbFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXRlbS1jaGVja1wiPlxuICAgICAgICAgICAgPGg1PiR7ZmluYWxEYXRhW2ldLmRlc2NyaXB0aW9ufTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIHNyYz1cIi4vYWN0aW9uLnBuZ1wiIGlkPVwiJHtpfVwiIGFsdD1cIlwiIGNsYXNzPVwiZG90XCI+XG4gICAgPC9kaXY+YDtcbiAgICB9XG4gIH1cbiAgbGlzdENvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtZ3JheScpO1xufTtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHVwZGF0ZURhdGEoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=