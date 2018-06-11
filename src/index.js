import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import play from './reducers/play';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  play,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
