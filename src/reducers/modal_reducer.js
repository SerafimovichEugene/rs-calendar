const initialModal = createState({}, false, false);

function createState(event, showEvent, showDeadline) {
    return {
        showEvent: showEvent,
        showDeadline: showDeadline,
        event: event
    }
}

const modal_reducer = (state = initialModal, action) => {
    
    switch (action.type) {
        case 'SHOW_WINDOW':
            {
                // let showEvent= false;
                // let showDeadline= false;
                // if (action.event.type === 'webinar' || action.event.type === 'lecture' || action.event.type === 'event') {
                //     showEvent = true;
                //     console.log("action event type");
                // }
                // else if(action.event.type === 'deadline'){
                //     showDeadline= true;
                // }

                return createState(action.event, true, true);
            }
 
        case 'HIDE_WINDOW':
            {
                return createState({}, false, false);
            }
        default:
            return state;
    }
}

export default modal_reducer;
