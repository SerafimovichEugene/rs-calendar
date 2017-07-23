import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import { hideAdminLogIn } from '../actions';

class AdminLogIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = { login: '', password: '' };

    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLogin(event) {
    this.setState({ login: event.target.value });
  }
  handleChangePass(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="static-modal">
        <Modal
          show={this.props.showAdminLogIn}
          onHide={() => {
            this.props.onHideAdminLogIn();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>{'Log In Form'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              horizontal
              onSubmit={this.handleSubmit}
            >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Login
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="Login"
                    onChange={this.handleChangeLogin}
                  />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePass}
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    Sign in
                  </Button>
                </Col>
              </FormGroup>

            </Form>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { showAdminLogIn: state.adminReducer.showAdminLogIn };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideAdminLogIn: () => {
      dispatch(hideAdminLogIn());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogIn);
