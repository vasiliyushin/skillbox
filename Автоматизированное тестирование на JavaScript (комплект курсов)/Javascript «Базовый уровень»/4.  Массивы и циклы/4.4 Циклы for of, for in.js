let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

console.log('Сегодня я съел:');

//на каждой итерации записываем в fruit один фрукт из fruits
for (let fruit of fruits) {
    console.log(fruit);
}

console.log();

for (let mango of fruits) {
    if (mango = 'Манго') {
        console.log('В массиве есть Манго');
    } else console.log('В массиве есть и другие фрукты, например: ' + mango);
}

//-------------------

let rating = ['Катя', 'Вася', 'Маша', 'Петя', 'Лена'];

console.log('Рейтинг студентов:');
for (let i in rating) {
    console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
}

//в примере выше i имет тип не number а строка, поэтому в момент сложения используется parseInt(i)