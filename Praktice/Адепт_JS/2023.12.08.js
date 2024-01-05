/*
Напишите функцию, которая получает на вход два числа. Если оба числа чётные - функция возвращает их произведение.
Если оба нечётные - функция возвращает их сумму.
Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
*/

//решение
function processNumbers(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
      // Оба числа чётные
      return num1 * num2;
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
      // Оба числа нечётные
      return num1 + num2;
    } else {
      // Одно из чисел чётное, а второе нечётное
      return num1 % 2 === 0 ? num2 : num1;
    }
  }
  
  // Примеры использования
  console.log(processNumbers(2, 4));   // Вывод: 8 (произведение)
  console.log(processNumbers(3, 5));   // Вывод: 8 (сумма)
  console.log(processNumbers(6, 7));   // Вывод: 7 (нечётное число)

//-------------------------
  
//решение второй вариант
function processNumbers(firstNumber, secondNumber) {
    const evenFirstNnumber = firstNumber % 2 === 0;
    const evenSecondNumber = secondNumber % 2 === 0;
  
    if (evenFirstNnumber && evenSecondNumber) return firstNumber * secondNumber;
    if (!evenFirstNnumber && !evenSecondNumber) return firstNumber + secondNumber;
    return evenFirstNnumber ? secondNumber : firstNumber;
  }
  