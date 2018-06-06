import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addRock, addPaper, addScissors } from '../actions/play';

class Play extends Component {
  render() {
    return(
      <div>
      </div>
    );
  }
}

export default connect()(Play);
