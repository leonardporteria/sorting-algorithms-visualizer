import Bar from './Bar';

const Chart = ({ array, arrayLength }) => {
  return (
    <div className='flex gap-1  items-end m-auto p-1 h-72 w-11/12 bg-slate-800 '>
      {array.map((bar, index) => (
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
