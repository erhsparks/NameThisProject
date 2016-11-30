import $ from 'jquery';
import { updatePercentage } from './util/update_display';

const watchGoalBox = counts => {
  let $goalBox = $('.goal');

  $goalBox.on('input', e => {
    counts.goal = $goalBox.val();
    updatePercentage(counts.numWords, counts.goal);
  });
};

export default watchGoalBox;
