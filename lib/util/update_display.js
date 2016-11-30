import $ from 'jquery';

export const updateCount = numWords => {
  let $currentCount = $('.current-count')[0];
  $currentCount.textContent = numWords;
};

export const updatePercentage = (numWords, goal) => {
  if (!numWords) numWords = 0;
  if (!goal) goal = 0;

  let percentage = Math.floor(numWords / goal * 100);
  if (!percentage) percentage = 0;

  let $percentageCount = $('.percentage-count')[0];
  $percentageCount.textContent = percentage;
};
