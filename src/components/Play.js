import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRock, addPaper, addScissors } from '../actions/play';

class Play extends Component {
  static propTypes = {
    onRock: PropTypes.func.isRequired,
    onPaper: PropTypes.func.isRequired,
    onScissors: PropTypes.func.isRequired,
  }
  render() {
    const { onRock, onPaper, onScissors } = this.props;

    return (
      <Fragment>
        <button className="rock" onClick={() => onRock('rock')}>rock</button>
        <button className="paper" onClick={() => onPaper('paper')}>paper</button>
        <button className="scissors" onClick={() => onScissors('scissors')}>scissors</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = dispatch => ({
  onRock: id => dispatch(addRock(id)),
  onPaper: id => dispatch(addPaper(id)),
  onScissors: id => dispatch(addScissors(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);
