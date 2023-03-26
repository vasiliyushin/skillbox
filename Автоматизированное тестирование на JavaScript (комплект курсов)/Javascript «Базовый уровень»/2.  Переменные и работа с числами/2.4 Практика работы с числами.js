/*
Пример 1: вычисляе количество квартир в доме

дано количество подъездов,этаже и квартир на одном этаже
нужно вывести количество кваотир на этаже и во всемподъезде
*/

//количество подъездов
let entrances = 4;
//количество этажей
let floors = 9;
//количество квартир на этаже
let flatsPerFloor = 4;
//количство квартир в подъезде
let flatsPerEntrances = floors * flatsPerFloor;
console.log('Квартир в подъезде:', flatsPerEntrances);
//количество квартир в доме
let flats = entrances * flatsPerEntrances;
console.log('Всего квартир в доме:', flats);

/*
Пример 2: пропорции для рецепта кровавой Мери

Даны пропорции ингредиентов для кровавой Мери и объем напитка, который нужно получить.
Нужно вычислить объем ингредиентов из этих данных
*/

//ингредиенты
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

//желаемый объем напитка
let volume = 500;

//коэффицент для получения объема ингредиента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

//сколько нужно водки для желаемого объема кровавой Мери
console.log(k * vodka);

/* Пример 3: вычисление дискриминанта и решения квадратного уравнения a*x*x + b*x + c = 0

даны: параметры A, B и С для квадратного уравнения
нужно: вывести вохможное значение X для этого уравнения
*/

let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

//корень дискриминанта
let dRoot = Math.sqrt(d);
console.log('x1 = ', (-b + dRoot) / (2 * a));
console.log('x2 = ', (-b - dRoot) / (2 * a));

/* Пример 4: вычисляем N чисел ряда Фибоначи

Суть: каждое следующее число - это сумма двух предыдущих
*/

//определяем количество нужных 

let n = 10

let current = 0;
let prev = 1;
let prevPrev = 0;

while (n-- > 0) {
    prevPrev = prev;
    prev = current;
    current +=prevPrev;
    console.log(current);
}