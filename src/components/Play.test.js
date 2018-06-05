import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Play from './Play';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const play = shallow(<Play />);

describe('Play', () => {
  it('should render properly', () => {
    expect(toJson(play)).toMatchSnapshot();
  });
});
