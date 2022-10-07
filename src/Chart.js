import { useEffect } from 'react';

const Chart = () => {
  useEffect(() => {
    console.log('use effect ran');
  }, []);

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Chart</h1>
      <div>parent</div>
    </div>
  );
};

export default Chart;
