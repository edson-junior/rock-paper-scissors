import * as constants from '../actions/constants';

/**
 * Compares the choices and returns the result of said choices.
 * @param {object} state - The redux state.
 * @param {string} user - The choices made by the user.
 * @returns {object} processed state.
 */
function compare(state, user) {
  let computer;
  const randomize = Math.floor(Math.random() * 100);

  if (randomize < 34) {
    computer = 'rock';
  } else if (randomize >= 67) {
    computer = 'paper';
  } else {
    computer = 'scissors';
  }

  const computerWins = {
    ...state,
    result: `Computer wins! You choose ${user} and computer ${computer}`,
    computer: state.computer + 1,
    matches: state.matches + 1,
  };

  const userWins = {
    ...state,
    result: `You win! Computer choose ${computer}`,
    user: state.user + 1,
    matches: state.matches + 1,
  };

  if (computer === user) {
    return {
      ...state,
      result: "It's a tie!",
      matches: state.matches + 1,
    };
  }

  if (user === 'rock') {
    if (computer === 'scissors') {
      return userWins;
    }
    return computerWins;
  }

  if (user === 'paper') {
    if (computer === 'rock') {
      return userWins;
    }
    return computerWins;
  }

  if (user === 'scissors') {
    if (computer === 'rock') {
      return computerWins;
    }
    return userWins;
  }

  return state;
}

/**
 * Reducer function that handles the choices of computer/user.
 * @param {object} state - The redux state.
 * @param {string} action - The choices made by the user.
 * @returns {object} processed state.
 */
const play = (state = constants.initialState, action) => {
  switch (action.type) {
    case constants.ROCK:
      return compare(state, action.rock);
    case constants.PAPER:
      return compare(state, action.paper);
    case constants.SCISSORS:
      return compare(state, action.scissors);
    default:
      return state;
  }
};

export default play;
