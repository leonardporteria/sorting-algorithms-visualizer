import Bar from './Bar';

const Chart = ({ array, arrayLength }) => {
  // algo run

  return (
    <div className='flex gap-1  items-end m-auto p-1 h-72 w-11/12 border-2 border-stone-900 bg-slate-500 '>
      {array.map((bar, index) => (
        <Bar key={index} height={bar} width={100 / arrayLength} index={index} />
      ))}
    </div>
  );
};

export default Chart;
