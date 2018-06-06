import React from 'react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Play from './Play';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const initialState = [];
const mockStore = configureStore();
const mockOnRock = jest.fn();
const mockOnPaper = jest.fn();
const mockOnScissors = jest.fn();
const props = { 
  store: mockStore(initialState),
  onRock: mockOnRock,
  onPaper: mockOnPaper,
  onScissors: mockOnScissors
};
const play = mount(<Play { ...props } />);

describe('Play', () => {
  it('should render properly', () => {
    expect(toJson(play)).toMatchSnapshot();
  });

  // @TODO: fix the mock function
  describe('when the user clicks on an item', () => {
    it('should dispatch rock', () => {
      play.find('.rock').simulate('click');

      expect(mockOnRock).toHaveBeenCalled();
    });
  });

  

});
