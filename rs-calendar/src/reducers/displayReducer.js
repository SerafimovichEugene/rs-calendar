function createState(displayMonth, displayWeek, displayAdmin) {
  return {
    displayMonth,
    displayWeek,
    displayAdmin,
  };
}

const initialModal = createState(true, false, false);

const modalReducer = (state = initialModal, action) => {
  switch (action.type) {
    case 'DISPLAY':
      {
        return createState(action.displayMonth, action.displayWeek, action.displayAdmin);
      }
    default:
      return state;
  }
};

export default modalReducer;
