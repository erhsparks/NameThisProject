import $ from 'jquery';
import {
  updateCount,
  updatePercentage
} from './util/update_display';

const watchTextBox = counts => {
  let $textBox = $('.user-text');

  $textBox.on('input', () => {
    let words = $textBox.val().match(/\s*\S+\s*/g);
    counts.numWords = words ? words.length : 0;

    updateCount(counts.numWords);
    updatePercentage(counts.numWords, counts.goal);
  });
};

export default watchTextBox;
