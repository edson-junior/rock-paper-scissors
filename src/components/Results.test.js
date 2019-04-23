import React from 'react';
import Results from './Results';
import * as constants from '../actions/constants';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

const initialState = constants.initialState;
const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore(initialState);
const props = { store };

const results = shallow(<Results {...props} />);

describe('Results', () => {
  it('should render properly', () => {
    expect(toJson(results)).toMatchSnapshot();
  });
});
