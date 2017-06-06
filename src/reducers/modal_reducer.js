const initialModal = createState(false, {});

function createState(showModal, event) {
    return {
        showModal: showModal,
        event: event
    }
}

const modal_reducer = (state = initialModal, action) => {
    
    switch (action.type) {
        case 'SHOW_EVENT':
            {               
                return createState(action.showEvent, action.event);
            }
        case 'HIDE_EVENT':
            {
                return createState(action.showEvent, action.event);
            }
        default:
            return state;
    }
}

export default modal_reducer;
