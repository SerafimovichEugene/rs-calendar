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
