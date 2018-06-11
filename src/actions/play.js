import * as constants from './constants';

/**
 * Rock action.
 * @param {string} rock - The choice made by user.
 * @returns {object} author - The action being sent to the reducer.
 */
export const addRock = rock => ({
  type: constants.ROCK,
  rock,
});

/**
 * Paper action.
 * @param {string} paper - The choice made by user.
 * @returns {object} author - The action being sent to the reducer.
 */
export const addPaper = paper => ({
  type: constants.PAPER,
  paper,
});

/**
 * Scissors action.
 * @param {string} scissors - The choice made by user.
 * @returns {object} author - The action being sent to the reducer.
 */
export const addScissors = scissors => ({
  type: constants.SCISSORS,
  scissors,
});

