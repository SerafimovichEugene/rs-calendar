import React from 'react';

export default class Button extends React.Component {

  isTurnPage(turnPageIcon) {
    if (turnPageIcon === 'left') {
      return <span className="glyphicon glyphicon-chevron-left" />;
    } else if (turnPageIcon === 'right') {
      return <span className="glyphicon glyphicon-chevron-right" />;
    }
    return '';
  }

  render() {
    return (
      <button
        className={this.props.className}
        onClick={() => { this.props.onChangePage(this.props.arg); }}
      >
        {this.isTurnPage(this.props.turnPage)}
        {this.props.name}
      </button>
    );
  }
}

