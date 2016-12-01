import $ from 'jquery';

export const updateCount = numWords => {
  let $currentCount = $('.current-count')[0];
  $currentCount.textContent = numWords;
};

export const updatePercentage = (numWords, goal) => {
  if (!numWords) numWords = 0;
  if (!goal) goal = 0;

  let rawPercentage = numWords / goal * 100;
  // I think I'm going to want ^^this^^ later

  let percentage = Math.floor(rawPercentage);
  if (!percentage) percentage = 0;

  let $percentageCount = $('.percentage-count')[0];
  $percentageCount.textContent = percentage;

  if (percentage > 100) percentage = 100;
  updateVisualProgress(percentage);
};

const updateVisualProgress = percentage => {
  let $progresses = $('.world');
  $progresses.height(`${percentage}%`);
};
