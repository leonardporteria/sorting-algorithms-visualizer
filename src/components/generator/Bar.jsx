const Bar = ({ height, width }) => {
  // pass useref to edit array

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
