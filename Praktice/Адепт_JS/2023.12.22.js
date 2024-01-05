//Создайте функцию, которая группирует студентов по возрасту.

//На выходе требуется получить объект, где ключ – возраст, а значение – массив студентов, которые относятся к возрасту

//Массив студентов:
const student = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

//Нужно получить ответ в формате:
const studentsFilteredByAge = 
{
'20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
'24': [{ name: 'mike', age: 24 }],
'18': [{ name: 'stas', age: 18 }]
}

//----------------

//решение
let objs = [  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];

function groupBy(objArr, callback) {
    let res = {};
    for (let item of objArr) {
        let key = callback(item);
        if (res[key]) {
            res[key].push(item);
            continue;
        }
        res[key] = [item];
    }
    return res;
};

console.log(groupBy(objs, ({age}) => age));