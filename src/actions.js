export const fetchData = (eventsURL, trainersURL) => (dispatch) => {
  dispatch(isFetching(true));
  return (
    Promise.all([fetch(eventsURL), fetch(trainersURL)])
    .then(responses =>
      Promise.all(responses.map((response) => response.json())),
    )
    .then((jsons) => {
      dispatch(recievedData(jsons[0], jsons[1]));
      dispatch(today());
    })
    .catch((err) => {
      alert(err.message);
    })
  );
};

const isFetching = isFetching => ({
  type: 'IS_FETCHING',
  isFetching,
});

const recievedData = (events, trainers) => ({
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
