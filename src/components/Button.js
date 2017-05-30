import React from 'react';

export default class Button extends React.Component {
     
    float(key) {
        if (key == 'changeMonth') {
            return 'btn btn-default changeMonth';
        } else {
            return 'btn btn-default';
        }
    }

    render() {

        return (
            <button className={this.float(this.props.id)}>
                {this.props.name}
            </button>
        )
        
    }
}
