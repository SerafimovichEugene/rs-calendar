export const isFetching = isFetching => ({
  type: 'IS_FETCHING',
  isFetching,
});

export const recievedData = (events, trainers) => ({
  type: 'RECIEVED_DATA',
  events,
  trainers,
});

export const nextMonth = month => ({
  type: 'NEXT_MONTH',
  month,
});

export const prevMonth = month => ({
  type: 'PREV_MONTH',
  month,
});

export const nextWeek = week => ({
  type: 'NEXT_WEEK',
  week,
});

export const prevWeek = week => ({
  type: 'PREV_WEEK',
  week,
});

export const display = ([month, week, admin]) => ({
  type: 'DISPLAY',
  displayMonth: [month, week, admin][0],
  displayWeek: [month, week, admin][1],
  displayAdmin: [month, week, admin][2],
});

export const today = () => ({
  type: 'TODAY',
});

export const showEvent = event => ({
  type: 'SHOW_WINDOW',
  event,
});

export const hideEvent = () => ({
  type: 'HIDE_WINDOW',
});

export const showSignInForm = isShow => ({
  type: 'SHOW_ADMIN_LOGIN_FORM',
  isShow,
});

export const signIn = (token, userName) => ({
  type: 'SIGN_IN',
  token,
  userName,
});

export const signOut = () => ({
  type: 'SIGN_OUT',
});

export const showAdminPanel = isShow => ({
  type: 'SHOW_ADMIN_PANEL',
  isShow,
});

export const showEventForm = show => ({
  type: 'SHOW_EVENT_FORM',
  show,
});

export const showSpeakerForm = show => ({
  type: 'SHOW_SPEAKER_FORM',
  show,
});

export const changeTab = currentTab => ({
  type: 'CHANGE_TAB',
  currentTab,
});

export const alert = (isAlert, success) => ({
  type: 'ALERT',
  isAlert,
  success,
});

