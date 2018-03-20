import React from 'react';
import createReactClass from 'create-react-class';

const Players = createReactClass({
  render() {
    return (
      <div className="panel panel-default">
        <table className="score table">
          <thead>
            <tr>
              <td colSpan="2"><strong>Round:</strong> <span className="round-number">0</span></td>
            </tr>
            <tr>
              <td colSpan="2"><strong>Result:</strong> <span className="round-result">0</span></td>
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
              <td className="player-a player-a-points">0</td>
              <td className="player-b player-b-points">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
});

export default Players;