let computer = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
}

console.log(Object.keys(computer)); //выводим названия свойства, например 'usbPortCount' 
console.log(Object.values(computer)); //выводим значение свойства, например 'AMD x570'
console.log(Object.entries(computer)); //выводим связку названия свойства и значения, например 'usbPortCount'б 8

//--------------------------

let digit = 20;
let otherDigit = digit;

//исходное значение не мняется т.к. otherDigit копирует значение из digit
otherDigit += 5;

let obj = {
    model: 'VW Polo'
};
let otherObj = obj;

//obj и otherObj ссылаются на один и тот же объект, поэтому свойство поменяется и там и там
otherObj.model = 'Volkswagen Polo';

//-------------------------

let obj1 = { name: 'Какой-то объект'};
let obj2 = obj1;

//... и они равны
console.log(obj1 === obj2); //true

//obj2 меняет свое значение на ссылку к другому объекту, значение которого точнотакое же
obj2 = { name: 'Какой-то объект'};

//теперь obj1 и obj2 ссылаются на разыне объекты, получается они не равны 
console.log(obj1 === obj2); //false


//-------------------------

let me = {
    name:'Тимофей',
}

//при создании нового объекта - функция Object.assign изменит объект me т.к. он указан первым в списке  
let newMe = Object.assign(me, {name: 'Не Тимофей'}, {surName: 'Не Тиунов'});

//me и newMe - один и тот же объект, и мы егоизменили
console.log(me);
console.log(newMe);

console.log(me === newMe);//true

//--------------------------

let me1 = {
    name:'Тимофей',
}

//подмешиваем свойства в свежесозданный пустой объект 
let newMe1 = Object.assign({}, me, {name: 'Не Тимофей'}, {surName: 'Не Тиунов'});
//и делаем тоже самое спомощью spread
let newMeSpread = {...me, name: 'Не Тимофей', surName: 'Не Тиунов'};
//me и newMe - один и тот же объект, и мы егоизменили
console.log(me1); //Тимофей
