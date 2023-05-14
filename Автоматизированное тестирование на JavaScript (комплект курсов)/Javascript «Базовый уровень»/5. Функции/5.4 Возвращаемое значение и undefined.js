//функция с двумя аргументами
//при этом второй аргумент имеет значение по умолчанию

//тут переделали функцию из урока 5.3 чтобыона возвращала индекс найденной карты
function findCardIndex(cards, wantedCard = 'Туз') {
    console.log(`Ищем ${wantedCard} в колоде...`);
    let foundIndex = -1; //пишем -1 потому что индекса -1 не существует, и если вернется -1, то это значит что мы не нашли нужную карту 
    for (let index in cards) {
        let card = cards[index];
        console.log(`Из колоды вытянута карта: ${card}`);
        if (card === wantedCard) {
            foundIndex = index;
            break
        }
    }
    console.log(foundIndex > -1 ? `Мы нашли карту ${wantedCard}!` : `В колоде нет карты ${wantedCard}.`);

    return foundIndex;
}

//существующая колода
let myCards = ['2', '9', 'Король', 'Туз', 'Дама', 'Король'];

let aceIndex = findCardIndex(myCards);
let jackIdex = findCardIndex(myCards, 'Валет');

console.log(aceIndex);
console.log(jackIdex);


//------------------

//переделаем функцию выше и поместим return внутрь цикла for

function findCardIndexReturn(cards, wantedCard = 'Туз') {
    console.log(`Ищем ${wantedCard} в колоде...`);
    for (let index in cards) {
        let card = cards[index];
        console.log(`Из колоды вытянута карта: ${card}`);
        if (card === wantedCard) {
            console.log(`Мы нашли карту ${wantedCard}!`);
            return index;
            //break (убрали, потому что после возврата функции - for тоже перестанет работать)
        }
    }
    console.log(`В колоде нет карты ${wantedCard}.`);
    return -1;
}

//существующая колода
//let myCards = ['2', '9', 'Король', 'Туз', 'Дама', 'Король'];

let aceIndexReturn = findCardIndexReturn(myCards);
let jackIdexReturn = findCardIndexReturn(myCards, 'Валет');

console.log(aceIndexReturn);
console.log(jackIdexReturn);

//---------------------------

function checkAge(age) {
    console.log(`Вам ${age} лет.`);
    if (age >= 18) return;
    console.log('Вам нет 18 лет.');
    console.log(`Потерпите еще ${18 - age} лет до совершеннолетия.`);
}

checkAge(2); //Вам нет 18 лет.
//Потерпите еще 16 лет до совершеннолетия.

checkAge(25); //Вам 25 лет.
//----------------------------

function doNothing (){
    console.log('Я ничего не деаю');
}

console.log(doNothing()); //undefined
let x = doNothing();
console.log(x); //undefined