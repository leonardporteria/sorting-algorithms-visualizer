import Bar from './Bar';

const Chart = ({ array, arrayLength }) => {
  // algo run

  return (
    <div className='flex gap-1  items-end m-auto p-1 h-72 w-11/12 bg-slate-800 '>
      {array.map((bar, index) => (
        <Bar key={index} height={bar} width={100 / arrayLength} index={index} />
      ))}
    </div>
  );
};

export default Chart;
