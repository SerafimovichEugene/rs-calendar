import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducer from './reducers/rootReducer';
import fetchDataFromAPI from './helpers/fetchDataFromAPI';
import checkCookieToken from './helpers/checkCookieToken';
import config from './config';

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
store.dispatch(fetchDataFromAPI(config.eventsRoute, config.speakersRoute))
  .then(() => {
    store.dispatch(checkCookieToken(config.authRoute));
  });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
