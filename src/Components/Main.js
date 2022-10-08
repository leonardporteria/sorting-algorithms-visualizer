import { useEffect } from 'react';
import Bar from './ArrayGenerator/Bar';

const Main = ({ arrayLength, sortingSpeed, hasStarted }) => {
  let array = [];

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const handleArrayRandomizer = () => {
    for (let i = 0; i < arrayLength; i++) {
      array.push(randomIntFromInterval(5, 100));
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
      <div className='flex gap-1 w-screen h-96 bg-slate-500'>
        {array.map((bar, index) => (
          <Bar key={index} height={bar} width={1} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
