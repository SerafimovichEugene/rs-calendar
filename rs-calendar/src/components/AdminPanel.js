import React from 'react';
import { connect } from 'react-redux';
import { Row, Button, ButtonGroup } from 'react-bootstrap';
import AdminEventRow from './AdminEventRow';
import AdminSpeakerRow from './AdminSpeakerRow';
import deleteRequest from '../helpers/deleteRequest';
import { isFetching } from '../actions';
import config from '../config';

class AdminPanel extends React.Component {
  render() {
    let adminContentRows = null;
    switch (this.props.currentTab) {

      case 'events':
        {
          adminContentRows = this.props.events.map(event => (
            <AdminEventRow
              key={event._id}
              id={event._id}
              eventType={event.type}
              eventStartAt={event.startAt}
              eventLocation={event.location}
              deleteRow={this.props.deleteEvent}
              
            />
          ));
          break;
        }
      case 'speakers':
        adminContentRows = this.props.speakers.map(speaker => (
          <AdminSpeakerRow
            key={speaker._id}
            id={speaker._id}
            name={speaker.name}
            avatar={speaker.avatar}
            deleteRow={this.props.deleteSpeaker}
          />
        ));
        break;
      default:
        console.log('currentTab undefined');
    }

    return (
      <div
        className="container"
        id="adminPanel"
        style={{
          display: (this.props.showAdminPanel) ? 'block' : 'none',
        }}
      >
        <Row>
          <ButtonGroup>
            <Button
              bsStyle={this.props.currentTab === 'events' ? 'primary' : 'default'}
              className="eventsTab"
              onClick={() => { this.props.onTab('events'); }}
            >
              Events
            </Button>
            <Button
              bsStyle={this.props.currentTab === 'speakers' ? 'primary' : 'default'}
              className="speakersTab"
              onClick={() => { this.props.onTab('speakers'); }}
            >
              Speakers
            </Button>
          </ButtonGroup>
          <Button
            className="pull-right"
            onClick={() => { this.props.onAdd(this.props.currentTab); }}
          >
            <span className="glyphicon glyphicon-plus" />
          </Button>
        </Row>
        <Row className="adminContent">
          {adminContentRows}
        </Row>


        {/* <Tabs
          activeKey={this.props.key}
          onSelect={this.handleSelect}
          bsStyle="pills"
          id="admin-tab"
        >
          <Tab eventKey={1} title="Events">{adminEventRows}</Tab>
          <Tab eventKey={2} title="Speakers">{adminSpeakerRow}</Tab>
        </Tabs> */}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteEvent: (id) => {
      dispatch(deleteRequest(config.deleteEvent, id)).then(() => dispatch(isFetching(false)));
    },
    deleteSpeaker: (id) => {
      dispatch(deleteRequest(config.deleteSpeaker, id)).then(() => dispatch(isFetching(false)));
    },
  };
}

export default connect(null, mapDispatchToProps)(AdminPanel);
