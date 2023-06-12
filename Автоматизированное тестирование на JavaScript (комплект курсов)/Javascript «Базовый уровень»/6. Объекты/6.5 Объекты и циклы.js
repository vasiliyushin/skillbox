let computer = {
    usbPortCount: 8,
    chipset: 'AMD X570',
    socket: 'AM3/AM4',
}

console.log(Object.keys(computer)); //выводим названия свойства, например 'usbPortCount' 
console.log(Object.values(computer)); //выводим значение свойства, например 'AMD x570'
console.log(Object.entries(computer)); //выводим связку названия свойства и значения, например 'usbPortCount'б 8

for (let value of values) {
    console.log(value);
}

for (let entry of entries) {
    console.log(`${entry[0]}: ${entry[1]}`);
}

//так же, но более читаемо
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

//------

for (let key in computer) {
    if (!computer.hasOwnProperty(key)) {
        continue;
    }
    console.log(computer[key]);
}

//-----------

let digit = [1, 2, 3];

console.log(Object.values(digit));// [1, 2, 3]
console.log(Object.keys(digit)); // индексы ['0', '1', '2']
console.log(Object.entries(digit)); // комбинация индекс и значене [['0',1], ['1', 2], ['2',3]]

console.log(typeof{});//object
console.log(typeof[]);//object