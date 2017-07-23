export const isFetching = (isFetching) => ({
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

export const selectDate = date => ({
  type: 'SELECT_DATE',
  date,
});

export const today = displayView => ({
  type: 'TODAY',
  displayView,
});

export const week = currentWeek => ({
  type: 'WEEK',
  currentWeek,
});

export const month = () => ({
  type: 'MONTH',
});

export const showEvent = event => ({
  type: 'SHOW_WINDOW',
  event,
});

export const hideEvent = () => ({
  type: 'HIDE_WINDOW',
});

export const showAdminLogIn = () => ({
  type: 'SHOW_ADMIN_LOGIN_FORM',
});

export const hideAdminLogIn = () => ({
  type: 'HIDE_ADMIN_LOGIN_FORM',
});

export const adminLogInSubmit = credentials => ({
  type: 'ADMIN_LOGIN_SUBMIT',
  credentials,
});
