import React from 'react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Play from './Play';
import * as constants from '../actions/constants';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const initialState = constants.initialState;
const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(initialState);
const props = { store };
const play = mount(<Play { ...props } />);

describe('Play', () => {
  it('should render properly', () => {
    expect(toJson(play)).toMatchSnapshot();
  });

  it('should have a `Results` component', () => {
    expect(play.find('Results').exists()).toBe(true);
  });

  describe('when user clicks on an item', () => {
    let actions;

    beforeEach(() => actions = store.getActions());
    afterEach(() => store.clearActions());

    it('should dispatch rock', () => {
      const payload = { type: constants.ROCK, rock: 'rock' };

      play.find('.rock').simulate('click');
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch paper', () => {
      const payload = { type: constants.PAPER, paper: 'paper' };

      play.find('.paper').simulate('click');
      expect(actions[0]).toEqual(payload);
    });

    it('should dispatch scissors', () => {
      const payload = { type: constants.SCISSORS, scissors: 'scissors' };

      play.find('.scissors').simulate('click');
      expect(actions[0]).toEqual(payload);
    });

  });
});
