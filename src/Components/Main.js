import { useEffect } from 'react';
import Chart from './ArrayGenerator/Chart';

const Main = ({ arrayLength, sortingSpeed, hasStarted }) => {
  let array = [];

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleArrayRandomizer = () => {
    for (let i = 0; i < arrayLength; i++) {
      array.push(randomIntFromInterval(5, 250));
    }
  };

  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div>
      <div className='flex justify-evenly'>
        <h1>Array Lenght: {arrayLength}</h1>
        <h1>Sorting Speed: {sortingSpeed}</h1>
        <h1>Started? {`${hasStarted}`}</h1>
      </div>

      {handleArrayRandomizer()}
      <Chart array={array} arrayLength={arrayLength} />
    </div>
  );
};

export default Main;


// USEREF FOR EDITING ARRAY