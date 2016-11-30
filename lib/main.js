import $ from 'jquery';
import { wordCounter } from './word_count';

$(() => {
  console.log('yup!');

  window.$ = $;
  wordCounter();
});
