'use strict';

import {compare, PLAYER_A, PLAYER_B, matches, result, result_a, result_b} from './components/game';

let play_button = document.querySelector('.play');

window.compare = compare;
window.PLAYER_A = PLAYER_A;
window.PLAYER_B = PLAYER_B;
window.matches = matches;
window.result = result;
window.result_a = result_a;
window.result_b = result_b;

const choiceHandler = () => {
  if (matches >= 1000) return;

  PLAYER_B.choice = Math.random() * 100;

  PLAYER_B.choice < 34 ? PLAYER_B.choice = "rock" :
  PLAYER_B.choice >= 67 ? PLAYER_B.choice = "paper" :
  PLAYER_B.choice = "scissors";

  compare(PLAYER_A.choice, PLAYER_B.choice);

  document.querySelector(PLAYER_A.points_wrapper).innerHTML = PLAYER_A.points;
  document.querySelector(PLAYER_B.points_wrapper).innerHTML = PLAYER_B.points;
  document.querySelector('.choices .player-b-choice').innerHTML = PLAYER_B.choice;
  document.querySelector('.round-number').innerHTML = matches;
  document.querySelector('.round-result').innerHTML = result;
};

play_button.addEventListener('click', choiceHandler);
