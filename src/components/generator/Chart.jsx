import { useState, useEffect } from 'react';

import Bar from './Bar';

const Chart = ({ array }) => {
  const [newArr, setNewArr] = useState([...array]);

  useEffect(() => {
    setNewArr([...array]);
  }, [array]);

  return (
    <div className='flex gap-1  items-end m-auto p-1 h-72 w-11/12 bg-slate-800 '>
      {newArr.map((bar, index) => (
        <Bar
          key={index}
          height={bar.value}
          width={100 / array.length}
          color={bar.color}
        />
      ))}
    </div>
  );
};

export default Chart;
