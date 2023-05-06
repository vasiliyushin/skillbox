/*
Задача 2
Цель задания:
Узнать, как преобразовывать строку в верхний/нижний регистр и извлекать произвольные куски из строки.

Что нужно сделать:
В переменных userName, userSurname даны имя и фамилия пользователя. 
При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно. 
Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы). 
Запишите результат в новые переменные и выведите их значения с помощью console.log. 
С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» 
или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным.

Проверка результата:
Для любых имени и фамилии в любом регистре должны выводиться такие же имя и фамилия, но первая буква у них большая, а все остальные — маленькие.

Что оценивается:
Код корректно выводит все сообщения в зависимости от значения переменных userName и userSurname.

Советы и рекомендации:
Для получения куска строки можно воспользоваться конструкцией str.substring(indexA, indexB), 
где str — название переменной с исходной строкой, indexA — целое число от нуля до длины строки, 
указывающее номер символа начала куска строки, indexB — целое число от нуля до длины строки, 
указывающее номер символа конца куска строки. Если indexB не указывать, то вы получите кусок от indexA до конца строки. 
Например, так можно получить первый символ строки: let first = str.substring(0, 1), а так — остаток строки: let last = str.substring(1). 
Конструкцию можно присвоить переменной, с которой потом можно работать как с обычной строкой. 
Для преобразования букв строки к верхнему регистру воспользуйтесь конструкцией str.toUpperCase(), к нижнему — str.toLowerCase(). 
Результат аналогично можно присвоить переменной.
*/

//Решение:

let userName = 'ВасИЛИЙ';
let userSurname = 'ЮШин';

console.log();
console.log('Цель задания: узнать, как преобразовывать строку в верхний/нижний регистр и извлекать произвольные куски из строки.');
console.log();
console.log(`Дано: до преобразования фамилия указана как ${userSurname}, a имя ${userName}`);
console.log();
console.log(`После преобразования:`);

/*
ход решения: 
1. сначала преобразуем слово к нижнему регистру целиком
2. затем разбиваем полученное слово на две части: "первая буква" и "остальная часть"
3. после первую букву делаем заглавной
4. затем выводим исправленный результат: "заглавная буква" + "остальная часть" 
*/

//Преобразуем для фамилии все буквы к нижнему регистру
let smallFullSurName = userSurname.toLowerCase();
//Для фамилии выделяем первую букву и остальную часть 
let otherLetterSurName = smallFullSurName.substring(1); //тут мы поместили в переменную otherLetterName все будквы фамилии в нижнем регистре (кроме первой)
//Преобразуем для фамилии первую букву к верхнему регистру
let firstLetterSurName = smallFullSurName.substring(0, 1); //тут мы выделили первую букву фамилии и положили ее в firstLetterSurName
let bigFirstLetterSurName = firstLetterSurName.toUpperCase(); //тут мы превели букву, которая лежит в firstLetterSurName к верхнему регистру
//выводим преобразованное имя
console.log(`Фамилия: ` + bigFirstLetterSurName + otherLetterSurName);

//Преобразуем для имени все буквы к нижнему регистру
let smallFullName = userName.toLowerCase();
//Для имени выделяем первую букву и остальную часть 
let otherLetterName = smallFullName.substring(1); //тут мы поместили в переменную otherLetterName все будквы имени в нижнемрегистре (кроме первой)
//Преобразуем для имени первую букву к верхнему регистру
let firstLetterName = smallFullName.substring(0, 1); //тут мы выделили первую букву имени и положили ее в firstLetterName
let bigFirstLetterName = firstLetterName.toUpperCase(); //тут мы превели букву, которая лежит в firstLetterName к верхнему регистру
//выводим преобразованное имя
console.log(`Имя: ` + bigFirstLetterName + otherLetterName);
console.log();
