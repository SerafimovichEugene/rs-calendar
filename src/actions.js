export const fetchData = (eventsURL, trainersURL) => {
    return dispatch => {
        dispatch(isFetching(true));
        return (            
            Promise.all([fetch(eventsURL), fetch(trainersURL)])
            .then(responses => 
                Promise.all(responses.map(response => {
                    return response.json();
                }))
            )
            .then(jsons => {
                dispatch(recievedData(jsons[0], jsons[1]));
                dispatch(today());
            })
            .catch(err => {
                console.log(err.message);
            }));
    }
}

const isFetching = (isFetching) => {
    return {
        type: 'IS_FETCHING',
        isFetching: isFetching
    }
}

const recievedData = (events, trainers) => {
    return {
        type: 'RECIEVED_DATA',
        events: events,
        trainers: trainers
    }
}

export const nextMonth = (month) => {
    return {
        type: 'NEXT_MONTH',
        month: month
    }
}

export const prevMonth = (month) => {
    return {
        type: 'PREV_MONTH',
        month: month
    }
}

export const nextWeek = (week) => {
    return {
        type: 'NEXT_WEEK',
        week: week
    }
}

export const prevWeek = (week) => {
    return {
        type: 'PREV_WEEK',
        week: week
    }
}

export const selectDate = (date) => {
    return {
        type: 'SELECT_DATE',
        date: date
    }
}

export const today = () => {
    return {
        type: 'TODAY'
    }
}

export const week = () => {
    return {
        type: 'WEEK'
    }
}

export const month = () => {
    return {
        type: 'MONTH'
    }
}

export const showEvent = (event) => {
    return {
        type: 'SHOW_WINDOW',
        event: event
    }
}

export const hideEvent = () => {
    return {
        type: 'HIDE_WINDOW'
    }
}
