import $ from 'jquery';
import { wordCounter } from './word_count';

window.$ = $;

$(() => {
  wordCounter();
});
