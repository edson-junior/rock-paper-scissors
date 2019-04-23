import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Results from './Results';
import { addRock, addPaper, addScissors } from '../actions/play';

/**
 * Render the choices the players can make.
 * @param {object} props - The mapped props.
 * @returns {*} The rendered component.
 */
const Play = ({ store, onRock, onPaper, onScissors }) => (
  <Fragment>
    <button className="rock" onClick={() => onRock('rock')}>
      <span role="img" aria-label="rock">
        ✊
      </span>
      rock
    </button>
    <button className="paper" onClick={() => onPaper('paper')}>
      <span role="img" aria-label="paper">
        🖐️
      </span>
      paper
    </button>
    <button className="scissors" onClick={() => onScissors('scissors')}>
      <span role="img" aria-label="scissors">
        ✌️
      </span>
      scissors
    </button>
    <Results store={store} />
  </Fragment>
);

Play.propTypes = {
  store: PropTypes.shape({}).isRequired,
  onRock: PropTypes.func.isRequired,
  onPaper: PropTypes.func.isRequired,
  onScissors: PropTypes.func.isRequired,
};

/**
 * Maps the redux state to props in the component.
 * @param {object} state - The redux state being mapped.
 * @returns {object} The mapped object.
 */
const mapStateToProps = state => ({
  store: state,
});

/**
 * Maps the dispatch functions from redux to props in the component.
 * @param {function} dispatch - The dispatch function.
 * @returns {object} Object with mapped dispatch functions.
 */
const mapDispatchToProps = dispatch => ({
  onRock: id => dispatch(addRock(id)),
  onPaper: id => dispatch(addPaper(id)),
  onScissors: id => dispatch(addScissors(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Play);
