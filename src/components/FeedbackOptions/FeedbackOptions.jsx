import PropTypes from 'prop-types';
import { Button, LastButton } from './Feedback.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
      {options.map((n, idx, arr) => {
        return (idx !== arr.length - 1)
          ? (n === "good")
            ? <Button key={n} onClick={onLeaveFeedback} positive>{n}</Button>
            : <Button key={n} onClick={onLeaveFeedback}>{n}</Button>
          : <LastButton onClick={onLeaveFeedback} key={n}>{n}</LastButton>
      })}
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;