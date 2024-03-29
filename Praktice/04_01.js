/*
Задание 1
Цель задания
Научиться генерировать произвольные массивы. Научиться адаптировать существующий код под ситуацию.

Задание
Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, 
а также может быть n > m или n < m. Выведите результат с помощью console.log.

Проверка результата
Для проверки подставляйте различные значения count, m, n и смотрите на корректность результата. 
Примеры значений для проверки:

n = 0, m = 100, count = 100;
n = 2, m = 5, count = 50;
n = 100, m = -5, count = 70;
n = -3, m = -10, count = 42.
Критерии оценки
**Для count, m, n код генерирует соответствующий массив.

**Рекомендации к выполнению
Попробуйте использовать несколько видов циклов и выбрать тот, который вы считаете наиболее подходящим для решения задачи.
 */

//Решение:

//определяем границы диапозона, за которые не будут забегать числа при заполнения массива
let n = -5;
let m = 5;

let min = Math.min(m, n); //определяем начала нашего диапозона для случайных чисел
let max = Math.max(m, n); //определяем конец нашего диапозона для случайных чисел
//let d = Math.abs(n - m); //определяем сколько всего чисел в допустимом диапозоне

//указываем длинну массива
let count = 10;

//заполняем массив
let array = [];
for (let i = 0; i < count; i++) {
    let x = Math.round(Math.random() * (max - min) + min);
    //меняем элементы "-0" на "0"
    if (x === -0) {
        array.push(0);
    } else array.push(x);
}
console.log();
console.log(`Нужно заполнить массив, длинна которого равна ${count}
При этом элементы массива должны быть сгенерированны случайным образом в преелахот ${min} до ${max}`);
console.log();
console.log('Результат:');
console.log(array);
//генерируем два случайных числа в указаннои интервале
//let a = Math.round(Math.random() * (max - min) + min);
//let b = Math.round(Math.random() * (max - min) + min);