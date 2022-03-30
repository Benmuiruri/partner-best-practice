import { setStorage } from './store-list.js';

export default (arr) => {
  // Update tasks local storage based on checkbox status
  arr.forEach((element, i) => {
    if (document.getElementById(i).checked) {
      element.completed = 'true';
      document.getElementById(`item${i}`).style.textDecoration = 'line-through';
    } else {
      element.completed = 'false';
      document.getElementById(`item${i}`).style.textDecoration = 'none';
    }
  });
  setStorage(arr);
};
