let name = 'Тимофей';
let surname = 'Тиунов';
let middle = 'Сергеевич';

let me = {
    name: name,
    surname, // все равно что surname: surname
    middleName: middle,
    birthDate: { year: 1991, month: 3, day: 14},
    occupation: 'Системный архитектор',
    married: true,
    'property with spaces': null, //так обозначаем, если в название есть спец символы пробелы, точки и т д
    //undefined здесь просто дляпримера, использовать его в качестве
    // значениях в своих программах не нужно!
    'property.with.dots': undefined,  
};

//создаем новое свойство объекта
me.education = 'НИУ ВШЭ';
//изменяем существующее свойство
me.occupation = 'Безработный';

//те же действия со строками 
me['property with spaces'] = 42;
me['property.with.dots'] = 42;

//удаляем свойствоиз объекта
delete me.education;
delete me['property with spaces'];

//получаем значение свойства
let myName = me.name;
let myBirthYear = me.birthDate.year; //вложенное значение
let fourtyTwo = emptyObj['prperty with spaces']; //значение несуществующего свойства - undefined

let emptyProp = enptyObj.someProp;

//пустой объект
let emptyObj = {};

//пример
function printObjectProperty(obj,propName) {
    console.log(obj[propName]);
}

let me = {
    name: 'Тимофей',
    surname: 'Тиунов',
    middleName: 'Сергеевич',
    birthDate: { year: 1991, month: 3, day: 14},
    occupation: 'Системный архитектор',
    married: true,
};

printObjectProperty(me, 'name'); //Тимфей
printObjectProperty(me, 'middleName'); //Сергеевич

