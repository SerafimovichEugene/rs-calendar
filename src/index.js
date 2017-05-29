import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import calendarDataProvider from './core/calendarDataProvider';

let calendar = new calendarDataProvider();
calendar.log();

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 
