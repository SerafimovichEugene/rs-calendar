import React from 'react';
import {connect} from 'react-redux';
import { Modal } from 'react-bootstrap';
import { hideEvent } from '../actions';


class EventWindow extends React.Component {
    render() {
        console.log('in modal render', this.props.showModal);
        return(
            <div className="static-modal">
            <Modal show={this.props.showModal} onHide={() => {this.props.onHideEvent(false)}}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Text in a modal</h4>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={this.close}>Close</button>
                </Modal.Footer>
            </Modal>
        </div>

        )
        
    }
}


function mapStateToProps(state) {    
    return {showModal: state.modal_reducer.showModal,
            event: state.modal_reducer.event
    };
}

function mapDispatchToProps(dispatch) {
    return {       
        onHideEvent: (show) => {
            console.log('on hide', show);
            dispatch(hideEvent(show));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventWindow);
