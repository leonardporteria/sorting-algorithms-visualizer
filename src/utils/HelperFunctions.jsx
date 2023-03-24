const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const delayInMilliseconds = (sortingSpeed = 5) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), Math.abs(parseInt(sortingSpeed) - 10) * 10)
  );
};

const sortingFinishedAnimation = async (array, sortingSpeed, setArray) => {
  for (let i = 0; i < array.length; i++) {
    await delayInMilliseconds(sortingSpeed);
    array[i].color = '#07da63';
    setArray([...array]);
  }
};

export { randomIntFromInterval, delayInMilliseconds, sortingFinishedAnimation };
