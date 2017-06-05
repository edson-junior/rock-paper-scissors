'use strict';

let result = null;
let result_a = "paper wins";
let result_b = "scissors wins";

let matches = 0;

let PLAYER_A = {
  'choice': "paper",
  'points': 0,
  'points_wrapper': '.player-a-points'
};

let PLAYER_B = {
  'choice': null,
  'points': 0,
  'points_wrapper': '.player-b-points'
};

const compare = (a, b) => {
  matches++;

  if (a === b) {
    result = "tie";
    return;
  }

  if (a === "paper") {
    if (b === "rock") {
      result = result_a;
      return PLAYER_A.points = PLAYER_A.points+1;
    } else {
      if (b === "scissors") {
        result = result_b;
        return PLAYER_B.points = PLAYER_B.points+1;
      }
    }
  }
};

export {compare, PLAYER_A, PLAYER_B, matches, result, result_a, result_b};
