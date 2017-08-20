import React from 'react';
import { connect } from 'react-redux';
import { Modal, Form, FormControl, FormGroup, Col, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import { showSignInForm } from '../actions';
import config from '../config';
import signInRequest from '../helpers/signInRequest';

class AdminLogIn extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({ submitDisabled: true });
  }

  handleChangeLogin(event) {
    this.setState({
      login: event.target.value,
      validationState: null,
      errorIcon: false,
    });
    this.checkInputs(event.target.value, this.state.password);
  }
  handleChangePass(event) {
    this.setState({
      password: event.target.value,
      validationState: null,
      errorIcon: false,
    });
    this.checkInputs(event.target.value, this.state.login);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(config.authRoute, this.state.login, this.state.password, this); // ahahaha
  }

  checkInputs(login, password) {
    if (login && password) {
      this.setState({ submitDisabled: false });
    } else {
      this.setState({ submitDisabled: true });
    }
  }

  checkInputsvalidation() {
    if (!this.props.haveUserName) {
      this.setState({ validationState: 'error', errorIcon: true });
    }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal
          show={this.props.showSignInForm}
          onHide={() => {
            this.props.onHideSignInForm();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Log In Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              horizontal
              onSubmit={this.handleSubmit}
            >
              <FormGroup controlId="formHorizontalLogin" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Login
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    placeholder="Login"
                    onChange={this.handleChangeLogin}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword" validationState={this.state.validationState}>
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChangePass}
                  />
                  {this.state.errorIcon ? <FormControl.Feedback /> : ''}
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit" disabled={this.state.submitDisabled}>
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
  return {
    showSignInForm: state.adminReducer.showSignInForm,
    haveUserName: state.adminReducer.userName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onHideSignInForm: () => {
      dispatch(showSignInForm(false));
    },
    onSubmit: (route, login, pass, AdminLogInThis) => {
      dispatch(signInRequest(route, login, pass))
        .then(() => AdminLogInThis.checkInputsvalidation());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogIn);
