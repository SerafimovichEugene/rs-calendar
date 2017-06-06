export default class eventsDataProvider {
    constructor() {
        this.events = [];
    }

    configureEvents() {
        if(this.events) {
            this.events.map((event) => {
                const date = new Date(event.start);
                event.date = date.getDate();
                event.month = date.getMonth();
                event.year = date.getFullYear();
                event.hour = date.getHours();
                event.minute = date.getMinutes();
                return event;
            });
        }
        else {condole.log('no events')}
        // console.log(this.events);
    }

    getEvents(eventsURL, loaded) {
        fetch(eventsURL).then(response => {
            return response.json();
        }).then((json) => {
            this.events = json;
            this.configureEvents();
            document.dispatchEvent(loaded);
        }).catch((err) => {
            console.log(err.message);
        });
    }
}