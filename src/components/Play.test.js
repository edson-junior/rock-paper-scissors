import React from 'react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Play from './Play';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const initialState = [];
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(initialState);

const props = { 
  store: store
};

const play = mount(<Play { ...props } />);

describe('Play', () => {
  it('should render properly', () => {
    expect(toJson(play)).toMatchSnapshot();
  });

  describe('when user clicks on an item', () => {
    let actions;

    beforeEach(() => {
      actions = store.getActions();
    });

    afterEach(() => {
      store.clearActions();
    });

    it('should dispatch rock', () => {
      play.find('.rock').simulate('click');

      const payload = { type: 'ROCK', rock: 'test' };
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch paper', () => {
      play.find('.paper').simulate('click');

      const payload = { type: 'PAPER', paper: 'test2' };
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch scissors', () => {
      play.find('.scissors').simulate('click');

      const payload = { type: 'SCISSORS', scissors: 'test3' };
      expect(actions[0]).toEqual(payload);
    });
  });
});
