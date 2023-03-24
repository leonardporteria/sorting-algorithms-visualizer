import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

const mergeSortMain = async (array, start, end, setArray) => {
  let length = array.length;
  // BASE CASE
  if (length <= 1) return;

  let middle = Math.ceil(length / 2);
  let leftArray = new Array(middle);
  let rightArray = new Array(length - middle);

  let i = 0; //left array
  let j = 0; //right array

  for (; i < length; i++) {
    delayInMilliseconds();
    if (i < middle) {
      leftArray[i] = array[i];
    } else {
      rightArray[j] = array[i];
      j++;
    }
  }

  let mid = start + Math.ceil((end - start) / 2);

  await mergeSortMain(leftArray, start, mid);
  await mergeSortMain(rightArray, mid, end);
  await merge(leftArray, rightArray, array, start, end, setArray);
};

const merge = async (leftArray, rightArray, array, low, high) => {
  // VARIABLES
  let leftSize = Math.ceil(array.length / 2);
  let rightSize = array.length - leftSize;

  let i = 0;
  let l = 0;
  let r = 0;
  let a = low + i;

  // SORT LEFT AND RIGHT ARRAYS INDIVIDUALLY
  while (l < leftSize && r < rightSize) {
    delayInMilliseconds();
    if (leftArray[l].value < rightArray[r].value) {
      array[i].value = leftArray[l].value;
      i++;
      l++;
      a++;
    } else if (!(leftArray[l].value < rightArray[r].value)) {
      array[i].value = rightArray[r].value;
      i++;
      r++;
      a++;
    }
  }
  // MERGE LEFT ARRAY
  while (l < leftSize) {
    delayInMilliseconds();
    array[i].value = leftArray[l].value;
    i++;
    l++;
    a++;
  }
  // MERGE RIGHT ARRAY
  while (r < rightSize) {
    delayInMilliseconds();
    array[i].value = rightArray[r].value;
    i++;
    r++;
    a++;
  }
};

export const MergeSort = async (array, sortingSpeed, setArray) => {
  const sorted = await mergeSortMain(array, 0, array.length);
  sortingFinishedAnimation(array, sortingSpeed, setArray);
  console.log(sorted);
};
