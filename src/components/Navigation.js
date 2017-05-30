import React from 'react';

import Button from './Button';

export default class Navigation extends React.Component {
    
    render() {
        
        return(
            <div className='row' id='navigation'>
                <Button name="Month" id='view'/>
                <Button name="Week" id='view'/>
                <Button name="Next" id='changeMonth'/>
                <Button name="Prev" id='changeMonth'/>
            </div>
        )
    }
}
