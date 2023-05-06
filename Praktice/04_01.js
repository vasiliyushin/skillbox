let fruits = ['Яблоко', 'Апельсин', 'Груша', 'Банан', 'Манго'];

console.log('Сегодня я съел:');

for (let fruit of fruits) {
    console.log(fruit);
}

console.log();

for (let mango of fruits) {
    if (mango = 'Манго1') {
        console.log('В массиве есть Манго');
    } else {
        console.log('В массиве есть и другие фрукты, например: ' + mango);
    }   
}
