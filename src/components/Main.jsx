import { useState, useEffect } from 'react';

import { BubbleSort } from '../algorithms/BubbleSort';
import { CocktailShaker } from '../algorithms/CocktailShaker';
import { InsertionSort } from '../algorithms/InsertionSort';
import { SelectionSort } from '../algorithms/SelectionSort';
import { MergeSort } from '../algorithms/MergeSort';

import { randomIntFromInterval } from '../utils/HelperFunctions';

import Visualizer from './Visualizer';

const Main = () => {
  const [chartCount, setChartCount] = useState(1);
  const incrementChartCount = () => {
    setChartCount((chartCount) => chartCount + 1);
  };
  const decrementChartCount = () => {
    if (chartCount <= 1) return;
    setChartCount((chartCount) => chartCount - 1);
  };

  // * util states
  const [arrayLength, setArrayLength] = useState(125);
  const [sortingSpeed, setSortingSpeed] = useState(5);
  const [hasStarted, setHasStarted] = useState(false);

  // * array states
  // {value: number, color: hex}
  const [globalArray, setGlobalArray] = useState([]);

  // * EVENT HANDLERS
  const handleArrayLengthChange = (event) => {
    setArrayLength(parseInt(event.target.value));
    handleGenerateArray();
  };
  const handleSpeedChange = (event) => {
    setSortingSpeed(parseInt(event.target.value));
  };
  const handleGenerateArray = () => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push({ value: randomIntFromInterval(5, 250), color: '#ffffff' });
    }
    setGlobalArray(array);
  };

  const handleStart = () => {
    setHasStarted(!hasStarted);
  };

  // GENERATE A RANDOM ARRAY UPON LOADING
  useEffect(() => {
    console.log('main: useeffect ran');
    handleGenerateArray();
  }, [arrayLength]);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-around'>
        {/* // ? ARRAY LENGHT SLIDER */}
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
        {/* // ? SORTING SPEED SLIDER */}
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
        {/* // ? GENERATE NEW ARRAY */}
        <div className='flex items-center justify-center'>
          <button
            className='w-full bg-gray-200 text-gray-800  p-4 text-md'
            onClick={handleGenerateArray}
          >
            Generate New Array
          </button>
        </div>
        {/* // ? START */}
        <div className='flex items-center justify-center'>
          <button
            className='w-full bg-gray-200 text-gray-800  p-4 text-md'
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>

      {/* // ? CHARTS */}
      {chartCount > 0 &&
        Array.from({ length: chartCount }).map((_, index) => (
          <Visualizer
            key={index}
            globalArray={globalArray}
            sortingSpeed={sortingSpeed}
            hasStarted={hasStarted}
          />
        ))}

      <div>
        <div onClick={incrementChartCount}>
          <h1>Add new Chart</h1>
        </div>
        <div onClick={decrementChartCount}>
          <h1>Remove one Chart</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
