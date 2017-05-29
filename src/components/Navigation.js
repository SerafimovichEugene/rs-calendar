import React from 'react';

import Button from './Button';

export default class Navigation extends React.Component {
    
    render() {
        console.log('render Navigation');
        return(
            <div className='row' id='navigation'>
                <Button name="Month"/>
                <Button name="Week"/>
                <Button name="Next Month"/>
                <Button name="Prev Month"/>
            </div>
        )
    }
}
