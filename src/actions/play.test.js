import configureStore from 'redux-mock-store';
import * as constants from './constants';
import { addRock, addPaper, addScissors } from '../actions/play';

const initialState = [];
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(initialState);

describe('Play', () => {
  describe('when the user dispatches an item', () => {
    let actions;

    beforeEach(() => actions = store.getActions());
    afterEach(() => store.clearActions());

    it('should dispatch rock', () => {
      const rock = 'test';
      const payload = { type: constants.ROCK, rock };
      store.dispatch(addRock(rock));
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch paper', () => {
      const paper = 'test'
      const payload = { type: constants.PAPER, paper };
      store.dispatch(addPaper('test'));
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch scissors', () => {
      const scissors = 'test';
      const payload = { type: constants.SCISSORS, scissors };
      store.dispatch(addScissors('test'));
      expect(actions[0]).toEqual(payload);
    });
  });
});
