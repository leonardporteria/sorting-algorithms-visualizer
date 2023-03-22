import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

export const CocktailShaker = async (array, sortingSpeed, setArray) => {
  for (let a = 0; a < array.length; a++) {
    for (let i = a; i < array.length - a - 1; i++) {
      await delayInMilliseconds(sortingSpeed);
      if (array[i].value > array[i + 1].value) {
        array[i + 1].color = '#d0312d';
        array[i].color = '#ffffff';

        let temp = array[i].value;
        array[i].value = array[i + 1].value;
        array[i + 1].value = temp;

        setArray([...array]);
      } else {
        array[i + 1].color = '#d0312d';
        array[i].color = '#ffffff';
      }

      array[i + 1].color = '#d0312d';
      array[i].color = '#ffffff';
    }

    for (let j = array.length - a - 1; j > a; j--) {
      await delayInMilliseconds(sortingSpeed);
      if (array[j - 1].value > array[j].value) {
        array[j - 1].color = '#d0312d';
        array[j].color = '#ffffff';

        let temp = array[j].value;
        array[j].value = array[j - 1].value;
        array[j - 1].value = temp;

        setArray([...array]);
      } else {
        array[j - 1].color = '#d0312d';
        array[j].color = '#ffffff';
      }

      array[j - 1].color = '#d0312d';
      array[j].color = '#ffffff';
    }
  }
  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
