import * as constants from '../actions/constants';

const play = (state = [], action) => {
  switch (action.type) {
    case constants.ROCK:
      return {
        ...state,
        rock: 'rock',
      };
    case constants.PAPER:
      return {
        ...state,
        paper: 'paper',
      };
    case constants.SCISSORS:
      return {
        ...state,
        scissors: 'scissors',
      };
    default:
      return state;
  }
};

export default play;
