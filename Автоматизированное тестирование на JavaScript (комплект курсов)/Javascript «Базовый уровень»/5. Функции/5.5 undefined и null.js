let socket = null; //розетка к которой ничего не подключено, и для нас это важно

socket = 'Чайник'; //подключаем чаник к розетке
socket = null; //отключили чайник от розетки

//-----------------

//переменная без значения
let emptyVariable;

console.log(emptyVariable); //undefined

let array = [1, 2, 3];

console.log(array[2]); //3
console.log(array[3]); //undefined
console.log(array[100500]); //undefined
console.log(array[-1]); //undefined

//сравнение с undefined
console.log(array[-1] === undefined); //true
console.log(array[0] === undefined); //false

function emptyFunction() {}

console.log(emptyFunction); //undefined

//------------------

let array_1 = [1, 2, 3, false, null, undefined];

//проверем, есть ли элемент с индексом 5
if (array_1[5] !== undefined) console.log('Элемент с индексом 5 есть'); //тут не сработает, т.к. элемент с индексом 5 равен undefined

//для поверки наличия элемента синдексом 5 в массиве - лучше использовать исследование длины массива
if (array_1.length > 5) console.log('Элемент с индексом 5 есть');

//явно задаем пустое значение
let emptyVar = null;