const Bar = ({ height, width }) => {
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: 'turquoise',
      }}
    />
  );
};

export default Bar;
