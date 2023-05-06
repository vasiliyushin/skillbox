/*
Задача 3

Цели:
Попрактиковаться в написании универсального кода, поддерживающего различные ситуации.
Научиться применять Math.random и другие функции объекта Math.

Что нужно сделать:
Напишите генератор двух случайных чисел в диапазоне между n и m включительно.
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
Выведите два произвольных числа в консоль с помощью console.log.
Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.


Проверка результата
Для проверки подставляйте различные значения m и n и смотрите на корректность результата.
Так как числа случайные, для одного набора входных параметров рекомендуется запустить код 5–10 раз.
Примеры чисел m и n, для которых алгоритм должен корректно работать:

n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10.

Критерии оценки
Алгоритм работает для любых значений m и n, корректно вычисляются дробные части и выводятся результаты сравнения.

Советы и рекомендации
Случайные числа от m до n мы уже генерировали на одном из занятий, так что сложность задачи не в этом.
Для определения максимального и минимального значения вы можете использовать специальные функции объекта Math (min/max),
о которых было рассказано в одном из видео этого модуля.
*/

let n = -5;
let m = 5;

let min = Math.min(m, n); //определяем начала нашего диапозона для случайных чисел
let max = Math.max(m, n); //определяем конец нашего диапозона для случайных чисел
//let d = Math.abs(n - m); //определяем сколько всего чисел в допустимом диапозоне

//генерируем два случайных числа в указаннои интервале
let a = Math.round(Math.random() * (max - min) + min);
let b = Math.round(Math.random() * (max - min) + min);

console.log(); //пропуск строки
console.log('Цель задачи:');
console.log('1. получить два случайных числа в пределах от', min, 'до', max);
console.log("2. вывести результаты их сравнения (>, <, ≥, ≤, ===, ≠)" );
console.log(); //пропуск строки
console.log('Первое сгенерированное число =', a);
console.log('Второе сгенерированное число =', b);
console.log(); //пропуск строки
console.log('Результат сравнения чисел:');
console.log('a = ', a);
console.log('b = ', b)
console.log('a > b', a > b);
console.log('a < b', a < b);
console.log('a ≥ b', a >= b);
console.log('a ≤ b', a <= b);
console.log('a = b', a === b);
console.log('a ≠ b', a !== b);
console.log(); //пропуск строки