import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const InsertionSort = async (array, sortingSpeed, setArray) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i].value;
    let j = i - 1;
    while (j >= 0 && current < array[j].value) {
      await delayInMilliseconds(sortingSpeed);
      array[j].color = '#d0312d';
      array[j + 1].color = '#ffffff';

      array[j + 1].value = array[j].value;

      setArray([...array]);
      j--;
    }
    array[j + 1].value = current;
    setArray([...array]);
  }

  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
