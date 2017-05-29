import React from 'react';

import Navigation from './Navigation';
import Calendar from './Calendar';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('render App');
        return (
            <div className="container">
                <Navigation />
            </div>
        )
    }
}


