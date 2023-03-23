import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const CocktailShaker = async (array, sortingSpeed, setArray) => {
  for (let a = 0; a < array.length; a++) {
    for (let i = a; i < array.length - a - 1; i++) {
      await delayInMilliseconds(sortingSpeed);
      array[i + 1].color = '#d0312d';
      array[i].color = '#ffffff';
      if (array[i].value > array[i + 1].value) {
        let temp = array[i].value;
        array[i].value = array[i + 1].value;
        array[i + 1].value = temp;

        setArray([...array]);
      }
    }

    for (let j = array.length - a - 2; j > a; j--) {
      await delayInMilliseconds(sortingSpeed);
      array[j - 1].color = '#d0312d';
      array[j].color = '#ffffff';
      if (array[j - 1].value > array[j].value) {
        let temp = array[j].value;
        array[j].value = array[j - 1].value;
        array[j - 1].value = temp;

        setArray([...array]);
      }
    }
  }
  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
