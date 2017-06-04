'use strict';

import {compare, PLAYER_A, PLAYER_B} from '../public/src/js/components/game';

let matches = 0;
let result = null;
let button = document.querySelector('.play');

const choiceHandler = () => {
  if (matches >= 1000) return;

  player_b.choice = Math.random() * 100;
  player_b.choice < 34 ? player_b.choice = "rock" :
  player_b.choice >= 67 ? player_b.choice = "paper" :
  player_b.choice = "scissors";

  compare(player_a.choice, player_b.choice);

  document.querySelector(player_a.points_wrapper).innerHTML = player_a.points;
  document.querySelector(player_b.points_wrapper).innerHTML = player_b.points;
  document.querySelector('.round-number').innerHTML = matches;
  document.querySelector('.round-result').innerHTML = result;
};

button.addEventListener('click', choiceHandler);
