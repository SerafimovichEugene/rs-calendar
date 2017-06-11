import React from 'react';
import Spinner from 'react-spinner-material';

export default class SpinnerCustom extends React.Component {
  render() {
    return (
      <div className="row" style={{ display: this.props.showSpinner ? 'block' : 'none' }}>
        <div className="col-xs-12" id="loading">
          <Spinner
            width={200}
            height={200}
            spinnerColor={'#333'}
            spinnerWidth={5}
            show={this.props.showSpinner}
          />
        </div>
      </div>
    );
  }
}
