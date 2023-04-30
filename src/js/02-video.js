import Player from '@vimeo/player';
import {save, load} from './storage' 
// 1. Ініціалізувати плєр.
// 2. Методом on() відстежити подію "timeupdate".
// 3. Написати функцію для збереження часу відтворення у локальне сховище. (час брати із aria-value-now?)
// 4. При перезавантаженні сторінки через метод setCurrentTime() відновлювати відео на моменті зупинки.
// 5. Додати lodash.throttle.
// 6. Оновлювати час відтворення у сховищі не частіше, ніж раз на секунду.
// aria-valuenow атрибут, який показує час відео.

const STORAGE_KEY = "videoplayer-current-time";

const player = new Player('vimeo-player');


player.on('timeupdate', function() {
    console.log('played the video!');
});







