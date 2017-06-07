
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
                return createState([], [], true);
            }
        case 'RECIEVED_DATA':
            {
                return createState(configureEvents(action.events), action.trainers, false);
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
        return event;
    });
}

export default fetchData_reducer;
