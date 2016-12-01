import $ from 'jquery';
import { updatePercentage } from './util/update_display';

const watchGoalBox = counts => {
  let $goalBox = $('.goal');

  $goalBox.on('input', e => {
    checkValidity($goalBox, counts);
    updatePercentage(counts.numWords, counts.goal);
  });
};

const checkValidity = ($goalBox, counts) => {
  let entry = $goalBox.val();
  let $textBox = $('.user-text')[0];

  if (entry.match(/^\d*[1-9]\d*$/g)) {
    $goalBox.val(parseInt(entry));
    counts.goal = entry;
    enableTextBox($textBox);
  } else if (entry === '') {
    $goalBox.val('');
    disableTextBox($textBox, 'empty');
  } else {
    $goalBox.val('');
    disableTextBox($textBox, 'invalid');
  }
};

const enableTextBox = $textBox => {
  $textBox.disabled = false;
  $textBox.placeholder = 'Start typing!';
};

const disableTextBox = ($textBox, reason) => {
  let reasons = {
    empty: 'Enter a word count goal in the box above...',
    invalid: 'Enter a single whole number greater than 0...'
  };

  $textBox.disabled = true;
  $textBox.placeholder = reasons[reason];
};

export default watchGoalBox;
