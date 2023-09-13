import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const SelectionSort = async (array, sortingSpeed, setArray) => {
  for (let i = 0; i < array.length; i++) {
    let smallest = array[i].value;
    let index = i;
    for (let j = i; j < array.length; j++) {
      if (smallest >= array[j].value) {
        await delayInMilliseconds(sortingSpeed);
        smallest = array[j].value;

        array[index].color = '#ffffff';
        setArray([...array]);

        index = j;

        array[index].color = '#d0312d';
        setArray([...array]);
      }
    }

    array[index].color = '#ffffff';
    let temp = array[i].value;
    array[i].value = smallest;
    array[index].value = temp;

    setArray([...array]);
  }
  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
