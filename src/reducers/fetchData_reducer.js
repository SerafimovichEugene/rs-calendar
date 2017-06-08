const initialState = createState([], [], false);

function createState(events, trainers, isFetching) {
    return {
        isFetching: isFetching,
        events: events,
        trainers: trainers
    }
}

const fetchData_reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_FETCHING':
            {
                return createState([], [], action.isFetching);
            }
        case 'RECIEVED_DATA':
            {
                return createState(configureEvents(action.events), createTrainersDictionary(action.trainers), false);
            }
        default:
            return state;
    }
}

function configureEvents(events) {
    return events.map((event) => {
        const date = new Date(event.start);
        event.date = date.getDate();
        event.month = date.getMonth();
        event.year = date.getFullYear();
        event.hour = date.getHours();
        event.minute = date.getMinutes();
        event.startAt = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes();
        event.durationView = msToTime(event.duration);
        return event;
    });
}

function msToTime(duration) {
    // let minutes = parseInt((duration / (1000 * 60)) % 60);
    // let hours = parseInt((duration / (1000 * 60 * 60)) % 24);
    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // return '~' + hours + ":" + minutes;
    let minutes = Math.floor(duration / 60000);
    return '~' + minutes + ' min';
}

function createTrainersDictionary(trainers) {
    let dictionary = {};
    trainers.forEach(trainer => {
        dictionary[trainer.id] = { avatar: trainer.avatar, name: trainer.name }
    });
    return dictionary;
}



export default fetchData_reducer;
