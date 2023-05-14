//объявление функции с названием functionName
function functionName() {
    //тело функции
    console.log('результат функции');
}

//вызов функции (для того, чтобы функция заработала - нужно ее вызвать)
functionName();

//присваиваем функцию переменной, в таком случае название функции можно опустить 
let functionAsVariable = function() {
    //тело функции
    console.log('результат функции из переменной');
}

//для вызова функции, которая была объявлена через переменную - используем вызов переменной, через которую была объявлена функция 
functionAsVariable();

//---------------------------------------

//примечание:

//нельзя вызвать функцию, объявленную через переменную, до того момента, как переменная была объявлена

//но функцию, которая была объявлена сразу как функция - можновызвать до тогомомента, как мы объявили эту функцию

//примеры:

//1)
functionName(); //будет выведено 'результат функции'

function functionName() {
    //тело функции
    console.log('результат функции');
}

//2)
functionAsVariable_2 (); //будет ошибка т.к. вызвана функция,которая в дальнейшем объявлена через переменную

let functionAsVariable_2 = function() {
    //тело функции
    console.log('результат функции из переменной');
}

