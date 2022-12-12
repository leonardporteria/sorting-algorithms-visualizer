import { useEffect } from 'react';

import Chart from './generator/Chart';

const Main = ({
  algorithm,
  array,
  arrayLength,
  onLengthChange,
  sortingSpeed,
  hasStarted,
}) => {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleArrayRandomizer = () => {
    const array = [];
    for (let i = 0; i < arrayLength; i++) {
      array.push(randomIntFromInterval(5, 250));
    }
    onLengthChange(array);
  };

  useEffect(() => {
    handleArrayRandomizer();
  }, [arrayLength]);

  return (
    <div>
      <div className='flex justify-evenly'>
        <h1>Array Lenght: {arrayLength}</h1>
        <h1>Sorting Speed: {sortingSpeed}</h1>
        <h1>Started? {`${hasStarted}`}</h1>
      </div>

      <Chart array={array} arrayLength={arrayLength} />
    </div>
  );
};

export default Main;
