import {chunk} from 'lodash';

export default class calendarDataProvider {
    constructor() {
        this.daysOfWeek = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ];
        this.months = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.currentDayOfWeek = this.currentDate.getDay();
        this.currentDate = this.currentDate.getDate();
        this.daysInCurrentMonth = this.daysInMonth(this.currentYear, this.currentMonth);
        this.currentMonthDataMatrix = chunk(this.getCalendarData(this.currentYear, this.currentMonth), 7);
        this.currentWeek = this.getCurrentWeek();
    }

    daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    getCurrentWeek() {
        const todayWeekIndex = this.currentMonthDataMatrix.findIndex((week) => {
            let toReturn = false;
            week.forEach((elem) => {
                if (elem.date == this.currentDate) {
                    toReturn = true;
                }
            });
            return toReturn;
        });
        return todayWeekIndex;
    }

    getCalendarData(year, month) {
        const daysInMonth = this.daysInMonth(year, month);
        let calendarDataArray = [];
        for(let i = 1; i <= daysInMonth; i++){
            const tempDate = new Date(year, month, i);
            calendarDataArray.push({date: i, day: tempDate.getDay(), month: tempDate.getMonth(), year: tempDate.getFullYear()});
        }
        if(calendarDataArray[0].day !== 1) {
            const daysInPrevMonth = this.daysInMonth(year, month - 1);
            if (calendarDataArray[0].day !== 0) {
                let tempDays = daysInPrevMonth;
                for (let i = calendarDataArray[0].day - 1; i > 0; i--) {
                    const tempDate = new Date(year, month - 1, tempDays--);
                    calendarDataArray.unshift({date: tempDate.getDate(), day: i, month: tempDate.getMonth(), year: tempDate.getFullYear()});
                }
            }
            else {
                let tempDays = daysInPrevMonth;
                for (let i = 6; i > 0; i--) {
                    const tempDate = new Date(year, month - 1, tempDays--);
                    calendarDataArray.unshift({date: tempDate.getDate(), day: i, month: tempDate.getMonth(), year: tempDate.getFullYear()});
                }
            }
        }
        const lastDateInCurrMonth = calendarDataArray[calendarDataArray.length - 1];
        if(lastDateInCurrMonth.day > 0) {
            let date = 1;
            const tempDate = new Date(year, month + 1);           
            for(let i = lastDateInCurrMonth.day + 1; i <= 6; i++) {                
                calendarDataArray.push({date: date++, day: i, month: tempDate.getMonth(), year: tempDate.getFullYear()});
            }            
            calendarDataArray.push({date: date++, day: 0, month: tempDate.getMonth(), year: tempDate.getFullYear()});
        }
        return calendarDataArray;
    } 
}


