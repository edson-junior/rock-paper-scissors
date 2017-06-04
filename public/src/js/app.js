'use strict';

let player_a = {
  'choice': "paper",
  'points': 0,
  'points_wrapper': '.player-a-points'
};

let player_b = {
  'choice': null,
  'points': 0,
  'points_wrapper': '.player-b-points'
};

let matches = 0;
let result = null;
let button = document.querySelector('.play');

const compare = (a, b) => {
  matches++;

  if (a === b) {
    result = "tie";
    return;
  }

  if (a === "paper") {
    if (b === "rock") {
      result = "paper wins";
      return player_a.points = player_a.points+1;
    } else {
      if (b === "scissors") {
        result = "scissors wins";
        return player_b.points = player_b.points+1;
      }
    }
  }
};

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
