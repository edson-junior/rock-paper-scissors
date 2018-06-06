import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import play from './reducers/play';
import App from './components/App';

const store = createStore(play);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
