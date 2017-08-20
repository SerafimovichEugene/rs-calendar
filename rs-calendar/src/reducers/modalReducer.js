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
