import { useReducer } from 'react';
import calcPositivePercent from 'services/calcPositivePercent';
import calcTotalFromObject from 'services/calcTotalFromObject';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statictics/Statistics';

// Initial values for each feedback
const INITIAL_VALUES = {
  good: 0,
  neutral: 0,
  bad: 0,
}

// Function for useReducer Hook to manage feedback state values
const feedbackOptionReducer = (feedbackOptions, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...feedbackOptions, [action.option]: feedbackOptions[action.option] + 1
      }
    default:
      console.log('No case in feedbackOptionReducer has been registered.');
  }
}

const App = () => {
  // Create a useReducer Hook for feedback button state management
  const [state, dispatch] = useReducer(feedbackOptionReducer, INITIAL_VALUES);

  // State destruction for feedback buttons
  const {good, neutral, bad} = state;

  // Calculate the sum of all collected feedback
  const total = calcTotalFromObject(state);

  // Calculating a positive response percentage
  const positivePercentage = calcPositivePercent(total, good);

  // Support for feedback buttons
  const feedbackIncrement = (evt) => {
    return dispatch({
      type: "increment",
      option: evt.target.textContent,
    });
  };

  const btnNames = Object.keys(state);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions 
          options={btnNames} 
          onLeaveFeedback={feedbackIncrement}
        />
      </Section>
      <Section title="Statistics">
        {(total > 0)
          ? <Statistics 
              good={good} 
              neutral={neutral} 
              bad={bad} 
              total={total} 
              positivePercentage={positivePercentage}
            />
          : <Notification message="There is no feedback" />
        }
      </Section>
    </>
  )
}
 
export default App;