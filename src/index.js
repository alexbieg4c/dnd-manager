import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.scss';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import baseReducer from './reducers';

const store = createStore(baseReducer, { pages: [{ name: 'Page 1' }, { name: 'Page 2' }]});

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
