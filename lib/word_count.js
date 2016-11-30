import $ from 'jquery';
import watchTextBox from './text_box';
import watchGoalBox from './goal_box';

const wordCounter = () => {
  let counts = {
    numWords: 0,
    goal: 0
  };

  watchTextBox(counts);
  watchGoalBox(counts);
};

export default wordCounter;
