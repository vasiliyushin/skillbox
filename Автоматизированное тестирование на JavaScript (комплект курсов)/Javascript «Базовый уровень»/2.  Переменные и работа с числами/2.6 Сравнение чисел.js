let x = 10;
let y = 20;

console.log(x === y); //false
console.log(x === 10); //true

console.log(x !== y); //true т.к. тут условие что X не равен Y
console.log(y !== 20); //false

console.log(x > y); //false 
console.log(x < y); //true

console.log(x >= y); //false
console.log(x <= y); //true

//------------------------------------------------------------

//Сравнение с бесконечностью (Infinity - это бесконечнсть)
Infinity > 100500; //true т.к. бесконечность боьше любого числа
- Infinity < -100500; //true т.к. минус бесконечность меньше любого числа
100500 / 0; // Infinity (при делении на ноль будет бесконечность)

//дальше интереснее
Infinity === Infinity; //true

Infinity > Infinity; //false
Infinity < Infinity; //false

Infinity >= Infinity; //true
Infinity <= Infinity; //true

Infinity + Infinity; //Infinity
-Infinity - Infinity; //-Infinity

Infinity - Infinity; //NaN (нан - означает что мы делаем что-то недопустимое)
-Infinity + Infinity; //NaN (по другому "нот э намбер")
Infinity / Infinity; //NaN

Infinity / 10; //Infinity
Infinity * 10; //Infinity
Infinity ** 10; //Infinity (тут бесконечность возвели в десятую степень)
Infinity ** Infinity; //Infinity

Infinity ** -Infinity; //0
(-Infinity) ** Infinity; //Infinity

//лучше не использовать бесконечность без явной на то причины 
