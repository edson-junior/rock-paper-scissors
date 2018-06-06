import * as constants from '../actions/constants';

const play = (state = [], action) => {
  switch (action.type) {
    case constants.ROCK:
      return {
        ...state,
        rock: action.rock,
      };
    case constants.PAPER:
      return {
        ...state,
        paper: action.paper,
      };
    case constants.SCISSORS:
      return {
        ...state,
        scissors: action.scissors,
      };
    default:
      return state;
  }
};

export default play;
