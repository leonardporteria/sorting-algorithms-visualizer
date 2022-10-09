const Bar = ({ height, width }) => {
  return (
    <div
      style={{
        width: `${width}%`,
        height: `${height}px`,
        backgroundColor: 'turquoise',
      }}
    />
  );
};

export default Bar;
