import { useState, useEffect } from 'react';

import { BubbleSort } from '../algorithms/BubbleSort';
import { InsertionSort } from '../algorithms/InsertionSort';
import { SelectionSort } from '../algorithms/SelectionSort';
import { CocktailShaker } from '../algorithms/CocktailShaker';

import Chart from './generator/Chart';

const Visualizer = ({ globalArray, sortingSpeed, hasStarted }) => {
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
  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  // array state
  // {value: number, color: hex}
  const [array, setArray] = useState([]);

  // * EVENT HANDLERS
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };
  const handleSort = async () => {
    console.log(chartIndex);
    console.log(algorithm);
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
    }
  };

  // GENERATE A RANDOM ARRAY UPON LOADING
  useEffect(() => {
    if (hasStarted) {
      handleSort();
      return;
    }
    console.log('visualizer: useeffect ran');
    setArray(JSON.parse(JSON.stringify(globalArray)));
  }, [globalArray, hasStarted]);

  return (
    <div className='flex flex-col gap-4 p-4 bg-slate-800'>
      {/* ALGORITHM DROP DOWN */}
      <div className='flex items-center gap-4'>
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

      <Chart array={array} />
    </div>
  );
};

export default Visualizer;
