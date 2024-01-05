/*
Напишите функцию-генератор пароля. В пароле должны обязательно быть большие и маленькие буквы, цифры, также символы !@#$%. 
Длина пароля должна задаваться входным параметром функции, но быть не меньше 6 символов.
*/

const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%";
function getRandomPassword(passLen) {
    let ans = "";
    for (let i = 0; i < passLen; i++) {
        cur = Math.floor(Math.random() * alph.length);
        ans += (cur < 26 && Math.floor(Math.random()*2)) ? alph[cur].toLowerCase() : alph[cur];
    }
    return ans
}

//---

//на подумать
// Допустимые группы символов
const allowed = {
    uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    lowers: "qwertyuiopasdfghjklzxcvbnm",
    numbers: "1234567890",
    symbols: "!@#$%",
  };
  
  // Получение рандомного символа
  function getRandomCharFromString(str) {
    return str.charAt(Math.floor(Math.random() * str.length));
  }
  
  // Генерация уникальных индексов
  function generateRandomIndex(excluded, length) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * length);
    } while (excluded.includes(randomNumber));
    return randomNumber;
  }
  
  // Функция генерации пароля
  function generatePassword(length = 6) {
    if (length < 6) {
      length = 6;
    }
    let pwd = [];
  
    // Получение индексов для обязательных символов
    const indexes = [];
    for (let i = 1; i <= 4; i++) {
      indexes.push(generateRandomIndex(indexes, length));
    }
    // Записываем обязательные символы
    pwd[indexes[0]] = getRandomCharFromString(allowed.uppers);
    pwd[indexes[1]] = getRandomCharFromString(allowed.lowers);
    pwd[indexes[2]] = getRandomCharFromString(allowed.numbers);
    pwd[indexes[3]] = getRandomCharFromString(allowed.symbols);
  
    // Записываем все остальные символы
    const allSymbols = Object.values(allowed).join("");
    for (let i = 0; i < length; i++)
      if (!indexes.includes(i)) {
        pwd[i] = getRandomCharFromString(allSymbols);
      }
    return pwd.join("");
  }