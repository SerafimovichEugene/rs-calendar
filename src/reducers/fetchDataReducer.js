function createState(events, trainers, isFetching) {
  return {
    isFetching,
    events,
    trainers,
  };
}
const initialState = createState([], [], false);

const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      {
        return createState([], [], action.isFetching);
      }
    case 'RECIEVED_DATA':
      {
        return createState(
          configureEvents(action.events),
          createTrainersDictionary(action.trainers),
          false,
        );
      }
    default:
      return state;
  }
};

function msToMin(duration) {
    // let minutes = parseInt((duration / (1000 * 60)) % 60);
    // let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // return '~' + hours + ":" + minutes;
  const minutes = Math.floor(duration / 60000);
  return `~${minutes} min`;
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
    event.startAt = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    event.durationView = msToMin(event.duration);
    return event;
  });
}

function createTrainersDictionary(trainers) {
  const dictionary = {};
  trainers.forEach((trainer) => {
    dictionary[trainer.id] = { avatar: trainer.avatar, name: trainer.name };
  });
  return dictionary;
}

export default fetchDataReducer;
