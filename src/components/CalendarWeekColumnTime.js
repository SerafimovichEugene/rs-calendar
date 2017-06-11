import React from 'react';

export default class CalendarWeekColumnTime extends React.Component {

  render() {
    const items = [];
    let j = 0;
    items.push(
      <div className={this.props.itemClass} key={j++} />,
    );
    for (let i = 0; i < 24; i++) {
      items.push(
        <div className={this.props.itemClass} key={`${i}:00`}>
          {`${i}:00`}
        </div>,
      );
    }
    return (
      <div className={this.props.columnClassName}>
        {items}
      </div>
    );
  }
}
