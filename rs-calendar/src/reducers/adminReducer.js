function createState(showSignInForm, userName, token, tab) {
  return {
    showSignInForm,
    userName,
    token,
    tab,
  };
}

const initialModal = createState(false, false, false, 'events');

const adminReducer = (state = initialModal, action) => {
  switch (action.type) {
    case 'SHOW_ADMIN_LOGIN_FORM':
      {
        return createState(action.isShow, state.userName, state.token, state.tab);
      }
    case 'SIGN_IN':
      {
        return createState(false, action.userName, action.token, state.tab);
      }
    case 'SIGN_OUT':
      {
        return createState(false, false, false, state.tab);
      }
    case 'SIGN_IN_ERROR':
      {
        return createState(true, state.userName, state.token, state.tab);
      }
    case 'CHANGE_TAB':
      {
        return createState(false, state.userName, state.token, action.currentTab);
      }
    default:
      return state;
  }
};

export default adminReducer;
