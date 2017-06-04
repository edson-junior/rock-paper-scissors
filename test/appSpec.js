'use strict';

import 'babel-polyfill';
import chai from 'chai';
import {compare, PLAYER_A, PLAYER_B} from '../public/src/js/components/game';

let expect = chai.expect;

describe('rock, paper, scissors', () => {
  it('it should increment the amount of points', () => {
    console.log(compare, PLAYER_A, PLAYER_B);
  });
});
