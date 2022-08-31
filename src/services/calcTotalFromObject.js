const calcTotalFromObject = (state) => {
  return Object.values(state).reduce((prev, el) => prev + el, 0);
};

export default calcTotalFromObject;