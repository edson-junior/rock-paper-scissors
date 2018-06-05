import * as constants from './constants';

const play = (state = [], action) => {
  switch (constants) {
    case constants.ROCK:
      return console.log('rock');
    case constants.PAPER:
      return console.log('paper');
    case constants.SCISSORS:
      return console.log('scissors');
    default:
      state
  }
}

export default play;
