function createState(showEventForm, showSpeakerForm, isAlert, success) {
  return {
    showEventForm,
    showSpeakerForm,
    isAlert,
    success,
  };
}

const initialModal = createState(false, false, false, undefined);

const adminFormsReducer = (state = initialModal, action) => {
  switch (action.type) {
    case 'SHOW_EVENT_FORM':
      {
        return createState(action.show, state.showSpeakerForm, state.isAlert, state.success);
      }
    case 'SHOW_SPEAKER_FORM':
      {
        return createState(state.showEventForm, action.show, state.isAlert, state.success);
      }
    case 'ALERT':
      {
        return createState(state.showEventForm, state.show, action.isAlert, action.success);
      }
    default:
      return state;
  }
};

export default adminFormsReducer;
