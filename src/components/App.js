import React, { Component, Fragment } from 'react';
import Play from './Play';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h3>Rock Paper Scissors</h3>
        <Play />
      </Fragment>
    );
  }
}

export default App;
