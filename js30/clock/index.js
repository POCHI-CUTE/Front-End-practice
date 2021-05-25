const hour = document.querySelector('.hour');
const min  = document.querySelector('.min');
const sec  = document.querySelector('.second');

function getDate() {
    const now = new Date();
    console.log(now);

    const TimeSec = now.getSeconds();
    const DegreeSec = ((TimeSec/60)*360)+90;
    sec.style.transform = `rotate(${DegreeSec}deg)`;

    const TimeMin = now.getMinutes();
    const DegreeMin = ((TimeMin/60)*360)+90;
    min.style.transform = `rotate(${DegreeMin}deg)`;


    const TimeHour = now.getHours();
    const DegreeHour = (TimeHour/24)*720 + 90;
    hour.style.transform = `rotate(${DegreeHour}deg)`;

}

setInterval(getDate, 1000)

getDate();