import React, { Component } from 'react';
import Players from './components/Players'
import Score from './components/Score'
import 'bootstrap/dist/css/bootstrap.min.css';

const result_a = 'paper wins'
const result_b = 'scissors wins'

const playerA = {
  points: 0
}

const playerB = {
  points: 0
}

class App extends Component {
  state = {
    result: null,
    matches: 0,
    playerA: {
      choice: "paper"
    },
    playerB: {
      choice: null
    }
  }

  compare = (a, b) => {
    this.state.matches++

    if (a === b) {
      this.state.result = "tie"
      return
    }

    if (a === "paper") {
      if (b === "rock") {
        this.state.result = result_a
        return playerA.points = playerA.points + 1
      } else {
        if (b === "scissors") {
          this.state.result = result_b
          return playerB.points = playerB.points + 1
        }
      }
    }
  }

  choiceHandler = event => {
    event.preventDefault()

    if (this.state.matches >= 1000) return;
    
    let randomChoice = Math.random() * 100

    randomChoice < 34 ? randomChoice = "rock" :
    randomChoice >= 67 ? randomChoice = "paper" :
    randomChoice = "scissors"

    this.setState({
      playerB: { choice: randomChoice }
    })

    this.compare(this.state.playerA.choice, this.state.playerB.choice);
  }

  render() {
    return (
      <form className="container" onSubmit={ this.choiceHandler }>
        <h1 className="page-header">Rock, Paper, Scissors</h1>
        <Players playerB={this.state.playerB.choice} />
        <Score playerA={playerA.points} playerB={playerB.points} roundNumber={this.state.matches} roundResult={this.state.result} />
        <button className="play btn btn-default btn-primary">PLAAAAAAY!!!!</button>
      </form>
    );
  }
}

export default App
