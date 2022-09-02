import PropTypes from 'prop-types';
import { Stats, StatsItem } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
      <Stats>
        <StatsItem>Good: {good}</StatsItem>
        <StatsItem>Neutral: {neutral}</StatsItem>
        <StatsItem>Bad: {bad}</StatsItem>
        <StatsItem>Total: {total}</StatsItem>
        <StatsItem>Positive feedback: {positivePercentage}%</StatsItem>
      </Stats>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired, 
  neutral: PropTypes.number.isRequired, 
  bad: PropTypes.number.isRequired, 
  total: PropTypes.number.isRequired, 
  positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;