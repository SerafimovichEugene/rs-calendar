import React from 'react';

export default class Button extends React.Component {

  setIcon(icon) {
    switch (icon) {
      case 'left':
        return <span className="glyphicon glyphicon-chevron-left" />;
      case 'right':
        return <span className="glyphicon glyphicon-chevron-right" />;
      case 'admin':
        return <span className="glyphicon glyphicon-cog" />;
      default:
        return '';
    }
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={() => { this.props.onChangePage(this.props.arg); }}
      >
        {this.setIcon(this.props.icon)}
        {this.props.name}
      </button>
    );
  }
}

