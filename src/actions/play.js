import * as constants from './constants';

export const addRock = rock => ({
  type: constants.ROCK,
  rock,
});

export const addPaper = paper => ({
  type: constants.PAPER,
  paper,
});

export const addScissors = scissors => ({
  type: constants.SCISSORS,
  scissors,
});

