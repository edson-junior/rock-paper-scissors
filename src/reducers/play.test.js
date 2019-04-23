import configureStore from 'redux-mock-store';
import * as constants from '../actions/constants';
import play from './play';

const initialState = constants.initialState;
const rock = { type: constants.ROCK, rock: 'rock' };
const paper = { type: constants.PAPER, paper: 'paper' };
const scissors = { type: constants.SCISSORS, scissors: 'scissors' };

describe('play', () => {
  it('should increment matches number', () => {
    expect(play(constants.initialState, rock).matches).toEqual(1);
    expect(play(constants.initialState, paper).matches).toEqual(1);
    expect(play(constants.initialState, scissors).matches).toEqual(1);
  });

  it('should check if choice is string', () => {
    expect(typeof play(constants.initialState, rock).result).toBe('string');
    expect(typeof play(constants.initialState, paper).result).toBe('string');
    expect(typeof play(constants.initialState, scissors).result).toBe('string');
  });

  it('should check if user is number', () => {
    expect(typeof play(constants.initialState, rock).user).toBe('number');
    expect(typeof play(constants.initialState, paper).user).toBe('number');
    expect(typeof play(constants.initialState, scissors).user).toBe('number');
  });

  it('should check if computer is number', () => {
    expect(typeof play(constants.initialState, rock).computer).toBe('number');
    expect(typeof play(constants.initialState, paper).computer).toBe('number');
    expect(typeof play(constants.initialState, scissors).computer).toBe(
      'number',
    );
  });
});
