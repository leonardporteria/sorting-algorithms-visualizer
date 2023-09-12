import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const BubbleSort = async (array, sortingSpeed, setArray) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      await delayInMilliseconds(sortingSpeed);
      array[j + 1].color = '#d0312d';
      array[j].color = '#ffffff';
      if (array[j].value >= array[j + 1].value) {
        let temp = array[j].value;
        array[j].value = array[j + 1].value;
        array[j + 1].value = temp;

        setArray([...array]);
      }
    }
  }
  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
