'use strict';

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
      result = "paper wins";
      return PLAYER_A.points = PLAYER_A.points+1;
    } else {
      if (b === "scissors") {
        result = "scissors wins";
        return PLAYER_B.points = PLAYER_B.points+1;
      }
    }
  }
};

export compare;
