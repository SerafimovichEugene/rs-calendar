import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/App';
import calendar_reducer from './reducers/calendar_reducer';

// import parseDate from './core/eventsDataProvider';

let store = createStore(calendar_reducer);

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// parseDate();
