import $ from 'jquery';

export const wordCounter = () => {
  let counts = {
    numWords: 0,
    goal: 0
  };

  watchTextBox(counts);
  watchGoalBox(counts);
};

const watchTextBox = counts => {
  let $textBox = $('.user-text');

  $textBox.on('input', () => {
    let words = $textBox.val().match(/\s*\S+\s*/g);
    counts.numWords = words ? words.length : 0;

    updateCount(counts.numWords);
    updatePercentage(counts.numWords, counts.goal);
  });
};

const watchGoalBox = counts => {
  let $goalBox = $('.goal');

  $goalBox.on('input', () => {
    counts.goal = $goalBox.val();
    updatePercentage(counts.numWords, counts.goal);
  });
};

const updateCount = numWords => {
  let $currentCount = $('.current-count')[0];
  $currentCount.textContent = numWords;
};

const updatePercentage = (numWords, goal) => {
  if (!numWords) numWords = 0;
  if (!goal) goal = 0;

  let percentage = Math.floor(numWords / goal * 100);
  if (!percentage) percentage = 0;

  let $percentageCount = $('.percentage-count')[0];
  $percentageCount.textContent = percentage;

};
