import * as constants from '../actions/constants';

function compare(state, user) {
  const randomize = Math.floor(Math.random() * 100);
  const computer = randomize < 34 ? 'rock' : randomize >= 67 ? 'paper' : 'scissors';
  const computerWins = {
    ...state,
    result: computer,
    computer: state.computer + 1,
    matches: state.matches + 1,
  };

  const userWins = {
    ...state,
    result: user,
    user: state.user + 1,
    matches: state.matches + 1,
  };

  if (computer === user) {
    return {
      ...state,
      result: 'tie',
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
