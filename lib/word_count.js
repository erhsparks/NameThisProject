import $ from 'jquery';

export const wordCounter = () => {
  let $textBox = $('.user-text');
  let numWords;

  let $goalBox = $('.goal');
  let goal;

  $textBox.on('input', () => {
    let words = $textBox.val().match(/\s*\S+\s*/g);
    numWords = words ? words.length : 0;

    updateCount(numWords);
    updatePercentage(numWords, goal);
  });

  $goalBox.on('input', () => {
    goal = $goalBox.val();
    updatePercentage(numWords, goal);
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
