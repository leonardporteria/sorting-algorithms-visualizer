import { useState, useCallback } from 'react';

import Main from './Main';

const Navbar = () => {
  const algorithmOptions = [
    { label: 'Bubble Sort', value: 'Bubble Sort' },
    { label: 'Merge Sort', value: 'Merge Sort' },
    { label: 'Insertion Sort', value: 'Insertion Sort' },
    { label: 'Selection Sort', value: 'Selection Sort' },
    { label: 'Quick Sort [Lomuto]', value: 'Quick Sort [Lomuto]' },
    { label: 'Quick Sort [Hoare]', value: 'Quick Sort [Hoare]' },
    { label: 'Heap Sort', value: 'Heap Sort' },
    { label: 'Cocktail Shaker', value: 'Cocktail Shaker' },
    { label: 'Radix Sort', value: 'Radix Sort' },
    { label: 'Bogo Sort', value: 'Bogo Sort' },
  ];

  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [arrayLength, setArrayLength] = useState(125);
  const [sortingSpeed, setSortingSpeed] = useState(5);
  const [hasStarted, setHasStarted] = useState(false);

  const [array, setArray] = useState([]);

  const handleOnLengthChange = useCallback((newArray) => {
    setArray(newArray);
  }, []);

  // handle event changes
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };
  const handleArrayChange = (event) => {
    setArrayLength(parseInt(event.target.value));
  };
  const handleSpeedChange = (event) => {
    setSortingSpeed(parseInt(event.target.value));
  };
  const handleGenerateArray = () => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(Math.floor(Math.random() * (250 - 5 + 1) + 5));
    }
    setArray(array);
  };
  const handleHasStarted = async () => {
    console.log(array);
    bblSort(array);
    setHasStarted(!hasStarted);
    console.log(array);
  };

  const delay = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, sortingSpeed);
    });
  };

  // Creating the bblSort function
  const bblSort = async (arr) => {
    for (let i = 0; i < arr.length; i++) {
      // Last i elements are already in place
      for (let j = 0; j < arr.length - i - 1; j++) {
        await delay();
        // Checking if the item at present iteration
        // is greater than the next iteration
        if (arr[j] > arr[j + 1]) {
          // If the condition is true then swap them
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    // Print the sorted array
    console.log(arr);
  };

  return (
    <>
      <div className='flex flex-col'>
        <h1 className='text-center text-3xl'>Sorting Algorithms Visualizer</h1>
        <div className='flex justify-evenly '>
          {/* ALGORITHM DROP DOWN */}
          <div className='flex flex-col items-center justify-center'>
            <label>Select Sorting Algorithm</label>

            <select
              value={algorithm}
              onChange={handleAlgorithmChange}
              className='cursor-pointer p-4 text-md text-gray-800 bg-gray-200'
            >
              {algorithmOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* ARRAY LENGHT SLIDER */}
          <div className='flex flex-col items-center justify-center'>
            <label>Select Array Lenght</label>
            <input
              type='range'
              min='50'
              max='250'
              step='1'
              value={arrayLength}
              onChange={handleArrayChange}
              className='w-60'
            />
          </div>

          {/* SORTING SPEED SLIDER */}
          <div className='flex flex-col items-center justify-center'>
            <label>Select Sorting Speed</label>
            <input
              type='range'
              min='1'
              max='10'
              step='1'
              value={sortingSpeed}
              onChange={handleSpeedChange}
              className='w-60'
            />
          </div>

          {/* GENERATE NEW ARRAY */}
          <div className='flex items-center justify-center'>
            <button
              className='w-full bg-gray-200 text-gray-800  p-4 text-md'
              onClick={handleGenerateArray}
            >
              Generate New Array
            </button>
          </div>

          {/* START / TERMINATE SORTING */}
          <div className='flex items-center justify-center'>
            <button
              className='w-full bg-gray-200 text-gray-800  p-4 text-md'
              onClick={handleHasStarted}
            >
              Start
            </button>
          </div>
        </div>
      </div>

      <Main
        algorithm={algorithm}
        array={array}
        arrayLength={arrayLength}
        onLengthChange={handleOnLengthChange}
        sortingSpeed={sortingSpeed}
        hasStarted={hasStarted}
      />
    </>
  );
};

export default Navbar;
