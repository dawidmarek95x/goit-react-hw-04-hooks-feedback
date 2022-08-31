const calcPositivePercent = (total, ...positiveFeedback) => {
  if (isNaN(total) || positiveFeedback.some(el => typeof el !== "number")) {
    return 0;
  }

  const sumOfPositiveValues = positiveFeedback.reduce((prev, el) => prev + el, 0);

  return (
    (total <= 0 || total < sumOfPositiveValues)
    ? 0
    : Math.round((sumOfPositiveValues / total) * 100)
  )
};

export default calcPositivePercent;