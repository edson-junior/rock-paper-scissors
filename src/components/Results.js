import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render the redux state in the component.
 * @param {object} state - The redux initial state.
 * @returns {*} The rendered component.
 */
const Results = ({ store }) => (
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

Results.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Results;
