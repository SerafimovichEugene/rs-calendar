import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import reducers from './reducers';
import App from './components/App';


import { calendar_reducer, createCalendar } from './reducers/Calendar-reducer';

// let store = createStore(reducers);

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>, 
//     document.getElementById('root')
// );

let calendar = createCalendar(2017, 5);
console.log(calendar);
console.log( calendar_reducer( calendar, {type: 'NEXT_MONTH'}));
console.log( calendar_reducer( calendar, {type: 'NEXT_MONTH'}));
