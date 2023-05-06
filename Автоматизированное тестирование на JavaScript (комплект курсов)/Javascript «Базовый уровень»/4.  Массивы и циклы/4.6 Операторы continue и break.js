//колода
let cards = ['2', '9', 'Король', 'Туз', 'Дама', 'Король'];

//карты в руке
let hand = [];

for (let card of cards) {
    //выполняем для нечетного индекса 
    if (card !== 'Туз' && card !== 'Король') continue
    hand.push(card);
    console.log('Карта ' + cad + ' добавлена в руку.');
}
console.log('Карты вруке: ', cards);

//--------------------------------------------

console.log('Ищем даму в колоде...');

let found = false;

for (let card1 of cards) {
    console.log(`Из колоды вытянута карта: ${card1}`);
    if (card === 'Дама') {
        found = true
        break
    }
}
console.log(found ? 'Мы нашли даму!' : 'В колоде нет дамы.');

//----------------------------------------------

//цикл for
let i;
for (i = 0; i < 11; i += 2) {
    console.log(i);
}

//цикл while
let n = 0;
while (true) {
    if (n > 10) break
    console.log(i);
    i += 2;
}