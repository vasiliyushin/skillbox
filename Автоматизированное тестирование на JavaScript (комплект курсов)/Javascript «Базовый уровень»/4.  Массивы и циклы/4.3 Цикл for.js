//цикл for нужен для того, чтобы выполнять одинаковые действия определенное количество раз

//ряд Фибоначи

let fibo = [];

fibo.push(1); //добавить вконец массива
fibo.push(1);
fibo.push(2); //в примере ниже это i=0
fibo.push(3); //в примере ниже это i=1
fibo.push(5); //в примере ниже это i=2
fibo.push(8); //в примере ниже это i=3
fibo.push(13); //в примере ниже это i=4 

//пример того же результата через цикл for

let forFibo = [1, 1]; //два первых числа нужно положить в массив, чтобы в дальнейшем получилось определить последовательность 

for (let i = 0; i < 5; i++) {
    fibo.push(forFibo[i] + forFibo.push[i + 1]);
}
console.log(forFibo);

//-------------------------

//цикл, который никогда не завершится и повесит вашу программу
for (;;) console.log('Я буду сниться тебе в кошмарах');

//цикл, который может завершиться на любой итерации с вероятностью 10%
for ( ; Math.random() >= 0.1; ) console.log('И еще разок');

//выносим инициализатор за предела цикла, а завершающую инструкцию в тело
let i = 10;
for (; i > 0;) {
    console.log('i=' + i--);
}

//вечный цикл, которыйбудет считаться, покане закончится память 
for (let i = 0;; ++i) {
    console.log(i);
}

//для того, чтобы выйти из цикла, нужно нажать "crtl c" или "ctrl w" ??