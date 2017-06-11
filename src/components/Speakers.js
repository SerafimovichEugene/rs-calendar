import React from 'react';
import { connect } from 'react-redux';

class Speakers extends React.Component {
  render() {
    const currentEventTrainers = this.props.speakersIds.map(id => (
      <div className="row speaker" key={id}>
        <div className="col-xs-2 col-sm-2 col-md-2">
          <img
            src={this.props.trainers[id].avatar}
            alt={'avatar'}
            className="img-rounded"
            width="50" height="50"
          />
        </div>
        <div className="col-xs-10 col-sm-10 col-md-10">
          <span>{this.props.trainers[id].name}</span>
        </div>

      </div>
    ));
    return (
      <div className="row">
        {currentEventTrainers}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { trainers: state.fetchDataReducer.trainers };
}

export default connect(mapStateToProps, null)(Speakers);
