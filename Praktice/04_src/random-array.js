// это функция, внутри которой нужно написать ваш код
// count, n и m будут задаваться в момент вызова функции, как в примере кода под ней
function randomArray(count, n, m) {
  // ваш код здесь

  let min = Math.min(m, n);
  let max = Math.max(m, n);

  // заполняем массив
  let array = [];
  for (let i = 0; i < count; i++) {
    let x = Math.round(Math.random() * (max - min) + min);
    // меняем элементы "-0" на "0"
    // eslint-disable-next-line no-compare-neg-zero
    if (x === -0) {
      array.push(0);
    } else array.push(x);
  }
  console.log(array);
}

// вызов функции
randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
randomArray(2, 5, 1); // вывести массив из 2-х случайных чисел от 1 до 5
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default randomArray;
