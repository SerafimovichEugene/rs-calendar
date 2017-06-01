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
        this.format = 'dd/mm/yyyy';
        this.currentDate = new Date();
        this.currentMonth = this.currentDate.getMonth();
        this.currentYear = this.currentDate.getFullYear();
        this.currentDayOfWeek = this.currentDate.getDay();
        this.currentDate = this.currentDate.getDate();
        this.daysInCurrentMonth = this.daysInMonth(this.currentYear, this.currentMonth);
    }

    daysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    getCalendarData(year, month) {
        const daysInMonth = this.daysInMonth(year, month);
        let calendarDataArray = [];
        for(let i = 1; i <= daysInMonth; i++){
            const tempDate = new Date(year, month, i);
            calendarDataArray.push({date: i, day: tempDate.getDay()});
        }
        if(calendarDataArray[0].day !== 1) {
            const daysInPrevMonth = this.daysInMonth(year, month - 1);
            if (calendarDataArray[0].day !== 0) {
                let tempDays = daysInPrevMonth;
                for (let i = calendarDataArray[0].day - 1; i > 0; i--) {
                    const tempDate = new Date(year, month - 1, tempDays--);
                    calendarDataArray.unshift({date: tempDate.getDate(), day: i});
                }
            }
            else {
                let tempDays = daysInPrevMonth;
                for (let i = 6; i > 0; i--) {
                    const tempDate = new Date(year, month - 1, tempDays--);
                    calendarDataArray.unshift({date: tempDate.getDate(), day: i});
                }
            }
        }
        const lastDateInCurrMonth = calendarDataArray[calendarDataArray.length - 1];
        if(lastDateInCurrMonth.day > 0) {
            let date = 1;            
            for(let i = lastDateInCurrMonth.day + 1; i <= 6; i++) {
                calendarDataArray.push({date: date++, day: i});
            }
            calendarDataArray.push({date: date++, day: 0});
        }
        return calendarDataArray;
    } 
}


