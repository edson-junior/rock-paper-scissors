import React, { Component } from 'react';

class Players extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <table className="choices table">
          <thead>
            <tr>
              <th>Name: </th>
              <th className="player player-a">Player A</th>
              <th className="player player-b">Player B</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Choice: </td>
              <td className="player player-a-choice">paper</td>
              <td className="player player-b-choice">random</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Players;
