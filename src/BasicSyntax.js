export function romanToInteger(str) {
    let result = 0;
    let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let keys = Object.keys(map);
    for (let i = 0; i < str.length; i++) {
        if (keys.indexOf(str[i]) < keys.indexOf(str[i + 1])) {
            result -= map[str[i]];
        } else result += map[str[i]];
    }
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    return result;
}
