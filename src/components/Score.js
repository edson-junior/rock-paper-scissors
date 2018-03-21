import React, { Component } from 'react'

class Score extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <table className="score table">
          <thead>
            <tr>
              <td colSpan="2"><strong>Round:</strong> <span className="round-number">{ this.props.roundNumber }</span></td>
            </tr>
            <tr>
              <td colSpan="2"><strong>Result:</strong> <span className="round-result">{ this.props.roundResult }</span></td>
            </tr>
            <tr>
              <td><strong>Score</strong></td>
            </tr>
            <tr>
              <td className="player player-a">Player A (Computer)</td>
              <td className="player player-b">Player B (you)</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="player-a player-a-points">{ this.props.playerA }</td>
              <td className="player-b player-b-points">{ this.props.playerB }</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Score
