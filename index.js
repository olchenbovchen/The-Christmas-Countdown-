let christmasDate = getChristmasDate();

function getChristmasDate() {
    const now = new Date();
    let year = now.getFullYear();
    let christmas = new Date(`December 25, ${year} 00:00`);
    if (now > christmas) {
        // Set the date for the next year
        christmas = new Date(`December 25, ${year + 1} 00:00`);
    }
    return christmas;
}

function christmasCountdown() {
    const now = new Date();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * msInSecond;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff % msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        merryChristmas();
        // Renew the Xmas Date
        christmasDate = getChristmasDate();
    }
}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!!!';
    heading.classList.add('red');

    setTimeout(() => {
        heading.textContent = 'Christmas Countdown';
        heading.classList.remove('red');
    }, 5000);
}

// Musik-Button
const button = document.querySelector('#btn');
const audio = document.querySelector('#myAudio');
let isPlaying = false;

button.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
});
