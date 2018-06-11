import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const app = shallow(<App />)

describe('App', () => {
  it('renders properly', () => {
    expect(toJson(app)).toMatchSnapshot();
  });

  it('should have title', () => {
    expect(app.find('h3').text()).toEqual('Rock Paper Scissors');
  });

  it('should have a `Play` component', () => {
    expect(app.find('Connect(Play)').exists()).toBe(true);
  });

});
