import React from 'react';
import createReactClass from 'create-react-class';
import Players from './components/Players'
import Score from './components/Score'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = createReactClass({
  playHandle(e) {
    e.preventDefault();
    console.log(this);
  },
  render() {
    return (
      <form className="container" onSubmit={this.playHandle}>
        <h1 className="page-header">Rock Papers Scissors</h1>
        <Players/>
        <Score/>
        <button className="play btn btn-default btn-primary">PLAAAAAAY!!!!</button>
      </form>
    );
  }
});

export default App;
