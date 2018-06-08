import configureStore from 'redux-mock-store';
import * as constants from '../actions/constants';
import play from './play';

const initialState = constants.initialState;
const payload = { type: constants.ROCK, rock: 'rock' };

describe('play', () => {
  it('should increment matches number', () => {
    expect(play(constants.initialState, payload).matches).toEqual(1);
  });

  it('should return a string', () => {
    expect(typeof play(constants.initialState, payload).result).toBe('string');
  });

  it('should return numbers', () => {
    expect(typeof play(constants.initialState, payload).user).toBe('number');
    expect(typeof play(constants.initialState, payload).computer).toBe('number');
  });
});

