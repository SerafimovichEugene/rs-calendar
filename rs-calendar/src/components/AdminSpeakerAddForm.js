import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';
import { showSpeakerForm, isFetching } from '../actions';
import config from '../config';
import request from '../helpers/addSpeakerRequest';
import fetchDataFromAPI from '../helpers/fetchDataFromAPI';

class AdminSpeakerAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ submitDisabled: true });
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
    this.checkInputs(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(config.addSpeakerRoute, this.state.name, this.state.avatar);
  }

  checkInputs(state) {
    if (state.name &&
      state.avatar) {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal
          animation
          show={this.props.showForm}
          onHide={() => {
            this.props.onHideEventAddForm();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Event Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              horizontal
              onSubmit={this.handleSubmit}
            >
              <FormGroup controlId="name" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="enter Name"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="avatar" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Avatar
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="place url to ava here"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" disabled={this.state.submitDisabled}>
                    Create event
                  </Button>
                </Col>
              </FormGroup>

            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showForm: state.adminFormsReducer.showSpeakerForm,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideEventAddForm: () => {
      dispatch(showSpeakerForm(false));
    },
    onSubmit: (route, name) => {
      dispatch(request(route, name))
        .then(() => dispatch(fetchDataFromAPI(config.eventsRoute, config.speakersRoute)))
        .then(() => dispatch(isFetching(false)));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSpeakerAddForm);
