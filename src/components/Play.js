import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRock, addPaper, addScissors } from '../actions/play';

/**
 * Render the choices the players can make.
 * @param {object} props - The mapped props.
 * @returns {*} The rendered component.
 */
const Play = ({ onRock, onPaper, onScissors }) => (
  <Fragment>
    <button className="rock" onClick={() => onRock('rock')}>rock</button>
    <button className="paper" onClick={() => onPaper('paper')}>paper</button>
    <button className="scissors" onClick={() => onScissors('scissors')}>scissors</button>
  </Fragment>
);

Play.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Play);
