/*
Задача 1

Цель задания:
Научиться искать подстроку внутри строки и попрактиковаться со сложными условиями.

Что нужно сделать:
В переменную password запишите строку с любым произвольным паролем. 
Проверьте надёжность пароля с помощью условного оператора if. 
Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание. 
Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».

Советы и рекомендации:
Для проверки наличия в строке другой строки можно воспользоваться конструкцией password.includes('x'), где 'x' — строка для поиска. 
Поэкспериментируйте с этой командой, посмотрите, что она будет выводить в консоль, попробуйте подставить разные параметры. 
Это поможет понять принцип её работы.

Проверка результата
Для проверки запустите код с разными вариантами надёжных и ненадёжных паролей. 

Примеры корректных паролей:
1234-
4321_
qaz-xsw
_zxd

Примеры некорректных паролей:
_-a
qaz
_-3
123456789

Что оценивается: код корректно выводит сообщение в зависимости от значения переменной password.
*/

//Решение:

let password = 'qaz-xsw';

console.log();
console.log('В данный момент используется пароль:', password);
if (password.length > 3 && 
   (password.includes('-') || password.includes('_'))
    ) {
        console.log('«Пароль надёжный»');
    } else {
        console.log('«Пароль недостаточно надёжный»');       
    }
console.log();
console.log('P.s. Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание.');    
console.log();