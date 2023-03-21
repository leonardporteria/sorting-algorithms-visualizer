const Bar = ({ height, width, color }) => {
  return (
    <div
      style={{
        width: `${width}%`,
        height: `${height}px`,
        backgroundColor: `${color}`,
      }}
    />
  );
};

export default Bar;
