'use strict';

import 'babel-polyfill';
import chai from 'chai';
import {compare, PLAYER_A, PLAYER_B, matches, result, result_a, result_b} from '../public/src/js/components/game';

let expect = chai.expect;

describe('rock, paper, scissors (lizard, spock!!!)', () => {
  it('should make player A win', () => {
    compare("paper", "rock");
    expect(result).to.equal(result_a);
    expect(PLAYER_A.points).to.equal(1);
  });

  it('should make player B win', () => {
    compare("paper", "scissors");
    expect(result).to.equal(result_b);
    expect(PLAYER_B.points).to.equal(1);
  });

  it('should end in a tie', () => {
    compare("paper", "paper");
    expect(result).to.equal("tie");
  });
});
