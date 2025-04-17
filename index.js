function christmasCountdown() {
    const christmasDate = new Date('December 25, 2025 00:00');
    const now = new Date();
    const diff = christmasDate - now;
    

    const msInSecond = 1000;
    const msInMinutes = 60 * 1000;
    const msInHours = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;
        
    const displayHour = Math.floor((diff%msInDay) / msInHours);
    document.querySelector('.hours').textContent = displayHour;
    
    const displayMinute = Math.floor((diff%msInHours) / msInMinutes);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinutes) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        merryChristmas();
    }
    
}

let timerID = setInterval(christmasCountdown, 1000);

function merryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'MERRY CHRISTMAS!!! HO-HO-HO!!!';
    heading.classList.add('red');
}

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


