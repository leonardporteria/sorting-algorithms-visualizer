import { useState, useEffect } from 'react';

import Chart from './generator/Chart';

const Visualizer = ({ globalArray }) => {
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
  const [array, setArray] = useState([...globalArray]);

  // * EVENT HANDLERS
  const handleAlgorithmChange = (event) => {
    setAlgorithm(event.target.value);
  };

  // GENERATE A RANDOM ARRAY UPON LOADING
  useEffect(() => {
    console.log('visualizer: useeffect ran');
    setArray(globalArray);
  }, [globalArray]);

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
      </div>

      <Chart array={array} />
    </div>
  );
};

export default Visualizer;
