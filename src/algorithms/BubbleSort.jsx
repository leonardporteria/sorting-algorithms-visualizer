import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const BubbleSort = async (arr, sortingSpeed, setArray) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      await delayInMilliseconds(sortingSpeed);
      if (arr[j].value > arr[j + 1].value) {
        arr[j + 1].color = '#d0312d';
        arr[j].color = '#ffffff';

        let temp = arr[j].value;
        arr[j].value = arr[j + 1].value;
        arr[j + 1].value = temp;

        setArray([...arr]);
      }
      arr[j + 1].color = '#d0312d';
      arr[j].color = '#ffffff';
    }
  }
  sortingFinishedAnimation(arr, sortingSpeed, setArray);
};
