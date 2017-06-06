let monthId = 0;

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

export const today = (view) => {
    return {
        type: 'TODAY',
        view: view
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

export const selectEvent = (event) => {
    return {
        type: 'SELECT_EVENT',
        event: event
    }
}

