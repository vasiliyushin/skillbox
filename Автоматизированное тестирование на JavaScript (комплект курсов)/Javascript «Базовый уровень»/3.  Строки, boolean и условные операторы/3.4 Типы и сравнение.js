true === true //true
true !== true //false
true === false //false
true !== false //true

"Строка" === 'Строка' //true
'Строка' === `Строка` //true
`Строка` === "Строка" //true

"Строка" === 'Строка' === `Строка` /*false т.к. важен порядок вычислений
тут сначала идет сравнение ("Строка" === 'Строка'), где результат будет true
а затем этот полученный true будет сравниваться с третей строкой (true === `Строка`) и т.к. идет сравнение разныхтипов, товернется false
*/

'Строка1' !== 'Строка2' //true

// === и !== всегда вернет false если идет сравнение разных типов
false !== 0; //true
true !== 1; //true
0 !== ''; //true
3 !== '3'; //true
false !== ''; //true
true !== 'true'; //true

//сравнение строк происходит посимвольно по кодам символа, условно "по алфавиту"
'z' > 'a'; //true т.к. 122 > 97
'az' > 'axzzz'; //true т.к. сравниваем посимвольно, сначала a===a, значит идем дальше, где по факту (z > x). Получается нашли результат (true) и дальше не проверяем 
'z' > 'Z'; //true 122 > 90 (большие буквы в кодировке идут раньше чем маленькие)
'10' < '5'; //true т.к. сравниваем посимвольно и при первом сравнении 1 < 5
'10' > '05'; //true (добавили к 5 слева ноль, чтобы уровнять количество разрядов) 

//Внимание: ниже запрещенная черная магия =)

//сравнение строк и чисел
'10' > 5; //true
10 > '5'; //true
10 > 'x'; //false т.к. "x" не число (в итоге 10 > NaN)
10 < 'x'; //false т.к. "x" не число (в итоге 10 < NaN)

//сравнение с boolean всегда сводятся к сравнению чисел, где true это 1, а false это 0
1 > false; //true 1 > 0
0 < true; //true 0 < 1
'10' > true; //true 10 > 1
'1' > true; //false 1 > 1
'1' > false; //true 1 > 0
'x' > true; //false т.к. "x" не число (в итоге NaN > 1)

//вывод: строка содержащая в себе число - будет приобразована в число при сравнении с числом. Boolean тоже будет приобразован в число, когда сравнивается с числом