let name = '';
let surName = '';

function getFullName() {
    return this.name + '' + this.surName;
}

let obj = { name, surName, getFullName };

console.log(obj.getFullName());

obj.whoAmI = function() {
    console.log(`Меня зовут ${this.name} ${this.surName}`);
}

obj.whoAmI();

delete obj.getFullName;

//ошибка: свойство уже не существует
console.log(obj.getFullName());

//добавляем функции другому объекту 2 раза сразными названиями
let otherObj = {
    someMethod: getFullName,
};
otherObj.someOtherMethod = getFullName;

//меня зовут undefined undefined т.к. в otherObj нет name и surName
console.log(otherObj.someMethod());
console.log(otherObj.someOtherMethod());

//this всегда принимает значение того объекта, который находится слева от точки