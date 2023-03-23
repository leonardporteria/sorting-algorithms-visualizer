import {
  delayInMilliseconds,
  sortingFinishedAnimation,
} from '../utils/HelperFunctions';

const merge = async (left, right) => {
  let sortedArr = []; // the sorted items will go here
  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0].value < right[0].value) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
};

export const MergeSort = async (array, sortingSpeed, setArray) => {
  // Base case
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  // Recursive calls
  let left = await MergeSort(array.slice(0, mid));
  console.log(left);
  let right = await MergeSort(array.slice(mid));
  console.log(right);
  return merge(left, right);
};
