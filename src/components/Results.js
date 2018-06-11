import React from 'react';

const Results = ({ store } = {}) => (
  <div>
    <h3>Result: You win!</h3>

    <div>
      <h3>Score</h3>
      <p>User: { store.user }</p>
      <p>Computer: { store.computer }</p>
      <p>Matches: { store.matches }</p>
    </div>
  </div>
);

export default Results;
