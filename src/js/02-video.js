import Player from '@vimeo/player';
import { save, load } from "./storage";

// 1. Ініціалізувати плєр.
// 2. Методом on() відстежити подію "timeupdate".
// 3. Написати функцію для збереження часу ввдтворення у локальне сховище.
// 4. При перезавантаженні сторінки через метод setCurrentTime() відновлювати відео на моменті зупинки.
// 5. Додати lodash.throttle.
// 6. Оновлювати час відтворення у сховищі не частіше, ніж раз на секунду.
// aria-valuenow атрибут, який показує час відео.

const CURRENT_TIME = "videoplayer-current-time";

function onTimeUpdate (data) {

}

player.on('timeupdate', onTimeUpdate);






