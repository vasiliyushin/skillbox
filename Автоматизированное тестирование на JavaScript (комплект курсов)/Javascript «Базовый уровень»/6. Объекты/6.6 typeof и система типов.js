//простые
typeof 1; //number
typeof 'abc'; //string
typeof false; //boolean
typeof 123n; //bigint
typeof Symbol(); //symbol

//составные
typeof {}; //object
typeof []; //object
typeof function(){}; //function

//нулевые
typeof undefined; //undefined
typeof null; //object

//расхождение typeof и системы типов
typeof null;//object, хотя реальныйтип значения null
typeof function() {}; //function, хотя в системе типов функция не выделется в отдльный тип

//пример использования
function getStringValue(unknown) {
    if (typeof unknown === 'string') {
        return unknown;
    }
    if (typeof unknown === 'function') {
        return unknown;
    }
    if (typeof unknown === 'object') {
        return unknown.toString();
    }
    return '';
}