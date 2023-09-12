import { useState, useEffect } from 'react';

import { BubbleSort } from '../algorithms/BubbleSort';
import { CocktailShaker } from '../algorithms/CocktailShaker';
import { InsertionSort } from '../algorithms/InsertionSort';
import { SelectionSort } from '../algorithms/SelectionSort';
import { MergeSort } from '../algorithms/MergeSort';

import { randomIntFromInterval } from '../utils/HelperFunctions';

import Chart from './generator/Chart';

const Visualizer = () => {
  // algorithm options
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

  // defrault states
  const [algorithm, setAlgorithm] = useState('Merge Sort');
  const [arrayLength, setArrayLength] = useState(125);
  const [sortingSpeed, setSortingSpeed] = useState(5);
  const [hasStarted, setHasStarted] = useState(false);

  // array state
  // {value: number, color: hex}
  const [array, setArray] = useState([]);

  // EVENT HANDLERS
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };
  const handleArrayLengthChange = (event) => {
    setArrayLength(parseInt(event.target.value));
    handleGenerateArray();
  };
  const handleSpeedChange = (event) => {
    setSortingSpeed(parseInt(event.target.value));
  };
  const handleGenerateArray = async () => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push({ value: randomIntFromInterval(5, 250), color: '#ffffff' });
    }
    setArray(array);
  };
  const handleStart = () => {
    setHasStarted(!hasStarted);
    switch (algorithm) {
      case 'Bubble Sort':
        BubbleSort(array, sortingSpeed, setArray);
        break;
      case 'Merge Sort':
        MergeSort(array, sortingSpeed, setArray);
        break;
      case 'Insertion Sort':
        InsertionSort(array, sortingSpeed, setArray);
        break;
      case 'Selection Sort':
        SelectionSort(array, sortingSpeed, setArray);
        break;
      case 'Quick Sort [Lomuto]':
        break;
      case 'Quick Sort [Hoare]':
        break;
      case 'Heap Sort':
        break;
      case 'Cocktail Shaker':
        CocktailShaker(array, sortingSpeed, setArray);
        break;
      case 'Radix Sort':
        break;
      case 'Bogo Sort':
        break;
      default:
        setHasStarted(!hasStarted);
        break;
    }
  };

  // GENERATE A RANDOM ARRAY UPON LOADING
  useEffect(() => {
    handleGenerateArray();
  }, [arrayLength]);

  return (
    <div>
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
            onChange={handleArrayLengthChange}
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
        {/* START */}
        <div className='flex items-center justify-center'>
          <button
            className='w-full bg-gray-200 text-gray-800  p-4 text-md'
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>

      <Chart array={array} />
    </div>
  );
};

export default Visualizer;
