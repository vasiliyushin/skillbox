function greet(who = 'незнакомец') {
    console.log(`Привет, ${who}`);
}

greet('Петя'); // Привет, Петя
greet('Вася'); // Привет, Вася
greet('Маша'); // Привет, Маша
greet(); // Привет, незнакомец

//---------------

//функция с двумя аргументами
//при этом второй аргумент имеет значение по умолчанию

function findCard(cards, wantedCard = 'Туз') {
    console.log(`Ищем ${wantedCard} в колоде...`);
    let found = false;
    for (let card of cards) {
        console.log(`Из колоды вытянута карта: ${card}`);
        if (card === wantedCard) {
            found = true
            break
        }
    }
    console.log(found ? `Мы нашли карту ${wantedCard}!` : `В колоде нет карты ${wantedCard}.`);
}

//существующая колода
let myCards = ['2', '9', 'Король', 'Туз', 'Дама', 'Король'];

//ищем карту Туз в колоде
findCard(myCards);

//ищем кату 5 в колоде
findCard(myCards, '5');
