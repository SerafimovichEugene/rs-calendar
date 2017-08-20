function createState(events, trainers, trainersArray, isFetching) {
  return {
    isFetching,
    events,
    trainers,
    trainersArray,
  };
}
const initialState = createState([], {}, [], false);

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      {
        return createState(state.events, state.trainers, state.trainersArray, action.isFetching);
      }
    case 'RECIEVED_DATA':
      {
        return createState(
          configureEvents(action.events),
          createTrainersDictionary(action.trainers),
          action.trainers,
          state.isFetching,
        );
      }
    default:
      return state;
  }
};

function msToMin(duration) {
  // const minutes = Math.floor(duration / 60000);
  return `~${duration} min`;
}

function configureEvents(events) {
  const temp = events;
  return temp.map((event) => {
    const date = new Date(event.start);
    event.date = date.getDate();
    event.month = date.getMonth();
    event.year = date.getFullYear();
    event.hour = date.getHours();
    event.minute = date.getMinutes();
    event.startAt = `${format(date.getDate())}
    .${format(date.getMonth() + 1)}
    .${date.getFullYear()} ${date.getHours()}:${format(date.getMinutes())}`;
    event.durationView = msToMin(event.duration);
    return event;
  });
}

function createTrainersDictionary(trainers) {
  const dictionary = {};
  trainers.forEach((trainer) => {
    dictionary[trainer._id] = { avatar: trainer.avatar, name: trainer.name };
    // dictionary[trainer.id] = { avatar: trainer.avatar, name: trainer.name };
  });
  return dictionary;
}

function format(date) {
  if (date < 10) {
    return [0] + date;
  }
  return date;
}

export default fetchDataReducer;
