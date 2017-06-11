function createState(event, showEvent, showDeadline) {
  return {
    showEvent,
    showDeadline,
    event,
  };
}

const initialModal = createState({}, false, false);

const modalReducer = (state = initialModal, action) => {
  switch (action.type) {
    case 'SHOW_WINDOW':
      {
        // let showEvent= false;
        // let showDeadline= false;
        // if (action.event.type === 'webinar' ||
        // action.event.type === 'lecture' ||
        // action.event.type === 'event')
        // {
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
};

export default modalReducer;
