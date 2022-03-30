import { setStorage } from './store-list.js';

export default class Delete {
  // Delete one task
  static deleteOne(arr, index) {
    arr.splice(index, 1);
    arr.forEach((element, i) => {
      element.index = i + 1;
    });
    return arr;
  }

  // Delete all completed tasks
  static deleteAll(arr) {
    arr = arr.filter((element) => element.completed !== 'true');
    arr.forEach((element, i) => {
      element.index = i + 1;
    });
    setStorage(arr);
    return arr;
  }
}
