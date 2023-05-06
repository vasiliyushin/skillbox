let teaVolue= 200;

console.log('Вы налили себе ' + teaVolue + 'мл. чая'); 

while (teaVolue > 0) {
    teaVolue -= 10; //сделали один глаток
    console.log('В чашке осталось ' + teaVolue + 'мл. чая');
}
console.log('Вы выпили весь чай');

//------------------

//в пистолете 5 патронов, вероятность выстрела 20%

do {
    console.log('Нажал на курок');
} while (Math.random() > 0.2);
console.log('Вам не повезло');