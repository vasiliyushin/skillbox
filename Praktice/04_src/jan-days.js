// это функция, внутри которой нужно написать ваш код
// firstWeekDay будет задаваться в момент вызова функции, как в примере кода под ней
function januaryDays(firstWeekDay) {
  let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  let indexStartDay = 0;
  // console.log('Месяц будет начинаться с ', firstWeekDay);
  // определяем индкс дня недели, скоторого будет начинаться месяц
  for (let i = 0; i <= week.length - 1; i++) {
    if (week[i] === firstWeekDay) {
      indexStartDay = i;
      break;
    } else if (i === week.length - 1) {
      // console.log('Указанный день недели не распознан.');
    }
  }

  for (let i = 0; i <= 30; i++) {
    console.log(`${i + 1} января, ${week[indexStartDay]}`);
    indexStartDay++;
    if (indexStartDay === 7) indexStartDay = 0;
  }
}

// выполнение кода внутри функции
januaryDays('понедельник'); // вывести все дни недели января, если 1-я января - понедельник
januaryDays('среда'); // вывести все дни недели января, если 1-я января - среда
januaryDays('воскресенье'); // вывести все дни недели января, если 1-я января - воскресенье
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default januaryDays;
