const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let datesHTML = '';
    for (let i = firstDayIndex; i > 0; i--) {
        const prevDate = new Date(currentYear, currentMonth, 1 - i);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? ' active' : '';
        datesHTML += `<div class="date${activeClass}">${i}</div>`;
    }

    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        const nextDate = new Date(currentYear, currentMonth + 1, i);
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
};

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});
nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();


const clock = document.getElementById("clock");
let clockHTML = '';
function realtimeClock() {
    
    var currTime = new Date();

    var hours = currTime.getHours();
    var minutes = currTime.getMinutes();
    var seconds = currTime.getSeconds();

    var amPm = ( hours < 12 ) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    // document.getElementById('clock').innerHTML = 
    //     hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
    // var t = setTimeout(realtimeClock, 500);
    // datesHTML += `<div class="clock inactive">${hours.getDate()}</div>`;
    // datesHTML += `<div class="clock inactive">${minutes.getDate()}</div>`;
    // datesHTML += `<div class="clock inactive">${seconds.getDate()}</div>`;
    clock.innerHTML = `${hours} : ${minutes} : ${seconds} ${amPm}`;
    setTimeout(realtimeClock, 500);

    // clock.innerHTML = clockHTML;

}
realtimeClock();