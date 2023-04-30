import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// 1. Ініціалізувати плєр.
// 2. Методом on() відстежити подію "timeupdate".
// 3. Написати функцію для збереження часу відтворення у локальне сховище. (час брати із aria-value-now?)
// 4. При перезавантаженні сторінки через метод setCurrentTime() відновлювати відео на моменті зупинки.
// 5. Додати npm i lodash.throttle.
// 6. Оновлювати час відтворення у сховищі не частіше, ніж раз на секунду.
// aria-valuenow атрибут, який показує час відео.

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);


function onTimeUpd (dataTime) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataTime));
}

player.on('timeupdate', throttle(onTimeUpd, 1000));

function getSavedTime () {
    const savedTime = localStorage.getItem(STORAGE_KEY);
    
    if(!savedTime) {
        return
    }

    const parsedSavedTime = JSON.parse(savedTime);

    return parsedSavedTime.seconds
}


const currentTime = getSavedTime() ? getSavedTime() : 0;

player.setCurrentTime(currentTime);










