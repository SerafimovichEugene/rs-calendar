import React from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from './Button';

export default class Navigation extends React.Component {
  render() {
    let signInButton = null;
    let signOutButton = null;
    let userName = null;
    let admin = null;

    if (this.props.userName) {
      userName = (
        <span className="adminName">
          {this.props.userName}
        </span>
      );
      signOutButton = (
        <Button
          name="Sign Out"
          className="btn btn-default admin"
          onChangePage={this.props.onSignOut}
        />
      );
      admin = (
        <Button
          icon="admin"
          className="btn btn-default admin"
          onChangePage={this.props.onDisplay}
          arg={[false, false, true]}
        />
      );
    } else {
      signInButton = (
        <Button
          name="Sign in"
          className="btn btn-default admin"
          onChangePage={this.props.onSignIn}
        />
      );
    }

    return (
      <div className="container">
        <div className="row" id="navigation">
          <ButtonGroup className="changeView">
            <Button
              name="Month"
              className="btn btn-default changeView"
              onChangePage={this.props.onDisplay}
              arg={[true, false, false]}
            />
            <Button
              name="Week"
              className="btn btn-default changeView"
              onChangePage={this.props.onDisplay}
              arg={[false, true, false]}
            />
            <Button
              name="Today"
              className="btn btn-default changeView"
              onChangePage={this.props.onToday}
            />
          </ButtonGroup>
          {admin}
          {signInButton}
          {signOutButton}
          {userName}
        </div>
      </div>
    );
  }
}
