import React from 'react';

import Navigation from './Navigation';
import Calendar from './Calendar';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {        
        return (
            <div className="container">
                <Navigation />
                <Calendar />
            </div>
        )
    }
}


