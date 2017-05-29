import React from 'react';

export default class Button extends React.Component {

    render() {
        return (
            <button className='btn btn-default'>{this.props.name}</button>
        )
        
    }
}
