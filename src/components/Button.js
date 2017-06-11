import React from 'react';

export default class Button extends React.Component {

  float(key) {
    if (key === 'change') {
      return 'btn btn-default change';
    }
    return 'btn btn-default';
  }

  render() {
    return (
      <button
        className={this.float(this.props.id)}
        onClick={() => {
          this.props.onChangePage(this.props.arg);
        }
        }
      >
        {this.props.name}
      </button>
    );
  }
}
