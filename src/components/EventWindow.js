import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { hideEvent } from '../actions';
import Speakers from './Speakers';
import Resources from './Resources';

class EventWindow extends React.Component {
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showEvent} onHide={() => { this.props.onHideEvent(); }}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.event.type}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-2">Start:</div>
              <div className="col-xs-10">{this.props.event.startAt}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">Where:</div>
              <div className="col-xs-10">{this.props.event.location}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">Duration:</div>
              <div className="col-xs-10">{this.props.event.durationView}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">Description:</div>
              <div className="col-xs-10">{this.props.event.description}</div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">Speakers:</div>
              <div className="col-xs-10"><Speakers speakersIds={this.props.event.speakers || []} />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-2">Resources:</div>
              <div className="col-xs-10"><Resources resources={this.props.event.resources || []} />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="row">
              <div className="col-sm-2"><a href={''}>Feedback</a></div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { showEvent: state.modalReducer.showEvent,
    event: state.modalReducer.event,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideEvent: () => {
      dispatch(hideEvent());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventWindow);
