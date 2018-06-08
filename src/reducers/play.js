import * as constants from '../actions/constants';

function compare(state, user) {
  const computer = 'paper';

  if (computer === user) {
    return {
      ...state,
      result: 'tie',
      matches: state.matches + 1,
    };
  }

  if (computer === 'paper') {
    if (user === 'rock') {
      return {
        ...state,
        result: computer,
        computer: state.computer + 1,
        matches: state.matches + 1,
      };
    }
    if (user === 'scissors') {
      return {
        ...state,
        result: user,
        user: state.user + 1,
        matches: state.matches + 1,
      };
    }
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
