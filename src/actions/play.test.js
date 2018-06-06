import configureStore from 'redux-mock-store';
import { addRock, addPaper, addScissors } from '../actions/play';

const initialState = [];
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(initialState);

describe('Play', () => {
  describe('when the user dispatches an item', () => {
    let actions;

    beforeEach(() => {
      actions = store.getActions();
    });

    afterEach(() => {
      store.clearActions();
    });

    it('should dispatch rock', () => {
      store.dispatch(addRock('test'));
      const payload = { type: 'ROCK', rock: 'test' };
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch paper', () => {
      store.dispatch(addPaper('test'));
      const payload = { type: 'PAPER', paper: 'test' };
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch scissors', () => {
      store.dispatch(addScissors('test'));
      const payload = { type: 'SCISSORS', scissors: 'test' };
      expect(actions[0]).toEqual(payload);
    });
  });
});
