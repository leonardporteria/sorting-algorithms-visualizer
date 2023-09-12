import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

const delay = async () => {
  setTimeout(() => {
    console.log('wait');
  }, 3000);
};

const mergeSortHelper = async (array, start, end) => {
  if (start === end) return;

  await delay();

  const middleIdx = Math.floor((start + end) / 2);

  await mergeSortHelper(array, start, middleIdx);
  await mergeSortHelper(array, middleIdx + 1, end);
  await merge(array, start, middleIdx, end);
};

const merge = async (array, start, middleIdx, end) => {
  let i = start;
  let j = middleIdx + 1;
  let k = start;
  const tempArray = array.slice();
  while (i <= middleIdx && j <= end) {
    if (tempArray[i].value <= tempArray[j].value) {
      array[k++] = tempArray[i++];
    } else {
      array[k++] = tempArray[j++];
    }
  }
  while (i <= middleIdx) {
    array[k++] = tempArray[i++];
  }
  while (j <= end) {
    array[k++] = tempArray[j++];
  }
};

export const MergeSort = async (array, sortingSpeed, setArray) => {
  console.log(array);
  await mergeSortHelper(array, 0, array.length - 1);
  setArray([...array]);
  sortingFinishedAnimation(array, sortingSpeed, setArray);
};
