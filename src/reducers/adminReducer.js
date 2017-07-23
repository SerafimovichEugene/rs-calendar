function createState(showAdminLogIn) {
  return {
    showAdminLogIn,
  };
}

const initialModal = createState(false);

const adminReducer = (state = initialModal, action) => {
  switch (action.type) {
    case 'SHOW_ADMIN_LOGIN_FORM':
      {
        return createState(true);
      }
    case 'HIDE_ADMIN_LOGIN_FORM':
      {
        return createState(false);
      }
    case 'ADMIN_LOGIN_SUBMIT':
      {
        return createState(false);
      }
    default:
      return state;
  }
};

export default adminReducer;
