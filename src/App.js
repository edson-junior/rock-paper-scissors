import React, { Component } from 'react';
import Players from './components/Players'
import Score from './components/Score'
import 'bootstrap/dist/css/bootstrap.min.css';

let result = null
const result_a = "paper wins"
const result_b = "scissors wins"
let matches = 0

export const PLAYER_A = {
  'choice': "paper",
  'points': 0,
  'points_wrapper': '.player-a-points'
}

export const PLAYER_B = {
  'choice': null,
  'points': 0,
  'points_wrapper': '.player-b-points'
}

export const compare = (a, b) => {
  matches++

  if (a === b) {
    result = "tie"
    return
  }

  if (a === "paper") {
    if (b === "rock") {
      result = result_a
      return PLAYER_A.points = PLAYER_A.points + 1
    } else {
      if (b === "scissors") {
        result = result_b
        return PLAYER_B.points = PLAYER_B.points + 1
      }
    }
  }
}

class App extends Component {
  choiceHandler = () => {
    if (matches >= 1000) return;

    PLAYER_B.choice = Math.random() * 100;

    PLAYER_B.choice < 34 ? PLAYER_B.choice = "rock" :
    PLAYER_B.choice >= 67 ? PLAYER_B.choice = "paper" :
    PLAYER_B.choice = "scissors";

    compare(PLAYER_A.choice, PLAYER_B.choice);

    document.querySelector(PLAYER_A.points_wrapper).innerHTML = PLAYER_A.points;
    document.querySelector(PLAYER_B.points_wrapper).innerHTML = PLAYER_B.points;
    document.querySelector('.choices .player-b-choice').innerHTML = PLAYER_B.choice;
    document.querySelector('.round-number').innerHTML = matches;
    document.querySelector('.round-result').innerHTML = result;
  }

  render() {
    return (
      <form className="container" onSubmit={ this.choiceHandler }>
        <h1 className="page-header">Rock, Paper, Scissors</h1>
        <Players/>
        <Score/>
        <button className="play btn btn-default btn-primary">PLAAAAAAY!!!!</button>
      </form>
    );
  }
}

export default App
