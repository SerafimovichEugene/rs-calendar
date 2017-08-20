import React from 'react';
import { connect } from 'react-redux';
import { filter, map } from 'lodash';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Button } from 'react-bootstrap';
import { showEventForm, alert, isFetching } from '../actions';
import config from '../config';
import request from '../helpers/addEventRequest';
import fetchDataFromAPI from '../helpers/fetchDataFromAPI';
import AlertDismiss from './AlertDismiss';

function dateValidation(date, start) {  // 20.02.2017
  const dateArray = date.split('.').map(val => parseInt(val, 10));
  const startArray = start.split(':').map(val => parseInt(val, 10)); // 23:59
  return new Date(dateArray[2],
                  dateArray[1] - 1,
                  dateArray[0],
                  startArray[0],
                  startArray[1]).toUTCString();
}

class AdminEventAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSpeaker = this.handleChangeSpeaker.bind(this);
  }

  componentWillMount() {
    this.setState({ submitDisabled: true });
  }

  handleChange(e) {
    this.checkInputs();
    switch (e.target.id) {
      case 'type':
        this.setState({ type: e.target.value }, this.checkInputs());
        break;
      case 'date':
        {
          const re = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(19|20)\d\d/;
          if (re.test(e.target.value)) {
            this.setState({ validationStateDate: 'success' });
          } else { this.setState({ validationStateDate: 'error' }); }
          this.setState({ date: e.target.value }, this.checkInputs());
          break;
        }
      case 'start':
        {
          const re = /^([0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
          if (re.test(e.target.value)) {
            this.setState({ validationStateStart: 'success' });
          } else { this.setState({ validationStateStart: 'error' }); }
          this.setState({ start: e.target.value }, this.checkInputs());
          break;
        }
      case 'duration':
        this.setState({ duration: e.target.value }, this.checkInputs());
        break;
      case 'location':
        this.setState({ location: e.target.value }, this.checkInputs());
        break;
      case 'description':
        this.setState({ description: e.target.value }, this.checkInputs());
        break;
      default:
        this.checkInputs();
    }
  }

  handleChangeSpeaker(e) {
    const selectedOptions = filter(e.target.options, option => option.selected);
    const selectedSpekersIds = map(selectedOptions, selectedOption => selectedOption.id);
    this.setState({ selectedSpekersIds }, this.checkInputs());
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(config.addEventRoute, this.createEventForSubmit());
    this.setState({ validationStateStart: null, validationStateDate: null });
  }

  createEventForSubmit() {
    return {
      type: this.state.type,
      start: dateValidation(this.state.date, this.state.start),
      duration: this.state.duration,
      location: this.state.location,
      description: this.state.description,
      speakers: this.state.selectedSpekersIds,
    };
  }

  checkInputs() {
    return () => {
      if (this.state.type &&
        this.state.date &&
        this.state.start &&
        this.state.duration &&
        this.state.location &&
        this.state.description &&
        this.state.selectedSpekersIds &&
        this.state.validationStateStart === 'success' &&
        this.state.validationStateDate === 'success') {
        this.setState({ submitDisabled: false });
        return false;
      }
      this.setState({ submitDisabled: true });
      return true;
    };
  }

  render() {
    const options = this.props.speakers.map(speaker => (
      <option key={speaker._id} id={speaker._id}>{speaker.name}</option>
      // <option key={speaker.id} id={speaker.id}>{speaker.name}</option>
    ));

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
              <FormGroup controlId="type" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Type
                </Col>
                <Col sm={10}>
                  <FormControl
                    componentClass="select"
                    placeholder="Type of event"
                    onChange={this.handleChange}
                  >
                    <option value="event">event</option>
                    <option value="lecture">lecture</option>
                    <option value="webinar">webinar</option>
                    <option value="workshop">workshop</option>
                    <option value="deadline">deadline</option>
                  </FormControl>
                </Col>
              </FormGroup>

              <FormGroup controlId="date" validationState={this.state.validationStateDate}>
                <Col componentClass={ControlLabel} sm={2}>
                  Date
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="01.01.2017"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="start" validationState={this.state.validationStateStart}>
                <Col componentClass={ControlLabel} sm={2}>
                  Start
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="19:00"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="duration" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Duration
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="120 min"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="location" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Location
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="Belarus, Minsk, Kuprevicha 1k2, room 402"
                    onChange={this.handleChange}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="speakers">
                <Col componentClass={ControlLabel} sm={2}>
                  Speakers
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="select" placeholder="Speakers" onChange={this.handleChangeSpeaker} multiple>
                    {options}
                  </FormControl>
                </Col>
              </FormGroup>

              <FormGroup controlId="description" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Description
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="textarea" placeholder="Description of event ..." onChange={this.handleChange} />
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
          <Modal.Footer>
            <AlertDismiss
              isAlert={this.props.isAlert}
              handleAlertDismiss={this.props.onHandleDissmiss}
              success={this.props.success}
            />
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showForm: state.adminFormsReducer.showEventForm,
    speakers: state.fetchDataReducer.trainersArray,
    isAlert: state.adminFormsReducer.isAlert,
    success: state.adminFormsReducer.success,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideEventAddForm: () => {
      dispatch(showEventForm(false));
    },
    onSubmit: (route, event) => {
      dispatch(request(route, event))
      .then(() => dispatch(fetchDataFromAPI(config.eventsRoute, config.speakersRoute)))
      .then(() => dispatch(isFetching(false)));
    },
    onHandleDissmiss: (isAler) => {
      dispatch(alert(isAler, undefined));
      dispatch(showEventForm(false));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminEventAddForm);

