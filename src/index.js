import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/rootReducer';
import { fetchData } from './actions';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
store.dispatch(fetchData('http://128.199.53.150/events', 'http://128.199.53.150/trainers'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
