// import events from 'json-loader!./events.json';

// console.log(events);
// console.log(JSON.parse(events));

export default function parseDate() {
    const date = new Date('2017-06-11T07:23:50Z');
    console.log('date ', date.getDate());
    console.log('month ', date.getMonth());
    console.log('year ', date.getFullYear());
    console.log('hours ', date.getHours());
    console.log('minutes ', date.getMinutes());
    console.log('seconds ', date.getSeconds());


    console.log(date);

} 
