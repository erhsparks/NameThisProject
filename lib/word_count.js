import $ from 'jquery';

export const wordCounter = () => {
  let $textBox = $('.user-text');
  let numWords;

  // change only works if click away.
  $textBox.change(() => {
    numWords = $textBox.val().match(/\s*\S+\s*/g).length;

    updateCount(numWords);
  });

  percentage();
};

const updateCount = numWords => {
  let $currentCount = $('.current-count')[0];
  $currentCount.textContent = numWords;
};

const percentage = () => {
  let $goalBox = $('.goal');
  let goal;

  $goalBox.change(() => {
    goal = $goalBox.val();

    console.log(goal);
  });
};
