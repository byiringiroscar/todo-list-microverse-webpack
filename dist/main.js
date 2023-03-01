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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5QkFBeUI7QUFDM0M7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtbWljcm92ZXJzZS13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCAnLi9pbmRleC5jc3MnO1xuXG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtY29udGFpbmVyJyk7XG5cbmNvbnN0IGZpbmFsRGF0YSA9IFtcbiAge1xuICAgIGRlc2NyaXB0aW9uOiAnaGVsbG8nLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IDAsXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogJ3RpbWUgaXMgdXAnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgaW5kZXg6IDEsXG4gIH0sXG4gIHtcbiAgICBkZXNjcmlwdGlvbjogJ2hvdyBpcyBpdCcsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICBpbmRleDogMixcbiAgfSxcbl07XG5jb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICBsZXQgaHRtbCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbmFsRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChmaW5hbERhdGFbaV0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tZGV0YWlsXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpdGVtLWNoZWNrXCI+XG4gICAgICAgICAgICA8aDU+JHtmaW5hbERhdGFbaV0uZGVzY3JpcHRpb259PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3JjPVwiLi9hY3Rpb24ucG5nXCIgaWQ9XCIke2l9XCIgYWx0PVwiXCIgY2xhc3M9XCJkb3RcIj5cbiAgICA8L2Rpdj5gO1xuICAgIH1cbiAgfVxuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9IGh0bWw7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1ncmF5Jyk7XG59O1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4gdXBkYXRlRGF0YSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==