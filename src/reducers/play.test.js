import configureStore from 'redux-mock-store';
import * as constants from '../actions/constants';
import play from './play';

const initialState = constants.initialState;
const payload = { type: constants.ROCK, rock: 'rock' };
const payload2 = { type: constants.PAPER, paper: 'paper' };
const payload3 = { type: constants.SCISSORS, scissors: 'scissors' };

describe('play', () => {
  it('should increment matches number', () => {
    expect(play(constants.initialState, payload).matches).toEqual(1);
    expect(play(constants.initialState, payload2).matches).toEqual(1);
    expect(play(constants.initialState, payload3).matches).toEqual(1);
  });

  it('should return a string', () => {
    expect(typeof play(constants.initialState, payload).result).toBe('string');
    expect(typeof play(constants.initialState, payload2).result).toBe('string');
    expect(typeof play(constants.initialState, payload3).result).toBe('string');
  });

  it('should return numbers', () => {
    expect(typeof play(constants.initialState, payload).user).toBe('number');
    expect(typeof play(constants.initialState, payload2).user).toBe('number');
    expect(typeof play(constants.initialState, payload3).user).toBe('number');

    expect(typeof play(constants.initialState, payload).computer).toBe('number');
    expect(typeof play(constants.initialState, payload2).computer).toBe('number');
    expect(typeof play(constants.initialState, payload3).computer).toBe('number');
  });
});

