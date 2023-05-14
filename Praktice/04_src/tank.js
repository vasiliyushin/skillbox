// это функция, внутри которой нужно написать ваш код
// eslint-disable-next-line max-len
// roadMines (массив ячеек поля) будет задаваться в момент вызова функции, как в примере кода под ней
function moveTank(roadMines) {
  // console.log('вывод в консоль:');
  let position = 1; // наша позиция
  let searchMin = 0; // сколько раз мы встерили мину
  for (let i = 0; i <= roadMines.length - 1; i++) {
    if (roadMines[i] === false) {
      console.log(`танк переместился на ${position}`);
      position++;
    } else if (searchMin < 1) {
      console.log('танк поврежден');
      searchMin++;
    } else {
      console.log('танк уничтожен');
      break;
    }
  }
}

// вызов функции
// eslint-disable-next-line max-len
moveTank([false, false, false, false, false, false, false, false, false, false, false]); // танк проедет по полю без мин
moveTank([false, false, false, false, true, false, false, false, false, false]);
moveTank([false, false, false, false, true, false, true, false, false, false]);
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
